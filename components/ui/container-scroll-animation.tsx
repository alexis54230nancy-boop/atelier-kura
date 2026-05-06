"use client";

import React, { useRef } from "react";
import { useScroll, useTransform, motion, type MotionValue } from "framer-motion";

export const ContainerScroll = ({
  titleComponent,
  children,
}: {
  titleComponent: React.ReactNode;
  children: React.ReactNode;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const rotate = useTransform(scrollYProgress, [0, 1], [18, 0]);
  const scale = useTransform(
    scrollYProgress,
    [0, 1],
    isMobile ? [0.72, 0.96] : [1.04, 1]
  );
  const translate = useTransform(scrollYProgress, [0, 1], [0, -80]);

  return (
    <div
      ref={containerRef}
      className="relative flex items-center justify-center p-4 md:p-20"
      style={{ height: isMobile ? "56rem" : "76rem" }}
    >
      <div className="relative w-full" style={{ perspective: "1100px" }}>
        <ScrollHeader translate={translate}>{titleComponent}</ScrollHeader>
        <ScrollCard rotate={rotate} scale={scale} translate={translate}>
          {children}
        </ScrollCard>
      </div>
    </div>
  );
};

const ScrollHeader = ({
  translate,
  children,
}: {
  translate: MotionValue<number>;
  children: React.ReactNode;
}) => (
  <motion.div
    style={{ translateY: translate }}
    className="mx-auto mb-8 max-w-5xl text-center"
  >
    {children}
  </motion.div>
);

const ScrollCard = ({
  rotate,
  scale,
  translate,
  children,
}: {
  rotate: MotionValue<number>;
  scale: MotionValue<number>;
  translate: MotionValue<number>;
  children: React.ReactNode;
}) => (
  <motion.div
    style={{
      rotateX: rotate,
      scale,
      translateY: translate,
      boxShadow:
        "0 0 #0000004d, 0 9px 20px #0000004a, 0 37px 37px #00000042, 0 84px 50px #00000026, 0 149px 60px #0000000a",
    }}
    className="mx-auto -mt-10 h-[32rem] w-full max-w-5xl overflow-hidden rounded-[28px] border border-white/10 bg-[#0d0d0f]/95 shadow-2xl md:h-[42rem]"
  >
    {children}
  </motion.div>
);
