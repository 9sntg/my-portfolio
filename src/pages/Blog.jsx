import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BlogPostCard from '../components/BlogPostCard';

function Blog() {
  const posts = [
    {
      slug: 'monument-valley',
      title: 'Why I Love Monument Valley',
      date: 'June 2025',
      summary: 'Exploring how a mobile puzzle game influenced my design thinking, aesthetic values, and attention to user experience.'
    },
    {
      slug: 'movie-recommender',
      title: 'My Experience Building a Movie Recommender',
      date: 'May 2025',
      summary: 'Lessons learned from designing a large-scale recommendation system using Spark, Kafka, and MLflow.'
    },
    {
      slug: 'xai-healthcare',
      title: 'The Value of Explainability in AI',
      date: 'April 2025',
      summary: 'How I used SHAP and GradCAM to build trust in AI systems — and why that matters in healthcare and beyond.'
    }
  ];

  return (
    <>
      <Navbar />
      <main style={{ maxWidth: '800px', margin: '2rem auto', padding: '1rem' }}>
        <h2>Blog</h2>
        {posts.map((post, index) => (
          <BlogPostCard key={index} {...post} />
        ))}
      </main>
      <Footer/>
    </>
  );
}

export default Blog;