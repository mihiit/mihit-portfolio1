// src/components/Experience.js
import React from 'react';
import './Experience.css';
import Reveal from './Reveal';

export default function Experience({ items }) {
  return (
    <section id="experience" className="section">
      <h3 className="section-title">Experience</h3>
      <div className="experience-timeline">
        {items.map((e, idx) => (
          <Reveal key={idx} delay={idx * 80} className="exp-reveal">
            <div className="exp-item">
              <div className="exp-marker" />
              <div className="exp-body">
                <h4>
                  {e.role}{" "}
                  <span className="muted">
                    —{" "}
                    {e.link ? (
                      <a href={e.link} target="_blank" rel="noreferrer">{e.company}</a>
                    ) : (
                      e.company
                    )}
                  </span>
                </h4>
                <div className="muted exp-period">
                  {e.type && <span className="exp-type">{e.type}</span>}
                  {e.period}
                  {e.supervisor && <> • {e.supervisor}</>}
                </div>
                {Array.isArray(e.details) ? (
                  <ul className="exp-details">
                    {e.details.map((d, i) => (
                      <li key={i}>{d}</li>
                    ))}
                  </ul>
                ) : (
                  <p>{e.details}</p>
                )}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
