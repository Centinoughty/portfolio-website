"use client";
import { useState, useEffect } from "react";
import ImageUpload from "@/app/admin/components/ImageUpload";
import { Plus, Trash2 } from "lucide-react";

export default function GalleryPage() {
  const [images, setImages] = useState<any[]>([]);
  const [newImage, setNewImage] = useState({ title: "", image: "" });

  useEffect(() => {
    fetchGallery();
  }, []);

  const fetchGallery = async () => {
    const res = await fetch("/api/gallery");
    setImages(await res.json());
  };

  const handleAdd = async (e: React.FormEvent) => {
    e.preventDefault();
    await fetch("/api/gallery", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newImage),
    });
    setNewImage({ title: "", image: "" });
    fetchGallery();
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Delete image?")) return;
    await fetch(`/api/gallery/${id}`, { method: "DELETE" });
    fetchGallery();
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-[var(--color-primary)] mb-8">
        Gallery
      </h1>

      <form
        onSubmit={handleAdd}
        className="mb-8 p-6 rounded-xl bg-[var(--color-secondary)]/10 border border-[var(--color-secondary)]/20"
      >
        <h3 className="text-lg font-semibold mb-4">Add New Image</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium mb-2 opacity-80">
              Image Title
            </label>
            <input
              type="text"
              placeholder="e.g. Hiking Trip"
              required
              value={newImage.title}
              onChange={(e) =>
                setNewImage({ ...newImage, title: e.target.value })
              }
              className="w-full p-3 rounded bg-[var(--color-background)] border border-[var(--color-secondary)]/30"
            />
          </div>

          <div>
            <ImageUpload
              value={newImage.image}
              onChange={(url) => setNewImage({ ...newImage, image: url })}
              label="Upload Photo"
            />
          </div>
        </div>

        <div className="mt-4 flex justify-end">
          <button
            type="submit"
            className="px-6 py-2 bg-[var(--color-primary)] text-[var(--color-background)] rounded flex items-center gap-2"
          >
            <Plus size={18} /> Add to Gallery
          </button>
        </div>
      </form>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((img) => (
          <div
            key={img._id}
            className="relative group rounded-xl overflow-hidden border border-[var(--color-secondary)]/20"
          >
            <img
              src={img.image}
              alt={img.title}
              className="w-full h-48 object-cover transition-transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4">
              <p className="text-white font-medium truncate">{img.title}</p>
              <button
                onClick={() => handleDelete(img._id)}
                className="mt-2 text-red-300 hover:text-red-100 text-sm flex items-center gap-1"
              >
                <Trash2 size={14} /> Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
