// src/data.js
const data = {
  name: "Mihit Nanda",
  title: "Trustworthy & Secure AI Researcher | Federated Learning · LLM Reliability",
  location: "Greater Noida, India",
  intro: `Hi — I'm Mihit Nanda, a Computer Science undergraduate at IILM University and the author of 9 manuscripts (5 accepted, 4 under review) in trustworthy and secure AI. My research spans federated learning robustness, internal-state probing for LLM reliability, hallucination detection, and memory and evidence retrieval in AI agents — with a focus on rigorous evaluation methods that establish when internal signals can be trusted in safety-critical systems.`,
  email: "mihitnanda2005@gmail.com",
  phone: "+91-9650573743",
  socials: {
    linkedin: "https://www.linkedin.com/in/mihit-nanda",
    github: "https://github.com/mihiit",
    resume: "/Mihit_Nanda_CV.pdf"
  },

  stats: [
    { label: "CGPA", value: "7.81", suffix: "/10" },
    { label: "Manuscripts", value: "9", suffix: "" },
    { label: "Accepted / Published", value: "5", suffix: "" },
    { label: "TOEFL iBT", value: "100", suffix: "" }
  ],

  education: {
    degree: "B.Tech. in Computer Science",
    school: "IILM University, India",
    period: "Aug 2023 – May 2027 (Expected)",
    gpa: "CGPA 7.81/10 • TOEFL iBT 100"
  },

  skillGroups: [
    {
      category: "Machine Learning & Systems",
      skills: [
        "Federated Learning",
        "Distributed Training",
        "Adversarial Robustness",
        "Model Interpretability",
        "LLM Hidden-State Probing",
        "Retrieval & Agent Memory"
      ]
    },
    {
      category: "Research Methods",
      skills: [
        "Pre-specified Hypotheses & Test Sets",
        "Leakage/Length-Controlled Evaluation",
        "Signal-vs-Decision-Rule Analysis",
        "Adaptive (Probe-Aware) Attacker Evaluation",
        "Held-out Seed/Repository Generalisation",
        "Statistical Testing (Holm Correction)",
        "AUROC & Calibration",
        "Negative-Result Reporting",
        "Reproducible Code Release"
      ]
    },
    {
      category: "ML / DL Frameworks",
      skills: ["PyTorch", "scikit-learn", "Transformers", "LSTM", "XGBoost", "NumPy", "Pandas"]
    },
    {
      category: "Theory & Analysis",
      skills: ["Formal/Theoretical Proofs", "Statistical Hypothesis Testing", "Network Science"]
    },
    {
      category: "Programming",
      skills: ["Python", "JavaScript", "Java", "C"]
    },
    {
      category: "Blockchain",
      skills: ["Solidity", "Ethereum", "Web3.js", "Hardhat"]
    },
    {
      category: "Tools",
      skills: ["Git", "GitHub", "SQL", "MongoDB", "VS Code", "Postman"]
    },
    {
      category: "Human Languages",
      skills: ["Hindi (mother tongue)", "English (fluent)", "German (4 years, high school elective)"]
    }
  ],

  // kept for any component still expecting a flat list
  skills: [
    "Python", "PyTorch", "Transformers", "scikit-learn", "Federated Learning",
    "Adversarial Robustness", "LLM Hidden-State Probing", "JavaScript", "Java", "C",
    "Solidity", "Git", "SQL", "MongoDB"
  ],

  projects: [
    {
      title: "Reliability Lab: Early Warning Detection of LLM Reliability Failures",
      desc: "Tests whether hidden-state dynamics give an early warning of unreliable LLM output: labels failure onset on factual and math tasks and compares a trajectory model (logistic regression, random forest) against baselines. Evaluated by lead time, false-assurance rate and calibration; validated end-to-end on Qwen2.5-0.5B-Instruct. Built at Sustain-A-Thon 2.0, mentored by Dr. Sanju Tiwari.",
      tech: ["PyTorch", "Transformers", "FastAPI", "Next.js"],
      repo: "https://github.com/mihiit"
    },
    {
      title: "EmemoVeri: Repository Memory for Coding Agents",
      desc: "Evidence-ledger memory for coding agents that tracks repository state changes (deletions, renames, reverts), with a leakage-controlled benchmark built from real git history. EmemoVeri-2 beats snapshot retrieval by 0.132 Hit@5 on 16 held-out repositories (5,832 tasks). Benchmark, code, tests, and results released.",
      tech: ["Python", "Git mining", "Retrieval"],
      repo: "https://github.com/mihiit"
    },
    {
      title: "VoteChain: Secure Decentralized E-Voting DApp",
      desc: "Commit–reveal voting on a permissioned blockchain: keccak256 ballot hashing keeps votes secret until reveal. Solidity contract logic covered by 14 unit tests, with an admin dashboard for live tally monitoring and MetaMask-integrated voter flows.",
      tech: ["Python", "Solidity", "React", "Web3.js"],
      repo: "https://github.com/mihiit"
    },
    {
      title: "NeuroBalance: AI Mental Health Risk Assessment",
      desc: "XGBoost classifier on survey features that flags depression and anxiety risk indicators, served through a Django REST API with a React frontend.",
      tech: ["Python", "XGBoost", "Django", "React"],
      repo: "https://github.com/mihiit"
    }
  ],

  experience: [
    {
      role: "Research Intern — Backdoor Detection in Federated Learning (ProbeGuard)",
      company: "Sharda University, Greater Noida",
      supervisor: "Supervised by Dr. Sanju Tiwari",
      period: "Sep 2026 – Dec 2026",
      type: "Research",
      details: [
        "Developed ProbeGuard, a behavioural trigger-probing defence against federated backdoors; showed that a fixed-threshold rule collapses under data heterogeneity while a rank-based decision rule recovers most of the gap to an oracle (accepted at IEEE ICTACS, presentation 3–4 Dec 2026).",
        "Carried out the matched-information study of hidden-rule discovery by hypothesis-testing, Bayesian and learned agents (Is It the Beliefs?) under the same supervision; also accepted at IEEE ICTACS."
      ]
    },
    {
      role: "Research Collaborator — AI4S Conference Papers",
      company: "Texas A&M University–Kingsville",
      supervisor: "Supervisor: Dr. Ayush Goyal",
      period: "Jul 2026 – Aug 2026",
      type: "Research",
      details: [
        "Co-authored two AI4S Conference papers with Dr. Ayush Goyal and Hannah Nagpall: confirmation-loop bias in LLM health agents (Memory That Remembers Wrong) and explanation faithfulness in hate-speech classifiers (The Faithfulness Paradox, first author)."
      ]
    },
    {
      role: "Founder",
      company: "FedGuard",
      link: "https://www.fedguard.in/",
      period: "Ongoing (prototype stage)",
      type: "Industry",
      details: [
        "Prototype under development (idea formulated, website live): a federated-learning platform for multiple organizations to jointly train threat-detection models via encrypted local updates, keeping raw security, customer, and PII data on-premise."
      ]
    },
    {
      role: "Computer Science Intern",
      company: "Steel Authority of India Ltd. (SAIL)",
      period: "Jun 2026 – Jul 2026",
      type: "Industry",
      details: [
        "Developed an internal IT service management portal for employees to submit, manage, and track IT issues through a centralized help-desk system."
      ]
    },
    {
      role: "Frontend Engineering Intern",
      company: "GSPANN Technologies, Inc.",
      period: "Jun 2025 – Aug 2025",
      type: "Industry",
      details: [
        "Worked on one of the company's client projects, Sephora, taking care of frontend tasks, and took part in team idea-sharing sessions."
      ]
    }
  ],

  research: [
    // ---- Accepted / Published ----
    {
      title: "Score Quality Versus Decision Quality: Why Behavioural Trigger Probing for Federated Backdoors Fails Under Heterogeneity, and When a Different Decision Rule Recovers It (ProbeGuard)",
      venue: "IEEE ICTACS Conference — presentation 3–4 Dec 2026",
      authors: "Mihit Nanda (first author), Dr. Sanju Tiwari",
      status: "Accepted",
      desc: "Showed that a behavioural backdoor score stays informative (late-round AUROC ≥ 0.95 for Dirichlet α ≥ 0.5) while a fixed MAD threshold collapses under heterogeneity (TPR 0.0 at α=0.1 vs. 0.94 at α=10). A rank-based decision rule recovers most of the gap to an oracle threshold, tested on unseen seeds, a probe-aware adaptive attacker, and a CNN/CIFAR-10 stress test.",
      link: "https://doi.org/10.5281/zenodo.23447483"
    },
    {
      title: "Is It the Beliefs? A Matched-Information Study of Hidden-Rule Discovery by Hypothesis-Testing, Bayesian and Learned Agents",
      venue: "IEEE ICTACS Conference — presentation 3–4 Dec 2026",
      authors: "Mihit Nanda (first author), Dr. Sanju Tiwari",
      status: "Accepted",
      desc: "A belief-augmented learned agent matches the hypothesis tracker (Δ = −0.001), while a plain Macro-GRU trails by 0.186.",
      link: "https://doi.org/10.5281/zenodo.23755359"
    },
    {
      title: "Memory That Remembers Wrong: Confirmation-Loop Bias in LLM Health Agents",
      venue: "AI4S Conference — Oct 2026",
      authors: "Mihit Nanda (co-author), Hannah Nagpall, Dr. Ayush Goyal",
      status: "Accepted",
      desc: "Counter-evidence framework that mitigates confirmation-loop bias in LLM health agents, evaluated on MIMIC-IV clinical data.",
      link: null
    },
    {
      title: "The Faithfulness Paradox in Hate Speech Detection",
      venue: "AI4S Conference — Oct 2026",
      authors: "Mihit Nanda (first author), Hannah Nagpall, Dr. Ayush Goyal",
      status: "Accepted",
      desc: "Comparative evaluation of explanation faithfulness and energy efficiency across linear and neural hate-speech classifiers.",
      link: null
    },
    {
      title: "VoteChain: Decentralized Commit–Reveal Voting Using Ethereum Smart Contracts",
      venue: "Indian Journal of Computer Science & Technology (INDJCST)",
      authors: "Mihit Nanda (first author)",
      status: "Published",
      desc: "Keccak256-based commit–reveal protocol in Solidity that preserves ballot secrecy without homomorphic-encryption overhead; validated with 14 automated unit tests.",
      link: null
    },

    // ---- Under Review ----
    {
      title: "Retrieving Over Evidence Items: Repository Memory for Coding Agents, Evaluated on Real Git History (EmemoVeri)",
      venue: "IEEE ESCI Conference",
      authors: "Mihit Nanda (first author), Ms. Priyanka Tyagi",
      status: "Under Review",
      desc: "Leakage-controlled benchmark replaying real git history across repositories in five languages. The redesigned evidence-ledger retrieval (EmemoVeri-2) beats snapshot retrieval by 0.132 Hit@5 on 16 never-used repositories (5,832 tasks; 15 of 16 repositories, Holm p < 0.001).",
      link: "https://doi.org/10.5281/zenodo.23447572"
    },
    {
      title: "Heterogeneity-Dependent Backdoor Defence Collapse in Federated Learning: Formal Analysis, Novel Defences, and a Four-Dataset Cross-Benchmark Study",
      venue: "Journal of Computer Virology and Hacking Techniques (Springer)",
      authors: "Mihit Nanda (first author)",
      status: "Under Review",
      desc: "Identified a consensus-contamination flaw in GradSplit and proved a direction-normalisation correction; introduced DualGuard, a two-stage defence that held attack success rate to 0.99% (A3FL) and 3.30% (RMC) on Digits vs. 46.60% and 18.21% for GradSplit, across four benchmarks (805K samples).",
      link: "https://doi.org/10.5281/zenodo.21525311"
    },
    {
      title: "Hallucination Detection via Linear Probes across GPT-2, TinyLlama, and Phi-2",
      venue: "SN Computer Science (Springer)",
      authors: "Mihit Nanda (first author)",
      status: "Under Review",
      desc: "Linear probes on hidden states across three LLMs, reaching up to 0.858 AUROC in hallucination detection.",
      link: "https://doi.org/10.5281/zenodo.21334079"
    },
    {
      title: "Hidden-State Trajectory Features for LLM Hallucination Detection: A Length-Controlled Evaluation Against Static Probes",
      venue: "IEEE ESCI Conference",
      authors: "Mihit Nanda (first author), Ms. Priyanka Tyagi",
      status: "Under Review",
      desc: "Pre-specified 900-question test: trajectory features did not beat a tuned static probe (AUROC 0.732 vs. 0.753) — a reported negative result.",
      link: "https://doi.org/10.5281/zenodo.23755550"
    }
  ],

  certifications: [
    "Probabilistic Graphical Models Specialization — Stanford University (Coursera)",
    "Mathematics for Machine Learning Specialization — Imperial College London (Coursera)",
    "Python for Everybody Specialization — University of Michigan (Coursera)",
    "Data Structures using Python — UC San Diego (Coursera)",
    "Oracle Cloud Infrastructure 2025 — Generative AI Professional"
  ],

  activities: [
    {
      title: "Head, AI/ML Club — IILM University",
      period: "2024 – 2025",
      desc: "Led the university's AI/ML student club, organizing technical sessions and peer learning initiatives."
    },
    {
      title: "Participant, Sustain-A-Thon 2.0 — Sharda University",
      period: "Oct 2026",
      desc: "Built Reliability Lab under the mentorship of Dr. Sanju Tiwari."
    },
    {
      title: "IILM Tech Fest",
      period: "Awards",
      desc: "1st Prize, Technical Drama Competition; Top 5, Technical Debate Competition."
    },
    {
      title: "Friends JanSewa Samiti — Volunteer",
      period: "2023 – Present",
      desc: "Health and education outreach drives in Greater Noida."
    }
  ],

  footerNote: "© Mihit Nanda — Built with React"
};

export default data;
