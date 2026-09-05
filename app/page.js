import Link from "next/link";
import Reveal from "./components/Reveal";

const services=[
["Patios & Paving","Porcelain, Indian stone, Tegula and block paving designed around the property.","https://static.wixstatic.com/media/e47714_638949a03e904e63905996261a2b833a~mv2.jpg"],
["Resin Driveways","A clean, durable finish with excellent kerb appeal and low maintenance.","https://static.wixstatic.com/media/e47714_5c766441156b4765ba2a2963848012f4~mv2.jpg"],
["Fencing & Decking","Robust boundaries, privacy and practical outdoor living spaces.","https://static.wixstatic.com/media/e47714_6a90fa3aa9d442378b8bb3507be04170~mv2.jpg"],
["Turfing & Planting","Fresh lawns, planting and full ground preparation for a finished garden.","https://static.wixstatic.com/media/e47714_efc1cc7c86854e7791e1e9d16ba7df76~mv2.jpg"],
["Groundworks & Drainage","Levels, excavation, drainage and groundwork done properly from the start.","https://static.wixstatic.com/media/e47714_2759df60b47d46f9a0bb9e2d5ed76f20~mv2.jpg"],
["Full Garden Transformations","One team taking the space from first idea through to the final finish.","https://static.wixstatic.com/media/6c3719_80ad0fccc1994a6e8c04830d7d931bf4~mv2.jpg"]
];

const projects=[
"https://static.wixstatic.com/media/e47714_5c766441156b4765ba2a2963848012f4~mv2.jpg",
"https://static.wixstatic.com/media/e47714_638949a03e904e63905996261a2b833a~mv2.jpg",
"https://static.wixstatic.com/media/e47714_efc1cc7c86854e7791e1e9d16ba7df76~mv2.jpg",
"https://static.wixstatic.com/media/e47714_6a90fa3aa9d442378b8bb3507be04170~mv2.jpg"
];

function Logo(){return <div className="brand"><div className="brandMark" aria-hidden="true"><span className="brandLeaf brandLeafOne"/><span className="brandLeaf brandLeafTwo"/></div><div className="brandWords"><strong>POPLAR</strong><span>LANDSCAPES N.W. LTD</span></div></div>}

