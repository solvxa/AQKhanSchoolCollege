"use client";

import React from "react";
import { motion } from "framer-motion";

export default function FacultySection() {
  return (
    <section className="w-full py-16 sm:py-20 lg:py-24 bg-white relative overflow-hidden" id="faculty">
      <div id="leadership" className="absolute -top-24" />
      {/* Subtle top divider line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-slate-200/80" />

      {/* Background ambient blurs */}
      <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-slate-100/80 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-amber-50/60 blur-3xl pointer-events-none" />

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
            <span className="text-xs font-bold uppercase tracking-widest text-[#00153d]">Academic Leadership</span>
          </div>
          <h2 className="font-serif font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#00153d] tracking-tight">
            Our Distinguished Faculty &amp; Staff
          </h2>
          <div className="w-20 h-1 bg-[#e0b252] mx-auto mt-3.5 rounded-full" />
          <p className="text-sm sm:text-base text-slate-600 mt-3.5 font-medium leading-relaxed">
            Guided by seasoned academicians, FBISE paper evaluators, and certified pedagogical mentors dedicated to unlocking each student&apos;s highest intellectual and moral potential.
          </p>
        </motion.div>

        {/* 6 Department Faculty Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 items-stretch">
          {/* Member 1: Natural Sciences (Physics & Chemistry) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="bg-white rounded-2xl border border-slate-200/90 shadow-[0_10px_30px_-5px_rgba(0,21,61,0.08)] hover:shadow-[0_20px_45px_-6px_rgba(0,21,61,0.18)] hover:border-[#e0b252]/60 hover:-translate-y-1.5 transition-all duration-300 group flex flex-col justify-between overflow-hidden relative h-full"
          >
            <div className="h-1 w-full bg-gradient-to-r from-[#00153d] via-[#e0b252] to-[#00153d] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            {/* Enlarged Top Photo Frame */}
            <div className="relative w-full h-56 sm:h-60 overflow-hidden bg-slate-100 shrink-0">
              <img
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                src="/Faculty/male.jpg"
                alt="Prof. Dr. Tariq Mehmood"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#00153d]/50 via-transparent to-transparent opacity-60 group-hover:opacity-75 transition-opacity duration-300" />
              
              {/* Floating Badges on Photo */}
              <div className="absolute top-3 left-3 bg-[#00153d]/90 backdrop-blur-md border border-[#e0b252]/40 text-[#e0b252] text-[10.5px] font-bold px-2.5 py-1 rounded-full shadow-md flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#e0b252]" />
                <span>Natural Sciences</span>
              </div>
              <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-md text-[#00153d] text-[10.5px] font-bold px-2.5 py-1 rounded-lg shadow-md border border-slate-200/80">
                <span>18+ Yrs Exp</span>
              </div>
            </div>

            {/* Compact Content Container */}
            <div className="p-5 space-y-3 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="font-serif font-bold text-lg text-[#00153d] group-hover:text-[#c59a3f] transition-colors leading-snug">
                  Prof. Dr. Tariq Mehmood
                </h3>
                <p className="text-xs font-semibold text-slate-500 mt-0.5">
                  Head of Physics &amp; Chemistry
                </p>
              </div>

              {/* Qualification Badge */}
              <div className="flex items-center gap-2 text-[11.5px] text-slate-700 font-semibold bg-slate-50 px-2.5 py-1.5 rounded-lg border border-slate-100">
                <span className="material-symbols-outlined text-[16px] text-[#e0b252] shrink-0">school</span>
                <span className="truncate">Ph.D Physical Chemistry • M.Sc Physics (QAU)</span>
              </div>

              {/* Philosophy Quote */}
              <p className="text-xs text-slate-600 leading-relaxed font-medium italic border-l-2 border-[#e0b252] pl-2.5 py-0.5 line-clamp-2 min-h-[36px]">
                &ldquo;Science is training young minds to interrogate reality with precision, inquiry, and moral reverence.&rdquo;
              </p>

              {/* Highlights Tags */}
              <div className="flex flex-wrap gap-1.5 pt-0.5">
                <span className="px-2 py-0.5 rounded-md bg-slate-100 text-[10.5px] font-semibold text-slate-700">FBISE Master Trainer</span>
                <span className="px-2 py-0.5 rounded-md bg-slate-100 text-[10.5px] font-semibold text-slate-700">Olympiad Mentor</span>
                <span className="px-2 py-0.5 rounded-md bg-slate-100 text-[10.5px] font-semibold text-slate-700">Lab Director</span>
              </div>
            </div>

            <div className="p-5 pt-0">
              <div className="pt-2.5 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#00153d]">
                <span>FSc Pre-Engineering &amp; Pre-Medical</span>
                <span className="material-symbols-outlined text-[#e0b252] text-[18px]">science</span>
              </div>
            </div>
          </motion.div>

          {/* Member 2: Computer Science & AI (ICS) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white rounded-2xl border border-slate-200/90 shadow-[0_10px_30px_-5px_rgba(0,21,61,0.08)] hover:shadow-[0_20px_45px_-6px_rgba(0,21,61,0.18)] hover:border-[#e0b252]/60 hover:-translate-y-1.5 transition-all duration-300 group flex flex-col justify-between overflow-hidden relative h-full"
          >
            <div className="h-1 w-full bg-gradient-to-r from-[#00153d] via-[#e0b252] to-[#00153d] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            {/* Enlarged Top Photo Frame */}
            <div className="relative w-full h-56 sm:h-60 overflow-hidden bg-slate-100 shrink-0">
              <img
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                src="/Faculty/female.jpg"
                alt="Mrs. Farzana Kausar"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#00153d]/50 via-transparent to-transparent opacity-60 group-hover:opacity-75 transition-opacity duration-300" />
              
              {/* Floating Badges on Photo */}
              <div className="absolute top-3 left-3 bg-[#00153d]/90 backdrop-blur-md border border-[#e0b252]/40 text-[#e0b252] text-[10.5px] font-bold px-2.5 py-1 rounded-full shadow-md flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#e0b252]" />
                <span>Computer Science</span>
              </div>
              <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-md text-[#00153d] text-[10.5px] font-bold px-2.5 py-1 rounded-lg shadow-md border border-slate-200/80">
                <span>14+ Yrs Exp</span>
              </div>
            </div>

            {/* Compact Content Container */}
            <div className="p-5 space-y-3 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="font-serif font-bold text-lg text-[#00153d] group-hover:text-[#c59a3f] transition-colors leading-snug">
                  Mrs. Farzana Kausar
                </h3>
                <p className="text-xs font-semibold text-slate-500 mt-0.5">
                  Head of CS &amp; AI Laboratories
                </p>
              </div>

              {/* Qualification Badge */}
              <div className="flex items-center gap-2 text-[11.5px] text-slate-700 font-semibold bg-slate-50 px-2.5 py-1.5 rounded-lg border border-slate-100">
                <span className="material-symbols-outlined text-[16px] text-[#e0b252] shrink-0">school</span>
                <span className="truncate">MS Computer Science (FAST) • Certified Educator</span>
              </div>

              {/* Philosophy Quote */}
              <p className="text-xs text-slate-600 leading-relaxed font-medium italic border-l-2 border-[#e0b252] pl-2.5 py-0.5 line-clamp-2 min-h-[36px]">
                &ldquo;Empowering scholars to become ethical architects and coders of the modern AI and computational era.&rdquo;
              </p>

              {/* Highlights Tags */}
              <div className="flex flex-wrap gap-1.5 pt-0.5">
                <span className="px-2 py-0.5 rounded-md bg-slate-100 text-[10.5px] font-semibold text-slate-700">Python &amp; Robotics</span>
                <span className="px-2 py-0.5 rounded-md bg-slate-100 text-[10.5px] font-semibold text-slate-700">ICS Coordinator</span>
                <span className="px-2 py-0.5 rounded-md bg-slate-100 text-[10.5px] font-semibold text-slate-700">Algorithmic Logic</span>
              </div>
            </div>

            <div className="p-5 pt-0">
              <div className="pt-2.5 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#00153d]">
                <span>ICS &amp; Modern Computing Suites</span>
                <span className="material-symbols-outlined text-[#e0b252] text-[18px]">terminal</span>
              </div>
            </div>
          </motion.div>

          {/* Member 3: Mathematics & Pre-Engineering */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="bg-white rounded-2xl border border-slate-200/90 shadow-[0_10px_30px_-5px_rgba(0,21,61,0.08)] hover:shadow-[0_20px_45px_-6px_rgba(0,21,61,0.18)] hover:border-[#e0b252]/60 hover:-translate-y-1.5 transition-all duration-300 group flex flex-col justify-between overflow-hidden relative h-full"
          >
            <div className="h-1 w-full bg-gradient-to-r from-[#00153d] via-[#e0b252] to-[#00153d] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            {/* Enlarged Top Photo Frame */}
            <div className="relative w-full h-56 sm:h-60 overflow-hidden bg-slate-100 shrink-0">
              <img
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                src="/Faculty/male.jpg"
                alt="Engr. Muhammad Rizwan"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#00153d]/50 via-transparent to-transparent opacity-60 group-hover:opacity-75 transition-opacity duration-300" />
              
              {/* Floating Badges on Photo */}
              <div className="absolute top-3 left-3 bg-[#00153d]/90 backdrop-blur-md border border-[#e0b252]/40 text-[#e0b252] text-[10.5px] font-bold px-2.5 py-1 rounded-full shadow-md flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#e0b252]" />
                <span>Mathematics</span>
              </div>
              <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-md text-[#00153d] text-[10.5px] font-bold px-2.5 py-1 rounded-lg shadow-md border border-slate-200/80">
                <span>16+ Yrs Exp</span>
              </div>
            </div>

            {/* Compact Content Container */}
            <div className="p-5 space-y-3 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="font-serif font-bold text-lg text-[#00153d] group-hover:text-[#c59a3f] transition-colors leading-snug">
                  Engr. Muhammad Rizwan
                </h3>
                <p className="text-xs font-semibold text-slate-500 mt-0.5">
                  Senior Faculty, Applied Mathematics
                </p>
              </div>

              {/* Qualification Badge */}
              <div className="flex items-center gap-2 text-[11.5px] text-slate-700 font-semibold bg-slate-50 px-2.5 py-1.5 rounded-lg border border-slate-100">
                <span className="material-symbols-outlined text-[16px] text-[#e0b252] shrink-0">school</span>
                <span className="truncate">M.Sc Applied Math (PU) • B.Sc Engr (UET)</span>
              </div>

              {/* Philosophy Quote */}
              <p className="text-xs text-slate-600 leading-relaxed font-medium italic border-l-2 border-[#e0b252] pl-2.5 py-0.5 line-clamp-2 min-h-[36px]">
                &ldquo;Demystifying complex calculus and algebra to nurture intuitive, structured analytical problem-solvers.&rdquo;
              </p>

              {/* Highlights Tags */}
              <div className="flex flex-wrap gap-1.5 pt-0.5">
                <span className="px-2 py-0.5 rounded-md bg-slate-100 text-[10.5px] font-semibold text-slate-700">Differential Calculus</span>
                <span className="px-2 py-0.5 rounded-md bg-slate-100 text-[10.5px] font-semibold text-slate-700">NUST/ECAT Prep</span>
                <span className="px-2 py-0.5 rounded-md bg-slate-100 text-[10.5px] font-semibold text-slate-700">Board Evaluator</span>
              </div>
            </div>

            <div className="p-5 pt-0">
              <div className="pt-2.5 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#00153d]">
                <span>Pre-Engineering &amp; Board Math</span>
                <span className="material-symbols-outlined text-[#e0b252] text-[18px]">functions</span>
              </div>
            </div>
          </motion.div>

          {/* Member 4: Biological Sciences & Medical Prep */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-2xl border border-slate-200/90 shadow-[0_10px_30px_-5px_rgba(0,21,61,0.08)] hover:shadow-[0_20px_45px_-6px_rgba(0,21,61,0.18)] hover:border-[#e0b252]/60 hover:-translate-y-1.5 transition-all duration-300 group flex flex-col justify-between overflow-hidden relative h-full"
          >
            <div className="h-1 w-full bg-gradient-to-r from-[#00153d] via-[#e0b252] to-[#00153d] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            {/* Enlarged Top Photo Frame */}
            <div className="relative w-full h-56 sm:h-60 overflow-hidden bg-slate-100 shrink-0">
              <img
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                src="/Faculty/female.jpg"
                alt="Dr. Samina Yasmeen"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#00153d]/50 via-transparent to-transparent opacity-60 group-hover:opacity-75 transition-opacity duration-300" />
              
              {/* Floating Badges on Photo */}
              <div className="absolute top-3 left-3 bg-[#00153d]/90 backdrop-blur-md border border-[#e0b252]/40 text-[#e0b252] text-[10.5px] font-bold px-2.5 py-1 rounded-full shadow-md flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#e0b252]" />
                <span>Biological Sciences</span>
              </div>
              <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-md text-[#00153d] text-[10.5px] font-bold px-2.5 py-1 rounded-lg shadow-md border border-slate-200/80">
                <span>15+ Yrs Exp</span>
              </div>
            </div>

            {/* Compact Content Container */}
            <div className="p-5 space-y-3 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="font-serif font-bold text-lg text-[#00153d] group-hover:text-[#c59a3f] transition-colors leading-snug">
                  Dr. Samina Yasmeen
                </h3>
                <p className="text-xs font-semibold text-slate-500 mt-0.5">
                  Senior Faculty, Biology &amp; Genetics
                </p>
              </div>

              {/* Qualification Badge */}
              <div className="flex items-center gap-2 text-[11.5px] text-slate-700 font-semibold bg-slate-50 px-2.5 py-1.5 rounded-lg border border-slate-100">
                <span className="material-symbols-outlined text-[16px] text-[#e0b252] shrink-0">school</span>
                <span className="truncate">Ph.D Molecular Biology • M.Phil (QAU)</span>
              </div>

              {/* Philosophy Quote */}
              <p className="text-xs text-slate-600 leading-relaxed font-medium italic border-l-2 border-[#e0b252] pl-2.5 py-0.5 line-clamp-2 min-h-[36px]">
                &ldquo;Instilling deep fascination for cellular systems and empirical inquiry in tomorrow&rsquo;s medical leaders.&rdquo;
              </p>

              {/* Highlights Tags */}
              <div className="flex flex-wrap gap-1.5 pt-0.5">
                <span className="px-2 py-0.5 rounded-md bg-slate-100 text-[10.5px] font-semibold text-slate-700">Human Physiology</span>
                <span className="px-2 py-0.5 rounded-md bg-slate-100 text-[10.5px] font-semibold text-slate-700">MDCAT Mentorship</span>
                <span className="px-2 py-0.5 rounded-md bg-slate-100 text-[10.5px] font-semibold text-slate-700">Microscopy Lab</span>
              </div>
            </div>

            <div className="p-5 pt-0">
              <div className="pt-2.5 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#00153d]">
                <span>FSc Pre-Medical Track</span>
                <span className="material-symbols-outlined text-[#e0b252] text-[18px]">biotech</span>
              </div>
            </div>
          </motion.div>

          {/* Member 5: English & Humanities / Declamations */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="bg-white rounded-2xl border border-slate-200/90 shadow-[0_10px_30px_-5px_rgba(0,21,61,0.08)] hover:shadow-[0_20px_45px_-6px_rgba(0,21,61,0.18)] hover:border-[#e0b252]/60 hover:-translate-y-1.5 transition-all duration-300 group flex flex-col justify-between overflow-hidden relative h-full"
          >
            <div className="h-1 w-full bg-gradient-to-r from-[#00153d] via-[#e0b252] to-[#00153d] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            {/* Enlarged Top Photo Frame */}
            <div className="relative w-full h-56 sm:h-60 overflow-hidden bg-slate-100 shrink-0">
              <img
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                src="/Faculty/male.jpg"
                alt="Prof. Aftab Hussain Shah"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#00153d]/50 via-transparent to-transparent opacity-60 group-hover:opacity-75 transition-opacity duration-300" />
              
              {/* Floating Badges on Photo */}
              <div className="absolute top-3 left-3 bg-[#00153d]/90 backdrop-blur-md border border-[#e0b252]/40 text-[#e0b252] text-[10.5px] font-bold px-2.5 py-1 rounded-full shadow-md flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#e0b252]" />
                <span>English &amp; Humanities</span>
              </div>
              <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-md text-[#00153d] text-[10.5px] font-bold px-2.5 py-1 rounded-lg shadow-md border border-slate-200/80">
                <span>19+ Yrs Exp</span>
              </div>
            </div>

            {/* Compact Content Container */}
            <div className="p-5 space-y-3 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="font-serif font-bold text-lg text-[#00153d] group-hover:text-[#c59a3f] transition-colors leading-snug">
                  Prof. Aftab Hussain Shah
                </h3>
                <p className="text-xs font-semibold text-slate-500 mt-0.5">
                  Head of English &amp; Debate Society
                </p>
              </div>

              {/* Qualification Badge */}
              <div className="flex items-center gap-2 text-[11.5px] text-slate-700 font-semibold bg-slate-50 px-2.5 py-1.5 rounded-lg border border-slate-100">
                <span className="material-symbols-outlined text-[16px] text-[#e0b252] shrink-0">school</span>
                <span className="truncate">M.A English Lit (NUML) • Cambridge Trainer</span>
              </div>

              {/* Philosophy Quote */}
              <p className="text-xs text-slate-600 leading-relaxed font-medium italic border-l-2 border-[#e0b252] pl-2.5 py-0.5 line-clamp-2 min-h-[36px]">
                &ldquo;Words move nations. We groom scholars into persuasive orators, critical readers, and empathetic leaders.&rdquo;
              </p>

              {/* Highlights Tags */}
              <div className="flex flex-wrap gap-1.5 pt-0.5">
                <span className="px-2 py-0.5 rounded-md bg-slate-100 text-[10.5px] font-semibold text-slate-700">National Declamation</span>
                <span className="px-2 py-0.5 rounded-md bg-slate-100 text-[10.5px] font-semibold text-slate-700">IELTS Specialist</span>
                <span className="px-2 py-0.5 rounded-md bg-slate-100 text-[10.5px] font-semibold text-slate-700">Literary Club</span>
              </div>
            </div>

            <div className="p-5 pt-0">
              <div className="pt-2.5 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#00153d]">
                <span>Oratory &amp; Bilingual Declamations</span>
                <span className="material-symbols-outlined text-[#e0b252] text-[18px]">record_voice_over</span>
              </div>
            </div>
          </motion.div>

          {/* Member 6: Montessori & Primary Head */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white rounded-2xl border border-slate-200/90 shadow-[0_10px_30px_-5px_rgba(0,21,61,0.08)] hover:shadow-[0_20px_45px_-6px_rgba(0,21,61,0.18)] hover:border-[#e0b252]/60 hover:-translate-y-1.5 transition-all duration-300 group flex flex-col justify-between overflow-hidden relative h-full"
          >
            <div className="h-1 w-full bg-gradient-to-r from-[#00153d] via-[#e0b252] to-[#00153d] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            {/* Enlarged Top Photo Frame */}
            <div className="relative w-full h-56 sm:h-60 overflow-hidden bg-slate-100 shrink-0">
              <img
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                src="/Faculty/female.jpg"
                alt="Mrs. Rabia Naeem"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#00153d]/50 via-transparent to-transparent opacity-60 group-hover:opacity-75 transition-opacity duration-300" />
              
              {/* Floating Badges on Photo */}
              <div className="absolute top-3 left-3 bg-[#00153d]/90 backdrop-blur-md border border-[#e0b252]/40 text-[#e0b252] text-[10.5px] font-bold px-2.5 py-1 rounded-full shadow-md flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#e0b252]" />
                <span>Foundational Years</span>
              </div>
              <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-md text-[#00153d] text-[10.5px] font-bold px-2.5 py-1 rounded-lg shadow-md border border-slate-200/80">
                <span>17+ Yrs Exp</span>
              </div>
            </div>

            {/* Compact Content Container */}
            <div className="p-5 space-y-3 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="font-serif font-bold text-lg text-[#00153d] group-hover:text-[#c59a3f] transition-colors leading-snug">
                  Mrs. Rabia Naeem
                </h3>
                <p className="text-xs font-semibold text-slate-500 mt-0.5">
                  Headmistress, Montessori &amp; Primary
                </p>
              </div>

              {/* Qualification Badge */}
              <div className="flex items-center gap-2 text-[11.5px] text-slate-700 font-semibold bg-slate-50 px-2.5 py-1.5 rounded-lg border border-slate-100">
                <span className="material-symbols-outlined text-[16px] text-[#e0b252] shrink-0">school</span>
                <span className="truncate">M.Ed. Early Childhood • AMI Directress</span>
              </div>

              {/* Philosophy Quote */}
              <p className="text-xs text-slate-600 leading-relaxed font-medium italic border-l-2 border-[#e0b252] pl-2.5 py-0.5 line-clamp-2 min-h-[36px]">
                &ldquo;The early years establish a lifelong love for learning in a sanctuary of joy, tarbiyah, and wonder.&rdquo;
              </p>

              {/* Highlights Tags */}
              <div className="flex flex-wrap gap-1.5 pt-0.5">
                <span className="px-2 py-0.5 rounded-md bg-slate-100 text-[10.5px] font-semibold text-slate-700">Sensorial Apparatus</span>
                <span className="px-2 py-0.5 rounded-md bg-slate-100 text-[10.5px] font-semibold text-slate-700">Child Psychology</span>
                <span className="px-2 py-0.5 rounded-md bg-slate-100 text-[10.5px] font-semibold text-slate-700">AMI Directress</span>
              </div>
            </div>

            <div className="p-5 pt-0">
              <div className="pt-2.5 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#00153d]">
                <span>Montessori to Grade 5 Foundation</span>
                <span className="material-symbols-outlined text-[#e0b252] text-[18px]">child_care</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Faculty Credibility Banner */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="mt-10 sm:mt-12 p-6 sm:p-8 rounded-2xl bg-[#00153d] text-white flex flex-col lg:flex-row items-center justify-between gap-6 shadow-[0_12px_36px_-6px_rgba(0,21,61,0.25)] border border-[#e0b252]/20"
        >
          <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#e0b252] text-[#00153d] flex items-center justify-center shrink-0 font-bold shadow-md">
              <span className="material-symbols-outlined text-2xl">verified_user</span>
            </div>
            <div>
              <h4 className="font-serif font-bold text-lg text-white">Pedagogical Excellence &amp; Academic Guidance</h4>
              <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl">
                100% of our collegiate faculty hold Master’s or Ph.D degrees with continuous workshops under FBISE, HEC, and British Council educational standards.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <a
              href="#admissions"
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#e0b252] to-[#c59a3f] text-[#00153d] font-bold text-xs sm:text-sm hover:brightness-110 transition-all shadow-md inline-flex items-center gap-2"
            >
              <span>Book an Academic Consultation</span>
              <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
