"use client";
import { useEffect, useRef, useState } from "react";

export default function Motion({ children, from="up", delay=0, className="" }) {
  const ref = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setShow(true);
        observer.unobserve(node);
      }
    }, { threshold: 0.16, rootMargin: "0px 0px -8% 0px" });
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`motion motion-${from} ${show ? "motion-in" : ""} ${className}`} style={{transitionDelay:`${delay}ms`}}>
      {children}
    </div>
  );
}
