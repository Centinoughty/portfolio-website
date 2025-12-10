"use client";
import { useState, useEffect } from "react";
import ImageUpload from "@/app/admin/components/ImageUpload";
import { Plus, Save } from "lucide-react";

export default function BlogsPage() {
  const [blogs, setBlogs] = useState<any[]>([]);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    _id: "",
    title: "",
    description: "",
    image: "",
    date: new Date().toISOString().split("T")[0],
  });

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    const res = await fetch("/api/blogs");
    setBlogs(await res.json());
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const method = formData._id ? "PUT" : "POST";
    const url = formData._id ? `/api/blogs/${formData._id}` : "/api/blogs";

    await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    setIsEditing(false);
    setFormData({
      _id: "",
      title: "",
      description: "",
      image: "",
      date: new Date().toISOString().split("T")[0],
    });
    fetchBlogs();
  };

  const handleEdit = (blog: any) => {
    setFormData({ ...blog, date: blog.date.split("T")[0] });
    setIsEditing(true);
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Delete blog?")) return;
    await fetch(`/api/blogs/${id}`, { method: "DELETE" });
    fetchBlogs();
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-[var(--color-primary)]">
          Blogs
        </h1>
        {!isEditing && (
          <button
            onClick={() => setIsEditing(true)}
            className="flex items-center gap-2 px-4 py-2 bg-[var(--color-primary)] text-[var(--color-background)] rounded-lg hover:opacity-90"
          >
            <Plus size={18} /> New Post
          </button>
        )}
      </div>

      {isEditing && (
        <div className="mb-8 p-6 rounded-xl bg-[var(--color-secondary)]/10 border border-[var(--color-secondary)]/20">
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Blog Title"
              required
              value={formData.title}
              onChange={(e) =>
                setFormData({ ...formData, title: e.target.value })
              }
              className="w-full p-3 rounded bg-[var(--color-background)] border border-[var(--color-secondary)]/30"
            />

            <textarea
              placeholder="Write your content here..."
              rows={6}
              required
              value={formData.description}
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
              className="w-full p-3 rounded bg-[var(--color-background)] border border-[var(--color-secondary)]/30"
            />

            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2">
                <ImageUpload
                  value={formData.image}
                  onChange={(url) => setFormData({ ...formData, image: url })}
                  label="Blog Cover Image"
                />
              </div>
              <input
                type="date"
                value={formData.date}
                onChange={(e) =>
                  setFormData({ ...formData, date: e.target.value })
                }
                className="p-3 rounded bg-[var(--color-background)] border border-[var(--color-secondary)]/30"
              />
            </div>

            <div className="flex gap-3 pt-4">
              <button
                type="submit"
                className="px-6 py-2 bg-[var(--color-primary)] text-[var(--color-background)] rounded flex items-center gap-2"
              >
                <Save size={16} /> Save
              </button>
              <button
                type="button"
                onClick={() => setIsEditing(false)}
                className="px-6 py-2 border border-[var(--color-secondary)]/30 rounded"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {blogs.map((blog) => (
          <div
            key={blog._id}
            className="rounded-xl border border-[var(--color-secondary)]/20 overflow-hidden bg-[var(--color-secondary)]/5"
          >
            {blog.image && (
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-48 object-cover"
              />
            )}
            <div className="p-5">
              <h3 className="text-xl font-bold mb-2">{blog.title}</h3>
              <p className="text-xs opacity-50 mb-4">
                {new Date(blog.date).toLocaleDateString()}
              </p>
              <p className="text-sm opacity-70 line-clamp-3 mb-4">
                {blog.description}
              </p>
              <div className="flex gap-2 justify-end border-t border-[var(--color-secondary)]/10 pt-4">
                <button
                  onClick={() => handleEdit(blog)}
                  className="text-[var(--color-primary)] hover:underline text-sm"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(blog._id)}
                  className="text-red-400 hover:underline text-sm"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
