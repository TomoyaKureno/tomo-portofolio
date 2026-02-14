import { type Transition, type Variants } from "framer-motion";

export const smoothTransition: Transition = {
  type: "tween",
  ease: [0.16, 1, 0.3, 1],
  duration: 0.32,
};

export const interactiveCardTransition: Transition = {
  type: "spring",
  stiffness: 280,
  damping: 20,
};

export const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: "easeOut" },
  },
};

export const slidePageVariants: Variants = {
  initial: (direction: number) => ({
    x: direction > 0 ? "100%" : direction < 0 ? "-100%" : 0,
    opacity: direction === 0 ? 1 : 0.985,
  }),
  animate: {
    x: 0,
    opacity: 1,
    transition: smoothTransition,
  },
  exit: (direction: number) => ({
    x: direction > 0 ? "-100%" : direction < 0 ? "100%" : 0,
    opacity: direction === 0 ? 1 : 0.985,
    transition: smoothTransition,
  }),
};

export const staggerContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
};
