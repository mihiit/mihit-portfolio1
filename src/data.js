// src/data.js
const data = {
  name: "Mihit Nanda",
  title: "Computer Science Researcher | AI & Full-Stack Engineer",
  location: "Greater Noida, India",
  intro: `Hi — I'm Mihit Nanda, a final-year Computer Science undergraduate at IILM University, Greater Noida, researching trustworthy AI, federated learning, and human-centered machine learning. Alongside research spanning healthcare AI, wireless communications, and distributed systems, I build production-grade full-stack applications with React, Node.js, and modern AI frameworks.`,
  email: "mihitnanda2005@gmail.com",
  phone: "+91-9650573743",
  socials: {
    linkedin: "https://www.linkedin.com/in/mihit-nanda",
    github: "https://github.com/mihiit",
    resume: "/_mihit_nanda.pdf"
  },

  stats: [
    { label: "GPA", value: "3.2", suffix: "/4.0" },
    { label: "Research Papers", value: "8", suffix: "+" },
    { label: "Projects Shipped", value: "6", suffix: "+" },
    { label: "Internships", value: "3", suffix: "" }
  ],

  education: {
    degree: "B.Tech. Computer Science & Engineering",
    school: "IILM University, Greater Noida, India",
    period: "Aug 2023 – May 2027 (Expected)",
    gpa: "3.2 GPA"
  },

  skillGroups: [
    {
      category: "Languages",
      skills: ["Python", "JavaScript (ES6+)", "Java", "C", "SQL"]
    },
    {
      category: "AI / Machine Learning",
      skills: ["PyTorch", "scikit-learn", "LSTM", "Transformers", "XGBoost", "FaceNet", "OpenCV", "NumPy", "Pandas"]
    },
    {
      category: "Frontend & Frameworks",
      skills: ["React.js", "Django", "HTML & CSS", "REST APIs", "Node.js", "Express.js"]
    },
    {
      category: "Blockchain",
      skills: ["Solidity", "Ethereum", "Web3.js", "Hardhat", "MetaMask", "keccak256 Commit–Reveal"]
    },
    {
      category: "Tools & Databases",
      skills: ["Git", "GitHub", "Postman", "VS Code", "MongoDB", "MongoDB Atlas"]
    }
  ],

  // kept for any component still expecting a flat list
  skills: [
    "React", "JavaScript (ES6+)", "Node.js", "Express.js", "MongoDB Atlas", "HTML & CSS",
    "REST APIs", "Git", "Python", "C", "PyTorch", "scikit-learn", "Transformers", "Solidity", "DSA"
  ],

  projects: [
    {
      title: "Blockchain Voting Platform",
      desc: "Web-based DApp where each ballot is hashed on a permissioned blockchain using a keccak256 commit–reveal scheme, preventing post-submission alteration. Includes an admin dashboard for live tally monitoring and MetaMask-integrated voter flows, validated with 14 automated unit tests.",
      tech: ["Solidity", "React", "Web3.js", "Hardhat"],
      link: "https://github.com/mihiit",
      repo: "https://github.com/mihiit"
    },
    {
      title: "Real-Time Face Recognition System",
      desc: "Live face verification pipeline using FaceNet (128-d embeddings) with cosine similarity against a SQLite identity store, processing webcam input via OpenCV. Exposed as a Flask REST endpoint with consistent verification across varied lighting conditions.",
      tech: ["Python", "FaceNet", "OpenCV", "Flask"],
      link: "https://github.com/mihiit",
      repo: "https://github.com/mihiit"
    },
    {
      title: "AI Mental Health Risk Predictor",
      desc: "XGBoost classifier trained on survey features to flag depression/anxiety risk, deployed via a Django REST API with a React frontend. Handled class imbalance with SMOTE and evaluated using F1-score and confusion matrix on a held-out validation split.",
      tech: ["Python", "XGBoost", "scikit-learn", "Django"],
      link: "https://github.com/mihiit",
      repo: "https://github.com/mihiit"
    },
    {
      title: "Mihit Nanda Portfolio App (Internship Project)",
      desc: "A full-stack web app built with React (frontend), Express.js (API) and MongoDB Atlas (database). Features authentication, CRUD, and a responsive UI.",
      tech: ["React", "Express.js", "MongoDB", "Node.js"],
      link: "https://mihitportfolio.netlify.app/",
      repo: "https://github.com/mihiit/mihit-portfolio"
    }
  ],

  experience: [
    {
      role: "Research Collaborator — Behavioral Robustness",
      company: "Texas A&M University–Kingsville (TAMUK)",
      period: "Jun 2026 – Ongoing",
      details: "Investigating the robustness and physiological consistency of temporal health prediction models under simulated clinical interventions, as part of an ongoing cross-institution research collaboration."
    },
    {
      role: "Computer Science Intern",
      company: "Steel Authority of India Ltd. (SAIL)",
      period: "Jun 2026 – Jul 2026",
      details: "Engaged in applied CS project work within one of India's largest public-sector steel enterprises, building an enterprise IT helpdesk/ticketing system with React 18, Node.js/Express, and an Oracle database backend."
    },
    {
      role: "Frontend Engineering Intern",
      company: "GSPANN Technologies",
      period: "Jun 2025 – Aug 2025",
      details: "Built reusable, hooks-based React components for an e-commerce platform, standardizing UI patterns across product listing, cart, and checkout flows. Integrated paginated REST APIs using Axios for real-time product and inventory data."
    }
  ],

  research: [
    {
      title: "AI Physiological Alignment — Behavioural Robustness",
      venue: "Ongoing Research",
      status: "In Progress",
      desc: "Investigating behavioral robustness and physiological consistency in temporal health prediction models under simulated clinical interventions.",
      link: null
    },
    {
      title: "Heterogeneity-Aware Backdoor Defense in Federated Learning",
      venue: "Ongoing Research",
      status: "In Progress",
      desc: "A theoretically grounded framework for analyzing and defending against backdoor attacks in federated learning under heterogeneous data distributions.",
      link: null
    },
    {
      title: "Memory That Remembers Wrong: Confirmation-Loop Bias in LLM Health Agents",
      venue: "AI4S Conference",
      status: "Under Review",
      desc: "A counter-evidence framework to mitigate confirmation-loop bias in LLM health agents, evaluated using MIMIC-IV clinical data.",
      link: null
    },
    {
      title: "The Faithfulness Paradox in Hate Speech Detection",
      venue: "AI4S Conference",
      status: "Under Review",
      desc: "Comparative evaluation of explanation faithfulness and energy efficiency across linear and neural hate-speech classifiers on the HateXplain dataset.",
      link: null
    },
    {
      title: "LLM Hallucination Detection Research",
      venue: "Submitted to SN Computer Science",
      status: "Submitted",
      desc: "Probed hidden states across GPT-2, TinyLlama, and Phi-2 to detect hallucinations, achieving up to 0.858 AUROC.",
      link: "https://zenodo.org"
    },
    {
      title: "VoteChain: A Decentralized Commit–Reveal Voting Framework Using Ethereum Smart Contracts",
      venue: "Indian Journal of Computer Science & Technology",
      status: "Published",
      desc: "Designed a keccak256-based commit–reveal protocol in Solidity 0.8.20 to preserve ballot secrecy, eliminating homomorphic encryption overhead. Validated with 14 automated unit tests.",
      link: null
    },
    {
      title: "Decoupling Transient Instability & Steady-State Persistence in Nonlinear Multi-Agent Networks",
      venue: "Submitted to IEEE TCNS",
      status: "Submitted",
      desc: "Built a Python simulation framework (NetworkX + NumPy) modeling influence propagation across Barabási–Albert, Watts-Strogatz, and Erdős–Rényi graph topologies.",
      link: "https://zenodo.org"
    },
    {
      title: "Energy-Efficient Fluid Antenna Arrays for AirComp",
      venue: "Submitted to IEEE WCL",
      status: "Submitted",
      desc: "A joint optimization framework for port selection and power control in fluid antenna-enabled over-the-air computation systems.",
      link: "https://zenodo.org"
    }
  ],

  certifications: [
    "Oracle Cloud Infrastructure 2025 – Generative AI Professional",
    "AWS Solutions Architecture Simulation (Forage)"
  ],

  activities: [
    {
      title: "Friends JanSewa Samiti — Volunteer",
      period: "2023 – Present",
      desc: "Health and education outreach drives in Greater Noida."
    }
  ],

  footerNote: "© Mihit Nanda — Built with React"
};

export default data;
