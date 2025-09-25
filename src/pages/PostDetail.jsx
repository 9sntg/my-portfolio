import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';

const blogPosts = {
  'monument-valley': {
    title: 'Why I Love Monument Valley',
    date: 'June 2025',
    content: `
      Monument Valley is more than just a game — it's a masterclass in minimalist design and storytelling.
      It taught me how aesthetics and interactivity can shape how users feel while navigating digital experiences.
      The soft palette, the impossibly clever architecture, the quiet… I want my own projects to feel like that.
    `
  },
  'movie-recommender': {
    title: 'My Experience Building a Movie Recommender',
    date: 'May 2025',
    content: `
      Building a recommender system from scratch taught me how hard it is to go from data to value.
      From Spark pipelines to MLflow tracking, I learned how to debug performance, integrate with real-time streams, and evaluate what “good” actually means.
    `
  },
  'xai-healthcare': {
    title: 'The Value of Explainability in AI',
    date: 'April 2025',
    content: `
      Trust is essential in AI. Using SHAP and GradCAM in a diagnostic setting opened my eyes to the power of transparency.
      Patients (and practitioners) should always be able to ask, “Why did the model say that?” — and actually get an answer.
    `
  }
};

function PostDetail() {
  const { slug } = useParams();
  const post = blogPosts[slug];

  if (!post) {
    return (
      <>
        <Navbar />
        <main style={{ maxWidth: '800px', margin: '2rem auto', padding: '1rem' }}>
          <h2>Post not found</h2>
        </main>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main style={{ maxWidth: '800px', margin: '2rem auto', padding: '1rem' }}>
        <h2>{post.title}</h2>
        <p><em>{post.date}</em></p>
        <p>{post.content}</p>
      </main>
    </>
  );
}

export default PostDetail;