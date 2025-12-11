function Experience() {
  return (
    <div>
      <p className="section-subtitle">Experience</p>
      <h2 className="section-title">Where I’ve been</h2>

      <div className="timeline">
        <div className="timeline-item card">
          <div>
            <div className="timeline-role">Frontend Developer Intern</div>
            <div className="timeline-company">Prospera Systems · Egypt</div>
            <div className="timeline-period">Jul 2024 – Aug 2024</div>
          </div>
          <div className="timeline-body">
            <p>
              Worked closely with senior developers and designers on real web
              projects. Built and styled responsive layouts using HTML, CSS, and
              JavaScript, and supported testing and optimization of frontend
              code while receiving mentorship on best practices.
            </p>
          </div>
        </div>

        <div className="timeline-item card">
          <div>
            <div className="timeline-role">Instructor</div>
            <div className="timeline-company">KidZania Egypt</div>
            <div className="timeline-period">Jun 2025 – Sep 2025</div>
          </div>
          <div className="timeline-body">
            <p>
              Developed strong communication, public speaking, and teamwork
              skills while working with children and staff. Improved adaptability,
              time management, and decision-making in a dynamic environment.
            </p>
          </div>
        </div>

        <div className="timeline-item card">
          <div>
            <div className="timeline-role">Data Science Trainee</div>
            <div className="timeline-company">DEPI (Digital Egypt Pioneers)</div>
            <div className="timeline-period">Ongoing</div>
          </div>
          <div className="timeline-body">
            <p>
              Exploring data science foundations and tools, learning how to
              reason about data and integrate data-driven thinking into the web
              applications I build.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
