import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

function Footer() {
  return (
    <footer
      style={{
        backgroundColor: '#ffeb3b', // amarillo
        marginTop: 'auto', // empuja el footer hacia abajo
        width: '100%',
      }}
    >
      <div
        style={{
          padding: '2rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          maxWidth: '1200px',
          margin: '0 auto',
          fontSize: '1rem',
        }}
      >
        {/* Left: Email */}
        <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
          <span style={{ color: '#777' }}>Say hi</span>
          <a
            href="mailto:santiagbv@gmail.com"
            style={{ color: '#000', textDecoration: 'none', fontWeight: 500 }}
          >
            santiagbv@gmail.com
          </a>
        </div>

        {/* Right: Icons */}
        <div style={{ display: 'flex', gap: '1.2rem' }}>
          <a href="https://linkedin.com/in/santiagbv" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={22} color="#000" />
          </a>
          <a href="https://github.com/jsantiagobv" target="_blank" rel="noopener noreferrer">
            <FaGithub size={22} color="#000" />
          </a>
          <a href="mailto:santiagbv@gmail.com">
            <FaEnvelope size={22} color="#000" />
          </a>
          {/* Add more icons if you'd like */}
        </div>
      </div>
    </footer>
  );
}

export default Footer;