"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 32, restDelta: 0.001 });

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-[9999] h-px w-full origin-left bg-[#A8926E]/60"
      style={{ scaleX }}
    />
  );
}
