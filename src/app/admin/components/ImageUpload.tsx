"use client";

import { useState } from "react";
import { Upload, X, Image as Loader2 } from "lucide-react";

interface ImageUploadProps {
  value: string;
  onChange: (url: string) => void;
  label?: string;
}

export default function ImageUpload({
  value,
  onChange,
  label = "Image",
}: ImageUploadProps) {
  const [loading, setLoading] = useState(false);

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setLoading(true);
    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) throw new Error("Upload failed");

      const data = await res.json();
      onChange(data.url);
    } catch (error) {
      console.error(error);
      alert("Failed to upload image");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full">
      <label className="block text-sm font-medium mb-2 opacity-80">
        {label}
      </label>

      {value ? (
        <div className="relative w-full h-48 rounded-xl overflow-hidden border border-[var(--color-secondary)]/30 group">
          <img
            src={value}
            alt="Uploaded"
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <button
              type="button"
              onClick={() => onChange("")}
              className="p-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors"
            >
              <X size={20} />
            </button>
          </div>
        </div>
      ) : (
        <div className="relative w-full h-32 border-2 border-dashed border-[var(--color-secondary)]/30 rounded-xl hover:border-[var(--color-primary)] transition-colors flex flex-col items-center justify-center bg-[var(--color-background)]">
          <input
            type="file"
            accept="image/*"
            onChange={handleUpload}
            disabled={loading}
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer disabled:cursor-not-allowed"
          />

          {loading ? (
            <div className="flex flex-col items-center text-[var(--color-primary)]">
              <Loader2 className="animate-spin mb-2" size={24} />
              <span className="text-xs">Uploading...</span>
            </div>
          ) : (
            <div className="flex flex-col items-center opacity-60">
              <Upload className="mb-2" size={24} />
              <span className="text-sm">Click to upload image</span>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
