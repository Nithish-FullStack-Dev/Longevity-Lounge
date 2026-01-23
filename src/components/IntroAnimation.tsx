import React, { useLayoutEffect, useRef, useState, useEffect } from "react";
import gsap from "gsap";
import "./intro.css";

interface IntroAnimationProps {
  onComplete?: () => void;
}

const IntroAnimation: React.FC<IntroAnimationProps> = ({ onComplete }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const logoWrapperRef = useRef<HTMLDivElement>(null);
  const revealLayerRef = useRef<HTMLDivElement>(null);

  const [isAnimating, setIsAnimating] = useState(true);
  const [shouldRender, setShouldRender] = useState(false);

  // Asset Refs
  const frameRef = useRef<HTMLImageElement>(null);
  const leftRef = useRef<HTMLImageElement>(null);
  const rightRef = useRef<HTMLImageElement>(null);
  const diamondRef = useRef<HTMLImageElement>(null);
  const crownRef = useRef<HTMLImageElement>(null);

  const leftShineRef = useRef<HTMLDivElement>(null);
  const rightShineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only show intro if user hasn't seen it in this session
    const hasSeenIntro = sessionStorage.getItem("hasSeenIntro");
    if (hasSeenIntro) {
      if (onComplete) onComplete();
      return;
    }

    sessionStorage.setItem("hasSeenIntro", "true");
    setShouldRender(true);
  }, [onComplete]);

  useLayoutEffect(() => {
    if (!shouldRender || !containerRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          setIsAnimating(false);
        },
      });

      // === Logo entrance animation ===
      tl.fromTo(
        leftRef.current,
        { x: -500, y: 700, opacity: 0, rotate: 269, width: "100%" },
        {
          rotate: 360,
          opacity: 1,
          x: 0,
          width: "22%",
          y: 0,
          duration: 5,
          ease: "power4.out",
        },
      )
        .fromTo(
          rightRef.current,
          { x: -500, y: -700, width: "100%", opacity: 0, rotate: 296 },
          {
            rotate: 360,
            opacity: 1,
            x: 0,
            width: "22%",
            y: 0,
            duration: 5,
            ease: "power4.out",
          },
          "<",
        )
        .from(
          frameRef.current,
          {
            scale: 1.5,
            opacity: 0,
            rotate: -45,
            width: "150%",
            duration: 3,
            ease: "power4.out",
          },
          "<+=2",
        )
        .from(
          diamondRef.current,
          { opacity: 0, y: -20, duration: 3, ease: "power4.out" },
          "<+=2",
        )
        .from(
          crownRef.current,
          { opacity: 0, y: -20, duration: 3, ease: "power4.out" },
          "<+=1",
        );

      tl.to(
        [leftShineRef.current, rightShineRef.current],
        { opacity: 1, duration: 0.05 },
        "+=0.4",
      )
        .to([leftShineRef.current, rightShineRef.current], {
          backgroundPositionX: "200%",
          duration: 0.8,
          ease: "power2.out",
        })
        .to([leftShineRef.current, rightShineRef.current], {
          opacity: 0,
          duration: 0.15,
        });

      // === Diagonal gradient reveal (soft fade at edges) ===
      tl.fromTo(
        revealLayerRef.current,
        {
          clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)", // start hidden
          opacity: 0.9, // strong in the middle
        },
        {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", // fully revealed
          opacity: 0.9,
          duration: 2.2,
          ease: "power3.inOut",
          onComplete: () => {
            setShouldRender(false); // remove intro after reveal
            if (onComplete) onComplete();
          },
        },
        "+=0.6", // small delay after shine
      );
    }, containerRef);

    return () => ctx.revert();
  }, [shouldRender, onComplete]);

  if (!shouldRender) return null;

  return (
    <div
      ref={containerRef}
      className="intro-container"
      style={{
        position: "fixed",
        inset: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: "#1c0d24",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 9999,
        overflow: "hidden",
      }}
    >
      {/* Diagonal reveal layer with gradient that fades at edges */}
      <div
        ref={revealLayerRef}
        style={{
          position: "absolute",
          inset: 0,
          background: `linear-gradient(
            135deg,
            rgba(28,13,36,0.1) 0%,
            #1c0d24 20%,
            #2a1540 50%,
            #3b1e5a 80%,
            rgba(59,30,90,0.1) 100%
          )`,
          clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",
          zIndex: 20,
          pointerEvents: "none",
        }}
      />

      {/* Logo assembly */}
      <div
        ref={logoWrapperRef}
        style={{
          position: "relative",
          width: "325px",
          height: "325px",
          perspective: "1200px",
          transformStyle: "preserve-3d",
          zIndex: 15,
        }}
      >
        {/* FRAME */}
        <img
          ref={frameRef}
          src="/assets/images/intro/frame1.svg"
          alt="Frame"
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            objectFit: "contain",
            zIndex: 10,
          }}
        />

        {/* LEFT L */}
        <div
          ref={leftRef}
          className={`absolute top-[13%] left-[28%] w-[22%] ${isAnimating ? "glow-on" : "glow-off"}`}
          style={{
            transformStyle: "preserve-3d",
            backfaceVisibility: "hidden",
          }}
        >
          <img
            src="/assets/images/intro/left.svg"
            className="absolute inset-0 w-full glow-bloom"
            alt=""
          />
          <img
            src="/assets/images/intro/left.svg"
            className="absolute inset-0 w-full glow-core"
            alt=""
          />
          <div
            ref={leftShineRef}
            className="shine-mask-left"
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(120deg, transparent 45%, rgba(255,255,255,0.95) 50%, transparent 55%)",
              backgroundSize: "200% 200%",
              backgroundPosition: "0% 50%",
              mixBlendMode: "screen",
              opacity: 0,
            }}
          />
          <img
            src="/assets/images/intro/left.svg"
            className="relative w-full"
            alt="Left"
          />
        </div>

        {/* RIGHT L */}
        <div
          ref={rightRef}
          className={`absolute top-[13%] right-[28%] w-[22%] ${isAnimating ? "glow-on" : "glow-off"}`}
          style={{
            transformStyle: "preserve-3d",
            backfaceVisibility: "hidden",
          }}
        >
          <img
            src="/assets/images/intro/right.svg"
            className="absolute inset-0 w-full glow-bloom"
            alt=""
          />
          <img
            src="/assets/images/intro/right.svg"
            className="absolute inset-0 w-full glow-core"
            alt=""
          />
          <div
            ref={rightShineRef}
            className="shine-layer shine-mask-right"
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(120deg, transparent 45%, rgba(255,255,255,0.95) 50%, transparent 55%)",
              backgroundSize: "200% 200%",
              backgroundPosition: "0% 50%",
              mixBlendMode: "screen",
              opacity: 0,
            }}
          />
          <img
            src="/assets/images/intro/right.svg"
            className="relative w-full"
            alt="Right"
          />
        </div>

        {/* DIAMOND */}
        <img
          ref={diamondRef}
          src="/assets/images/intro/diamond.svg"
          alt="Diamond"
          style={{
            position: "absolute",
            top: "8%",
            left: "50%",
            transform: "translateX(-50%)",
            width: "9%",
            objectFit: "contain",
            zIndex: 25,
          }}
        />

        {/* CROWN */}
        <img
          ref={crownRef}
          src="/assets/images/intro/crown.svg"
          alt="Crown"
          style={{
            position: "absolute",
            top: "-9%",
            left: "50%",
            transform: "translateX(-50%)",
            width: "24%",
            objectFit: "contain",
            zIndex: 30,
          }}
        />
      </div>
    </div>
  );
};

export default IntroAnimation;
