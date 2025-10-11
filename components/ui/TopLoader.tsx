"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation"; // For detecting route changes

export default function TopLoader() {
  const pathname = usePathname();
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!pathname) return;

    let interval: number;

    // Start loading
    setLoading(true);
    setProgress(0);

    // eslint-disable-next-line prefer-const
    interval = window.setInterval(() => {
      setProgress((prev) => {
        if (prev >= 90) {
          clearInterval(interval);
          return prev;
        }
        return prev + Math.random() * 10; // fake progress
      });
    }, 200);

    // Finish loading after "route changes"
    const finishTimeout = window.setTimeout(() => {
      setProgress(100);
      window.setTimeout(() => {
        setProgress(0);
        setLoading(false);
      }, 300);
    }, 1000); // simulate network delay

    return () => {
      clearInterval(interval);
      clearTimeout(finishTimeout);
    };
  }, [pathname]);

  if (!loading) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-2 z-52 bg-[var(--color-foreground)]">
      <div
        className="h-2  text-white transition-all duration-200"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
