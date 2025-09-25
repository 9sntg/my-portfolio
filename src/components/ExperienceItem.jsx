function ExperienceItem({ role, company, date, description }) {
  return (
    <div style={{
      borderLeft: '4px solid #ccc',
      paddingLeft: '1rem',
      marginBottom: '1.5rem'
    }}>
      <h3>{role} @ {company}</h3>
      <p><em>{date}</em></p>
      <p>{description}</p>
    </div>
  );
}

export default ExperienceItem;