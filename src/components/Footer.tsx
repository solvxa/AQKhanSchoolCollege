import React from "react";
import { FaFacebook, FaYoutube, FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { MdChevronRight, MdLocationOn, MdPhone, MdMail, MdSchedule } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-b from-[#00153d] via-[#00102e] to-[#000a1f] text-white pt-12 pb-7 border-t-2 border-[#e0b252]/30 relative overflow-hidden">
      {/* Subtle decorative top gold accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[1.5px] bg-gradient-to-r from-transparent via-[#e0b252] to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-8 pb-10 border-b border-white/10">
          {/* Col 1: Identity & Crest (Col span 4) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3.5">
              {/* Solid White Container for crisp crest visibility */}
              <div className="w-16 h-16 sm:w-18 sm:h-18 rounded-2xl bg-white p-2.5 flex items-center justify-center shrink-0 shadow-lg shadow-black/25 border-2 border-[#e0b252]/50 hover:scale-105 transition-transform duration-300">
                <img
                  alt="Dr. A.Q. Khan School &amp; College Safari-1 Campus"
                  className="w-full h-full object-contain filter drop-shadow-sm"
                  src="/Logo/logo.png"
                />
              </div>
              <div>
                <h3 className="font-serif font-bold text-lg text-white leading-tight">
                  Dr. A.Q. Khan
                </h3>
                <span className="text-xs font-sans font-semibold text-[#e0b252] tracking-wide block mt-0.5">
                  School &amp; College Safari-1
                </span>
                <span className="text-[11px] text-slate-300 block">
                  Bahria Town Islamabad
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed max-w-sm">
              Dedicated to academic rigor, moral character, and scientific excellence in Bahria Town Islamabad under the visionary auspices of Bahria Town Education Trust.
            </p>

            {/* Social Channels */}
            <div className="pt-1 flex items-center gap-2">
              <a
                aria-label="Facebook"
                className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 text-slate-300 flex items-center justify-center hover:bg-[#e0b252] hover:text-[#00153d] hover:border-[#e0b252] transition-all duration-200 shadow-sm"
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook size={15} />
              </a>
              <a
                aria-label="YouTube"
                className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 text-slate-300 flex items-center justify-center hover:bg-[#e0b252] hover:text-[#00153d] hover:border-[#e0b252] transition-all duration-200 shadow-sm"
                href="https://www.youtube.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaYoutube size={15} />
              </a>
              <a
                aria-label="LinkedIn"
                className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 text-slate-300 flex items-center justify-center hover:bg-[#e0b252] hover:text-[#00153d] hover:border-[#e0b252] transition-all duration-200 shadow-sm"
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin size={15} />
              </a>
              <a
                aria-label="Instagram"
                className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 text-slate-300 flex items-center justify-center hover:bg-[#e0b252] hover:text-[#00153d] hover:border-[#e0b252] transition-all duration-200 shadow-sm"
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram size={15} />
              </a>
              <a
                aria-label="WhatsApp"
                className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 text-slate-300 flex items-center justify-center hover:bg-[#25D366] hover:text-white hover:border-[#25D366] transition-all duration-200 shadow-sm"
                href="https://wa.me/923335275888"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp size={15} />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links (Col span 2) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-serif text-sm font-bold uppercase tracking-wider text-[#e0b252] flex items-center gap-1.5">
              <span className="w-1.5 h-3 bg-[#e0b252] rounded-sm" />
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>
                <a className="hover:text-[#e0b252] transition-colors flex items-center gap-1.5 group" href="#overview">
                  <MdChevronRight className="text-[13px] text-[#e0b252] group-hover:translate-x-0.5 transition-transform" />
                  About Campus
                </a>
              </li>
              <li>
                <a className="hover:text-[#e0b252] transition-colors flex items-center gap-1.5 group" href="#wings">
                  <MdChevronRight className="text-[13px] text-[#e0b252] group-hover:translate-x-0.5 transition-transform" />
                  Academic Wings
                </a>
              </li>
              <li>
                <a className="hover:text-[#e0b252] transition-colors flex items-center gap-1.5 group" href="#co-curricular">
                  <MdChevronRight className="text-[13px] text-[#e0b252] group-hover:translate-x-0.5 transition-transform" />
                  Student Life
                </a>
              </li>
              <li>
                <a className="hover:text-[#e0b252] transition-colors flex items-center gap-1.5 group" href="#faculty">
                  <MdChevronRight className="text-[13px] text-[#e0b252] group-hover:translate-x-0.5 transition-transform" />
                  Faculty &amp; Staff
                </a>
              </li>
              <li>
                <a className="hover:text-[#e0b252] transition-colors flex items-center gap-1.5 group" href="#contact">
                  <MdChevronRight className="text-[13px] text-[#e0b252] group-hover:translate-x-0.5 transition-transform" />
                  Contact &amp; Admissions
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Academic Wings (Col span 3) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif text-sm font-bold uppercase tracking-wider text-[#e0b252] flex items-center gap-1.5">
              <span className="w-1.5 h-3 bg-[#e0b252] rounded-sm" />
              Academic Wings
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#e0b252]/70 shrink-0" />
                <span>Junior Wing (Montessori &amp; Primary)</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#e0b252]/70 shrink-0" />
                <span>Senior Girls Wing (Grades VI – X)</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#e0b252]/70 shrink-0" />
                <span>Senior Boys Wing (Grades VI – X)</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#e0b252]/70 shrink-0" />
                <span>College Wing (FSc Pre-Med &amp; Engg)</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#e0b252]/70 shrink-0" />
                <span>Computer Science Wing (ICS)</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact Safari-1 (Col span 3) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif text-sm font-bold uppercase tracking-wider text-[#e0b252] flex items-center gap-1.5">
              <span className="w-1.5 h-3 bg-[#e0b252] rounded-sm" />
              Contact Safari-1
            </h4>
            <div className="space-y-2.5 text-xs text-slate-300">
              <p className="flex items-start gap-2">
                <MdLocationOn className="text-[15px] text-[#e0b252] shrink-0 mt-0.5" />
                <span>Safari Villas-1, Bahria Town, Islamabad</span>
              </p>
              <p className="flex items-center gap-2">
                <MdPhone className="text-[15px] text-[#e0b252] shrink-0" />
                <a href="tel:+92515707166" className="hover:text-white transition-colors">+92 51 5707166</a>
                <span className="text-slate-500">•</span>
                <a href="tel:+92515705800" className="hover:text-white transition-colors">5705800</a>
              </p>
              <p className="flex items-center gap-2">
                <MdMail className="text-[15px] text-[#e0b252] shrink-0" />
                <a href="mailto:aqksafari1@gmail.com" className="hover:text-white transition-colors">aqksafari1@gmail.com</a>
              </p>
              <p className="flex items-center gap-2">
                <MdSchedule className="text-[15px] text-[#e0b252] shrink-0" />
                <span>Mon – Sat: 08:00 AM – 02:30 PM</span>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Clean, Compact, Professional */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-slate-400">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
            <p>© 2026 Dr. A.Q. Khan School &amp; College Safari-1. All rights reserved.</p>
            <span className="hidden sm:inline text-slate-600">|</span>
            <p className="text-[11px] text-slate-400">
              FBISE Affiliation: <span className="text-[#e0b252] font-semibold">0741/2012</span> • Bahria Town Education Trust
            </p>
          </div>
          <div className="flex items-center gap-4 text-[11px] text-slate-400">
            <a className="hover:text-[#e0b252] transition-colors" href="#contact">Admissions</a>
            <span className="text-slate-600">•</span>
            <a className="hover:text-[#e0b252] transition-colors" href="#wings">Wings</a>
            <span className="text-slate-600">•</span>
            <a className="hover:text-[#e0b252] transition-colors" href="#faculty">Faculty</a>
            <span className="text-slate-600">•</span>
            <a className="hover:text-[#e0b252] transition-colors" href="#hero">Back to Top ↑</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
