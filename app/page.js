import Link from "next/link";
import Header from "./components/Header";
import Footer from "./components/Footer";

const services = [
  {
    title: "Patios & paving",
    copy: "Porcelain, Indian stone, flags and block paving, set out for the way you actually use the garden.",
    image: "https://static.wixstatic.com/media/e47714_638949a03e904e63905996261a2b833a~mv2.jpg"
  },
  {
    title: "Driveways",
    copy: "Resin, block paving and tegula finishes with the base and drainage done properly underneath.",
    image: "https://static.wixstatic.com/media/e47714_5c766441156b4765ba2a2963848012f4~mv2.jpg"
  },
  {
    title: "Fencing & decking",
    copy: "Boundaries, screens and outdoor rooms that last more than one winter.",
    image: "https://static.wixstatic.com/media/e47714_6a90fa3aa9d442378b8bb3507be04170~mv2.jpg"
  },
  {
    title: "Turfing & lawns",
    copy: "Ground prepared, levels corrected, then new turf or artificial grass laid cleanly.",
    image: "https://static.wixstatic.com/media/e47714_efc1cc7c86854e7791e1e9d16ba7df76~mv2.jpg"
  },
  {
    title: "Groundworks",
    copy: "Excavation, drainage and bases. The unglamorous work that stops a patio failing in year three.",
    image: "https://static.wixstatic.com/media/e47714_2759df60b47d46f9a0bb9e2d5ed76f20~mv2.jpg"
  },
  {
    title: "Garden design",
    copy: "Complete transformations planned around access, levels and how the space needs to work.",
    image: "https://static.wixstatic.com/media/6c3719_80ad0fccc1994a6e8c04830d7d931bf4~mv2.jpg"
  }
];

const projects = [
  {
    title: "Porcelain patio",
    meta: "Hard landscaping",
    image: "https://static.wixstatic.com/media/e47714_638949a03e904e63905996261a2b833a~mv2.jpg"
  },
  {
    title: "Resin driveway",
    meta: "Kerb appeal",
    image: "https://static.wixstatic.com/media/e47714_5c766441156b4765ba2a2963848012f4~mv2.jpg"
  },
  {
    title: "Lawn and planting",
    meta: "Garden finish",
    image: "https://static.wixstatic.com/media/e47714_efc1cc7c86854e7791e1e9d16ba7df76~mv2.jpg"
  }
];

const steps = [
  ["01", "Tell us the job", "Use the estimator or call. Project type, size and access is enough to start."],
  ["02", "We look at the site", "Levels, drainage, existing surfaces and how materials will get in."],
  ["03", "A clear quotation", "Materials, programme and price, without the sales fog."],
  ["04", "We build it", "A tidy site, a proper finish, and work that still looks right in ten years."]
];

const areas = ["Warrington", "Lymm", "Wigan", "St Helens", "Widnes", "Runcorn", "Cheshire"];

