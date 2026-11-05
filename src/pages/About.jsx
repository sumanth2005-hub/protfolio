import { education } from "../data/profile";

const stats = [
  ["2027", "GRADUATION"],
  ["Java", "PRIMARY LANGUAGE"],
  ["6", "MICROSERVICES IN LOG PLATFORM"],
  ["TOP 3", "TECHBIZ HACKATHON"],
];

export default function About() {
  return (
    <section className="section wrap" id="about">
      <div className="section-heading reveal">
        <div><p className="eyebrow">ABOUT</p><h2>Curious by nature.<br />Engineer by practice.</h2></div>
        <p className="section-note">I build backend systems that move data reliably, communicate clearly, and make complex workflows observable.</p>
      </div>
      <div className="about-layout">
        <article className="about-card reveal">
          <p>Computer Science Engineering student at <strong>{education.school}</strong>, focused on Java backend development and distributed systems. I work with Spring Boot microservices, REST APIs, Kafka event pipelines, and data layers including MySQL, Redis, and Neo4j.</p>
          <p className="about-support">My current focus is strengthening system design fundamentals, writing maintainable backend code, and building practical engineering projects.</p>
        </article>
        <div className="stats-grid">
          {stats.map(([value, label], i) => <article className={`stat-card reveal delay-${i}`} key={label}><strong>{value}</strong><span>{label}</span></article>)}
        </div>
      </div>
    </section>
  );
}
