import { useEffect, useRef, useState } from "react";
import { LayoutGroup, motion, useReducedMotion } from "framer-motion";
import { spring } from "../lib/motion";

const LINKS = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

function Navbar() {
  const reduce = useReducedMotion();
  const linksRef = useRef(null);
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const update = () => {
      const marker = window.scrollY + Math.min(240, window.innerHeight * 0.3);
      let current = "hero";
      for (const item of LINKS) {
        const node = document.getElementById(item.id);
        if (node && node.offsetTop <= marker) current = item.id;
      }
      setActive(current);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  useEffect(() => {
    const scroller = linksRef.current;
    const current = scroller?.querySelector(".nav-link.is-active");
    if (!scroller || !current) return;
    const left = current.offsetLeft - (scroller.clientWidth - current.offsetWidth) / 2;
    scroller.scrollTo({ left: Math.max(0, left), behavior: reduce ? "auto" : "smooth" });
  }, [active, reduce]);

  const go = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
  };

  const links = (
    <LayoutGroup id="nav-bar">
      {LINKS.map((item) => {
        const on = active === item.id;
        return (
          <motion.button
            key={item.id}
            type="button"
            className={on ? "nav-link is-active" : "nav-link"}
            aria-current={on ? "true" : undefined}
            onClick={() => go(item.id)}
            whileTap={reduce ? undefined : { scale: 0.97 }}
            transition={spring.tap}
          >
            {on ? (
              <motion.span
                className="nav-active"
                layoutId={reduce ? undefined : "nav-active"}
                transition={reduce ? { duration: 0.2 } : spring.quick}
              />
            ) : null}
            {on ? <span className="nav-dot" aria-hidden="true" /> : null}
            <span className="nav-label">{item.label}</span>
          </motion.button>
        );
      })}
      <a className="nav-link" href="/Nour_Mamdoh-cv.pdf" target="_blank" rel="noopener noreferrer">
        <span className="nav-label">Resume</span>
      </a>
    </LayoutGroup>
  );

  return (
    <header className="nav">
      <div className="nav-pill">
        <nav ref={linksRef} className="nav-links" aria-label="Primary">{links}</nav>
      </div>
    </header>
  );
}

export default Navbar;
