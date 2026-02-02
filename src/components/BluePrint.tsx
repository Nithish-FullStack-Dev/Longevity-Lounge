import "aos/dist/aos.css";
import { useMediaQuery } from "react-responsive";

const BluePrint = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <section className="blueprint-section">
      <div className="container">
        <div
          className="bp-header"
          data-aos="fade-up"
          data-aos-duration="900"
          data-aos-easing="ease-out"
        >
          <h2>Your Blueprint to Better Living</h2>
          <p>
            Follow our proven four step process to unlock your genetic potential
            and build a healthier, more vibrant future.
          </p>
        </div>

        <div className="bp-grid">
          <div
            className="bp-card"
            data-aos="fade-up"
            data-aos-duration="900"
            data-aos-delay="100"
            data-aos-easing="ease-out"
          >
            <div className="bp-image">
              <img
                src="../assets/images/your-blueprint/1.jpg"
                alt="Decode Your Blueprint"
              />
            </div>
            <div className="bp-content">
              <h3>Decode Your Blueprint</h3>
              <p>Unlock your DNA to discover personalized paths to wellness.</p>
            </div>
          </div>

          <div
            className="bp-card"
            data-aos={isMobile ? "fade-up" : "fade-down"}
            data-aos-duration="900"
            data-aos-delay="300"
            data-aos-easing="ease-out"
          >
            <div className="bp-content even">
              <h3>Hear Your Body</h3>
              <p>
                Translate subtle signals into meaningful actions for better
                health.
              </p>
            </div>
            <div className="bp-image">
              <img
                src="../assets/images/your-blueprint/2.jpg"
                alt="Hear Your Body"
              />
            </div>
          </div>

          <div
            className="bp-card"
            data-aos="fade-up"
            data-aos-duration="900"
            data-aos-delay="500"
            data-aos-easing="ease-out"
          >
            <div className="bp-image">
              <img
                src="../assets/images/your-blueprint/3.jpg"
                alt="Choose Prevention"
              />
            </div>
            <div className="bp-content">
              <h3>Choose Prevention</h3>
              <p>
                Act today to protect tomorrow and live with lasting vitality.
              </p>
            </div>
          </div>

          <div
            className="bp-card"
            data-aos={isMobile ? "fade-up" : "fade-down"}
            data-aos-duration="900"
            data-aos-delay="700"
            data-aos-easing="ease-out"
          >
            <div className="bp-content even">
              <h3>Own Your Future</h3>
              <p>
                Shape your health journey with confidence, clarity, and purpose.
              </p>
            </div>
            <div className="bp-image">
              <img
                src="../assets/images/your-blueprint/4.jpg"
                alt="Own Your Future"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BluePrint;
