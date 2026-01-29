import { useEffect, useRef } from "react";
import gsap from "gsap";

interface IntroAnimationProps {
  onFinish: () => void;
}

const IntroAnimation = ({ onFinish }: IntroAnimationProps) => {
  const wrapper = useRef(null);
  const video = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const vid = video.current;

    if (!vid) return;
    vid.muted = true;
    vid.play().catch(() => {});

    vid.onended = () => {
      gsap.to(wrapper.current, {
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        onComplete: () => {
          document.body.style.overflow = "auto";
          sessionStorage.setItem("played", "intro");
          onFinish();
        },
      });
    };

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [onFinish]);

  return (
    <div ref={wrapper} className="intro-wrapper">
      <video
        ref={video}
        autoPlay
        muted
        playsInline
        preload="auto"
        className="intro-video"
      >
        <source src="/assets/images/intro/intro.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default IntroAnimation;
