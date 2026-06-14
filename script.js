const GITHUB_USER = "rohanrepo123";
const LINKEDIN_URL = "https://www.linkedin.com/in/rohan-kumar/";
const GITHUB_REFRESH_MS = 60_000;

const projects = [
  {
    name: "Hired",
    category: ["rag", "nlp"],
    role: "Conversational RAG Agent",
    language: "Python",
    year: "2026",
    url: "https://github.com/rohanrepo123/Hired",
    summary:
      "Stateless FastAPI agent for SHL assessment recommendation using semantic retrieval, ChromaDB, OpenAI embeddings, Groq LLMs, clarification turns, and hallucination control.",
    tags: ["FastAPI", "LangChain", "ChromaDB", "RAG", "Groq"],
  },
  {
    name: "The Pitch Visualizer",
    category: ["rag", "nlp"],
    role: "Text-to-Storyboard Generator",
    language: "Python",
    year: "2026",
    url: "https://github.com/rohanrepo123/The-Pitch-Visualizer",
    summary:
      "Flask and LangChain app that decomposes stories into visual beats, preserves scene memory, and streams generated storyboard panels with structured parsing fallbacks.",
    tags: ["Flask", "LangChain", "OpenAI", "Pydantic", "NDJSON"],
  },
  {
    name: "LearnTube AI",
    category: ["rag", "nlp"],
    role: "YouTube Video Q&A Assistant",
    language: "Python",
    year: "2026",
    url: "https://github.com/rohanrepo123/LearnTube-AI-YouTube-Video-Q-A-Assistant-using-RAG-",
    summary:
      "RAG assistant that extracts video transcripts, builds embeddings, and turns long-form learning videos into an interactive question-answering experience.",
    tags: ["RAG", "Embeddings", "Transcript QA", "Chat UI"],
  },
  {
    name: "Giftyy for MumzWorld",
    category: ["nlp", "ml"],
    role: "Bilingual Gift Recommendation",
    language: "Python",
    year: "2026",
    url: "https://github.com/rohanrepo123/Giftyy-For-MumzWorld-",
    summary:
      "AI-powered English and Arabic gift recommendation system focused on intent understanding, product matching, and practical ecommerce personalization.",
    tags: ["Recommendation", "EN/AR", "NLP", "Personalization"],
  },
  {
    name: "AI Document Analyzer",
    category: ["rag", "nlp"],
    role: "Semantic Search Web App",
    language: "Python",
    year: "2026",
    url: "https://github.com/rohanrepo123/AI-Document-Analyzer-",
    summary:
      "Document intelligence system for PDFs, DOCX, and images with OCR, summarization, NER, keyword extraction, sentiment analysis, and FAISS semantic search.",
    tags: ["Flask", "FAISS", "OCR", "NER", "KeyBERT"],
  },
  {
    name: "AI Tutor Transformer Based",
    category: ["nlp", "ml"],
    role: "Distributed Intelligent Tutoring",
    language: "Jupyter Notebook",
    year: "2026",
    url: "https://github.com/rohanrepo123/AI-Tutor-Transformer-Based-",
    summary:
      "Microservice-oriented tutoring system for intent detection, topic classification, learning-style prediction, and adaptive response generation.",
    tags: ["FastAPI", "TensorFlow", "SBERT", "Word2Vec", "Microservices"],
  },
  {
    name: "Civic Complaint Prioritization",
    category: ["nlp", "ml"],
    role: "Multilingual Grievance Triage",
    language: "Jupyter Notebook",
    year: "2026",
    url: "https://github.com/rohanrepo123/Civic-Complaint-Prioritization-a-NLP-approach",
    summary:
      "NLP benchmarking pipeline for citizen complaints using multilingual transformers, category classification, urgency prediction, and explainability tooling.",
    tags: ["IndicBERT", "XLM-R", "XGBoost", "SHAP", "LIME"],
  },
  {
    name: "Face Blurring New Approach",
    category: ["cv"],
    role: "Real-time Privacy Masking",
    language: "Jupyter Notebook",
    year: "2026",
    url: "https://github.com/rohanrepo123/Face_Blurring-New_approach",
    summary:
      "OpenCV and MTCNN face masking system with facial landmark detection, head pose estimation, and adaptive masks optimized for live webcam privacy.",
    tags: ["OpenCV", "MTCNN", "Landmarks", "Head Pose", "Realtime"],
  },
  {
    name: "YOLO Object Detection",
    category: ["cv"],
    role: "Object Detection Pipeline",
    language: "Jupyter Notebook",
    year: "2026",
    url: "https://github.com/rohanrepo123/Yolo_Object_Detection",
    summary:
      "Complete YOLOv5 object detection workflow using PyTorch, covering model setup, inference, visual detection output, and CV experimentation.",
    tags: ["YOLOv5", "PyTorch", "Computer Vision", "Detection"],
  },
  {
    name: "Dark Horse ClaudeSolvathon",
    category: ["rag", "nlp"],
    role: "Research Search Engine",
    language: "Jupyter Notebook",
    year: "2025",
    url: "https://github.com/rohanrepo123/Dark_Horse_ClaudeSolvathon",
    summary:
      "Hackathon RAG search system for dark matter research data, recognized with a 4th-place finish at ClaudeSolvathon IIIT Nagpur.",
    tags: ["RAG", "Research Search", "Claude", "Hackathon"],
  },
];

