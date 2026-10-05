"use client";

import React from "react";
import { motion } from "framer-motion";

export default function GovernanceSection() {
  return (
    <section className="w-full py-16 sm:py-20 lg:py-24 bg-slate-50/80 relative overflow-hidden" id="leadership">
      {/* Subtle top divider line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-slate-300/80 to-transparent" />
      
      {/* Ambient Navy & Gold Glows */}
      <div className="absolute -top-32 right-1/4 w-96 h-96 bg-[#00153d]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 left-1/4 w-96 h-96 bg-[#e0b252]/10 rounded-full blur-3xl pointer-events-none" />

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
            <span className="text-xs font-bold uppercase tracking-widest text-[#00153d]">Institutional Guardians</span>
          </div>
          <h2 className="font-serif font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#00153d] tracking-tight">
            Guidance &amp; Governance
          </h2>
          <div className="w-20 h-1 bg-[#e0b252] mx-auto mt-3.5 rounded-full" />
          <p className="text-sm sm:text-base text-slate-600 mt-3.5 font-medium leading-relaxed">
            Distinguished academic leadership, philanthropic trustees, and institutional visionaries guiding scholars toward national distinction.
          </p>
        </motion.div>

        {/* Alternating Leadership & Institutional Cards Stack */}
        <div className="space-y-8 sm:space-y-10">
          {/* ═══════════════ CARD 1: PRINCIPAL'S MESSAGE (Text Left, Image Right) ═══════════════ */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl border border-slate-200/90 shadow-[0_12px_36px_-6px_rgba(0,21,61,0.18)] hover:shadow-[0_22px_50px_-8px_rgba(0,21,61,0.28)] hover:border-[#e0b252]/60 transition-all duration-300 overflow-hidden group relative"
          >
            {/* Top Gold & Navy Accent Bar */}
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#00153d] via-[#e0b252] to-[#00153d]" />

            <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
              {/* Left Column: Text Content */}
              <div className="lg:col-span-8 p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
                <div>
                  {/* Pill Badge */}
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00153d]/5 border border-[#00153d]/10 text-[#00153d] mb-4">
                    <span className="w-2 h-2 rounded-full bg-[#e0b252]" />
                    <span className="text-xs font-bold uppercase tracking-wider">Principal&apos;s Message</span>
                  </div>

                  {/* Primary Quote 1 */}
                  <blockquote className="font-serif italic text-base sm:text-lg lg:text-xl text-[#00153d] font-bold leading-snug border-l-4 border-[#e0b252] pl-4 py-1 mb-3.5">
                    &ldquo;Success comes to those who work hard and stay with those who don&rsquo;t rest on the laurels of the past.&rdquo;
                  </blockquote>

                  {/* Quote 2 & Context Narrative */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                    <strong className="text-[#00153d] font-semibold">&ldquo;Education is not merely the acquisition of facts, but also of values.&rdquo;</strong> At Dr. A. Q. Khan School &amp; College, our sacred duty transcends academic scores. We forge upright citizens equipped to pioneer solutions in science, medicine, and governance, cultivating intellectual curiosity firmly grounded in Islamic moral character and discipline.
                  </p>
                </div>

                {/* Proper Name Format Signature Block */}
                <div className="pt-4 mt-5 border-t border-slate-100 flex items-center justify-between flex-wrap gap-3">
                  <div>
                    <h4 className="font-serif font-extrabold text-base sm:text-lg text-[#00153d] tracking-tight">
                      Brig (R) Ejaz Ahmed Najaf
                    </h4>
                    <p className="text-xs sm:text-sm font-semibold text-[#c59a3f] mt-0.5">
                      Principal, Dr. A. Q. Khan School &amp; College, Safari-I
                    </p>
                  </div>

                  <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#00153d]/5 border border-[#00153d]/10 text-[#00153d] text-xs font-bold shadow-sm">
                    <span className="material-symbols-outlined text-[16px] text-[#e0b252]">military_tech</span>
                    <span>Academic Director</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Principal Image */}
              <div className="lg:col-span-4 relative min-h-[280px] sm:min-h-[320px] lg:min-h-full bg-slate-100 overflow-hidden">
                <img
                  src="/Principle/Principle.jpg"
                  alt="Brig (R) Ejaz Ahmed Najaf - Principal"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-70 pointer-events-none" />
                <div className="absolute bottom-3 left-4 right-4 text-white text-xs font-medium drop-shadow flex items-center justify-between">
                  <span className="font-semibold">Brig (R) Ejaz Ahmed Najaf</span>
                  <span className="px-2 py-0.5 rounded bg-[#e0b252] text-[#00153d] font-extrabold text-[10px] uppercase tracking-wider shadow-sm">Principal</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ═══════════════ CARD 2: BOARD OF TRUSTEES (Reversed: Image Left, Text Right) ═══════════════ */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white rounded-2xl border border-slate-200/90 shadow-[0_12px_36px_-6px_rgba(0,21,61,0.18)] hover:shadow-[0_22px_50px_-8px_rgba(0,21,61,0.28)] hover:border-[#e0b252]/60 transition-all duration-300 overflow-hidden group relative"
          >
            {/* Top Gold & Navy Accent Bar */}
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#00153d] via-[#e0b252] to-[#00153d]" />

            <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
              {/* Left Column: Image (Order 2 on mobile, Order 1 on desktop) */}
              <div className="lg:col-span-4 relative min-h-[280px] sm:min-h-[320px] lg:min-h-full bg-slate-100 overflow-hidden order-2 lg:order-1">
                <img
                  src="/trustee-board.jpg"
                  alt="Bahria Town Education Trust Boardroom"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-70 pointer-events-none" />
                <div className="absolute bottom-3 left-4 right-4 text-white text-xs font-medium drop-shadow flex items-center justify-between">
                  <span className="font-semibold">Bahria Town Education Trust</span>
                  <span className="px-2 py-0.5 rounded bg-[#e0b252] text-[#00153d] font-extrabold text-[10px] uppercase tracking-wider shadow-sm">Trustees</span>
                </div>
              </div>

              {/* Right Column: Text Content (Order 1 on mobile, Order 2 on desktop) */}
              <div className="lg:col-span-8 p-6 sm:p-8 lg:p-10 flex flex-col justify-between order-1 lg:order-2">
                <div>
                  {/* Pill Badge */}
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00153d]/5 border border-[#00153d]/10 text-[#00153d] mb-4">
                    <span className="w-2 h-2 rounded-full bg-[#e0b252]" />
                    <span className="text-xs font-bold uppercase tracking-wider">Board of Trustees</span>
                  </div>

                  {/* Primary Quote */}
                  <blockquote className="font-serif italic text-base sm:text-lg lg:text-xl text-[#00153d] font-bold leading-snug border-l-4 border-[#e0b252] pl-4 py-1 mb-3.5">
                    &ldquo;Through modern purpose-built campuses, fully funded merit scholarships, and advanced STEM laboratory infrastructure, we ensure our scholars receive world-class education.&rdquo;
                  </blockquote>

                  {/* Narrative */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                    Under the philanthropic patronage of the <strong className="text-[#00153d] font-semibold">Bahria Town Education Trust</strong>, Dr. A. Q. Khan School &amp; College Safari-I operates with state-of-the-art physics, chemistry, and AI robotics laboratories. We are dedicated to nurturing future scientists, physicians, and engineers in an uncompromisingly secure environment.
                  </p>
                </div>

                {/* Proper Name Format Signature Block */}
                <div className="pt-4 mt-5 border-t border-slate-100 flex items-center justify-between flex-wrap gap-3">
                  <div>
                    <h4 className="font-serif font-extrabold text-base sm:text-lg text-[#00153d] tracking-tight">
                      Board of Trustees
                    </h4>
                    <p className="text-xs sm:text-sm font-semibold text-[#c59a3f] mt-0.5">
                      Bahria Town Education Trust • Institutional Patrons
                    </p>
                  </div>

                  <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#00153d]/5 border border-[#00153d]/10 text-[#00153d] text-xs font-bold shadow-sm">
                    <span className="material-symbols-outlined text-[16px] text-[#e0b252]">verified</span>
                    <span>Chartered Governance</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ═══════════════ CARD 3: OUR MISSION & VISION (Text Left, Image Right) ═══════════════ */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-2xl border border-slate-200/90 shadow-[0_12px_36px_-6px_rgba(0,21,61,0.18)] hover:shadow-[0_22px_50px_-8px_rgba(0,21,61,0.28)] hover:border-[#e0b252]/60 transition-all duration-300 overflow-hidden group relative"
          >
            {/* Top Gold & Navy Accent Bar */}
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#00153d] via-[#e0b252] to-[#00153d]" />

            <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
              {/* Left Column: Text Content */}
              <div className="lg:col-span-8 p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
                <div>
                  {/* Pill Badge */}
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00153d]/5 border border-[#00153d]/10 text-[#00153d] mb-4">
                    <span className="w-2 h-2 rounded-full bg-[#e0b252]" />
                    <span className="text-xs font-bold uppercase tracking-wider">Institutional Blueprint</span>
                  </div>

                  <h3 className="font-serif font-extrabold text-2xl sm:text-3xl text-[#00153d] tracking-tight leading-snug mb-4">
                    Our Mission &amp; Vision
                  </h3>

                  {/* Dual Mission & Vision Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Mission */}
                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-[#e0b252]/60 transition-all">
                      <div className="flex items-center gap-2 text-[#00153d] font-bold text-sm mb-1.5">
                        <div className="w-7 h-7 rounded-lg bg-[#00153d] text-[#e0b252] flex items-center justify-center shrink-0">
                          <span className="material-symbols-outlined text-base">flag</span>
                        </div>
                        <span>Our Sacred Mission</span>
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed font-medium">
                        To provide accessible, cutting-edge STEM and humanities instruction paired with holistic moral and intellectual character, empowering Pakistani youth to achieve academic distinction under the Federal Board.
                      </p>
                    </div>

                    {/* Vision */}
                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-[#e0b252]/60 transition-all">
                      <div className="flex items-center gap-2 text-[#00153d] font-bold text-sm mb-1.5">
                        <div className="w-7 h-7 rounded-lg bg-[#00153d] text-[#e0b252] flex items-center justify-center shrink-0">
                          <span className="material-symbols-outlined text-base">visibility</span>
                        </div>
                        <span>Our National Vision</span>
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed font-medium">
                        A premier national center of learning that mirrors Dr. A. Q. Khan&apos;s scientific dedication and national pride, producing ethical physicians, engineers, and civic leaders equipped for tomorrow.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Bottom Signature & Values Bar */}
                <div className="pt-4 mt-5 border-t border-slate-100 flex items-center justify-between flex-wrap gap-3">
                  <div className="flex flex-wrap items-center gap-2 text-xs font-bold text-[#00153d]">
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-[#00153d]/5 text-[#00153d]">
                      <span className="material-symbols-outlined text-[#e0b252] text-sm">check_circle</span>
                      Moral Ethos
                    </span>
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-[#00153d]/5 text-[#00153d]">
                      <span className="material-symbols-outlined text-[#e0b252] text-sm">check_circle</span>
                      Scientific Rigor
                    </span>
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-[#00153d]/5 text-[#00153d]">
                      <span className="material-symbols-outlined text-[#e0b252] text-sm">check_circle</span>
                      FBISE Distinction
                    </span>
                  </div>

                  <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#00153d]/5 border border-[#00153d]/10 text-[#00153d] text-xs font-bold shadow-sm">
                    <span className="material-symbols-outlined text-[16px] text-[#e0b252]">stars</span>
                    <span>Charter of Excellence</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Campus Image */}
              <div className="lg:col-span-4 relative min-h-[280px] sm:min-h-[320px] lg:min-h-full bg-slate-100 overflow-hidden">
                <img
                  src="/Hero section/H1.png"
                  alt="Dr. A. Q. Khan Campus Panorama"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-70 pointer-events-none" />
                <div className="absolute bottom-3 left-4 right-4 text-white text-xs font-medium drop-shadow flex items-center justify-between">
                  <span className="font-semibold">Dr. A. Q. Khan Campus</span>
                  <span className="px-2 py-0.5 rounded bg-[#e0b252] text-[#00153d] font-extrabold text-[10px] uppercase tracking-wider shadow-sm">Vision</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
