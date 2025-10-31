"use client";

import React from "react";
import CVPage from "../page";
import { Button } from "@/components/ui/Button";
import html2canvas from "html2canvas";

export default function CVWithDownload() {
  const printRef = React.useRef(null);

  const handleDownloadPdf = async () => {
    const element = printRef.current;
    console.log(element);
    if (!element) return;

    const canvas = await html2canvas(element);
  };

  return (
    <div className="p-8">
      <div ref={printRef}>
        <CVPage />
      </div>

      <Button
        onClick={handleDownloadPdf}
        className="mb-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        Download CV as PDF
      </Button>
    </div>
  );
}
