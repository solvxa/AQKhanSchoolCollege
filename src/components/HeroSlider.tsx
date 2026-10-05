"use client";
import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

// ═══════════════ HERO SLIDER DATA ═══════════════
export const heroSlides = [
  {
    image: "/Hero section/H1.png",
    tag: "Safari Campus, Bahria Town Islamabad",
    title: "Empowering Minds,",
    titleAccent: "Inspiring Greatness",
    subtitle: "A premier academic institution under Bahria Town Education Trust — shaping the nation's future leaders with world-class facilities, advanced STEM laboratories, and 25+ years of educational excellence.",
    primaryCta: { label: "Apply for Admission 2026", href: "#quick-inquiry" },
    secondaryCta: { label: "Explore Campus & Wings", href: "#pre-school" },
    align: "center" as const,
  },
  {
    image: "/Hero section/H2.png",
    tag: "Sports, Leadership & Co-Curricular",
    title: "Where Champions Are",
    titleAccent: "Shaped on the Field",
    subtitle: "Fostering athletic excellence, character, discipline, and team spirit through modern sports grounds, academic houses, and diverse extracurricular enrichment in a secure collegiate environment.",
    primaryCta: { label: "Explore Student Life", href: "#academic-houses" },
    secondaryCta: { label: "View Activity Gallery", href: "#gallery" },
    align: "left" as const,
  },
  {
    image: "/Hero section/H3.jpeg",
    tag: "FBISE Affiliated College (Code: 0741/2012)",
    title: "Character",
    titleAccent: "Before Career",
    subtitle: "Grounded in timeless moral values and rigorous academics. Offering FSc Pre-Medical, Pre-Engineering, ICS, and I.Com under the Federal Board of Intermediate & Secondary Education.",
    primaryCta: { label: "Academic Programs", href: "#overview" },
    secondaryCta: { label: "Contact Admissions", href: "#quick-inquiry" },
    align: "left" as const,
  },
];

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? "100%" : "-100%",
    opacity: 0.95,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction > 0 ? "-100%" : "100%",
    opacity: 0.95,
  }),
};

