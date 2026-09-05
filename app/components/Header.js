"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Logo from "./Logo";

const links = [
  ["Services", "/#services"],
  ["Work", "/#work"],
  ["Process", "/#process"],
  ["About", "/#about"],
  ["Areas", "/#areas"]
];

export default function Header({ variant = "solid" }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const overlay = variant === "overlay";
  const solid = !overlay || scrolled || open;

  return (
    <header className={`siteHeader${overlay ? " isOverlay" : ""}${solid ? " isSolid" : ""}`}>
      <div className="headerInner">
        <Logo light={overlay && !solid} />

        <nav className="desktopNav" aria-label="Primary">
          {links.map(([label, href]) => (
            <a key={href} href={href}>{label}</a>
          ))}
        </nav>

        <div className="headerActions">
          <a className="headerPhone" href="tel:01925358541">01925 358541</a>
          <Link href="/estimate" className="navCta">Get an estimate</Link>
          <button
            type="button"
            className={`menuToggle${open ? " isOpen" : ""}`}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((value) => !value)}
          >
            <span className="srOnly">{open ? "Close menu" : "Open menu"}</span>
            <i /><i /><i />
          </button>
        </div>
      </div>

      <div id="mobile-nav" className={`mobileNav${open ? " isOpen" : ""}`} hidden={!open}>
        <nav aria-label="Mobile">
          {links.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>
          ))}
          <a href="tel:01925358541" onClick={() => setOpen(false)}>Call 01925 358541</a>
          <Link href="/estimate" className="navCta" onClick={() => setOpen(false)}>Get an estimate</Link>
        </nav>
      </div>
    </header>
  );
}
