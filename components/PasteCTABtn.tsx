'use client'

import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

export default function PasteCTABtn() {
  return (
    <Button variant="hero" size="xl" onClick={() => {
      document.getElementById("tool-section")?.scrollIntoView({ behavior: "smooth" });
    }}>
      Paste your post
      <ArrowRight className="ml-1 h-5 w-5" />
    </Button>
  )
}