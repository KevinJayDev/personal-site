// Hero CTA button: "Get in touch" pill with animated arrow circle. Created 2026-04-26.
"use client";

import { ArrowRight } from "lucide-react";

export default function HeroCTA() {
  return (
    <a
      href="mailto:kevin@ksjay.com"
      className="group inline-flex items-center gap-2 bg-primary rounded-full pl-5 pr-1 py-1 transition-all hover:gap-3 w-fit"
    >
      <span className="text-sm font-medium text-black">Get in touch</span>
      <span className="bg-black rounded-full w-9 h-9 flex items-center justify-center transition-transform group-hover:scale-110 shrink-0">
        <ArrowRight className="w-4 h-4 text-primary" />
      </span>
    </a>
  );
}
