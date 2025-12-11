function Skills() {
  return (
    <div>
      <p className="section-subtitle">Skills</p>
      <h2 className="section-title">What I work with</h2>
      <p className="section-description">
        A mix of frontend frameworks, backend technologies, and design tools I
        currently use or actively learn.
      </p>

      <div className="skills-grid">
        <div className="card">
          <div className="skills-group-title">Frontend</div>
          <div className="skills-tags">
            <span className="skill-tag">React.js</span>
            <span className="skill-tag">Angular</span>
            <span className="skill-tag">TypeScript</span>
            <span className="skill-tag">JavaScript (ES6+)</span>
            <span className="skill-tag">HTML5</span>
            <span className="skill-tag">CSS3 / SCSS</span>
            <span className="skill-tag">Responsive Design</span>
          </div>
        </div>

        <div className="card">
          <div className="skills-group-title">Backend · Databases</div>
          <div className="skills-tags">
            <span className="skill-tag">.NET (learning)</span>
            <span className="skill-tag">ASP.NET Core</span>
            <span className="skill-tag">REST APIs</span>
            <span className="skill-tag">SQL Server</span>
            <span className="skill-tag">Authentication / JWT</span>
          </div>
        </div>

        <div className="card">
          <div className="skills-group-title">Design · Product</div>
          <div className="skills-tags">
            <span className="skill-tag">UI/UX Design</span>
            <span className="skill-tag">Figma</span>
            <span className="skill-tag">Wireframing</span>
            <span className="skill-tag">Prototyping</span>
            <span className="skill-tag">Accessibility</span>
          </div>
        </div>

        <div className="card">
          <div className="skills-group-title">Collaboration</div>
          <div className="skills-tags">
            <span className="skill-tag">Git &amp; GitHub</span>
            <span className="skill-tag">Teamwork</span>
            <span className="skill-tag">Communication</span>
            <span className="skill-tag">Public speaking</span>
            <span className="skill-tag">Time management</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
