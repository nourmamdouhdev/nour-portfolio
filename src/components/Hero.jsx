function Hero() {
  return (
    <div className="hero-grid">
      <div>
        <div className="hero-badge">
          <span className="hero-badge-dot" />
          <span>Available for internships & freelance</span>
        </div>
        <h1 className="hero-title">
          Building <span>usable</span> and <span>scalable</span> web products.
        </h1>
        <p className="hero-subtitle">
          I am a 3rd-year Information Technology student focusing on Frontend,
          Full Stack (.NET + Angular/React), and UI/UX, with hands-on
          experience shipping real-world projects and currently exploring Data
          Science at DEPI.
        </p>

        <div className="hero-meta">
          <div className="hero-meta-column">
            <span>Current focus</span>
            <span>Full Stack .NET · Angular · React</span>
          </div>
          <div className="hero-meta-column">
            <span>Location</span>
            <span>Giza, Egypt</span>
          </div>
        </div>

        <div className="hero-actions">
          <a href="#projects" className="btn-primary">
            View selected projects
          </a>
          <a
            href="https://www.linkedin.com/in/nour-mamdouh/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            LinkedIn profile
          </a>
        </div>

        <p className="hero-tagline">
          Currently learning <span>.NET / ASP.NET Core</span> and{" "}
          <span>Data Science</span> while growing my frontend craft.
        </p>
      </div>

      <div className="hero-right">
        <div className="hero-orbit">
          <div className="hero-avatar" />
          <div className="hero-pill top-left">
            <strong>Frontend</strong> · React &amp; Angular
          </div>
          <div className="hero-pill top-right">
            UI/UX · <strong>Figma</strong>
          </div>
          <div className="hero-pill bottom">
            Aspiring <strong>Full Stack Developer</strong>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
