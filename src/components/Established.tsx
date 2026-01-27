"use client";

import "aos/dist/aos.css";

const Established = () => {
  const cards = [
    {
      img: "./assets/images/most-trusted/1.jpg",
      title: "Find Your\nBiological Age",
    },
    {
      img: "./assets/images/most-trusted/2.jpg",
      title: "Heart Risk\nMapping",
    },
    {
      img: "./assets/images/most-trusted/3.jpg",
      title: "Neuro Genetic\nForecasting",
    },
    {
      img: "./assets/images/most-trusted/4.jpg",
      title: "Predict 77\nCancers",
    },
    {
      img: "./assets/images/most-trusted/5.jpg",
      title: "Gastro Health\nForecast",
    },
    {
      img: "./assets/images/most-trusted/6.jpg",
      title: "Metabolic Risk\nProfiling",
    },
    {
      img: "./assets/images/most-trusted/7.jpg",
      title: "Fertility Future\nClarity",
    },
    {
      img: "./assets/images/most-trusted/8.jpg",
      title: "Kids Wellness\nPrediction",
    },
    {
      img: "./assets/images/most-trusted/9.jpg",
      title: "Beauty Genetic\nBlueprint",
    },
  ];

  return (
    <section id="services" className="established">
      <div className="container">
        <h2
          className="established-title"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          It is a long established fact that a reader will be distracted by the
          readable content of a page
        </h2>

        <div className="established-grid" aria-label="Health feature cards">
          {cards.map((card, index) => (
            <div key={index} className="hex-card-wrapper">
              <article
                className="hex-card"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay={index * 100}
              >
                <div className="hex-inner">
                  <img src={card.img} alt={card.title} />

                  <div className="hex-label">
                    <p>
                      {card.title.split("\n").map((line, i) => (
                        <span key={i}>
                          {line}
                          <br />
                        </span>
                      ))}
                    </p>
                  </div>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Established;
