import VideoSection from "./VideoSection";
import Established from "./Established";
import MostTrusted from "./MostTrusted";
import OurPhilosophy from "./OurPhilosophy";
import BluePrint from "./BluePrint";
import Procactive from "./Procactive";
import BehindTheScenes from "./BehindTheScenes";
import ReadyToBegin from "./ReadyToBegin";
import VideoGrid from "./VideoGrid";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    const target = location.state?.scrollTo;

    if (target) {
      setTimeout(() => {
        const el = document.getElementById(target);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, [location]);

  return (
    <>
      <VideoSection />
      <Established />
      <MostTrusted />
      <OurPhilosophy />
      <BluePrint />
      <Procactive />
      <VideoGrid />
      <BehindTheScenes />
      <ReadyToBegin />
    </>
  );
};

export default Home;
