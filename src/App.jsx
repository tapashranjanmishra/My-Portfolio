import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  Code2,
  Sparkles,
  Cpu,
  Menu,
} from "lucide-react";
import "./App.css";

const technologies = ["Python", "React", "JavaScript", "AI / ML", "RAG", "FAISS"];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);


  const [isSending, setIsSending] = useState(false);

  const [formStatus, setFormStatus] = useState({
    type: "",
    message: "",
  });

  const handleContactSubmit = async (e) => {
    e.preventDefault();

    if (isSending) return;

    const form = e.currentTarget;
    const formData = new FormData(form);

    setIsSending(true);
    setFormStatus({ type: "", message: "" });

    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
      _subject: `Portfolio Enquiry: ${formData.get("subject")}`,
      _template: "table",
    };

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/mishratapash2103@gmail.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      const result = await response.json();

      if (!response.ok || result.success === false || result.success === "false") {
        throw new Error("Message could not be sent.");
      }

      form.reset();

      setFormStatus({
        type: "success",
        message: "Your message has been sent successfully!",
      });
    } catch (error) {
      console.error("Contact form error:", error);

      setFormStatus({
        type: "error",
        message: "Unable to send your message. Please try again or email me directly.",
      });
    } finally {
      setIsSending(false);
    }
  };
  return (
    <main className="portfolio">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <div className="grid-overlay" />
    
{/* Navigation */}
<motion.nav
  className={`navbar glass ${menuOpen ? "menu-open" : ""}`}
  initial={{ opacity: 0, y: -25 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7 }}
>
  <a href="#home" className="logo" onClick={() => setMenuOpen(false)}>
    TRM<span>.</span>
  </a>


<button
  type="button"
  className="mobile-menu"
  aria-label={menuOpen ? "Close menu" : "Open menu"}
  aria-expanded={menuOpen}
  onClick={() => setMenuOpen((prev) => !prev)}
>
  {menuOpen ? "✕" : <Menu size={23} />}
</button>

<div className={`nav-links ${menuOpen ? "open" : ""}`}>
  <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
  <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
  <a href="#experience" onClick={() => setMenuOpen(false)}>Experience</a>
  <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
  <a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a>
  <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
</div>

<a
  href="#contact"
  className="nav-cta"
  onClick={() => setMenuOpen(false)}
>
  Let's Connect <ArrowUpRight size={15} />
</a>
</motion.nav>

      {/* Hero */}
      <section className="hero" id="home">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="availability">
            <span className="status-dot" />
            OPEN TO OPPORTUNITIES
          </div>

          <p className="intro-label">HELLO, I'M</p>

          <h1>
            Tapash Ranjan
            <br />
            <span className="gradient-text">Mishra</span>
          </h1>

          <h2>
            Building intelligent solutions.
            <br />
            <span>Designing digital experiences.</span>
          </h2>

          <p className="hero-description">
            I'm a BCA student specializing in AI & ML, passionate about
            developing intelligent applications, exploring emerging
            technologies and creating meaningful digital experiences.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="primary-button">
              Explore My Work <ArrowUpRight size={18} />
            </a>

            <a href="#contact" className="secondary-button">
              Let's Talk
            </a>
          </div>

          
<div className="social-links">
  <a
    href="https://github.com/tapashranjanmishra"
    target="_blank"
    rel="noreferrer"
    aria-label="GitHub"
  >
    GIT
  </a>

  <a
    href="https://linkedin.com/in/tapashranjanmishra"
    target="_blank"
    rel="noreferrer"
    aria-label="LinkedIn"
  >
    LINK
  </a>

  <a
    href="https://instagram.com/tapashranjanmishra_"
    target="_blank"
    rel="noreferrer"
    aria-label="Instagram"
  >
    IG
  </a>
</div>

        </motion.div>

        {/* Visual panel */}
        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />

          <div className="profile-card glass">
            <div className="profile-top">
              <span>CREATIVE MINDSET</span>
              <Sparkles size={18} />
            </div>

         
<div className="profile-placeholder">
  <div className="profile-glow" />

  <img
    src="/tapash-profile.png"
    alt="Tapash Ranjan Mishra"
    className="profile-photo"
  />
  
</div>
            <div className="profile-bottom">
              <div>
                <h3>Tapash Ranjan Mishra</h3>
                <p>AI/ML Developer · Creative Technologist</p>
              </div>
              <div className="profile-icon">
                <Code2 size={22} />
              </div>
            </div>
          </div>

          <motion.div
            className="floating-card floating-top glass"
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <Cpu size={20} />
            <div>
              <strong>AI / ML</strong>
              <span>Exploring Intelligence</span>
            </div>
          </motion.div>

          <motion.div
            className="floating-card floating-bottom glass"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
          >
            <Sparkles size={20} />
            <div>
              <strong>Creative Developer</strong>
              <span>Ideas into Reality</span>
            </div>
          </motion.div>
        </motion.div>

        <a href="#about" className="scroll-indicator">
          <span>SCROLL TO EXPLORE</span>
          <ArrowDown size={16} />
        </a>
      </section>

      {/* Technology strip */}
     <section className="tech-strip" id="technologies">
        <p>TECHNOLOGIES I'M EXPLORING</p>
        <div className="tech-list">
          {technologies.map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>
      </section>
{/* ABOUT SECTION */}
<section className="about-section" id="about">
  <div className="section-heading">
    <span className="section-label">01 / ABOUT ME</span>
    <h2>
      More than just a <span>developer.</span>
    </h2>
    <p>A little about my journey, mindset and what drives me.</p>
  </div>

  <div className="about-grid">
    <motion.div
      className="about-main glass"
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      <div className="about-icon">
        <Sparkles size={25} />
      </div>

      <h3>Hello, I'm Tapash.</h3>

      <p>
        I'm a BCA student specializing in Artificial Intelligence
        and Machine Learning at Assam Down Town University.
        I'm passionate about building intelligent applications,
        exploring emerging technologies and creating meaningful
        digital experiences.
      </p>

      <p>
        My work spans AI/ML development, Retrieval-Augmented
        Generation, software development and web technologies.
        I enjoy taking ideas from concepts to working applications
        and continuously improving my technical skills.
      </p>

      <div className="about-tags">
        <span>AI & Machine Learning</span>
        <span>Software Development</span>
        <span>Generative AI</span>
        <span>UI/UX</span>
      </div>
    </motion.div>

    <div className="about-stats">
      <motion.div
        className="stat-card glass"
        whileHover={{ y: -5 }}
      >
        <span>EDUCATION</span>
        <h3>BCA</h3>
        <p>AI & ML Specialization</p>
      </motion.div>

      <motion.div
        className="stat-card glass"
        whileHover={{ y: -5 }}
      >
        <span>UNIVERSITY</span>
        <h3>AdtU</h3>
        <p>Assam Down Town University</p>
      </motion.div>

      <motion.div
        className="stat-card glass"
        whileHover={{ y: -5 }}
      >
        <span>ACADEMIC SCORE</span>
        <h3>7.63</h3>
        <p>CGPA through 4th semester</p>
      </motion.div>

      <motion.div
        className="stat-card glass"
        whileHover={{ y: -5 }}
      >
        <span>LOCATION</span>
        <h3>India</h3>
        <p>Guwahati, Assam</p>
      </motion.div>
    </div>
  </div>
</section>

{/* EXPERIENCE SECTION */}
<section className="experience-section" id="experience">
  <div className="section-heading">
    <span className="section-label">02 / EXPERIENCE</span>
    <h2>
      My professional <span>journey.</span>
    </h2>
    <p>Learning, building and gaining practical experience.</p>
  </div>

  <div className="timeline">

    <motion.div
      className="timeline-item"
      initial={{ opacity: 0, x: -25 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
    >
      <div className="timeline-dot" />

      <div className="timeline-card glass">
        <div className="timeline-top">
          <span className="timeline-date">06 JUL 2026 — 05 AUG 2026</span>
          <span className="timeline-type">INTERNSHIP</span>
        </div>

        <h3>Systems Department Intern</h3>
        <h4>Mahanadi Coalfields Limited (MCL)</h4>

        <p>
          Completed an internship in the Systems Department,
          developing an Offline AI PDF Assistant using
          Retrieval-Augmented Generation.
        </p>

        <ul>
          <li>Implemented document processing and text chunking.</li>
          <li>Used FAISS for semantic document retrieval.</li>
          <li>Integrated Hugging Face embeddings and Ollama.</li>
          <li>Used locally hosted Llama 3.2 for AI responses.</li>
          <li>Built an interactive interface using Streamlit.</li>
        </ul>

        <div className="experience-tags">
          <span>Python</span>
          <span>RAG</span>
          <span>FAISS</span>
          <span>Ollama</span>
          <span>Streamlit</span>
        </div>
      </div>
    </motion.div>

    <motion.div
      className="timeline-item"
      initial={{ opacity: 0, x: -25 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.15 }}
    >
      <div className="timeline-dot" />

      <div className="timeline-card glass">
        <div className="timeline-top">
          <span className="timeline-date">2024 — PRESENT</span>
          <span className="timeline-type">PROJECT DEVELOPMENT</span>
        </div>

        <h3>Project Developer</h3>
        <h4>Independent Projects & Technical Exploration</h4>

        <p>
          Developing applications and exploring practical
          implementations of AI, machine learning and web
          technologies.
        </p>

        <ul>
          <li>Developing AI/ML applications using Python.</li>
          <li>Building RAG-based document question-answering systems.</li>
          <li>Creating web applications using React and JavaScript.</li>
          <li>Exploring multilingual prompt injection detection in RAG systems.</li>
        </ul>

        <div className="experience-tags">
          <span>Python</span>
          <span>React</span>
          <span>LangChain</span>
          <span>JavaScript</span>
          <span>AI/ML</span>
        </div>
      </div>
    </motion.div>

  </div>
</section>


{/* PROJECTS SECTION */}
<section className="projects-section" id="projects">
  <div className="section-heading">
    <span className="section-label">03 / SELECTED WORK</span>
    <h2>
      Ideas transformed into <span>reality.</span>
    </h2>
    <p>
      A collection of applications, experiments and research
      exploring the intersection of technology and innovation.
    </p>
  </div>

  <div className="projects-grid">

    {/* PROJECT 01 */}
    <motion.article
      className="project-card project-featured glass"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="project-visual rag-visual">
        <div className="visual-orbit orbit-one" />
        <div className="visual-orbit orbit-two" />

        <div className="rag-window">
          <div className="rag-window-top">
            <span>OFFLINE AI ASSISTANT</span>
            <span className="live-indicator">● LOCAL</span>
          </div>

          <div className="rag-chat">
            <div className="rag-message user-message">
              Ask questions about your PDF
            </div>

            <div className="rag-message ai-message">
              <Code2 size={17} />
              <span>
                Relevant document context retrieved.
                Generating an answer using the local LLM...
              </span>
            </div>

            <div className="rag-input">
              Ask your document anything...
              <ArrowUpRight size={17} />
            </div>
          </div>
        </div>

        <span className="project-number">01</span>
      </div>

      <div className="project-content">
        <div className="project-meta">
          <span className="project-category">ARTIFICIAL INTELLIGENCE</span>
          <span className="project-status completed">
            COMPLETED
          </span>
        </div>

        <h3>Offline AI PDF Assistant</h3>

        <p>
          A privacy-focused document question-answering application
          that uses Retrieval-Augmented Generation to extract,
          retrieve and generate answers from PDF documents using
          locally hosted language models.
        </p>

        <div className="project-highlights">
          <span>01 · Semantic document retrieval</span>
          <span>02 · Local LLM integration</span>
          <span>03 · Interactive PDF assistant</span>
        </div>

        <div className="project-tags">
          <span>Python</span>
          <span>RAG</span>
          <span>FAISS</span>
          <span>Ollama</span>
          <span>Llama 3.2</span>
          <span>Streamlit</span>
        </div>

        <div className="project-actions">
          <span className="project-coming">
            <Code2 size={16} />Repository being prepared.
          </span>
        </div>
      </div>
    </motion.article>

    {/* PROJECT 02 */}
    <motion.article
      className="project-card glass"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="project-visual legal-visual">
        <div className="legal-document">
          <div className="document-icon">§</div>
          <span>LEGAL DOCUMENT</span>
          <div className="document-line" />
          <div className="document-line short" />
          <div className="document-highlight">
            Complex legal language
          </div>
          <div className="document-arrow">↓</div>
          <div className="document-result">
            Simplified explanation
          </div>
        </div>
        <span className="project-number">02</span>
      </div>

      <div className="project-content">
        <div className="project-meta">
          <span className="project-category">GENERATIVE AI</span>
          <span className="project-status prototype">
            PROTOTYPE
          </span>
        </div>

        <h3>GenAI Legal Document Simplifier</h3>

        <p>
          An AI-powered concept designed to make complex legal
          documents easier to understand through simplified
          explanations and natural language processing.
        </p>

        <div className="project-tags">
          <span>Python</span>
          <span>NLP</span>
          <span>Generative AI</span>
          <span>Streamlit</span>
        </div>

        <div className="project-actions">
          <span className="project-coming">
            <Code2 size={16} /> Repository being prepared.
          </span>
        </div>
      </div>
    </motion.article>

    {/* PROJECT 03 */}
    <motion.article
      className="project-card glass"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="project-visual security-visual">
        <div className="security-shield">
          <div className="shield-inner">
            <Code2 size={48} />
          </div>
        </div>

        <div className="security-node node-one">PROMPT</div>
        <div className="security-node node-two">LLM</div>
        <div className="security-node node-three">GUARD</div>

        <span className="project-number">03</span>
      </div>

      <div className="project-content">
        <div className="project-meta">
          <span className="project-category">AI SECURITY RESEARCH</span>
          <span className="project-status research">
            RESEARCH
          </span>
        </div>

        <h3>Multilingual Prompt Injection Detection</h3>

        <p>
          Research focused on identifying malicious and code-mixed
          prompt injection attempts in Retrieval-Augmented
          Generation systems.
        </p>

        <div className="project-tags">
          <span>Python</span>
          <span>LLM Security</span>
          <span>RAG</span>
          <span>NLP</span>
        </div>

        <div className="project-actions">
          <span className="project-coming">
            <Code2 size={16} /> Research in progress
          </span>
        </div>
      </div>
    </motion.article>

    {/* PROJECT 04 */}
    <motion.article
      className="project-card glass"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="project-visual mood-visual">
        <div className="mood-dashboard">
          <span>YOUR DAILY MOOD</span>

          <div className="mood-faces">
            <span>☹</span>
            <span>◔</span>
            <span>☺</span>
          </div>

          <div className="mood-chart">
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
          </div>

          <span className="mood-caption">
            Track · Reflect · Grow
          </span>
        </div>

        <span className="project-number">04</span>
      </div>

      <div className="project-content">
        <div className="project-meta">
          <span className="project-category">WEB DEVELOPMENT</span>
          <span className="project-status prototype">
            PROJECT
          </span>
        </div>

        <h3>Mood Tracker Website</h3>

        <p>
          A web application concept for recording daily moods
          and reflecting on emotional patterns through a
          simple visual interface.
        </p>

        <div className="project-tags">
          <span>HTML</span>
          <span>CSS</span>
          <span>JavaScript</span>
          <span>Chart.js</span>
        </div>

        <div className="project-actions">
          <span className="project-coming">
            <Code2 size={16} /> Repository being prepared.
          </span>
        </div>
      </div>
    </motion.article>

  </div>
</section>


{/* SKILLS SECTION */}
<section className="skills-section" id="skills">

  <div className="section-heading">
    <span className="section-label">04 / TECHNICAL EXPERTISE</span>

    <h2>
      Tools I use to <span>build and innovate.</span>
    </h2>

    <p>
      Technologies I've worked with, applied in projects
      and continue to explore.
    </p>
  </div>

  <div className="skills-legend">
    <span>
      <i className="legend-dot hands-on-dot" />
      Hands-on experience
    </span>

    <span>
      <i className="legend-dot exploring-dot" />
      Exploring / Learning
    </span>
  </div>

  <div className="skills-grid">

    {/* PROGRAMMING */}
    <motion.div
      className="skill-card glass"
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -7 }}
    >
      <div className="skill-card-heading">
        <div className="skill-icon">
          <Code2 size={23} />
        </div>
        <span className="skill-index">01</span>
      </div>

      <h3>Programming</h3>
      <p>Languages and core web technologies.</p>

      <div className="skill-items">
        <span className="skill-tag hands-on">Python</span>
        <span className="skill-tag hands-on">Java</span>
        <span className="skill-tag hands-on">JavaScript</span>
        <span className="skill-tag hands-on">HTML</span>
        <span className="skill-tag hands-on">CSS</span>
      </div>
    </motion.div>

    {/* AI & MACHINE LEARNING */}
    <motion.div
      className="skill-card glass"
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -7 }}
      transition={{ delay: 0.1 }}
    >
      <div className="skill-card-heading">
        <div className="skill-icon">
          <Cpu size={23} />
        </div>
        <span className="skill-index">02</span>
      </div>

      <h3>AI & Machine Learning</h3>
      <p>Intelligent systems and language models.</p>

      <div className="skill-items">
        <span className="skill-tag hands-on">RAG</span>
        <span className="skill-tag hands-on">FAISS</span>
        <span className="skill-tag hands-on">Hugging Face</span>
        <span className="skill-tag hands-on">Ollama</span>
        <span className="skill-tag exploring">NLP</span>
        <span className="skill-tag exploring">LLMs</span>
      </div>
    </motion.div>

    {/* FRAMEWORKS */}
    <motion.div
      className="skill-card glass"
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -7 }}
      transition={{ delay: 0.15 }}
    >
      <div className="skill-card-heading">
        <div className="skill-icon">
          <Code2 size={23} />
        </div>
        <span className="skill-index">03</span>
      </div>

      <h3>Frameworks & Libraries</h3>
      <p>Tools for building applications and interfaces.</p>

      <div className="skill-items">
        <span className="skill-tag hands-on">React</span>
        <span className="skill-tag hands-on">Streamlit</span>
        <span className="skill-tag hands-on">LangChain</span>
        <span className="skill-tag exploring">Node.js</span>
      </div>
    </motion.div>

    {/* TOOLS */}
    <motion.div
      className="skill-card glass"
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -7 }}
      transition={{ delay: 0.2 }}
    >
      <div className="skill-card-heading">
        <div className="skill-icon">
          <Sparkles size={23} />
        </div>
        <span className="skill-index">04</span>
      </div>

      <h3>Tools & Technologies</h3>
      <p>Development environments and workflow tools.</p>

      <div className="skill-items">
        <span className="skill-tag hands-on">Git</span>
        <span className="skill-tag hands-on">GitHub</span>
        <span className="skill-tag hands-on">VS Code</span>
        <span className="skill-tag hands-on">FAISS</span>
        <span className="skill-tag hands-on">Ollama</span>
      </div>
    </motion.div>

    {/* DESIGN */}
    <motion.div
      className="skill-card glass skill-design-card"
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -7 }}
      transition={{ delay: 0.25 }}
    >
      <div className="skill-card-heading">
        <div className="skill-icon">
          <Sparkles size={23} />
        </div>
        <span className="skill-index">05</span>
      </div>

      <h3>Design & Creativity</h3>
      <p>Creating intuitive and engaging digital experiences.</p>

      <div className="skill-items">
        <span className="skill-tag hands-on">Figma</span>
        <span className="skill-tag hands-on">UI/UX Design</span>
        <span className="skill-tag hands-on">Canva</span>
      </div>
    </motion.div>

  </div>

  <div className="skills-note glass">
    <Sparkles size={19} />
    <p>
      Always learning. Always building. Continuously exploring
      new technologies and improving my development skills.
    </p>
  </div>

