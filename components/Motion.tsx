"use client";

import { type ReactNode } from "react";
import { motion, type Variants } from "framer-motion";

interface MotionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

// Fade in on scroll
export const FadeIn = ({ children, className, delay = 0 }: MotionProps) => (
  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.6, delay, ease: "easeOut" }}
    className={className}
  >
    {children}
  </motion.div>
);

// Slide up + fade on scroll
export const SlideUp = ({ children, className, delay = 0 }: MotionProps) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.6, delay, ease: "easeOut" }}
    className={className}
  >
    {children}
  </motion.div>
);

// Slide in from left or right
export const SlideIn = ({
  children,
  className,
  delay = 0,
  direction = "left",
}: MotionProps & { direction?: "left" | "right" }) => (
  <motion.div
    initial={{ opacity: 0, x: direction === "left" ? -60 : 60 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.7, delay, ease: "easeOut" }}
    className={className}
  >
    {children}
  </motion.div>
);

// Scale up + fade on scroll
export const ScaleIn = ({ children, className, delay = 0 }: MotionProps) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.6, delay, ease: "easeOut" }}
    className={className}
  >
    {children}
  </motion.div>
);

// Stagger container — wraps children that should animate in sequence
const staggerContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

export const StaggerContainer = ({ children, className }: MotionProps) => (
  <motion.div
    variants={staggerContainerVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-50px" }}
    className={className}
  >
    {children}
  </motion.div>
);

// Stagger item — use inside StaggerContainer
const staggerItemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export const StaggerItem = ({ children, className }: Omit<MotionProps, "delay">) => (
  <motion.div variants={staggerItemVariants} className={className}>
    {children}
  </motion.div>
);
