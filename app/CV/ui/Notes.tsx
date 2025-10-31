import React from "react";
import { education, notes } from "../CVdata";

export default function Notes() {
  return (
    <section className="mb-8 grid grid-cols-1 md:grid-cols-2 gap-8">
      <div>
        <h2 className="text-lg font-semibold border-b border-neutral-200 pb-1 mb-2">
          Education
        </h2>
        <p className="text-sm">{education}</p>
      </div>

      <div>
        <h2 className="text-lg font-semibold border-b border-neutral-200 pb-1 mb-2">
          Notes
        </h2>
        <p className="text-sm">{notes}</p>
      </div>
    </section>
  );
}