</section>

{/* CONTACT SECTION */}
<section className="contact-section" id="contact">

  <div className="section-heading">
    <span className="section-label">05 / GET IN TOUCH</span>

    <h2>
      Let's build something <span>meaningful.</span>
    </h2>

    <p>
      Have an idea, opportunity or project in mind?
      Let's connect and create something valuable.
    </p>
  </div>

  <div className="contact-grid">

    {/* LEFT CONTACT INFORMATION */}
    <div className="contact-info glass">

      <div className="contact-availability">
        <span className="availability-dot" />
        OPEN TO OPPORTUNITIES
      </div>

      <h3>Let's start a conversation.</h3>

      <p className="contact-description">
        I'm interested in internships, entry-level opportunities,
        collaborations and innovative technology projects.
        Feel free to reach out.
      </p>

      <div className="contact-details">

       
<a
  href="mailto:mishratapash2103@gmail.com"
  className="contact-detail"
>
  <span className="contact-detail-icon">@</span>
  <span>
    <small>EMAIL ME</small>
    <strong>mishratapash2103@gmail.com</strong>
  </span>
  <span className="contact-arrow">↗</span>
</a>

        <a
          href="https://www.linkedin.com/in/tapashranjanmishra"
          target="_blank"
          rel="noreferrer"
          className="contact-detail"
        >
          <span className="contact-detail-icon">in</span>
          <span>
            <small>LINKEDIN</small>
            <strong>Connect professionally</strong>
          </span>
          <span className="contact-arrow">↗</span>
        </a>

        <a
          href="https://github.com/tapashranjanmishra"
          target="_blank"
          rel="noreferrer"
          className="contact-detail"
        >
          <span className="contact-detail-icon">GH</span>
          <span>
            <small>GITHUB</small>
            <strong>Explore my repositories</strong>
          </span>
          <span className="contact-arrow">↗</span>
        </a>

        <a
          href="https://www.instagram.com/tapashranjanmishra_/"
          target="_blank"
          rel="noreferrer"
          className="contact-detail"
        >
          <span className="contact-detail-icon">IG</span>
          <span>
            <small>INSTAGRAM</small>
            <strong>Connect with me</strong>
          </span>
          <span className="contact-arrow">↗</span>
        </a>

      </div>

      <a
  href="/Tapash_Ranjan_Mishra_Resume.pdf"
  download="Tapash_Ranjan_Mishra_Resume.pdf"
  className="resume-button"
