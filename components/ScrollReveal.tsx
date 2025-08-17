"use client";

import { motion } from "framer-motion";
import React, { ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  direction?: "left" | "right" | "up" | "down";
  delay?: number;
  duration?: number;
}

const directionVariants = {
  left: { x: -50, opacity: 0 },
  right: { x: 50, opacity: 0 },
  up: { y: 50, opacity: 0 },
  down: { y: -50, opacity: 0 },
};

const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  direction = "up",
  delay = 0.3,
  duration = 3,
}) => {
  const initial = directionVariants[direction] || directionVariants.up;

  return (
    <motion.div
      initial={initial}
      whileInView={{ x: 0, y: 0, opacity: 1 }}
      transition={{ duration, delay, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.3 }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;
