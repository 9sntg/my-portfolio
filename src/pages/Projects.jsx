import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { professionalProjects, academicProjects } from '../data/projects';

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  
  // Calculate project counts
  const professionalCount = professionalProjects.length;
  const academicCount = academicProjects.length;
  const totalCount = professionalCount + academicCount;

  const renderDetailContent = (project) => {
    if (!project) return null;

    const isAcademic = project.course !== undefined;

    return (
      <div className="project-detail-overlay" onClick={() => setSelectedProject(null)}>
        <div className="project-detail-panel" onClick={(e) => e.stopPropagation()}>
          <button className="close-btn" onClick={() => setSelectedProject(null)}>×</button>
          <img src={project.image} alt={project.title} className="detail-image" />
          <h2 className="detail-title">{project.title}</h2>
          <p className="detail-description">{project.description}</p>

          {project.github && (
            <div className="detail-section">
              <p className="detail-label">Links & Repositories</p>
              <div style={{ 
                display: 'flex', 
                flexDirection: 'column', 
                gap: '0.75rem',
                marginTop: '0.5rem'
              }}>
                {Array.isArray(project.github) ? (
                  project.github.map((link, index) => (
                    <a 
                      key={index}
                      href={link.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      style={{ 
                        color: '#2563eb', 
                        textDecoration: 'none',
                        fontWeight: '500',
                        fontSize: '0.95rem',
                        padding: '0.5rem 0.75rem',
                        backgroundColor: '#f8fafc',
                        border: '1px solid #e2e8f0',
                        borderRadius: '6px',
                        transition: 'all 0.2s ease',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between'
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.backgroundColor = '#e0f2fe';
                        e.target.style.borderColor = '#0ea5e9';
                        e.target.style.transform = 'translateY(-1px)';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.backgroundColor = '#f8fafc';
                        e.target.style.borderColor = '#e2e8f0';
                        e.target.style.transform = 'translateY(0)';
                      }}
                    >
                      <span>{link.name}</span>
                      <span style={{ fontSize: '0.8rem', opacity: 0.7 }}>↗</span>
                    </a>
                  ))
                ) : (
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{ 
                      color: '#2563eb', 
                      textDecoration: 'none',
                      fontWeight: '500',
                      fontSize: '0.95rem',
                      padding: '0.5rem 0.75rem',
                      backgroundColor: '#f8fafc',
                      border: '1px solid #e2e8f0',
                      borderRadius: '6px',
                      transition: 'all 0.2s ease',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = '#e0f2fe';
                      e.target.style.borderColor = '#0ea5e9';
                      e.target.style.transform = 'translateY(-1px)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = '#f8fafc';
                      e.target.style.borderColor = '#e2e8f0';
                      e.target.style.transform = 'translateY(0)';
                    }}
                  >
                    <span>View on GitHub</span>
                    <span style={{ fontSize: '0.8rem', opacity: 0.7 }}>↗</span>
                  </a>
                )}
              </div>
            </div>
          )}

          {isAcademic ? (
            <>
              <div className="detail-section">
                <p className="detail-label">Course</p>
                <p>{project.course}</p>
              </div>
              <div className="detail-section">
                <p className="detail-label">Institution</p>
                <p>{project.institution}</p>
              </div>
              <div className="detail-section">
                <p className="detail-label">Role</p>
                <p>{project.role}</p>
              </div>
              <div className="detail-section">
                <p className="detail-label">Timeline</p>
                <p>{project.timeline}</p>
              </div>
              <div className="detail-section">
                <p className="detail-label">Goal</p>
                <p>{project.goal}</p>
              </div>
              <div className="detail-section">
                <p className="detail-label">Outcome</p>
                <p>{project.outcome}</p>
              </div>
            </>
          ) : (
            <>
              <div className="detail-section">
                <p className="detail-label">Company</p>
                <p>{project.company}</p>
              </div>
              <div className="detail-section">
                <p className="detail-label">Location</p>
                <p>{project.location}</p>
              </div>
              <div className="detail-section">
                <p className="detail-label">Industry</p>
                <p>{project.industry}</p>
              </div>
              <div className="detail-section">
                <p className="detail-label">Role</p>
                <p>{project.role}</p>
              </div>
              <div className="detail-section">
                <p className="detail-label">Timeline</p>
                <p>{project.timeline}</p>
              </div>
              <div className="detail-section">
                <p className="detail-label">Problem</p>
                <p>{project.problem}</p>
              </div>
              <div className="detail-section">
                <p className="detail-label">Solution</p>
                <p>{project.solution}</p>
              </div>
            </>
          )}

          <div className="detail-section">
            <p className="detail-label">Skills</p>
            <p>{project.techStack.join(', ')}</p>
          </div>

          <div className="project-tags">
            {project.tags.map((tag, idx) => (
              <span key={idx} className="project-tag">{tag}</span>
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      <main className="projects-wrapper" style={{ flex: 1 }}>
        <h1 className="about-title">Projects</h1>
        <p className="about-subtitle">Swipe ➡️ to discover the {totalCount} projects I've built recently.</p>
        <p className="about-subtitle">🚀 Eager to keep learning and growing—{professionalCount} professional projects and {academicCount} academic projects completed!</p>
        <p className="about-subtitle">💻 Click on academic projects to explore details and visit the repositories!</p>

        <h2 className="projects-section-title" style={{ marginBottom: '1rem' }}>Professional Projects</h2>
        <div className="projects-scroll-container">
          {[...professionalProjects].reverse().map((project) => (
            <div
              className="project-card"
              key={project.id}
              onClick={() => setSelectedProject(project)}
              style={{ cursor: 'pointer' }}
            >
              <img src={project.image} alt={project.title} className="project-image" />
              <div className="project-content">
                <h2 className="project-title">{project.title}</h2>
                <p className="project-description">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, index) => (
                    <span className="project-tag" key={index}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <h2 className="projects-section-title" style={{ marginBottom: '1rem' }}>Academic Projects</h2>
        <div className="projects-scroll-container">
          {[...academicProjects].reverse().map((project) => (
            <div
              className="project-card"
              key={project.id}
              onClick={() => setSelectedProject(project)}
              style={{ cursor: 'pointer' }}
            >
              <img src={project.image} alt={project.title} className="project-image" />
              <div className="project-content">
                <h2 className="project-title">{project.title}</h2>
                <p className="project-description">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, index) => (
                    <span className="project-tag" key={index}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {renderDetailContent(selectedProject)}
      </main>
      <Footer />
    </div>
  );
}

export default Projects;