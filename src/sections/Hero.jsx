import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import AnimatedCounter from "../components/AnimatedCounter";
import Button from "../components/Button";
import { words } from "../constants";

const Hero = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".hero-text h1",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.2, duration: 1, ease: "power2.inOut" }
    );
    
    gsap.fromTo(
      ".profile-container",
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, delay: 0.6 }
    );
    
    gsap.fromTo(
      ".resume-btn",
      { opacity: 0, scale: 0.9 },
      { opacity: 1, scale: 1, duration: 0.8, delay: 0.8 }
    );
  });

  const downloadResume = () => {
    // Create an anchor element to trigger download
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'SamixTech_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="hero" className="relative overflow-hidden pt-26">
      <div className="absolute top-0 left-0 z-10">
        <img src="/images/bg.png" alt="" />
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-5 md:px-10 py-12">
        {/* LEFT: Hero Content */}
        <div className="md:w-3/5 w-full">
          <div className="flex flex-col gap-7">
            <div className="hero-text">
              <h1>
                Shaping
                <span className="slide">
                  <span className="wrapper">
                    {words.map((word, index) => (
                      <span
                        key={index}
                        className="flex items-center md:gap-3 gap-1 pb-2"
                      >
                        <img
                          src={word.imgPath}
                          alt="person"
                          className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50"
                        />
                        <span>{word.text}</span>
                      </span>
                    ))}
                  </span>
                </span>
              </h1>
              <h1>into Real Projects</h1>
              <h1>that Deliver Results</h1>
            </div>

            {/* Mobile profile picture - only shows on small screens */}
            <div className="md:hidden flex justify-center mb-4">
              <div className="profile-container relative">
                {/* Mobile optimized profile - horizontal card */}
                <div className="relative rounded-xl overflow-hidden border-2 border-white/20 shadow-lg shadow-black/50 w-full flex">
                  <div className="w-1/3">
                    <img 
                      src="/images/profile.jpg" 
                      alt="Samson O" 
                      className="w-full h-full object-cover" 
                    />
                  </div>
                  
                  <div className="w-2/3 p-3 bg-black/40 backdrop-blur-sm flex flex-col justify-center">
                    <h3 className="text-white font-bold text-lg">Samson O.</h3>
                    <p className="text-white-50 text-sm">Fullstack Engineer</p>
                    <button 
                      onClick={downloadResume}
                      className="resume-btn flex items-center gap-1 mt-2 px-3 py-1 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-md border border-white/30 hover:border-white/50 hover:shadow-sm hover:shadow-purple-500/20 transition-all w-fit"
                      aria-label="Download Resume"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      <span className="text-white font-medium text-xs">Download CV</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-white-50 md:text-xl relative z-10">
              Hi, I'm SamixTech (Samson .O) — a passionate Software Engineer from Ondo, Nigeria.
              My journey started with a deep curiosity for tech and creativity, which 
              led me into Frontend Development, 
              then expanded into Fullstack Engineering, video editing, and design.
            </p>

            <div className="flex items-center gap-4 mt-2">
              <Button
                text="See My Work"
                className="md:w-60 md:h-14 w-48 h-12 relative overflow-hidden group"
                id="counter"
              >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-600/20 to-purple-600/20 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
              </Button>
              
              {/* Desktop Resume Button - hidden on mobile */}
              <button 
                onClick={downloadResume}
                className="resume-btn hidden md:flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm rounded-md border border-white/30 hover:border-white/50 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300"
                aria-label="Download Resume"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white group-hover:animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span className="text-white font-medium">Resume</span>
              </button>
            </div>
          </div>
        </div>

        {/* RIGHT: Profile Picture - only shows on desktop */}
        <div className="md:w-2/5 w-full hidden md:flex justify-center md:justify-end">
          <div className="profile-container relative">
            {/* Background elements for visual appeal */}
            <div className="absolute -z-10 -top-4 -left-4 w-64 h-64 rounded-full bg-gradient-to-r from-blue-500/30 to-purple-500/30 blur-xl"></div>
            <div className="absolute -z-10 -bottom-4 -right-4 w-40 h-40 rounded-full bg-gradient-to-r from-purple-500/30 to-pink-500/30 blur-lg"></div>
            
            {/* Image container with border effect */}
            <div className="relative rounded-2xl overflow-hidden border-2 border-white/20 shadow-xl shadow-black/50 w-72 h-96">
              <img 
                src="/images/profile.jpg" 
                alt="Samson O" 
                className="w-full h-full object-cover" 
              />
              
              {/* Overlay with gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              
              {/* Name badge at bottom */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                <h3 className="text-white font-bold text-xl">Samson O.</h3>
                <p className="text-white-50 text-sm">Fullstack Engineer</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <AnimatedCounter />
    </section>
  );
};

export default Hero;