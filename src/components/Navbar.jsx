import { motion } from "framer-motion";

function Navbar() {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header className="navbar">
      <div className="navbar-inner">
        <div className="nav-logo" onClick={() => scrollToSection("hero")}>
          <motion.div
            className="nav-logo-mark"
            animate={{
              rotate: 360,
              borderRadius: ["20%", "50%", "20%"]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{
              width: "32px",
              height: "32px",
              background: "linear-gradient(135deg, #38bdf8, #6366f1)",
              border: "none",
              boxShadow: "0 0 15px rgba(56, 189, 248, 0.4)"
            }}
          />
          <div className="nav-logo-text">
            <span>Nour Mamdouh</span>
            <span>Developer · UI/UX</span>
          </div>
        </div>

        <nav className="nav-links">
          <button className="nav-link" onClick={() => scrollToSection("about")}>
            About
          </button>
          <button className="nav-link" onClick={() => scrollToSection("skills")}>
            Skills
          </button>
          <button
            className="nav-link"
            onClick={() => scrollToSection("projects")}
          >
            Projects
          </button>
          <button
            className="nav-link"
            onClick={() => scrollToSection("experience")}
          >
            Experience
          </button>
          <button
            className="nav-link"
            onClick={() => scrollToSection("contact")}
          >
            Contact
          </button>
          <a
            href="/Nour_Mamdoh-cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="nav-cta">View CV</button>
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
