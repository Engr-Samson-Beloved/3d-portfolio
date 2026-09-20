import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import TitleHeader from "../components/TitleHeader";
import { whatISolve } from "../constants";

const WhatISolve = ({ isActive = true }) => {
  useGSAP(() => {
    if (!isActive) return;

    gsap.fromTo(
      ".solve-row",
      { y: 16, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, stagger: 0.08, ease: "power2.out" }
    );
  }, [isActive]);

  return (
    <section id="solve" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="How I Turn Problems Into Products"
          sub="🧩 What I Solve"
        />
        <div className="flex flex-col gap-3 mt-8 max-w-4xl mx-auto w-full">
          {whatISolve.map((item, index) => (
            <div
              key={index}
              className="solve-row card-border rounded-lg px-5 py-3.5 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4"
            >
              <p className="text-white-50 text-sm sm:text-base flex-1">
                {item.problem}
              </p>
              <div className="hidden sm:block w-8 h-[1px] bg-white/20 shrink-0" />
              <p className="text-white text-sm sm:text-base font-medium flex-1">
                {item.solution}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatISolve;
