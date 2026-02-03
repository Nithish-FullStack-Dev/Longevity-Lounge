import { Microscope } from "lucide-react";
import { useEffect, useRef, useCallback } from "react";
import "aos/dist/aos.css";

const MostTrusted = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const isPlayingRef = useRef(false); // tracks whether video has actually started playing

  // Safely unmute: only after the video is confirmed playing
  const safeUnmute = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;

    // If video hasn't started yet, force a muted play first, then unmute on success
    if (video.paused || video.readyState < HTMLMediaElement.HAVE_ENOUGH_DATA) {
      video.muted = true;
      video
        .play()
        .then(() => {
          isPlayingRef.current = true;
          video.muted = false; // safe to unmute now — autoplay succeeded while muted
        })
        .catch(() => {
          // Autoplay blocked entirely; stay muted so video at least plays silently
          video.muted = true;
        });
    } else {
      // Already playing — just unmute
      video.muted = false;
    }
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // --- 1. Guarantee initial muted autoplay fires ---
    video.muted = true;
    video
      .play()
      .then(() => {
        isPlayingRef.current = true;
      })
      .catch(() => {
        // Autoplay blocked; video stays muted and paused — browser will allow
        // it once user interacts or scrolls (handled by observer below).
      });

    // --- 2. Listen for the native "playing" event as a reliable signal ---
    const onPlaying = () => {
      isPlayingRef.current = true;
    };
    video.addEventListener("playing", onPlaying);

    // --- 3. IntersectionObserver for mute/unmute on scroll ---
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            safeUnmute(); // unmute only when safe
          } else {
            if (video) video.muted = true; // mute when scrolled away
          }
        });
      },
      { threshold: 0.3 },
    );

    observer.observe(video);

    return () => {
      observer.disconnect();
      video.removeEventListener("playing", onPlaying);
    };
  }, [safeUnmute]);

  return (
    <section id="about" className="most-trusted-section">
      <div className="container">
        <div
          className="trusted-banner-wrap"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          <span className="line right-line"></span>

          <div className="trusted-banner">
            <span>Most Trusted Longevity Lounge in India</span>
          </div>

          <span className="line left-line"></span>
        </div>

        <div className="content-wrapper">
          <div className="phone-mockup">
            <div className="phone-container">
              <div className="phone-glow"></div>
              <img
                src="/assets/images/most-trusted/mobile1.png"
                alt="Phone Frame"
                className="phone-frame"
              />
              <video
                ref={videoRef}
                className="phone-video"
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                poster="/assets/images/video-poster.jpg"
              >
                <source
                  src="/assets/images/video/LL long video with audio low (1).mp4"
                  type="video/mp4"
                />
              </video>
            </div>
          </div>

          <div className="text-content">
            <div
              className="title"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="100"
            >
              <Microscope className="icon-highlight md:block hidden" />
              <h2 className="section-title">
                Expert Led Series Unlock the Power of Personalized Medicine
              </h2>
            </div>

            <div
              className="icon-series"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="300"
            >
              <p>
                Join our leading geneticists and wellness experts as they decode
                the complex relationships between your DNA, lifestyle, and
                longevity. Each episode reveals actionable insights to transform
                your health approach.
              </p>
            </div>

            <ul className="benefits-list">
              <li
                data-aos="fade-up"
                data-aos-duration="700"
                data-aos-delay="400"
              >
                <div className="list-disc">
                  <span className="disc"></span>
                  <div className="disc-content">
                    <h3>Genetic Risk Assessment</h3>
                    <p>
                      Understanding your predispositions before they become
                      problems
                    </p>
                  </div>
                </div>
              </li>
              <li
                data-aos="fade-up"
                data-aos-duration="700"
                data-aos-delay="500"
              >
                <div className="list-disc">
                  <span className="disc"></span>
                  <div className="disc-content">
                    <h3>Personalized Nutrition</h3>
                    <p>How your genes influence optimal dietary choices</p>
                  </div>
                </div>
              </li>
              <li
                data-aos="fade-up"
                data-aos-duration="700"
                data-aos-delay="600"
              >
                <div className="list-disc">
                  <span className="disc"></span>
                  <div className="disc-content">
                    <h3>Longevity Protocols</h3>
                    <p>Science-backed strategies for healthy aging</p>
                  </div>
                </div>
              </li>
            </ul>

            <div
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="700"
            >
              <a href="#" className="cta-button">
                <div className="cta-content">
                  <h4>Explore More</h4>
                  <img
                    src="/assets/images/most-trusted/right-arrow.png"
                    alt=""
                  />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MostTrusted;
