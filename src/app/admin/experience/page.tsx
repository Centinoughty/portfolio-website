"use client";
import { useState, useEffect } from "react";
import { Plus, Edit2, Trash2, Save, X, Briefcase } from "lucide-react";

export default function ExperiencePage() {
  const [experiences, setExperiences] = useState<any[]>([]);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    _id: "",
    company: "",
    role: "",
    startDate: "",
    endDate: "",
  });

  useEffect(() => {
    fetchExperience();
  }, []);

  const fetchExperience = async () => {
    const res = await fetch("/api/experience");
    const data = await res.json();
    setExperiences(data);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const method = formData._id ? "PUT" : "POST";
    const url = formData._id
      ? `/api/experience/${formData._id}`
      : "/api/experience";

    const payload = { ...formData, endDate: formData.endDate || null };

    await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    setIsEditing(false);
    setFormData({ _id: "", company: "", role: "", startDate: "", endDate: "" });
    fetchExperience();
  };

  const handleEdit = (exp: any) => {
    setFormData({
      ...exp,
      startDate: exp.startDate.split("T")[0],
      endDate: exp.endDate ? exp.endDate.split("T")[0] : "",
    });
    setIsEditing(true);
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Delete this experience?")) return;
    await fetch(`/api/experience/${id}`, { method: "DELETE" });
    fetchExperience();
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-[var(--color-primary)]">
          Experience
        </h1>
        {!isEditing && (
          <button
            onClick={() => setIsEditing(true)}
            className="flex items-center gap-2 px-4 py-2 bg-[var(--color-primary)] text-[var(--color-background)] rounded-lg hover:opacity-90"
          >
            <Plus size={18} /> Add Experience
          </button>
        )}
      </div>

      {isEditing && (
        <div className="mb-8 p-6 rounded-xl bg-[var(--color-secondary)]/10 border border-[var(--color-secondary)]/20">
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            <input
              type="text"
              placeholder="Company Name"
              required
              value={formData.company}
              onChange={(e) =>
                setFormData({ ...formData, company: e.target.value })
              }
              className="p-3 rounded bg-[var(--color-background)] border border-[var(--color-secondary)]/30"
            />
            <input
              type="text"
              placeholder="Role / Job Title"
              required
              value={formData.role}
              onChange={(e) =>
                setFormData({ ...formData, role: e.target.value })
              }
              className="p-3 rounded bg-[var(--color-background)] border border-[var(--color-secondary)]/30"
            />

            <div className="flex flex-col">
              <label className="text-xs opacity-70 mb-1">Start Date</label>
              <input
                type="date"
                required
                value={formData.startDate}
                onChange={(e) =>
                  setFormData({ ...formData, startDate: e.target.value })
                }
                className="p-3 rounded bg-[var(--color-background)] border border-[var(--color-secondary)]/30"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-xs opacity-70 mb-1">
                End Date (Leave empty for Present)
              </label>
              <input
                type="date"
                value={formData.endDate}
                onChange={(e) =>
                  setFormData({ ...formData, endDate: e.target.value })
                }
                className="p-3 rounded bg-[var(--color-background)] border border-[var(--color-secondary)]/30"
              />
            </div>

            <div className="col-span-2 flex gap-3 mt-4">
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

      <div className="space-y-4">
        {experiences.map((exp) => (
          <div
            key={exp._id}
            className="p-5 rounded-xl border border-[var(--color-secondary)]/20 flex justify-between items-center bg-[var(--color-secondary)]/5"
          >
            <div className="flex items-center gap-4">
              <div className="p-3 bg-[var(--color-primary)]/10 text-[var(--color-primary)] rounded-full">
                <Briefcase size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold">{exp.role}</h3>
                <p className="text-[var(--color-primary)]">{exp.company}</p>
                <p className="text-sm opacity-60">
                  {new Date(exp.startDate).toLocaleDateString()} -{" "}
                  {exp.endDate
                    ? new Date(exp.endDate).toLocaleDateString()
                    : "Present"}
                </p>
              </div>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => handleEdit(exp)}
                className="p-2 text-[var(--color-primary)] hover:bg-[var(--color-primary)]/10 rounded"
              >
                <Edit2 size={18} />
              </button>
              <button
                onClick={() => handleDelete(exp._id)}
                className="p-2 text-red-400 hover:bg-red-400/10 rounded"
              >
                <Trash2 size={18} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
