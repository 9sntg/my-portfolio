import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { academicExperiences, professionalExperiences } from '../data/experience';

function Experience() {
  const [selectedExperience, setSelectedExperience] = useState(null);

  const renderDetailContent = (experience) => {
    if (!experience) return null;

    const isAcademic = !experience.industry;

    return (
      <div className="experience-detail-overlay" onClick={() => setSelectedExperience(null)}>
        <div className="experience-detail-panel" onClick={(e) => e.stopPropagation()}>
          <button className="close-btn" onClick={() => setSelectedExperience(null)}>×</button>
          
          <div className="experience-detail-header">
            <img 
              src={experience.logo} 
              alt={`${experience.company} logo`}
              className="detail-logo"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
            <div className="logo-placeholder" style={{ display: 'none' }}>
              {experience.company.charAt(0)}
            </div>
            <h2 className="detail-title">{isAcademic ? experience.title : experience.role}</h2>
          </div>
          <p className="detail-company">{experience.company}</p>
          <p className="detail-duration">{experience.duration}</p>
          
          {isAcademic && (
            <div className="detail-divider"></div>
          )}
          
          {!isAcademic && (
            <div className="detail-divider"></div>
          )}
          
          <div className="detail-section">
            <p className="detail-description">{experience.description}</p>
          </div>
          
          {experience.industry && (
            <div className="detail-section">
              <p className="detail-label">Industry</p>
              <p>{experience.industry}</p>
            </div>
          )}

          <div className="detail-section">
            <p className="detail-label">Technologies</p>
            <div className="tech-tags">
              {experience.technologies.map((tech, idx) => (
                <span key={idx} className="tech-tag">{tech}</span>
              ))}
            </div>
          </div>

          <div className="detail-section">
            <p className="detail-label">Key Achievements</p>
            <ul>
              {experience.achievements.map((achievement, idx) => (
                <li key={idx}>{achievement}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      <main className="projects-wrapper" style={{ flex: 1 }}>
        <h1 className="about-title">Experience</h1>
        <p className="about-subtitle">Click on any experience to explore details and achievements.</p>
        <p className="about-subtitle">🚀 From academic pursuits to professional consulting—building expertise across industries!</p>

        {/* Academic Journey */}
        <h2 className="projects-section-title">Academic Journey</h2>

        {/* Academic Experience Cards */}
        <div className="experience-cards">
          {[...academicExperiences].reverse().map((experience) => (
            <div 
              key={experience.id} 
              className="experience-card-simple"
              onClick={() => setSelectedExperience(experience)}
              style={{ cursor: 'pointer' }}
            >
              <div className="experience-card-content">
                <div className="experience-logo">
                  <img 
                    src={experience.logo} 
                    alt={`${experience.company} logo`}
                    className="logo-image"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div className="logo-placeholder" style={{ display: 'none' }}>
                    {experience.company.charAt(0)}
                  </div>
                </div>
                <div className="experience-info">
                  <div className="experience-title">{experience.title}</div>
                  <div className="experience-company">{experience.company}</div>
                  <div className="experience-duration">{experience.duration}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Professional Journey */}
        <h2 className="projects-section-title">Professional Journey</h2>

        {/* Professional Experience Cards */}
        <div className="experience-cards">
          {[...professionalExperiences].reverse().map((experience) => (
            <div 
              key={experience.id} 
              className="experience-card-simple"
              onClick={() => setSelectedExperience(experience)}
              style={{ cursor: 'pointer' }}
            >
              <div className="experience-card-content">
                <div className="experience-logo">
                  <img 
                    src={experience.logo} 
                    alt={`${experience.company} logo`}
                    className="logo-image"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div className="logo-placeholder" style={{ display: 'none' }}>
                    {experience.company.charAt(0)}
                  </div>
                </div>
                <div className="experience-info">
                  <div className="experience-title">{experience.role}</div>
                  <div className="experience-company">{experience.company}</div>
                  <div className="experience-duration">{experience.duration}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Detail Panel */}
        {selectedExperience && renderDetailContent(selectedExperience)}

      </main>
      <Footer />
    </div>
  );
}

export default Experience;