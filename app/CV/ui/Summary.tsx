import React from "react";
import { summary } from "../CVdata";

export default function Summary() {
  return (
    <section className="mb-8">
      <h2 className="text-lg font-semibold border-b border-neutral-200 pb-1 mb-3">
        Professional Summary
      </h2>
      <p className="text-sm leading-relaxed">{summary}</p>
    </section>
  );
}
