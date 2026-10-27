import { motion, useReducedMotion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import SectionHeading from "./SectionHeading";
import LiveText from "./LiveText";
import { enterTransition, hiddenState, spring } from "../lib/motion";

function StackIcon({ size = 22 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 2 2 7l10 5 10-5-10-5z" />
      <path d="M2 17l10 5 10-5" />
      <path d="M2 12l10 5 10-5" />
    </svg>
  );
}

function CheckIcon({ size = 22 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="M8 12.5 11 15l5-5.5" />
    </svg>
  );
}

function DeskIcon({ size = 22 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="4" width="18" height="12" rx="2" />
      <path d="M8 20h8M12 16v4" />
    </svg>
  );
}

const CONTACTS = [
  {
    label: "Email",
    value: "nourmamdouh54@gmail.com",
    href: "mailto:nourmamdouh54@gmail.com",
    icon: Mail,
  },
  {
    label: "LinkedIn",
    value: "nour-mamdouh",
    href: "https://www.linkedin.com/in/nour-mamdouh/",
    icon: Linkedin,
  },
  {
    label: "GitHub",
    value: "nourmamdouhdev",
    href: "https://github.com/nourmamdouhdev",
    icon: Github,
  },
  {
    label: "Nafezly",
    value: "nourmamdouh",
    href: "https://nafezly.com/u/nourmamdouh",
    icon: StackIcon,
  },
  {
    label: "Khamsat",
    value: "nour_mamdouh1",
    href: "https://khamsat.com/user/nour_mamdouh1",
    icon: CheckIcon,
  },
  {
    label: "Mostaql",
    value: "NourMamdouh13",
    href: "https://mostaql.com/u/NourMamdouh13",
    icon: DeskIcon,
  },
];

function Contact() {
  const reduce = useReducedMotion();

  return (
    <div>
      <SectionHeading kicker="// contact()" title="Tell me what you’re building">
        Email and LinkedIn are the fastest. Freelance profiles are there if you
        already work that way.
      </SectionHeading>

      <div className="contact-grid">
        {CONTACTS.map((item, index) => {
          const Icon = item.icon;
          const external = item.href.startsWith("http");
          return (
            <motion.a
              key={item.label}
              href={item.href}
              className="card contact-card"
              target={external ? "_blank" : undefined}
              rel={external ? "noopener noreferrer" : undefined}
              initial={hiddenState(reduce)}
              animate={{ opacity: 1, y: 0 }}
              whileTap={{ scale: 0.97 }}
              transition={{
                ...enterTransition(reduce, reduce ? 0 : index * 0.04),
                scale: spring.tap,
              }}
            >
              <span className="contact-icon">
                <Icon size={22} strokeWidth={1.5} aria-hidden="true" />
              </span>
              <span>
                <span className="contact-label"><LiveText text={item.label} /></span>
                <span className="contact-value"><LiveText text={item.value} /></span>
              </span>
            </motion.a>
          );
        })}
      </div>
    </div>
  );
}

export default Contact;
