// src/pages/Home.jsx

import { Link } from 'react-router-dom';
import './Home.css';  // We will add custom CSS here

function Home() {
  return (
    <div className="home-container">
      {/* Hero Section */}
        

      <section className="hero-section d-flex align-items-center">
        <div className="container text-center">
          <h1 className="display-4 text-white">Welcome to My Portfolio</h1>
          <p className="lead text-white-50">Showcasing my skills and projects</p>
          <Link to="/projects" className="btn btn-primary btn-lg mx-2">View Projects</Link>
          <Link to="/skills" className="btn btn-outline-light btn-lg mx-2">See My Skills</Link>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <img src="your-image.jpg" alt="Profile" className="img-fluid rounded" />
            </div>
            <div className="col-md-6">
              <h2>About Me</h2>
              <p>I am a passionate software developer with experience in full-stack development, specializing in MERN stack technologies...</p>
              <Link to="/projects" className="btn btn-secondary">Explore More</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Preview Section */}
      <section className="skills-preview-section py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-4">My Skills</h2>
          <div className="row text-center">
            <div className="col-md-4">
              <i className="bi bi-code-slash display-4 text-primary"></i>
              <h4 className="mt-3">Web Development</h4>
              <p>HTML, CSS, JavaScript, React, Bootstrap</p>
            </div>
            <div className="col-md-4">
              <i className="bi bi-database display-4 text-success"></i>
              <h4 className="mt-3">Backend Development</h4>
              <p>Node.js, Express, MongoDB</p>
            </div>
            <div className="col-md-4">
              <i className="bi bi-cloud-arrow-up display-4 text-info"></i>
              <h4 className="mt-3">Cloud Services</h4>
              <p>AWS, Firebase, Heroku</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Preview Section */}
      <section className="projects-preview-section py-5">
        <div className="container">
          <h2 className="text-center mb-4">Featured Projects</h2>
          <div className="row">
            <div className="col-md-4">
              <div className="card">
                <img src="project-image.jpg" className="card-img-top" alt="Project" />
                <div className="card-body">
                  <h5 className="card-title">Project 1</h5>
                  <p className="card-text">A short description of the project.</p>
                  <Link to="/projects" className="btn btn-primary">Learn More</Link>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <img src="project-image.jpg" className="card-img-top" alt="Project" />
                <div className="card-body">
                  <h5 className="card-title">Project 2</h5>
                  <p className="card-text">A short description of the project.</p>
                  <Link to="/projects" className="btn btn-primary">Learn More</Link>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <img src="project-image.jpg" className="card-img-top" alt="Project" />
                <div className="card-body">
                  <h5 className="card-title">Project 3</h5>
                  <p className="card-text">A short description of the project.</p>
                  <Link to="/projects" className="btn btn-primary">Learn More</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