export default function HeroSlider() {
  const [[page, direction], setPage] = useState([0, 1]);

  // Preload images into memory so transitions are instant and buttery smooth
  useEffect(() => {
    heroSlides.forEach((slide) => {
      const img = new window.Image();
      img.src = slide.image;
    });
  }, []);

  const paginate = useCallback((newDirection: number) => {
    setPage(([prevPage]) => {
      const nextPage = (prevPage + newDirection + heroSlides.length) % heroSlides.length;
      return [nextPage, newDirection];
    });
  }, []);

  const goToSlide = useCallback((index: number) => {
    setPage(([prevPage]) => [index, index > prevPage ? 1 : -1]);
  }, []);

  // Continuous auto-play: Never pauses on mouse hover / cursor movement
  useEffect(() => {
    const timer = setInterval(() => {
      paginate(1);
    }, 4200);
    return () => clearInterval(timer);
  }, [paginate]);

  const slide = heroSlides[page];

  return (
    <section
      className="relative w-full overflow-hidden bg-[#07132b] select-none"
      style={{
        height: "calc(100vh - 166px)",
        minHeight: "560px",
        maxHeight: "860px",
      }}
    >
      {/* Top Gold Progress Indicator */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-white/10 z-30 overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-[#e0b252] to-[#f5ba18] transition-all duration-500 ease-out"
          style={{ width: `${((page + 1) / heroSlides.length) * 100}%` }}
        />
      </div>

      {/* Slide Animation Track */}
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={page}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "tween", ease: [0.22, 1, 0.36, 1], duration: 0.65 },
            opacity: { duration: 0.25 },
          }}
          className="absolute inset-0 w-full h-full bg-[#07132b]"
        >
          {/* Background Image with subtle continuous Ken-Burns effect */}
          <div className="absolute inset-0 overflow-hidden">
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover object-center scale-105 transition-transform duration-[4500ms] ease-out"
            />

            {/* Lighter balanced overlay to increase image visibility */}
            <div className="absolute inset-0 bg-black/35" />
            {slide.align === "center" ? (
              <>
                <div className="absolute inset-0 bg-gradient-to-t from-[#07132b]/70 via-black/15 to-[#07132b]/45" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(7,19,43,0.5)_0%,_transparent_75%)] pointer-events-none" />
              </>
            ) : (
              <>
                <div className="absolute inset-0 bg-gradient-to-r from-[#07132b]/82 via-[#07132b]/55 to-black/15" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#07132b]/70 via-transparent to-[#07132b]/40" />
              </>
            )}
          </div>

          {/* Content Layer (Slide 1 is centered; Slides 2 & 3 are left-aligned) */}
          <div className={`relative z-10 h-full max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16 flex flex-col justify-center ${
            slide.align === "center"
              ? "items-center text-center"
              : "items-start text-left"
          }`}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className={`flex flex-col ${
                slide.align === "center"
                  ? "max-w-3xl items-center text-center"
                  : "max-w-2xl items-start text-left"
              }`}
            >
              {/* Tagline with Gold Accent Bar */}
              <div className={`inline-flex items-center gap-2.5 text-xs sm:text-sm font-bold uppercase tracking-widest text-[#e0b252] mb-3.5 drop-shadow-sm ${
                slide.align === "center" ? "justify-center" : "justify-start"
              }`}>
                <span className="w-7 h-[2px] bg-[#e0b252] inline-block" />
                <span>{slide.tag}</span>
                {slide.align === "center" && (
                  <span className="w-7 h-[2px] bg-[#e0b252] inline-block" />
                )}
              </div>

              {/* Headline */}
              <h1 className="font-serif font-extrabold text-white text-3xl sm:text-5xl lg:text-6xl leading-[1.1] tracking-tight mb-4 drop-shadow-[0_2px_14px_rgba(0,0,0,0.8)]">
                {slide.title}{" "}
                <span className="text-[#e0b252]">{slide.titleAccent}</span>
              </h1>

              {/* Subtitle */}
              <p className={`text-white/95 text-sm sm:text-base lg:text-lg leading-relaxed mb-8 drop-shadow-[0_1px_8px_rgba(0,0,0,0.8)] ${
                slide.align === "center" ? "max-w-2xl" : "max-w-xl"
              }`}>
                {slide.subtitle}
              </p>

              {/* CTA Buttons */}
              <div className={`flex flex-wrap items-center gap-3.5 sm:gap-4 ${
                slide.align === "center" ? "justify-center" : "justify-start"
              }`}>
                <a
                  href={slide.primaryCta.href}
                  className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-lg bg-gradient-to-r from-[#e0b252] to-[#c59a3f] text-[#00153d] font-bold text-sm sm:text-base hover:brightness-110 shadow-lg shadow-black/50 transition-all hover:translate-y-[-1px] active:scale-95 group"
                >
                  <span>{slide.primaryCta.label}</span>
                  <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </a>
                <a
                  href={slide.secondaryCta.href}
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-black/45 hover:bg-black/65 text-white border border-white/35 backdrop-blur-md font-semibold text-sm sm:text-base transition-all hover:border-white/60 active:scale-95 shadow-md"
                >
                  <span>{slide.secondaryCta.label}</span>
                </a>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Prev / Next Smooth Arrow Controls */}
      <button
        onClick={() => paginate(-1)}
        aria-label="Previous Slide"
        className="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-black/30 hover:bg-[#e0b252] hover:text-[#00153d] text-white border border-white/20 hover:border-[#e0b252] backdrop-blur-md flex items-center justify-center transition-all duration-300 shadow-md cursor-pointer group"
      >
        <span className="material-symbols-outlined text-xl sm:text-2xl group-hover:-translate-x-0.5 transition-transform">
          chevron_left
        </span>
      </button>

      <button
        onClick={() => paginate(1)}
        aria-label="Next Slide"
        className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-black/30 hover:bg-[#e0b252] hover:text-[#00153d] text-white border border-white/20 hover:border-[#e0b252] backdrop-blur-md flex items-center justify-center transition-all duration-300 shadow-md cursor-pointer group"
      >
        <span className="material-symbols-outlined text-xl sm:text-2xl group-hover:translate-x-0.5 transition-transform">
          chevron_right
        </span>
      </button>

      {/* Bottom Indicators (Modern Gold Pills - Centered) */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2.5">
        {heroSlides.map((_, i) => (
          <button
            key={i}
            onClick={() => goToSlide(i)}
            aria-label={`Slide ${i + 1}`}
            className={`h-2 rounded-full transition-all duration-500 cursor-pointer ${
              i === page
                ? "w-9 sm:w-11 bg-[#e0b252] shadow-sm shadow-[#e0b252]/50"
                : "w-2.5 bg-white/40 hover:bg-white/80"
            }`}
          />
        ))}
      </div>

      {/* Slide Counter (Gold numbering) */}
      <div className="absolute bottom-6 right-6 sm:right-10 lg:right-16 z-30 flex items-center gap-1.5 font-mono text-xs sm:text-sm font-bold tracking-widest text-white/70 select-none">
        <span className="text-[#e0b252] text-sm sm:text-base font-extrabold">
          {String(page + 1).padStart(2, "0")}
        </span>
        <span>/</span>
        <span>{String(heroSlides.length).padStart(2, "0")}</span>
      </div>
    </section>
  );
}
