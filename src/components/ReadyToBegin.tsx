import type React from "react";
import { StarButton } from "./ui/star-button";

const ReadyToBegin = () => {
  return (
    <section id="contact" className="health-journey-section">
      <div className="container">
        <h2 className="hj-title">
          Ready to Begin? Begin Your Personalized Health Journey
        </h2>

        <div className="hj-container">
          <div className="hj-left">
            <img
              src="../assets/images/ready-to-begin/Image.webp"
              alt="Doctor Consultation"
            />
          </div>

          <div className="hj-right">
            <form className="hj-form">
              <div className="hj-grid">
                <div className="hj-field">
                  <label>Full Name</label>
                  <input type="text" placeholder="Your Name" />
                </div>

                <div className="hj-field">
                  <label>Email Address</label>
                  <input type="email" placeholder="yourmail@example.com" />
                </div>

                <div className="hj-field">
                  <label>Phone Number</label>
                  <input type="tel" placeholder="Your Phone Number" />
                </div>

                <div className="hj-field">
                  <label>Choose Service</label>
                  <div className="select-wrapper">
                    <select className="custom-select">
                      <option disabled selected>
                        Select Department
                      </option>
                      <option>Find Your Biological Age</option>
                      <option>Heart Risk Mapping</option>
                      <option>Neuro Genetic Forecasting</option>
                      <option>Predict 77 Cancers</option>
                      <option>Gastro Health Forecast</option>
                      <option>Metabolic Risk Profiling</option>
                      <option>Fertility Future Clarity</option>
                      <option>Kids Wellness Prediction</option>
                      <option>Beauty Genetic Blueprint</option>
                    </select>
                  </div>
                </div>
                <div className="hj-field submit">
                  <button
                    type="submit"
                    onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                      e.preventDefault();
                      alert("form is currently under development");
                    }}
                  >
                    <StarButton
                      lightColor="#F6BF7F"
                      backgroundColor="black"
                      borderWidth={1}
                      className="
                            bg-transparent
                            border border-white/25
                            px-7 py-3
                            rounded-full
                            pointer-events-none
                    
                            [&_span]:text-[#f6bf7f]
                            [&_span]:bg-none
                            [&_span]:!text-opacity-100
                            [&_span]:font-['Inter',sans-serif]
                          "
                    >
                      Submit
                    </StarButton>
                  </button>
                </div>
              </div>
            </form>

            <div className="hj-pills">
              <div className="hj-pill">
                <i className="fa-solid fa-phone"></i>
                <div className="pill-detail">
                  <span>Call Us</span>
                  <p>+91 8977727771</p>
                </div>
              </div>

              <div className="hj-pill">
                <i className="fa-solid fa-envelope"></i>
                <div className="pill-detail">
                  <span>Email Us</span>
                  <p>info@longevitylounge.in</p>
                </div>
              </div>

              <div className="hj-pill">
                <i className="fa-solid fa-location-dot"></i>
                <div className="pill-detail">
                  <span>Visit Us</span>
                  <p>
                    10th floor CHR Lane, Rd Number 1, Seven Hills
                    Colony,Gachibowli, Hyderabad, Telangana 500032
                  </p>
                </div>
              </div>
            </div>

            <div className="hj-map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1903.2434572959498!2d78.36630128616939!3d17.4363939572859!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93dd08345e2b%3A0x9b22dc7cf864ca9c!2sLongevity%20Lounge!5e0!3m2!1sen!2sin!4v1768714166850!5m2!1sen!2sin"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReadyToBegin;
