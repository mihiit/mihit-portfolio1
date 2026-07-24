// src/components/Certifications.js
import React from "react";
import "./Certifications.css";
import Reveal from "./Reveal";

export default function Certifications({ certifications, activities }) {
  return (
    <section id="certifications" className="section">
      <h3 className="section-title">Certifications &amp; Activities</h3>
      <div className="cert-grid">
        <Reveal>
          <div className="cert-card">
            <h4>Certifications</h4>
            <ul className="cert-list">
              {certifications.map((c) => (
                <li key={c}>
                  <span className="cert-dot" />
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <div className="cert-card">
            <h4>Activities</h4>
            <ul className="cert-list">
              {activities.map((a) => (
                <li key={a.title}>
                  <span className="cert-dot" />
                  <div>
                    <div className="activity-title">{a.title}</div>
                    <div className="activity-period">{a.period}</div>
                    <div className="activity-desc">{a.desc}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
