import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <main className="section" style={{ minHeight: '65vh', display: 'flex', alignItems: 'center' }}>
      <div className="container" style={{ maxWidth: '640px', textAlign: 'center' }}>
        <span className="badge-eyebrow" style={{ color: '#ef4444' }}>
          404 ERROR
        </span>
        <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '16px' }}>
          Page Not Found
        </h1>
        <p style={{ fontSize: '1.15rem', color: 'var(--clr-muted-dark)', marginBottom: '32px' }}>
          The page you're looking for doesn't exist or may have moved.
        </p>
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to="/" className="btn btn-primary">
            Back to Home
          </Link>
          <Link to="/services" className="btn btn-dark">
            Explore Services
          </Link>
        </div>
      </div>
    </main>
  );
}
