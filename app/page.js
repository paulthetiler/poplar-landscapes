import Link from "next/link";

const services = [
  ["Patios & Paving","Porcelain, natural stone and block paving.","https://static.wixstatic.com/media/e47714_638949a03e904e63905996261a2b833a~mv2.jpg"],
  ["Resin Driveways","Clean, durable finishes with strong kerb appeal.","https://static.wixstatic.com/media/e47714_5c766441156b4765ba2a2963848012f4~mv2.jpg"],
  ["Fencing & Decking","Practical boundaries and outdoor living spaces.","https://static.wixstatic.com/media/e47714_6a90fa3aa9d442378b8bb3507be04170~mv2.jpg"],
  ["Turfing & Lawns","Fresh turf, artificial grass and full preparation.","https://static.wixstatic.com/media/e47714_efc1cc7c86854e7791e1e9d16ba7df76~mv2.jpg"],
  ["Groundworks","Excavation, drainage and dependable groundwork.","https://static.wixstatic.com/media/e47714_2759df60b47d46f9a0bb9e2d5ed76f20~mv2.jpg"],
  ["Garden Design","Complete transformations built around your space.","https://static.wixstatic.com/media/6c3719_80ad0fccc1994a6e8c04830d7d931bf4~mv2.jpg"]
];

export default function Home() {
  const projects = [
    "https://static.wixstatic.com/media/e47714_5c766441156b4765ba2a2963848012f4~mv2.jpg",
    "https://static.wixstatic.com/media/e47714_638949a03e904e63905996261a2b833a~mv2.jpg",
    "https://static.wixstatic.com/media/e47714_efc1cc7c86854e7791e1e9d16ba7df76~mv2.jpg"
  ];

  return (
    <main>
      <header className="siteHeader">
        <div className="brand"><div className="leaf">◒</div><div><strong>POPLAR</strong><span>LANDSCAPES N.W. LTD</span></div></div>
        <nav>
          <a href="#services">Services</a><a href="#projects">Projects</a><a href="#about">About</a>
          <Link href="/estimate" className="navCta">Get an estimate</Link>
        </nav>
      </header>

      <section className="hero">
        <div className="heroOverlay" />
        <div className="heroContent">
          <div className="eyebrow">Landscaping across Warrington & the North West</div>
          <h1>Beautiful landscapes.<br/>Built to last.</h1>
          <p>Patios, driveways, fencing, turfing, drainage and complete garden transformations from an experienced local team.</p>
          <div className="trustRow"><span>35+ years experience</span><span>Local family business</span><span>Quality workmanship</span><span>5-star rated</span></div>
          <div className="heroActions"><Link href="/estimate" className="primaryButton">Get an instant estimate →</Link><a href="#projects" className="secondaryButton">View our work</a></div>
        </div>
      </section>

      <section className="section" id="services">
        <div className="sectionHeading"><div><div className="eyebrow green">Our services</div><h2>Complete landscaping solutions</h2><p>From a single patio to a full garden transformation, every project is planned around the site and the finish you want.</p></div></div>
        <div className="serviceGrid">
          {services.map(([title, copy, image]) => (
            <article className="serviceCard" key={title}><img src={image} alt="" /><div><h3>{title}</h3><p>{copy}</p></div></article>
          ))}
        </div>
      </section>

      <section className="estimateBand">
        <div>
          <div className="eyebrow light">Get an instant estimate</div><h2>Planning a patio, driveway or garden project?</h2>
          <p>Answer a few straightforward questions and get an indicative project range before arranging a site visit.</p>
          <div className="steps"><span>1. Choose your project</span><span>2. Tell us the size</span><span>3. Add site details</span><span>4. Get your range</span></div>
        </div>
        <div className="estimateCard"><div className="calculatorIcon">⌗</div><h3>Start your estimate</h3><p>Takes around 2 minutes.</p><Link href="/estimate" className="primaryButton full">Start now →</Link><small>No obligation. Indicative guide only.</small></div>
      </section>

      <section className="accreditations"><strong>Trusted materials & workmanship</strong><span>Marshalls</span><span>Tobermore</span><span>Fully insured</span><span>Local & trusted</span></section>

      <section className="section" id="projects">
        <div className="eyebrow green">Recent projects</div><h2>Real gardens. Real results.</h2>
        <div className="projectGrid">{projects.map((src, i) => <img src={src} alt={"Landscaping project " + (i + 1)} key={src} />)}</div>
      </section>

      <section className="section about" id="about">
        <div><div className="eyebrow green">About Poplar Landscapes</div><h2>Built on experience, not sales patter.</h2></div>
        <p>This concept shows how a polished landscaping website can combine lead generation with an intelligent estimator and structured enquiry workflow.</p>
      </section>

      <footer>© 2026 Poplar Landscapes N.W. Ltd — Concept mock-up</footer>
    </main>
  );
}
