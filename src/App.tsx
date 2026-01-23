import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CallBack from "./components/CallBack";
import ScrollToTop from "./helpers/ScrollToTop";
import { useEffect, useState } from "react";
import AOS from "aos";
import IntroAnimation from "./components/IntroAnimation";
import "aos/dist/aos.css";
import "./components/intro.css";

const App = () => {
  const [showMainContent, setShowMainContent] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out-cubic",
      once: true,
      offset: 100,
    });
  }, []);

  const handleIntroComplete = () => {
    // Slight delay so the reveal finishes beautifully before main content appears
    setTimeout(() => {
      setShowMainContent(true);
    }, 300);
  };

  return (
    <>
      <IntroAnimation onComplete={handleIntroComplete} />

      {/* Main content - revealed after intro */}
      <div
        style={{
          opacity: showMainContent ? 1 : 0,
          transition: "opacity 0.8s ease-in-out",
          pointerEvents: showMainContent ? "auto" : "none",
          position: "relative",
          zIndex: 1,
        }}
      >
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/callback" element={<CallBack />} />
        </Routes>
        <Footer />
        <div className="copyright">
          <p>© Copyright 2025 - Longevity Lounge All Rights Reserved.</p>
        </div>
      </div>
    </>
  );
};

export default App;
