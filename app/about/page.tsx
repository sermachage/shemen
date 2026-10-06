"use client";
import Link from "next/link";
import { useEffect } from "react";

export default function About() {
  useEffect(() => {
    // Apply background image to the body element
    document.body.style.backgroundImage = "url('bgnow.jpeg')";

    // Clean up on unmount
    return () => {
      document.body.style.backgroundImage = "";
    };
  }, []);

  return (
    <div className="fullpage-container">
      {/* Back to Home button moved outside the card to the top left */}
      <Link href="/" className="back-button">
        <BackIcon />
        <span>Back to Home</span>
      </Link>

      <div className="contact-card fullpage-card">
        <div className="contact-info">
          <h2>Our Services</h2>

          <div className="about-text">
            <p>PROFFESION LEARNING</p>
            <p>
​Whether you are looking for live in-person training, remote professional development, or job-embedded support, we will customize a plan to meet your needs.  
            </p>
            
            <p>Individualized Student Supports</p>
            <p>
We offer a range of supports to ensure that students with disabilities are making the progress they deserve and are capable of achieving.  
            </p>
             <p>DEVELOPMENT</p>
            <p>
              We support systems in analyzing their current programming, providing  recommendations for improvement, and offering implementation support. 
            </p>
            <p>RESOURCES</p>
            <p>
              Connections to evidence-based resources that support the inclusion of individuals with disabilities in all walks of life.
            </p>
          </div>

          <div className="about-values">
            <h3>Why Choose Us</h3>
            <ul>
              <li>
                <CheckIcon />
                <span>Tailored Solutions</span>
              </li>
              <li>
                <CheckIcon />
                <span>Global Perspective</span>
              </li>
              <li>
                <CheckIcon />
                <span>Expert Team</span>
              </li>
              <li>
                <CheckIcon />
                <span>Proven Impact</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="contact-form about-content">
          <h2>About Us</h2>
          <p className="subtitle-small">Learn more about us & our mission</p>

          <div className="about-story">
            <p>
              Shemen Edge Consultancy is a dynamic firm dedicated to delivering
              strategic solutions in business development, legal services, risk
              management, and training.
            </p>

            <p>
              Our mission is to empower organizations—ranging from startups to
              NGOs and corporates —with tailored strategies and expert guidance
              that drive growth and efficiency
            </p>

            <p>
              With a global perspective and a commitment to excellence, we
              provide integrated services that address the unique challenges
              faced by our clients
            </p>

            <p>
              Our bespoke training and facilitation programs are designed to
              unlock potential and foster success. At Shemen Edge Consultancy,
              we blend innovation with practical expertise to help you achieve
              your goals and navigate complex landscapes with confidence
            </p>

            <div className="contact-link">
              <Link href="/contact">
                Get in touch with us
                <ArrowRightIcon />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Icons
function CheckIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function ArrowRightIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className="arrow-icon"
    >
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

function BackIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <line x1="19" y1="12" x2="5" y2="12" />
      <polyline points="12 19 5 12 12 5" />
    </svg>
  );
}
