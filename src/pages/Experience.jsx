import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Academic experience data
const academicExperiences = [
  {
    id: 'academic-1',
    year: "2024-2025",
    role: "AI Engineering Intern",
    company: "Atria",
    industry: "AI/Technology",
    duration: "Current",
    description: "Developing AI agents to automate client conversations across social media platforms.",
    technologies: ["AI", "Social Media APIs", "Python", "Machine Learning"],
    achievements: [
      "Designing scalable AI architectures",
      "Integrating AI systems with social media platforms",
      "Building automation solutions for client communication"
    ]
  },
  {
    id: 'academic-2',
    year: "2024-2025",
    role: "Master's Student",
    company: "Carnegie Mellon University",
    industry: "Education",
    duration: "Current",
    description: "Pursuing Master's in Information Systems Management with focus on AI and distributed systems.",
    technologies: ["Distributed Systems", "Machine Learning", "Data Analytics", "Software Engineering"],
    achievements: [
      "Developing movie recommendation system with MLOps",
      "Building distributed dictionary application",
      "Learning production-ready AI systems"
    ]
  },
  {
    id: 'academic-3',
    year: "2023-2024",
    role: "Graduate Student",
    company: "Universidad de Los Andes",
    industry: "Education",
    duration: "1 year",
    description: "Completed coursework in software architecture, web development, and team software development.",
    technologies: ["Software Architecture", "Web Development", "Team Development", "Microservices"],
    achievements: [
      "Redesigned Chiper's microservices architecture",
      "Developed digital content management system",
      "Built Canem pet walker booking platform"
    ]
  }
];

// Professional experience data
const professionalExperiences = [
  {
    id: 1,
    year: "2023-2024",
    role: "Tech Lead/Developer",
    company: "Aruban Bank",
    industry: "Banking",
    duration: "7 months",
    description: "Led data migration project with system integration and zero-downtime deployment.",
    technologies: ["SQL", "Python", "APIs", "Data Migration"],
    achievements: [
      "Successfully migrated critical banking data",
      "Implemented zero-downtime deployment strategy",
      "Led cross-functional development team"
    ]
  },
  {
    id: 2,
    year: "2022",
    role: "IT Architect/Product Manager",
    company: "AMV",
    industry: "Financial Services",
    duration: "4 months",
    description: "Developed IT & Data strategy with focus on analytics and fraud detection systems.",
    technologies: ["Machine Learning", "IT Architecture", "Analytics"],
    achievements: [
      "Designed comprehensive IT strategy",
      "Implemented fraud detection algorithms",
      "Created analytics use cases framework"
    ]
  },
  {
    id: 3,
    year: "2022",
    role: "Business Analyst",
    company: "Microfinance Bank",
    industry: "Banking",
    duration: "3 months",
    description: "Strategic planning and analytics with portfolio analysis and Power BI dashboards.",
    technologies: ["Data Analysis", "Power BI", "Financial Analytics"],
    achievements: [
      "Developed strategic planning framework",
      "Created comprehensive portfolio analysis",
      "Built interactive Power BI dashboards"
    ]
  },
  {
    id: 4,
    year: "2021-2022",
    role: "Researcher/Product Manager",
    company: "Regional Bank",
    industry: "Banking",
    duration: "3 months",
    description: "Digital transformation strategy with app roadmap development and innovation office design.",
    technologies: ["Research", "IT Architecture", "Digital Strategy"],
    achievements: [
      "Developed digital transformation roadmap",
      "Designed mobile app strategy",
      "Created innovation office framework"
    ]
  },
  {
    id: 5,
    year: "2021",
    role: "Data Analyst",
    company: "Financial Services",
    industry: "Banking",
    duration: "3 months",
    description: "Lean process optimization with procurement and payment redesign for operational cost reduction.",
    technologies: ["Lean", "Agile", "Scrum", "Process Optimization"],
    achievements: [
      "Optimized procurement processes",
      "Redesigned payment workflows",
      "Reduced operational costs by 25%"
    ]
  },
  {
    id: 6,
    year: "2021",
    role: "Data Analyst/IT Architect",
    company: "Industrial Company",
    industry: "Manufacturing",
    duration: "4 months",
    description: "ERP selection and gap analysis with MS Dynamics implementation and integration framework design.",
    technologies: ["ERP", "MS Dynamics", "IT Architecture", "APIs"],
    achievements: [
      "Selected optimal ERP solution",
      "Implemented MS Dynamics",
      "Designed integration framework"
    ]
  }
];



