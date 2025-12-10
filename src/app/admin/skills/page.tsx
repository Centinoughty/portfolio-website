"use client";
import { useState, useEffect } from "react";
import ImageUpload from "@/app/admin/components/ImageUpload";
import { Plus, Trash2 } from "lucide-react";

export default function SkillsPage() {
  const [skills, setSkills] = useState<any[]>([]);
  const [newSkill, setNewSkill] = useState({ name: "", image: "" });

  useEffect(() => {
    fetchSkills();
  }, []);

  const fetchSkills = async () => {
    const res = await fetch("/api/skills");
    setSkills(await res.json());
  };

  const handleAdd = async (e: React.FormEvent) => {
    e.preventDefault();
    await fetch("/api/skills", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newSkill),
    });
    setNewSkill({ name: "", image: "" });
    fetchSkills();
  };

  const handleDelete = async (id: string) => {
    await fetch(`/api/skills/${id}`, { method: "DELETE" });
    fetchSkills();
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-[var(--color-primary)] mb-8">
        Skills
      </h1>

      <form
        onSubmit={handleAdd}
        className="flex flex-col md:flex-row gap-4 mb-8 p-4 rounded-xl bg-[var(--color-secondary)]/10 border border-[var(--color-secondary)]/20 items-end"
      >
        <div className="flex-1 w-full">
          <label className="text-xs opacity-70 mb-1 block">Skill Name</label>
          <input
            type="text"
            placeholder="e.g. React"
            required
            value={newSkill.name}
            onChange={(e) => setNewSkill({ ...newSkill, name: e.target.value })}
            className="w-full p-2 rounded bg-[var(--color-background)] border border-[var(--color-secondary)]/30 h-[42px]"
          />
        </div>

        <div className="w-full md:w-64">
          <ImageUpload
            value={newSkill.image}
            onChange={(url) => setNewSkill({ ...newSkill, image: url })}
            label="Icon"
          />
        </div>

        <button
          type="submit"
          className="h-[42px] px-6 bg-[var(--color-primary)] text-[var(--color-background)] rounded flex items-center gap-2 font-medium"
        >
          <Plus size={18} /> Add
        </button>
      </form>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {skills.map((skill) => (
          <div
            key={skill._id}
            className="relative group p-4 rounded-xl border border-[var(--color-secondary)]/20 bg-[var(--color-secondary)]/5 flex flex-col items-center gap-3 hover:border-[var(--color-primary)] transition-colors"
          >
            <button
              onClick={() => handleDelete(skill._id)}
              className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 text-red-400 hover:bg-red-400/10 p-1 rounded"
            >
              <Trash2 size={14} />
            </button>
            <img
              src={skill.image}
              alt={skill.name}
              className="w-12 h-12 object-contain"
            />
            <span className="font-medium text-sm">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
