"use client";

import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ui/ModeToggle";

export default function Home() {
  return (
    <main className="flex items-center justify-center h-screen">
      <Button>click me</Button>
      <ModeToggle></ModeToggle>
    </main>
  );
}
