"use client";
import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import {
  MdPhone,
  MdMail,
  MdLocationOn,
  MdKeyboardArrowDown,
  MdSchool,
  MdCoPresent,
  MdEditNote,
  MdArrowForward,
  MdPerson,
  MdVerified,
} from "react-icons/md";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-300">
      {/* Top Institutional Utility & Message Bar - Desktop Only */}
      <div
        className={`w-full bg-[#0a1e38] text-white/90 border-b border-white/10 transition-all duration-300 ease-in-out overflow-hidden z-20 hidden md:block ${
          isScrolled
            ? "max-h-0 opacity-0 py-0 border-b-0 -translate-y-2 pointer-events-none"
            : "max-h-10 opacity-100 py-1.5 translate-y-0"
        }`}
      >
        <div className="max-w-[1280px] mx-auto px-4 md:px-6 lg:px-8 flex items-center justify-between gap-4 text-xs font-medium">
          {/* Left: Contact Info */}
          <div className="flex items-center gap-3 sm:gap-6 shrink-0 flex-wrap">
            <a
              href="tel:+92515707166"
              className="inline-flex items-center gap-1.5 text-white/90 hover:text-[#f3cf7a] transition-colors"
            >
              <MdPhone className="text-[14px] text-[#e0b252]" />
              <span>+92 51 5707166 / 0333 5275888</span>
            </a>
            <a
              href="mailto:aqksafari1@gmail.com"
              className="hidden sm:inline-flex items-center gap-1.5 text-white/90 hover:text-[#f3cf7a] transition-colors"
            >
              <MdMail className="text-[14px] text-[#e0b252]" />
              <span>aqksafari1@gmail.com</span>
            </a>
            <span className="hidden lg:inline-flex items-center gap-1.5 text-white/70">
              <MdLocationOn className="text-[14px] text-[#e0b252]" />
              <span>Safari Villas-1, Bahria Town, Islamabad</span>
            </span>
          </div>

          {/* Right: Admissions Announcement & Portal Links */}
          <div className="flex items-center gap-3 sm:gap-4 shrink-0">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#c59a3f]/25 border border-[#c59a3f]/40 text-[#f3cf7a] text-[11px] font-semibold tracking-wide">
              <span className="w-1.5 h-1.5 rounded-full bg-[#f3cf7a] animate-pulse" />
              <span>Admissions 2026–2028 Open</span>
            </div>
            <a
              href="#quick-inquiry"
              className="hidden md:inline-block text-white/80 hover:text-white transition-colors"
            >
              Helpline
            </a>
            <span className="hidden md:inline text-white/20">|</span>
            <a
              href="#student-portal"
              className="hidden md:inline-block text-[#f3cf7a] hover:text-[#ffe29a] font-semibold transition-colors"
            >
              Portals
            </a>
          </div>
        </div>
      </div>

      {/* Main Branding & Navigation Container - Fixed compact height on mobile (no jump on scroll) */}
      <div className={`w-full bg-white/98 backdrop-blur-md border-b border-slate-200/90 transition-all duration-300 ${
        isScrolled
          ? "py-2 md:py-2 shadow-sm"
          : "py-2 md:py-2.5"
      }`}>
        <div className="max-w-[1280px] mx-auto px-3 sm:px-5 md:px-6 lg:px-8 flex items-center justify-between gap-3 sm:gap-4">
          {/* School Logo + Identity */}
          <a href="#" className="flex items-center gap-2.5 sm:gap-3.5 md:gap-4 group min-w-0 flex-1">
            <div className={`relative shrink-0 transition-all duration-300 flex items-center justify-center w-12 h-12 xs:w-13 xs:h-13 sm:w-14 sm:h-14 ${
              isScrolled ? "md:w-14 md:h-14 lg:w-15 lg:h-15" : "md:w-16 md:h-16 lg:w-18 lg:h-18"
            }`}>
              <img
                src="/Logo/logo.png"
                alt="Dr. A.Q. Khan School & College Safari-1 Logo"
                className="w-full h-full object-contain filter drop-shadow-sm group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="flex flex-col justify-center text-left min-w-0">
              <span className={`font-serif font-extrabold text-[#00153d] tracking-tight leading-tight transition-all duration-300 whitespace-nowrap truncate text-[16px] xs:text-[17px] sm:text-xl md:text-2xl ${
                isScrolled ? "lg:text-[22px]" : "lg:text-[25px]"
              }`}>
                Dr. A.Q. Khan School &amp; College
              </span>
              <div className="text-[11px] xs:text-[11.5px] sm:text-xs md:text-[13px] text-slate-500 font-medium truncate flex items-center gap-1.5 mt-0.5 whitespace-nowrap">
                <span>Safari-1 Campus, Bahria Town Islamabad</span>
                <span className="text-slate-300 hidden sm:inline">•</span>
                <span className="text-amber-800/90 font-semibold hidden md:inline">Bahria Town Education Trust</span>
              </div>
            </div>
          </a>

          {/* Student & Teacher Login Buttons + Apply Online CTA */}
          <div className="hidden xl:flex items-center gap-3 shrink-0">
            <a
              href="#student-portal"
              className="h-9 w-[130px] inline-flex items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white text-slate-700 text-xs font-semibold hover:border-[#00153d] hover:text-[#00153d] hover:bg-slate-50 active:scale-98 transition-all shadow-xs shrink-0"
            >
              <MdSchool className="text-[16px] text-[#00153d]" />
              <span>Student Login</span>
            </a>
            <a
              href="#teacher-portal"
              className="h-9 w-[130px] inline-flex items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white text-slate-700 text-xs font-semibold hover:border-[#00153d] hover:text-[#00153d] hover:bg-slate-50 active:scale-98 transition-all shadow-xs shrink-0"
            >
              <MdCoPresent className="text-[16px] text-[#00153d]" />
              <span>Teacher Login</span>
            </a>
            <a
              href="#quick-inquiry"
              className="h-9 px-4.5 inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-[#d4af37] via-[#c59a3f] to-[#b3892b] text-[#00153d] font-bold text-xs shadow hover:shadow-md hover:brightness-105 active:scale-98 transition-all shrink-0"
            >
              <MdEditNote className="text-[16px]" />
              <span>Apply Online</span>
              <MdArrowForward className="text-[15px]" />
            </a>
            <div className="w-9 h-9 rounded-lg bg-[#00153d] text-white flex items-center justify-center shrink-0 ml-0.5 shadow-xs" title="Portals & Account">
              <MdPerson className="text-[18px]" />
            </div>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-[#00153d] hover:bg-slate-100 focus:outline-none flex items-center justify-center transition-colors shrink-0 ml-1 cursor-pointer"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>
      </div>

      {/* Navigation Links Bar (Desktop) */}
      <div className="bg-white border-b border-slate-200 hidden lg:block shadow-xs">
        <div className="h-10 max-w-[1280px] mx-auto px-4 md:px-6 lg:px-8 flex items-center justify-center gap-1 text-xs font-semibold text-slate-600">
          {/* Home */}
          <a
            href="#"
            className="px-3.5 py-1.5 rounded-md bg-[#00153d] text-white text-xs font-bold transition-all"
          >
            Home
          </a>

          {/* Divider */}
          <span className="w-px h-4 bg-slate-200 mx-1.5 shrink-0" />

          {/* About Us */}
          <div className="relative group">
            <button className="px-3 py-1.5 rounded-md hover:text-[#00153d] hover:bg-slate-100 transition-colors flex items-center gap-0.5 cursor-pointer">
              About Us
              <MdKeyboardArrowDown className="text-[14px]" />
            </button>
            <div className="absolute left-0 top-full pt-1 hidden group-hover:block z-50 w-52">
              <div className="bg-white rounded-xl shadow-xl border border-slate-200 p-1.5 flex flex-col gap-0.5 text-xs">
                <a className="px-3 py-1.5 text-slate-700 hover:bg-slate-100 hover:text-[#00153d] rounded-lg transition-colors" href="#overview">Overview</a>
                <a className="px-3 py-1.5 text-slate-700 hover:bg-slate-100 hover:text-[#00153d] rounded-lg transition-colors" href="#leadership">Leadership</a>
                <a className="px-3 py-1.5 text-slate-700 hover:bg-slate-100 hover:text-[#00153d] rounded-lg transition-colors" href="#faculty">Faculty</a>
                <a className="px-3 py-1.5 text-slate-700 hover:bg-slate-100 hover:text-[#00153d] rounded-lg transition-colors" href="#history">History</a>
              </div>
            </div>
          </div>

          {/* Campus & Wings */}
          <div className="relative group">
            <button className="px-3 py-1.5 rounded-md hover:text-[#00153d] hover:bg-slate-100 transition-colors flex items-center gap-0.5 cursor-pointer">
              Campus &amp; Wings
              <MdKeyboardArrowDown className="text-[14px]" />
            </button>
            <div className="absolute left-0 top-full pt-1 hidden group-hover:block z-50 w-60">
              <div className="bg-white rounded-xl shadow-xl border border-slate-200 p-1.5 flex flex-col gap-0.5 text-xs">
                <a className="px-3 py-1.5 text-slate-700 hover:bg-slate-100 hover:text-[#00153d] rounded-lg transition-colors" href="#pre-school">Pre-School</a>
                <a className="px-3 py-1.5 text-slate-700 hover:bg-slate-100 hover:text-[#00153d] rounded-lg transition-colors" href="#primary-wing">Primary Wing</a>
                <a className="px-3 py-1.5 text-slate-700 hover:bg-slate-100 hover:text-[#00153d] rounded-lg transition-colors" href="#girls-wing">Girls Wing</a>
                <a className="px-3 py-1.5 text-slate-700 hover:bg-slate-100 hover:text-[#00153d] rounded-lg transition-colors" href="#boys-wing">Boys Wing</a>
                <a className="px-3 py-1.5 text-slate-700 hover:bg-slate-100 hover:text-[#00153d] rounded-lg transition-colors" href="#science-labs">Science &amp; Computer Labs</a>
              </div>
            </div>
          </div>

          {/* Co-Curricular */}
          <div className="relative group">
            <button className="px-3 py-1.5 rounded-md hover:text-[#00153d] hover:bg-slate-100 transition-colors flex items-center gap-0.5 cursor-pointer">
              Co-Curricular
              <MdKeyboardArrowDown className="text-[14px]" />
            </button>
            <div className="absolute left-0 top-full pt-1 hidden group-hover:block z-50 w-56">
              <div className="bg-white rounded-xl shadow-xl border border-slate-200 p-1.5 flex flex-col gap-0.5 text-xs">
                <a className="px-3 py-1.5 text-slate-700 hover:bg-slate-100 hover:text-[#00153d] rounded-lg transition-colors" href="#academic-houses">Academic Houses</a>
                <a className="px-3 py-1.5 text-slate-700 hover:bg-slate-100 hover:text-[#00153d] rounded-lg transition-colors" href="#sports-facilities">Sports Facilities</a>
                <a className="px-3 py-1.5 text-slate-700 hover:bg-slate-100 hover:text-[#00153d] rounded-lg transition-colors" href="#mega-events">Mega Events</a>
                <a className="px-3 py-1.5 text-slate-700 hover:bg-slate-100 hover:text-[#00153d] rounded-lg transition-colors" href="#excursions">Excursions</a>
              </div>
            </div>
          </div>

          {/* Divider */}
          <span className="w-px h-4 bg-slate-200 mx-1.5 shrink-0" />

          <a className="px-3 py-1.5 rounded-md hover:text-[#00153d] hover:bg-slate-100 transition-colors" href="#academic-calendar">Academic Calendar</a>
          <a className="px-3 py-1.5 rounded-md hover:text-[#00153d] hover:bg-slate-100 transition-colors" href="#gallery">Gallery</a>
          <a className="px-3 py-1.5 rounded-md hover:text-[#00153d] hover:bg-slate-100 transition-colors" href="#downloads">Downloads</a>

          {/* Divider */}
          <span className="w-px h-4 bg-slate-200 mx-1.5 shrink-0" />

          <a className="px-3 py-1.5 rounded-md hover:text-[#00153d] hover:bg-slate-100 transition-colors" href="#quick-inquiry">Contact Us</a>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 py-4 space-y-3 shadow-lg">
          <nav className="flex flex-col space-y-2 text-sm font-medium text-slate-700">
            <a href="#" onClick={() => setMobileMenuOpen(false)} className="px-3 py-2 rounded-lg bg-[#00153d] text-white">Home</a>
            <a href="#overview" onClick={() => setMobileMenuOpen(false)} className="px-3 py-2 rounded-lg hover:bg-slate-100">About Us</a>
            <a href="#pre-school" onClick={() => setMobileMenuOpen(false)} className="px-3 py-2 rounded-lg hover:bg-slate-100">Campus &amp; Wings</a>
            <a href="#academic-houses" onClick={() => setMobileMenuOpen(false)} className="px-3 py-2 rounded-lg hover:bg-slate-100">Co-Curricular</a>
            <a href="#academic-calendar" onClick={() => setMobileMenuOpen(false)} className="px-3 py-2 rounded-lg hover:bg-slate-100">Academic Calendar</a>
            <a href="#gallery" onClick={() => setMobileMenuOpen(false)} className="px-3 py-2 rounded-lg hover:bg-slate-100">Gallery</a>
            <a href="#quick-inquiry" onClick={() => setMobileMenuOpen(false)} className="px-3 py-2 rounded-lg hover:bg-slate-100">Contact Us</a>
          </nav>
          <div className="pt-2 border-t border-slate-200 flex flex-col gap-2">
            <a
              href="#quick-inquiry"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-2.5 rounded-lg bg-[#00153d] text-[#f3cf7a] font-bold text-sm shadow"
            >
              Apply Online (Admissions 2026–2028)
            </a>
            <div className="flex items-center justify-between text-xs text-slate-500 pt-1">
              <span>Helpline: +92 51 5707166</span>
              <span className="text-emerald-700 font-bold flex items-center gap-1">
                <MdVerified className="text-[14px]" />
                <span>FBISE: 0741/2012</span>
              </span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
