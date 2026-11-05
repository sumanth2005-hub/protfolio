import { profile } from "../data/profile";

export default function Contact() {
  return (
    <section className="section wrap" id="contact">
      <div className="contact-panel reveal">
        
        <h2>Let's build something that matters.</h2>
        <p>Open to backend engineering internships and full-time opportunities.</p>
        <div className="contact-actions">
          <a
              className="button button-light"
              href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(profile.email)}&su=${encodeURIComponent("Portfolio enquiry")}&body=${encodeURIComponent("Hi Sumanth,\n\nI came across your portfolio and would like to connect.")}`}
              target="_blank"
              rel="noopener noreferrer"
          >
            {profile.email} ↗
          </a>
          <a className="button button-outline-light" href={profile.github} target="_blank" rel="noopener noreferrer">GitHub ↗</a>
          <a className="button button-outline-light" href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
        </div>
      </div>
    </section>
  );
}