const typewriterPhrases = [
  "Designing retrieval systems...",
  "Fine-tuning transformer pipelines...",
  "Shipping FastAPI model services...",
  "Reconstructing MRI k-space...",
  "Grounding agents in real data...",
];

const projectGrid = document.querySelector("#project-grid");
const filterButtons = document.querySelectorAll(".filter-button");
const typewriter = document.querySelector("#typewriter");
const cursorGlow = document.querySelector(".cursor-glow");
const repoCount = document.querySelector("#repo-count");
const latestUpdate = document.querySelector("#latest-update");
const changedCount = document.querySelector("#changed-count");
const trackerStatus = document.querySelector("#tracker-status");
const trackerList = document.querySelector("#tracker-list");
const repoSnapshotKey = `github-repo-snapshot:${GITHUB_USER}`;

function renderProjects(filter = "all") {
  const filtered = filter === "all" ? projects : projects.filter((project) => project.category.includes(filter));
  projectGrid.innerHTML = filtered
    .map(
      (project, index) => `
        <article class="project-card reveal visible" style="transition-delay: ${Math.min(index * 45, 280)}ms">
          <div class="project-topline">
            <span>${project.role}</span>
            <span>${project.year} / ${project.language}</span>
          </div>
          <h3>${project.name}</h3>
          <p>${project.summary}</p>
          <div class="project-tags">
            ${project.tags.map((tag) => `<span>${tag}</span>`).join("")}
          </div>
          <div class="project-links">
            <a class="project-link" href="${project.url}" target="_blank" rel="noreferrer">Open repository</a>
          </div>
        </article>
      `,
    )
    .join("");
}

function setupLinkedInLinks() {
  document.querySelectorAll(".linkedin-link").forEach((link) => {
    link.href = LINKEDIN_URL;
  });
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    renderProjects(button.dataset.filter);
  });
});

function runTypewriter() {
  let phraseIndex = 0;
  let charIndex = 0;
  let deleting = false;

  const tick = () => {
    const phrase = typewriterPhrases[phraseIndex];
    typewriter.textContent = phrase.slice(0, charIndex);

    if (!deleting && charIndex < phrase.length) {
      charIndex += 1;
      setTimeout(tick, 42);
      return;
    }

    if (!deleting && charIndex === phrase.length) {
      deleting = true;
      setTimeout(tick, 1200);
      return;
    }

    if (deleting && charIndex > 0) {
      charIndex -= 1;
      setTimeout(tick, 24);
      return;
    }

    deleting = false;
    phraseIndex = (phraseIndex + 1) % typewriterPhrases.length;
    setTimeout(tick, 220);
  };

  tick();
}

function setupReveal() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 },
  );

  document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
}

function setupCursorGlow() {
  window.addEventListener("pointermove", (event) => {
    cursorGlow.style.transform = `translate(${event.clientX - 240}px, ${event.clientY - 240}px)`;
  });
}

