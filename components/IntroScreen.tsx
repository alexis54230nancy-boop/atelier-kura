"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

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

          <div className="flex flex-col items-center gap-5">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.88 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.85, delay: 0.2, ease: E }}
            >
              <Image
                src="/brand/logos/logo.png"
                alt="Atelier Kūra"
                width={72}
                height={72}
                priority
                className="opacity-90"
              />
            </motion.div>

            {/* Gold expanding line */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.1, delay: 0.65, ease: E }}
              style={{ originX: 0.5 }}
              className="h-px w-14 bg-gradient-to-r from-transparent via-[#A8926E]/50 to-transparent"
            />

            {/* Atelier Kūra — small label */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.85, ease: E }}
              className="text-[8.5px] uppercase tracking-[0.55em] text-white/28"
            >
              Atelier Kūra
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
