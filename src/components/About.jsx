import { motion } from "framer-motion";

function About() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={staggerContainer}
    >
      <motion.p variants={fadeInUp} className="section-subtitle">About</motion.p>
      <motion.h2 variants={fadeInUp} className="section-title">Who I am</motion.h2>

      <div className="about-grid-two">
        {/* LEFT: IMAGE */}
        <motion.div variants={fadeInUp} className="about-image-wrapper">
          <img src="/profile.jpg" alt="Nour Mamdouh" className="about-image" />
        </motion.div>

        {/* RIGHT: TEXT */}
        <motion.div variants={staggerContainer} className="about-text">
          <motion.p variants={fadeInUp} className="section-description">
            I am a third-year Information Technology student at New Cairo
            Technological University, passionate about turning ideas into real
            digital products. My work spans frontend engineering, UI/UX design,
            and building full stack apps with .NET and SQL Server.
          </motion.p>

          <motion.p variants={fadeInUp} className="section-description" style={{ marginTop: 10 }}>
            I enjoy working on systems that solve real problems: medical
            management, CRM tools, and assistive technologies. I care about both
            the user experience and clean engineering behind the scenes.
          </motion.p>

          <motion.div variants={fadeInUp} className="about-badges">
            <span className="badge">3rd-year IT @ NCTU</span>
            <span className="badge">Frontend Developer</span>
            <span className="badge">Full Stack in progress (.NET)</span>
            <span className="badge">DEPI Data Science Trainee</span>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default About;
