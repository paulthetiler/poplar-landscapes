"use client";

import { useMemo, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const rates = {
  "Porcelain patio": 180,
  "Natural stone patio": 165,
  "Block paving": 145,
  "Resin driveway": 125,
  "Turfing": 65,
  "Artificial grass": 95
};

export default function EstimatePage() {
  const [form, setForm] = useState({
    projectType:"Porcelain patio", area:"30", removal:"yes", access:"good",
    drainage:"no", steps:"0", name:"", phone:"", email:"", postcode:"", notes:""
  });
  const [status, setStatus] = useState("");

  const estimate = useMemo(() => {
    const area = Math.max(1, Number(form.area) || 0);
    let total = area * rates[form.projectType];
    if (form.removal === "yes") total += area * 28;
    if (form.access === "restricted") total *= 1.12;
    if (form.drainage === "yes") total += 850;
    total += Math.max(0, Number(form.steps) || 0) * 320;
    return {
      low: Math.round((total * 0.9) / 100) * 100,
      high: Math.round((total * 1.15) / 100) * 100
    };
  }, [form]);

  const update = (key) => (e) => setForm({ ...form, [key]: e.target.value });

  async function submit(e) {
    e.preventDefault();
    setStatus("Sending…");
    const response = await fetch("/api/enquiries", {
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify({ ...form, estimate })
    });
    const data = await response.json();
    setStatus(response.ok ? "Enquiry sent — reference " + data.id : data.error || "Something went wrong.");
  }

  return (
    <main className="estimatePage">
      <Header />

      <section className="estimateIntro">
        <div className="eyebrow green">Instant project estimate</div>
        <h1>Get a realistic starting range.</h1>
        <p>This is an indicative estimate based on the details you provide. Final pricing would follow review and, where needed, a site visit.</p>
      </section>

      <section className="estimatorShell">
        <form className="estimatorForm" onSubmit={submit}>
          <div className="field"><label>What are you planning?</label><select value={form.projectType} onChange={update("projectType")}>{Object.keys(rates).map(x => <option key={x}>{x}</option>)}</select></div>
          <div className="field"><label>Approximate area (m²)</label><input type="number" min="1" value={form.area} onChange={update("area")} /></div>
          <div className="twoCol">
            <div className="field"><label>Existing surface to remove?</label><select value={form.removal} onChange={update("removal")}><option value="yes">Yes</option><option value="no">No</option></select></div>
            <div className="field"><label>Site access</label><select value={form.access} onChange={update("access")}><option value="good">Good access</option><option value="restricted">Restricted access</option></select></div>
          </div>
          <div className="twoCol">
            <div className="field"><label>Drainage work likely?</label><select value={form.drainage} onChange={update("drainage")}><option value="no">No / unsure</option><option value="yes">Yes</option></select></div>
            <div className="field"><label>Steps required</label><input type="number" min="0" value={form.steps} onChange={update("steps")} /></div>
          </div>

          <div className="resultBox">
            <span>Indicative project range</span>
            <strong>£{estimate.low.toLocaleString()} – £{estimate.high.toLocaleString()}</strong>
            <small>Guide only. Materials, levels, drainage and site conditions can change the final price.</small>
          </div>

          <h2>Send this project to Poplar Landscapes</h2>
          <div className="twoCol">
            <div className="field"><label>Name</label><input required value={form.name} onChange={update("name")} /></div>
            <div className="field"><label>Phone</label><input required value={form.phone} onChange={update("phone")} /></div>
          </div>
          <div className="twoCol">
            <div className="field"><label>Email</label><input type="email" value={form.email} onChange={update("email")} /></div>
            <div className="field"><label>Postcode</label><input required value={form.postcode} onChange={update("postcode")} /></div>
          </div>
          <div className="field"><label>Anything else we should know?</label><textarea rows="5" value={form.notes} onChange={update("notes")} /></div>
          <button className="primaryButton" type="submit">Send my project →</button>
          {status && <p className="status">{status}</p>}
        </form>

        <aside className="estimatorAside">
          <h3>What happens next?</h3>
          <p>Your project details arrive as a structured enquiry rather than a vague contact-form message.</p>
          <ul><li>Project type and approximate size</li><li>Site access and removal requirements</li><li>Drainage and steps</li><li>Indicative budget range</li><li>Customer details and postcode</li></ul>
        </aside>
      </section>
      <Footer />
    </main>
  );
}
