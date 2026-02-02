import { useState } from "react";
import "aos/dist/aos.css";
import "./VideoGrid.css";

interface VideoItem {
  id: number;
  src: string;
  poster: string;
}

const videos: VideoItem[] = [
  {
    id: 1,
    src: "/assets/images/video-grid/Longevity Leadership.mp4",
    poster: "/assets/images/video-grid/1.jpeg",
  },
  {
    id: 2,
    src: "/assets/images/video-grid/Cancer & Longevity Script.mp4",
    poster: "/assets/images/video-grid/2.jpeg",
  },
  {
    id: 3,
    src: "/assets/images/video-grid/Ll Neuro Brochure Video.mp4",
    poster: "/assets/images/video-grid/3.jpeg",
  },
  {
    id: 4,
    src: "/assets/images/video-grid/Ll Heart Brochure Video.mp4",
    poster: "/assets/images/video-grid/4.jpeg",
  },
  {
    id: 5,
    src: "/assets/images/video-grid/Ll Fertility Brochure Vide.mp4",
    poster: "/assets/images/video-grid/5.jpeg",
  },
  {
    id: 6,
    src: "/assets/images/video-grid/Ll Kids Brochure Video.mp4",
    poster: "/assets/images/video-grid/6.jpeg",
  },
  {
    id: 7,
    src: "/assets/images/video-grid/Ll Gastrointestinal Brochur Video.mp4",
    poster: "/assets/images/video-grid/7.jpeg",
  },
  {
    id: 8,
    src: "/assets/images/video-grid/Ll Endocrinology Brochure Video.mp4",
    poster: "/assets/images/video-grid/8.jpeg",
  },
  {
    id: 9,
    src: "/assets/images/video-grid/Beauty Video Script.mp4",
    poster: "/assets/images/video-grid/9.jpeg",
  },
];

export default function VideoGrid() {
  const [activeVideo, setActiveVideo] = useState<VideoItem | null>(null);

  return (
    <section className="video-grid-section">
      <div className="container">
        <h2
          className="video-grid-title"
          data-aos="fade-up"
          data-aos-duration="900"
          data-aos-easing="ease-out"
        >
          Speciality Health Campaigns Longevity Lounge
        </h2>

        <div className="video-grid">
          {videos.map((video, index) => (
            <div
              key={video.id}
              className="video-card"
              onClick={() => setActiveVideo(video)}
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay={index * 100}
              data-aos-easing="ease-out"
              data-aos-once="true"
            >
              <img src={video.poster} alt="Video thumbnail" loading="lazy" />
              <div className="play-button" />
            </div>
          ))}
        </div>
      </div>

      {activeVideo && (
        <div className="video-modal" onClick={() => setActiveVideo(null)}>
          <div
            className="video-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="video-close"
              onClick={() => setActiveVideo(null)}
            >
              ✕
            </button>

            <video src={activeVideo.src} controls autoPlay playsInline />
          </div>
        </div>
      )}
    </section>
  );
}
