// src/components/About.js
import React, { useEffect, useRef, useState } from "react";
import "./About.css";

function Counter({ value, suffix = "" }) {
  const ref = useRef(null);
  const [count, setCount] = useState(0);
  const numericTarget = parseFloat(value);
  const isNumeric = !isNaN(numericTarget);
  const decimals = isNumeric && String(value).includes(".")
    ? String(value).split(".")[1].length
    : 0;

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
    ? decimals > 0
      ? count.toFixed(decimals)
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
          I'm a Computer Science undergraduate at IILM University, India, working on{" "}
          <strong>trustworthy and secure AI</strong>. I've authored{" "}
          <strong>9 manuscripts (5 accepted, 4 under review)</strong>, with research spanning{" "}
          <strong>federated learning robustness</strong>, <strong>internal-state probing for LLM
          reliability</strong>, hallucination detection, memory and evidence retrieval in AI agents,
          and reliable decision-making under distribution shift.
        </p>

        <p className="about-text">
          I'm especially interested in developing rigorous evaluation methods and diagnostics that
          establish when internal signals can be trusted and acted upon — particularly in
          safety-critical AI systems. My work favours pre-specified hypotheses, leakage-controlled
          benchmarks, and honest reporting of negative results.
        </p>

        <p className="about-text">
          I've been a <strong>Research Intern at Sharda University</strong> (ProbeGuard, accepted at
          IEEE ICTACS) and a <strong>Research Collaborator with Texas A&amp;M University–Kingsville</strong>{" "}
          (two AI4S papers). On the industry side, I'm building <strong>FedGuard</strong>, a
          federated threat-detection platform, and have interned at <strong>SAIL</strong> and{" "}
          <strong>GSPANN Technologies</strong>.
        </p>

        <p className="about-text">
          Outside research, I led the AI/ML Club at IILM University and volunteer with Friends
          JanSewa Samiti on health and education outreach drives in Greater Noida.
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
