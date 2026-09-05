import Link from "next/link";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Motion from "./components/Motion";

const services = [
  ["Patios & paving","Porcelain, natural stone and block paving.","https://static.wixstatic.com/media/e47714_638949a03e904e63905996261a2b833a~mv2.jpg"],
  ["Driveways","Resin and block paving, including prep and drainage.","https://static.wixstatic.com/media/e47714_5c766441156b4765ba2a2963848012f4~mv2.jpg"],
  ["Fencing & decking","Fencing, screening and decking.","https://static.wixstatic.com/media/e47714_6a90fa3aa9d442378b8bb3507be04170~mv2.jpg"],
  ["Turfing & lawns","Ground prep, turf and artificial grass.","https://static.wixstatic.com/media/e47714_efc1cc7c86854e7791e1e9d16ba7df76~mv2.jpg"],
  ["Groundworks","Excavation, drainage and bases.","https://static.wixstatic.com/media/e47714_2759df60b47d46f9a0bb9e2d5ed76f20~mv2.jpg"],
  ["Full garden jobs","From rip-out to finished garden.","https://static.wixstatic.com/media/6c3719_80ad0fccc1994a6e8c04830d7d931bf4~mv2.jpg"]
];

const projects = [
  ["Porcelain patio","https://static.wixstatic.com/media/e47714_638949a03e904e63905996261a2b833a~mv2.jpg"],
  ["Resin driveway","https://static.wixstatic.com/media/e47714_5c766441156b4765ba2a2963848012f4~mv2.jpg"],
  ["Garden finish","https://static.wixstatic.com/media/e47714_efc1cc7c86854e7791e1e9d16ba7df76~mv2.jpg"]
];

export default function Home() {
  return <main>
    <Header variant="overlay" />

    <section className="hero">
      <div className="heroMedia" role="img" aria-label="Completed garden landscaping by Poplar Landscapes" />
      <div className="heroOverlay" />
      <div className="heroContent heroEntrance">
        <p className="eyebrow">Established 1988 · Warrington &amp; the North West</p>
        <h1>Landscaping, done properly.</h1>
        <p className="heroLead">Patios, driveways, fencing, turfing and full garden jobs. Family-run. 35+ years' experience.</p>
        <div className="heroActions">
          <Link href="/estimate" className="primaryButton">Get an estimate</Link>
          <a href="#work" className="ghostButton">See our work</a>
        </div>
      </div>
      <div className="heroStats">
        <span>35+ years' experience</span>
        <span>Marshalls accredited</span>
        <span>Tobermore installer</span>
        <span>Free consultations</span>
      </div>
    </section>

    <section className="section" id="services">
      <Motion from="left"><div className="sectionIntro">
        <p className="eyebrow dark">What we do</p>
        <h2>Landscaping and groundwork.</h2>
      </div></Motion>
      <div className="serviceGrid">
        {services.map(([title,copy,image], index) => (
          <Motion from={index % 2 === 0 ? "left" : "right"} delay={index * 70} key={title}>
            <article className="serviceCard">
              <div className="serviceImage"><img src={image} alt="" /></div>
              <div className="serviceBody"><h3>{title}</h3><p>{copy}</p></div>
            </article>
          </Motion>
        ))}
      </div>
    </section>

    <section className="estimateFeature">
      <Motion from="left"><div className="estimateFeatureCopy">
        <p className="eyebrow light">Save the back and forth</p>
        <h2>Get a rough price before we come out.</h2>
        <p>Tell us what you want, rough size, access and what is there now. You get an indicative range and we get the details we need.</p>
        <Link href="/estimate" className="primaryButton">Start estimate</Link>
      </div></Motion>
      <Motion from="right" delay={120}><div className="estimateFeatureCard shimmerCard">
        <span>Example</span>
        <strong>42m² porcelain patio</strong>
        <dl>
          <div><dt>Access</dt><dd>Good</dd></div>
          <div><dt>Old surface</dt><dd>Remove paving</dd></div>
          <div><dt>Guide price</dt><dd>£7.9k–£10.1k</dd></div>
        </dl>
      </div></Motion>
    </section>

    <section className="section workSection" id="work">
      <Motion from="right"><div className="sectionIntro">
        <p className="eyebrow dark">Recent work</p>
        <h2>Our work.</h2>
      </div></Motion>
      <div className="projectGrid">
        {projects.map(([title,image],index) => (
          <Motion from={index === 0 ? "up" : index === 1 ? "right" : "left"} delay={index * 100} key={title}>
            <figure className={`projectCard${index===0?" isFeatured":""}`}>
              <img src={image} alt={title} />
              <figcaption><strong>{title}</strong></figcaption>
            </figure>
          </Motion>
        ))}
      </div>
    </section>

    <section className="section aboutSection" id="about">
      <Motion from="left"><div className="aboutImage"><img src="https://static.wixstatic.com/media/6c3719_80ad0fccc1994a6e8c04830d7d931bf4~mv2.jpg" alt="Garden transformation by Poplar Landscapes" /></div></Motion>
      <Motion from="right" delay={120}><div className="aboutCopy">
        <p className="eyebrow dark">About us</p>
        <h2>Family-run since 1988.</h2>
        <p>Based in Warrington. Domestic and commercial landscaping across the North West.</p>
        <p>Marshalls accredited. Tobermore registered. Fully insured.</p>
      </div></Motion>
    </section>

    <section className="finalCta">
      <Motion from="left"><div>
        <p className="eyebrow light">Got a job in mind?</p>
        <h2>Get a rough price.</h2>
      </div></Motion>
      <Motion from="right" delay={100}><div className="finalCtaActions">
        <Link href="/estimate" className="primaryButton">Get an estimate</Link>
        <a href="tel:01925358541" className="ghostButton">Call 01925 358541</a>
      </div></Motion>
    </section>

    <Footer />
  </main>;
}
