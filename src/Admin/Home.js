import React from "react";
import "./AdminApp.css";

const Home = () => {
  return (
    <main className="home">
      <section className="intro">
        <div className="content">
          <h1>
            Transforming Healthcare with AI-Powered Insight: Elevate Patient
            Care to New Heights with HL-PS.
          </h1>
          <p style={{ textAlign: "left", padding: "20px" }}>
            Unlock the potential of AI in healthcare with HL-PS, the Human Loss
            Prevention System. Our cutting-edge platform combines advanced
            predictive analytics, personalized patient care, and real-time
            decision support to revolutionize the way hospitals manage and treat
            patients. With HL-PS, you're not just improving outcomes—you're
            redefining the future of healthcare, one patient at a time.
            Experience the difference of precision-driven care that saves lives
            and optimizes your healthcare delivery.
          </p>
          <button>Sign Up</button>
        </div>
        <div className="image-container">
          <img src="pic1.jpg" alt="Intro Image" />
        </div>
      </section>

      <section className="about">
        <div className="image-container">
          <img src="pic2.jpg" alt="About Us Image" />
        </div>
        <div className="content">
          <h1>About Us</h1>
          <p>
            At HL-PS, we are committed to revolutionizing healthcare through
            innovative AI solutions. Our Human Loss Prevention System is
            designed to empower hospitals and healthcare providers with
            cutting-edge tools for risk prediction, personalized patient care,
            and real-time decision support. With a deep understanding of the
            challenges in modern healthcare, we leverage advanced technology to
            reduce human loss and enhance patient outcomes. Our mission is to
            transform the way healthcare is delivered, making it smarter, safer,
            and more efficient for everyone involved.
          </p>
        </div>
      </section>

      <section className="services">
        <h2>Our Services</h2>
        <div className="cards">
          <div className="card cardio">
            <h2>AI-Driven Risk Prediction</h2>
            <p>
              Our state-of-the-art AI models analyze patient data to predict
              health risks early, enabling timely interventions and reducing the
              chances of complications.
            </p>
          </div>

          <div className="card respi">
            <h2>Personalized Patient Care</h2>
            <p>
              We offer tailored healthcare plans and reports based on individual
              patient needs, ensuring that every patient receives the most
              appropriate and effective care.
            </p>
          </div>

          <div className="card cancer">
            <h2>Real-Time Decision Support</h2>
            <p>
              Empower healthcare professionals with real-time insights and
              predictive analytics, helping them make informed decisions quickly
              and confidently during consultations.
            </p>
          </div>

          <div className="card kidney">
            <h2>Comprehensive Health Monitoring</h2>
            <p>
              Our system covers 20 risk domains and over 400 diseases, providing
              a holistic approach to patient health monitoring and management.
            </p>
          </div>

          <div className="card brain">
            <h2>Seamless Integration</h2>
            <p>
              HL-PS integrates smoothly with your hospital’s existing systems,
              making it easy to implement and start benefiting from our advanced
              AI capabilities right away.
            </p>
          </div>

          <div className="card real">
            <h2>Customizable Healthcare Packages</h2>
            <p>
              Through our Offer Model, hospitals can create personalized
              healthcare packages that cater to the specific needs and risks of
              each patient, enhancing the overall patient experience.
            </p>
          </div>
        </div>
      </section>

      <section className="contact">
        <div className="getintouch">
          <h1>Contact Us</h1>
          <p>
            We’d love to hear from you! Whether you have a question, need
            support, or want to give feedback, our team is here to help.
          </p>

          <p>Get in Touch</p>
          <p>
            <strong>Phone:</strong> +1 (123) 456-7890
          </p>
          <p>
            <strong>Email:</strong> support@yourwebsite.com
          </p>
          <p>
            <strong>Address:</strong> 123 Your Street, City, Country
          </p>
        </div>

        <div className="follow">
          <h2>Follow Us</h2>
          <p>
            <a href="https://facebook.com">Facebook</a> |
            <a href="https://twitter.com"> Twitter</a> |
            <a href="https://linkedin.com"> LinkedIn</a> |
            <a href="https://instagram.com"> Instagram</a>
          </p>
        </div>
      </section>
    </main>
  );
};

export default Home;
