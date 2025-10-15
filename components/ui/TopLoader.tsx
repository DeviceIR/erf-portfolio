"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function TopLoader() {
  const pathname = usePathname();
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!pathname) return;

    setLoading(true);
    setProgress(0);

    // Step-like fake loading
    const steps = [40, 75, 100]; // define fake progress steps
    const delays = [200, 400, 700]; // when each step should happen

    const timers = steps.map((step, index) =>
      setTimeout(() => {
        setProgress(step);
        if (step === 100) {
          // once complete, hide after short delay
          setTimeout(() => {
            setLoading(false);
            setProgress(0);
          }, 300);
        }
      }, delays[index])
    );

    return () => {
      timers.forEach(clearTimeout);
    };
  }, [pathname]);

  if (!loading) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-2 z-[9999] bg-transparent">
      <div
        className="h-1 bg-[var(--color-foreground)] transition-all duration-300 ease-out rounded-2xl"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
