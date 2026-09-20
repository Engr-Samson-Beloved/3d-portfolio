import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import TitleHeader from "../components/TitleHeader";
import { whatISolve } from "../constants";

gsap.registerPlugin(ScrollTrigger);

const WhatISolve = () => {
  useGSAP(() => {
    gsap.utils.toArray(".solve-card").forEach((card) => {
      gsap.fromTo(
        card,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
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
    <section id="what-i-solve" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="How I Turn Problems Into Products"
          sub="🧩 What I Solve"
        />
        <div className="grid md:grid-cols-2 gap-6 mt-16">
          {whatISolve.map((item, index) => (
            <div
              key={index}
              className="solve-card card-border rounded-xl p-8 flex flex-col gap-4"
            >
              <p className="text-blue-50 text-sm uppercase tracking-wide font-semibold">
                Problem
              </p>
              <p className="text-white-50 text-lg">{item.problem}</p>
              <div className="w-10 h-[2px] bg-white/20" />
              <p className="text-blue-50 text-sm uppercase tracking-wide font-semibold">
                Solution I Provide
              </p>
              <p className="text-white text-lg font-medium">{item.solution}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatISolve;
