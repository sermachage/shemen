"use client";
import Link from "next/link";
import { FormEvent, useEffect, useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [feedback, setFeedback] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    // Apply background image to the body element
    document.body.style.backgroundImage = "url('bgnow.jpeg')";

    // Clean up on unmount
    return () => {
      document.body.style.backgroundImage = "";
    };
  }, []);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setFeedback("");

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      if (!response.ok) {
        throw new Error("Contact form submission failed");
      }

      setFeedback("Thanks for reaching out. We’ll get back to you soon!");
      setName("");
      setEmail("");
      setMessage("");
    } catch {
      setFeedback("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fullpage-container">
      <Link href="/" className="back-button">
        <BackIcon />
        <span>Back to Home</span>
      </Link>
      <div className="contact-card fullpage-card">
        <div className="contact-info">
          <h2>Contact Us</h2>

          <div className="info-item">
            <LocationIcon />
            <div>
              <p>Le Mac Building, Church Rd</p>
            </div>
          </div>

          <div className="info-item">
            <EmailIcon />
            <p>info@darasanihub.com</p>
          </div>

          <div className="info-item">
            <PhoneIcon />
            <p>+254 707800048</p>
          </div>

          <div className="contact-social">
            <Link
              href="https://www.instagram.com/darasanihub/"
              className="social-icon-light"
            >
              <InstagramIcon />
            </Link>
            <Link href="https://x.com/darasanihub" className="social-icon-light">
              <XIcon />
            </Link>
            <Link
              href="https://www.linkedin.com/company/darasanihub"
              className="social-icon-light"
            >
              <LinkedInIcon />
            </Link>
          </div>
        </div>

        <div className="contact-form">
          <h2>Get in Touch</h2>
          <p className="subtitle-small">Feel free to drop us a line below!</p>

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Your name"
              className="form-input"
              value={name}
              required
              onChange={(event) => setName(event.target.value)}
            />
            <input
              type="email"
              placeholder="Your email"
              className="form-input"
              value={email}
              required
              onChange={(event) => setEmail(event.target.value)}
            />
            <textarea
              placeholder="Type your message here..."
              className="form-textarea"
              value={message}
              required
              onChange={(event) => setMessage(event.target.value)}
            />
            <button type="submit" className="send-button" disabled={isSubmitting}>
              {isSubmitting ? "SENDING..." : "SEND"}
            </button>
          </form>
          {feedback && <p className="mt-4 text-sm italic">{feedback}</p>}
        </div>
      </div>
    </div>
  );
}

// Icons
function LocationIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
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
