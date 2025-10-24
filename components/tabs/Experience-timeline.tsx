import React from "react";
import { Timeline } from "@/components/ui/timeline";
import data from "@/lib/projects";

export default function Experience() {
  return (
    <div className="relative w-full overflow-clip">
      <Timeline data={data} />
    </div>
  );
}