>
  Download My Resume <span>↓</span>
</a>
    </div>

    {/* CONTACT FORM */}
    <div className="contact-form-card glass">

      <div className="contact-form-heading">
        <span className="section-label">SEND A MESSAGE</span>
        <h3>Tell me about your idea.</h3>
        <p>I'll be glad to hear from you.</p>
      </div>

      
<form
  className="contact-form"
  onSubmit={handleContactSubmit}
>
  <div className="form-row">
    <div className="form-group">
      <label htmlFor="contact-name">Your Name</label>
      <input
        type="text"
        id="contact-name"
        name="name"
        placeholder="Enter your name"
        required
      />
    </div>

    <div className="form-group">
      <label htmlFor="contact-email">Your Email</label>
      <input
        type="email"
        id="contact-email"
        name="email"
        placeholder="name@example.com"
        required
      />
    </div>
  </div>

  <div className="form-group">
    <label htmlFor="contact-subject">Subject</label>
    <input
      type="text"
      id="contact-subject"
      name="subject"
      placeholder="What would you like to discuss?"
      required
    />
  </div>

  <div className="form-group">
    <label htmlFor="contact-message">Your Message</label>
    <textarea
      id="contact-message"
      name="message"
      rows="5"
      placeholder="Tell me about your project or opportunity..."
      required
    />
  </div>

  <button
    type="submit"
    className="contact-submit"
    disabled={isSending}
  >
    {isSending ? "Sending..." : "Send Message"}
    <span>{isSending ? "..." : "↗"}</span>
  </button>

  {formStatus.message && (
    <p
      className={`form-status ${formStatus.type}`}
      role="status"
      aria-live="polite"
    >
      {formStatus.message}
    </p>
  )}
</form>
    </div>

  </div>
</section>

      <footer>
        <a href="#home" className="logo">TAPASH</a>
        <p>Designed & built with purpose. © 2026 Tapash Ranjan Mishra</p>
      </footer>
    </main>
  );
}

export default App;
