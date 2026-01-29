"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function LampDemo() {
  return (
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
      >
        Build lamps <br /> the right way
      </motion.h1>
    </LampContainer>
  );
}

export const LampContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "relative flex flex-col items-center justify-start overflow-hidden bg-slate-950 w-full z-0",
        className,
      )}
    >
      {/* Lamp Effect - Mobile Optimized */}
      <div className="relative w-full md:h-[100px] h-[60px] flex items-start justify-center isolate z-0">
        {/* Left Cone */}
        <motion.div
          initial={{ opacity: 0.5, width: "10rem" }}
          whileInView={{ opacity: 1, width: "80vw" }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{
            delay: 0.2,
            duration: 1,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute top-0 right-1/2 h-40 md:h-56 w-[80vw] max-w-[30rem] md:max-w-[80%] bg-gradient-conic from-[#b48afc] via-transparent to-transparent [--conic-position:from_70deg_at_center_top]"
        >
          <div className="absolute w-full left-0 bg-slate-950 h-32 md:h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
          <div className="absolute w-20 md:w-40 h-full left-0 bg-slate-950 bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)]" />
        </motion.div>

        {/* Right Cone */}
        <motion.div
          initial={{ opacity: 0.5, width: "10rem" }}
          whileInView={{ opacity: 1, width: "80vw" }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{
            delay: 0.2,
            duration: 1,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute top-0 left-1/2 h-40 md:h-56 w-[80vw] max-w-[30rem] md:max-w-[80%] bg-gradient-conic from-transparent via-transparent to-[#b48afc] [--conic-position:from_290deg_at_center_top]"
        >
          <div className="absolute w-20 md:w-40 h-full right-0 bg-slate-950 bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]" />
          <div className="absolute w-full right-0 bg-slate-950 h-32 md:h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
        </motion.div>

        {/* Blur effects */}
        <div className="absolute top-32 md:top-40 h-32 md:h-48 w-full translate-y-8 md:translate-y-12 scale-x-150 bg-slate-950 blur-2xl"></div>
        <div className="absolute top-32 md:top-40 z-50 h-32 md:h-48 w-full bg-transparent opacity-10 backdrop-blur-md"></div>

        {/* Light orbs */}
        <div className="absolute top-20 md:top-24 z-50 h-24 md:h-36 w-[20rem] md:w-[28rem] rounded-full bg-[#b48afc] opacity-50 blur-3xl"></div>
        <motion.div
          initial={{ width: "6rem" }}
          whileInView={{ width: "12rem" }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{
            delay: 0.2,
            duration: 1,
            ease: "easeInOut",
          }}
          className="absolute top-10 md:top-14 z-30 h-24 md:h-36 w-48 md:w-64 rounded-full bg-[#c89dff] blur-2xl"
        ></motion.div>

        {/* Light beam */}
        <motion.div
          initial={{ width: "10rem" }}
          whileInView={{ width: "80vw" }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{
            delay: 0.2,
            duration: 1,
            ease: "easeInOut",
          }}
          className="absolute top-0 z-50 h-0.5 w-[80vw] max-w-[30rem] md:max-w-[80%] bg-[#b48afc]"
        ></motion.div>

        {/* Top mask */}
        <div className="absolute top-0 z-40 h-16 md:h-20 w-full bg-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-50 w-full px-4 md:px-5 -mt-8 md:-mt-16">
        {children}
      </div>
    </div>
  );
};
