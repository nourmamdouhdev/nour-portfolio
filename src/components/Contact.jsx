import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Briefcase } from "lucide-react";

// Custom SVG icons for freelancing platforms
const NafezlyIcon = ({ size = 20, color = "var(--accent)" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2L2 7l10 5 10-5-10-5z" />
    <path d="M2 17l10 5 10-5" />
    <path d="M2 12l10 5 10-5" />
  </svg>
);

const KhamsatIcon = ({ size = 20, color = "var(--accent)" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <path d="M8 12l3 3 5-5" />
  </svg>
);

const MostaqlIcon = ({ size = 20, color = "var(--accent)" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
    <path d="M8 21h8" />
    <path d="M12 17v4" />
    <path d="M7 8h2m2 0h2m2 0h2" />
    <path d="M7 12h10" />
  </svg>
);

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
    {
      label: "Nafezly",
      value: "nafezly.com/nourmamdouh",
      link: "https://nafezly.com/u/nourmamdouh",
      icon: NafezlyIcon,
    },
    {
      label: "Khamsat",
      value: "khamsat.com/nourmamdouh",
      link: "https://khamsat.com/user/nour_mamdouh1",
      icon: KhamsatIcon,
    },
    {
      label: "Mostaql",
      value: "mostaql.com/nourmamdouh",
      link: "https://mostaql.com/u/NourMamdouh13",
      icon: MostaqlIcon,
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
