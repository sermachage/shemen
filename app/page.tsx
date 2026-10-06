"use client";
import Link from "next/link";
import { FC, useState, useEffect } from "react";

const Home: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [feedback, setFeedback] = useState("");

  useEffect(() => {
    document.body.style.backgroundImage = "url('bgnow.jpeg')";
    return () => {
      document.body.style.backgroundImage = "";
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email }),
      });

      if (res.ok) {
        setFeedback("You’re on the A‑list. We’ll hit you up soon! 🎉");
        setName("");
        setEmail("");
      } else {
        throw new Error("Network boo‑boo");
      }
    } catch {
      setFeedback("Uh oh, something went sideways. Try again?");
    }
  };

  return (
    <div className="container">
      <header>
        <div className="navbar">
          <div className="logo">
            <Link href="/">
              <img src="primarylogo.png" alt="Logo" className="logo-image" />
            </Link>
          </div>

          <div className="hamburger-menu" onClick={toggleMenu}>
            <div className={`hamburger-icon ${isMenuOpen ? "open" : ""}`}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>

          <nav className={isMenuOpen ? "active" : ""}>
            <Link href="/about" onClick={() => setIsMenuOpen(false)}>
              ABOUT
            </Link>
            <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
              CONTACT
            </Link>
          </nav>
        </div>
      </header>

      <main>
        <div className="content">
          <h1>COMING SOON</h1>
          <p className="subtitle">We are currently working on our website</p>
          <p className="subtitle subtitle-last">
            Be the first to know when we go live
          </p>

          <form className="form" onSubmit={handleSubmit}>
            <div className="input-group">
              <input
                type="text"
                placeholder="Your Name"
                value={name}
                required
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="email"
                placeholder="Your Email"
                value={email}
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <button type="submit" className="sign-up">
              JOIN WAITLIST
            </button>
          </form>

          {feedback && <p className="mt-4 text-sm italic">{feedback}</p>}
        </div>
      </main>

      <footer>
        <div className="social-icons">
          <Link
            href="https://www.linkedin.com/company/shemen-edge-consultancy/"
            className="social-icon"
          >
            <LinkedInIcon />
            <span className="sr-only">LinkedIn</span>
          </Link>
          <Link href="https://x.com/shemenedge" className="social-icon">
            <XIcon />
            <span className="sr-only">X (Twitter)</span>
          </Link>
          <Link
            href="https://www.instagram.com/shemen_edge/"
            className="social-icon"
          >
            <InstagramIcon />
            <span className="sr-only">Instagram</span>
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default Home;

// Icons
const LinkedInIcon: FC = () => (
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

const XIcon: FC = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const InstagramIcon: FC = () => (
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
