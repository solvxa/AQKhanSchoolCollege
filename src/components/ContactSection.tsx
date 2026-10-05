"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

export default function ContactSection() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmitInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setFormSubmitted(true);
    }, 600);
  };

  return (
    <section className="w-full py-16 sm:py-20 lg:py-24 bg-slate-50/70 relative overflow-hidden" id="contact">
      <div id="quick-inquiry" className="absolute -top-24" />
      <div id="admissions" className="absolute -top-24" />

      {/* Background ambient accents */}
      <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-blue-100/40 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full bg-amber-100/30 blur-3xl pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Centered Section Header - Clean, No Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-16"
        >
          <h2 className="font-serif font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#00153d] tracking-tight">
            Contact Us
          </h2>
          <div className="w-20 h-1 bg-[#e0b252] mx-auto mt-3.5 rounded-full" />
          <p className="text-sm sm:text-base text-slate-600 mt-3.5 font-medium leading-relaxed">
            Have questions regarding admissions, campus tours, academic programs, or transport routes? Our administrative team and admissions counselors at Safari-1 Campus are here to assist you.
          </p>
        </motion.div>

        {/* Main Contact Container */}
        <div className="bg-white rounded-3xl border border-slate-200/90 shadow-[0_15px_45px_-8px_rgba(0,21,61,0.12)] overflow-hidden grid grid-cols-1 lg:grid-cols-12">
          {/* Left Side: Campus Identity & Contact Directives */}
          <div className="lg:col-span-5 bg-gradient-to-br from-[#00153d] via-[#001b4e] to-[#00153d] text-white p-7 sm:p-9 lg:p-10 flex flex-col justify-between relative overflow-hidden border-b lg:border-b-0 lg:border-r border-[#e0b252]/20">
            {/* Subtle decorative glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#e0b252]/10 rounded-full blur-3xl pointer-events-none" />

            <div className="space-y-6 relative z-10">
              <div>
                <h3 className="font-serif font-bold text-2xl sm:text-3xl text-white leading-tight">
                  Get in Touch With Safari-1 Campus
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-2.5 leading-relaxed font-medium">
                  Connect directly with our admissions desk, academic administration, or student affairs helpline. We welcome visiting parents for personal campus tours.
                </p>
              </div>

              {/* Contact Details List */}
              <div className="space-y-3.5 pt-1">
                {/* Location */}
                <div className="flex items-start gap-3.5 p-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-xs">
                  <div className="w-10 h-10 rounded-lg bg-[#e0b252] text-[#00153d] flex items-center justify-center shrink-0 shadow-sm">
                    <span className="material-symbols-outlined text-[20px]">location_on</span>
                  </div>
                  <div>
                    <span className="text-[10.5px] font-bold text-[#e0b252] uppercase tracking-wider block">Campus Address</span>
                    <p className="text-xs sm:text-sm text-white font-semibold mt-0.5 leading-snug">
                      Safari Villas-1, Bahria Town, Islamabad, Pakistan
                    </p>
                  </div>
                </div>

                {/* Telephone & Helpline */}
                <div className="flex items-start gap-3.5 p-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-xs">
                  <div className="w-10 h-10 rounded-lg bg-[#e0b252] text-[#00153d] flex items-center justify-center shrink-0 shadow-sm">
                    <span className="material-symbols-outlined text-[20px]">phone_in_talk</span>
                  </div>
                  <div>
                    <span className="text-[10.5px] font-bold text-[#e0b252] uppercase tracking-wider block">Admissions Helpline &amp; Office</span>
                    <p className="text-xs sm:text-sm text-white font-semibold mt-0.5 leading-snug">
                      <a href="tel:+92515707166" className="hover:text-[#e0b252] transition-colors">+92 51 5707166</a>
                      <span className="text-slate-400 mx-1.5">•</span>
                      <a href="tel:+92515705800" className="hover:text-[#e0b252] transition-colors">+92 51 5705800</a>
                    </p>
                  </div>
                </div>

                {/* Mobile & WhatsApp */}
                <div className="flex items-start gap-3.5 p-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-xs">
                  <div className="w-10 h-10 rounded-lg bg-[#e0b252] text-[#00153d] flex items-center justify-center shrink-0 shadow-sm">
                    <span className="material-symbols-outlined text-[20px]">chat</span>
                  </div>
                  <div>
                    <span className="text-[10.5px] font-bold text-[#e0b252] uppercase tracking-wider block">Direct WhatsApp Helpline</span>
                    <p className="text-xs sm:text-sm text-white font-semibold mt-0.5 leading-snug">
                      <a href="https://wa.me/923335275888" target="_blank" rel="noopener noreferrer" className="hover:text-[#e0b252] transition-colors">
                        +92 333 5275888
                      </a>
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3.5 p-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-xs">
                  <div className="w-10 h-10 rounded-lg bg-[#e0b252] text-[#00153d] flex items-center justify-center shrink-0 shadow-sm">
                    <span className="material-symbols-outlined text-[20px]">mail</span>
                  </div>
                  <div>
                    <span className="text-[10.5px] font-bold text-[#e0b252] uppercase tracking-wider block">Email Inquiries</span>
                    <p className="text-xs sm:text-sm text-white font-semibold mt-0.5 leading-snug">
                      <a href="mailto:aqksafari1@gmail.com" className="hover:text-[#e0b252] transition-colors">
                        aqksafari1@gmail.com
                      </a>
                    </p>
                  </div>
                </div>

                {/* Visiting Hours */}
                <div className="flex items-start gap-3.5 p-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-xs">
                  <div className="w-10 h-10 rounded-lg bg-[#e0b252] text-[#00153d] flex items-center justify-center shrink-0 shadow-sm">
                    <span className="material-symbols-outlined text-[20px]">schedule</span>
                  </div>
                  <div>
                    <span className="text-[10.5px] font-bold text-[#e0b252] uppercase tracking-wider block">Office &amp; Visiting Hours</span>
                    <p className="text-xs text-white font-medium mt-0.5 leading-snug">
                      Mon – Sat: 08:00 AM – 02:30 PM <br />
                      <span className="text-slate-300">(Friday: 08:00 AM – 12:30 PM)</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Institutional Footnote */}
            <div className="pt-6 mt-6 border-t border-white/15 relative z-10 flex items-center justify-between gap-3 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#e0b252] text-[18px]">verified</span>
                <span>Bahria Town Education Trust</span>
              </div>
              <span className="text-[#e0b252] font-semibold">FBISE: 0741/2012</span>
            </div>
          </div>

          {/* Right Side: Professional Contact & Inquiry Form */}
          <div className="lg:col-span-7 p-7 sm:p-9 lg:p-10 bg-white flex flex-col justify-center">
            {formSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-10 px-6 sm:px-8 text-center space-y-4 bg-slate-50/80 rounded-2xl border border-slate-200"
              >
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-sm">
                  <span className="material-symbols-outlined text-3xl">check_circle</span>
                </div>
                <h3 className="font-serif font-bold text-2xl text-[#00153d]">
                  Message Submitted Successfully
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed font-medium">
                  Thank you for contacting Dr. A.Q. Khan School &amp; College Safari-1. Our admissions desk has received your information and will reach out to you within 2 business hours.
                </p>
                <div className="pt-2">
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="px-6 py-2.5 rounded-xl bg-[#00153d] text-white text-xs font-bold hover:bg-[#0a2558] transition-colors shadow-sm cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmitInquiry} className="space-y-4 sm:space-y-5" id="admission-inquiry-form">
                <div>
                  <h3 className="font-serif font-bold text-xl sm:text-2xl text-[#00153d]">
                    Send Us a Message
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1 font-medium">
                    Fill in your details below and our academic admissions team will get back to you promptly.
                  </p>
                </div>

                {/* Row 1: Student / Parent Full Name + Contact Number */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 flex items-center gap-1" htmlFor="student-name">
                      <span>Full Name</span>
                      <span className="text-rose-500">*</span>
                    </label>
                    <div className="relative">
                      <span className="material-symbols-outlined text-slate-400 text-[18px] absolute left-3.5 top-1/2 -translate-y-1/2">person</span>
                      <input
                        id="student-name"
                        type="text"
                        required
                        placeholder="e.g. Muhammad Zaid"
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:bg-white focus:outline-none focus:border-[#00153d] focus:ring-2 focus:ring-[#00153d]/10 transition-all font-medium"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 flex items-center gap-1" htmlFor="parent-phone">
                      <span>Phone / WhatsApp Number</span>
                      <span className="text-rose-500">*</span>
                    </label>
                    <div className="relative">
                      <span className="material-symbols-outlined text-slate-400 text-[18px] absolute left-3.5 top-1/2 -translate-y-1/2">phone</span>
                      <input
                        id="parent-phone"
                        type="tel"
                        required
                        placeholder="e.g. 0300-1234567"
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:bg-white focus:outline-none focus:border-[#00153d] focus:ring-2 focus:ring-[#00153d]/10 transition-all font-medium"
                      />
                    </div>
                  </div>
                </div>

                {/* Row 2: Email Address + Inquiry Subject */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 flex items-center gap-1.5" htmlFor="parent-email">
                      <span>Email Address</span>
                      <span className="text-slate-400 text-[11px] font-normal">(Optional)</span>
                    </label>
                    <div className="relative">
                      <span className="material-symbols-outlined text-slate-400 text-[18px] absolute left-3.5 top-1/2 -translate-y-1/2">mail</span>
                      <input
                        id="parent-email"
                        type="email"
                        placeholder="e.g. name@domain.com"
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:bg-white focus:outline-none focus:border-[#00153d] focus:ring-2 focus:ring-[#00153d]/10 transition-all font-medium"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 flex items-center gap-1" htmlFor="inquiry-type">
                      <span>Inquiry Purpose</span>
                      <span className="text-rose-500">*</span>
                    </label>
                    <div className="relative">
                      <span className="material-symbols-outlined text-slate-400 text-[18px] absolute left-3.5 top-1/2 -translate-y-1/2">help_outline</span>
                      <select
                        id="inquiry-type"
                        required
                        defaultValue=""
                        className="w-full pl-10 pr-8 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-800 focus:bg-white focus:outline-none focus:border-[#00153d] focus:ring-2 focus:ring-[#00153d]/10 transition-all font-medium appearance-none"
                      >
                        <option value="" disabled>Select inquiry type...</option>
                        <option value="admission">Admissions &amp; Prospectus</option>
                        <option value="campus-tour">Schedule a Campus Visit</option>
                        <option value="fee">Fee Structure &amp; Scholarships</option>
                        <option value="transport">Transport Route Details</option>
                        <option value="transfer">School Migration / Transfer</option>
                        <option value="general">General Campus Inquiry</option>
                      </select>
                      <span className="material-symbols-outlined text-slate-400 text-[18px] absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">expand_more</span>
                    </div>
                  </div>
                </div>

                {/* Row 3: Academic Wing / Grade Level */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 flex items-center gap-1" htmlFor="grade-wing">
                    <span>Academic Wing / Grade of Interest</span>
                    <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <span className="material-symbols-outlined text-slate-400 text-[18px] absolute left-3.5 top-1/2 -translate-y-1/2">school</span>
                    <select
                      id="grade-wing"
                      required
                      defaultValue=""
                      className="w-full pl-10 pr-8 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-800 focus:bg-white focus:outline-none focus:border-[#00153d] focus:ring-2 focus:ring-[#00153d]/10 transition-all font-medium appearance-none"
                    >
                      <option value="" disabled>Select academic level...</option>
                      <option value="montessori">Montessori &amp; Early Years</option>
                      <option value="primary">Primary Wing (Grade 1 – 5)</option>
                      <option value="girls-matric">Girls Wing (Grade 6 – 10 FBISE)</option>
                      <option value="boys-matric">Boys Wing (Grade 6 – 10 FBISE)</option>
                      <option value="fsc-medical">College: FSc Pre-Medical</option>
                      <option value="fsc-eng">College: FSc Pre-Engineering</option>
                      <option value="ics">College: ICS (Computer Science &amp; AI)</option>
                      <option value="icom">College: I.Com</option>
                    </select>
                    <span className="material-symbols-outlined text-slate-400 text-[18px] absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">expand_more</span>
                  </div>
                </div>

                {/* Row 4: Message textarea */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 flex items-center justify-between" htmlFor="inquiry-notes">
                    <span>Your Message / Specific Inquiries</span>
                    <span className="text-slate-400 text-[11px] font-normal">Optional</span>
                  </label>
                  <textarea
                    id="inquiry-notes"
                    rows={3}
                    placeholder="Share any specific requirements (e.g. transport pickup point, previous academic background, or preferred campus visit timing)..."
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:bg-white focus:outline-none focus:border-[#00153d] focus:ring-2 focus:ring-[#00153d]/10 transition-all font-medium resize-none"
                  />
                </div>

                {/* WhatsApp checkbox consent */}
                <div className="flex items-start gap-2.5 pt-1">
                  <input
                    id="whatsapp-consent"
                    type="checkbox"
                    defaultChecked
                    className="mt-0.5 w-4 h-4 rounded text-[#00153d] border-slate-300 focus:ring-[#00153d] accent-[#00153d]"
                  />
                  <label htmlFor="whatsapp-consent" className="text-xs text-slate-600 font-medium leading-relaxed">
                    Receive prospectus PDF, fee breakdown, and campus tour link directly via WhatsApp.
                  </label>
                </div>

                {/* Submit CTA Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-[#00153d] hover:bg-[#0a2558] text-white font-bold text-xs sm:text-sm hover:shadow-lg transition-all flex items-center justify-center gap-2.5 group cursor-pointer shadow-md disabled:opacity-75"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>Submitting...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message &amp; Submit Inquiry</span>
                        <span className="material-symbols-outlined text-[17px] text-[#e0b252] group-hover:translate-x-1 transition-transform">send</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>

        {/* Dedicated Transport Network Banner */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8 sm:mt-10 rounded-2xl bg-white border border-slate-200/90 shadow-[0_10px_30px_-5px_rgba(0,21,61,0.08)] p-5 sm:p-6 flex flex-col md:flex-row items-center justify-between gap-5"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#00153d]/5 text-[#00153d] border border-[#00153d]/10 flex items-center justify-center shrink-0 shadow-sm">
              <span className="material-symbols-outlined text-[28px] text-[#00153d]">directions_bus</span>
            </div>
            <div>
              <h4 className="font-serif font-bold text-base sm:text-lg text-[#00153d]">
                Dedicated Air-Conditioned Transport Network
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 mt-0.5 font-medium">
                Safe pick &amp; drop routes across Bahria Town (Phases 1–8), DHA Islamabad, Media Town, PWD, and Police Foundation.
              </p>
            </div>
          </div>
          <div className="shrink-0 flex items-center gap-3">
            <a
              className="px-5 py-2.5 rounded-xl bg-[#00153d] text-white font-bold text-xs sm:text-sm hover:bg-[#0a2558] transition-colors inline-flex items-center gap-2 shadow-sm"
              href="tel:+92515705800"
            >
              <span className="material-symbols-outlined text-[16px] text-[#e0b252]">call</span>
              <span>Call Transport Office</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
