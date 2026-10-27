import { useEffect, useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useReducedMotion } from "framer-motion";

const SECTIONS = [
  { id: "hero", label: "Intro" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Work" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

function SideRail() {
  const reduce = useReducedMotion();
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const update = () => {
      const marker = window.scrollY + Math.min(240, window.innerHeight * 0.3);
      let current = "hero";
      for (const item of SECTIONS) {
        const node = document.getElementById(item.id);
        if (node && node.offsetTop <= marker) current = item.id;
      }
      setActive(current);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  const index = Math.max(0, SECTIONS.findIndex((item) => item.id === active));

  const go = (next) => {
    const item = SECTIONS[next];
    if (!item) return;
    document.getElementById(item.id)?.scrollIntoView({
      behavior: reduce ? "auto" : "smooth",
      block: "start",
    });
  };

  return (
    <nav className="scroll-rail" aria-label="Sections">
      <button type="button" className="scroll-step" onClick={() => go(index - 1)} disabled={index === 0} aria-label="Previous section">
        <ChevronUp size={16} aria-hidden="true" />
      </button>
      <ol>
        {SECTIONS.map((item, itemIndex) => {
          const on = item.id === active;
          const num = String(itemIndex + 1).padStart(2, "0");
          return (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={on ? "is-active" : undefined}
                aria-current={on ? "true" : undefined}
                aria-label={`${num} ${item.label}`}
              >
                <span className="scroll-tag" aria-hidden="true">{num} {item.label}</span>
                <span className="scroll-dot" aria-hidden="true" />
              </a>
            </li>
          );
        })}
      </ol>
      <button
        type="button"
        className="scroll-step"
        onClick={() => go(index + 1)}
        disabled={index === SECTIONS.length - 1}
        aria-label="Next section"
      >
        <ChevronDown size={16} aria-hidden="true" />
      </button>
    </nav>
  );
}

export default SideRail;
