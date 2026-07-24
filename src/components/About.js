// src/components/About.js
import React, { useEffect, useRef, useState } from "react";
import "./About.css";

function Counter({ value, suffix = "" }) {
  const ref = useRef(null);
  const [count, setCount] = useState(0);
  const numericTarget = parseFloat(value);
  const isNumeric = !isNaN(numericTarget);
  const isDecimal = isNumeric && String(value).includes(".");

  useEffect(() => {
    const node = ref.current;
    if (!node || !isNumeric) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const duration = 900;
            const start = performance.now();
            function tick(now) {
              const progress = Math.min((now - start) / duration, 1);
              const eased = 1 - Math.pow(1 - progress, 3);
              setCount(numericTarget * eased);
              if (progress < 1) requestAnimationFrame(tick);
              else setCount(numericTarget);
            }
            requestAnimationFrame(tick);
            observer.unobserve(node);
          }
        });
      },
      { threshold: 0.4 }
    );

    observer.observe(node);
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  const display = isNumeric
    ? isDecimal
      ? count.toFixed(1)
      : Math.round(count)
    : value;

  return (
    <span ref={ref} className="stat-value">
      {display}
      {suffix}
    </span>
  );
}

export default function About({ stats, education }) {
  return (
    <section id="about" className="about-section">
      <div className="about-card">
        <h2 className="section-title">About</h2>

        <p className="about-text">
          I'm a final-year Computer Science student at IILM University, Greater Noida,
          with a strong research focus on <strong>trustworthy AI</strong>,{" "}
          <strong>federated learning</strong>, and <strong>human-centered machine learning</strong>,
          alongside hands-on <strong>software development</strong>.
        </p>

        <p className="about-text">
          My research spans healthcare AI, distributed systems, and wireless communications —
          from confirmation-loop bias in LLM health agents to backdoor defenses in federated
          learning and energy-efficient fluid antenna arrays, with work published, submitted, or
          under review at venues including AI4S, IEEE TCNS, and IEEE WCL.
        </p>

        <p className="about-text">
          On the engineering side, I've interned as a <strong>Frontend Engineer at GSPANN
          Technologies</strong>, worked on applied CS projects at <strong>SAIL</strong>, and I'm
          currently collaborating with <strong>Texas A&amp;M University–Kingsville</strong> on the
          robustness of temporal health prediction models.
        </p>

        <p className="about-text">
          Beyond academics and research, I enjoy contributing to community service initiatives
          and believe in using technology as a tool for social impact. I'm eager to keep
          building meaningful projects and pushing forward reliable, interpretable AI.
        </p>

        {education && (
          <div className="about-education">
            <div className="edu-degree">{education.degree}</div>
            <div className="edu-school">{education.school}</div>
            <div className="edu-meta">
              {education.period} • {education.gpa}
            </div>
          </div>
        )}

        {stats && stats.length > 0 && (
          <div className="stats-row">
            {stats.map((s) => (
              <div className="stat-item" key={s.label}>
                <Counter value={s.value} suffix={s.suffix} />
                <span className="stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