const faqs = [
  ["Can block paving be used for patios as well as driveways?", "Yes. The same product family works for both, provided the base, falls and jointing are specified for the load. A patio does not need a driveway specification, and a driveway should not be built like a patio."],
  ["How does resin compare with traditional concrete?", "Resin is cleaner to look at, handles decorative aggregates well and can be permeable. Concrete is usually cheaper on day one. The right choice depends on access, drainage and the finish you want to live with."],
  ["Do you remove the existing surface?", "Usually, yes. We lift the old patio or driveway, check the ground, then rebuild the base. The estimator includes this so the range is closer to a real job."],
  ["What happens after I request an estimate?", "You get an indicative range immediately. We then review the details, call you back, and arrange a free site visit where the levels or access need seeing in person."]
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
          <h1>Landscaping that still looks right in ten years.</h1>
          <p className="heroLead">
            Patios, driveways, fencing and complete garden transformations from a family team that has been building outdoor spaces across the North West since 1988.
          </p>
          <div className="heroActions">
            <Link href="/estimate" className="primaryButton">Get an instant estimate</Link>
            <a href="#work" className="ghostButton">View recent work</a>
          </div>
        </div>
        <dl className="heroStats">
          <div><dt>35+</dt><dd>Years on the tools</dd></div>
          <div><dt>1988</dt><dd>Family business, Warrington</dd></div>
          <div><dt>Marshalls</dt><dd>Accredited installer</dd></div>
          <div><dt>5-star</dt><dd>Most work from referrals</dd></div>
        </dl>
      </section>

      <section className="section" id="services">
        <div className="sectionIntro">
          <p className="eyebrow dark">What we build</p>
          <h2>Hard landscaping, gardens and the groundwork underneath.</h2>
          <p>From a single patio to a full redesign. Domestic and commercial, specified around the site rather than a catalogue page.</p>
        </div>
        <div className="serviceGrid">
          {services.map((service) => (
            <article className="serviceCard" key={service.title}>
              <div className="serviceImage">
                <img src={service.image} alt="" />
              </div>
              <div className="serviceBody">
                <h3>{service.title}</h3>
                <p>{service.copy}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section workSection" id="work">
        <div className="sectionIntro split">
          <div>
            <p className="eyebrow dark">Recent work</p>
            <h2>Real gardens. Real driveways.</h2>
          </div>
          <p>Porcelain, resin, turf and planting — the same standard whether it is a rear patio or the first thing people see from the road.</p>
        </div>
        <div className="projectGrid">
          {projects.map((project, index) => (
            <figure className={`projectCard${index === 0 ? " isFeatured" : ""}`} key={project.title}>
              <img src={project.image} alt={project.title} />
              <figcaption>
                <span>{project.meta}</span>
                <strong>{project.title}</strong>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="processBand" id="process">
        <div className="processCopy">
          <p className="eyebrow light">How a job actually runs</p>
          <h2>No guesswork. No hard sell. A clear path from first call to finished site.</h2>
          <p>Most of our work comes through recommendation. The process is built for that: honest ranges, a site visit when it matters, and a quotation you can hold us to.</p>
          <Link href="/estimate" className="primaryButton">Start with an estimate</Link>
        </div>
        <ol className="processList">
          {steps.map(([number, title, copy]) => (
            <li key={number}>
              <span>{number}</span>
              <div>
                <h3>{title}</h3>
                <p>{copy}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="section aboutSection" id="about">
        <div className="aboutImage">
          <img
            src="https://static.wixstatic.com/media/6c3719_80ad0fccc1994a6e8c04830d7d931bf4~mv2.jpg"
            alt="Garden transformation by Poplar Landscapes"
          />
        </div>
        <div className="aboutCopy">
          <p className="eyebrow dark">About Poplar Landscapes</p>
          <h2>A family firm that stayed on the tools.</h2>
          <p>
            Established in 1988, Poplar Landscapes N.W. Ltd has spent more than 35 years delivering landscaping and building work across Warrington, Lymm, Wigan, St Helens, Widnes and Runcorn.
          </p>
          <p>
            We are a Marshalls accredited landscape contractor and driveway installer, and a registered Tobermore installer. That means the materials are specified properly, and the people laying them have been trusted by the manufacturers to do it.
          </p>
          <ul className="aboutPoints">
            <li>Free, no-obligation consultations</li>
            <li>Domestic and commercial work</li>
            <li>Emergency response within 24 hours</li>
            <li>Fully insured, recommendation-led</li>
          </ul>
        </div>
      </section>

      <section className="quoteSection">
        <figure className="quoteCard">
          <blockquote>
            Mike has done lots of jobs for us, from fencing to paving the drive. He’s always reliable and professional. We wouldn’t dream of looking elsewhere and have recommended Poplar Landscapes to several of our friends.
          </blockquote>
          <figcaption>Long-standing client · Warrington</figcaption>
        </figure>
        <div className="accreditations">
          <p className="eyebrow dark">Trusted materials</p>
          <ul>
            <li>Marshalls accredited</li>
            <li>Tobermore installer</li>
            <li>Fully insured</li>
            <li>Family run since 1988</li>
          </ul>
        </div>
      </section>

      <section className="section" id="areas">
        <div className="sectionIntro">
          <p className="eyebrow dark">Coverage</p>
          <h2>Based in Warrington. Working across the North West.</h2>
          <p>From 49 Sinclair Avenue we cover the towns most of our clients already live in — and the villages in between.</p>
        </div>
        <ul className="areaList">
          {areas.map((area) => (
            <li key={area}>{area}</li>
          ))}
        </ul>
      </section>

      <section className="section faqSection" id="faq">
        <div className="sectionIntro">
          <p className="eyebrow dark">Questions we get first</p>
          <h2>Straight answers before you pick up the phone.</h2>
        </div>
        <div className="faqList">
          {faqs.map(([question, answer]) => (
            <details key={question}>
              <summary>{question}</summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="finalCta">
        <div>
          <p className="eyebrow light">Ready when you are</p>
          <h2>Planning a patio, driveway or garden project?</h2>
          <p>Answer a few questions and get an indicative range in about two minutes. No obligation — it simply gives both sides a serious starting point.</p>
        </div>
        <div className="finalCtaActions">
          <Link href="/estimate" className="primaryButton">Get your project range</Link>
          <a href="tel:01925358541" className="ghostButton">Call 01925 358541</a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
