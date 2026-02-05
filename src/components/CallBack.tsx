import { useNavigate } from "react-router-dom";

const CallBack = () => {
  const navigate = useNavigate();
  return (
    <div className="container">
      <div className="callback-content">
        <button onClick={() => navigate("/")} className="back-link">
          <img
            src="/assets/images/callbacks/left-arrow.png"
            alt=""
            height="9"
            width="6"
          />
          Back to home
        </button>

        <div className="title">
          <h1>Request An Appointment</h1>
        </div>
      </div>

      <form id="appointment-form" className="appointment-form">
        <div className="form-row">
          <div className="form-group">
            <label>Patient Name</label>
            <input type="text" name="patientName" placeholder=" " />
          </div>
          <div className="form-group">
            <label>Patient Contact</label>
            <input type="tel" name="patientContact" placeholder=" " />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Email ID</label>
            <input type="email" name="email" placeholder=" " />
          </div>
          <div className="form-group">
            <label>Select Specialty</label>
            <input type="text" name="specialty" placeholder=" " />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>City</label>
            <input type="text" name="city" placeholder=" " />
          </div>
          <div className="form-group">
            <label>Doctor</label>
            <input type="text" name="doctor" placeholder=" " />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Time</label>
            <input type="time" name="time" placeholder=" " />
          </div>
          <div className="form-group">
            <label>Date</label>
            <input type="date" name="date" placeholder=" " />
          </div>
        </div>

        <div className="form-group full-width">
          <label>Query</label>
          <textarea name="query" placeholder=" "></textarea>
        </div>

        <button type="submit" className="callback submit-btn">
          Submit
        </button>
      </form>

      <div className="bottom-options">
        <a href="#contact" className="option-card">
          <div className="icon">
            <img
              src="/assets/images/callbacks/schedule.svg"
              alt="Calendar Icon"
            />
          </div>
          <h3>Book an Appointment</h3>
          <p>+91 8977727771</p>
        </a>
        <a href="#appointment-form" className="option-card">
          <div className="icon">
            <img
              src="/assets/images/callbacks/health-check.svg"
              alt="Clipboard Icon"
            />
          </div>
          <h3>Book Health check</h3>
          <p>Assess your health</p>
        </a>
        <a
          href="https://maps.app.goo.gl/JukWxoQ3i1UXWWACA"
          target="_blank"
          className="option-card"
        >
          <div className="icon">
            <img
              src="/assets/images/callbacks/location.svg"
              alt="Location Icon"
            />
          </div>
          <h3>Find Hospital</h3>
          <p>Best near you</p>
        </a>
      </div>
    </div>
  );
};

export default CallBack;
