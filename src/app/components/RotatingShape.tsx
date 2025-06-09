"use client";
import React, { ReactNode } from "react";
import { motion } from "framer-motion";

type RotatingShapeProps = {
  content: ReactNode;
  direction?: "left" | "right";
  duration?: number;
};

const RotatingShape = ({
  content,
  direction,
  duration,
}: RotatingShapeProps) => {
  // define the rotation animation
  const rotationAnimation = {
    animate: {
      // rotate 360 degrees based on the direction
      rotate: direction === "right" ? 360 : direction === "left" ? -360 : 0,
      transition: {
        duration: duration,
        ease: "linear",
        repeat: Infinity,
      },
    },
  };

  return (
    <motion.div variants={rotationAnimation} animate="animate">
      {content}
    </motion.div>
  );
};

export default RotatingShape;
