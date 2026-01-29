import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CallBack from "./components/CallBack";
import ScrollToTop from "./helpers/ScrollToTop";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./components/intro.css";
import IntroAnimation from "./components/IntroAnimation";

const App = () => {
  const [showIntro, setShowIntro] = useState(() => {
    return !sessionStorage.getItem("played");
  });

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out-cubic",
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <>
      {showIntro && <IntroAnimation onFinish={() => setShowIntro(false)} />}

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
    </>
  );
};

export default App;
