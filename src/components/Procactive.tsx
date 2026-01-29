"use client";

import "aos/dist/aos.css";
import { SparklesCore } from "./ui/sparkles";

const SparkleGradient = ({ position }: { position: "top" | "bottom" }) => {
  const isBottom = position === "bottom";

  return (
    <div
      className={`absolute left-1/2 -translate-x-1/2 ${
        isBottom ? "bottom-0 scale-y-[-1]" : "top-0"
      } w-[40rem] h-40 pointer-events-none opacity-90`}
    >
      {/* Gradients */}
      <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
      <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />

      <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
      <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

      {/* Sparkles */}
      <SparklesCore
        background="transparent"
        minSize={0.4}
        maxSize={1}
        particleDensity={1200}
        className="w-full h-full"
        particleColor="#FFFFFF"
      />

      {/* Radial mask */}
      <div className="absolute inset-0 bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]" />
    </div>
  );
};

const Procactive = () => {
  return (
    <section className="relative proactive-section overflow-hidden">
      {/* TOP sparkle */}
      <SparkleGradient position="top" />

      {/* BOTTOM sparkle (reversed) */}
      <SparkleGradient position="bottom" />

      {/* CONTENT */}
      <div className="container relative z-10">
        <div
          className="ps-header"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-easing="ease-out"
          data-aos-once="true"
        >
          <h2>Why Proactive Healthcare Matters</h2>
          <p>
            Comprehensive genetic-based health services designed to prevent,
            protect, and optimize your well-being.
          </p>
        </div>

        <div className="ps-grid">
          {[
            "Early Detection Saves Lives Identifying risks before symptoms appear allows interventions when they’re most effective.",
            "Personalized Prevention Your genetics reveal unique vulnerabilities, enabling strategies designed specifically for you.",
            "Long-Term Wellness Focusing on prevention preserves vitality, energy, and quality of life over decades.",
            "Cost and Stress Reduction Avoiding severe illness reduces medical costs, hospitalizations, and emotional burden.",
            "Empowered Decision-Making Knowledge of your health blueprint allows confident, informed lifestyle and treatment choices.",
            "Shifts Mindset from Reactive to Proactive Taking control of your health creates a sense of mastery and security.",
          ].map((text, i) => (
            <div
              key={i}
              className="ps-item"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay={100 * (i + 1)}
              data-aos-easing="ease-out"
            >
              <span className="ps-number">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h4>{text}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Procactive;
