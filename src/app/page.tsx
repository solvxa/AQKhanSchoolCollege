"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaFacebook, FaYoutube, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Home() {
  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-surface shadow-[0_1px_8px_rgba(0,0,0,0.04)]"><div className="bg-primary text-on-primary border-b border-primary-container/40"><div className="max-w-[1280px] mx-auto px-margin-mobile md:px-margin lg:px-margin-desktop h-10 flex items-center justify-between text-body-sm"><div className="flex items-center gap-space-md overflow-x-auto whitespace-nowrap"><span className="flex items-center gap-space-xs text-primary-fixed-dim"><span className="material-symbols-outlined text-[16px]">call</span>+92 51 5705800</span><span className="hidden sm:flex items-center gap-space-xs text-primary-fixed-dim"><span className="material-symbols-outlined text-[16px]">mail</span>info@daqks.edu.pk</span><span className="hidden lg:flex items-center gap-space-xs text-primary-fixed-dim"><span className="material-symbols-outlined text-[16px]">location_on</span>Safari Villas-1, Bahria Town, Islamabad</span></div><div className="flex items-center gap-space-md shrink-0 font-label-md"><span className="hidden md:inline-flex items-center gap-space-xs px-2 py-0.5 rounded bg-tertiary-container text-on-tertiary-container font-badge-caps uppercase tracking-wider text-[10px]"><span className="material-symbols-outlined text-[12px]">campaign</span>Admissions 2026-2028 Open</span><a className="text-primary-fixed hover:text-on-primary transition-colors" data-path="contact-us" href="#">Helpline</a><span className="text-primary-container">|</span><a className="text-secondary-fixed hover:text-secondary-container transition-colors" data-path="student-portal" href="#">Portals</a></div></div></div><div className="bg-surface/95 backdrop-blur-xl border-b border-surface-container-high"><div className="h-24 max-w-[1280px] mx-auto px-margin-mobile md:px-margin lg:px-margin-desktop flex items-center justify-between gap-space-md"><div className="flex items-center gap-space-sm sm:gap-space-md min-w-0"><img alt="logo.jpg" className="h-14 md:h-16 w-auto object-contain shrink-0" src="https://lh3.googleusercontent.com/aida/AEtjO1UvkVeB5omwHMLBXNQgGfB7IDYmimAnm6ldjJe3fFsBQeLUnfnhs2rFWzOhpbbYkfD2Y1dvhc2gaXFx7nhVAH5eA1lGAHqJcFn3penSWjZ7i1X9UL88PdWoEFCNhy-6vAprWMX9ea7qpu0TkuJ4WkjT7Dfb5j1gmlQ6FQzD2ly-G08PbigHyTKmJakD5vIf5_FDw_vEttF70DGfDN-D2S7KrNzgJ9dMf7Ry-KZjtP0MZ6Z6ue39TXG6ZmmvATNXq9jr40eh7HuR" /><div className="flex flex-col justify-center min-w-0"><div className="font-headline-sm text-headline-sm font-bold text-primary truncate leading-tight">Dr. A.Q. Khan School &amp; College</div><div className="font-label-md text-label-md text-on-surface-variant truncate font-medium text-[11px] sm:text-label-md">Safari Villas-1, Bahria Town, Islamabad <span className="hidden sm:inline text-secondary font-semibold">• Affiliated with FBISE</span></div></div></div><div className="hidden xl:flex items-center gap-space-sm shrink-0"><a className="px-space-md py-2 rounded-lg border border-primary/20 text-primary font-label-md hover:bg-primary hover:text-on-primary transition-all" data-path="student-portal" href="#">Student Login</a><a className="px-space-md py-2 rounded-lg border border-primary/20 text-primary font-label-md hover:bg-primary hover:text-on-primary transition-all" data-path="teacher-portal" href="#">Teacher Portal</a><a className="px-space-lg py-2.5 rounded-lg bg-secondary-container text-on-secondary-fixed font-label-md hover:bg-secondary-fixed-dim transition-all shadow-sm font-bold" data-path="admissions" href="#">Apply Online</a><div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shrink-0 ml-1"><span className="material-symbols-outlined text-on-primary text-[18px]">person</span></div></div></div></div><div className="bg-surface-container-low border-b border-surface-container-high/80 hidden lg:block"><div className="h-12 max-w-[1280px] mx-auto px-margin-desktop flex items-center justify-between"><nav className="flex items-center gap-1 font-label-md" data-active-classes="bg-primary text-on-primary font-semibold rounded-lg shadow-sm"><a aria-current="page" className="px-3 py-1.5 transition-colors bg-primary text-on-primary font-semibold rounded-lg shadow-sm" data-path="home" href="#">Home</a><div className="relative group"><button className="px-3 py-1.5 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors flex items-center gap-1">About Us<span className="material-symbols-outlined text-[16px]">expand_more</span></button><div className="absolute left-0 top-full pt-1 hidden group-hover:block z-50 w-52"><div className="bg-surface rounded-xl shadow-lg border border-surface-container-high p-1.5 flex flex-col gap-1"><a className="px-3 py-2 text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface rounded-lg transition-colors" data-path="overview" href="#">Overview</a><a className="px-3 py-2 text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface rounded-lg transition-colors" data-path="leadership" href="#">Leadership</a><a className="px-3 py-2 text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface rounded-lg transition-colors" data-path="faculty" href="#">Faculty</a><a className="px-3 py-2 text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface rounded-lg transition-colors" data-path="history" href="#">History</a></div></div></div><div className="relative group"><button className="px-3 py-1.5 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors flex items-center gap-1">Campus<span className="material-symbols-outlined text-[16px]">expand_more</span></button><div className="absolute left-0 top-full pt-1 hidden group-hover:block z-50 w-64"><div className="bg-surface rounded-xl shadow-lg border border-surface-container-high p-1.5 flex flex-col gap-1"><a className="px-3 py-2 text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface rounded-lg transition-colors" data-path="pre-school" href="#">Pre-School</a><a className="px-3 py-2 text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface rounded-lg transition-colors" data-path="primary-wing" href="#">Primary Wing</a><a className="px-3 py-2 text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface rounded-lg transition-colors" data-path="girls-wing" href="#">Girls Wing</a><a className="px-3 py-2 text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface rounded-lg transition-colors" data-path="boys-wing" href="#">Boys Wing</a><a className="px-3 py-2 text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface rounded-lg transition-colors" data-path="science-labs" href="#">Science &amp; Computer Labs</a></div></div></div><div className="relative group"><button className="px-3 py-1.5 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors flex items-center gap-1">CCA<span className="material-symbols-outlined text-[16px]">expand_more</span></button><div className="absolute left-0 top-full pt-1 hidden group-hover:block z-50 w-56"><div className="bg-surface rounded-xl shadow-lg border border-surface-container-high p-1.5 flex flex-col gap-1"><a className="px-3 py-2 text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface rounded-lg transition-colors" data-path="academic-houses" href="#">Academic Houses</a><a className="px-3 py-2 text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface rounded-lg transition-colors" data-path="sports-facilities" href="#">Sports Facilities</a><a className="px-3 py-2 text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface rounded-lg transition-colors" data-path="mega-events" href="#">Mega Events</a><a className="px-3 py-2 text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface rounded-lg transition-colors" data-path="excursions" href="#">Excursions</a></div></div></div><a className="px-3 py-1.5 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors" data-path="academic-calendar" href="#">Academic Calendar</a><a className="px-3 py-1.5 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors" data-path="gallery" href="#">Gallery</a><a className="px-3 py-1.5 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors" data-path="downloads" href="#">Downloads</a><a className="px-3 py-1.5 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors" data-path="contact-us" href="#">Contact Us</a></nav><div className="flex items-center gap-space-xs text-body-sm text-secondary font-semibold"><span className="material-symbols-outlined text-[18px]">verified</span><span>FBISE Affiliation No: 0741/2012</span></div></div></div></header><main className="w-full pt-[184px] bg-background"><div className="flex flex-col w-full">

        <div className="w-full bg-primary-container text-on-primary border-b-2 border-secondary-container">
          <div className="max-w-[1280px] mx-auto px-margin-mobile md:px-margin lg:px-margin-desktop py-2.5 flex items-center justify-between gap-space-md">
            <div className="flex items-center gap-space-sm min-w-0">
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded bg-tertiary-container text-on-tertiary font-badge-caps uppercase tracking-wider text-[11px] shrink-0 font-bold">
                <span className="material-symbols-outlined text-[14px]">campaign</span> News Flash
              </span>
              <div className="overflow-hidden whitespace-nowrap min-w-0">
                <p className="font-body-sm text-body-sm text-surface-container-low truncate">
                  <span className="font-bold text-secondary-fixed">2nd Shift Launched!</span> Admissions Open for FSc, ICS, ICOM, Inter-Tech &amp; Allied Health Sciences (Session 2026–2028) with Safari Hospital rotations. Early bird discount active.
                </p>
              </div>
            </div>
            <a className="shrink-0 hidden sm:inline-flex items-center gap-1 font-label-md text-label-md text-secondary-fixed hover:text-secondary-fixed-dim transition-colors" href="#quick-inquiry">
              <span>Apply Now</span>
              <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </a>
          </div>
        </div>

        <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="relative w-full overflow-hidden bg-primary text-on-primary">

          <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-surface-tint/20 blur-3xl pointer-events-none"></div>
          <div className="absolute bottom-0 left-1/4 w-[500px] h-[350px] rounded-full bg-secondary-container/10 blur-3xl pointer-events-none"></div>
          <div className="max-w-[1280px] mx-auto px-margin-mobile md:px-margin lg:px-margin-desktop py-space-xl lg:py-24 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center">

              <div className="lg:col-span-7 flex flex-col items-start gap-space-md">

                <h1 className="font-display-hero text-display-hero-mobile md:text-display-hero font-bold tracking-tight text-on-primary leading-tight">
                  Nurturing Future Leaders in <span className="text-secondary-container italic">Science, Tech</span> &amp; Healthcare
                </h1>
                <p className="font-body-lg text-body-lg text-primary-fixed-dim max-w-2xl leading-relaxed">
                  Founded in 1999 under the Bahria Town Education Trust, Dr. A.Q. Khan School &amp; College provides premier FBISE education paired with rigorous clinical training at Safari Hospital and guaranteed Bahria International Hospital internships.
                </p>

                <div className="flex flex-wrap gap-2 pt-1 pb-2">
                  <span className="px-3 py-1 rounded bg-primary-container text-primary-fixed text-label-md font-medium">FSc Pre-Medical</span>
                  <span className="px-3 py-1 rounded bg-primary-container text-primary-fixed text-label-md font-medium">FSc Pre-Engineering</span>
                  <span className="px-3 py-1 rounded bg-primary-container text-primary-fixed text-label-md font-medium">ICS (AI &amp; CS)</span>
                  <span className="px-3 py-1 rounded bg-primary-container text-primary-fixed text-label-md font-medium">ICOM</span>
                  <span className="px-3 py-1 rounded bg-secondary-container/20 text-secondary-fixed text-label-md font-semibold">Allied Health Sciences</span>
                </div>

                <div className="flex flex-wrap items-center gap-space-md pt-space-xs">
                  <a className="px-7 py-3.5 rounded-lg bg-secondary-container text-on-secondary-fixed font-title-md hover:bg-secondary-fixed-dim transition-all shadow-md flex items-center gap-2 font-bold group" href="#quick-inquiry">
                    <span>Apply for Admission 2026</span>
                    <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
                  </a>
                  <a className="px-6 py-3.5 rounded-lg bg-surface/10 hover:bg-surface/20 text-on-primary font-title-md transition-all flex items-center gap-2" href="#prospectus-modal">
                    <span className="material-symbols-outlined text-[20px] text-secondary-container">description</span>
                    <span>Download Prospectus</span>
                  </a>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-space-md pt-space-md w-full border-t border-primary-container/60">
                  <div>
                    <div className="font-headline-md text-headline-md font-bold text-secondary-container">100%</div>
                    <div className="font-body-sm text-body-sm text-primary-fixed-dim">FBISE Pass Rate</div>
                  </div>
                  <div>
                    <div className="font-headline-md text-headline-md font-bold text-on-primary">25+</div>
                    <div className="font-body-sm text-body-sm text-primary-fixed-dim">Years Academic Legacy</div>
                  </div>
                  <div className="col-span-2 sm:col-span-1">
                    <div className="font-headline-md text-headline-md font-bold text-secondary-fixed">3-Month</div>
                    <div className="font-body-sm text-body-sm text-primary-fixed-dim">Hospital Internship</div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 relative flex justify-center">
                <div className="relative w-full max-w-[440px]">

                  <div className="absolute inset-0 bg-gradient-to-tr from-secondary-container/20 to-transparent rounded-2xl transform rotate-3 scale-105"></div>

                  <div className="relative bg-surface rounded-xl overflow-hidden shadow-2xl text-on-surface">

                    <div className="bg-surface-container-high px-space-lg py-space-md flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-full bg-surface-container-lowest p-1 shadow-sm flex items-center justify-center shrink-0">
                          <img alt="Official Institutional Crest" className="h-10 w-10 object-contain" src="https://lh3.googleusercontent.com/aida/AEtjO1UvkVeB5omwHMLBXNQgGfB7IDYmimAnm6ldjJe3fFsBQeLUnfnhs2rFWzOhpbbYkfD2Y1dvhc2gaXFx7nhVAH5eA1lGAHqJcFn3penSWjZ7i1X9UL88PdWoEFCNhy-6vAprWMX9ea7qpu0TkuJ4WkjT7Dfb5j1gmlQ6FQzD2ly-G08PbigHyTKmJakD5vIf5_FDw_vEttF70DGfDN-D2S7KrNzgJ9dMf7Ry-KZjtP0MZ6Z6ue39TXG6ZmmvATNXq9jr40eh7HuR" />
                        </div>
                        <div>
                          <h3 className="font-title-md text-title-md font-bold text-primary leading-tight">Safari-1 Campus</h3>
                          <p className="font-label-md text-label-md text-on-surface-variant">Bahria Town, Islamabad</p>
                        </div>
                      </div>
                      <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-primary text-on-primary text-badge-caps font-bold">2026 INTAKE</span>
                    </div>

                    <div className="relative h-60 w-full overflow-hidden">
                      <img className="w-full h-full object-cover" data-alt="High-resolution exterior view of Dr. A.Q. Khan School &amp; College modern educational building in Safari Villas Bahria Town Islamabad with disciplined students in uniform walking through collegiate colonnades and green campus lawns under bright clear daylight" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCaPC71uTNJKAh7yogJld-O1iRYbT3NovXOUsJbcZbJJwtsnIl7NS9YrzCXm88ibQB3m3lZ8oN-wUkptlAf0oYQoPsTVJ1ZsqAeLx4zG4k7SmvqAYmwU4BjlMFFEqdXGQHX6-LnvjFldWvgMtwQAtTeYQA1I14_8nTemgZCBfk67NWo1oUdkk1J87mcpnwXkXPAYrQhpbnwnhPbDOi78NYrDQg5xEHvH94kI5sLI9tXpSGAqMtXI8v4" />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent flex items-end p-4">
                        <div className="text-on-primary font-body-sm text-[13px] flex items-center gap-1.5 font-medium">
                          <span className="material-symbols-outlined text-[18px] text-secondary-container">verified</span>
                          <span>Recognized by FBISE Islamabad &amp; Higher Education Dept</span>
                        </div>
                      </div>
                    </div>

                    <div className="p-space-lg space-y-space-sm bg-surface">
                      <div className="flex items-center gap-3 p-2.5 rounded-lg bg-surface-container-low">
                        <span className="material-symbols-outlined text-secondary text-[24px]">local_hospital</span>
                        <div className="text-left">
                          <div className="font-label-lg text-label-lg font-bold text-primary">Safari Hospital Practicals</div>
                          <div className="font-body-sm text-body-sm text-on-surface-variant">Hands-on diagnostic training for Medical students</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 p-2.5 rounded-lg bg-surface-container-low">
                        <span className="material-symbols-outlined text-secondary text-[24px]">psychology</span>
                        <div className="text-left">
                          <div className="font-label-lg text-label-lg font-bold text-primary">Modern AI &amp; Robotics Labs</div>
                          <div className="font-body-sm text-body-sm text-on-surface-variant">Coding, Python &amp; STEM foundational curricula</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="absolute -bottom-6 -left-6 bg-secondary-container text-on-secondary-fixed px-4 py-3 rounded-lg shadow-xl flex items-center gap-3 z-20">
                    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-on-primary">
                      <span className="material-symbols-outlined text-[20px]">military_tech</span>
                    </div>
                    <div>
                      <div className="font-label-md text-label-md font-bold tracking-wide uppercase">Top Position Holders</div>
                      <div className="font-title-md text-title-md font-extrabold text-primary">Federal Board Islamabad</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        <section className="w-full bg-surface-container-lowest shadow-sm relative z-20">
          <div className="max-w-[1280px] mx-auto px-margin-mobile md:px-margin lg:px-margin-desktop py-space-lg">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-md">
              <div className="flex items-start gap-space-sm p-3 rounded-lg hover:bg-surface-container transition-colors">
                <div className="w-10 h-10 rounded-lg bg-surface-container-high text-primary flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[22px]">verified_user</span>
                </div>
                <div>
                  <div className="font-title-md text-title-md font-bold text-primary">FBISE Islamabad</div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">Approved College Code 2489 with consistent A-1 grade streaks.</p>
                </div>
              </div>
              <div className="flex items-start gap-space-sm p-3 rounded-lg hover:bg-surface-container transition-colors">
                <div className="w-10 h-10 rounded-lg bg-surface-container-high text-primary flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[22px]">clinical_notes</span>
                </div>
                <div>
                  <div className="font-title-md text-title-md font-bold text-primary">Safari Hospital Practicals</div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">Clinical exposure for FSc Pre-Medical &amp; Allied Health tracks.</p>
                </div>
              </div>
              <div className="flex items-start gap-space-sm p-3 rounded-lg hover:bg-surface-container transition-colors">
                <div className="w-10 h-10 rounded-lg bg-surface-container-high text-primary flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[22px]">domain</span>
                </div>
                <div>
                  <div className="font-title-md text-title-md font-bold text-primary">Bahria Education Trust</div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">Backed by Bahria Town infrastructure, safety &amp; subsidized tuition.</p>
                </div>
              </div>
              <div className="flex items-start gap-space-sm p-3 rounded-lg hover:bg-surface-container transition-colors">
                <div className="w-10 h-10 rounded-lg bg-surface-container-high text-primary flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[22px]">school</span>
                </div>
                <div>
                  <div className="font-title-md text-title-md font-bold text-primary">Guaranteed Internships</div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">3-month placements in Bahria International Hospitals &amp; Tech wings.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-space-xl lg:py-24 bg-surface">
          <div className="max-w-[1280px] mx-auto px-margin-mobile md:px-margin lg:px-margin-desktop">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center">

              <div className="lg:col-span-5 relative">
                <div className="relative rounded-xl overflow-hidden shadow-lg aspect-[4/5] bg-surface-container-high">
                  <img className="w-full h-full object-cover" data-alt="Dedicated high school science lab session at Dr. A.Q. Khan School &amp; College in Bahria Town, where eager students in lab coats conduct chemistry titration and biology microscopes guided by female and male faculty mentors" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBFk3PiOtG2khjNM8hz5rmia2aaQwTUV_0n6yMgbaOUP-6DMv73vMkp3J-ZkVKEEUIrv5FuOKW4v8kw2zY-uq6XMpdb_HyLdtMqn4QOb9OBxf1RHWnwc5fKPpIfASMK2Ep1J0ntH45eLMpuffm7tekoiDMwuurzn6kM5J7Bz0v9MvSRQsmHVG7YQd-uMegL-v8gUoTPeW94ZjEbut8X8I4sHLccZunOi9lk4OCDl4FLpLFpdqM7yO1N" />
                </div>

                <div className="hidden sm:block absolute -bottom-8 -right-8 w-56 h-56 rounded-xl overflow-hidden shadow-xl">
                  <img className="w-full h-full object-cover" data-alt="Primary school children in Dr A Q Khan School Safari-1 uniform happily engaged in interactive robotics STEM classroom activities using smart screens and building blocks" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBuv45L-Ze5oIzM7CfAqRzFfaLhfMAXUdcLk2fA1AXplS-eea3gy19Mfx45shvYJZjKdT29L2Z8kC05TRDgv_ikkYvfdOSO0P1Qa-s2azGSfjF-MqQlVGaqfqzYCjlnQMRIBejKtrw1QrQ4WQkkHlkL_8zIKoKQi_hk3AkXrghMnca329jpCo3gD_taIfoiAQvTQ7gOULrvq47LTWSHWTkJNlWYP5BQT5vanYRuksEONfIA7tDOmprf" />
                </div>

                <div className="absolute top-6 left-6 bg-primary text-on-primary p-4 rounded-lg shadow-lg flex items-center gap-3">
                  <span className="material-symbols-outlined text-secondary-container text-[28px]">history_edu</span>
                  <div>
                    <div className="font-label-md text-label-md font-bold tracking-wider uppercase text-secondary-fixed">Established</div>
                    <div className="font-headline-sm text-headline-sm font-bold">1999 A.D.</div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7 flex flex-col items-start gap-space-md lg:pl-space-lg">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-surface-container-high text-primary">
                  <span className="font-badge-caps text-badge-caps uppercase tracking-wider font-bold">About Our Heritage</span>
                </div>
                <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg font-bold text-primary leading-tight">
                  A Beacon of Academic Distinction Under Bahria Town Education Trust
                </h2>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  Founded in 1999 and actively sponsored by the Bahria Town Education Trust, Dr. A.Q. Khan School &amp; College Safari-1 stands at the confluence of deep Islamic moral ethos, scientific rigor, and technological innovation.
                </p>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  Our campus spans early childhood Montessori up to Higher Secondary Intermediate college credentials. We offer segregated wings for boys and girls from primary grades upward, ensuring an inspiring, culturally resonant, and highly focused learning environment where intellectual curiosity flourishes alongside discipline and humility.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md w-full pt-2">
                  <div className="p-4 rounded-lg bg-surface-container-low flex flex-col gap-1">
                    <div className="flex items-center gap-2 text-primary font-title-md font-bold">
                      <span className="material-symbols-outlined text-secondary text-[20px]">auto_stories</span>
                      <span>Moral &amp; Civic Fortitude</span>
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">Emphasis on Nazra Quran, Seerat-un-Nabi, character etiquette, and community welfare projects.</p>
                  </div>
                  <div className="p-4 rounded-lg bg-surface-container-low flex flex-col gap-1">
                    <div className="flex items-center gap-2 text-primary font-title-md font-bold">
                      <span className="material-symbols-outlined text-secondary text-[20px]">science</span>
                      <span>Pre-Med &amp; STEM Mastery</span>
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">Real clinical rounds in Safari Hospital and hands-on laboratory exploration from grade 6 onward.</p>
                  </div>
                  <div className="p-4 rounded-lg bg-surface-container-low flex flex-col gap-1">
                    <div className="flex items-center gap-2 text-primary font-title-md font-bold">
                      <span className="material-symbols-outlined text-secondary text-[20px]">developer_board</span>
                      <span>AI &amp; Tech Literacy</span>
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">Specialized computer labs with coding from Grade 3, preparing students for FAST, NUST, and global tech careers.</p>
                  </div>
                  <div className="p-4 rounded-lg bg-surface-container-low flex flex-col gap-1">
                    <div className="flex items-center gap-2 text-primary font-title-md font-bold">
                      <span className="material-symbols-outlined text-secondary text-[20px]">security</span>
                      <span>Secure Campus Perimeter</span>
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">24/7 CCTV, dedicated security guards, Bahria Town gated access, and safe organized transport fleets.</p>
                  </div>
                </div>
                <div className="pt-space-sm">
                  <a className="px-6 py-3 rounded-lg bg-primary text-on-primary font-label-lg font-bold hover:bg-primary-container transition-all inline-flex items-center gap-2" href="#leadership">
                    <span>Read Full History &amp; Leadership Profile</span>
                    <span className="material-symbols-outlined text-[16px]">chevron_right</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-space-xl bg-surface-container-low" id="leadership">
          <div className="max-w-[1280px] mx-auto px-margin-mobile md:px-margin lg:px-margin-desktop">
            <div className="text-center max-w-2xl mx-auto space-y-space-xs mb-space-xl">
              <span className="font-badge-caps text-badge-caps uppercase tracking-wider text-secondary font-bold">Institutional Guardians</span>
              <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg font-bold text-primary">Guidance &amp; Governance</h2>
              <p className="font-body-md text-body-md text-on-surface-variant">Distinguished educationists steering the institutional vision toward national prominence.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-space-lg">

              <div className="bg-surface rounded-xl p-space-lg shadow-sm flex flex-col justify-between">
                <div className="space-y-space-md">
                  <div className="flex items-center gap-3">
                    <div className="w-16 h-16 rounded-full overflow-hidden bg-surface-container-high shrink-0">
                      <img className="w-full h-full object-cover" data-alt="Portrait of the esteemed college Principal of Dr. A.Q. Khan School &amp; College Safari-1 wearing professional formal attire in office setting with books and national emblem" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAQd6JIgpmQL2tPuZaAkmpEtYJM1tBiYtmWWW4TSzHEYynVMMU04zWiI10nqyr4J-TJoDaIjljg6Ni8RUjQHABCdQ-rcrPkwQwZZBMJZBPGC-YBpmnUm30rJFPDOvxcQTZyUKX_SijqvjgHbSIKKWfY3R5367gS-bjL3AQ4Y5hO_mWBkyd_Z7M4KMl75XVcQKx7FLGtCUPaw9Bvv1xbsNNWsp43hO_ixsE8tn3wW3W5UyF52duvMXPB" />
                    </div>
                    <div>
                      <h4 className="font-title-md text-title-md font-bold text-primary">Prof. M. Siddiqui</h4>
                      <p className="font-label-md text-label-md text-secondary font-semibold">Principal &amp; Academic Director</p>
                      <p className="font-body-sm text-[11px] text-on-surface-variant">M.Phil Education, 28 Yrs Experience</p>
                    </div>
                  </div>
                  <div className="relative">
                    <span className="material-symbols-outlined text-secondary/30 text-[36px] absolute -top-4 -left-2">format_quote</span>
                    <p className="font-body-sm text-body-sm text-on-surface-variant italic pl-6 leading-relaxed">
                      &quot;Our sacred charge is not merely academic grades, but forging upright citizens equipped to pioneer solutions in medicine, engineering, and ethical governance. We cultivate intellectual curiosity grounded in moral responsibility.&quot;
                    </p>
                  </div>
                </div>
                <div className="pt-space-md mt-space-md border-t border-surface-container-high">
                  <button className="text-primary font-label-md text-label-md font-bold hover:text-secondary inline-flex items-center gap-1 transition-colors">
                    <span>Read Full Message</span>
                    <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                  </button>
                </div>
              </div>

              <div className="bg-primary text-on-primary rounded-xl p-space-lg shadow-md flex flex-col justify-between relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-secondary-container/10 rounded-full blur-2xl"></div>
                <div className="space-y-space-md relative z-10">
                  <div className="w-12 h-12 rounded-lg bg-primary-container text-secondary-container flex items-center justify-center">
                    <span className="material-symbols-outlined text-[26px]">flag</span>
                  </div>
                  <h4 className="font-headline-sm text-headline-sm font-bold text-secondary-fixed">Our Mission &amp; Vision</h4>
                  <div className="space-y-3 font-body-sm text-body-sm text-primary-fixed-dim leading-relaxed">
                    <p>
                      <strong className="text-on-primary">Mission:</strong> To provide accessible, cutting-edge STEM and humanities instruction paired with real clinical exposure, empowering Pakistani youth to achieve academic distinction under the Federal Board.
                    </p>
                    <p>
                      <strong className="text-on-primary">Vision:</strong> A premier national center of learning that mirrors Dr. A.Q. Khan&apos;s scientific dedication and national pride, producing ethical physicians, engineers, and civic leaders.
                    </p>
                  </div>
                </div>
                <div className="pt-space-md mt-space-md border-t border-primary-container relative z-10">
                  <span className="font-badge-caps text-badge-caps uppercase tracking-wider text-secondary-container font-bold">Chartered Excellence</span>
                </div>
              </div>

              <div className="bg-surface rounded-xl p-space-lg shadow-sm flex flex-col justify-between">
                <div className="space-y-space-md">
                  <div className="flex items-center gap-3">
                    <div className="w-16 h-16 rounded-full overflow-hidden bg-surface-container-high shrink-0">
                      <img className="w-full h-full object-cover" data-alt="Portrait of senior representative from Bahria Town Education Trust wearing corporate attire in executive boardroom with Bahria Town insignia" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB8pXjlPVSH90lQuoyZHYt2ecWryOC_OvbjVqukC-zDQxPh3jR2ML87eOllHN8AjQe70aHGGSiNvVY_lHI7wG_I-5Mr91tfUZAEo2VYZIK85VJe40vduoID3pR7AtsCst8QH1lq3ZvZe6tVVtWRJgPJOAOrQ0e3tl_jPYL8Pf1HqyPzeEz6WibajdfMNfCBBl4jSqnoezGAPgF8Y7PBzzyn3u7S1_n6LRwasc1ady6jgaLpMjpk1HVC" />
                    </div>
                    <div>
                      <h4 className="font-title-md text-title-md font-bold text-primary">Trustee Board</h4>
                      <p className="font-label-md text-label-md text-secondary font-semibold">Bahria Town Education Trust</p>
                      <p className="font-body-sm text-[11px] text-on-surface-variant">Sponsors &amp; Philanthropic Patrons</p>
                    </div>
                  </div>
                  <div className="relative">
                    <span className="material-symbols-outlined text-secondary/30 text-[36px] absolute -top-4 -left-2">format_quote</span>
                    <p className="font-body-sm text-body-sm text-on-surface-variant italic pl-6 leading-relaxed">
                      &quot;Through modern campuses, fully funded merit scholarships, and the integration of Safari Hospital resources, Bahria Town ensures our students receive uncompromised world-class educational infrastructure.&quot;
                    </p>
                  </div>
                </div>
                <div className="pt-space-md mt-space-md border-t border-surface-container-high">
                  <button className="text-primary font-label-md text-label-md font-bold hover:text-secondary inline-flex items-center gap-1 transition-colors">
                    <span>Trust Initiatives</span>
                    <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-space-xl lg:py-24 bg-surface">
          <div className="max-w-[1280px] mx-auto px-margin-mobile md:px-margin lg:px-margin-desktop">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md mb-space-xl">
              <div className="space-y-space-xs max-w-2xl">
                <span className="font-badge-caps text-badge-caps uppercase tracking-wider text-secondary font-bold">Academic Divisions</span>
                <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg font-bold text-primary">Purpose-Built Academic Wings</h2>
                <p className="font-body-md text-body-md text-on-surface-variant">From early childhood development to specialized post-matric collegiate degrees.</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-body-sm font-label-md text-primary font-semibold">Separate Wings for Boys &amp; Girls</span>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-lg">

              <div className="bg-surface rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group flex flex-col justify-between">
                <div>
                  <div className="h-48 w-full overflow-hidden bg-surface-container-high relative">
                    <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" data-alt="Vibrant, clean Montessori preschool classroom at Dr. A.Q. Khan School Safari-1 with joyful Pakistani toddlers engaged in Montessori sensory apparatus with kind teacher supervising" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAbEIKOBz7OtlgGHM6Z5MsAAZxdBzClzJ46EqtZRiKp3BO-gap6HUJoJb7XXIAoWl_n_MZnC8YyFF8ZraQx-TjL3yKOv-UhkhAyQRql8LgDy4ydVznPqM4q3-l6uOuXOBI6G5U3_AE1Z1Fvpzgl0UuSYCEk5y16TMZDqFpe3Ajoe-6SWasPX87KGgdQZc7ReUK_-e7tgPwLA7S_gVzb1QIgYBE_ZCPygutP6ex78xcuQLJVWSEOFOFi" />
                    <span className="absolute top-3 left-3 px-2.5 py-1 rounded bg-primary text-on-primary text-badge-caps font-bold">Ages 3 – 5</span>
                  </div>
                  <div className="p-space-lg space-y-space-xs">
                    <h3 className="font-title-lg text-title-lg font-bold text-primary group-hover:text-secondary transition-colors">Pre-School &amp; Montessori</h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                      Play-based early learning with sensory playrooms, phonics development, foundational numeracy, and caring child-psychology certified educators.
                    </p>
                    <ul className="pt-2 space-y-1.5 font-body-sm text-[13px] text-on-surface-variant">
                      <li className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-secondary text-[16px]">check_circle</span>
                        <span>Activity-driven learning environment</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-secondary text-[16px]">check_circle</span>
                        <span>Nazra Quran with Tajweed initiation</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="p-space-lg pt-0">
                  <a className="font-label-md text-label-md text-primary font-bold inline-flex items-center gap-1 hover:text-secondary transition-colors" href="#">
                    <span>View Pre-School Curriculum</span>
                    <span className="material-symbols-outlined text-[16px]">chevron_right</span>
                  </a>
                </div>
              </div>

              <div className="bg-surface rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group flex flex-col justify-between">
                <div>
                  <div className="h-48 w-full overflow-hidden bg-surface-container-high relative">
                    <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" data-alt="Primary school students grades 1 to 5 working on science models and English reading comprehension in spacious bright classrooms with smart interactive whiteboards" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAH2aVKcguK_HYHCVokRkOhvoKmcQ_dT63puAb5909BSXcKPDF0g2UTvaFbM7nT5NI5QATiPcDIDFsX_yVZA1x-xCGQda_GoSqfqismdW9YL0EhH8Ledd-JKL_A0sp3kfpI7lgpMcfRzBc-o2xK266_PA03iszae1pHLhCXtInZYsGD2AqVXdLuZiyMVEfqrKGPYRZiao3ogzAhllX9hiBL2iawObDBTe22PC_2R4OMZF6h4U08vVVG" />
                    <span className="absolute top-3 left-3 px-2.5 py-1 rounded bg-primary text-on-primary text-badge-caps font-bold">Grades 1 – 5</span>
                  </div>
                  <div className="p-space-lg space-y-space-xs">
                    <h3 className="font-title-lg text-title-lg font-bold text-primary group-hover:text-secondary transition-colors">Primary Wing</h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                      Robust foundations in Mathematics, English communicative skills, General Science, and Islamic Studies tailored to spark intellectual curiosity.
                    </p>
                    <ul className="pt-2 space-y-1.5 font-body-sm text-[13px] text-on-surface-variant">
                      <li className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-secondary text-[16px]">check_circle</span>
                        <span>Robotics &amp; Mental Math clubs</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-secondary text-[16px]">check_circle</span>
                        <span>Speech declamation &amp; mental health coaching</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="p-space-lg pt-0">
                  <a className="font-label-md text-label-md text-primary font-bold inline-flex items-center gap-1 hover:text-secondary transition-colors" href="#">
                    <span>Primary Division Details</span>
                    <span className="material-symbols-outlined text-[16px]">chevron_right</span>
                  </a>
                </div>
              </div>

              <div className="bg-surface rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group flex flex-col justify-between">
                <div>
                  <div className="h-48 w-full overflow-hidden bg-surface-container-high relative">
                    <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" data-alt="Independent dedicated Girls Wing building at Dr. A.Q. Khan School Bahria Town with female students in white dupattas participating in campus debates and computer lab coding" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB7K1vnNDHU0WzZcfzrcQgCTx-APdKwLQggyVdJmRWgzwpj1ZvSPRfFme7jyINOKSJtGCT0sJG271EaAFMWJYktOE6FRRJDLxHmvVNic7_k2s8iabDRcLL9qrvGNddiN3zkZr3-20EokB-zU1i_h_1P7D4qwUMXlEui9Ceb6TiRwInbRcditZiDWZcB8XzUe1PGEdwiwouyNnzUeqCms7ECsKHYNHvB6x9zA0Dsqd6vzL6EELk_9XBi" />
                    <span className="absolute top-3 left-3 px-2.5 py-1 rounded bg-primary text-on-primary text-badge-caps font-bold">Grades 6 – 12 (Girls)</span>
                  </div>
                  <div className="p-space-lg space-y-space-xs">
                    <h3 className="font-title-lg text-title-lg font-bold text-primary group-hover:text-secondary transition-colors">Girls Wing (Collegiate)</h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                      Dedicated campus block with private courtyards, female faculty leadership, science labs, and FBISE matriculation &amp; intermediate coaching.
                    </p>
                    <ul className="pt-2 space-y-1.5 font-body-sm text-[13px] text-on-surface-variant">
                      <li className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-secondary text-[16px]">check_circle</span>
                        <span>100% Female supervisory and teaching staff</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-secondary text-[16px]">check_circle</span>
                        <span>Dedicated indoor gymnasium &amp; art studios</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="p-space-lg pt-0">
                  <a className="font-label-md text-label-md text-primary font-bold inline-flex items-center gap-1 hover:text-secondary transition-colors" href="#">
                    <span>Explore Girls Wing</span>
                    <span className="material-symbols-outlined text-[16px]">chevron_right</span>
                  </a>
                </div>
              </div>

              <div className="bg-surface rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group flex flex-col justify-between">
                <div>
                  <div className="h-48 w-full overflow-hidden bg-surface-container-high relative">
                    <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" data-alt="Boys Wing campus of Dr. A.Q. Khan School with smart uniform students engaged in advanced physics lab experiments and collegiate sports activities" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC9pfzcCHTUdvcS9aCIp1sXLC86Fi1Fj8DaXqkBOOMex8SbWnIksnQvy6sZpn1ov1i2y1Kbgdhshlq-vnU6bVw0mXNJS1T_7_nfe3tHatFS4LVXpF-mieXl-8Q9YQjk3ey8YVQDPvjkzwMDab_SG4kRSA1oCXxVpEFyKSzKjFo30VGI7SYQjDL_pkWA_68f3iTJwltOaA3spGvGazENW45JwhMYIC1qfS6SioqSxzAcm5H4EB1knnEy" />
                    <span className="absolute top-3 left-3 px-2.5 py-1 rounded bg-primary text-on-primary text-badge-caps font-bold">Grades 6 – 12 (Boys)</span>
                  </div>
                  <div className="p-space-lg space-y-space-xs">
                    <h3 className="font-title-lg text-title-lg font-bold text-primary group-hover:text-secondary transition-colors">Boys Wing (Collegiate)</h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                      Vigorous academic coaching, cadet-level physical conditioning, science olympiad training, and guidance counseling for armed forces &amp; universities.
                    </p>
                    <ul className="pt-2 space-y-1.5 font-body-sm text-[13px] text-on-surface-variant">
                      <li className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-secondary text-[16px]">check_circle</span>
                        <span>Cricket academy &amp; football turf access</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-secondary text-[16px]">check_circle</span>
                        <span>Pre-Engineering, ICS &amp; Inter-Tech</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="p-space-lg pt-0">
                  <a className="font-label-md text-label-md text-primary font-bold inline-flex items-center gap-1 hover:text-secondary transition-colors" href="#">
                    <span>Explore Boys Wing</span>
                    <span className="material-symbols-outlined text-[16px]">chevron_right</span>
                  </a>
                </div>
              </div>

              <div className="bg-surface rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group flex flex-col justify-between">
                <div>
                  <div className="h-48 w-full overflow-hidden bg-surface-container-high relative">
                    <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" data-alt="Modern collegiate chemistry and physics research laboratory with high quality glassware, digital microscopes, sensors and safety hoods at Dr A Q Khan College" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDLwDz2GYgOMQAR-Xs4nTbTxzSyuNKM0xQlEi33VCgoIHbzwnLudW6C5HmPyhPijElgHhVQ3GySShtTWPkAL1U5sN2VU1sbHz6wBIsSjczRu9dzWof3ONZg_XlP4q5HLfc-VPaoMZUdrmwdYKWZv2m8QkeQQxBBoApv5x16Kx6ZussaCWWopkHp_aBI8Jnt4gtQ2X4m2WOxj8nNHguf73Q00JILS6ll0rWisBhhfqe3v7zu82xFvpiV" />
                    <span className="absolute top-3 left-3 px-2.5 py-1 rounded bg-primary text-on-primary text-badge-caps font-bold">Research Labs</span>
                  </div>
                  <div className="p-space-lg space-y-space-xs">
                    <h3 className="font-title-lg text-title-lg font-bold text-primary group-hover:text-secondary transition-colors">Science &amp; AI Laboratories</h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                      Eight specialized labs conforming to international collegiate benchmarks: Physics, Chemistry, Biology, and two High-Performance Computer Labs.
                    </p>
                    <ul className="pt-2 space-y-1.5 font-body-sm text-[13px] text-on-surface-variant">
                      <li className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-secondary text-[16px]">check_circle</span>
                        <span>Fiber-optic high-speed research intranet</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-secondary text-[16px]">check_circle</span>
                        <span>Smart interactive displays in every lab</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="p-space-lg pt-0">
                  <a className="font-label-md text-label-md text-primary font-bold inline-flex items-center gap-1 hover:text-secondary transition-colors" href="#">
                    <span>Tour Our STEM Facilities</span>
                    <span className="material-symbols-outlined text-[16px]">chevron_right</span>
                  </a>
                </div>
              </div>

              <div className="bg-surface rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group flex flex-col justify-between">
                <div>
                  <div className="h-48 w-full overflow-hidden bg-surface-container-high relative">
                    <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" data-alt="Pre-medical allied health science students receiving clinical instruction inside Safari Hospital Bahria Town Islamabad with diagnostic machinery and stethoscopes" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAvFUAEFCnpJ5dloAD8Z0RJJzvW5k0dKj5Y3vaEWp3Rj3mtobgbixKMqZwyAZELoFNhuHkkUJSuo_jPzDWBrRn22DvEFduRbXf41FKBicf-ssM85y8oUq5NEuG0ovWceHm-V8Ymb8qN6pdbPw2OxKX5Av-BH6F5hcFWlF1n5NhfScJ6zgrGUS8CI3aUpGOj7zirZV9dPRHuzkG1GW5Hsx0Grxkf7IWwXFsnvoZHAU36HuUhtdFA1Op4" />
                    <span className="absolute top-3 left-3 px-2.5 py-1 rounded bg-secondary-container text-on-secondary-fixed text-badge-caps font-bold">Safari Hospital Allied</span>
                  </div>
                  <div className="p-space-lg space-y-space-xs">
                    <h3 className="font-title-lg text-title-lg font-bold text-primary group-hover:text-secondary transition-colors">Allied Health Sciences</h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                      Direct practical rotations inside Safari Hospital. Specializations in Medical Lab Tech (MLT), Radiology, Operation Theater, and Dialysis techniques.
                    </p>
                    <ul className="pt-2 space-y-1.5 font-body-sm text-[13px] text-on-surface-variant">
                      <li className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-secondary text-[16px]">check_circle</span>
                        <span>Clinical rotations under consultant surgeons</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-secondary text-[16px]">check_circle</span>
                        <span>3-month guaranteed Bahria Hospital internship</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="p-space-lg pt-0">
                  <a className="font-label-md text-label-md text-primary font-bold inline-flex items-center gap-1 hover:text-secondary transition-colors" href="#">
                    <span>Allied Health Program Specs</span>
                    <span className="material-symbols-outlined text-[16px]">chevron_right</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-space-xl bg-surface-container-low">
          <div className="max-w-[1280px] mx-auto px-margin-mobile md:px-margin lg:px-margin-desktop">
            <div className="text-center max-w-2xl mx-auto space-y-space-xs mb-space-xl">
              <span className="font-badge-caps text-badge-caps uppercase tracking-wider text-secondary font-bold">Beyond the Classroom</span>
              <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg font-bold text-primary">Cultivating Well-Rounded Champions</h2>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Leadership, debate, athleticism, and civic service are integral to our academic DNA.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-md">

              <div className="bg-surface p-space-lg rounded-xl shadow-sm space-y-space-sm">
                <div className="w-12 h-12 rounded-lg bg-surface-container-high text-primary flex items-center justify-center">
                  <span className="material-symbols-outlined text-[26px]">shield</span>
                </div>
                <h3 className="font-title-lg text-title-lg font-bold text-primary">Academic Houses</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  Four proud houses—<strong>Jinnah, Iqbal, Sir Syed, and Dr. A.Q. Khan</strong>—compete throughout the year in declamations, quizzes, sports, and science exhibitions.
                </p>
                <div className="flex gap-2 pt-2">
                  <span className="w-3 h-3 rounded-full bg-primary" title="Jinnah Blue"></span>
                  <span className="w-3 h-3 rounded-full bg-secondary-container" title="Iqbal Gold"></span>
                  <span className="w-3 h-3 rounded-full bg-tertiary" title="Sir Syed Crimson"></span>
                  <span className="w-3 h-3 rounded-full bg-surface-tint" title="Dr. Khan Green"></span>
                </div>
              </div>

              <div className="bg-surface p-space-lg rounded-xl shadow-sm space-y-space-sm">
                <div className="w-12 h-12 rounded-lg bg-surface-container-high text-primary flex items-center justify-center">
                  <span className="material-symbols-outlined text-[26px]">sports_cricket</span>
                </div>
                <h3 className="font-title-lg text-title-lg font-bold text-primary">Sports &amp; Athletics</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  Full-size turf cricket pitches, basketball courts, badminton arenas, and table tennis facilities host our celebrated Annual Inter-House Sports Gala.
                </p>
                <div className="pt-2 text-primary font-label-md text-label-md font-bold">15+ Regional Cups Won</div>
              </div>

              <div className="bg-surface p-space-lg rounded-xl shadow-sm space-y-space-sm">
                <div className="w-12 h-12 rounded-lg bg-surface-container-high text-primary flex items-center justify-center">
                  <span className="material-symbols-outlined text-[26px]">emoji_events</span>
                </div>
                <h3 className="font-title-lg text-title-lg font-bold text-primary">Mega Events</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  Annual National Science Fair, All-Pakistan Bilingual Declamation Contests, Qirat &amp; Naat competitions, and the flagship Model United Nations (AQK-MUN).
                </p>
                <div className="pt-2 text-secondary font-label-md text-label-md font-bold">Bilingual Excellence</div>
              </div>

              <div className="bg-surface p-space-lg rounded-xl shadow-sm space-y-space-sm">
                <div className="w-12 h-12 rounded-lg bg-surface-container-high text-primary flex items-center justify-center">
                  <span className="material-symbols-outlined text-[26px]">explore</span>
                </div>
                <h3 className="font-title-lg text-title-lg font-bold text-primary">Study Tours</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  Structured educational expeditions to SUPARCO, Pakistan Science Foundation, historical northern archaeological zones, and heavy industrial facilities.
                </p>
                <div className="pt-2 text-primary font-label-md text-label-md font-bold">Broadening Perspectives</div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-space-xl lg:py-24 bg-surface">
          <div className="max-w-[1280px] mx-auto px-margin-mobile md:px-margin lg:px-margin-desktop">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md mb-space-xl">
              <div className="space-y-space-xs max-w-2xl">
                <span className="font-badge-caps text-badge-caps uppercase tracking-wider text-secondary font-bold">Alumni Eminence</span>
                <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg font-bold text-primary">Our Legacy: Excelling Globally</h2>
                <p className="font-body-md text-body-md text-on-surface-variant">Our graduates lead breakthroughs in medicine, technology, and engineering worldwide.</p>
              </div>
              <a className="px-5 py-2.5 rounded-lg bg-surface-container text-primary font-label-lg font-bold hover:bg-surface-container-high transition-colors inline-flex items-center gap-2" href="#alumni-portal">
                <span>Join Alumni Network</span>
                <span className="material-symbols-outlined text-[18px]">group</span>
              </a>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-space-lg">

              <div className="bg-surface-container-low rounded-xl p-space-lg flex flex-col justify-between relative shadow-sm">
                <div className="space-y-space-md">
                  <div className="flex items-center gap-3">
                    <div className="w-14 h-14 rounded-full overflow-hidden bg-surface-container shrink-0">
                      <img className="w-full h-full object-cover" data-alt="Dr Hamza Tariq alumnus portrait smiling wearing white physician doctor coat with stethoscope at Bahria International Hospital" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBOeGfDsFNP1XuRE2-tS6ZMEhryaGjJaSHykUxzDZvG4WZg4MtO-KvzdoBNAMO10oGjS4qfoadSZ9Zs8hZD8NmuvL6lSSvuuZLcN3NbpEi2NwotxLgb3ihCbLgXgQVa4XjtJXiPEh73gMLgXL1lrFrYyj8kP6DgD1PMmwMn4zhPveI2Erg0uoo9IIUPLiYYhlv6KBLjx35G6Ij2NfAEFNDsug_Ly-3n6Q8Pv43072Xnsg22EnLSGIAY" />
                    </div>
                    <div>
                      <h4 className="font-title-md text-title-md font-bold text-primary">Dr. Hamza Tariq</h4>
                      <p className="font-label-md text-label-md text-secondary font-semibold">MBBS, King Edward Medical Univ</p>
                      <p className="font-body-sm text-[12px] text-on-surface-variant">Batch of 2017 (FSc Pre-Med)</p>
                    </div>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                    &quot;The hands-on practical rounds at Safari Hospital gave me an immense competitive advantage before I even entered medical college. The teachers built my foundational discipline.&quot;
                  </p>
                </div>
                <div className="pt-space-md mt-space-md border-t border-surface-container flex items-center justify-between">
                  <span className="font-label-md text-label-md text-primary font-semibold">Resident Physician, Bahria Int. Hospital</span>
                  <span className="material-symbols-outlined text-secondary text-[20px]">medical_services</span>
                </div>
              </div>

              <div className="bg-surface-container-low rounded-xl p-space-lg flex flex-col justify-between relative shadow-sm">
                <div className="space-y-space-md">
                  <div className="flex items-center gap-3">
                    <div className="w-14 h-14 rounded-full overflow-hidden bg-surface-container shrink-0">
                      <img className="w-full h-full object-cover" data-alt="Ayesha Noor female software engineer alumna portrait in corporate tech attire holding laptop smiling confidently" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAjYoL0pbkmoG1KhofgfZmhvLMC-lcLIf7K473Bj3KPw_UwfqMgSjh3sMZCmadLx4rfAF8TPT29YT40sEgLm9V7zKugRVVlriEycySxNjBrXBIxEhqF2el9krqWnZxFluzMWrgcyFAHGNeBOh7SfgCZFBWhqBJrIBucBlNJFSBg0r9MB02i49FTZGeBpKqUAOA-EiOyShYK4DISidrVu0Ao8wv2AnLegu9i89XgCMAAgMrTxjuU_IPv" />
                    </div>
                    <div>
                      <h4 className="font-title-md text-title-md font-bold text-primary">Ayesha Noor</h4>
                      <p className="font-label-md text-label-md text-secondary font-semibold">Software Engineer, FAST-NUCES</p>
                      <p className="font-body-sm text-[12px] text-on-surface-variant">Batch of 2019 (ICS)</p>
                    </div>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                    &quot;Dr. A.Q. Khan College’s computer labs and programming teachers introduced me to algorithms while in intermediate. It made my 4 years in software engineering feel natural.&quot;
                  </p>
                </div>
                <div className="pt-space-md mt-space-md border-t border-surface-container flex items-center justify-between">
                  <span className="font-label-md text-label-md text-primary font-semibold">Cloud Solutions Architect</span>
                  <span className="material-symbols-outlined text-secondary text-[20px]">code</span>
                </div>
              </div>

              <div className="bg-surface-container-low rounded-xl p-space-lg flex flex-col justify-between relative shadow-sm">
                <div className="space-y-space-md">
                  <div className="flex items-center gap-3">
                    <div className="w-14 h-14 rounded-full overflow-hidden bg-surface-container shrink-0">
                      <img className="w-full h-full object-cover" data-alt="Engr Bilal Farooq alumnus young mechanical engineer smiling in industrial engineering laboratory setting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCtFyKA_sUXZ3S7jLAd-vixTXEXd6mMX_ptM9vHWxTmOxgRisWE5_x-Z9JgB6xhEHNNmqDFGa5YmKr-taFddnTFDFh0HUhtEUb54cO6ydV2UeLaM4vFLs26ETh8CDiKwjmRNkpajk1svbCDAN5le62GgFaANW6eTbFwJgTDKS51v5RB6wmNNTS1nhaaCFvTeA7hwNCK8aUKVZAvfyQtCTnhCRDHCzLfECuXdmApMdF49XJ6Tltqu6_A" />
                    </div>
                    <div>
                      <h4 className="font-title-md text-title-md font-bold text-primary">Engr. Bilal Farooq</h4>
                      <p className="font-label-md text-label-md text-secondary font-semibold">BE Mechanical, NUST Islamabad</p>
                      <p className="font-body-sm text-[12px] text-on-surface-variant">Batch of 2018 (Pre-Eng)</p>
                    </div>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                    &quot;FBISE Federal Board positions at Dr. A.Q. Khan College opened up direct scholarship avenues for me at NUST. Truly grateful to the devoted mentoring faculty.&quot;
                  </p>
                </div>
                <div className="pt-space-md mt-space-md border-t border-surface-container flex items-center justify-between">
                  <span className="font-label-md text-label-md text-primary font-semibold">Senior Robotics Engineer</span>
                  <span className="material-symbols-outlined text-secondary text-[20px]">precision_manufacturing</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-space-xl bg-primary text-on-primary relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary-container to-primary pointer-events-none opacity-90"></div>
          <div className="max-w-[1280px] mx-auto px-margin-mobile md:px-margin lg:px-margin-desktop relative z-10">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-space-lg text-center">
              <div className="space-y-1">
                <div className="font-headline-lg text-headline-lg-mobile md:text-headline-lg font-bold text-secondary-container">25+</div>
                <div className="font-label-md text-label-md text-primary-fixed-dim uppercase tracking-wider">Years of Legacy</div>
              </div>
              <div className="space-y-1">
                <div className="font-headline-lg text-headline-lg-mobile md:text-headline-lg font-bold text-on-primary">3,500+</div>
                <div className="font-label-md text-label-md text-primary-fixed-dim uppercase tracking-wider">Enrolled Students</div>
              </div>
              <div className="space-y-1">
                <div className="font-headline-lg text-headline-lg-mobile md:text-headline-lg font-bold text-secondary-container">180+</div>
                <div className="font-label-md text-label-md text-primary-fixed-dim uppercase tracking-wider">Faculty Members</div>
              </div>
              <div className="space-y-1">
                <div className="font-headline-lg text-headline-lg-mobile md:text-headline-lg font-bold text-on-primary">100%</div>
                <div className="font-label-md text-label-md text-primary-fixed-dim uppercase tracking-wider">FBISE Pass Record</div>
              </div>
              <div className="space-y-1">
                <div className="font-headline-lg text-headline-lg-mobile md:text-headline-lg font-bold text-secondary-container">8</div>
                <div className="font-label-md text-label-md text-primary-fixed-dim uppercase tracking-wider">State-of-Art Labs</div>
              </div>
              <div className="space-y-1">
                <div className="font-headline-lg text-headline-lg-mobile md:text-headline-lg font-bold text-on-primary">15+</div>
                <div className="font-label-md text-label-md text-primary-fixed-dim uppercase tracking-wider">Championship Cups</div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-space-xl lg:py-24 bg-surface relative" id="quick-inquiry">
          <div className="max-w-[1280px] mx-auto px-margin-mobile md:px-margin lg:px-margin-desktop">
            <div className="bg-surface-container-lowest rounded-2xl shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12">

              <div className="lg:col-span-5 bg-primary text-on-primary p-space-lg md:p-space-xl flex flex-col justify-between">
                <div className="space-y-space-md">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary-container text-on-secondary-fixed text-badge-caps font-bold">
                    <span className="material-symbols-outlined text-[14px]">bolt</span> FAST-TRACK INTAKE
                  </span>
                  <h3 className="font-headline-md text-headline-md font-bold text-on-primary leading-tight">
                    Begin Your Journey of Distinction Today
                  </h3>
                  <p className="font-body-md text-body-md text-primary-fixed-dim leading-relaxed">
                    Admissions are open for Academic Session 2026–2026. Fill this inquiry to schedule a campus walkthrough, receive the fee voucher, or connect directly with our admissions counselor.
                  </p>
                  <div className="space-y-3 pt-2">
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-secondary-container">phone_in_talk</span>
                      <div>
                        <div className="font-label-md text-label-md text-primary-fixed-dim">Direct Helpdesk</div>
                        <div className="font-title-md text-title-md font-bold text-on-primary">+92 51 5705800</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-secondary-container">location_on</span>
                      <div>
                        <div className="font-label-md text-label-md text-primary-fixed-dim">Campus Location</div>
                        <div className="font-body-sm text-body-sm text-primary-fixed">Safari Villas-1, Bahria Town, Islamabad</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="pt-space-lg mt-space-lg border-t border-primary-container">
                  <div className="flex items-center gap-2 text-body-sm text-secondary-fixed">
                    <span className="material-symbols-outlined text-[18px]">verified</span>
                    <span>Subsidized fee quotas available through Bahria Trust</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7 p-space-lg md:p-space-xl bg-surface">
                <form className="space-y-space-md" id="admission-inquiry-form" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
                    <div className="space-y-1.5">
                      <label className="font-label-md text-label-md font-bold text-on-surface" htmlFor="student-name">Student&apos;s Full Name *</label>
                      <input className="w-full px-4 py-2.5 rounded-lg bg-surface-container-low text-on-surface text-body-md focus:bg-surface focus:outline-none focus:ring-2 focus:ring-primary" id="student-name" placeholder="e.g. Muhammad Zaid" required type="text" />
                    </div>
                    <div className="space-y-1.5">
                      <label className="font-label-md text-label-md font-bold text-on-surface" htmlFor="parent-phone">Parent Contact Number *</label>
                      <input className="w-full px-4 py-2.5 rounded-lg bg-surface-container-low text-on-surface text-body-md focus:bg-surface focus:outline-none focus:ring-2 focus:ring-primary" id="parent-phone" placeholder="0300-1234567" required type="tel" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
                    <div className="space-y-1.5">
                      <label className="font-label-md text-label-md font-bold text-on-surface" htmlFor="grade-wing">Academic Wing / Program *</label>
                      <select className="w-full px-4 py-2.5 rounded-lg bg-surface-container-low text-on-surface text-body-md focus:bg-surface focus:outline-none focus:ring-2 focus:ring-primary" id="grade-wing" required>
                        <option disabled value="">Select program...</option>
                        <option value="montessori">Montessori &amp; Early Years</option>
                        <option value="primary">Primary Wing (Grade 1 - 5)</option>
                        <option value="girls-matric">Girls Wing (Grade 6 - 10 FBISE)</option>
                        <option value="boys-matric">Boys Wing (Grade 6 - 10 FBISE)</option>
                        <option value="fsc-medical">College: FSc Pre-Medical (with Safari Hospital)</option>
                        <option value="fsc-eng">College: FSc Pre-Engineering</option>
                        <option value="ics">College: ICS (Computer Science &amp; AI)</option>
                        <option value="icom">College: ICOM</option>
                        <option value="allied-health">College: Allied Health Sciences</option>
                      </select>
                    </div>
                    <div className="space-y-1.5">
                      <label className="font-label-md text-label-md font-bold text-on-surface" htmlFor="parent-email">Parent / Guardian Email</label>
                      <input className="w-full px-4 py-2.5 rounded-lg bg-surface-container-low text-on-surface text-body-md focus:bg-surface focus:outline-none focus:ring-2 focus:ring-primary" id="parent-email" placeholder="name@domain.com" type="email" />
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <label className="font-label-md text-label-md font-bold text-on-surface" htmlFor="inquiry-notes">Specific Query or Preferred Campus Visit Time</label>
                    <textarea className="w-full px-4 py-2.5 rounded-lg bg-surface-container-low text-on-surface text-body-md focus:bg-surface focus:outline-none focus:ring-2 focus:ring-primary" id="inquiry-notes" placeholder="Tell us your requirements (hostel query, school bus transport route, previous school, etc.)..." rows={3}></textarea>
                  </div>
                  <div className="flex items-start gap-2">
                    <input defaultChecked className="mt-1 w-4 h-4 rounded text-primary" id="whatsapp-consent" type="checkbox" />
                    <label className="font-body-sm text-body-sm text-on-surface-variant" htmlFor="whatsapp-consent">Send prospectus PDF, fee breakdown, and campus tour link via WhatsApp.</label>
                  </div>
                  <button className="w-full sm:w-auto px-8 py-3.5 rounded-lg bg-secondary-container text-on-secondary-fixed font-title-md font-bold hover:bg-secondary-fixed-dim transition-all shadow-md flex items-center justify-center gap-2" type="submit">
                    <span>Submit Admission Inquiry</span>
                    <span className="material-symbols-outlined text-[18px]">send</span>
                  </button>

                  <div className="hidden p-4 rounded-lg bg-surface-container-high text-primary flex items-center gap-3" id="inquiry-success-msg">
                    <span className="material-symbols-outlined text-[24px] text-secondary">check_circle</span>
                    <div>
                      <p className="font-title-md font-bold">Inquiry Received Successfully!</p>
                      <p className="font-body-sm text-on-surface-variant">Our Admissions Desk will call you within 2 business hours with prospectus details.</p>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full bg-surface-container-low pb-space-xl">
          <div className="max-w-[1280px] mx-auto px-margin-mobile md:px-margin lg:px-margin-desktop">
            <div className="rounded-xl overflow-hidden shadow-sm bg-surface p-space-md flex flex-col md:flex-row items-center justify-between gap-space-md">
              <div className="flex items-center gap-space-md">
                <div className="w-12 h-12 rounded-lg bg-surface-container-high text-primary flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[28px]">directions_bus</span>
                </div>
                <div>
                  <h4 className="font-title-md text-title-md font-bold text-primary">Dedicated Air-Conditioned Transport Network</h4>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">Safe pick &amp; drop routes across Bahria Town (Phases 1–8), DHA Islamabad, Media Town, PWD, and Police Foundation.</p>
                </div>
              </div>
              <div className="shrink-0 flex items-center gap-space-sm">
                <a className="px-4 py-2 rounded-lg bg-primary text-on-primary font-label-md font-bold hover:bg-primary-container transition-colors inline-flex items-center gap-1.5" href="tel:+92515705800">
                  <span className="material-symbols-outlined text-[18px]">call</span> Call Transport Office
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
        {/* <script>
  // Interactive micro-behavior for smooth anchor scrolling
  document.querySelectorAll(&apos;a[href^=&quot;#&quot;]&apos;).forEach(anchor => {
    anchor.addEventListener(&apos;click&apos;, function (e) {
      const targetId = this.getAttribute(&apos;href&apos;);
      if (targetId && targetId !== &apos;#&apos;) {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          e.preventDefault();
          targetElement.scrollIntoView({ behavior: &apos;smooth&apos; });
        }
      }
    });
  });
</script> */}</main><footer className="w-full bg-primary text-on-primary pt-space-xl pb-space-lg"><div className="max-w-[1280px] mx-auto px-margin-mobile md:px-margin lg:px-margin-desktop"><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-xl pb-space-xl border-b border-primary-container/40"><div className="space-y-space-md"><div className="flex items-center gap-space-sm"><img alt="logo.jpg" className="h-12 w-auto object-contain " src="https://lh3.googleusercontent.com/aida/AEtjO1UvkVeB5omwHMLBXNQgGfB7IDYmimAnm6ldjJe3fFsBQeLUnfnhs2rFWzOhpbbYkfD2Y1dvhc2gaXFx7nhVAH5eA1lGAHqJcFn3penSWjZ7i1X9UL88PdWoEFCNhy-6vAprWMX9ea7qpu0TkuJ4WkjT7Dfb5j1gmlQ6FQzD2ly-G08PbigHyTKmJakD5vIf5_FDw_vEttF70DGfDN-D2S7KrNzgJ9dMf7Ry-KZjtP0MZ6Z6ue39TXG6ZmmvATNXq9jr40eh7HuR" /><div className="font-headline-sm text-headline-sm font-bold leading-tight">Dr. A.Q. Khan<br /><span className="font-body-sm text-body-sm font-normal text-primary-fixed-dim">School &amp; College Safari-1</span></div></div><p className="font-body-sm text-body-sm text-primary-fixed-dim leading-relaxed">Providing collegiate excellence, rigorous character development, and modern scientific education under the visionary auspices of Bahria Town Education Trust.</p><div className="pt-space-xs"><span className="inline-block px-3 py-1 rounded bg-primary-container text-secondary-fixed text-label-md font-badge-caps uppercase tracking-wider">Bahria Town Education Trust</span></div></div><div className="space-y-space-md"><h4 className="font-headline-sm text-headline-sm text-secondary-fixed font-bold">Quick Links</h4><ul className="space-y-2 font-body-sm text-body-sm"><li className="flex items-center gap-2"><span className="material-symbols-outlined text-[14px] text-secondary">chevron_right</span><a className="text-primary-fixed-dim hover:text-on-primary transition-colors" data-path="admissions" href="#">Admissions 2026-2028</a></li><li className="flex items-center gap-2"><span className="material-symbols-outlined text-[14px] text-secondary">chevron_right</span><a className="text-primary-fixed-dim hover:text-on-primary transition-colors" data-path="curriculum" href="#">Curriculum &amp; Syllabi</a></li><li className="flex items-center gap-2"><span className="material-symbols-outlined text-[14px] text-secondary">chevron_right</span><a className="text-primary-fixed-dim hover:text-on-primary transition-colors" data-path="fbise-affiliation" href="#">FBISE Affiliation Status</a></li><li className="flex items-center gap-2"><span className="material-symbols-outlined text-[14px] text-secondary">chevron_right</span><a className="text-primary-fixed-dim hover:text-on-primary transition-colors" data-path="fee-structure" href="#">Fee Structure &amp; Dues</a></li><li className="flex items-center gap-2"><span className="material-symbols-outlined text-[14px] text-secondary">chevron_right</span><a className="text-primary-fixed-dim hover:text-on-primary transition-colors" data-path="careers" href="#">Faculty Careers</a></li><li className="flex items-center gap-2"><span className="material-symbols-outlined text-[14px] text-secondary">chevron_right</span><a className="text-primary-fixed-dim hover:text-on-primary transition-colors" data-path="student-portal" href="#">Student Portal Access</a></li></ul></div><div className="space-y-space-md"><h4 className="font-headline-sm text-headline-sm text-secondary-fixed font-bold">Campus &amp; Facilities</h4><ul className="space-y-2 font-body-sm text-body-sm text-primary-fixed-dim"><li className="flex items-start gap-2"><span className="material-symbols-outlined text-[16px] text-secondary mt-0.5">local_hospital</span><span>Safari Hospital Practicals &amp; Clinical Rotations</span></li><li className="flex items-start gap-2"><span className="material-symbols-outlined text-[16px] text-secondary mt-0.5">science</span><span>Allied Health Sciences &amp; STEM Labs</span></li><li className="flex items-start gap-2"><span className="material-symbols-outlined text-[16px] text-secondary mt-0.5">theater_comedy</span><span>State-of-the-Art Academic Auditorium</span></li><li className="flex items-start gap-2"><span className="material-symbols-outlined text-[16px] text-secondary mt-0.5">sports_cricket</span><span>Collegiate Sports Complex &amp; Gymnasium</span></li><li className="flex items-start gap-2"><span className="material-symbols-outlined text-[16px] text-secondary mt-0.5">menu_book</span><span>Central Library &amp; Research Archives</span></li></ul></div><div className="space-y-space-md"><h4 className="font-headline-sm text-headline-sm text-secondary-fixed font-bold">Contact &amp; Visit</h4><div className="space-y-2.5 font-body-sm text-body-sm text-primary-fixed-dim"><p className="flex items-start gap-2"><span className="material-symbols-outlined text-[16px] text-secondary mt-0.5">pin_drop</span><span>Safari Villas-1, Phase 8 Gateway, Bahria Town, Islamabad, Pakistan</span></p><p className="flex items-center gap-2"><span className="material-symbols-outlined text-[16px] text-secondary">call</span><span>+92 51 5705800 / +92 51 5705801</span></p><p className="flex items-center gap-2"><span className="material-symbols-outlined text-[16px] text-secondary">mail</span><span>info@daqks.edu.pk</span></p><p className="flex items-center gap-2"><span className="material-symbols-outlined text-[16px] text-secondary">schedule</span><span>Mon - Sat: 08:00 AM - 02:30 PM</span></p></div><div className="pt-2 flex items-center gap-2"><a aria-label="Facebook" className="w-8 h-8 rounded bg-primary-container text-on-primary flex items-center justify-center hover:bg-secondary hover:text-on-secondary transition-colors" href="#"><FaFacebook size={18} /></a><a aria-label="YouTube" className="w-8 h-8 rounded bg-primary-container text-on-primary flex items-center justify-center hover:bg-secondary hover:text-on-secondary transition-colors" href="#"><FaYoutube size={18} /></a><a aria-label="LinkedIn" className="w-8 h-8 rounded bg-primary-container text-on-primary flex items-center justify-center hover:bg-secondary hover:text-on-secondary transition-colors" href="#"><FaLinkedin size={18} /></a><a aria-label="Instagram" className="w-8 h-8 rounded bg-primary-container text-on-primary flex items-center justify-center hover:bg-secondary hover:text-on-secondary transition-colors" href="#"><FaInstagram size={18} /></a></div></div></div><div className="py-space-md flex flex-wrap items-center justify-between gap-space-md border-b border-primary-container/30"><div className="flex flex-wrap items-center gap-space-md"><div className="flex items-center gap-2 px-3 py-1.5 rounded bg-primary-container/60 border border-primary-container"><span className="material-symbols-outlined text-secondary text-[20px]">military_tech</span><span className="text-body-sm font-label-md text-primary-fixed">FBISE Islamabad (Affiliated Inst. Code: 0741)</span></div><div className="flex items-center gap-2 px-3 py-1.5 rounded bg-primary-container/60 border border-primary-container"><span className="material-symbols-outlined text-secondary text-[20px]">health_and_safety</span><span className="text-body-sm font-label-md text-primary-fixed">Safari Hospital Clinical Training Partner</span></div></div><div className="text-body-sm text-primary-fixed-dim"><span className="text-secondary font-semibold">National Excellence</span> in Secondary &amp; Higher Secondary Education</div></div><div className="pt-space-md flex flex-col sm:flex-row items-center justify-between gap-space-sm text-body-sm text-primary-fixed-dim/80"><p>© 2026 Dr. A.Q. Khan School &amp; College Safari-1, Bahria Town Islamabad. All Rights Reserved.</p><div className="flex gap-space-md text-[12px]"><a className="hover:text-on-primary transition-colors" data-path="privacy-policy" href="#">Privacy Policy</a><a className="hover:text-on-primary transition-colors" data-path="terms-of-admission" href="#">Terms of Admission</a><a className="hover:text-on-primary transition-colors" data-path="sitemap" href="#">Institutional Sitemap</a></div></div></div></footer>
    </>
  );
}
