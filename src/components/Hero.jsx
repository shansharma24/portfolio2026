"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mouse, ChevronDown } from "lucide-react";
import { FiGithub, FiLinkedin, FiTwitter, FiInstagram } from "react-icons/fi";
import mePortrait from "../assets/shan.jpg";

const SECTIONS = ["01", "02", "03", "04", "05"];

const fade = {
  hidden: { opacity: 0, y: 24 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, delay: 0.15 + i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
};

const silverGradient = {
  backgroundImage:
    "linear-gradient(180deg, #ffffff 0%, #d4d4d4 45%, #6b6b6b 85%, #2a2a2a 100%)",
  WebkitBackgroundClip: "text",
  backgroundClip: "text",
  color: "transparent",
  WebkitTextFillColor: "transparent",
};

export default function Hero() {
  return (
    <section
      className="relative flex min-h-screen w-full flex-col overflow-hidden bg-[#141414] text-white"
      style={{ fontFamily: "Inter, system-ui, sans-serif" }}
    >
      {/* Portrait */}
      <motion.div
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
        className="pointer-events-none absolute inset-y-0 right-0 z-0 w-full md:w-[62%] lg:w-[58%]"
      >
        <img
          src={mePortrait}
          alt="Shan Sharma portrait"
          className="h-full w-full object-cover object-center md:object-[center_top] grayscale"
        />
        {/* Left fade into background */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, #141414 0%, rgba(20,20,20,0.9) 15%, rgba(20,20,20,0.25) 40%, transparent 70%)",
          }}
        />
        {/* Top + bottom vignette */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(8,8,8,0.4) 0%, transparent 25%, transparent 70%, #141414 100%)",
          }}
        />
      </motion.div>

      {/* Hero content */}
      <div className="relative z-10 flex flex-1 items-center px-6 md:px-12">
        <div className="max-w-2xl pb-24 pt-10 md:pb-32 md:pt-16">
          <motion.p
            custom={0} initial="hidden" animate="show" variants={fade}
            className="mb-6 text-[11px] font-medium tracking-[0.32em] text-neutral-400"
          >
            HELLO, I&apos;M
          </motion.p>

          <motion.h1
            custom={1} initial="hidden" animate="show" variants={fade}
            className="font-black leading-[0.88] tracking-tight"
            style={{ ...silverGradient, fontSize: "clamp(3.5rem, 11vw, 9rem)" }}
          >
            SHAN
            <br />
            SHARMA
          </motion.h1>

          <motion.div
            custom={2} initial="hidden" animate="show" variants={fade}
            className="mt-6"
          >
            <p className="text-base font-light tracking-[0.32em] text-neutral-400 md:text-lg">
              SOFTWARE ENGINEER
            </p>
            <div className="mt-3 h-px w-16 bg-neutral-500/60" />
          </motion.div>

          <motion.p
            custom={3} initial="hidden" animate="show" variants={fade}
            className="mt-8 max-w-md text-base leading-relaxed text-white/85 md:text-[17px]"
          >
            I build scalable, efficient, and human-centered digital experiences.
          </motion.p>

          <motion.div
            custom={4} initial="hidden" animate="show" variants={fade}
            className="mt-10 flex flex-wrap items-center gap-6"
          >
            <button className="group inline-flex items-center gap-3 rounded-full border border-white/80 bg-transparent px-6 py-3.5 text-[11px] font-semibold tracking-[0.22em] text-white transition-all hover:bg-white hover:text-[#141414]">
              VIEW MY WORK
              <span className="grid h-6 w-6 place-items-center rounded-full bg-white text-[#141414] transition-transform group-hover:translate-x-1 group-hover:bg-[#141414] group-hover:text-white">
                <ArrowRight className="h-3.5 w-3.5" strokeWidth={2.5} />
              </span>
            </button>

            <a
              href="#contact"
              className="group inline-flex items-center gap-3 text-[11px] font-medium tracking-[0.22em] text-white/90 transition-colors hover:text-white"
            >
              LET&apos;S CONNECT
              <span className="h-1.5 w-1.5 rounded-full bg-white transition-transform group-hover:scale-125" />
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-20 left-6 z-10 hidden items-center gap-3 md:left-12 md:flex"
      >
        <Mouse className="h-5 w-5 text-white/80" strokeWidth={1.25} />
        <div className="flex flex-col gap-1">
          <span className="text-[10px] font-medium tracking-[0.28em] text-white/80">
            SCROLL TO EXPLORE
          </span>
          <motion.span
            animate={{ y: [0, 4, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown className="h-3.5 w-3.5 text-white/60" strokeWidth={1.5} />
          </motion.span>
        </div>
      </motion.div>

      {/* Section indicators */}
      <div className="pointer-events-none absolute right-6 top-1/2 z-20 hidden -translate-y-1/2 flex-col gap-5 lg:flex">
        {SECTIONS.map((n, i) => {
          const active = i === 0;
          return (
            <div key={n} className="flex items-center gap-3 text-[11px] tracking-[0.2em]">
              <span className={active ? "text-white" : "text-neutral-500"}>{n}</span>
              <span className={`h-px ${active ? "w-8 bg-white" : "w-4 bg-neutral-600"}`} />
              <span className={active ? "text-white" : "text-neutral-500"}>
                {active ? "HOME" : n}
              </span>
            </div>
          );
        })}
      </div>

      {/* Footer */}
      <footer className="relative z-10 border-t border-neutral-800 bg-[#141414]/70 px-6 py-5 backdrop-blur md:px-12">
        <div className="flex items-center justify-between">
          <p className="text-xs text-neutral-400">
            © 2024 Shan Sharma. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            {[FiGithub, FiLinkedin, FiTwitter, FiInstagram].map((Icon, i) => (
              <a key={i} href="#" className="text-neutral-400 transition-colors hover:text-white">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </footer>
    </section>
  );
}
