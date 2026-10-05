"use client";
import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

// ═══════════════ CAMPUS ACTIVITIES COVERFLOW SLIDER ═══════════════
export const activitySlides = [
  {
    id: 1,
    image: "/Activitiies/a%20(1).jpg",
    title: "Annual Academic Convocations & Auditorium Ceremonies",
    category: "Campus Events & Galas",
    badge: "Auditorium & Events",
    description: "Multi-purpose auditorium hosting inter-school debates, declamations, STEM symposiums, and annual convocation ceremonies."
  },
  {
    id: 2,
    image: "/Activitiies/a%20(2).jpg",
    title: "Inter-Campus Sports Championship & Athletics Gala",
    category: "Athletics & Physical Conditioning",
    badge: "Sports Turf & Grounds",
    description: "Collegiate cricket academy, football turf, and athletic tracks fostering stamina, discipline, and competitive sportsmanship."
  },
  {
    id: 3,
    image: "/Activitiies/a%20(3).jpg",
    title: "Indoor Badminton Complex & Fitness Physical Arena",
    category: "Indoor Sports & Recreation",
    badge: "Indoor Sports Complex",
    description: "All-weather indoor facility dedicated to badminton tournaments, physical fitness conditioning, and inter-house athletics."
  },
  {
    id: 4,
    image: "/Activitiies/a%20(4).jpg",
    title: "Morning Assemblies, Moral Ethics & House Leadership",
    category: "Discipline & Character",
    badge: "Student Assemblies",
    description: "Daily morning assemblies celebrating Quranic recitation with Tajweed, national anthem, house discipline, and civic ethics."
  },
  {
    id: 5,
    image: "/Activitiies/a%20(5).jpg",
    title: "Hands-on Science & STEM Practical Research Laboratories",
    category: "Scientific Inquiry",
    badge: "Physics & Chemistry Labs",
    description: "Modern laboratory workstations equipped with individual FBISE apparatus where students conduct experimental analysis."
  },
  {
    id: 6,
    image: "/Activitiies/a%20(6).jpg",
    title: "Advanced Computer Science, Robotics & Coding Studios",
    category: "Technology & Future Skills",
    badge: "Digital Innovation Lab",
    description: "High-performance networked computing lab fostering programming proficiency, algorithmic thinking, and digital innovation."
  },
  {
    id: 7,
    image: "/Activitiies/a%20(7).jpg",
    title: "Central Reference Library & Quiet Research Archives",
    category: "Scholarly Research & Reading",
    badge: "Central Library",
    description: "Comprehensive repository of academic journals, FBISE reference volumes, international encyclopedias, and silent reading cubicles."
  },
];

