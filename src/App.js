// src/App.js
import React, { useState } from "react";
import data from "./data";

import NavBar from "./components/NavBars";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Research from "./components/Research";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WelcomeScreen from "./components/WelcomeScreen";
import ScrollExtras from "./components/ScrollExtras";

import "./styles.css";

function App() {
  const [showWelcome, setShowWelcome] = useState(true);

  function handleWelcomeDone() {
    setShowWelcome(false);
  }

  return (
    <div className="app">
      {/* Main site is always rendered under the welcome overlay */}
      <NavBar />
      <main className="container app-main">
        <Hero data={data} />
        <About intro={data.intro} location={data.location} stats={data.stats} education={data.education} />
        <Skills skillGroups={data.skillGroups} skills={data.skills} />
        <Experience items={data.experience} />
        <Research items={data.research} />
        <Projects projects={data.projects} />
        <Certifications certifications={data.certifications} activities={data.activities} />
        <Contact email={data.email} socials={data.socials} />
      </main>
      <Footer note={data.footerNote} />

      {/* Cinematic overlay */}
      {showWelcome && <WelcomeScreen onEnter={handleWelcomeDone} />}

      {/* Interactive scroll helpers */}
      <ScrollExtras />
    </div>
  );
}

export default App;



