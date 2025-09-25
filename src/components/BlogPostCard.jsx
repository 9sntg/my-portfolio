import { Link } from 'react-router-dom';

function BlogPostCard({ slug, title, date, summary }) {
  return (
    <div style={{
      border: '1px solid #ddd',
      borderRadius: '8px',
      padding: '1rem',
      marginBottom: '1.5rem'
    }}>
      <h3>{title}</h3>
      <p><em>{date}</em></p>
      <p>{summary}</p>
      <Link to={`/blog/${slug}`}>Read more →</Link>
    </div>
  );
}

export default BlogPostCard;