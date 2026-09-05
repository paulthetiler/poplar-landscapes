"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function AdminPage() {
  const [items,setItems]=useState([]);
  const [loading,setLoading]=useState(true);

  useEffect(() => {
    fetch("/api/enquiries")
      .then(r => r.json())
      .then(data => setItems(data.enquiries || []))
      .finally(() => setLoading(false));
  }, []);

  return (
    <main className="adminPage">
      <header className="siteHeader">
        <div className="brand"><div className="leaf">◒</div><div><strong>POPLAR</strong><span>LANDSCAPES N.W. LTD</span></div></div>
        <Link href="/">View website</Link>
      </header>
      <section className="adminWrap">
        <div className="eyebrow green">Simple backend</div>
        <h1>Estimator enquiries</h1>
        <p className="adminLead">A deliberately lightweight inbox for the concept. Latest enquiries appear first.</p>
        {loading ? <p>Loading…</p> : items.length === 0 ? (
          <div className="emptyState">No enquiries yet. Submit one through the estimator and it will appear here.</div>
        ) : (
          <div className="enquiryList">
            {items.map(item => (
              <article className="enquiryItem" key={item.id}>
                <div className="enquiryTop">
                  <div><strong>{item.name}</strong><span>{item.projectType} · {item.area}m² · {item.postcode}</span></div>
                  <div className="enquiryPrice">£{Number(item.estimate?.low || 0).toLocaleString()} – £{Number(item.estimate?.high || 0).toLocaleString()}</div>
                </div>
                <div className="enquiryMeta">
                  <span>{item.phone}</span><span>{item.email || "No email"}</span><span>Access: {item.access}</span><span>Removal: {item.removal}</span>
                </div>
                {item.notes ? <p>{item.notes}</p> : null}
                <small>{item.id} · {new Date(item.createdAt).toLocaleString()}</small>
              </article>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
