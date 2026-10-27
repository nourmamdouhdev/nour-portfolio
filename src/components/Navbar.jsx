import { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, LayoutGroup, motion, useReducedMotion } from "framer-motion";
import { Menu, X } from "lucide-react";
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
  const menuId = useId();
  const toggleRef = useRef(null);
  const sheetRef = useRef(null);
  const [open, setOpen] = useState(false);
  const [narrow, setNarrow] = useState(false);
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 860px)");
    const apply = () => {
      setNarrow(mq.matches);
      if (!mq.matches) setOpen(false);
    };
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

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
    if (!open) return undefined;
    sheetRef.current?.querySelector("button, a")?.focus();
    const onKey = (event) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const go = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
    setOpen(false);
  };

  const links = (
    <LayoutGroup id={narrow ? "nav-sheet" : "nav-bar"}>
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
        {narrow ? (
          <>
            <motion.button
              type="button"
              className={active === "hero" ? "nav-link is-active" : "nav-link"}
              aria-current={active === "hero" ? "true" : undefined}
              onClick={() => go("hero")}
              whileTap={reduce ? undefined : { scale: 0.97 }}
              transition={spring.tap}
            >
              {active === "hero" ? <span className="nav-active nav-active-still" aria-hidden="true" /> : null}
              {active === "hero" ? <span className="nav-dot" aria-hidden="true" /> : null}
              <span className="nav-label">Home</span>
            </motion.button>
            <button
              ref={toggleRef}
              type="button"
              className="nav-toggle"
              aria-expanded={open}
              aria-controls={menuId}
              onClick={() => setOpen((value) => !value)}
            >
              {open ? <X size={18} aria-hidden="true" /> : <Menu size={18} aria-hidden="true" />}
              <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            </button>
          </>
        ) : (
          <nav className="nav-links" aria-label="Primary">{links}</nav>
        )}
      </div>

      <AnimatePresence>
        {narrow && open ? (
          <motion.nav
            id={menuId}
            ref={sheetRef}
            className="nav-sheet"
            aria-label="Primary"
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduce ? { opacity: 0 } : { opacity: 0, y: -8 }}
            transition={reduce ? { duration: 0.15 } : spring.quick}
          >
            {links}
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;
