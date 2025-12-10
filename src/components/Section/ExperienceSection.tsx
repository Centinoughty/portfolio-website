"use client";

import { bric } from "@/styles/fonts";
import { useEffect, useRef, useState } from "react";
import TextDate from "../Text/TextDate"; // Adjust path if needed

interface Experience {
  _id: string;
  company: string;
  role: string;
  startDate: string; // ISO String from DB
  endDate?: string;  // ISO String from DB
}

export default function ExperienceSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const [containerHeight, setContainerHeight] = useState(0);
  
  const [experiences, setExperiences] = useState<Experience[]>([]);
  const [loading, setLoading] = useState(true);

  // Helper: Convert MongoDB ISO date to "MMM YYYY" (e.g., "Jan 2024")
  const formatDate = (isoString: string) => {
    if (!isoString) return "";
    const date = new Date(isoString);
    // 'short' gives "Jan", "Feb", etc.
    const month = date.toLocaleString('default', { month: 'short' });
    const year = date.getFullYear();
    return `${month} ${year}`;
  };

  // 1. Fetch Data
  useEffect(() => {
    const fetchExperience = async () => {
      try {
        const res = await fetch("/api/experience", {
            next: { revalidate: 0 } 
        });
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        setExperiences(data);
      } catch (error) {
        console.error("Error loading experiences:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchExperience();
  }, []);

  // 2. Resize Logic
  useEffect(() => {
    const updateSize = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
        setContainerHeight(containerRef.current.offsetHeight);
      }
    };

    updateSize();
    const observer = new ResizeObserver(updateSize);
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  if (loading) return null; // Or a loading skeleton

  return (
    <>
      <div
        ref={containerRef}
        className="md:mx-[3%] flex flex-col items-center gap-2 md:relative md:h-[400px]"
      >
        {containerWidth > 0 &&
          experiences.map((exp, idx) => {
            // Logic to calculate position
            const numSlots = experiences.length > 1 ? experiences.length - 1 : 1;
            const blockWidth = 500;
            const blockHeight = 85;
            
            // Safety check for ratio
            const ratio = experiences.length > 1 ? idx / numSlots : 0;

            const leftPx = ratio * (containerWidth - blockWidth);
            const topPx = ratio * (containerHeight - blockHeight);

            return (
              <div
                key={exp._id}
                className={`md:absolute bg-[var(--primary-color)] px-8 py-3 rounded-full flex justify-between items-center ${bric.className}`}
                style={{
                  right: `${leftPx}px`,
                  top: `${topPx}px`,
                  width: `100%`,
                  maxWidth: "500px",
                }}
              >
                <div>
                  <h3 className="font-bold text-[var(--accent)] text-[4.2vw] sm:text-[3vw] md:text-[2.4vw] lg:text-[1.8vw] xl:text-[1.1vw]">
                    {exp.company}
                  </h3>
                  <p className="text-white/70 text-[3.9vw] sm:text-[2.4vw] md:text-[2vw] lg:text-[1.6vw] xl:text-[1vw]">
                    {exp.role}
                  </p>
                </div>
                <div className="font-semibold text-[var(--accent)]">
                  <p className="text-nowrap flex items-center gap-1">
                    {/* Format the date before passing to TextDate */}
                    <TextDate date={formatDate(exp.startDate)} />
                    
                    {exp.endDate ? (
                      <>
                        <span>-</span>
                        <TextDate date={formatDate(exp.endDate)} />
                      </>
                    ) : (
                      <span>~</span>
                    )}
                  </p>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
}