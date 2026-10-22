import { BrowserRouter, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import { AuthProvider } from './context/AuthContext';
import { SettingsProvider, useSettings } from './context/SettingsContext';

// Public Pages
import Home from './pages/Home';
import About from './pages/About';
import Work from './pages/Work';
import CaseStudyDetail from './pages/CaseStudyDetail';
import Blog from './pages/Blog';
import BlogArticle from './pages/BlogArticle';
import Careers from './pages/Careers';
import Contact from './pages/Contact';
import ServicePage from './pages/ServicePage';
import CategoryPage from './pages/CategoryPage';
import NotFound from './pages/NotFound';
import { PrivacyPolicy, Terms } from './pages/Legal';

// Admin Pages
import ProtectedRoute from './admin/components/ProtectedRoute';
import AdminLogin from './admin/pages/AdminLogin';
import AdminDashboard from './admin/pages/AdminDashboard';
import AdminServices from './admin/pages/AdminServices';
import AdminBlogs from './admin/pages/AdminBlogs';
import AdminEnquiries from './admin/pages/AdminEnquiries';
import AdminSettings from './admin/pages/AdminSettings';

import { ALL_SERVICES, SERVICE_CATEGORIES } from './data/servicesData';
import { SITE_NAME } from './config/contact.config';

/* Scroll to top automatically on route change */
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);
  return null;
}

/* Dynamic Page Title and Meta Updater based on Settings */
function PageTitleHandler() {
  const { settings } = useSettings();
  const { pathname } = useLocation();

  useEffect(() => {
    const brand = settings.siteName || SITE_NAME;
    let pageTitle = `${brand} — Digital Engineering & Growth Agency`;

    if (pathname.startsWith('/admin')) {
      pageTitle = `${brand} — Admin Control Center`;
    } else if (pathname === '/') {
      pageTitle = `${brand} — Digital Engineering & Growth Agency`;
    } else if (pathname.startsWith('/about')) {
      pageTitle = `About Us — ${brand}`;
    } else if (pathname.startsWith('/contact')) {
      pageTitle = `Contact Our Engineering Team — ${brand}`;
    } else if (pathname.startsWith('/blog')) {
      pageTitle = `Insights & Engineering Blog — ${brand}`;
    } else if (pathname.startsWith('/careers')) {
      pageTitle = `Careers & Engineering Roles — ${brand}`;
    } else if (pathname.startsWith('/our-work')) {
      pageTitle = `Our Work & Case Studies — ${brand}`;
    } else if (pathname.startsWith('/services')) {
      pageTitle = `Digital Engineering & Growth Services — ${brand}`;
    }

    document.title = pageTitle;

    // Update meta tags dynamically
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', pageTitle);

    const metaAuthor = document.querySelector('meta[name="author"]');
    if (metaAuthor) metaAuthor.setAttribute('content', brand);

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) {
      ogDesc.setAttribute('content', `${brand} is a digital engineering agency from Kannur, Kerala, serving businesses across India and the GCC.`);
    }

    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', `${brand} is a digital engineering agency from Kannur, Kerala, helping businesses across India and the GCC with web engineering, digital marketing, infrastructure and branding.`);
    }
  }, [settings.siteName, pathname]);

  return null;
}

function Layout() {
  const { pathname } = useLocation();
  const isAdminRoute = pathname.startsWith('/admin');

  return (
    <>
      <ScrollToTop />
      <PageTitleHandler />
      {!isAdminRoute && <Navbar />}

      <Routes>
        {/* ── Admin Routes (Isolated from public navigation) ── */}
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin" element={<Navigate to="/admin/dashboard" replace />} />
        <Route
          path="/admin/dashboard"
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/services"
          element={
            <ProtectedRoute>
              <AdminServices />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/blogs"
          element={
            <ProtectedRoute>
              <AdminBlogs />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/enquiries"
          element={
            <ProtectedRoute>
              <AdminEnquiries />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/settings"
          element={
            <ProtectedRoute>
              <AdminSettings />
            </ProtectedRoute>
          }
        />

        {/* ── Core Main Public Pages ── */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/about-us/" element={<About />} />
        <Route path="/our-work" element={<Work />} />
        <Route path="/our-work/" element={<Work />} />
        <Route path="/our-work/:slug" element={<CaseStudyDetail />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogArticle />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/careers/" element={<Careers />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/contact/" element={<Contact />} />
        <Route path="/services" element={<CategoryPage />} />
        <Route path="/services/" element={<CategoryPage />} />

        {/* 5 Category Pages */}
        {SERVICE_CATEGORIES.map((cat) => (
          <Route
            key={cat.id}
            path={cat.url}
            element={<CategoryPage categoryData={cat} />}
          />
        ))}
        {SERVICE_CATEGORIES.map((cat) => (
          <Route
            key={`${cat.id}-no-slash`}
            path={cat.url.replace(/\/$/, '')}
            element={<CategoryPage categoryData={cat} />}
          />
        ))}

        {/* All 22 Individual Static Service Pages */}
        {ALL_SERVICES.map((srv) => (
          <Route
            key={srv.id}
            path={srv.url}
            element={<ServicePage serviceData={srv} />}
          />
        ))}
        {ALL_SERVICES.map((srv) => (
          <Route
            key={`${srv.id}-no-slash`}
            path={srv.url.replace(/\/$/, '')}
            element={<ServicePage serviceData={srv} />}
          />
        ))}

        {/* Legal Pages */}
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/privacy-policy/" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/terms/" element={<Terms />} />

        {/* 404 Catch-All Page */}
        <Route path="*" element={<NotFound />} />
      </Routes>

      {!isAdminRoute && <Footer />}
      {!isAdminRoute && <WhatsAppButton />}
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <SettingsProvider>
          <Layout />
        </SettingsProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}