function Experience() {
  const [expandedCards, setExpandedCards] = useState({});

  const toggleCard = (id) => {
    setExpandedCards(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      <main className="projects-wrapper" style={{ flex: 1 }}>
        <h1 className="about-title">Experience</h1>
        <p className="about-subtitle">Swipe ➡️ to discover the things I've built recently.</p>
        <p className="about-subtitle">🚀 Eager to keep learning and growing—many more projects to come!</p>

        {/* Academic Journey */}
        <h2 className="projects-section-title">Academic Journey</h2>

        {/* Academic Experience Cards */}
        <div className="experience-cards">
          {academicExperiences.map((experience) => (
            <div 
              key={experience.id} 
              className={`experience-card ${expandedCards[experience.id] ? 'expanded' : ''}`}
            >
              <div 
                className="experience-header"
                onClick={() => toggleCard(experience.id)}
              >
                <div className="experience-header-content">
                  <div className="experience-role-line">
                    <div className="experience-role">{experience.role}</div>
                    <div className="experience-year-toggle">
                      <div className="experience-year">{experience.year}</div>
                      <div className="experience-toggle">
                        {expandedCards[experience.id] ? (
                          <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
                            <path d="M1 7L6 2L11 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        ) : (
                          <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
                            <path d="M1 1L6 6L11 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="experience-company-line">
                    <div className="company-logo-placeholder"></div>
                    <div className="experience-company">{experience.company}</div>
                  </div>
                </div>
              </div>
              
              {expandedCards[experience.id] && (
                <div className="experience-content">
                  <div className="experience-details">
                    <div className="experience-industry">
                      <strong>Industry:</strong> {experience.industry}
                    </div>
                    <div className="experience-duration">
                      <strong>Duration:</strong> {experience.duration}
                    </div>
                    <div className="experience-description">
                      {experience.description}
                    </div>
                  </div>

                  <div className="experience-technologies">
                    <strong>Technologies:</strong>
                    <div className="tech-tags">
                      {experience.technologies.map((tech, idx) => (
                        <span key={idx} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                  </div>

                  <div className="experience-achievements">
                    <strong>Key Achievements:</strong>
                    <ul>
                      {experience.achievements.map((achievement, idx) => (
                        <li key={idx}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Professional Journey */}
        <h2 className="projects-section-title">Professional Journey</h2>

        {/* Professional Experience Cards */}
        <div className="experience-cards">
          {professionalExperiences.map((experience) => (
            <div 
              key={experience.id} 
              className={`experience-card ${expandedCards[experience.id] ? 'expanded' : ''}`}
            >
              <div 
                className="experience-header"
                onClick={() => toggleCard(experience.id)}
              >
                <div className="experience-header-content">
                  <div className="experience-role-line">
                    <div className="experience-role">{experience.role}</div>
                    <div className="experience-year-toggle">
                      <div className="experience-year">{experience.year}</div>
                      <div className="experience-toggle">
                        {expandedCards[experience.id] ? (
                          <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
                            <path d="M1 7L6 2L11 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        ) : (
                          <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
                            <path d="M1 1L6 6L11 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="experience-company-line">
                    <div className="company-logo-placeholder"></div>
                    <div className="experience-company">{experience.company}</div>
                  </div>
                </div>
              </div>
              
              {expandedCards[experience.id] && (
                <div className="experience-content">
                  <div className="experience-details">
                    <div className="experience-industry">
                      <strong>Industry:</strong> {experience.industry}
                    </div>
                    <div className="experience-duration">
                      <strong>Duration:</strong> {experience.duration}
                    </div>
                    <div className="experience-description">
                      {experience.description}
                    </div>
                  </div>

                  <div className="experience-technologies">
                    <strong>Technologies:</strong>
                    <div className="tech-tags">
                      {experience.technologies.map((tech, idx) => (
                        <span key={idx} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                  </div>

                  <div className="experience-achievements">
                    <strong>Key Achievements:</strong>
                    <ul>
                      {experience.achievements.map((achievement, idx) => (
                        <li key={idx}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

      </main>
      <Footer />
    </div>
  );
}

export default Experience;