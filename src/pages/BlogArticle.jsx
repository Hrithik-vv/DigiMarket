import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { BLOG_POSTS as FALLBACK_POSTS } from '../data/blogData';
import { WHATSAPP_URL } from '../config/contact.config';
import { useSettings } from '../context/SettingsContext';
import './Blog.css';

export default function BlogArticle() {
  const { slug } = useParams();
  const { settings } = useSettings();
  const brand = settings.siteName || 'DigiMarket';

  const [post, setPost] = useState(() =>
    FALLBACK_POSTS.find((p) => p.slug === slug) || FALLBACK_POSTS[0]
  );
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });

    const fetchArticle = async () => {
      try {
        const res = await fetch(`/api/blogs/${slug}`);
        if (res.ok) {
          const data = await res.json();
          if (data.success && data.data) {
            setPost(data.data);
          }
        }
      } catch (err) {
        console.warn('Using local fallback for article details:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchArticle();
  }, [slug]);

  if (!post) {
    return (
      <main className="section">
        <div className="container" style={{ textAlign: 'center', padding: '60px 0' }}>
          <h2>Article Not Found</h2>
          <Link to="/blog" className="btn btn-primary" style={{ marginTop: '24px' }}>
            Back to Blog
          </Link>
        </div>
      </main>
    );
  }

  const relatedPosts = FALLBACK_POSTS.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <main className="article-page">
      {/* ── 1. Dark Article Header ── */}
      <section className="section section--dark article-hero">
        <div className="container" style={{ maxWidth: '880px' }}>
          <nav className="breadcrumbs" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span className="breadcrumbs-sep">/</span>
            <Link to="/blog">Blog</Link>
            <span className="breadcrumbs-sep">/</span>
            <span className="breadcrumbs-current">{post.category}</span>
          </nav>

          <span className="badge-eyebrow badge-eyebrow--pill badge-eyebrow--white">
            {post.category?.toUpperCase()}
          </span>
          <h1 className="article-hero__title">{post.title}</h1>
          <div className="article-hero__meta">
            <span>By <strong>{post.author}</strong></span> • <span>Published {post.date}</span> • <span>{post.readTime}</span>
          </div>
        </div>
      </section>

      {/* ── 2. Featured Image ── */}
      <section className="section" style={{ padding: '40px 0 0' }}>
        <div className="container" style={{ maxWidth: '1000px' }}>
          <div className="article-featured-img">
            <img src={post.image} alt={post.title} />
          </div>
        </div>
      </section>

      {/* ── 3. Article Content (Maximum Comfortable Reading Width) ── */}
      <article className="section">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div
            className="article-body-content"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Inline CTA */}
          <div className="agency-card article-inline-cta" style={{ marginTop: '56px' }}>
            <span className="badge-eyebrow">CONSULTATION</span>
            <h3>Need technical guidance on this topic for your enterprise?</h3>
            <p>
              {brand}'s engineering and digital growth specialists consult directly with businesses across India and the GCC.
            </p>
            <div style={{ marginTop: '24px', display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
              <Link to="/contact" className="btn btn-primary">
                Consult Our Team →
              </Link>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp">
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </article>

      {/* ── 4. Related Articles ── */}
      {relatedPosts.length > 0 && (
        <section className="section section--alt">
          <div className="container" style={{ maxWidth: '1000px' }}>
            <div className="section-head">
              <span className="badge-eyebrow">CONTINUE READING</span>
              <h2>Related Insights</h2>
            </div>

            <div className="grid-2">
              {relatedPosts.map((p) => (
                <article key={p.id || p.slug} className="agency-card blog-card">
                  <div className="blog-card__media">
                    <img src={p.image} alt={p.title} loading="lazy" />
                    <span className="blog-card__category">{p.category}</span>
                  </div>
                  <div className="blog-card__body">
                    <div className="blog-card__meta">
                      <span>{p.date}</span> • <span>{p.readTime}</span>
                    </div>
                    <h3>
                      <Link to={`/blog/${p.slug}`}>{p.title}</Link>
                    </h3>
                    <p>{p.excerpt}</p>
                    <div className="blog-card__footer">
                      <span className="blog-card__author">{p.author}</span>
                      <Link to={`/blog/${p.slug}`} className="blog-card__link">
                        Read →
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