export default function ActivitySlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [activeModal, setActiveModal] = useState<number | null>(null);
  const [touchStart, setTouchStart] = useState<number | null>(null);

  const total = activitySlides.length;

  // Preload images into browser memory
  useEffect(() => {
    activitySlides.forEach((slide) => {
      const img = new window.Image();
      img.src = slide.image;
    });
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % total);
  }, [total]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  // Autoplay timer: changes slide every 4.5 seconds
  useEffect(() => {
    if (isHovered || activeModal !== null) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 4500);
    return () => clearInterval(interval);
  }, [isHovered, activeModal, nextSlide]);

  // Touch swipe support for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null) return;
    const touchEnd = e.changedTouches[0].clientX;
    const distance = touchStart - touchEnd;
    if (distance > 50) {
      nextSlide();
    } else if (distance < -50) {
      prevSlide();
    }
    setTouchStart(null);
  };

  const activeSlide = activitySlides[currentIndex];

  return (
    <div
      className="relative w-full max-w-5xl mx-auto select-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* 3D CoverFlow Track Container - Responsive Landscape Heights */}
      <div className="relative w-full h-[200px] xs:h-[240px] sm:h-[340px] md:h-[420px] lg:h-[470px] flex items-center justify-center overflow-hidden py-2">
        {activitySlides.map((slide, index) => {
          let diff = index - currentIndex;
          if (diff > Math.floor(total / 2)) {
            diff -= total;
          } else if (diff < -Math.floor(total / 2)) {
            diff += total;
          }

          const isCenter = diff === 0;
          const isLeft = diff === -1;
          const isRight = diff === 1;

          // Position class based on circular diff
          let positionStyle = "left-1/2 scale-75 z-0 opacity-0 pointer-events-none";
          if (isCenter) {
            positionStyle =
              "left-1/2 -translate-x-1/2 scale-100 z-20 opacity-100 shadow-[0_16px_45px_-8px_rgba(0,21,61,0.3)] cursor-pointer";
          } else if (isLeft) {
            positionStyle =
              "left-1/2 -translate-x-[114%] sm:-translate-x-[118%] md:-translate-x-[120%] scale-[0.82] z-10 opacity-75 hover:opacity-95 shadow-lg cursor-pointer";
          } else if (isRight) {
            positionStyle =
              "left-1/2 translate-x-[14%] sm:translate-x-[18%] md:translate-x-[20%] scale-[0.82] z-10 opacity-75 hover:opacity-95 shadow-lg cursor-pointer";
          } else if (diff < -1) {
            positionStyle = "left-1/2 -translate-x-[240%] scale-75 z-0 opacity-0 pointer-events-none";
          } else if (diff > 1) {
            positionStyle = "left-1/2 translate-x-[140%] scale-75 z-0 opacity-0 pointer-events-none";
          }

          return (
            <div
              key={slide.id}
              onClick={() => {
                if (isCenter) {
                  setActiveModal(currentIndex);
                } else if (isLeft) {
                  prevSlide();
                } else if (isRight) {
                  nextSlide();
                }
              }}
              className={`absolute top-0 bottom-0 w-[86%] xs:w-[82%] sm:w-[70%] md:w-[62%] max-w-[780px] h-full rounded-2xl sm:rounded-3xl overflow-hidden transition-all duration-500 ease-out border-2 ${
                isCenter ? "border-white" : "border-transparent"
              } ${positionStyle} group`}
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-103"
              />

              {/* Shadow Overlay for Side Cards (show next image in shadow and goes image as well) */}
              {!isCenter && (
                <div className="absolute inset-0 bg-slate-950/45 transition-colors duration-300 pointer-events-none" />
              )}
            </div>
          );
        })}

        {/* Circular Left Arrow Button (<) */}
        <button
          onClick={prevSlide}
          aria-label="Previous Activity"
          className="absolute left-1 sm:left-3 md:left-4 top-1/2 -translate-y-1/2 z-30 w-9 h-9 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-full bg-white/95 backdrop-blur-sm shadow-xl border border-slate-200/90 text-[#00153d] hover:bg-[#e0b252] hover:text-[#00153d] flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95 group"
        >
          <span className="material-symbols-outlined text-xl sm:text-2xl font-bold group-hover:-translate-x-0.5 transition-transform">
            chevron_left
          </span>
        </button>

        {/* Circular Right Arrow Button (>) */}
        <button
          onClick={nextSlide}
          aria-label="Next Activity"
          className="absolute right-1 sm:right-3 md:right-4 top-1/2 -translate-y-1/2 z-30 w-9 h-9 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-full bg-white/95 backdrop-blur-sm shadow-xl border border-slate-200/90 text-[#00153d] hover:bg-[#e0b252] hover:text-[#00153d] flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95 group"
        >
          <span className="material-symbols-outlined text-xl sm:text-2xl font-bold group-hover:translate-x-0.5 transition-transform">
            chevron_right
          </span>
        </button>
      </div>

      {/* Centered Caption & Title Below Slider (matching user reference) */}
      <div className="text-center mt-5 sm:mt-6 px-4 max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-[#e0b252]/15 text-[#00153d] text-[11px] font-bold uppercase tracking-wider mb-2">
          <span>{activeSlide.badge}</span>
          <span className="text-[#00153d]/30">•</span>
          <span className="text-[#00153d]/75 font-semibold">{currentIndex + 1} of {total}</span>
        </div>
        <h4 className="font-serif font-bold text-lg sm:text-2xl md:text-3xl text-[#00153d] tracking-tight leading-snug">
          {activeSlide.title}
        </h4>
        <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed font-medium">
          {activeSlide.description}
        </p>

        {/* Pagination Dots */}
        <div className="flex items-center justify-center gap-2 mt-4">
          {activitySlides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Jump to slide ${idx + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                idx === currentIndex
                  ? "w-8 bg-[#e0b252] shadow-sm shadow-[#e0b252]/50"
                  : "w-2 bg-slate-300 hover:bg-slate-400"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Lightbox Modal on Center Card Click */}
      <AnimatePresence>
        {activeModal !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
            onClick={() => setActiveModal(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-4xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveModal(null)}
                className="absolute top-3.5 right-3.5 z-20 w-9 h-9 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center transition-colors"
                aria-label="Close Preview"
              >
                <span className="material-symbols-outlined text-xl">close</span>
              </button>

              <div className="aspect-[16/10] sm:aspect-[16/9] w-full bg-slate-900 relative">
                <img
                  src={activitySlides[activeModal].image}
                  alt={activitySlides[activeModal].title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-5 sm:p-6 bg-white space-y-1.5">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded bg-[#e0b252] text-[#00153d] font-bold text-[11px] uppercase tracking-wider">
                    {activitySlides[activeModal].badge}
                  </span>
                  <span className="text-xs text-slate-500 font-medium">
                    {activitySlides[activeModal].category}
                  </span>
                </div>
                <h3 className="font-serif font-bold text-xl sm:text-2xl text-[#00153d]">
                  {activitySlides[activeModal].title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                  {activitySlides[activeModal].description}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
