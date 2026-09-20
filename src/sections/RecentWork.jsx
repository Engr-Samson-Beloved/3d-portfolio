import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import TitleHeader from "../components/TitleHeader";
import { recentWork } from "../constants";

const RecentWork = ({ isActive = true }) => {
  useGSAP(() => {
    if (!isActive) return;

    gsap.fromTo(
      ".recent-work-card",
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, stagger: 0.08, ease: "power2.out" }
    );
  }, [isActive]);

  return (
    <section id="recent-work" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="Recent Engineering & Product Work"
          sub="🛠️ Selected Recent Work"
        />
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4 mt-8">
          {recentWork.map((item) => (
            <div
              key={item.title}
              className="recent-work-card card-border rounded-lg p-5 flex flex-col gap-2 hover:border-white/30 transition-colors duration-500"
            >
              <div>
                <p className="text-blue-50 text-[11px] uppercase tracking-wide font-semibold mb-1">
                  {item.category}
                </p>
                <h3 className="text-white text-lg font-semibold">{item.title}</h3>
              </div>
              <p className="text-white-50 text-sm leading-relaxed line-clamp-2 flex-1">
                {item.description}
              </p>
              <div className="flex flex-wrap gap-1.5 pt-1">
                {item.tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] px-2.5 py-1 rounded-full bg-black-200 text-white-50 border border-black-50"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentWork;
