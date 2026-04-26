// Words pull-up animation: each word slides up on first view. Created 2026-04-26.
"use client";

import { CSSProperties, useRef } from "react";
import { motion, useInView } from "framer-motion";

interface Props {
  words: string[];
  className?: string;
  style?: CSSProperties;
}

export default function WordsPullUp({ words, className = "", style }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  return (
    <div ref={ref} className={`flex flex-wrap ${className}`} style={style}>
      {words.map((word, i) => (
        <span
          key={i}
          style={{ overflow: "hidden", display: "inline-block", marginRight: "0.18em" }}
        >
          <motion.span
            initial={{ y: 24, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{
              delay: i * 0.08,
              duration: 0.65,
              ease: [0.16, 1, 0.3, 1],
            }}
            style={{ display: "inline-block" }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </div>
  );
}
