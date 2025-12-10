"use client";

import { useState, useEffect } from "react";
import ImageUpload from "@/app/admin/components/ImageUpload";
import {
  Plus,
  Edit2,
  Trash2,
  X,
  Save,
  Github,
  Link as LinkIcon,
  Star,
} from "lucide-react";

interface ProjectType {
  _id?: string;
  name: string;
  description: string;
  tools: string[];
  github: string;
  url: string;
  featured: boolean;
  image: string;
}

const initialFormState: ProjectType = {
  name: "",
  description: "",
  tools: [],
  github: "",
  url: "",
  featured: false,
  image: "",
};

export default function ProjectsPage() {
  const [projects, setProjects] = useState<ProjectType[]>([]);
  const [loading, setLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState<ProjectType>(initialFormState);

  const [toolsInput, setToolsInput] = useState("");

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const res = await fetch("/api/projects");
      const data = await res.json();
      setProjects(data);
    } catch (error) {
      console.error("Failed to fetch projects", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const toolsArray = toolsInput
      .split(",")
      .map((t) => t.trim())
      .filter((t) => t);
    const payload = { ...formData, tools: toolsArray };

    try {
      if (formData._id) {
        await fetch(`/api/projects/${formData._id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
      } else {
        await fetch("/api/projects", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
      }

      setIsEditing(false);
      setFormData(initialFormState);
      setToolsInput("");
      fetchProjects();
    } catch (error) {
      console.error("Operation failed", error);
    }
  };

  const handleEdit = (project: ProjectType) => {
    setFormData(project);
    setToolsInput(project.tools.join(", "));
    setIsEditing(true);
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this project?")) return;

    try {
      await fetch(`/api/projects/${id}`, { method: "DELETE" });
      fetchProjects();
    } catch (error) {
      console.error("Delete failed", error);
    }
  };

  const handleCancel = () => {
    setIsEditing(false);
    setFormData(initialFormState);
    setToolsInput("");
  };

  if (loading) return <div>Loading projects...</div>;

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-[var(--color-primary)]">
          Projects
        </h1>
        {!isEditing && (
          <button
            onClick={() => setIsEditing(true)}
            className="flex items-center gap-2 px-4 py-2 bg-[var(--color-primary)] text-[var(--color-background)] rounded-lg hover:opacity-90 transition-opacity"
          >
            <Plus size={18} /> Add New Project
          </button>
        )}
      </div>

      {isEditing && (
        <div className="mb-8 p-6 rounded-xl bg-[var(--color-secondary)]/10 border border-[var(--color-secondary)]/20 animate-in fade-in slide-in-from-top-4">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold">
              {formData._id ? "Edit Project" : "New Project"}
            </h2>
            <button
              onClick={handleCancel}
              className="text-red-400 hover:text-red-300"
            >
              <X size={24} />
            </button>
          </div>

          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            <div className="col-span-2">
              <label className="block text-sm font-medium mb-1 opacity-80">
                Project Name
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full px-4 py-2 rounded-lg bg-[var(--color-background)] border border-[var(--color-secondary)]/30 focus:border-[var(--color-primary)] outline-none"
              />
            </div>

            <div className="col-span-2">
              <label className="block text-sm font-medium mb-1 opacity-80">
                Description
              </label>
              <textarea
                required
                rows={3}
                value={formData.description}
                onChange={(e) =>
                  setFormData({ ...formData, description: e.target.value })
                }
                className="w-full px-4 py-2 rounded-lg bg-[var(--color-background)] border border-[var(--color-secondary)]/30 focus:border-[var(--color-primary)] outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1 opacity-80">
                Tools used (comma separated)
              </label>
              <input
                type="text"
                placeholder="React, Next.js, Tailwind"
                value={toolsInput}
                onChange={(e) => setToolsInput(e.target.value)}
                className="w-full px-4 py-2 rounded-lg bg-[var(--color-background)] border border-[var(--color-secondary)]/30 focus:border-[var(--color-primary)] outline-none"
              />
            </div>

            <div>
              <div className="col-span-1">
                <ImageUpload
                  value={formData.image}
                  onChange={(url) => setFormData({ ...formData, image: url })}
                  label="Project Thumbnail"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1 opacity-80">
                GitHub URL
              </label>
              <input
                type="url"
                value={formData.github}
                onChange={(e) =>
                  setFormData({ ...formData, github: e.target.value })
                }
                className="w-full px-4 py-2 rounded-lg bg-[var(--color-background)] border border-[var(--color-secondary)]/30 focus:border-[var(--color-primary)] outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1 opacity-80">
                Live Demo URL
              </label>
              <input
                type="url"
                value={formData.url}
                onChange={(e) =>
                  setFormData({ ...formData, url: e.target.value })
                }
                className="w-full px-4 py-2 rounded-lg bg-[var(--color-background)] border border-[var(--color-secondary)]/30 focus:border-[var(--color-primary)] outline-none"
              />
            </div>

            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                id="featured"
                checked={formData.featured}
                onChange={(e) =>
                  setFormData({ ...formData, featured: e.target.checked })
                }
                className="w-5 h-5 rounded border-gray-300 text-[var(--color-primary)] focus:ring-[var(--color-primary)]"
              />
              <label htmlFor="featured" className="text-sm font-medium">
                Mark as Featured Project
              </label>
            </div>

            <div className="col-span-2 pt-4 flex gap-4">
              <button
                type="submit"
                className="flex items-center gap-2 px-6 py-2 bg-[var(--color-primary)] text-[var(--color-background)] rounded-lg hover:opacity-90 font-medium"
              >
                <Save size={18} /> Save Project
              </button>
              <button
                type="button"
                onClick={handleCancel}
                className="px-6 py-2 border border-[var(--color-secondary)]/30 rounded-lg hover:bg-[var(--color-secondary)]/10"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div
            key={project._id}
            className="group relative rounded-xl border border-[var(--color-secondary)]/20 bg-[var(--color-secondary)]/5 overflow-hidden hover:border-[var(--color-primary)]/50 transition-all"
          >
            <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity z-10">
              <button
                onClick={() => handleEdit(project)}
                className="p-2 rounded-full bg-[var(--color-background)] text-[var(--color-primary)] shadow-lg hover:scale-110 transition-transform"
              >
                <Edit2 size={16} />
              </button>
              <button
                onClick={() => handleDelete(project._id!)}
                className="p-2 rounded-full bg-[var(--color-background)] text-red-400 shadow-lg hover:scale-110 transition-transform"
              >
                <Trash2 size={16} />
              </button>
            </div>

            {project.image && (
              <div className="h-40 w-full overflow-hidden bg-[var(--color-secondary)]/20">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover"
                />
              </div>
            )}

            <div className="p-5">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-bold">{project.name}</h3>
                {project.featured && (
                  <Star size={16} className="text-yellow-400 fill-yellow-400" />
                )}
              </div>

              <p className="text-sm opacity-70 line-clamp-2 mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tools.map((tool, i) => (
                  <span
                    key={i}
                    className="text-xs px-2 py-1 rounded bg-[var(--color-primary)]/10 text-[var(--color-primary)]"
                  >
                    {tool}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 text-sm opacity-60">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    className="flex items-center gap-1 hover:text-[var(--color-primary)]"
                  >
                    <Github size={14} /> Code
                  </a>
                )}
                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    className="flex items-center gap-1 hover:text-[var(--color-primary)]"
                  >
                    <LinkIcon size={14} /> Live
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}

        {projects.length === 0 && !loading && (
          <div className="col-span-full text-center py-12 opacity-50">
            No projects found. Create one to get started.
          </div>
        )}
      </div>
    </div>
  );
}
