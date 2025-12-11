function Navbar() {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header className="navbar">
      <div className="navbar-inner">
        <div className="nav-logo" onClick={() => scrollToSection("hero")}>
          <div className="nav-logo-mark" />
          <div className="nav-logo-text">
            <span>Nour Mamdouh</span>
            <span>Full Stack in progress · Frontend · UI/UX</span>
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
            href="/public/Nour_MamdohCV.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="nav-cta">Download CV</button>
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
