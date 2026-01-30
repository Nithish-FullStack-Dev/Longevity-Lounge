const BehindTheScenes = () => {
  return (
    <section id="gallery" className="behind-scenes-section">
      <div className="container">
        <div
          className="bs-header"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-easing="ease-out"
          data-aos-once="true"
        >
          <h2>Behind the Scenes Inside Longevity Lounge</h2>
          <p>
            Step into a sanctuary of precision and elegance, where science meets
            serenity, creating a timeless space for proactive, personalized
            health journeys.
          </p>
        </div>

        <div className="bs-gallery">
          <div
            className="bs-col bs-col-large"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-easing="ease-out"
            data-aos-once="true"
          >
            <img src="assets/images/behing-the-scenes/1.webp" />
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-easing="ease-out"
            data-aos-once="true"
            className="bs-col bs-col-split"
          >
            <img src="/assets/images/behing-the-scenes/2.webp" />
            <img src="/assets/images/behing-the-scenes/3.webp" />
          </div>

          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-easing="ease-out"
            data-aos-once="true"
            className="bs-col bs-col-large"
          >
            <img src="/assets/images/behing-the-scenes/4.webp" />
          </div>

          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-easing="ease-out"
            data-aos-once="true"
            className="bs-col bs-col-split reverse"
          >
            <img src="/assets/images/behing-the-scenes/6.webp" />
            <img src="/assets/images/behing-the-scenes/5.webp" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BehindTheScenes;
