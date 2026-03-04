import { motion } from "framer-motion";
import { Mail, Linkedin, Github } from "lucide-react";

function Contact() {
  const contacts = [
    {
      label: "Email",
      value: "nourmamdouh54@gmail.com",
      link: "mailto:nourmamdouh54@gmail.com",
      icon: Mail,
    },
    {
      label: "LinkedIn",
      value: "linkedin.com/in/nour-mamdouh",
      link: "https://www.linkedin.com/in/nour-mamdouh/",
      icon: Linkedin,
    },
    {
      label: "GitHub",
      value: "github.com/nourmamdouhdev",
      link: "https://github.com/nourmamdouhdev",
      icon: Github,
    },
  ];

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
      <motion.p variants={fadeInUp} className="section-subtitle">Contact</motion.p>
      <motion.h2 variants={fadeInUp} className="section-title">Get in Touch</motion.h2>
      <motion.p variants={fadeInUp} className="section-description" style={{ maxWidth: 500 }}>
        Feel free to reach out for collaboration, opportunities, or questions.
        I reply quickly on email and LinkedIn.
      </motion.p>

      <motion.div variants={staggerContainer} className="contact-icons-container">
        {contacts.map((c) => {
          const Icon = c.icon;
          return (
            <motion.a
              variants={fadeInUp}
              key={c.label}
              href={c.link}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-icon-card"
            >
              <div className="contact-icon" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Icon size={20} strokeWidth={1.5} color="var(--accent)" />
              </div>
              <div className="contact-icon-text">
                <span className="contact-label">{c.label}</span>
                <span className="contact-value">{c.value}</span>
              </div>
            </motion.a>
          );
        })}
      </motion.div>
    </motion.div>
  );
}

export default Contact;
