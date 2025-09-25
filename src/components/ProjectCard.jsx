function ProjectCard({ title, description, tech, link }) {
  return (
    <div style={{
      border: '1px solid #ddd',
      borderRadius: '8px',
      padding: '1rem',
      marginBottom: '1.5rem',
      boxShadow: '0 2px 6px rgba(0, 0, 0, 0.05)'
    }}>
      <h3>{title}</h3>
      <p>{description}</p>
      <p><strong>Tech:</strong> {tech}</p>
      {link && <a href={link} target="_blank" rel="noopener noreferrer">View Project</a>}
    </div>
  );
}

export default ProjectCard;