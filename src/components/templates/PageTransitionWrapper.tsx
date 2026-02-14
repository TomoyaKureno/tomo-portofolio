"use client";

import { motion, useAnimationControls } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import { getPageDirection } from "@/src/lib/pageCarousel";
import { smoothTransition } from "@/src/lib/motion";

type PageTransitionWrapperProps = {
  children: React.ReactNode;
};

export default function PageTransitionWrapper({ children }: PageTransitionWrapperProps) {
  const pathname = usePathname();
  const previousPathRef = useRef(pathname);
  const controls = useAnimationControls();

  useEffect(() => {
    const direction = getPageDirection(pathname, previousPathRef.current);
    previousPathRef.current = pathname;

    const fromX = direction > 0 ? 96 : direction < 0 ? -96 : 0;

    controls.set({
      x: fromX,
      opacity: fromX === 0 ? 1 : 0.98,
    });

    controls.start({
      x: 0,
      opacity: 1,
      transition: smoothTransition,
    });
  }, [controls, pathname]);

  return (
    <div style={{ width: "100%", overflow: "hidden" }}>
      <motion.div initial={false} animate={controls} style={{ width: "100%", willChange: "transform" }}>
        {children}
      </motion.div>
    </div>
  );
}
