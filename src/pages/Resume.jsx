import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Resume() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      <main style={{ maxWidth: '800px', margin: '2rem auto', padding: '1rem', flex: 1 }}>
        <h2>Resume</h2>

        <p>
          Download a copy: <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">View PDF</a>
        </p>

        <h3>Education</h3>
        <ul>
          <li>
            <strong>Carnegie Mellon University</strong><br />
            MS in [Your Program] – Expected [Year]
          </li>
        </ul>

        <h3>Experience</h3>
        <ul>
          <li>
            <strong>Princeton University – Data Science Intern</strong><br />
            Summer 2025<br />
            Worked on academic systems and data visualization tools.
          </li>
          <li>
            <strong>CMU – Teaching Assistant, Distributed Systems</strong><br />
            Spring 2025<br />
            Supported blockchain and secure communications projects.
          </li>
        </ul>

        <h3>Skills</h3>
        <ul>
          <li>Python, JavaScript, React, Flask, SQL</li>
          <li>Machine Learning, Recommender Systems, MLflow</li>
          <li>Git, Docker, Kafka, PostgreSQL</li>
        </ul>

        <h3>Languages</h3>
        <ul>
          <li>English (fluent), Spanish (native)</li>
        </ul>
      </main>
      <Footer/>
    </div>
  );
}

export default Resume;