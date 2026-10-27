import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BLOG_POSTS as FALLBACK_POSTS } from '../data/blogData';
import { useSettings } from '../context/SettingsContext';
import './Blog.css';

const CATEGORIES = [
  'All',
  'Web Development',
  'SEO',
  'Digital Marketing',
  'Ecommerce',
  'Technology',
  'Branding',
  'Infrastructure',
  'Business',
];

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [posts, setPosts] = useState(FALLBACK_POSTS);
  const [loading, setLoading] = useState(true);
  const { settings } = useSettings();

  const brand = settings.siteName || 'DigiMarket';

  useEffect(() => {
    const fetchLiveBlogs = async () => {
      try {
        const res = await fetch('/api/blogs');
        if (res.ok) {
          const data = await res.json();
          if (data.success && data.data && data.data.length > 0) {
            setPosts(data.data);
          }
        }
      } catch (err) {
        console.warn('Could not load live blogs from backend, using fallback repository:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchLiveBlogs();
  }, []);

  const filteredPosts =
    activeCategory === 'All'
      ? posts
      : posts.filter((p) =>
          p.category.toLowerCase().includes(activeCategory.toLowerCase())
        );

  return (
    <main className="blog-page">
      {/* ── 1. Dark Hero Section ── */}
      <section className="section section--dark blog-hero">
        <div className="container">
          <nav className="breadcrumbs" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span className="breadcrumbs-sep">/</span>
            <span className="breadcrumbs-current">Blog</span>
          </nav>

          <span className="badge-eyebrow badge-eyebrow--pill badge-eyebrow--white">
            AGENCY PUBLICATION
          </span>
          <h1 className="blog-hero__title">Ideas, Insights & Digital Thinking</h1>
          <p className="blog-hero__subtitle">
            Strategic perspectives on software engineering, performance marketing, search systems, and enterprise infrastructure from {brand}.
          </p>

          <div className="blog-category-bar">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                className={`blog-cat-btn${activeCategory === cat ? ' blog-cat-btn--active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── 2. Blog Posts Grid (Light Alt Section) ── */}
      <section className="section section--alt blog-listing-section">
        <div className="container blog-container">
          {filteredPosts.length === 0 ? (
            <div className="blog-empty-state">
              <p>No articles found in this category.</p>
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => setActiveCategory('All')}
              >
                View All Articles
              </button>
            </div>
          ) : (
            <div
              className={`blog-grid ${
                filteredPosts.length === 2 ? 'blog-grid--two-posts' : ''
              } ${filteredPosts.length === 1 ? 'blog-grid--single-post' : ''}`}
            >
              {filteredPosts.map((post) => (
                <article key={post._id || post.slug || post.id} className="agency-card blog-card">
                  <div className="blog-card__media">
                    <img src={post.image} alt={post.title} loading="lazy" />
                    <span className="blog-card__category">{post.category}</span>
                  </div>
                  <div className="blog-card__body">
                    <div className="blog-card__meta">
                      <span>{post.date}</span>
                      <span className="blog-card__meta-divider">•</span>
                      <span>{post.readTime}</span>
                    </div>
                    <h3 className="blog-card__title">
                      <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                    </h3>
                    <p className="blog-card__excerpt">{post.excerpt}</p>
                    <div className="blog-card__footer">
                      <span className="blog-card__author">{post.author}</span>
                      <Link to={`/blog/${post.slug}`} className="blog-card__link">
                        Read →
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
