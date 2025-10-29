"use client";

import Image from "next/image";
import { motion, useAnimation, type Transition, type Variants } from "motion/react";

interface ClapperboardProps extends React.HTMLAttributes<HTMLDivElement> {
  width?: number;
  height?: number;
}

const transition: Transition = {
  type: "spring",
  stiffness: 400,
  damping: 10,
  mass: 0.8,
};

const variants: Variants = {
  normal: {
    rotate: 0,
    y: 0,
  },
  animate: {
    rotate: [-15, 0],
    y: [-4, 0],
    transition,
  },
};

export const Clapperboard = ({
  width = 120,
  height = 120,
  ...props
}: ClapperboardProps) => {
  const controls = useAnimation();

  return (
    <div
      style={{
        cursor: "pointer",
        userSelect: "none",
        padding: "8px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onMouseEnter={() => controls.start("animate")}
      onMouseLeave={() => controls.start("normal")}
      {...props}
    >
      <motion.div
        variants={variants}
        animate={controls}
        initial="normal"
        style={{ display: "inline-block", transform: "scale(1.5)" }}
      >
        <Image
          src="/allokits.png"
          alt="Allokits Logo"
          width={60}
          height={60}
          priority
        />
      </motion.div>
    </div>
  );
};
