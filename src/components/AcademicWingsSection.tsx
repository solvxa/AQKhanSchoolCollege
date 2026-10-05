"use client";

import React from "react";
import { motion } from "framer-motion";
import ActivityCoverflowSlider from "./ActivitySlider";

export default function AcademicWingsSection() {
  return (
    <section className="w-full py-16 sm:py-20 lg:py-24 bg-white relative overflow-hidden" id="wings">
      {/* Subtle top divider line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-slate-200/80" />

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Centered Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-10 sm:mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#00153d]/5 border border-[#00153d]/10 text-[#00153d] mb-3">
            <span className="w-2 h-2 rounded-full bg-[#e0b252] shadow-sm shadow-[#e0b252]/80" />
            <span className="text-xs font-bold uppercase tracking-widest text-[#00153d]">Academic Divisions</span>
          </div>
          <h2 className="font-serif font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#00153d] tracking-tight">
            Purpose-Built Academic Wings
          </h2>
          <div className="w-20 h-1 bg-[#e0b252] mx-auto mt-3.5 rounded-full" />
          <p className="text-sm sm:text-base text-slate-600 mt-3.5 font-medium leading-relaxed">
            From early childhood Montessori foundations through collegiate intermediate disciplines under the Federal Board of Intermediate &amp; Secondary Education (FBISE).
          </p>
        </motion.div>

        {/* 5 Professional Academic Division Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 sm:gap-8">
          {/* Card 1: Pre-School & Montessori */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="lg:col-span-2 bg-white rounded-2xl overflow-hidden border border-slate-200/90 shadow-[0_12px_36px_-6px_rgba(0,21,61,0.14)] hover:shadow-[0_22px_45px_-6px_rgba(0,21,61,0.25)] hover:border-[#e0b252]/60 hover:-translate-y-1.5 transition-all duration-300 group flex flex-col justify-between relative"
            id="pre-school"
          >
            <div className="h-1 w-full bg-gradient-to-r from-[#00153d] via-[#e0b252] to-[#00153d] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div>
              <div className="h-56 sm:h-60 w-full overflow-hidden relative bg-slate-100">
                <img
                  className="w-full h-full object-cover object-[center_28%] group-hover:scale-105 transition-transform duration-700 ease-out"
                  src="/Pre-School &amp; Montessori.jpeg"
                  alt="Pre-School and Montessori classroom with teacher and young learners"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#00153d]/30 via-transparent to-transparent opacity-60 pointer-events-none" />
              </div>
              <div className="p-6 space-y-3">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="font-serif font-bold text-xl text-[#00153d] group-hover:text-[#c59a3f] transition-colors leading-snug">
                    Pre-School &amp; Montessori
                  </h3>
                  <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider bg-slate-100 px-2.5 py-0.5 rounded shrink-0">
                    Ages 3 – 5
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                  Play-based early learning with Montessori apparatus, sensorial exploration, phonics development, foundational numeracy, and caring child-psychology certified educators.
                </p>
                <ul className="pt-2 space-y-1.5 text-xs text-slate-700 font-medium">
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#e0b252] text-[18px] shrink-0">check_circle</span>
                    <span>Activity-driven Montessori environment</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#e0b252] text-[18px] shrink-0">check_circle</span>
                    <span>Nazra Quran with Tajweed initiation</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="p-6 pt-0">
              <div className="pt-3 border-t border-slate-100">
                <a
                  className="text-xs font-bold text-[#00153d] group-hover:text-[#c59a3f] inline-flex items-center gap-1.5 transition-colors"
                  href="#admissions"
                >
                  <span>View Montessori Curriculum</span>
                  <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Primary Wing */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-2 bg-white rounded-2xl overflow-hidden border border-slate-200/90 shadow-[0_12px_36px_-6px_rgba(0,21,61,0.14)] hover:shadow-[0_22px_45px_-6px_rgba(0,21,61,0.25)] hover:border-[#e0b252]/60 hover:-translate-y-1.5 transition-all duration-300 group flex flex-col justify-between relative"
          >
            <div className="h-1 w-full bg-gradient-to-r from-[#00153d] via-[#e0b252] to-[#00153d] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div>
              <div className="h-56 sm:h-60 w-full overflow-hidden relative bg-slate-100">
                <img
                  className="w-full h-full object-cover object-[center_18%] group-hover:scale-105 transition-transform duration-700 ease-out"
                  src="/Primary Wing.jpeg"
                  alt="Primary Wing students celebrating academic distinctions in courtyard"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#00153d]/30 via-transparent to-transparent opacity-60 pointer-events-none" />
              </div>
              <div className="p-6 space-y-3">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="font-serif font-bold text-xl text-[#00153d] group-hover:text-[#c59a3f] transition-colors leading-snug">
                    Primary Wing
                  </h3>
                  <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider bg-slate-100 px-2.5 py-0.5 rounded shrink-0">
                    Grades 1 – 5
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                  Robust foundations in English communicative skills, Mathematics, General Science, and Islamic Studies tailored to spark intellectual curiosity and confidence.
                </p>
                <ul className="pt-2 space-y-1.5 text-xs text-slate-700 font-medium">
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#e0b252] text-[18px] shrink-0">check_circle</span>
                    <span>Robotics, Mental Math &amp; Science clubs</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#e0b252] text-[18px] shrink-0">check_circle</span>
                    <span>Speech declamation &amp; creative arts</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="p-6 pt-0">
              <div className="pt-3 border-t border-slate-100">
                <a
                  className="text-xs font-bold text-[#00153d] group-hover:text-[#c59a3f] inline-flex items-center gap-1.5 transition-colors"
                  href="#admissions"
                >
                  <span>Explore Primary Division</span>
                  <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Card 3: Girls Wing (Collegiate) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-2 bg-white rounded-2xl overflow-hidden border border-slate-200/90 shadow-[0_12px_36px_-6px_rgba(0,21,61,0.14)] hover:shadow-[0_22px_45px_-6px_rgba(0,21,61,0.25)] hover:border-[#e0b252]/60 hover:-translate-y-1.5 transition-all duration-300 group flex flex-col justify-between relative"
          >
            <div className="h-1 w-full bg-gradient-to-r from-[#00153d] via-[#e0b252] to-[#00153d] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div>
              <div className="h-56 sm:h-60 w-full overflow-hidden relative bg-slate-100">
                <img
                  className="w-full h-full object-cover object-[center_72%] group-hover:scale-105 transition-transform duration-700 ease-out"
                  src="/Girls Wing (Collegiate).jpeg"
                  alt="Dedicated Girls Wing computer laboratory and academic research suites"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#00153d]/30 via-transparent to-transparent opacity-60 pointer-events-none" />
              </div>
              <div className="p-6 space-y-3">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="font-serif font-bold text-xl text-[#00153d] group-hover:text-[#c59a3f] transition-colors leading-snug">
                    Girls Wing (Collegiate)
                  </h3>
                  <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider bg-slate-100 px-2.5 py-0.5 rounded shrink-0">
                    Grades 6 – 12
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                  Dedicated campus block with private courtyards, 100% female faculty leadership, modern IT and science laboratories, and rigorous FBISE Matriculation &amp; Intermediate coaching.
                </p>
                <ul className="pt-2 space-y-1.5 text-xs text-slate-700 font-medium">
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#e0b252] text-[18px] shrink-0">check_circle</span>
                    <span>100% Female supervisory and teaching staff</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#e0b252] text-[18px] shrink-0">check_circle</span>
                    <span>Dedicated computer &amp; science research labs</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="p-6 pt-0">
              <div className="pt-3 border-t border-slate-100">
                <a
                  className="text-xs font-bold text-[#00153d] group-hover:text-[#c59a3f] inline-flex items-center gap-1.5 transition-colors"
                  href="#admissions"
                >
                  <span>Explore Girls Wing</span>
                  <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Card 4: Boys Wing (Collegiate) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-1 lg:col-span-3 bg-white rounded-2xl overflow-hidden border border-slate-200/90 shadow-[0_12px_36px_-6px_rgba(0,21,61,0.14)] hover:shadow-[0_22px_45px_-6px_rgba(0,21,61,0.25)] hover:border-[#e0b252]/60 hover:-translate-y-1.5 transition-all duration-300 group flex flex-col justify-between relative"
          >
            <div className="h-1 w-full bg-gradient-to-r from-[#00153d] via-[#e0b252] to-[#00153d] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div>
              <div className="h-64 sm:h-72 w-full overflow-hidden relative bg-slate-100">
                <img
                  className="w-full h-full object-cover object-[center_32%] group-hover:scale-105 transition-transform duration-700 ease-out"
                  src="/students boys.jpeg"
                  alt="Boys Wing student leadership and house captains on campus grounds"
                />
              </div>
              <div className="p-6 space-y-3">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="font-serif font-bold text-xl text-[#00153d] group-hover:text-[#c59a3f] transition-colors leading-snug">
                    Boys Wing (Collegiate)
                  </h3>
                  <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider bg-slate-100 px-2.5 py-0.5 rounded shrink-0">
                    Grades 6 – 12
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                  Vigorous academic coaching, cadet-level physical conditioning, student council house leadership, and focused preparation for competitive examinations and university admissions.
                </p>
                <ul className="pt-2 space-y-1.5 text-xs text-slate-700 font-medium">
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#e0b252] text-[18px] shrink-0">check_circle</span>
                    <span>House captaincy &amp; student council leadership</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#e0b252] text-[18px] shrink-0">check_circle</span>
                    <span>Cricket academy, football turf &amp; sports grounds</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="p-6 pt-0">
              <div className="pt-3 border-t border-slate-100">
                <a
                  className="text-xs font-bold text-[#00153d] group-hover:text-[#c59a3f] inline-flex items-center gap-1.5 transition-colors"
                  href="#admissions"
                >
                  <span>Explore Boys Wing</span>
                  <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Card 5: College Wing (Intermediate HSSC) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="md:col-span-2 lg:col-span-3 bg-white rounded-2xl overflow-hidden border border-slate-200/90 shadow-[0_12px_36px_-6px_rgba(0,21,61,0.14)] hover:shadow-[0_22px_45px_-6px_rgba(0,21,61,0.25)] hover:border-[#e0b252]/60 hover:-translate-y-1.5 transition-all duration-300 group flex flex-col justify-between relative"
          >
            <div className="h-1 w-full bg-gradient-to-r from-[#00153d] via-[#e0b252] to-[#00153d] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div>
              <div className="h-64 sm:h-72 w-full overflow-hidden relative bg-slate-100">
                <img
                  className="w-full h-full object-cover object-[center_65%] group-hover:scale-105 transition-transform duration-700 ease-out"
                  src="/Students image.jpeg"
                  alt="College Wing students attending international university delegations and academic fairs"
                />
              </div>
              <div className="p-6 space-y-3">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="font-serif font-bold text-xl text-[#00153d] group-hover:text-[#c59a3f] transition-colors leading-snug">
                    College Wing (Intermediate)
                  </h3>
                  <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider bg-slate-100 px-2.5 py-0.5 rounded shrink-0">
                    FSc, ICS &amp; I.Com
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                  Higher Secondary School Certificate (HSSC) programs affiliated with FBISE: FSc Pre-Medical, FSc Pre-Engineering, ICS, and I.Com with dedicated career counseling and university admissions guidance.
                </p>
                <ul className="pt-2 space-y-1.5 text-xs text-slate-700 font-medium">
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#e0b252] text-[18px] shrink-0">check_circle</span>
                    <span>Top FBISE Board examination preparatory coaching</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#e0b252] text-[18px] shrink-0">check_circle</span>
                    <span>National &amp; U.S. University placement counseling</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="p-6 pt-0">
              <div className="pt-3 border-t border-slate-100">
                <a
                  className="text-xs font-bold text-[#00153d] group-hover:text-[#c59a3f] inline-flex items-center gap-1.5 transition-colors"
                  href="#admissions"
                >
                  <span>Explore College Programs</span>
                  <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ─── Campus Activities Showcase (3D CoverFlow Slider) ─── */}
        <div className="mt-14 sm:mt-20 pt-10 sm:pt-14 border-t border-slate-200/90" id="campus-activities-showcase">
          <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00153d]/5 border border-[#00153d]/10 text-[#00153d] mb-2.5">
              <span className="w-2 h-2 rounded-full bg-[#e0b252] shadow-sm shadow-[#e0b252]/80" />
              <span className="text-xs font-bold uppercase tracking-widest text-[#00153d]">Campus Activities Showcase</span>
            </div>
            <h3 className="font-serif font-extrabold text-2xl sm:text-3xl lg:text-4xl text-[#00153d] tracking-tight">
              Vibrant Student Life in Action
            </h3>
            <div className="w-16 h-1 bg-[#e0b252] mx-auto mt-2.5 rounded-full" />
            <p className="text-xs sm:text-sm text-slate-600 mt-2.5 font-medium leading-relaxed">
              Explore the dynamic co-curricular atmosphere, sports championships, scientific research, and character-building traditions across Safari-1 campus.
            </p>
          </div>

          {/* CoverFlow Activity Slider with Center Card & Side Previews in Shadow */}
          <ActivityCoverflowSlider />
        </div>
      </div>
    </section>
  );
}
