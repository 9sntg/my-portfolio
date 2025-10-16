import Navbar from './components/Navbar';
import Footer from './components/Footer'; // ✅ new
import { Typewriter } from 'react-simple-typewriter';

function App() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', width: '100%' }}>
      <Navbar />
      <main
        style={{
          padding: '6rem 2rem 2rem', // reduce bottom padding
          maxWidth: '1200px',
          margin: '0 auto',
          flex: 1, // ocupa el espacio disponible
        }}
      >
        <section style={{ lineHeight: 1.2 }}>
          <h1
            style={{
              fontSize: 'clamp(2.5rem, 10vw, 7rem)',
              fontWeight: 700,
              margin: 0,
            }}
          >
            Hi,
          </h1>
          <h1
            style={{
              fontSize: 'clamp(2.5rem, 10vw, 7rem)',
              fontWeight: 700,
              margin: 0,
            }}
          >
            I’m Santiago!
          </h1>

          {/* Typewriter Line */}
          <div
            style={{
              fontSize: 'clamp(1.5rem, 5vw, 3rem)',
              fontWeight: 300,
              marginTop: '2rem',
              marginBottom: '2rem',
              maxWidth: '800px',
              minHeight: '3.5rem',
              position: 'relative',
            }}
          >
            <span style={{ opacity: 0 }}>
              Where business meets technology — that’s where I like to build.
            </span>
            <div style={{ position: 'absolute', top: 0, left: 0 }}>
              <Typewriter
                words={[
                  'Where business meets technology — that’s where I like to build.',
                ]}
                loop={1}
                cursor
                cursorStyle="|"
                typeSpeed={60}
                deleteSpeed={0}
                delaySpeed={0}
                onLoopDone={() => {
                  const cursor = document.querySelector('.typewriter-cursor');
                  if (cursor) cursor.style.display = 'none';
                }}
              />
            </div>
          </div>

          <p
            style={{
              fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
              fontWeight: 400,
              color: '#000', // Black font
              marginBottom: '0.5rem'
            }}
          >
            📍 Based in Bogotá, Colombia.
          </p>

          <p
            style={{
              fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
              fontWeight: 400,
              color: '#000', // Black font
            }}
          >
            💼 AI Engineering Intern at Atria
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;