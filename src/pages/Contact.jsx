import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Contact() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      <main style={{ maxWidth: '600px', margin: '2rem auto', padding: '1rem', flex: 1 }}>
        <h2>Contact</h2>

        {/* Contact Info Section */}
        <div style={{ marginBottom: '2rem' }}>
          <p>You can reach out directly or use the form below — I’d love to connect!</p>
          <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
            <li><strong>Email:</strong> <a href="mailto:santiagobv@example.com">santiagobv@example.com</a></li>
            <li><strong>LinkedIn:</strong> <a href="https://linkedin.com/in/santiagobv" target="_blank" rel="noopener noreferrer">linkedin.com/in/santiagobv</a></li>
            <li><strong>GitHub:</strong> <a href="https://github.com/santiagobv" target="_blank" rel="noopener noreferrer">github.com/santiagobv</a></li>
          </ul>
        </div>

        {/* Contact Form Section */}
        <form
          action="https://formspree.io/f/your-form-id"
          method="POST"
          style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
        >
          <label>
            Name:
            <input type="text" name="name" required style={{ width: '100%', padding: '0.5rem' }} />
          </label>

          <label>
            Email:
            <input type="email" name="email" required style={{ width: '100%', padding: '0.5rem' }} />
          </label>

          <label>
            Message:
            <textarea name="message" rows="5" required style={{ width: '100%', padding: '0.5rem' }}></textarea>
          </label>

          <button type="submit" style={{ padding: '0.75rem', background: '#1a1a1a', color: '#fff', border: 'none' }}>
            Send Message
          </button>
        </form>
      </main>
      <Footer/>
    </div>
  );
}

export default Contact;