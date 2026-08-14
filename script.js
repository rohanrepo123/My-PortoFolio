const GITHUB_USER = "rohanrepo123";
const LINKEDIN_URL = "https://www.linkedin.com/in/rohan-kumar2027/";
const GITHUB_REFRESH_MS = 60_000;

// const projects = [
//   {
//     name: "Hired",
//     category: ["rag", "nlp"],
//     role: "Conversational RAG Agent",
//     language: "Python",
//     year: "2026",
//     url: "https://github.com/rohanrepo123/Hired",
//     summary:
//       "Stateless FastAPI agent for SHL assessment recommendation using semantic retrieval, ChromaDB, OpenAI embeddings, Groq LLMs, clarification turns, and hallucination control.",
//     tags: ["FastAPI", "LangChain", "ChromaDB", "RAG", "Groq"],
//   },
//   {
//     name: "The Pitch Visualizer",
//     category: ["rag", "nlp"],
//     role: "Text-to-Storyboard Generator",
//     language: "Python",
//     year: "2026",
//     url: "https://github.com/rohanrepo123/The-Pitch-Visualizer",
//     summary:
//       "Flask and LangChain app that decomposes stories into visual beats, preserves scene memory, and streams generated storyboard panels with structured parsing fallbacks.",
//     tags: ["Flask", "LangChain", "OpenAI", "Pydantic", "NDJSON"],
//   },
//   {
//     name: "LearnTube AI",
//     category: ["rag", "nlp"],
//     role: "YouTube Video Q&A Assistant",
//     language: "Python",
//     year: "2026",
//     url: "https://github.com/rohanrepo123/LearnTube-AI-YouTube-Video-Q-A-Assistant-using-RAG-",
//     summary:
//       "RAG assistant that extracts video transcripts, builds embeddings, and turns long-form learning videos into an interactive question-answering experience.",
//     tags: ["RAG", "Embeddings", "Transcript QA", "Chat UI"],
//   },
//   {
//     name: "Giftyy for MumzWorld",
//     category: ["nlp", "ml"],
//     role: "Bilingual Gift Recommendation",
//     language: "Python",
//     year: "2026",
//     url: "https://github.com/rohanrepo123/Giftyy-For-MumzWorld-",
//     summary:
//       "AI-powered English and Arabic gift recommendation system focused on intent understanding, product matching, and practical ecommerce personalization.",
//     tags: ["Recommendation", "EN/AR", "NLP", "Personalization"],
//   },
//   {
//     name: "AI Document Analyzer",
//     category: ["rag", "nlp"],
//     role: "Semantic Search Web App",
//     language: "Python",
//     year: "2026",
//     url: "https://github.com/rohanrepo123/AI-Document-Analyzer-",
//     summary:
//       "Document intelligence system for PDFs, DOCX, and images with OCR, summarization, NER, keyword extraction, sentiment analysis, and FAISS semantic search.",
//     tags: ["Flask", "FAISS", "OCR", "NER", "KeyBERT"],
//   },
//   {
//     name: "AI Tutor Transformer Based",
//     category: ["nlp", "ml"],
//     role: "Distributed Intelligent Tutoring",
//     language: "Jupyter Notebook",
//     year: "2026",
//     url: "https://github.com/rohanrepo123/AI-Tutor-Transformer-Based-",
//     summary:
//       "Microservice-oriented tutoring system for intent detection, topic classification, learning-style prediction, and adaptive response generation.",
//     tags: ["FastAPI", "TensorFlow", "SBERT", "Word2Vec", "Microservices"],
//   },
//   {
//     name: "Civic Complaint Prioritization",
//     category: ["nlp", "ml"],
//     role: "Multilingual Grievance Triage",
//     language: "Jupyter Notebook",
//     year: "2026",
//     url: "https://github.com/rohanrepo123/Civic-Complaint-Prioritization-a-NLP-approach",
//     summary:
//       "NLP benchmarking pipeline for citizen complaints using multilingual transformers, category classification, urgency prediction, and explainability tooling.",
//     tags: ["IndicBERT", "XLM-R", "XGBoost", "SHAP", "LIME"],
//   },
//   {
//     name: "Face Blurring New Approach",
//     category: ["cv"],
//     role: "Real-time Privacy Masking",
//     language: "Jupyter Notebook",
//     year: "2026",
//     url: "https://github.com/rohanrepo123/Face_Blurring-New_approach",
//     summary:
//       "OpenCV and MTCNN face masking system with facial landmark detection, head pose estimation, and adaptive masks optimized for live webcam privacy.",
//     tags: ["OpenCV", "MTCNN", "Landmarks", "Head Pose", "Realtime"],
//   },
//   {
//     name: "YOLO Object Detection",
//     category: ["cv"],
//     role: "Object Detection Pipeline",
//     language: "Jupyter Notebook",
//     year: "2026",
//     url: "https://github.com/rohanrepo123/Yolo_Object_Detection",
//     summary:
//       "Complete YOLOv5 object detection workflow using PyTorch, covering model setup, inference, visual detection output, and CV experimentation.",
//     tags: ["YOLOv5", "PyTorch", "Computer Vision", "Detection"],
//   },
//   {
//     name: "Dark Horse ClaudeSolvathon",
//     category: ["rag", "nlp"],
//     role: "Research Search Engine",
//     language: "Jupyter Notebook",
//     year: "2025",
//     url: "https://github.com/rohanrepo123/Dark_Horse_ClaudeSolvathon",
//     summary:
//       "Hackathon RAG search system for dark matter research data, recognized with a 4th-place finish at ClaudeSolvathon IIIT Nagpur.",
//     tags: ["RAG", "Research Search", "Claude", "Hackathon"],
//   },
// ];


const projects = [
  {
    name: "RoadCap-ReWIn",
    category: ["cv", "dl", "research"],
    role: "Traffic Sign Detection & Semantic Captioning",
    language: "Jupyter Notebook",
    year: "2026",
    url: "https://github.com/rohanrepo123/RoadCap-ReWIn-",
    featured: true,
    priority: 1,
    summary:
      "Vision-language research pipeline that extends traffic-sign detection into semantic explanation by combining YOLO-based detection with BLIP, ViT-GPT2, and Qwen3-VL captioning. The project extends the ReWaIn-MTS dataset into a structured vision-language dataset with five semantic captions per sign.",
    tags: [
      "YOLOv8",
      "Qwen3-VL",
      "BLIP",
      "ViT-GPT2",
      "PyTorch",
      "HuggingFace",
      "LoRA"
    ],
    metrics: ["1,439 images", "2,283 signs", "37 classes", "11K+ caption pairs"],
    result:
      "YOLOv8x achieved 96.89% mAP@50 and 93.98% recall; BLIP achieved 0.7552 BLEU-4 and 1.7991 CIDEr; Qwen3-VL achieved 0.8550 BERTScore F1.",
    architecture:
      "Road Scene → YOLO Detection → Sign Crop → BLIP / ViT-GPT2 / Qwen3-VL → Semantic Explanation"
  },
  {
    name: "AI Tutor Transformer Based",
    category: ["nlp","dl", "ml", "backend", "research"],
    role: "Distributed Intelligent Tutoring System",
    language: "Jupyter Notebook",
    year: "2026",
    url: "https://github.com/rohanrepo123/AI-Tutor-Transformer-Based-",
    featured: true,
    priority: 2,
    summary:
      "Distributed AI tutoring architecture that analyzes student queries for both academic topic and teaching strategy, then coordinates multiple inference services to deliver adaptive responses. The primary node manages orchestration and dialogue while secondary GPU nodes expose NLP prediction services through FastAPI.",
    tags: [
      "FastAPI",
      "Sentence-BERT",
      "Word2Vec",
      "LSTM",
      "Scikit-learn",
      "Gemma",
      "Distributed AI"
    ],
    metrics: ["95% topic classification accuracy", "97% tutor-mode validation accuracy"],
    result:
      "The distributed execution design reports a 30–40% reduction in response latency while supporting scalable tutoring workflows.",
    architecture:
      "Student Query → Topic Detection → Tutor Mode Prediction → Retrieval → Prompt Construction → Gemma → Adaptive Response"
  },

  {
    name: "Civic Complaint Prioritization",
    category: ["nlp","dl" ,"ml", "research"],
    role: "Multilingual Civic Complaint Classification & Triage",
    language: "Jupyter Notebook",
    year: "2025",
    url: "https://github.com/rohanrepo123/Civic-Complaint-Prioritization-a-NLP-approach",
    featured: true,
    priority: 3,
    summary:
      "End-to-end NLP system for classifying long, multilingual and code-mixed civic complaints into municipal categories and predicting urgency. The project compares classical machine-learning baselines against multilingual transformers and reformulates urgency prediction as a sentence-pair reasoning problem.",
    tags: [
      "IndicBERT",
      "XLM-R",
      "mBERT",
      "XGBoost",
      "SVM",
      "NLI",
      "HuggingFace"
    ],
    metrics: ["~25K complaints", "32 categories", "4 urgency levels"],
    result:
      "IndicBERT reached roughly 74.3% category accuracy with ~0.74 macro-F1, while the binary NLI urgency formulation reached roughly 82–83% accuracy with ~0.76–0.77 macro-F1.",
    architecture:
      "Complaint → Preprocessing → Category Classification + Urgency Reasoning → Priority Assignment"
  },
  {
    name: "The Pitch Visualizer",
    category: ["genai", "nlp", "cv"],
    role: "Story-to-Storyboard Generation",
    language: "Python",
    year: "2026",
    url: "https://github.com/rohanrepo123/The-Pitch-Visualizer",
    featured: true,
    priority: 4,
    summary:
      "Generative AI application that converts stories or pitches into coherent visual storyboards. The pipeline decomposes text into panels, creates image prompts, streams generated scenes incrementally, and maintains visual continuity using extracted scene memory and style locking.",
    tags: [
      "Flask",
      "OpenAI",
      "LangChain",
      "Pydantic",
      "NDJSON",
      "Vision Models",
      "Prompt Engineering"
    ],
    architecture:
      "Story → Panel Decomposition → Prompt Enhancement → Image Generation → Visual Memory → Next Panel"
  },
  {
    name: "Hired",
    category: ["rag", "nlp", "backend", "genai"],
    role: "Conversational RAG Assessment Recommender",
    language: "Python",
    year: "2026",
    url: "https://github.com/rohanrepo123/Hired",
    featured: true,
    priority: 5,
    summary:
    "Stateless FastAPI service that recommends SHL assessments through conversational retrieval. It combines semantic search, ChromaDB, OpenAI embeddings, Groq-based reasoning, clarification turns, recommendation validation, and context compression to keep answers grounded in the assessment catalog.",
    tags: [
      "FastAPI",
      "RAG",
      "ChromaDB",
      "OpenAI Embeddings",
      "Groq",
      "LangChain",
      "Prompt Engineering"
    ],
    metrics: ["Stateless API", "GET /health", "POST /chat", "Live deployment"],
    result:
      "Recommendations are validated against the catalog and the system explicitly handles clarification, refusal, prompt-injection, and off-topic cases.",
    architecture:
      "User Query → FastAPI → Context Extraction → ChromaDB Retrieval → Context Compression → Groq LLM → Validation → JSON Response"
  },
  {
  name: "Electricity Consumption ML Project",
  category: ["ml", "data-science"],
  role: "Household Power Consumption Forecasting",
  language: "Jupyter Notebook",
  year: "2026",
  url: "https://github.com/rohanrepo123/Electricity_Consumption_ML_Project",
  featured: true,
  priority: 6,
  summary:
    "Machine-learning project for forecasting household electricity consumption using gradient-boosting approaches, including XGBoost and Gradient Boosting, with the objective of modeling and predicting power-demand patterns from historical consumption data.",
  tags: [
    "XGBoost",
    "Gradient Boosting",
    "Machine Learning",
    "Forecasting",
    "Regression",
    "Python"
  ]
  },
  {
    name: "AI Document Analyzer",
    category: ["rag", "nlp", "backend"],
    role: "Document Intelligence & Semantic Search",
    language: "Python",
    year: "2026",
    url: "https://github.com/rohanrepo123/AI-Document-Analyzer-",
    featured: true,
    priority: 7,
    summary:
      "End-to-end document intelligence application for PDFs, DOCX files, and images. The system combines OCR, transformer-based summarization, named-entity recognition, keyword extraction, document classification logic, and FAISS-powered semantic search.",
    tags: [
      "Flask",
      "Tesseract OCR",
      "FAISS",
      "Sentence Transformers",
      "KeyBERT",
      "NER",
      "HuggingFace"
    ],
    architecture:
      "Upload → OCR / Text Extraction → Cleaning → Summarization → NER → Keywords → Embeddings → FAISS Search",
  },



  {
    name: "Giftyy for MumzWorld",
    category: ["genai", "rag", "nlp", "recommendation"],
    role: "Grounded Multimodal Gift Recommendation",
    language: "Python",
    year: "2026",
    url: "https://github.com/rohanrepo123/Giftyy-For-MumzWorld-",
    featured: true,
    priority: 8,
    summary:
      "Flask-based gift recommendation system for baby and mom products that supports text queries, browser speech input, image uploads, temporary conversational context, and grounded recommendations from a local product catalog.",
    tags: [
      "Flask",
      "Ollama",
      "Qwen3-VL",
      "Embeddings",
      "Recommendation",
      "LangChain",
      "Multimodal AI"
    ],
    metrics: ["15 deterministic evaluation cases", "Quickstart mode", "Full Ollama mode"],
    result:
      "The repository includes deterministic evaluation coverage for constraint handling, retrieval grounding, uncertainty, conversation carryover, and multimodal behavior.",
    architecture:
      "User Text / Speech / Image → Query Understanding → Catalog Retrieval → Ranking → Grounded Recommendation"
  },


  {
    name: "LearnTube AI",
    category: ["rag", "genai", "nlp"],
    role: "YouTube Video Q&A Assistant",
    language: "Python",
    year: "2026",
    url: "https://github.com/rohanrepo123/LearnTube-AI-YouTube-Video-Q-A-Assistant-using-RAG-",
    featured: true,
    priority: 9,
    summary:
      "RAG application that turns YouTube transcripts into an interactive question-answering system. It extracts multilingual transcripts, chunks the content, generates embeddings, stores them in ChromaDB, retrieves relevant passages, and uses Gemini to generate context-aware responses.",
    tags: [
      "LangChain",
      "Gemini",
      "ChromaDB",
      "Embeddings",
      "YouTube Transcript API",
      "Streamlit",
      "RAG"
    ],
    architecture:
      "YouTube URL → Transcript Extraction → Chunking → Embeddings → ChromaDB → Retrieval → Gemini → Answer"
  },

  
    {
      name: "Nemo-Chatbot",
      category: ["genai", "nlp"],
      role: "LLM Chatbot",
      language: "Python",
      year: "2026",
      url: "https://github.com/rohanrepo123/Nemo-Chatbot",
      featured: false,
      priority: 10,
      summary:
        "Lightweight conversational chatbot experiment built around NVIDIA Nemotron models, demonstrating direct LLM-based conversational interaction.",
      tags: [
        "Nemotron",
        "LLM",
        "Chatbot",
        "Python"
      ]
    },
  {
    name: "Face Blurring New Approach",
    category: ["cv"],
    role: "Real-Time Face Privacy Masking",
    language: "Jupyter Notebook",
    year: "2025",
    url: "https://github.com/rohanrepo123/Face_Blurring-New_approach",
    featured: false,
    priority: 11,
    summary:
      "Computer-vision privacy system that detects faces and applies adaptive masking using OpenCV and facial landmark information, with additional head-pose estimation for more robust handling of live webcam frames.",
    tags: [
      "OpenCV",
      "MTCNN",
      "Facial Landmarks",
      "Head Pose",
      "Real-Time CV"
    ]
  },

  {
    name: "YOLO Object Detection",
    category: ["cv","dl"],
    role: "Object Detection Pipeline",
    language: "Jupyter Notebook",
    year: "2025",
    url: "https://github.com/rohanrepo123/Yolo_Object_Detection",
    featured: false,
    priority: 12,
    summary:
      "Computer-vision experimentation pipeline built around YOLOv5 and PyTorch, covering model setup, inference, object localization, and visualization of detection results.",
    tags: [
      "YOLOv5",
      "PyTorch",
      "Object Detection",
      "Computer Vision"
    ]
  },

  {
    name: "Dark Horse ClaudeSolvathon",
    category: ["rag", "nlp", "research", "hackathon"],
    role: "Research Search Engine",
    language: "Jupyter Notebook",
    year: "2025",
    url: "https://github.com/rohanrepo123/Dark_Horse_ClaudeSolvathon",
    featured: false,
    priority: 13,
    summary:
      "Research-oriented RAG search system developed for a dark-matter research problem, combining retrieval and language-model reasoning to make scientific information easier to query.",
    tags: [
      "RAG",
      "Research Search",
      "Claude",
      "Information Retrieval",
      "Hackathon"
    ],
    achievement: "4th Place — ClaudeSolvathon, IIIT Nagpur"
  },

  // {
  //   name: "Road Sign / Traffic Vision Work",
  //   category: ["cv", "genai", "research"],
  //   role: "Vision-Language Research",
  //   language: "Python",
  //   year: "2026",
  //   url: "https://github.com/rohanrepo123/RoadCap-ReWIn-",
  //   featured: false,
  //   priority: 12,
  //   summary:
  //     "Multimodal research workflow exploring how object detection can provide localized visual context to downstream vision-language models for more meaningful semantic descriptions.",
  //   tags: [
  //     "Vision-Language",
  //     "YOLO",
  //     "Qwen3-VL",
  //     "Captioning",
  //     "Multimodal AI"
  //   ]
  // },

  {
    name: "HR-helper",
    category: ["rag", "nlp", "genai"],
    role: "Assessment Retrieval Assistant",
    language: "Python",
    year: "2026",
    url: "https://github.com/rohanrepo123/HR-helper",
    featured: false,
    priority: 14,
    summary:
      "RAG-oriented assessment discovery system focused on retrieving suitable hiring assessments from structured candidate and role requirements.",
    tags: [
      "RAG",
      "Assessment Retrieval",
      "NLP",
      "Recommendation"
    ]
  },

  {
    name: "Visitor Management System",
    category: ["web", "fullstack"],
    role: "Visitor Management Web Application",
    language: "Python",
    year: "2025",
    url: "https://github.com/rohanrepo123/Visitor-management-System",
    featured: false,
    priority: 15,
    summary:
      "Web-based visitor management application designed to digitize visitor registration and management workflows through a centralized web interface.",
    tags: [
      "Flask",
      "Python",
      "HTML",
      "CSS",
      "JavaScript",
      "Web Development"
    ]
  },

  {
    name: "Netflix Like OTT",
    category: ["web", "fullstack"],
    role: "OTT Streaming Platform",
    language: "Python",
    year: "2025",
    url: "https://github.com/rohanrepo123/Netflix_like_OTT",
    featured: false,
    priority: 16,
    summary:
      "Netflix-inspired OTT web application focused on building a streaming-platform style interface with content browsing, media presentation, and a full web application experience.",
    tags: [
      "Web Development",
      "OTT",
      "Frontend",
      "Backend",
      "HTML",
      "CSS",
      "JavaScript"
    ]
  },

  {
    name: "Quiz by Flask",
    category: ["web", "backend"],
    role: "Flask Quiz Application",
    language: "Python",
    year: "2025",
    url: "https://github.com/rohanrepo123/Quiz_byFlask",
    featured: false,
    priority: 17,
    summary:
      "Lightweight quiz web application built with Flask, demonstrating server-side routing, web forms, question handling, and interactive quiz functionality.",
    tags: [
      "Flask",
      "Python",
      "HTML",
      "CSS",
      "Web Forms",
      "Backend"
    ]
  },

];


const typewriterPhrases = [
  "Designing retrieval systems.....",
  "Fine-tuning transformer pipelines....",
  "Reconstructing MRI k-space....",
  "Building vision-language systems....",
  "Shipping FastAPI model services.....",
  "Grounding agents in real data....",
  "Building multimodal AI applications....",
  "Engineering production-ready AI pipelines....",
  "Turning research into working systems....",
  "Making AI systems retrieve, reason, and respond...."
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
