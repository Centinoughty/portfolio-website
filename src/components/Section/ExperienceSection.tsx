"use client";

import { bric } from "@/styles/fonts";
import { experience } from "../../../data/experience";
import { useEffect, useRef, useState } from "react";
import TextDate from "../Text/TextDate";

export default function ExperienceSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const [containerHeight, setContainerHeight] = useState(0);

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

  return (
    <>
      <div
        ref={containerRef}
        className="md:mx-[3%] flex flex-col items-center gap-2 md:relative md:h-[400px]"
      >
        {containerWidth > 0 &&
          [...experience].reverse().map((exp, idx) => {
            const numSlots = experience.length - 1;
            const blockWidth = 500;
            const blockHeight = 85;
            const leftPx = (idx / numSlots) * (containerWidth - blockWidth);
            const topPx = (idx / numSlots) * (containerHeight - blockHeight);

            return (
              <div
                key={idx}
                className={`md:absolute bg-[var(--primary-color)] px-8 py-3 rounded-full flex justify-between items-center ${bric.className}`}
                style={{
                  right: `${leftPx}px`,
                  top: `${topPx}px`,
                  width: `100%`,
                  maxWidth: "500px",
                }}
              >
                <div>
                  <h4 className="font-bold text-[var(--accent)] text-[4.2vw] sm:text-[3vw] md:text-[2.4vw] lg:text-[1.8vw] xl:text-[1.1vw]">
                    {exp.company}
                  </h4>
                  <h5 className="text-white/70 text-[3.9vw] sm:text-[2.4vw] md:text-[2vw] lg:text-[1.6vw] xl:text-[1vw]">
                    {exp.role}
                  </h5>
                </div>
                <div className="font-semibold text-[var(--accent)]">
                  <h5 className="text-nowrap">
                    <TextDate date={exp.startDate} />{" "}
                    {exp.endDate ? (
                      <>
                        {" - "}
                        <TextDate date={exp.endDate} />
                      </>
                    ) : (
                      "~"
                    )}
                  </h5>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
}