function setupNeuralCanvas() {
  const canvas = document.querySelector("#neural-canvas");
  const context = canvas.getContext("2d");
  const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
  const particles = [];
  let width = 0;
  let height = 0;
  let rafId = 0;

  const colors = ["rgba(110, 231, 249, 0.78)", "rgba(142, 243, 180, 0.72)", "rgba(255, 155, 133, 0.66)"];

  function resize() {
    const ratio = window.devicePixelRatio || 1;
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width * ratio;
    canvas.height = height * ratio;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    context.setTransform(ratio, 0, 0, ratio, 0, 0);

    const count = Math.min(72, Math.max(32, Math.floor(width / 18)));
    particles.length = 0;
    for (let index = 0; index < count; index += 1) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.42,
        vy: (Math.random() - 0.5) * 0.42,
        radius: 1.2 + Math.random() * 2.2,
        color: colors[index % colors.length],
      });
    }
  }

  function draw() {
    context.clearRect(0, 0, width, height);

    particles.forEach((particle, index) => {
      particle.x += particle.vx;
      particle.y += particle.vy;

      if (particle.x < -20) particle.x = width + 20;
      if (particle.x > width + 20) particle.x = -20;
      if (particle.y < -20) particle.y = height + 20;
      if (particle.y > height + 20) particle.y = -20;

      for (let nextIndex = index + 1; nextIndex < particles.length; nextIndex += 1) {
        const next = particles[nextIndex];
        const dx = particle.x - next.x;
        const dy = particle.y - next.y;
        const distance = Math.hypot(dx, dy);
        if (distance < 145) {
          context.strokeStyle = `rgba(159, 176, 170, ${0.18 * (1 - distance / 145)})`;
          context.lineWidth = 1;
          context.beginPath();
          context.moveTo(particle.x, particle.y);
          context.lineTo(next.x, next.y);
          context.stroke();
        }
      }

      context.fillStyle = particle.color;
      context.beginPath();
      context.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
      context.fill();
    });

    rafId = window.requestAnimationFrame(draw);
  }

  resize();
  window.addEventListener("resize", resize);

  if (!motionQuery.matches) {
    draw();
  } else {
    context.fillStyle = "rgba(110, 231, 249, 0.3)";
    particles.forEach((particle) => context.fillRect(particle.x, particle.y, 2, 2));
  }

  window.addEventListener("beforeunload", () => window.cancelAnimationFrame(rafId));
}

function formatRelativeTime(dateInput) {
  const date = new Date(dateInput);
  const seconds = Math.max(1, Math.round((Date.now() - date.getTime()) / 1000));
  const units = [
    ["year", 31_536_000],
    ["month", 2_592_000],
    ["day", 86_400],
    ["hour", 3_600],
    ["minute", 60],
  ];

  for (const [unit, value] of units) {
    const count = Math.floor(seconds / value);
    if (count >= 1) {
      return `${count} ${unit}${count === 1 ? "" : "s"} ago`;
    }
  }

  return "just now";
}

function getStoredSnapshot() {
  try {
    return JSON.parse(localStorage.getItem(repoSnapshotKey) || "{}");
  } catch {
    return {};
  }
}

function storeSnapshot(repos) {
  const snapshot = Object.fromEntries(repos.map((repo) => [repo.name, repo.pushed_at]));
  localStorage.setItem(repoSnapshotKey, JSON.stringify(snapshot));
}

function renderTracker(repos) {
  const previousSnapshot = getStoredSnapshot();
  const sortedRepos = [...repos].sort((first, second) => new Date(second.pushed_at) - new Date(first.pushed_at));
  const changedRepos = sortedRepos.filter((repo) => previousSnapshot[repo.name] && previousSnapshot[repo.name] !== repo.pushed_at);
  const latestRepo = sortedRepos[0];

  repoCount.textContent = String(sortedRepos.length);
  latestUpdate.textContent = latestRepo ? formatRelativeTime(latestRepo.pushed_at) : "--";
  changedCount.textContent = String(changedRepos.length);
  trackerStatus.textContent = `Last synced ${new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  })}. Refreshes every ${Math.round(GITHUB_REFRESH_MS / 1000)} seconds.`;

  trackerList.innerHTML = sortedRepos
    .slice(0, 5)
    .map((repo) => {
      const changed = changedRepos.some((item) => item.name === repo.name);
      return `
        <a class="tracker-item ${changed ? "changed" : ""}" href="${repo.html_url}" target="_blank" rel="noreferrer">
          <span>
            <strong>${repo.name}</strong>
            <small>${repo.language || "Mixed"} / pushed ${formatRelativeTime(repo.pushed_at)}</small>
          </span>
          <em>${changed ? "Updated" : "Open"}</em>
        </a>
      `;
    })
    .join("");

  storeSnapshot(sortedRepos);
}

async function fetchGitHubRepos() {
  const response = await fetch(`https://api.github.com/users/${GITHUB_USER}/repos?per_page=100&sort=pushed`, {
    headers: { Accept: "application/vnd.github+json" },
  });

  if (!response.ok) {
    throw new Error(`GitHub API returned ${response.status}`);
  }

  return response.json();
}

async function updateGitHubTracker() {
  try {
    const repos = await fetchGitHubRepos();
    renderTracker(repos);
  } catch (error) {
    trackerStatus.textContent =
      "GitHub tracking is temporarily unavailable. The project cards still use the last curated portfolio data.";
    trackerList.innerHTML = "";
    console.warn(error);
  }
}

function setupGitHubTracker() {
  updateGitHubTracker();
  window.setInterval(updateGitHubTracker, GITHUB_REFRESH_MS);
}

setupLinkedInLinks();
renderProjects();
setupReveal();
setupCursorGlow();
setupNeuralCanvas();
setupGitHubTracker();
runTypewriter();
