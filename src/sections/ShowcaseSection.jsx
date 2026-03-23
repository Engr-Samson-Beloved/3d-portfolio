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
        duration: 0.5,
        onComplete: () => {
          setCurrentIndex((prev) => (prev + 1) % images.length);
          gsap.to(imageRef.current, {
            opacity: 1,
            duration: 0.5,
          });
        },
      });
    }, 4000);

    return () => clearInterval(interval);
  }, [images]);

  return (
    <div className="image-wrapper overflow-hidden">
      <img
        ref={imageRef}
        src={images[currentIndex]}
        alt={title}
        className="w-full h-full object-cover transition-all duration-500"
      />
      {images.length > 1 && (
        <div className="absolute bottom-2 right-2 flex gap-1">
          {images.map((_, i) => (
            <div
              key={i}
              className={`size-2 rounded-full ${
                i === currentIndex ? "bg-white" : "bg-white/30"
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
    // Animation for the main section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    // Animations for each app showcase
    projectRefs.current.forEach((card, index) => {
      if (!card) return;
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.2 * index,
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
  }, []);

  const openProject = (url) => {
    window.open(url, '_blank');
  };

  return (
    <div id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full max-w-7xl mx-auto">
        <div className="mb-12 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">My Recent Work</h1>
            <p className="text-white-50 text-lg md:text-xl max-w-2xl mx-auto">
                Discover my latest projects, from educational platforms to smart home automation solutions.
            </p>
        </div>
        
        <div className="space-y-20">
          {/* Main Project (First one) */}
          {projects.length > 0 && (
            <div 
              ref={(el) => (projectRefs.current[0] = el)} 
              className="first-project-wrapper bg-black-100 rounded-3xl overflow-hidden border border-black-50 p-6 md:p-10"
            >
              <div className="flex flex-col lg:flex-row gap-10">
                <div className="lg:w-2/3 h-[400px] md:h-[600px] relative rounded-2xl overflow-hidden">
                  <ProjectImage images={projects[0].images} title={projects[0].title} />
                </div>
                <div className="lg:w-1/3 flex flex-col justify-center space-y-6">
                  <div className="space-y-3">
                    <h2 className="text-3xl md:text-5xl font-bold text-white">
                      {projects[0].title}
                    </h2>
                    <p className="text-white-50 text-lg leading-relaxed">
                      {projects[0].description}
                    </p>
                  </div>
                  <button 
                    onClick={() => openProject(projects[0].url)}
                    className="w-full md:w-fit px-8 py-3 bg-white text-black font-semibold rounded-full hover:bg-white-50 transition-all duration-300 transform hover:scale-105"
                  >
                    View Case Study
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Grid for other projects */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.slice(1).map((project, index) => (
              <div 
                key={project.title}
                ref={(el) => (projectRefs.current[index + 1] = el)}
                className="project group bg-black-100 rounded-3xl border border-black-50 flex flex-col h-full overflow-hidden"
              >
                <div className="h-64 relative">
                  <ProjectImage images={project.images} title={project.title} />
                </div>
                <div className="p-6 flex flex-col flex-1 justify-between gap-6">
                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold text-white group-hover:text-blue-500 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-white-50 line-clamp-3 text-base">
                      {project.description}
                    </p>
                  </div>
                  <button 
                    onClick={() => openProject(project.url)}
                    className="w-full px-6 py-2.5 border border-white/20 text-white rounded-full hover:bg-white hover:text-black transition-all duration-300"
                  >
                    View Project
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowcaseSection;