function About() {
  return (
    <div>
      <p className="section-subtitle">About</p>
      <h2 className="section-title">Who I am</h2>

      <div className="about-grid-two">
        {/* LEFT: IMAGE */}
        <div className="about-image-wrapper">
          <img src="/profile.jpg" alt="Nour Mamdouh" className="about-image" />
        </div>

        {/* RIGHT: TEXT */}
        <div className="about-text">
          <p className="section-description">
            I am a third-year Information Technology student at New Cairo
            Technological University, passionate about turning ideas into real
            digital products. My work spans frontend engineering, UI/UX design,
            and building full stack apps with .NET and SQL Server.
          </p>

          <p className="section-description" style={{ marginTop: 10 }}>
            I enjoy working on systems that solve real problems: medical
            management, CRM tools, and assistive technologies. I care about both
            the user experience and clean engineering behind the scenes.
          </p>

          <div className="about-badges">
            <span className="badge">3rd-year IT @ NCTU</span>
            <span className="badge">Frontend Developer</span>
            <span className="badge">Full Stack in progress (.NET)</span>
            <span className="badge">DEPI Data Science Trainee</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
