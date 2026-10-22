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

  const featuredPost = filteredPosts.find((p) => p.isFeatured) || filteredPosts[0];
  const regularPosts = filteredPosts.filter((p) => p.slug !== featuredPost?.slug);

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

      {/* ── 2. Featured Article & Grid (Light Alt Section) ── */}
      <section className="section section--alt">
        <div className="container">
          {featuredPost && (
            <article className="agency-card blog-featured-card">
              <div className="blog-featured-media">
                <img src={featuredPost.image} alt={featuredPost.title} loading="eager" />
                <span className="blog-card__category">{featuredPost.category}</span>
              </div>
              <div className="blog-featured-content">
                <div className="blog-card__meta">
                  <span>{featuredPost.date}</span> • <span>{featuredPost.readTime}</span>
                </div>
                <h2>
                  <Link to={`/blog/${featuredPost.slug}`}>{featuredPost.title}</Link>
                </h2>
                <p>{featuredPost.excerpt}</p>
                <div className="blog-featured-footer">
                  <span className="blog-card__author">{featuredPost.author}</span>
                  <Link to={`/blog/${featuredPost.slug}`} className="blog-featured-cta">
                    Read Full Article →
                  </Link>
                </div>
              </div>
            </article>
          )}

          {/* Regular Posts Grid */}
          <div className="grid-3" style={{ marginTop: '48px' }}>
            {regularPosts.map((post) => (
              <article key={post._id || post.slug} className="agency-card blog-card">
                <div className="blog-card__media">
                  <img src={post.image} alt={post.title} loading="lazy" />
                  <span className="blog-card__category">{post.category}</span>
                </div>
                <div className="blog-card__body">
                  <div className="blog-card__meta">
                    <span>{post.date}</span> • <span>{post.readTime}</span>
                  </div>
                  <h3>
                    <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                  </h3>
                  <p>{post.excerpt}</p>
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
        </div>
      </section>
    </main>
  );
}
