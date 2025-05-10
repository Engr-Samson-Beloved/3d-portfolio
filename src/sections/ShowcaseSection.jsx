import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
  const sectionRef = useRef(null);
  const rydeRef = useRef(null);
  const libraryRef = useRef(null);
  const ycDirectoryRef = useRef(null);
  const SMC = useRef(null);
  const AICHAT = useRef(null);

  useGSAP(() => {
    // Animation for the main section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    // Animations for each app showcase
    const cards = [rydeRef.current, libraryRef.current, ycDirectoryRef.current, SMC.current, AICHAT.current];

    cards.forEach((card, index) => {
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
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
  }, []);

  // Function to open project in a new window/tab
  const openProject = (url) => {
    window.open(url, '_blank');
  };

  return (
    <div id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          <div ref={rydeRef} className="first-project-wrapper">
            <div className="image-wrapper">
              <img src="/images/project1.png" alt="Ryde App Interface" />
            </div>
            <div className="text-content">
              <h2>
                Overview Of My Recent Project In Development Environment
              </h2>
              <p className="text-white-50 md:text-xl">
                An app built with NextJs Capacitor, Expo, & TailwindCSS for a fast,
                user-friendly experience.
              </p>
              <button 
                onClick={() => openProject('/projects/ryde')}
                className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
              >
                View Project
              </button>
            </div>
          </div>

          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={libraryRef}>
              <div className="image-wrapper bg-[#FFEFDB]">
                <img
                  src="/images/project2.png"
                  alt="Library Management Platform"
                />
              </div>
              <div className="flex justify-between items-center w-full">
                <h2>The Thrive Africa</h2>
                <button 
                  onClick={() => openProject('/projects/thrive-africa')}
                  className="px-4 py-1 bg-blue-500 text-white text-sm rounded-md hover:bg-blue-600 transition-colors"
                >
                  View
                </button>
              </div>
            </div>

            <div className="project" ref={ycDirectoryRef}>
              <div className="image-wrapper bg-[#FFE7EB]">
                <img src="/images/project3.png" alt="YC Directory App" />
              </div>
              <div className="flex justify-between items-center w-full">
                <h2>YC Directory - A Startup Showcase App</h2>
                <button 
                  onClick={() => openProject('/projects/yc-directory')}
                  className="px-4 py-1 bg-blue-500 text-white text-sm rounded-md hover:bg-blue-600 transition-colors"
                >
                  View
                </button>
              </div>
            </div>
          </div>
          
          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={SMC}>
              <div className="image-wrapper bg-[#FFEFDB]">
                <img
                  src="/images/project2.png"
                  alt="Library Management Platform"
                />
              </div>
              <div className="flex justify-between items-center w-full">
                <h2>Student MailChat</h2>
                <button 
                  onClick={() => openProject('/projects/student-mailchat')}
                  className="px-4 py-1 bg-blue-500 text-white text-sm rounded-md hover:bg-blue-600 transition-colors"
                >
                  View
                </button>
              </div>
            </div>

            <div className="project" ref={AICHAT}>
              <div className="image-wrapper bg-[#FFE7EB]">
                <img src="/images/aichat.png" alt="YC Directory App" />
              </div>
              <div className="flex justify-between items-center w-full">
                <h2>AI Chat Application</h2>
                <button 
                  onClick={() => openProject('/projects/ai-chat')}
                  className="px-4 py-1 bg-blue-500 text-white text-sm rounded-md hover:bg-blue-600 transition-colors"
                >
                  View
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppShowcase;