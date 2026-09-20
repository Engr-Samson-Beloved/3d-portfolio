import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import TitleHeader from "../components/TitleHeader";
import TechIconCardExperience from "../components/models/tech_logos/TechIconCardExperience";
import { techStackIcons, engineeringToolbox } from "../constants";

const TechStack = ({ isActive = true }) => {
  useGSAP(() => {
    if (!isActive) return;

    gsap.fromTo(
      ".tech-card",
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.7, ease: "power2.out", stagger: 0.12 }
    );
  }, [isActive]);

  return (
    <div id="skills" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="How I Can Contribute & My Key Skills"
          sub="🤝 What I Bring to the Table"
        />
        <div className="tech-grid">
          {techStackIcons.map((techStackIcon) => (
            <div
              key={techStackIcon.name}
              className="card-border tech-card overflow-hidden group xl:rounded-full rounded-lg"
            >
              <div className="tech-card-animated-bg" />
              <div className="tech-card-content">
                <div className="tech-icon-wrapper">
                  {isActive ? (
                    <TechIconCardExperience model={techStackIcon} />
                  ) : (
                    <div className="w-full h-full" />
                  )}
                </div>
                <div className="padding-x w-full">
                  <p>{techStackIcon.name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14">
          <p className="text-center text-blue-50 uppercase tracking-wide text-sm font-semibold mb-6">
            Full Engineering Toolbox
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            {engineeringToolbox.map(({ category, skills }) => (
              <div
                key={category}
                className="card-border rounded-lg p-4 flex flex-col gap-2.5"
              >
                <p className="text-white font-semibold text-sm">{category}</p>
                <div className="flex flex-wrap gap-1.5">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-[11px] px-2.5 py-1 rounded-full bg-black-200 text-white-50 border border-black-50"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechStack;
