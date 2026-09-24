import { useEffect } from 'react';
import './index.css';
import smdPoster from './assets/Smd.jpeg';
import biryaniPoster from './assets/Bri.jpeg';
import homeSalePoster from './assets/Ho.jpeg';

function App() {
  const navItems = [
    { label: 'About', id: 'about' },
    { label: 'Services', id: 'services' },
    { label: 'Projects', id: 'projects' },
    { label: 'Experience', id: 'experience' },
    { label: 'Education', id: 'education' },
    { label: 'Contact', id: 'contact' }
  ];

  const stats = [
    { value: '15+', label: 'Screens Designed' },
    { value: '3+', label: 'Project Flows' },
    { value: '100%', label: 'User Focus' }
  ];

  const services = [
    'UX Strategy',
    'Wireframing',
    'UI Design',
    'Prototyping',
    'User Testing',
    'Brand Design'
  ];

  const skills = [
    'Figma', 'Adobe XD', 'Adobe Photoshop', 'Adobe Illustrator', 'Canva',
    'User Research', 'User Personas', 'Wireframing', 'Prototyping',
    'Usability Testing', 'Interaction Design', 'Responsive Design', 'Accessibility'
  ];

  const projects = [
    {
      title: 'Expense Tracker & Management',
      link: 'https://www.figma.com/design/tWGjA8gP7DV4yzhhSVIyPo/Untitled?node-id=0-1&t=ZMjQo6WYQJVL10Nv-1',
      description: 'A personal finance dashboard with simplifying budgeting, data visibility, and clean decision making.'
    },
    {
      title: 'Loot Fast',
      link: 'https://www.figma.com/design/SXPJ5LRx5gU1nm4aH9btfg/Untitled?node-id=0-1&t=Oc77yxxX5RRjVPaH-1',
      description: 'A product-focused storefront designed to improve discoverability and seamless procurement experiences.'
    },
    {
      title: 'Food Delivery App',
      link: 'https://www.figma.com/design/0PfDujM0ja9z7nHrOYrDfM/Untitled?node-id=0-1&t=koMmhXaw6czlwyFh-1',
      description: 'A polished ordering experience with menu browsing, personalized interactions, and efficient checkout flow.'
    }
  ];

  const posterGallery = [
    { src: smdPoster, alt: 'SMD Resorts poster', title: 'Resorts Poster' },
    { src: biryaniPoster, alt: 'Biryani offer poster', title: 'Biryani Campaign' },
    { src: homeSalePoster, alt: 'Home sale poster', title: 'Property Sale Poster' }
  ];

  const handleScroll = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const revealItems = document.querySelectorAll('.reveal-item');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.12 }
    );

    revealItems.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="page-shell">
      <header className="topbar">
        <div className="brand">Surya S</div>
        <nav className="nav">
          {navItems.map((item) => (
            <a key={item.id} href={`#${item.id}`} onClick={(e) => handleScroll(e, item.id)}>
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      <header className="hero">
        <div className="hero-glow hero-glow-one" />
        <div className="hero-glow hero-glow-two" />

        <div className="hero-content">
          <div className="hero-text reveal-item">
            <span className="eyebrow">Available for freelance work</span>
            <h1>Designing digital experiences that feel effortless.</h1>
            <h3>UI/UX Designer & Graphic Designer</h3>
            <p>
              I build intuitive interfaces and polished visual systems that turn ideas into experiences people enjoy using.
            </p>
            <div className="cta-row">
              <a href="#contact" className="btn" onClick={(e) => handleScroll(e, 'contact')}>Contact Me</a>
              <a href="#projects" className="btn btn-secondary" onClick={(e) => handleScroll(e, 'projects')}>View Work</a>
            </div>

            <div className="hero-metrics">
              {stats.map((stat) => (
                <div key={stat.label} className="mini-stat">
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="hero-image reveal-item">
            <div className="portrait-ring" />
            <img src="/surya.jpeg" alt="Surya S" />
          </div>
        </div>
      </header>

      <main>
        <section id="about" className="section-block">
          <div className="section-heading reveal-item">
            <span className="section-tag">About</span>
            <h2>Human-centered design with visual clarity</h2>
          </div>

          <div className="about-grid">
            <div className="card reveal-item about-card">
              <p>
                Creative UI/UX Designer and Graphic Designer with hands-on experience in user research,
                wireframing, prototyping, usability testing, and responsive design. I enjoy creating experiences
                that are both functional and visually impactful.
              </p>
            </div>

            <div className="stat-stack reveal-item">
              <div className="stat-pill">
                <strong>UX</strong>
                <span>Research</span>
              </div>
              <div className="stat-pill">
                <strong>UI</strong>
                <span>Systems</span>
              </div>
              <div className="stat-pill">
                <strong>UX</strong>
                <span>Testing</span>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="section-block">
          <div className="section-heading reveal-item">
            <span className="section-tag">Skills</span>
            <h2>Tools and design capabilities</h2>
          </div>

          <div className="skill-container">
            {skills.map((skill, index) => (
              <span key={skill} className="skill-item reveal-item" style={{ animationDelay: `${index * 70}ms` }}>
                {skill}
              </span>
            ))}
          </div>
        </section>

        <section id="services" className="section-block">
          <div className="section-heading reveal-item">
            <span className="section-tag">Services</span>
            <h2>What I bring to the table</h2>
          </div>

          <div className="service-grid">
            {services.map((service, index) => (
              <div key={service} className="service-card reveal-item" style={{ animationDelay: `${index * 90}ms` }}>
                <span className="service-number">0{index + 1}</span>
                <h3>{service}</h3>
              </div>
            ))}
          </div>
        </section>

        <section id="projects" className="section-block">
          <div className="section-heading reveal-item">
            <span className="section-tag">Projects</span>
            <h2>Selected work with purpose and polish</h2>
          </div>

          <div className="projects-grid">
            {projects.map((project, index) => (
              <article key={project.title} className="project-card reveal-item" style={{ animationDelay: `${index * 120}ms` }}>
                <div className="project-badge">Case Study</div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <a href={project.link} target="_blank" rel="noreferrer">View Project</a>
              </article>
            ))}
          </div>

          <div className="poster-gallery">
            {posterGallery.map((poster, index) => (
              <div key={poster.title} className="poster-card reveal-item" style={{ animationDelay: `${index * 140}ms` }}>
                <img src={poster.src} alt={poster.alt} />
                <span>{poster.title}</span>
              </div>
            ))}
          </div>
        </section>

        <section id="experience" className="section-block">
          <div className="section-heading reveal-item">
            <span className="section-tag">Experience</span>
            <h2>Practical product design experience</h2>
          </div>

          <div className="timeline reveal-item">
            <div className="timeline-card">
              <div className="timeline-dot" />
              <div>
                <h3>UI/UX Design Intern</h3>
                <ul>
                  <li>Conducted User Research and User Persona creation</li>
                  <li>Performed Usability Testing across multiple product journeys</li>
                  <li>Designed 15+ screens and high-fidelity interface systems</li>
                  <li>Created wireframes, user flows, and responsive UI mockups</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="education" className="section-block">
          <div className="section-heading reveal-item">
            <span className="section-tag">Education</span>
            <h2>Academic foundation</h2>
          </div>

          <div className="education-grid">
            <div className="edu-card reveal-item">
              <h3>B.Tech - Information Technology</h3>
              <p>Erode Sengunthar Engineering College</p>
              <span>CGPA: 7.3</span>
              <span>Expected Graduation: May 2027</span>
            </div>

            <div className="edu-card reveal-item">
              <h3>Higher Secondary Education</h3>
              <p>Paavendhar Matric Higher Secondary School</p>
            </div>
          </div>
        </section>

        <section id="contact" className="section-block contact-wrap">
          <div className="contact-card reveal-item">
            <div className="contact-copy">
              <span className="section-tag">Contact</span>
              <h2>Let’s create something that stands out.</h2>
            </div>
            <div className="contact-details">
              <p><strong>Phone:</strong> 9994098295</p>
              <p><strong>Email:</strong> suryaesec001@gmail.com</p>
              <p>
                <strong>LinkedIn:</strong>{' '}
                <a href="https://www.linkedin.com/in/surya-s-33039828a/" target="_blank" rel="noreferrer">surya-s-33039828a</a>
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <p>© 2026 Surya S | UI/UX Designer</p>
      </footer>
    </div>
  );
}

export default App;
