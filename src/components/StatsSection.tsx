"use client";

import React from "react";
import { motion } from "framer-motion";
import AnimatedCounter from "./AnimatedCounter";

export default function StatsSection() {
  return (
    <section className="w-full bg-[#00153d] text-white relative overflow-hidden py-5 sm:py-6 border-b border-white/10 shadow-sm">
      {/* Top Gold Border Accent Line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#e0b252] to-transparent opacity-90" />

      {/* Subtle Ambient Background Glows */}
      <div className="absolute -top-20 left-1/4 w-80 h-32 bg-[#e0b252]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 right-1/4 w-80 h-32 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20px" }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-y-5 sm:gap-y-6 gap-x-2 sm:gap-x-4 lg:gap-0 items-center"
        >
          {/* Stat 1: 25+ Years Legacy */}
          <div className="flex flex-col items-center text-center px-2 sm:px-3 lg:border-r lg:border-white/10 group transition-transform duration-300 hover:-translate-y-0.5">
            <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 text-[#e0b252] flex items-center justify-center mb-1.5 group-hover:bg-[#e0b252]/20 group-hover:border-[#e0b252]/50 group-hover:scale-105 transition-all duration-300">
              <span className="material-symbols-outlined text-lg">history_edu</span>
            </div>
            <div className="font-serif font-extrabold text-2xl sm:text-3xl text-white tracking-tight leading-none group-hover:text-[#e0b252] transition-colors flex items-baseline justify-center">
              <AnimatedCounter target={25} />
              <span className="text-[#e0b252] font-sans text-xl sm:text-2xl font-bold ml-0.5">+</span>
            </div>
            <div className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-slate-200 mt-1.5 leading-tight">
              Years Legacy
            </div>
            <div className="text-[10px] sm:text-[11px] text-slate-400 mt-0.5 font-medium leading-tight">
              Founded in 1999
            </div>
          </div>

          {/* Stat 2: 100% FBISE Pass Rate */}
          <div className="flex flex-col items-center text-center px-2 sm:px-3 lg:border-r lg:border-white/10 group transition-transform duration-300 hover:-translate-y-0.5">
            <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 text-[#e0b252] flex items-center justify-center mb-1.5 group-hover:bg-[#e0b252]/20 group-hover:border-[#e0b252]/50 group-hover:scale-105 transition-all duration-300">
              <span className="material-symbols-outlined text-lg">verified</span>
            </div>
            <div className="font-serif font-extrabold text-2xl sm:text-3xl text-white tracking-tight leading-none group-hover:text-[#e0b252] transition-colors flex items-baseline justify-center">
              <AnimatedCounter target={100} />
              <span className="text-[#e0b252] font-sans text-xl sm:text-2xl font-bold ml-0.5">%</span>
            </div>
            <div className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-slate-200 mt-1.5 leading-tight">
              FBISE Pass Rate
            </div>
            <div className="text-[10px] sm:text-[11px] text-slate-400 mt-0.5 font-medium leading-tight">
              Top Position Streaks
            </div>
          </div>

          {/* Stat 3: 3,500+ Scholars & Alumni */}
          <div className="flex flex-col items-center text-center px-2 sm:px-3 lg:border-r lg:border-white/10 group transition-transform duration-300 hover:-translate-y-0.5">
            <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 text-[#e0b252] flex items-center justify-center mb-1.5 group-hover:bg-[#e0b252]/20 group-hover:border-[#e0b252]/50 group-hover:scale-105 transition-all duration-300">
              <span className="material-symbols-outlined text-lg">groups</span>
            </div>
            <div className="font-serif font-extrabold text-2xl sm:text-3xl text-white tracking-tight leading-none group-hover:text-[#e0b252] transition-colors flex items-baseline justify-center">
              <AnimatedCounter target={3500} />
              <span className="text-[#e0b252] font-sans text-xl sm:text-2xl font-bold ml-0.5">+</span>
            </div>
            <div className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-slate-200 mt-1.5 leading-tight">
              Scholars &amp; Alumni
            </div>
            <div className="text-[10px] sm:text-[11px] text-slate-400 mt-0.5 font-medium leading-tight">
              Montessori to College
            </div>
          </div>

          {/* Stat 4: 180+ Expert Faculty */}
          <div className="flex flex-col items-center text-center px-2 sm:px-3 lg:border-r lg:border-white/10 group transition-transform duration-300 hover:-translate-y-0.5">
            <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 text-[#e0b252] flex items-center justify-center mb-1.5 group-hover:bg-[#e0b252]/20 group-hover:border-[#e0b252]/50 group-hover:scale-105 transition-all duration-300">
              <span className="material-symbols-outlined text-lg">school</span>
            </div>
            <div className="font-serif font-extrabold text-2xl sm:text-3xl text-white tracking-tight leading-none group-hover:text-[#e0b252] transition-colors flex items-baseline justify-center">
              <AnimatedCounter target={180} />
              <span className="text-[#e0b252] font-sans text-xl sm:text-2xl font-bold ml-0.5">+</span>
            </div>
            <div className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-slate-200 mt-1.5 leading-tight">
              Expert Faculty
            </div>
            <div className="text-[10px] sm:text-[11px] text-slate-400 mt-0.5 font-medium leading-tight">
              Certified Mentors
            </div>
          </div>

          {/* Stat 5: 8 Labs (AI & STEM Labs) */}
          <div className="flex flex-col items-center text-center px-2 sm:px-3 lg:border-r lg:border-white/10 group transition-transform duration-300 hover:-translate-y-0.5">
            <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 text-[#e0b252] flex items-center justify-center mb-1.5 group-hover:bg-[#e0b252]/20 group-hover:border-[#e0b252]/50 group-hover:scale-105 transition-all duration-300">
              <span className="material-symbols-outlined text-lg">science</span>
            </div>
            <div className="font-serif font-extrabold text-2xl sm:text-3xl text-white tracking-tight leading-none group-hover:text-[#e0b252] transition-colors flex items-baseline justify-center">
              <AnimatedCounter target={8} />
              <span className="text-[#e0b252] font-sans text-lg sm:text-xl font-bold ml-1">Labs</span>
            </div>
            <div className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-slate-200 mt-1.5 leading-tight">
              AI &amp; STEM Labs
            </div>
            <div className="text-[10px] sm:text-[11px] text-slate-400 mt-0.5 font-medium leading-tight">
              Modern Practical Wings
            </div>
          </div>

          {/* Stat 6: 50+ Annual Distinctions */}
          <div className="flex flex-col items-center text-center px-2 sm:px-3 group transition-transform duration-300 hover:-translate-y-0.5">
            <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 text-[#e0b252] flex items-center justify-center mb-1.5 group-hover:bg-[#e0b252]/20 group-hover:border-[#e0b252]/50 group-hover:scale-105 transition-all duration-300">
              <span className="material-symbols-outlined text-lg">military_tech</span>
            </div>
            <div className="font-serif font-extrabold text-2xl sm:text-3xl text-white tracking-tight leading-none group-hover:text-[#e0b252] transition-colors flex items-baseline justify-center">
              <AnimatedCounter target={50} />
              <span className="text-[#e0b252] font-sans text-lg sm:text-xl font-bold ml-1">+</span>
            </div>
            <div className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-slate-200 mt-1.5 leading-tight">
              Annual Distinctions
            </div>
            <div className="text-[10px] sm:text-[11px] text-slate-400 mt-0.5 font-medium leading-tight">
              Board &amp; Sports Trophies
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