export default function Home(){return <main>
<header className="siteHeader"><Logo/><nav><a href="#services">Services</a><a href="#projects">Projects</a><a href="#about">About</a><a href="tel:01925358541" className="phoneLink">01925 358541</a><Link href="/estimate" className="navCta">Get an estimate</Link></nav></header>

<section className="hero"><div className="heroShade"/><div className="heroContent"><div className="heroCopyCard">
<div className="eyebrow">Established 1988 · Warrington & the North West</div><h1>Beautiful landscapes.<br/>Built to last.</h1>
<p>Driveways, patios, fencing, turfing, drainage and complete garden transformations from a family-run team with more than 35 years of experience.</p>
<div className="heroActions"><Link href="/estimate" className="primaryButton">Get an instant estimate →</Link><a href="#projects" className="secondaryButton">See recent work</a></div>
</div></div><div className="heroTrust"><span>Marshalls approved</span><span>Tobermore installer</span><span>Free consultations</span><span>5-star reputation</span></div></section>

<section className="introStrip"><Reveal from="left"><div><div className="eyebrow green">Built around the job, not the sales pitch</div><h2>From the first idea to the final sweep-up.</h2></div></Reveal><Reveal from="right" delay={120}><p>Poplar Landscapes handles the hard landscaping, groundwork, drainage and finishing details as one joined-up project, so customers are not left coordinating multiple trades.</p></Reveal></section>

<section className="section" id="services"><Reveal from="left"><div className="sectionHeading"><div><div className="eyebrow green">What we do</div><h2>Complete landscaping solutions</h2><p>Designed to look good, drain properly and stand up to everyday use.</p></div></div></Reveal>
<div className="serviceGrid">{services.map(([title,copy,image],index)=><Reveal from={index%2===0?"left":"right"} delay={index*60} key={title}><article className="serviceCard"><div className="serviceImageWrap"><img src={image} alt={title}/><span className="serviceNumber">0{index+1}</span></div><div className="serviceBody"><h3>{title}</h3><p>{copy}</p></div></article></Reveal>)}</div></section>

<section className="estimatorFeature"><Reveal from="left"><div className="estimatorFeatureCopy"><div className="eyebrow light">A smarter first step</div><h2>Know roughly where you stand before booking a visit.</h2><p>Tell us the project type, approximate size, access, existing ground and a few key details. The estimator gives an indicative range, then packages everything into a proper enquiry for the team to review.</p><div className="featurePoints"><span>Less back-and-forth</span><span>Better qualified enquiries</span><span>Faster route to a proper quote</span></div><Link href="/estimate" className="primaryButton">Start your estimate →</Link></div></Reveal>
<Reveal from="right" delay={100}><div className="estimatorVisual"><div className="estimatorMiniHeader">Project snapshot</div><div className="estimatorMiniRow"><span>Project</span><strong>Porcelain patio</strong></div><div className="estimatorMiniRow"><span>Area</span><strong>42m²</strong></div><div className="estimatorMiniRow"><span>Access</span><strong>Good</strong></div><div className="estimatorMiniRow"><span>Removal</span><strong>Existing paving</strong></div><div className="estimatorMiniResult"><span>Indicative range</span><strong>£7,900 – £10,100</strong></div><small>Example only. Final price follows review/site assessment.</small></div></Reveal></section>

<section className="section projectSection" id="projects"><Reveal from="left"><div className="sectionHeading split"><div><div className="eyebrow green">Recent work</div><h2>Real gardens. Real driveways. Real results.</h2></div><p>Actual Poplar Landscapes project photography, not stock imagery.</p></div></Reveal>
<div className="projectMosaic">{projects.map((src,index)=><Reveal from={index%2===0?"left":"right"} delay={index*70} key={src}><figure className={`projectTile projectTile-${index+1}`}><img src={src} alt={"Poplar Landscapes project "+(index+1)}/></figure></Reveal>)}</div></section>

<section className="testimonialBand"><Reveal from="left"><div><div className="eyebrow light">Why people come back</div><blockquote>“Reliable, professional and a team customers are happy to recommend again.”</blockquote></div></Reveal><Reveal from="right" delay={120}><div className="testimonialStats"><div><strong>1988</strong><span>Established</span></div><div><strong>35+</strong><span>Years' experience</span></div><div><strong>24h</strong><span>Urgent response available</span></div></div></Reveal></section>

<section className="section about" id="about"><Reveal from="left"><div><div className="eyebrow green">About Poplar Landscapes</div><h2>A local family business with proper trade experience behind it.</h2></div></Reveal><Reveal from="right" delay={100}><div className="aboutCopy"><p>Established in 1988, Poplar Landscapes works across Warrington and surrounding areas on domestic and commercial projects, from paving and fencing through to drainage and complete garden transformations.</p><div className="aboutBadges"><span>Marshalls Registered</span><span>Tobermore Registered Installer</span><span>Free no-obligation consultations</span></div></div></Reveal></section>

<section className="finalCta"><Reveal from="left"><div><div className="eyebrow light">Thinking about a project?</div><h2>Start with an estimate, not a sales call.</h2></div></Reveal><Reveal from="right" delay={100}><div className="finalCtaActions"><Link href="/estimate" className="primaryButton lightButton">Get an instant estimate →</Link><a href="tel:01925358541">Or call 01925 358541</a></div></Reveal></section>

<footer><Logo/><div className="footerMeta"><span>49 Sinclair Avenue, Warrington, WA2 9RF</span><span>Mon–Fri 08:00–20:00 · Sat–Sun 08:00–18:00</span></div></footer>
</main>}
