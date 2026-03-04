import { motion } from "framer-motion";

function Skills() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={staggerContainer}
    >
      <motion.p variants={fadeInUp} className="section-subtitle">Skills</motion.p>
      <motion.h2 variants={fadeInUp} className="section-title">What I work with</motion.h2>
      <motion.p variants={fadeInUp} className="section-description">
        A mix of frontend frameworks, backend technologies, and design tools I
        currently use or actively learn.
      </motion.p>

      <motion.div variants={staggerContainer} className="skills-grid">
        <motion.div variants={fadeInUp} className="card">
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
        </motion.div>

        <motion.div variants={fadeInUp} className="card">
          <div className="skills-group-title">Backend · Databases</div>
          <div className="skills-tags">
            <span className="skill-tag">.NET (learning)</span>
            <span className="skill-tag">ASP.NET Core</span>
            <span className="skill-tag">REST APIs</span>
            <span className="skill-tag">SQL Server</span>
            <span className="skill-tag">Authentication / JWT</span>
          </div>
        </motion.div>

        <motion.div variants={fadeInUp} className="card">
          <div className="skills-group-title">Design · Product</div>
          <div className="skills-tags">
            <span className="skill-tag">UI/UX Design</span>
            <span className="skill-tag">Figma</span>
            <span className="skill-tag">Wireframing</span>
            <span className="skill-tag">Prototyping</span>
            <span className="skill-tag">Accessibility</span>
          </div>
        </motion.div>

        <motion.div variants={fadeInUp} className="card">
          <div className="skills-group-title">Collaboration</div>
          <div className="skills-tags">
            <span className="skill-tag">Git &amp; GitHub</span>
            <span className="skill-tag">Teamwork</span>
            <span className="skill-tag">Communication</span>
            <span className="skill-tag">Public speaking</span>
            <span className="skill-tag">Time management</span>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default Skills;
