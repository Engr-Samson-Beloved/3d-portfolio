import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import { expCards } from "../constants";
import TitleHeader from "../components/TitleHeader";
import GlowCard from "../components/GlowCard";

const Experience = ({ isActive = true }) => {
  useGSAP(() => {
    if (!isActive) return;

    gsap.fromTo(
      ".exp-card",
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, stagger: 0.15, ease: "power2.out" }
    );
  }, [isActive]);

  return (
    <section id="experience" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="Professional Work Experience"
          sub="💼 My Career Overview"
        />
        <div className="grid md:grid-cols-3 gap-6 mt-10 w-full">
          {expCards.map((card) => (
            <div key={card.title} className="exp-card flex flex-col gap-4">
              <GlowCard card={card}>
                <img src={card.imgPath} alt="exp" className="rounded-lg" />
              </GlowCard>

              <div className="flex items-center gap-3">
                <img
                  src={card.logoPath}
                  alt="logo"
                  className="size-10 rounded-full border border-black-50 bg-black-100 shrink-0"
                />
                <div>
                  <h3 className="font-semibold text-lg text-white">{card.title}</h3>
                  <p className="text-white-50 text-xs">🗓️ {card.date}</p>
                </div>
              </div>

              <ul className="list-disc ms-4 flex flex-col gap-1.5 text-white-50 text-sm">
                {card.responsibilities.map((responsibility, index) => (
                  <li key={index}>{responsibility}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
