import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import TitleHeader from "../components/TitleHeader";
import { recentWork } from "../constants";

gsap.registerPlugin(ScrollTrigger);

const RecentWork = () => {
  useGSAP(() => {
    gsap.utils.toArray(".recent-work-card").forEach((card, index) => {
      gsap.fromTo(
        card,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          delay: 0.1 * index,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=60",
          },
        }
      );
    });
  }, []);

  return (
    <section id="recent-work" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="Recent Engineering & Product Work"
          sub="🛠️ Selected Recent Work"
        />
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 mt-16">
          {recentWork.map((item) => (
            <div
              key={item.title}
              className="recent-work-card card-border rounded-xl p-8 flex flex-col gap-4 hover:border-white/30 transition-colors duration-500"
            >
              <div>
                <p className="text-blue-50 text-xs uppercase tracking-wide font-semibold mb-2">
                  {item.category}
                </p>
                <h3 className="text-white text-2xl font-semibold">{item.title}</h3>
              </div>
              <p className="text-white-50 text-base leading-relaxed flex-1">
                {item.description}
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1 rounded-full bg-black-200 text-white-50 border border-black-50"
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
