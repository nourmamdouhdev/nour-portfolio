import { projects } from "../data/projects";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function Projects() {
  return (
    <div style={{ paddingTop: "80px", paddingBottom: "80px", overflow: "hidden" }} id="projects">
      <div style={{ marginBottom: "40px" }}>
        <p className="section-subtitle">Projects</p>
        <h2 className="section-title">Selected work</h2>
        <p className="section-description">
          A snapshot of the systems and interfaces I have worked on so far. I like
          to combine solid engineering with thoughtful design and clear user
          flows. Swipe through to discover.
        </p>
      </div>

      <div style={{ position: "relative", width: "100%", maxWidth: "1000px", margin: "0 auto" }}>
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 2.2,
            },
          }}
          style={{ paddingBottom: "50px", padding: "20px" }}
        >
          {projects.map((project) => (
            <SwiperSlide key={project.title}>
              <article
                className="card"
                style={{
                  height: "100%",
                  minHeight: "480px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <div style={{ fontSize: 13, color: "var(--text-muted)", marginBottom: 8 }}>
                    {project.year} · {project.type}
                  </div>
                  <h3 style={{ margin: "0 0 12px", fontSize: 24, fontWeight: "600" }}>{project.title}</h3>
                  <div className="project-meta" style={{ marginBottom: 16 }}>
                    <span style={{
                      color: "var(--text)",
                      background: "rgba(255,255,255,0.05)",
                      padding: "4px 12px",
                      borderRadius: "999px"
                    }}>
                      {project.role}
                    </span>
                  </div>
                  <p style={{ fontSize: 15, color: "var(--text-muted)", lineHeight: 1.6 }}>{project.description}</p>

                  <div className="project-tech" style={{ marginTop: "24px", gap: "8px" }}>
                    {project.tech.map((t) => (
                      <span key={t} style={{
                        fontSize: 12,
                        padding: "6px 12px",
                        background: "rgba(56, 189, 248, 0.1)",
                        color: "var(--accent)",
                        borderColor: "rgba(56, 189, 248, 0.2)"
                      }}>{t}</span>
                    ))}
                  </div>

                  <ul style={{ paddingLeft: 18, fontSize: 14, color: "var(--text-muted)", marginTop: "24px", gap: "12px", display: "flex", flexDirection: "column" }}>
                    {project.highlights.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div className="project-links" style={{ marginTop: "auto", borderTop: "1px solid var(--border)", paddingTop: "20px" }}>
                  {project.links.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary"
                      style={{ padding: "8px 16px", fontSize: "12px" }}
                    >
                      {link.label}
                      <span>↗</span>
                    </a>
                  ))}
                </div>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Projects;
