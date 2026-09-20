import { useRef, useState, useEffect } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { projects } from "../constants";
import TitleHeader from "../components/TitleHeader";

const ProjectImage = ({ images, title }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const imageRef = useRef(null);

  useEffect(() => {
    setCurrentIndex(0);
  }, [images]);

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

const ShowcaseSection = ({ isActive = true }) => {
  const cardRef = useRef(null);
  const [index, setIndex] = useState(0);
  const project = projects[index];

  const goTo = (nextIndex) => {
    const clamped = (nextIndex + projects.length) % projects.length;
    setIndex(clamped);
  };

  useGSAP(() => {
    if (!isActive) return;
    gsap.fromTo(
      cardRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.7, ease: "power2.out" }
    );
  }, [isActive]);

  useGSAP(() => {
    gsap.fromTo(
      cardRef.current,
      { opacity: 0.4 },
      { opacity: 1, duration: 0.4, ease: "power1.out" }
    );
  }, [index]);

  const openProject = (url) => {
    window.open(url, "_blank");
  };

  return (
    <section id="work" className="flex-center section-padding w-full">
      <div className="w-full h-full md:px-10 px-5 max-w-6xl mx-auto">
        <TitleHeader title="Featured Work" sub="🚀 Client Projects" />

        <div
          ref={cardRef}
          className="mt-10 relative overflow-hidden rounded-[2rem] bg-black-100 border border-white/10 p-5 md:p-10"
        >
          <div className="grid lg:grid-cols-5 gap-6 md:gap-10 items-center">
            <div className="lg:col-span-3 aspect-[16/10] w-full shadow-2xl shadow-blue-500/10 rounded-2xl overflow-hidden">
              <ProjectImage images={project.images} title={project.title} />
            </div>
            <div className="lg:col-span-2 space-y-4 py-2 md:py-0">
              <div className="space-y-2 text-center lg:text-left">
                <h3 className="text-2xl md:text-4xl font-bold text-white leading-tight">
                  {project.title}
                </h3>
                <p className="text-white-50 text-sm md:text-base leading-relaxed font-light line-clamp-4">
                  {project.description}
                </p>
              </div>
              <div className="flex justify-center lg:justify-start">
                <button
                  onClick={() => openProject(project.url)}
                  className="group/btn relative w-full md:w-fit px-6 py-3 bg-white text-black font-bold rounded-2xl overflow-hidden transition-transform active:scale-95 text-center text-sm md:text-base"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    View Website
                    <img
                      src="/images/arrow-right.svg"
                      className="w-4 h-4 transition-transform group-hover/btn:translate-x-1"
                      alt="arrow"
                    />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Carousel controls: cycle through all projects */}
        <div className="flex items-center justify-center gap-4 mt-6">
          <button
            type="button"
            aria-label="Previous project"
            onClick={() => goTo(index - 1)}
            className="flex-center size-9 rounded-full card-border text-white-50 hover:text-white transition-colors"
          >
            ‹
          </button>
          <div className="flex gap-2">
            {projects.map((p, i) => (
              <button
                key={p.title}
                type="button"
                aria-label={`Show ${p.title}`}
                onClick={() => goTo(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === index ? "w-8 bg-white" : "w-2 bg-white/30 hover:bg-white/50"
                }`}
              />
            ))}
          </div>
          <button
            type="button"
            aria-label="Next project"
            onClick={() => goTo(index + 1)}
            className="flex-center size-9 rounded-full card-border text-white-50 hover:text-white transition-colors"
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection;
