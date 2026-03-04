import { motion } from "framer-motion";

function Experience() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={staggerContainer}
    >
      <motion.p variants={fadeInUp} className="section-subtitle">Experience</motion.p>
      <motion.h2 variants={fadeInUp} className="section-title">Where I’ve been</motion.h2>

      <motion.div variants={staggerContainer} className="timeline">
        <motion.div variants={fadeInUp} className="timeline-item card">
          <div className="timeline-node"></div>
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
        </motion.div>

        <motion.div variants={fadeInUp} className="timeline-item card">
          <div className="timeline-node"></div>
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
        </motion.div>

        <motion.div variants={fadeInUp} className="timeline-item card">
          <div className="timeline-node"></div>
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
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default Experience;
