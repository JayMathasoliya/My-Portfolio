"use client";
import React, { JSX } from "react";
import { motion, Variants } from "framer-motion";

const letterAnimation: Variants = {
  initial: {
    y: "100%",
    opacity: 0,
  },
  animate: (i: [number, number]) => ({
    y: 0,
    opacity: 1,
    transition: { duration: 0.3, ease: [0.2, 0, 0.1, 1], delay: i[0] },
  }),
};

const getLetter = (name: string): JSX.Element[] => {
  const letters: JSX.Element[] = [];
  name.split("").forEach((letter, index) => {
    return letters.push(
      <motion.span
        key={index}
        variants={letterAnimation}
        initial="initial"
        whileInView="animate"
        custom={[index * 0.02, (name.length - index) * 0.01]}
      >
        {letter}
      </motion.span>
    );
  });
  return letters;
};

type AnimatedTextProps = {
  text: string;
  textStyles: string;
};

const AnimatedText = ({ text, textStyles }: AnimatedTextProps) => {
  return <div className={`${textStyles}`}>{getLetter(text)}</div>;
};

export default AnimatedText;
