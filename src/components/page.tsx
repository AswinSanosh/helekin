'use client';

import { useState, ChangeEvent, FormEvent } from "react";

interface UploadResult {
  gcode_url: string;
  gcode_filename: string;
  estimated_time: string;
  filament_used_mm: string;
  filament_used_g: string;
  error?: string;
}

export default function UploadPage() {
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [result, setResult] = useState<UploadResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
      console.log("File selected:", e.target.files[0]);
    }
  };

  const handleUpload = async (e: FormEvent) => {
    e.preventDefault();
    if (!file) {
      console.warn("No file selected before upload");
      return;
    }

    setLoading(true);
    setError(null);
    setResult(null);

    const formData = new FormData();
    formData.append("file", file);

    console.log("Uploading file:", file.name, file.size, "bytes");
    console.log("Upload endpoint:", "http://13.233.86.222/upload-model/");

    try {
      const res = await fetch("http://13.233.86.222/upload-model/", {
        method: "POST",
        body: formData,
      });

      console.log("Response status:", res.status, res.statusText);
      console.log("Response headers:", Object.fromEntries(res.headers.entries()));

      let data: UploadResult | null = null;
      try {
        data = await res.json();
        console.log("Parsed JSON response:", data);
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

  const handleDownload = () => {
    if (!result?.gcode_url) {
      console.warn("Download attempted without gcode_url");
      return;
    }
    console.log("Downloading:", result.gcode_url);
    const link = document.createElement("a");
    link.href = result.gcode_url;
    link.download = result.gcode_filename;
    link.click();
  };

  return (
    <div className="max-w-xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Upload STL/3MF</h1>
      <form onSubmit={handleUpload} className="space-y-4">
        <input
          type="file"
          accept=".stl,.3mf"
          onChange={handleFileChange}
          className="border p-2 w-full"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded"
          disabled={loading}
        >
          {loading ? "Uploading..." : "Upload & Slice"}
        </button>
      </form>

      {error && <p className="text-red-500 mt-4">{error}</p>}

      {result && !result.error && (
        <div className="mt-6 border p-4 rounded bg-gray-50">
          <p>
            <strong>Estimated Time:</strong> {result.estimated_time}
          </p>
          <p>
            <strong>Filament Used (mm):</strong> {result.filament_used_mm}
          </p>
          <p>
            <strong>Filament Used (g):</strong> {result.filament_used_g}
          </p>
          <button
            onClick={handleDownload}
            className="mt-4 bg-green-600 text-white px-4 py-2 rounded"
          >
            Download G-code
          </button>
        </div>
      )}

      {result?.error && <p className="text-red-500 mt-4">{result.error}</p>}
    </div>
  );
}
