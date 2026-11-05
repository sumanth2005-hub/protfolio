import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <Home />
        <About />
        <Projects />
        <section className="section wrap" id="skills">
          <div className="section-heading reveal">
            <div><h2>Skills.</h2></div>
            <p className="section-note">A backend-focused stack supported by core computer science fundamentals.</p>
          </div>
          <div className="skills-grid">
            <SkillGroup title="Languages" items={["Java 17 & 21", "Python 3", "SQL", "JavaScript", "HTML", "CSS"]} />
            <SkillGroup title="Backend & frameworks" items={["Spring Boot 3 & 4", "Spring Data JPA", "Microservices", "REST API Design"]} />
            <SkillGroup title="Databases & messaging" items={["MySQL", "PostgreSQL", "Redis", "Neo4j", "Apache Kafka"]} />
            <SkillGroup title="Tools & DevOps" items={["Docker", "Docker Compose", "Git & GitHub", "Maven", "Postman", "Linux CLI"]} />
            <SkillGroup title="Core CS" items={["Data Structures & Algorithms", "DBMS", "Operating Systems", "Computer Networks", "OOP"]} />
          </div>
        </section>
        <section className="section wrap" id="journey">
          <div className="section-heading reveal"><div><p className="eyebrow">BACKGROUND</p><h2>The journey so far.</h2></div></div>
          <div className="timeline-card reveal">
            <TimelineItem title="B.Tech — Computer Science & Engineering (Data Science)" detail="Presidency University, Bengaluru · 2023–2027 · CGPA 7.06" />
            <TimelineItem title="TechBiz College Hackathon — Top 3" detail="Built and demonstrated a functional prototype under a 24-hour time constraint." />
            <TimelineItem title="HackerRank Certifications" detail="Java and Python certifications; badge tracks in Problem Solving and SQL." />
            <TimelineItem title="Python for Everybody — Coursera" detail="Foundational data programming and API integration." last />
            <p className="school-scores">Class XII: 93% <span>·</span> Class X: 84%</p>
          </div>
        </section>
        <Contact />
      </main>
      <Footer />
    </BrowserRouter>
  );
}

function SkillGroup({ title, items }) {
  return <article className="skill-card reveal"><h3>{title}</h3><div className="skill-tags">{items.map((item) => <span key={item}>{item}</span>)}</div></article>;
}
function TimelineItem({ title, detail, last }) {
  return <div className={`timeline-item ${last ? "last" : ""}`}><span className="timeline-dot" /><h3>{title}</h3><p>{detail}</p></div>;
}
