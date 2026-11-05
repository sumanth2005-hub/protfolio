import { profile } from "../data/profile";

export default function Home() {
  return (
    <section className="hero wrap" id="home">
      <div className="hero-glow" aria-hidden="true" />
      <div className="hero-sphere" aria-hidden="true"><span className="sphere-ring sphere-ring-one" /><span className="sphere-ring sphere-ring-two" /></div>
      <div className="hero-content">
        <p className="eyebrow hero-eyebrow"><span className="availability-dot" /> OPEN TO BACKEND ENGINEERING OPPORTUNITIES</p>
        <p className="hero-intro">HELLO, I'M</p>
        <h1 className="hero-name">SUMANTH<span>.</span></h1>
        <p className="hero-role">SOFTWARE ENGINEER <b>·</b> BACKEND DEVELOPMENT</p>
        <p className="hero-summary">I build reliable backend systems with <strong>Java, Spring Boot, Kafka</strong> and distributed architectures. Turning complex ideas into practical engineering.</p>
        <div className="hero-actions">
          <a className="button button-primary" href="#projects">Explore projects <span>↘</span></a>
          <a className="button button-secondary" href="#contact">Let's connect ↗</a>
        </div>
        <div className="social-links">
          <a href={profile.github} target="_blank" rel="noreferrer">GitHub ↗</a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a>
          <a href={`mailto:${profile.email}?subject=${encodeURIComponent("Portfolio enquiry")}&body=${encodeURIComponent("Hi Sumanth,\n\nI came across your portfolio and would like to connect.")}`}>Email ↗</a>
        </div>
      </div>
    </section>
  );
}
