import { useRef, useState, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { projects } from "../constants";

gsap.registerPlugin(ScrollTrigger);

const ProjectImage = ({ images, title }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const imageRef = useRef(null);

  useEffect(() => {
    if (images.length <= 1) return;

    const interval = setInterval(() => {
      gsap.to(imageRef.current, {
        opacity: 0,
        scale: 1.05,
        duration: 0.6,
        ease: "power2.inOut",
        onComplete: () => {
          setCurrentIndex((prev) => (prev + 1) % images.length);
          gsap.fromTo(
            imageRef.current,
            { opacity: 0, scale: 1.1 },
            { opacity: 1, scale: 1, duration: 0.6, ease: "power2.out" }
          );
        },
      });
    }, 5000);

    return () => clearInterval(interval);
  }, [images]);

  return (
    <div className="relative group w-full h-full overflow-hidden rounded-2xl">
      <img
        ref={imageRef}
        src={images[currentIndex]}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      {images.length > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {images.map((_, i) => (
            <div
              key={i}
              className={`h-1 rounded-full transition-all duration-300 ${
                i === currentIndex ? "w-8 bg-white" : "w-2 bg-white/40"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

const ShowcaseSection = () => {
  const sectionRef = useRef(null);
  const projectRefs = useRef([]);

  useGSAP(() => {
    gsap.fromTo(
        sectionRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 1.5 }
    );

    projectRefs.current.forEach((card, index) => {
      if (!card) return;
      gsap.fromTo(
        card,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.2 * index,
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=80",
          },
        }
      );
    });
  }, []);

  const openProject = (url) => {
    window.open(url, '_blank');
  };

  return (
    <section id="work" ref={sectionRef} className="app-showcase py-16 md:py-36 bg-black">
      <div className="max-w-7xl mx-auto px-5 md:px-12">
        <div className="mb-12 md:mb-20 text-center space-y-4">
            <h2 className="text-4xl md:text-7xl font-bold tracking-tight text-white px-2">
                Featured <span className="text-blue-500">Projects</span>
            </h2>
            <p className="text-white-50 text-lg md:text-2xl max-w-3xl mx-auto font-light px-4">
                Crafting digital experiences with precision and passion.
            </p>
        </div>
        
        <div className="space-y-12 md:space-y-24">
          {/* Main Project Card */}
          {projects.length > 0 && (
            <div 
              ref={(el) => (projectRefs.current[0] = el)} 
              className="relative overflow-hidden rounded-[2rem] md:rounded-[2.5rem] bg-black-100 border border-white/10 p-5 md:p-12 group hover:border-white/20 transition-all duration-500"
            >
              <div className="grid lg:grid-cols-5 gap-8 md:gap-12 items-center">
                <div className="lg:col-span-3 aspect-[12/10] md:aspect-[16/9] w-full shadow-2xl shadow-blue-500/10 rounded-2xl overflow-hidden">
                  <ProjectImage images={projects[0].images} title={projects[0].title} />
                </div>
                <div className="lg:col-span-2 space-y-6 md:space-y-8 py-2 md:py-0">
                  <div className="space-y-3 md:space-y-4 text-center lg:text-left">
                    <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
                        {projects[0].title}
                    </h2>
                    <p className="text-white-50 text-base md:text-xl leading-relaxed font-light">
                        {projects[0].description}
                    </p>
                  </div>
                  <div className="flex justify-center lg:justify-start">
                    <button 
                        onClick={() => openProject(projects[0].url)}
                        className="group/btn relative w-full md:w-fit px-8 py-4 bg-white text-black font-bold rounded-2xl overflow-hidden transition-transform active:scale-95 text-center"
                    >
                        <span className="relative z-10 flex items-center justify-center gap-2">
                            View Website
                            <img src="/images/arrow-right.svg" className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" alt="arrow" />
                        </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Secondary Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-10">
            {projects.slice(1).map((project, index) => (
              <div 
                key={project.title}
                ref={(el) => (projectRefs.current[index + 1] = el)}
                className="group flex flex-col bg-black-100 rounded-[2rem] border border-white/10 overflow-hidden hover:border-white/20 shadow-xl transition-all duration-500 md:hover:-translate-y-2"
              >
                <div className="aspect-[16/10] relative overflow-hidden">
                  <ProjectImage images={project.images} title={project.title} />
                </div>
                <div className="p-6 md:p-10 flex flex-col flex-1 justify-between gap-6 md:gap-8">
                    <div className="space-y-3 md:space-y-4">
                        <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-blue-400 transition-colors">
                            {project.title}
                        </h3>
                        <p className="text-white-50 text-base md:text-lg line-clamp-3 leading-relaxed font-light">
                            {project.description}
                        </p>
                    </div>
                    <button 
                        onClick={() => openProject(project.url)}
                        className="flex items-center gap-3 text-base md:text-lg font-semibold text-white group/link"
                    >
                        Learn more
                        <div className="w-8 md:w-10 h-[1px] bg-white/20 transition-all group-hover/link:w-16 group-hover/link:bg-blue-400" />
                    </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection;