import Link from "next/link";
import Header from "./components/Header";
import Footer from "./components/Footer";

const services = [
  ["Patios & paving", "Porcelain, natural stone and block paving, built around the site and the way you use it.", "https://static.wixstatic.com/media/e47714_638949a03e904e63905996261a2b833a~mv2.jpg"],
  ["Driveways", "Resin and block paving with the levels, drainage and groundwork handled properly underneath.", "https://static.wixstatic.com/media/e47714_5c766441156b4765ba2a2963848012f4~mv2.jpg"],
  ["Fencing & decking", "Clean boundaries, privacy and outdoor spaces that feel considered rather than bolted on.", "https://static.wixstatic.com/media/e47714_6a90fa3aa9d442378b8bb3507be04170~mv2.jpg"],
  ["Turfing & lawns", "Ground preparation, level correction and a finished lawn that completes the space.", "https://static.wixstatic.com/media/e47714_efc1cc7c86854e7791e1e9d16ba7df76~mv2.jpg"],
  ["Groundworks", "Excavation, drainage and bases — the invisible work that makes the visible work last.", "https://static.wixstatic.com/media/e47714_2759df60b47d46f9a0bb9e2d5ed76f20~mv2.jpg"],
  ["Full garden transformations", "One joined-up project from first idea to finished space.", "https://static.wixstatic.com/media/6c3719_80ad0fccc1994a6e8c04830d7d931bf4~mv2.jpg"]
];

const projects = [
  ["Porcelain patio", "https://static.wixstatic.com/media/e47714_638949a03e904e63905996261a2b833a~mv2.jpg"],
  ["Resin driveway", "https://static.wixstatic.com/media/e47714_5c766441156b4765ba2a2963848012f4~mv2.jpg"],
  ["Garden finish", "https://static.wixstatic.com/media/e47714_efc1cc7c86854e7791e1e9d16ba7df76~mv2.jpg"]
];

export default function Home() {
  return (
    <main>
      <Header variant="overlay" />

      <section className="hero">
        <div className="heroMedia" role="img" aria-label="Completed garden landscaping by Poplar Landscapes" />
        <div className="heroOverlay" />
        <div className="heroContent">
          <p className="eyebrow">Established 1988 · Warrington &amp; the North West</p>
          <h1>Landscaping, done properly.</h1>
          <p className="heroLead">Patios, driveways, fencing, turfing and complete garden transformations from a family-run team with more than 35 years on the tools.</p>
          <div className="heroActions">
            <Link href="/estimate" className="primaryButton">Get an instant estimate</Link>
            <a href="#work" className="ghostButton">View recent work</a>
          </div>
        </div>
        <div className="heroStats">
          <span>35+ years' experience</span>
          <span>Marshalls accredited</span>
          <span>Tobermore installer</span>
          <span>Free consultations</span>
        </div>
      </section>

      <section className="section introMinimal">
        <p className="eyebrow dark">What Poplar does</p>
        <div className="introMinimalGrid">
          <h2>High-quality landscaping without the noise.</h2>
          <p>Good design, solid preparation and a clean finish. The site should feel calm, premium and confident — just like the work.</p>
        </div>
      </section>

      <section className="section" id="services">
        <div className="sectionIntro">
          <p className="eyebrow dark">Services</p>
          <h2>Everything needed to transform the outside of a property.</h2>
        </div>
        <div className="serviceGrid">
          {services.map(([title, copy, image]) => (
            <article className="serviceCard" key={title}>
              <div className="serviceImage"><img src={image} alt="" /></div>
              <div className="serviceBody"><h3>{title}</h3><p>{copy}</p></div>
            </article>
          ))}
        </div>
      </section>

      <section className="estimateFeature">
        <div className="estimateFeatureCopy">
          <p className="eyebrow light">A smarter first step</p>
          <h2>Get a realistic starting range before booking a visit.</h2>
          <p>Customers answer the basic questions once — project type, rough size, access, existing ground and key site details. That gives Poplar a better enquiry and filters out jobs that are miles apart on budget before anyone wastes time.</p>
          <Link href="/estimate" className="primaryButton">Start an estimate</Link>
        </div>
        <div className="estimateFeatureCard">
          <span>Example project</span>
          <strong>42m² porcelain patio</strong>
          <dl>
            <div><dt>Access</dt><dd>Good</dd></div>
            <div><dt>Existing surface</dt><dd>Remove paving</dd></div>
            <div><dt>Indicative range</dt><dd>£7.9k–£10.1k</dd></div>
          </dl>
          <small>Guide only. Final pricing follows review and, where needed, a site visit.</small>
        </div>
      </section>

      <section className="section workSection" id="work">
        <div className="sectionIntro split">
          <div><p className="eyebrow dark">Recent work</p><h2>Real projects. No stock photography.</h2></div>
          <p>Mike's own work should do most of the selling. The site just needs to frame it properly.</p>
        </div>
        <div className="projectGrid">
          {projects.map(([title, image], index) => (
            <figure className={`projectCard${index === 0 ? " isFeatured" : ""}`} key={title}>
              <img src={image} alt={title} />
              <figcaption><strong>{title}</strong></figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="section aboutSection" id="about">
        <div className="aboutImage"><img src="https://static.wixstatic.com/media/6c3719_80ad0fccc1994a6e8c04830d7d931bf4~mv2.jpg" alt="Garden transformation by Poplar Landscapes" /></div>
        <div className="aboutCopy">
          <p className="eyebrow dark">About Poplar Landscapes</p>
          <h2>A family firm with proper trade experience behind it.</h2>
          <p>Established in 1988, Poplar Landscapes N.W. Ltd works across Warrington and the North West on domestic and commercial projects, from paving and fencing through to drainage and complete garden transformations.</p>
          <p>Marshalls accredited, Tobermore registered and still hands-on with the work.</p>
        </div>
      </section>

      <section className="finalCta">
        <div>
          <p className="eyebrow light">Planning a project?</p>
          <h2>Start with a realistic estimate.</h2>
          <p>Two minutes now can save a wasted visit later.</p>
        </div>
        <div className="finalCtaActions">
          <Link href="/estimate" className="primaryButton">Get an instant estimate</Link>
          <a href="tel:01925358541" className="ghostButton">Call 01925 358541</a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
