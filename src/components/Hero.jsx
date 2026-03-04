import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

function Hero() {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"]
  });

  // Background zooms in and blurs as you scroll
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.4]);
  const bgFilter = useTransform(scrollYProgress, [0, 1], ["blur(0px)", "blur(12px)"]);

  // Text zooms in, fades out, and lifts slightly
  const textScale = useTransform(scrollYProgress, [0, 0.6], [1, 1.25]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const textY = useTransform(scrollYProgress, [0, 0.6], [0, -40]);

  return (
    <div
      ref={container}
      className="hero-container"
      style={{
        position: "relative",
        height: "100vh",
      }}
    >
      {/* Zooming background image */}
      <motion.div
        style={{
          position: "absolute",
          inset: 0,
          scale: bgScale,
          filter: bgFilter,
          backgroundImage: "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2672&auto=format&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: 0,
        }}
      >
        {/* Dark overlay for readability */}
        <div style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to bottom, rgba(3, 5, 8, 0.5) 0%, rgba(3, 5, 8, 0.7) 60%, #030508 100%)",
          zIndex: 1,
        }} />
      </motion.div>

      {/* Content that zooms in and fades out with scroll */}
      <motion.div
        className="hero-content"
        style={{
          scale: textScale,
          opacity: textOpacity,
          y: textY,
          position: "relative",
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          justifyContent: "center",
          height: "100%",
          maxWidth: "800px",
          margin: "0 auto",
          padding: "0 24px",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          style={{ marginBottom: "24px", display: "flex", flexDirection: "column", alignItems: "center", gap: "16px" }}
        >
          <div style={{
            width: "80px",
            height: "80px",
            borderRadius: "50%",
            overflow: "hidden",
            border: "2px solid rgba(56, 189, 248, 0.5)",
            boxShadow: "0 8px 20px rgba(0, 0, 0, 0.5), 0 0 15px rgba(56, 189, 248, 0.3)"
          }}>
            <img
              src="/profile-400w.webp"
              alt="Nour Mamdouh"
              width="80"
              height="80"
              fetchPriority="high"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
          <div className="hero-badge">
            <span className="hero-badge-dot" />
            <span>Available for internships & freelance</span>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="hero-title"
          style={{ fontSize: "clamp(40px, 8vw, 72px)", lineHeight: 1.1, marginBottom: "20px" }}
        >
          Building <span>usable</span> and <span>scalable</span> web products.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          className="hero-subtitle"
          style={{ fontSize: "18px", color: "var(--text-muted)", maxWidth: "600px", marginBottom: "32px", marginInline: "auto" }}
        >
          I am a 3rd-year Information Technology student focusing on Frontend,
          Full Stack (.NET + Angular/React), and UI/UX, with hands-on
          experience shipping real-world projects.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          className="hero-actions"
          style={{ display: "flex", gap: "16px", justifyContent: "center" }}
        >
          <a href="#projects" className="btn-primary">
            View selected projects
          </a>
          <a
            href="https://www.linkedin.com/in/nour-mamdouh/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            LinkedIn profile
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Hero;
