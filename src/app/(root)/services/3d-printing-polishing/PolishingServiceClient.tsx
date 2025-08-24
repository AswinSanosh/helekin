"use client";

import Link from "next/link";
import Accordion from "@/components/GenericAccordion";
import { motion } from "framer-motion";
import Loading from "@/app/(root)/loading";
import { useEffect, useState } from "react";
import { FileRejection, useDropzone, DropzoneOptions } from "react-dropzone";
import ModelViewer from "@/app/(root)/services/3d-printing-polishing/ModelViewer";

// Define types
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
}

export default function PolishingServiceClient({
  service,
}: {
  service: ServiceData;
}) {
  const [isLoading, setIsLoading] = useState(true);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [uploadError, setUploadError] = useState<string | null>(null);

  // New states for slicing results
  const [loading, setLoading] = useState<boolean>(false);
  const [result, setResult] = useState<UploadResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  // Preload images
  useEffect(() => {
    const imageUrls: string[] = [
      service.background,
      ...(service["whatweoffer-images"] || []),
      ...(service["featured-projects-images"] || []),
    ];

    let loadedCount = 0;
    const totalImages = imageUrls.length;

    if (totalImages === 0) {
      setIsLoading(false);
      return;
    }

    imageUrls.forEach((src) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        loadedCount++;
        if (loadedCount === totalImages) {
          setIsLoading(false);
        }
      };
      img.onerror = () => {
        loadedCount++;
        if (loadedCount === totalImages) {
          setIsLoading(false);
        }
      };
    });
  }, [service]);

  // Dropzone options
  const dropzoneOptions: DropzoneOptions = {
    accept: {
      "model/stl": [".stl"],
      "model/obj": [".obj"],
      "model/gltf": [".gltf", ".glb"],
    },
    maxFiles: 1,
    maxSize: 100 * 1024 * 1024, // 100MB
    onDrop: (acceptedFiles: File[], rejectedFiles: FileRejection[]) => {
      setUploadError(null);
      setResult(null);
      setError(null);

      if (rejectedFiles.length > 0) {
        setUploadError(
          "File too large or unsupported type. Max 100MB, .stl/.obj/.gltf/.glb only."
        );
      }
      if (acceptedFiles.length > 0) {
        setUploadedFile(acceptedFiles[0]);
      }
    },
  };

  const { getRootProps, getInputProps, isDragActive } =
    useDropzone(dropzoneOptions);

  // Handle Upload to backend
  const handleUpload = async () => {
    if (!uploadedFile) {
      console.warn("No file selected before upload");
      return;
    }

    setLoading(true);
    setError(null);
    setResult(null);

    const formData = new FormData();
    formData.append("file", uploadedFile);

    try {
      const res = await fetch("https://77eaa56ef0ae.ngrok-free.app/upload-model/", {
        method: "POST",
        body: formData,
      });

      let data: UploadResult | null = null;
      try {
        data = await res.json();
      } catch (jsonErr) {
        console.error("Failed to parse JSON:", jsonErr);
        const text = await res.text();
        console.log("Raw response text:", text);
      }

      if (!res.ok) {
        setError(data?.error || `Upload failed (status ${res.status})`);
      } else if (data) {
        setResult(data);
      }
    } catch (err) {
      console.error("Fetch error:", err);
      setError("Upload failed. Try again.");
    } finally {
      setLoading(false);
    }
  };

  // Handle G-code download
  const handleDownload = () => {
    if (!result?.gcode_url) {
      console.warn("Download attempted without gcode_url");
      return;
    }
    const link = document.createElement("a");
    link.href = result.gcode_url;
    link.download = result.gcode_filename;
    link.click();
  };

  if (isLoading) {
    return <Loading />;
  }

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <div
        className="background relative min-h-[90vh] sm:min-h-180 w-full bg-cover bg-center bg-no-repeat z-20 flex items-center py-10"
        style={{ backgroundImage: `url(${service.background})` }}
      >
        <div className="absolute inset-0 bg-black/70 backdrop-blur-sm z-0" />
        <div className="relative z-10 text-white w-full px-6 sm:px-10 flex justify-between items-center">
          <div className="flex flex-col items-center sm:items-start mt-8 sm:mt-10 gap-4 w-full ">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
              transition={{ duration: 0.8 }}
              variants={fadeInUp}
              className="title mb-4 flex flex-nowrap sm:flex-row gap-3 w-1/3"
            >
              <h1 className="text-4xl sm:text-6xl font-light font-poppins">
                {service.title.split(" ")[0]}
              </h1>
              <h1 className="text-4xl sm:text-6xl text-red-700 font-light font-poppins text-nowrap">
                {service.title.split(" ").slice(1).join(" ")}
              </h1>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
              transition={{ duration: 0.8, delay: 0.1 }}
              variants={fadeInUp}
              className="desc w-full sm:w-3/4"
            >
              <p className="text-white/80 text-base sm:text-lg font-light font-poppins mt-4 sm:mt-6">
                {service.desc}
              </p>
            </motion.div>
          </div>
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-10 mt-8 sm:mt-10 w-full m-auto">
            {/* 3D File Upload & Preview */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
              transition={{ duration: 0.8, delay: 0.2 }}
              variants={fadeInUp}
              className="mt-8 sm:mt-10"
            >
              <div
                {...getRootProps()}
                className={`p-20 border-2 border-dashed rounded-lg text-center cursor-pointer transition-colors w-full
                ${
                  isDragActive
                    ? "border-red-500 bg-red-500/10"
                    : "border-white/50 hover:border-white/70"
                }
              `}
              >
                <input {...getInputProps()} />
                <p className="text-white/90 text-sm sm:text-base">
                  {isDragActive ? (
                    "Drop the 3D file here..."
                  ) : (
                    <>
                      Drag & drop your <strong>.STL</strong>,{" "}
                      <strong>.OBJ</strong> or <strong>.GLTF</strong> file here,
                      or click to browse
                    </>
                  )}
                </p>
                <p className="text-white/60 text-xs mt-2">Max 100MB</p>
              </div>

              {uploadError && (
                <p className="text-red-400 justifiy-center mt-3 text-center text-base sm:text-lg font-light font-poppins">
                  {uploadError}
                </p>
              )}

              {/* 3D Model Preview */}
              {uploadedFile && (
                <div className="mt-6 h-full w-full justify-ended items-end flex flex-col z-50">
                  <ModelViewer file={uploadedFile} />
                  <button
                    onClick={handleUpload}
                    className="mt-4 bg-red-900 text-white px-6 py-3 rounded-lg hover:bg-white hover:text-red-900 transition-colors w-full text-base sm:text-lg font-light font-poppins"
                    disabled={loading}
                  >
                    {loading ? "Slicing..." : "Slice"}
                  </button>
                  {/* Results */}
                  {error && (
                    <p className="text-red-500 mt-4 text-center">{error}</p>
                  )}

                  {result && !result.error && (
                    <motion.div
                      initial="hidden"
                      whileInView="visible"
                      transition={{ duration: 0.8 }}
                      variants={fadeInUp}
                      className="border border-white/20 rounded-lg bg-black/30 w-full my-10 p-5"
                    >
                      <p>
                        <strong>Estimated Time:</strong> {result.estimated_time}
                      </p>
                      <p>
                        <strong>Filament Used (mm):</strong>{" "}
                        {result.filament_used_mm}
                      </p>
                      <p>
                        <strong>Filament Used (g):</strong>{" "}
                        {result.filament_used_g}
                      </p>
                      <button
                        onClick={handleDownload}
                        className="mt-4 bg-red-900 text-white px-4 py-2 rounded hover:bg-green-500 transition-colors"
                      >
                        Download G-code
                      </button>
                    </motion.div>
                  )}

                  {result?.error && (
                    <p className="text-red-500 mt-4 text-center">
                      {result.error}
                    </p>
                  )}
                </div>
              )}
            </motion.div>
          </div>
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
            className="bg-red-900 text-white font-semibold py-3 px-6 sm:px-8 rounded-lg hover:bg-white hover:text-red-900 transition-colors duration-300 text-base sm:text-lg cursor-pointer"
          >
            Schedule a Consultation
          </motion.button>
        </Link>
      </div>
    </div>
  );
}
