"use client";

import React from "react";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section className="w-full py-14 sm:py-16 lg:py-20 bg-white relative overflow-hidden" id="overview">
      {/* Subtle decorative background circles */}
      <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-slate-100/80 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-amber-50/60 blur-3xl pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Centered Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-10 sm:mb-14"
        >
          <h2 className="font-serif font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#00153d] tracking-tight">
            About Us
          </h2>
          <div className="w-20 h-1 bg-[#e0b252] mx-auto mt-3.5 rounded-full" />
          <p className="text-sm sm:text-base text-slate-600 mt-3.5 font-medium leading-relaxed">
            Pioneering academic excellence, Islamic morals, and scientific innovation under the patronage of Bahria Town Education Trust since 1999.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Pure, Enlarged Image Frame */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1] }}
            className="lg:col-span-6 relative w-full h-full"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200/90 bg-slate-100 aspect-[4/3] sm:aspect-[16/11] lg:h-[480px] w-full group">
              <img
                src="/About/A1.jpg"
                alt="Dr. A.Q. Khan School &amp; College Safari-1 Campus"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>
          </motion.div>

          {/* Right Column: Balanced Narrative & Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 1, 0.5, 1] }}
            className="lg:col-span-6 flex flex-col items-start gap-4"
          >
            <h3 className="font-serif font-bold text-2xl sm:text-3xl text-[#00153d] tracking-tight leading-snug">
              A Legacy of Academic Rigor &amp; Moral Character
            </h3>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Established under the prestigious patronage of the <strong className="text-[#00153d] font-semibold">Bahria Town Education Trust</strong>, Dr. A.Q. Khan School &amp; College Safari-1 provides a premier educational journey from early Montessori through Higher Secondary Intermediate (FSc Pre-Medical, Pre-Engineering, ICS &amp; I.Com). With purpose-built segregated wings, modern laboratories, and a dedicated faculty, we cultivate academic curiosity in an environment of faith, safety, and mutual respect.
            </p>

            {/* 4 Feature Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full pt-1">
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-[#e0b252]/60 hover:bg-amber-50/20 transition-all flex items-start gap-3">
                <span className="material-symbols-outlined text-[#c59a3f] text-xl shrink-0 mt-0.5">auto_stories</span>
                <div>
                  <h4 className="font-bold text-xs sm:text-sm text-[#00153d]">Quranic &amp; Moral Ethos</h4>
                  <p className="text-[11px] sm:text-xs text-slate-500 leading-snug mt-0.5">Nazra Quran, Seerat etiquette &amp; civic values.</p>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-[#e0b252]/60 hover:bg-amber-50/20 transition-all flex items-start gap-3">
                <span className="material-symbols-outlined text-[#c59a3f] text-xl shrink-0 mt-0.5">menu_book</span>
                <div>
                  <h4 className="font-bold text-xs sm:text-sm text-[#00153d]">Library &amp; Research</h4>
                  <p className="text-[11px] sm:text-xs text-slate-500 leading-snug mt-0.5">Central academic library &amp; digital research archives.</p>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-[#e0b252]/60 hover:bg-amber-50/20 transition-all flex items-start gap-3">
                <span className="material-symbols-outlined text-[#c59a3f] text-xl shrink-0 mt-0.5">memory</span>
                <div>
                  <h4 className="font-bold text-xs sm:text-sm text-[#00153d]">AI &amp; STEM Labs</h4>
                  <p className="text-[11px] sm:text-xs text-slate-500 leading-snug mt-0.5">Hands-on robotics, coding &amp; modern practical wings.</p>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-[#e0b252]/60 hover:bg-amber-50/20 transition-all flex items-start gap-3">
                <span className="material-symbols-outlined text-[#c59a3f] text-xl shrink-0 mt-0.5">verified_user</span>
                <div>
                  <h4 className="font-bold text-xs sm:text-sm text-[#00153d]">Safe Gated Campus</h4>
                  <p className="text-[11px] sm:text-xs text-slate-500 leading-snug mt-0.5">24/7 Bahria security &amp; supervised transport fleets.</p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href="#pre-school"
                className="px-5 py-2.5 rounded-lg bg-[#00153d] text-white font-bold text-xs sm:text-sm hover:bg-[#0a2356] transition-all inline-flex items-center gap-1.5 shadow-sm"
              >
                <span>Explore Campus Wings</span>
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </a>
              <a
                href="#leadership"
                className="px-4 py-2.5 rounded-lg border border-slate-300 text-slate-700 font-semibold text-xs sm:text-sm hover:border-[#00153d] hover:text-[#00153d] hover:bg-slate-50 transition-all inline-flex items-center gap-1.5"
              >
                <span>Principal&apos;s Message</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
