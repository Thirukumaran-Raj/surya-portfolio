import './index.css';

function App() {
  const skills = [
    "Figma", "Adobe XD", "Adobe Photoshop", "Adobe Illustrator", "Canva",
    "User Research", "User Personas", "Wireframing", "Prototyping",
    "Usability Testing", "Interaction Design", "Responsive Design", "Accessibility"
  ];

  const handleScroll = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <header className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Surya S</h1>
            <h3>UI/UX Designer & Graphic Designer</h3>
            <p>
              Creating intuitive, accessible, and visually appealing
              digital experiences that solve real user problems.
            </p>
            <a 
              href="#contact" 
              className="btn" 
              onClick={(e) => handleScroll(e, 'contact')}
            >
              Contact Me
            </a>
          </div>

          <div className="hero-image">
            {/* Make sure to place your surya.jpeg file inside the public folder */}
            <img src="/surya.jpeg" alt="Surya S" />
          </div>
        </div>
      </header>

      {/* About Section */}
      <section id="about">
        <h2>About Me</h2>
        <div className="card">
          <p>
            Creative UI/UX Designer and Graphic Designer with hands-on experience
            in user research, wireframing, prototyping, usability testing,
            and responsive design. Passionate about creating user-friendly
            digital experiences.
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills">
        <h2>Skills</h2>
        <div className="skill-container">
          {skills.map((skill, index) => (
            <span key={index}>{skill}</span>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects">
        <h2>Projects</h2>

        <div className="card">
          <h3>Expense Tracker & Management</h3>
          <p style={{ margin: "5px 0 10px" }}>
            <a 
              href="https://www.figma.com/design/tWGjA8gP7DV4yzhhSVIyPo/Untitled?node-id=0-1&t=ZMjQo6WYQJVL10Nv-1" 
              target="_blank" 
              rel="noreferrer"
              style={{ color: '#3b82f6', textDecoration: 'none', fontWeight: '600' }}
            >
              View Project
            </a>
          </p>
          <p>
            Designed a complete expense tracking application with custom
            navigation, wireframes, high-fidelity mockups, and accessible
            design principles.
          </p>
        </div>

        <div className="card">
          <h3>Food Delivery App</h3>
          <p style={{ margin: "5px 0 10px" }}>
            <a 
              href="https://www.figma.com/design/0PfDujM0ja9z7nHrOYrDfM/Untitled?node-id=0-1&t=koMmhXaw6czlwyFh-1" 
              target="_blank" 
              rel="noreferrer"
              style={{ color: '#3b82f6', textDecoration: 'none', fontWeight: '600' }}
            >
              View Project
            </a>
          </p>
          <p>
            Designed end-to-end user flows, reusable UI components,
            responsive layouts, and optimized checkout experiences.
          </p>
        </div>
      </section>

      {/* Internship Section */}
      <section id="experience">
        <h2>Internship Experience</h2>
        <div className="card">
          <h3>UI/UX Design Intern</h3>
          <ul>
            <li>Conducted User Research and User Persona creation</li>
            <li>Performed Usability Testing</li>
            <li>Designed 15+ Screens</li>
            <li>Created User Flows and Wireframes</li>
            <li>Applied Accessibility Best Practices</li>
            <li>Designed Responsive Interfaces</li>
          </ul>
        </div>
      </section>

      {/* Education Section */}
      <section id="education">
        <h2>Education</h2>
        <div className="card">
          <h3>B.Tech - Information Technology</h3>
          <p>Erode Sengunthar Engineering College</p>
          <p>CGPA: 7.3</p>
          <p>Expected Graduation: May 2027</p>
        </div>

        <div className="card">
          <h3>Higher Secondary Education</h3>
          <p>Paavendhar Matric Higher Secondary School</p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact">
        <h2>Contact</h2>
        <div className="card">
          <p style={{ marginBottom: '8px' }}><strong>Phone:</strong> 9994098295</p>
          <p style={{ marginBottom: '8px' }}><strong>Email:</strong> suryaesec001@gmail.com</p>
          <p><strong>LinkedIn:</strong> <a href="https://linkedin.com/in/surya-s-33039828" target="_blank" rel="noreferrer" style={{ color: '#3b82f6', textDecoration: 'none' }}>linkedin.com/in/surya-s-33039828a</a></p>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <p>© 2026 Surya S | UI/UX Designer</p>
      </footer>
    </div>
  );
}

export default App;
