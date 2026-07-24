// src/components/Skills.js
import React from "react";
import "./Skills.css";
import Reveal from "./Reveal";

export default function Skills({ skillGroups, skills }) {
  // Prefer grouped skills; fall back to a flat list if not provided
  const groups =
    skillGroups && skillGroups.length > 0
      ? skillGroups
      : [{ category: "Skills", skills: skills || [] }];

  return (
    <section id="skills" className="skills-section">
      <h2 className="section-title">Skills</h2>
      <div className="skills-card">
        {groups.map((group, gi) => (
          <Reveal key={group.category} delay={gi * 70} className="skills-group">
            <h4 className="skills-group-title">{group.category}</h4>
            <div className="skills-grid">
              {group.skills.map((skill) => (
                <span key={skill} className="skill-pill">
                  {skill}
                </span>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
