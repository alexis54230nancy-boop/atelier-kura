"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const SESSION_KEY = "kura-intro-shown";
const E = [0.22, 1, 0.36, 1] as [number, number, number, number];

export default function IntroScreen() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!sessionStorage.getItem(SESSION_KEY)) {
      setVisible(true);
      sessionStorage.setItem(SESSION_KEY, "1");
      const t = setTimeout(() => setVisible(false), 2400);
      return () => clearTimeout(t);
    }
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="intro"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.9, ease: E }}
          className="fixed inset-0 z-[99999] flex items-center justify-center bg-[#0b0b0c]"
        >
          {/* Ambient center glow */}
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_55%_55%_at_50%_50%,rgba(168,146,110,0.06),transparent)]" />

          <div className="flex flex-col items-center gap-1">
            {/* ATELIER */}
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.22, ease: E }}
              className="text-[9px] uppercase tracking-[0.6em] text-white/28"
            >
              Atelier
            </motion.div>

            {/* KŪRA */}
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.38, ease: E }}
              className="font-[family-name:var(--font-after)] text-[clamp(5rem,15vw,10rem)] font-[300] leading-none tracking-[-0.04em] text-[#f2efe8]"
            >
              Kūra
            </motion.div>

            {/* Gold expanding line */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.1, delay: 0.72, ease: E }}
              style={{ originX: 0.5 }}
              className="mt-3 h-px w-14 bg-gradient-to-r from-transparent via-[#A8926E]/50 to-transparent"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
