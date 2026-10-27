import { Analytics } from "@vercel/analytics/react";
import Navbar from "./components/Navbar";
import SideRail from "./components/SideRail";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import CodeMarquee from "./components/CodeMarquee";

function App() {
  return (
    <div className="app">
      <div className="site-glow" aria-hidden="true" />
      <a className="skip" href="#main">Skip to content</a>
      <Navbar />
      <SideRail />
      <main id="main" tabIndex={-1}>
        <section id="hero">
          <Hero />
        </section>
        <CodeMarquee />
        <section id="about" className="section">
          <div className="wrap"><About /></div>
        </section>
        <section id="skills" className="section">
          <div className="wrap"><Skills /></div>
        </section>
        <section id="projects" className="section">
          <div className="wrap"><Projects /></div>
        </section>
        <section id="experience" className="section">
          <div className="wrap"><Experience /></div>
        </section>
        <section id="contact" className="section">
          <div className="wrap"><Contact /></div>
        </section>
      </main>
      <Footer />
      <Analytics />
    </div>
  );
}

export default App;
