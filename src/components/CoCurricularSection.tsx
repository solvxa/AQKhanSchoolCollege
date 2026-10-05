"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  MdShield,
  MdSportsCricket,
  MdEmojiEvents,
  MdExplore,
  MdCheckCircle,
  MdVerified,
  MdWorkspacePremium,
  MdTravelExplore,
  MdStars,
  MdArrowForward,
} from "react-icons/md";

export default function CoCurricularSection() {
  return (
    <section className="w-full py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-slate-50 via-slate-100/60 to-slate-50 relative overflow-hidden" id="co-curricular">
      {/* Subtle top divider line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-slate-200/80" />

      {/* Background ambient blurs */}
      <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-[#00153d]/5 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full bg-[#e0b252]/10 blur-3xl pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Centered Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#00153d]/5 border border-[#00153d]/10 text-[#00153d] mb-3">
            <span className="w-2 h-2 rounded-full bg-[#e0b252] shadow-sm shadow-[#e0b252]/80" />
            <span className="text-xs font-bold uppercase tracking-widest text-[#00153d]">Beyond the Classroom</span>
          </div>
          <h2 className="font-serif font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#00153d] tracking-tight">
            Cultivating Well-Rounded Champions
          </h2>
          <div className="w-20 h-1 bg-[#e0b252] mx-auto mt-3.5 rounded-full" />
          <p className="text-sm sm:text-base text-slate-600 mt-3.5 font-medium leading-relaxed">
            Character formation, athletic discipline, oratorical eloquence, and scientific curiosity are integral to our academic DNA. We empower every scholar to lead with distinction.
          </p>
        </motion.div>

        {/* 4 Compact, Equal-Sized Pillar Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 items-stretch">
          {/* Card 1: Academic Houses */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="bg-white rounded-2xl border border-slate-200/90 shadow-[0_10px_30px_-5px_rgba(0,21,61,0.08)] hover:shadow-[0_20px_40px_-5px_rgba(0,21,61,0.18)] hover:border-[#e0b252]/60 hover:-translate-y-1 transition-all duration-300 group flex flex-col justify-between relative overflow-hidden h-full"
          >
            <div className="h-1 w-full bg-gradient-to-r from-[#00153d] via-[#e0b252] to-[#00153d] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="p-5 space-y-3.5 flex-1 flex flex-col justify-between">
              {/* Top Icon & Level Tag */}
              <div className="flex items-center justify-between">
                <div className="w-11 h-11 rounded-xl bg-[#00153d]/5 text-[#00153d] group-hover:bg-[#00153d] group-hover:text-[#e0b252] flex items-center justify-center shrink-0 border border-[#00153d]/10 transition-colors duration-300 shadow-sm">
                  <MdShield className="text-[24px]" />
                </div>
                <span className="text-[10.5px] font-bold text-[#00153d] uppercase tracking-wider bg-slate-100 px-2.5 py-1 rounded-md border border-slate-200/60">
                  House System
                </span>
              </div>

              <div>
                <h3 className="font-serif font-bold text-lg text-[#00153d] group-hover:text-[#c59a3f] transition-colors leading-snug min-h-[44px] flex items-center">
                  Academic Houses &amp; Council
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-medium mt-1.5 min-h-[54px]">
                  Four historic houses foster leadership, brotherhood, and spirited rivalries through annual declamation, quiz, and sports championships.
                </p>
              </div>

              {/* 4 Houses Color Pills - Compact 2x2 Grid */}
              <div className="space-y-1 pt-0.5">
                <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Official Houses</div>
                <div className="grid grid-cols-2 gap-1.5 text-xs font-semibold">
                  <div className="flex items-center gap-1.5 p-1.5 rounded-lg bg-slate-50 border border-slate-200/70">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#00153d] shrink-0" />
                    <span className="text-slate-800 text-[11px] font-bold truncate">Jinnah Blue</span>
                  </div>
                  <div className="flex items-center gap-1.5 p-1.5 rounded-lg bg-slate-50 border border-slate-200/70">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#c59a3f] shrink-0" />
                    <span className="text-slate-800 text-[11px] font-bold truncate">Iqbal Gold</span>
                  </div>
                  <div className="flex items-center gap-1.5 p-1.5 rounded-lg bg-slate-50 border border-slate-200/70">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#991b1b] shrink-0" />
                    <span className="text-slate-800 text-[11px] font-bold truncate">Sir Syed Red</span>
                  </div>
                  <div className="flex items-center gap-1.5 p-1.5 rounded-lg bg-slate-50 border border-slate-200/70">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#15803d] shrink-0" />
                    <span className="text-slate-800 text-[11px] font-bold truncate">Khan Green</span>
                  </div>
                </div>
              </div>

              {/* Feature Checkmarks */}
              <ul className="pt-0.5 space-y-1.5 text-xs text-slate-700 font-medium">
                <li className="flex items-center gap-2">
                  <MdCheckCircle className="text-[#e0b252] text-[16px] shrink-0" />
                  <span className="truncate">Student Council governance</span>
                </li>
                <li className="flex items-center gap-2">
                  <MdCheckCircle className="text-[#e0b252] text-[16px] shrink-0" />
                  <span className="truncate">Inter-House Trophy championship</span>
                </li>
              </ul>
            </div>

            <div className="p-5 pt-0">
              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#00153d]">
                <span>Prefectural Governance</span>
                <MdVerified className="text-[#e0b252] text-[18px]" />
              </div>
            </div>
          </motion.div>

          {/* Card 2: Sports & Athletics */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white rounded-2xl border border-slate-200/90 shadow-[0_10px_30px_-5px_rgba(0,21,61,0.08)] hover:shadow-[0_20px_40px_-5px_rgba(0,21,61,0.18)] hover:border-[#e0b252]/60 hover:-translate-y-1 transition-all duration-300 group flex flex-col justify-between relative overflow-hidden h-full"
          >
            <div className="h-1 w-full bg-gradient-to-r from-[#00153d] via-[#e0b252] to-[#00153d] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="p-5 space-y-3.5 flex-1 flex flex-col justify-between">
              {/* Top Icon & Level Tag */}
              <div className="flex items-center justify-between">
                <div className="w-11 h-11 rounded-xl bg-[#00153d]/5 text-[#00153d] group-hover:bg-[#00153d] group-hover:text-[#e0b252] flex items-center justify-center shrink-0 border border-[#00153d]/10 transition-colors duration-300 shadow-sm">
                  <MdSportsCricket className="text-[24px]" />
                </div>
                <span className="text-[10.5px] font-bold text-[#00153d] uppercase tracking-wider bg-slate-100 px-2.5 py-1 rounded-md border border-slate-200/60">
                  Physical Grit
                </span>
              </div>

              <div>
                <h3 className="font-serif font-bold text-lg text-[#00153d] group-hover:text-[#c59a3f] transition-colors leading-snug min-h-[44px] flex items-center">
                  Sports &amp; Athletics Gala
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-medium mt-1.5 min-h-[54px]">
                  Full turf cricket grounds, basketball arenas, and fitness suites host daily professional coaching under certified athletic directors.
                </p>
              </div>

              {/* Sports Facilities - Compact 2x2 Grid */}
              <div className="space-y-1 pt-0.5">
                <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Campus Facilities</div>
                <div className="grid grid-cols-2 gap-1.5 text-xs font-semibold">
                  <div className="flex items-center gap-1.5 p-1.5 rounded-lg bg-slate-50 border border-slate-200/70">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#00153d] shrink-0" />
                    <span className="text-slate-800 text-[11px] font-bold truncate">Turf Cricket</span>
                  </div>
                  <div className="flex items-center gap-1.5 p-1.5 rounded-lg bg-slate-50 border border-slate-200/70">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#c59a3f] shrink-0" />
                    <span className="text-slate-800 text-[11px] font-bold truncate">Basketball</span>
                  </div>
                  <div className="flex items-center gap-1.5 p-1.5 rounded-lg bg-slate-50 border border-slate-200/70">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#00153d] shrink-0" />
                    <span className="text-slate-800 text-[11px] font-bold truncate">Badminton</span>
                  </div>
                  <div className="flex items-center gap-1.5 p-1.5 rounded-lg bg-slate-50 border border-slate-200/70">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#c59a3f] shrink-0" />
                    <span className="text-slate-800 text-[11px] font-bold truncate">Table Tennis</span>
                  </div>
                </div>
              </div>

              {/* Feature Checkmarks */}
              <ul className="pt-0.5 space-y-1.5 text-xs text-slate-700 font-medium">
                <li className="flex items-center gap-2">
                  <MdCheckCircle className="text-[#e0b252] text-[16px] shrink-0" />
                  <span className="truncate">Cadet-inspired morning drills</span>
                </li>
                <li className="flex items-center gap-2">
                  <MdCheckCircle className="text-[#e0b252] text-[16px] shrink-0" />
                  <span className="truncate">15+ Regional Interschool Cups</span>
                </li>
              </ul>
            </div>

            <div className="p-5 pt-0">
              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#00153d]">
                <span>15+ Regional Trophies</span>
                <MdEmojiEvents className="text-[#e0b252] text-[18px]" />
              </div>
            </div>
          </motion.div>

          {/* Card 3: Mega Events & Debates */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="bg-white rounded-2xl border border-slate-200/90 shadow-[0_10px_30px_-5px_rgba(0,21,61,0.08)] hover:shadow-[0_20px_40px_-5px_rgba(0,21,61,0.18)] hover:border-[#e0b252]/60 hover:-translate-y-1 transition-all duration-300 group flex flex-col justify-between relative overflow-hidden h-full"
          >
            <div className="h-1 w-full bg-gradient-to-r from-[#00153d] via-[#e0b252] to-[#00153d] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="p-5 space-y-3.5 flex-1 flex flex-col justify-between">
              {/* Top Icon & Level Tag */}
              <div className="flex items-center justify-between">
                <div className="w-11 h-11 rounded-xl bg-[#00153d]/5 text-[#00153d] group-hover:bg-[#00153d] group-hover:text-[#e0b252] flex items-center justify-center shrink-0 border border-[#00153d]/10 transition-colors duration-300 shadow-sm">
                  <MdEmojiEvents className="text-[24px]" />
                </div>
                <span className="text-[10.5px] font-bold text-[#00153d] uppercase tracking-wider bg-slate-100 px-2.5 py-1 rounded-md border border-slate-200/60">
                  National Stage
                </span>
              </div>

              <div>
                <h3 className="font-serif font-bold text-lg text-[#00153d] group-hover:text-[#c59a3f] transition-colors leading-snug min-h-[44px] flex items-center">
                  Mega Events &amp; Debates
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-medium mt-1.5 min-h-[54px]">
                  National Science Fairs, All-Pakistan Bilingual Declamation Contests, Tajweed Quran honors, and the flagship AQK-MUN assembly.
                </p>
              </div>

              {/* Flagship Competitions - Compact 2x2 Grid */}
              <div className="space-y-1 pt-0.5">
                <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Key Competitions</div>
                <div className="grid grid-cols-2 gap-1.5 text-xs font-semibold">
                  <div className="flex items-center gap-1.5 p-1.5 rounded-lg bg-slate-50 border border-slate-200/70">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#00153d] shrink-0" />
                    <span className="text-slate-800 text-[11px] font-bold truncate">Bilingual Debate</span>
                  </div>
                  <div className="flex items-center gap-1.5 p-1.5 rounded-lg bg-slate-50 border border-slate-200/70">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#c59a3f] shrink-0" />
                    <span className="text-slate-800 text-[11px] font-bold truncate">AQK-MUN</span>
                  </div>
                  <div className="flex items-center gap-1.5 p-1.5 rounded-lg bg-slate-50 border border-slate-200/70">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#00153d] shrink-0" />
                    <span className="text-slate-800 text-[11px] font-bold truncate">STEM Science</span>
                  </div>
                  <div className="flex items-center gap-1.5 p-1.5 rounded-lg bg-slate-50 border border-slate-200/70">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#c59a3f] shrink-0" />
                    <span className="text-slate-800 text-[11px] font-bold truncate">Qiraat &amp; Naat</span>
                  </div>
                </div>
              </div>

              {/* Feature Checkmarks */}
              <ul className="pt-0.5 space-y-1.5 text-xs text-slate-700 font-medium">
                <li className="flex items-center gap-2">
                  <MdCheckCircle className="text-[#e0b252] text-[16px] shrink-0" />
                  <span className="truncate">FBISE podium debate finishes</span>
                </li>
                <li className="flex items-center gap-2">
                  <MdCheckCircle className="text-[#e0b252] text-[16px] shrink-0" />
                  <span className="truncate">Parliamentary decorum skills</span>
                </li>
              </ul>
            </div>

            <div className="p-5 pt-0">
              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#00153d]">
                <span>FBISE Declamation Honors</span>
                <MdWorkspacePremium className="text-[#e0b252] text-[18px]" />
              </div>
            </div>
          </motion.div>

          {/* Card 4: Study Tours & Expeditions */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-2xl border border-slate-200/90 shadow-[0_10px_30px_-5px_rgba(0,21,61,0.08)] hover:shadow-[0_20px_40px_-5px_rgba(0,21,61,0.18)] hover:border-[#e0b252]/60 hover:-translate-y-1 transition-all duration-300 group flex flex-col justify-between relative overflow-hidden h-full"
          >
            <div className="h-1 w-full bg-gradient-to-r from-[#00153d] via-[#e0b252] to-[#00153d] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="p-5 space-y-3.5 flex-1 flex flex-col justify-between">
              {/* Top Icon & Level Tag */}
              <div className="flex items-center justify-between">
                <div className="w-11 h-11 rounded-xl bg-[#00153d]/5 text-[#00153d] group-hover:bg-[#00153d] group-hover:text-[#e0b252] flex items-center justify-center shrink-0 border border-[#00153d]/10 transition-colors duration-300 shadow-sm">
                  <MdExplore className="text-[24px]" />
                </div>
                <span className="text-[10.5px] font-bold text-[#00153d] uppercase tracking-wider bg-slate-100 px-2.5 py-1 rounded-md border border-slate-200/60">
                  Fieldwork
                </span>
              </div>

              <div>
                <h3 className="font-serif font-bold text-lg text-[#00153d] group-hover:text-[#c59a3f] transition-colors leading-snug min-h-[44px] flex items-center">
                  Study Tours &amp; Expeditions
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-medium mt-1.5 min-h-[54px]">
                  Curated research excursions to SUPARCO space centers, Science Foundation labs, archeological sites, and industrial facilities.
                </p>
              </div>

              {/* Expedition Destinations - Compact 2x2 Grid */}
              <div className="space-y-1 pt-0.5">
                <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Key Destinations</div>
                <div className="grid grid-cols-2 gap-1.5 text-xs font-semibold">
                  <div className="flex items-center gap-1.5 p-1.5 rounded-lg bg-slate-50 border border-slate-200/70">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#00153d] shrink-0" />
                    <span className="text-slate-800 text-[11px] font-bold truncate">SUPARCO Labs</span>
                  </div>
                  <div className="flex items-center gap-1.5 p-1.5 rounded-lg bg-slate-50 border border-slate-200/70">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#c59a3f] shrink-0" />
                    <span className="text-slate-800 text-[11px] font-bold truncate">Science Found.</span>
                  </div>
                  <div className="flex items-center gap-1.5 p-1.5 rounded-lg bg-slate-50 border border-slate-200/70">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#00153d] shrink-0" />
                    <span className="text-slate-800 text-[11px] font-bold truncate">Taxila Heritage</span>
                  </div>
                  <div className="flex items-center gap-1.5 p-1.5 rounded-lg bg-slate-50 border border-slate-200/70">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#c59a3f] shrink-0" />
                    <span className="text-slate-800 text-[11px] font-bold truncate">Industrial Hubs</span>
                  </div>
                </div>
              </div>

              {/* Feature Checkmarks */}
              <ul className="pt-0.5 space-y-1.5 text-xs text-slate-700 font-medium">
                <li className="flex items-center gap-2">
                  <MdCheckCircle className="text-[#e0b252] text-[16px] shrink-0" />
                  <span className="truncate">Scientist &amp; researcher dialogue</span>
                </li>
                <li className="flex items-center gap-2">
                  <MdCheckCircle className="text-[#e0b252] text-[16px] shrink-0" />
                  <span className="truncate">National heritage awareness</span>
                </li>
              </ul>
            </div>

            <div className="p-5 pt-0">
              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#00153d]">
                <span>Experiential Learning</span>
                <MdTravelExplore className="text-[#e0b252] text-[18px]" />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Institutional Strip */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="mt-10 sm:mt-12 p-6 rounded-2xl bg-[#00153d] text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-[0_12px_36px_-6px_rgba(0,21,61,0.25)] border border-[#e0b252]/20"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#e0b252] text-[#00153d] flex items-center justify-center shrink-0 font-bold shadow-md">
              <MdStars className="text-2xl" />
            </div>
            <div>
              <h4 className="font-serif font-bold text-lg text-white">Holistic Character &amp; Leadership Ecosystem</h4>
              <p className="text-xs sm:text-sm text-slate-300 mt-0.5">Every student at Safari-1 Campus actively participates in house rivalries, athletic competitions, and civic service.</p>
            </div>
          </div>
          <a
            href="#admissions"
            className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#e0b252] to-[#c59a3f] text-[#00153d] font-bold text-xs sm:text-sm hover:brightness-110 transition-all shrink-0 shadow-md inline-flex items-center gap-2"
          >
            <span>Inquire for Co-Curricular Enrollment</span>
            <MdArrowForward className="text-[16px]" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
