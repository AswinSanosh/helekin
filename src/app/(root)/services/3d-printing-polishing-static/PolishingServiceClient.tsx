"use client";

import Link from "next/link";
import Accordion from "@/components/GenericAccordion";
import { motion } from "framer-motion";
import Loading from "@/app/(root)/loading";
import { useEffect, useState, ChangeEvent, FormEvent } from "react";
import { FileRejection, useDropzone, DropzoneOptions } from "react-dropzone";
import ModelViewer from "./ModelViewer";

type FAQItem = {
  question: string;
  answer: string;
};

type ServiceData = {
  background: string;
  title: string;
  desc: string;
  "about-title": string;
  "about-desc": string;
  "whatweoffer-images": string[];
  "featured-projects-desc": string;
  "featured-projects-images": string[];
  "approach-title": string;
  "approach-desc": string;
  "service-FAQ": FAQItem[];
  consultQN: string;
  "consult-answer": string;
  link: string;
};

interface UploadResult {
  gcode_url: string;
  gcode_filename: string;
  estimated_time: string;
  filament_used_mm: string;
  filament_used_g: string;
  error?: string;
  logs?: string[];
}

export default function PolishingServiceClient({
  service,
}: {
  service: ServiceData;
}) {
  const [isLoading, setIsLoading] = useState(true);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);

  // slicing states
  const [loading, setLoading] = useState<boolean>(false);
  const [result, setResult] = useState<UploadResult | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [uploadProgress, setUploadProgress] = useState<number>(0);
  const [isProcessing, setIsProcessing] = useState<boolean>(false);

  // Preload images
  useEffect(() => {
    const imageUrls: string[] = [
      service.background,
      ...(service["whatweoffer-images"] || []),
      ...(service["featured-projects-images"] || []),
    ];
    let loadedCount = 0;
    if (imageUrls.length === 0) {
      setIsLoading(false);
      return;
    }
    imageUrls.forEach((src) => {
      const img = new Image();
      img.src = src;
      img.onload = img.onerror = () => {
        loadedCount++;
        if (loadedCount === imageUrls.length) setIsLoading(false);
      };
    });
  }, [service]);

  // Dropzone options
  const dropzoneOptions: DropzoneOptions = {
    accept: {
      "model/stl": [".stl"],
      "model/3mf": [".3mf"],
    },
    maxFiles: 1,
    maxSize: 50 * 1024 * 1024,
    onDrop: (acceptedFiles: File[], rejectedFiles: FileRejection[]) => {
      setResult(null);
      setError(null);
      if (rejectedFiles.length > 0) {
        setError("File too large or unsupported. Max 50MB, .stl/.3mf only.");
      }
      if (acceptedFiles.length > 0) {
        setUploadedFile(acceptedFiles[0]);
      }
    },
  };
  const { getRootProps, getInputProps, isDragActive } =
    useDropzone(dropzoneOptions);

  // Upload with progress
  const handleUpload = async (e: FormEvent) => {
    e.preventDefault();
    if (!uploadedFile) {
      setError("Please select a file first");
      return;
    }

    setLoading(true);
    setError(null);
    setResult(null);
    setUploadProgress(0);
    setIsProcessing(false);

    try {
      const formData = new FormData();
      const cleanFilename = uploadedFile.name.replace(/[^a-zA-Z0-9.-]/g, "_");
      formData.append("file", uploadedFile, cleanFilename);

      const xhr = new XMLHttpRequest();
      const uploadPromise = new Promise<UploadResult>((resolve, reject) => {
        xhr.upload.addEventListener("progress", (event) => {
          if (event.lengthComputable) {
            const progress = Math.round((event.loaded / event.total) * 100);
            setUploadProgress(progress);
            if (progress === 100) {
              setIsProcessing(true);
            }
          }
        });

        xhr.addEventListener("load", () => {
          try {
            const data = JSON.parse(xhr.responseText);
            if (xhr.status >= 200 && xhr.status < 300) {
              resolve(data);
            } else {
              reject(
                new Error(data.error || `Upload failed (status ${xhr.status})`)
              );
            }
          } catch {
            reject(new Error("Invalid response from server"));
          }
        });

        xhr.addEventListener("error", () => {
          reject(new Error("Network error. Check connection."));
        });
        xhr.addEventListener("timeout", () => {
          reject(new Error("Upload timeout. Try again."));
        });

        xhr.open("POST", "https://q-bit.in/upload-model/");
        xhr.timeout = 300000;
        xhr.send(formData);
      });

      const data = await uploadPromise;
      if (data.error) setError(data.error);
      else setResult(data);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message || "Upload failed, Try again.");
      } else {
        setError("Upload failed. Try again.");
      }
    } finally {
      setLoading(false);
      setUploadProgress(0);
      setIsProcessing(false);
    }
  };

  const handleDownload = () => {
    if (!result?.gcode_url) {
      setError("No G-code file available for download");
      return;
    }
    const link = document.createElement("a");
    link.href = result.gcode_url;
    link.download = result.gcode_filename;
    link.click();
  };

  const getLoadingText = () => {
    if (isProcessing) return "Processing model...";
    if (uploadProgress > 0) return `Uploading... ${uploadProgress}%`;
    return "Initializing...";
  };

  if (isLoading) return <Loading />;

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="flex flex-col ">
      {/* Hero Section */}
      <div
        className="background relative min-h-[90vh] sm:min-h-180 w-full bg-cover bg-center bg-no-repeat z-20 flex flex-col items-center py-10 pt-30 sm:pt-10"
        style={{ backgroundImage: `url(${service.background})` }}
      >
        <div className="absolute inset-0 bg-black/70 backdrop-blur-sm z-0" />
        <div className="relative z-10 text-white w-full px-3 sm:px-10 flex flex-col sm:flex-row justify-between items-center m-auto">
          <div className="flex flex-col items-start mt-8 sm:mt-10 w-full sm:w-1/2 ">
            <motion.div
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.8 }}
              variants={fadeInUp}
              className="title mb-4 flex flex-col sm:flex-row gap-3 w-1/2"
            >
              <h1 className="text-4xl sm:text-6xl font-light font-poppins">
                {service.title.split(" ")[0]}
              </h1>
              <h1 className="text-4xl sm:text-6xl text-red-900 font-light font-poppins text-nowrap">
                {service.title.split(" ").slice(1).join(" ")}
              </h1>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.8, delay: 0.1 }}
              variants={fadeInUp}
              className="desc w-full sm:w-3/4"
            >
              <p className="text-white/80 text-base sm:text-lg font-light font-poppins mt-2">
                {service.desc}
              </p>
            </motion.div>
          </div>

          {/* Upload + Slice Box */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.8, delay: 0.2 }}
            variants={fadeInUp}
            className="mt-8 sm:mt-10 w-full sm:w-1/2 bg-black/60 p-6 rounded-md"
          >
            <form onSubmit={handleUpload} className="space-y-4">
              <div
                {...getRootProps()}
                className={`p-10 py-20 border-2 border-dashed rounded-md text-center cursor-pointer transition-colors ${
                  isDragActive
                    ? "border-red-900 bg-red-900/20"
                    : "border-white/50 hover:border-white/70"
                }`}
              >
                <input {...getInputProps()} />
                <p className="text-white/90 text-sm">
                  {isDragActive
                    ? "Drop the file here..."
                    : "Drag & drop .STL or .obj, or click"}
                </p>
                <p className="text-white/60 text-xs mt-2">Max 50MB</p>
              </div>

              {uploadedFile && (
                <p className="text-white/80 text-sm mt-2">
                  Selected: {uploadedFile.name} (
                  {Math.round((uploadedFile.size / 1024 / 1024) * 100) / 100}{" "}
                  MB)
                </p>
              )}

              <button
                type="submit"
                disabled={loading || !uploadedFile}
                className={`w-full py-3 px-4 rounded-md text-white font-medium transition-colors ${
                  uploadedFile ? "block" : "hidden"
                } ${
                  loading
                    ? "bg-gray-500 cursor-not-allowed"
                    : "bg-red-900 hover:bg-white hover:text-red-900"
                }`}
              >
                {loading ? getLoadingText() : "Upload & Slice"}
              </button>
            </form>
            <div className="mt-6">
              <ModelViewer file={uploadedFile} />
            </div>
            {/* Progress */}
            {loading && (
              <div className="mt-4">
                <div className="flex justify-between text-sm text-white/80 mb-1">
                  <span>
                    {isProcessing ? "Server Processing" : "Upload Progress"}
                  </span>
                  <span>
                    {isProcessing ? "Please wait..." : `${uploadProgress}%`}
                  </span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div
                    className={`h-2 rounded-full transition-all duration-300 ${
                      isProcessing ? "bg-red-900 animate-pulse" : "bg-red-900"
                    }`}
                    style={{
                      width: isProcessing ? "100%" : `${uploadProgress}%`,
                    }}
                  />
                </div>
              </div>
            )}

            {/* Error */}
            {error && (
              <p className="text-red-500 mt-4 text-sm text-center">{error}</p>
            )}

            {/* Success */}
            {result && !result.error && (
              <div className="mt-6 p-4 bg-black/70 border border-red-900 rounded-md">
                <h3 className="text-lg font-semibold text-red-900 mb-3">
                  Slicing Complete!
                </h3>
                <p>Estimated Time: {result.estimated_time}</p>
                <p>Filament Length: {result.filament_used_mm}</p>
                <p>Filament Weight: {result.filament_used_g}</p>

                <button
                  onClick={handleDownload}
                  className="mt-4 w-full bg-red-900 text-white py-2 px-4 rounded hover:bg-white hover:text-red-900 transition-colors"
                >
                  Download G-code
                </button>
              </div>
            )}
          </motion.div>
        </div>
      </div>

      {/* About Section */}
      <div className="relative z-10 w-full bg-[#030303] border-b-1 border-[#F2F2F2]/20 border-t-1 py-14 px-6 sm:px-10 flex flex-col items-center justify-center text-white">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
          variants={fadeInUp}
          className="about-title text-red-700 text-3xl sm:text-4xl font-poppins font-medium text-center"
        >
          {service["about-title"]}
        </motion.h2>
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          transition={{ duration: 0.8, delay: 0.1 }}
          variants={fadeInUp}
          className="about-desc text-white/80 text-base sm:text-xl font-poppins font-light mt-6 sm:mt-10 text-center"
        >
          {service["about-desc"]}
        </motion.p>
      </div>

      {/* Our Approach */}
      <div className="relative z-10 w-screen mx-auto bg-[#030303] px-6 sm:px-10 py-20 md:pt-50">
        <div className="max-w-screen-xl mx-auto flex flex-col sm:flex-row items-start justify-between gap-10 sm:gap-20">
          <div className="w-full sm:w-1/3 flex flex-col">
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
              transition={{ duration: 0.8 }}
              variants={fadeInUp}
              className="text-red-700 text-3xl sm:text-4xl font-poppins font-medium text-left"
            >
              {service["approach-title"]}
            </motion.h2>
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
              transition={{ duration: 0.8, delay: 0.1 }}
              variants={fadeInUp}
              className="text-white/80 text-base sm:text-xl font-poppins font-light mt-6 sm:mt-10 text-left"
            >
              {service["approach-desc"]}
            </motion.p>
          </div>

          {/* FAQ */}
          <div className="w-full sm:w-2/3 flex flex-col items-start">
            <div className="flex flex-col items-center sm:items-start mt-2 gap-4 w-full">
              {service["service-FAQ"].map((faq, i) => (
                <motion.div
                  key={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false }}
                  transition={{ duration: 0.6, delay: i * 0.2 }}
                  variants={fadeInUp}
                  className="w-full"
                >
                  <Accordion question={faq.question} answer={faq.answer} />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="relative z-10 w-full bg-[#030303] py-20 px-6 sm:px-10 text-center">
        <motion.h1
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
          variants={fadeInUp}
          className="font-poppins text-3xl sm:text-4xl text-white mb-4"
        >
          {service.consultQN}
        </motion.h1>
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          transition={{ duration: 0.8, delay: 0.1 }}
          variants={fadeInUp}
          className="text-white/50 mb-8 max-w-2xl mx-auto text-base sm:text-lg"
        >
          {service["consult-answer"]}
        </motion.p>
        <Link href="/contact">
          <motion.button
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            transition={{ duration: 0.8, delay: 0.2 }}
            variants={fadeInUp}
            className="bg-red-900 text-white font-semibold py-3 px-6 sm:px-8 rounded-md hover:bg-white hover:text-red-900 transition-colors duration-300 text-base sm:text-lg cursor-pointer"
          >
            Schedule a Consultation
          </motion.button>
        </Link>
      </div>
    </div>
  );
}
