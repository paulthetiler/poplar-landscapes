import Link from "next/link";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="siteFooter">
      <div className="footerGrid">
        <div className="footerBrand">
          <Logo light />
          <p>Family-run landscapers in Warrington since 1988. Hard landscaping, gardens and groundworks across the North West.</p>
        </div>

        <div>
          <h2>Visit</h2>
          <address>
            49 Sinclair Avenue<br />
            Warrington<br />
            WA2 9RF
          </address>
        </div>

        <div>
          <h2>Contact</h2>
          <p><a href="tel:01925358541">01925 358541</a></p>
          <p><a href="mailto:poplandscapes@msn.com">poplandscapes@msn.com</a></p>
          <p>Mon–Fri 08:00–20:00<br />Sat–Sun 08:00–18:00</p>
        </div>

        <div>
          <h2>Explore</h2>
          <p><a href="/#services">Services</a></p>
          <p><a href="/#work">Recent work</a></p>
          <p><Link href="/estimate">Project estimate</Link></p>
          <p><a href="/#about">About</a></p>
        </div>
      </div>
      <div className="footerBase">
        <span>© {new Date().getFullYear()} Poplar Landscapes N.W. Ltd</span>
        <span>Marshalls accredited · Tobermore installer · Fully insured</span>
      </div>
    </footer>
  );
}
