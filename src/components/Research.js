// src/components/Research.js
import React, { useState } from "react";
import "./Research.css";
import Reveal from "./Reveal";

const FILTERS = ["All", "Published", "Under Review", "Submitted", "In Progress"];

export default function Research({ items }) {
  const [filter, setFilter] = useState("All");

  const visible =
    filter === "All" ? items : items.filter((r) => r.status === filter);

  return (
    <section id="research" className="section">
      <h3 className="section-title">Research &amp; Publications</h3>

      <div className="research-filters">
        {FILTERS.map((f) => (
          <button
            key={f}
            className={`research-filter-btn ${filter === f ? "active" : ""}`}
            onClick={() => setFilter(f)}
            type="button"
          >
            {f}
          </button>
        ))}
      </div>

      <div className="research-grid">
        {visible.map((r, idx) => (
          <Reveal key={r.title} delay={idx * 60}>
            <article className="research-card">
              <div className="research-top">
                <span className={`status-badge status-${r.status.replace(/\s+/g, "-").toLowerCase()}`}>
                  {r.status}
                </span>
              </div>
              <h4>{r.title}</h4>
              <div className="research-venue">{r.venue}</div>
              <p>{r.desc}</p>
              {r.link && (
                <a className="research-link" href={r.link} target="_blank" rel="noreferrer">
                  View record →
                </a>
              )}
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
