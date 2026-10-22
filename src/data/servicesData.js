/**
 * ============================================================
 * DigiMarket DIGITAL AGENCY — SERVICES DATA REPOSITORY
 * All 5 Categories + All 22 Individual Services
 * ============================================================
 */

export const SERVICE_CATEGORIES = [
  {
    id: "web-engineering",
    slug: "web-engineering-services",
    url: "/web-engineering-services/",
    name: "Web Engineering",
    tagline: "Websites, ecommerce platforms, and custom web applications built for speed, stability, and scale.",
    description: "We engineer digital products with uncompromising performance and modern software standards. From corporate web platforms to complex business portals, our engineering team builds systems designed to convert visitors and endure real business workloads.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    badge: "Engineering Core",
    services: [
      {
        id: "website-development",
        slug: "website-development-company",
        url: "/website-development-company/",
        title: "Website Development",
        h1: "Website Development Company in Kerala",
        subtitle: "Professional, high-performance websites designed to help businesses attract customers, generate enquiries and grow online.",
        metaTitle: "Website Development Company in Kerala | DigiMarket",
        metaDesc: "Professional high-performance corporate and business websites engineered for speed, search visibility, and conversion across India and the GCC.",
        heroImage: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
        problemTitle: "Why Most Websites Fail to Deliver Measurable ROI",
        problemDesc: "Too many corporate websites are treated like static digital brochures — slow to load, difficult to navigate, and detached from business goals. They look decent on day one, but fail to generate enquiries, rank on search engines, or adapt as the business expands.",
        intro: "Your website should be your most dependable growth asset. At DigiMarket, we engineer corporate and business websites with fast load times, clean code, responsive layouts, and conversion-focused architecture.",
        explanation: "We do not believe in bloated one-size-fits-all themes. Every website we build is carefully architected around your industry, your target audience across India and the GCC, and your specific commercial objectives.",
        features: [
          { title: "Corporate & Business Architecture", desc: "Structured hierarchies tailored for established enterprises, B2B firms, and service leaders." },
          { title: "Responsive & Mobile-First Layouts", desc: "Pixel-accurate rendering across mobile screens, tablets, ultra-wide monitors, and high-DPI displays." },
          { title: "SEO-Ready Technical Foundation", desc: "Semantic HTML5, automated schema markup, optimal heading hierarchies, and crawl-friendly routing." },
          { title: "Sub-Second Performance", desc: "Ultra-lean asset delivery, modern image formats, and minimal script execution for superior Core Web Vitals." },
          { title: "Enterprise-Grade Security", desc: "Hardened HTTP headers, sanitised form inputs, SSL enforcement, and automated uptime safeguards." },
          { title: "Integrated Business Analytics", desc: "Seamless event tracking for enquiries, phone calls, form completions, and high-intent button clicks." }
        ],
        benefits: [
          "Direct increase in qualified business enquiries and leads",
          "Lower bounce rates thanks to instant page load speeds",
          "Higher search engine rankings across target geographic regions",
          "Clear, credible brand presentation that wins customer trust"
        ],
        included: [
          "Full UI/UX layout design and prototyping",
          "Custom front-end engineering with modern standards",
          "Content Management System (CMS) setup and training",
          "Technical SEO implementation and XML sitemap configuration",
          "Analytics and conversion event tracking integration",
          "Cross-browser testing (Chrome, Safari, Edge, Firefox, iOS, Android)",
          "30 days post-launch technical warranty and maintenance"
        ],
        techStack: ["React", "Next.js", "WordPress / Headless", "Tailwind / Pure CSS", "Node.js", "Vercel / Cloudflare"],
        whyLored: "DigiMarket combines software engineering rigor with business acumen. We don't just build pages; we construct resilient digital systems designed for companies competing in high-stakes markets across India and the Middle East.",
        faqs: [
          { q: "How long does a custom business website take to build?", a: "Standard corporate websites typically take 4 to 6 weeks from strategy and wireframing to launch. Complex web platforms with custom integrations may require 8 to 12 weeks." },
          { q: "Will our internal team be able to update content easily?", a: "Yes. We configure an intuitive, secure CMS allowing your team to update text, post case studies, upload images, and manage services without coding knowledge." },
          { q: "Do you handle domain registration, hosting, and email setup?", a: "Yes, we provide end-to-end infrastructure management including high-performance cloud hosting, DNS management, and business email setup." },
          { q: "Is ongoing maintenance required after launch?", a: "We strongly recommend ongoing maintenance for security patches, uptime monitoring, and speed optimization. We offer dedicated website management plans." }
        ]
      },
      {
        id: "wordpress-development",
        slug: "wordpress-development-company",
        url: "/wordpress-development-company/",
        title: "WordPress Development",
        h1: "WordPress Development Services",
        subtitle: "Custom-engineered WordPress platforms designed for speed, security, scalable content, and effortless editorial control.",
        metaTitle: "WordPress Development Services | DigiMarket Digital Agency",
        metaDesc: "Bespoke WordPress websites and custom themes built without template bloat. Fast, secure, and engineered for ambitious businesses.",
        heroImage: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80",
        problemTitle: "The Problem With Bloated Pre-Built Themes",
        problemDesc: "Off-the-shelf WordPress themes pack dozens of unnecessary plugins, sluggish builders, and messy code. The result is slow page loads, security vulnerabilities, and brittle layouts that break with every core update.",
        intro: "WordPress powers over 40% of the web, but it only excels when engineered by professionals who understand clean architecture. DigiMarket develops custom WordPress themes and headless configurations that remain lightning-fast and rock-solid.",
        explanation: "We build custom WordPress websites from clean code upward. We strip away plugin bloat, optimize database queries, implement server-level caching, and deliver an intuitive admin experience tailored specifically to your content workflow.",
        features: [
          { title: "Bespoke Theme Development", desc: "Custom-coded themes using lightweight PHP/JS templates tailored to your exact brand identity." },
          { title: "Zero-Bloat Plugin Strategy", desc: "We utilize minimal, vetted, lightweight plugins or engineer custom post types and custom fields directly." },
          { title: "Advanced Security Hardening", desc: "Custom login routes, brute-force shielding, XML-RPC disabling, and 2FA authentication." },
          { title: "WooCommerce Capabilities", desc: "Extend your WordPress installation into a full-featured, secure online shopping portal." },
          { title: "Multilingual & GCC Localization", desc: "Support for Arabic and English with seamless RTL (right-to-left) formatting and regional currencies." }
        ],
        benefits: [
          "Page load times consistently under 1.5 seconds",
          "Shielded against malware and common WordPress vulnerabilities",
          "Seamless content publishing for your marketing and marketing teams",
          "Full ownership and data portability without vendor lock-in"
        ],
        included: [
          "Custom WordPress theme code & responsive styling",
          "Advanced Custom Fields (ACF Pro) content modeling",
          "SEO metadata and schema integration (Yoast/RankMath)",
          "Object caching and Redis/Memcached configuration",
          "Full backup mechanism and staging environment",
          "Admin training documentation and video walk-through"
        ],
        techStack: ["WordPress Core", "PHP 8.2+", "ACF Pro", "MySQL / MariaDB", "Redis", "Nginx"],
        whyLored: "We treat WordPress like an engineering platform, not a drag-and-drop playground. Our builds achieve 95+ Google PageSpeed scores while remaining easy for your staff to manage.",
        faqs: [
          { q: "Can you redesign our existing slow WordPress site?", a: "Yes. We frequently audit and rebuild sluggish WordPress sites, salvaging existing content and SEO ranking while replacing the bloated theme with a custom lightweight engine." },
          { q: "Is WordPress secure for corporate and enterprise use?", a: "When properly configured with modern server permissions, isolated user roles, and security headers, WordPress powers the world's largest enterprises reliably." },
          { q: "Do you build custom plugins if needed?", a: "Yes. When third-party plugins cannot satisfy a unique business requirement, we code lightweight custom WordPress plugins." }
        ]
      },
      {
        id: "ecommerce-development",
        slug: "ecommerce-development",
        url: "/ecommerce-development/",
        title: "Ecommerce Development",
        h1: "Ecommerce Website Development",
        subtitle: "High-converting online stores built for seamless checkout, frictionless inventory management, and long-term transactional scale.",
        metaTitle: "Ecommerce Website Development | DigiMarket",
        metaDesc: "Custom ecommerce stores and platforms engineered for maximum conversion, secure multi-currency payment gateways, and rapid growth in India & GCC.",
        heroImage: "https://images.unsplash.com/photo-1556742049-0a67c5574f73?auto=format&fit=crop&w=1200&q=80",
        problemTitle: "Where Online Stores Lose Revenue",
        problemDesc: "Cart abandonment, slow product filtering, cumbersome multi-step checkouts, and failed payment gateway redirects cost businesses up to 70% of potential revenue before a single order completes.",
        intro: "Building a profitable online store requires more than displaying products on a page. It demands frictionless checkout, lightning-fast product search, robust inventory synchronisation, and dependable payment processing.",
        explanation: "DigiMarket engineers custom ecommerce solutions on WooCommerce, Shopify Plus, and custom headless stacks. We focus on conversion rate optimization at every touchpoint — from product gallery interactions to one-click checkouts and automated invoice generation.",
        features: [
          { title: "Streamlined 1-Page Checkout", desc: "Designed to minimize steps and cart abandonment across mobile and desktop shoppers." },
          { title: "Multi-Currency & GCC Gateways", desc: "Native integration with Razorpay, Stripe, Tap, Telr, PayTabs, and Cash on Delivery modules." },
          { title: "Automated Inventory & ERP Sync", desc: "Real-time stock level synchronization between your online store, warehouse, and accounting software." },
          { title: "Dynamic Product Filters & Instant Search", desc: "Faceted search by attributes, price ranges, ratings, and instant AJAX suggestions." },
          { title: "Order Tracking & WhatsApp Alerts", desc: "Automated SMS and WhatsApp dispatch notifications to keep customers informed and reduce support overhead." }
        ],
        benefits: [
          "Significant reduction in cart and checkout drop-off rates",
          "Seamless checkout experience across Indian Rupee (INR) and GCC currencies (AED, SAR, QAR, OMR)",
          "Rock-solid database handling during flash sales and traffic spikes",
          "Comprehensive ecommerce analytics tracking Average Order Value (AOV) and customer lifetime value"
        ],
        included: [
          "End-to-end store architecture and design",
          "Payment gateway approval and compliance setup",
          "Shipping zone and courier integration (Shiprocket, Aramex, etc.)",
          "Tax configuration (GST for India, VAT for UAE/Saudi Arabia)",
          "Cart recovery email automation",
          "Product catalogue migration and variant setup"
        ],
        techStack: ["WooCommerce", "Shopify", "React Storefronts", "Razorpay / Stripe", "Redis Cache", "PostgreSQL"],
        whyLored: "We understand commercial transactions in both the Indian and GCC markets. We engineer online storefronts with local payment preferences, high-trust indicators, and frictionless mobile experiences.",
        faqs: [
          { q: "Can your stores handle thousands of products with variations?", a: "Yes. We implement optimized database indices, elastic search, and CDN caching to ensure stores with tens of thousands of SKUs load instantaneously." },
          { q: "Do you integrate with regional payment processors in the UAE and Saudi Arabia?", a: "Yes, we routinely integrate Tap Payments, Telr, PayTabs, Network International, Apple Pay, and Mada for GCC merchants." },
          { q: "How do you protect ecommerce sites against fraud and payment failures?", a: "We enforce 3D Secure 2.0 verification, address verification checks, webhook-based order status confirmation, and automated fraud-scoring filters." }
        ]
      },
      {
        id: "custom-web-development",
        slug: "custom-web-development",
        url: "/custom-web-development/",
        title: "Custom Web Development",
        h1: "Custom Web Development for Complex Business Needs",
        subtitle: "Bespoke web applications, client portals, internal dashboards, and SaaS platforms built with modern software architecture.",
        metaTitle: "Custom Web Development Company | DigiMarket",
        metaDesc: "tailored web applications, client portals, operational dashboards, and API systems engineered for complex enterprise operations.",
        heroImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
        problemTitle: "When Standard Commercial Software Falls Short",
        problemDesc: "Generic off-the-shelf software forces businesses into rigid workflows, charging escalating per-user fees while lacking the specific integrations and compliance your unique operational model requires.",
        intro: "When standard templates and platforms cannot solve your operational requirements, custom software engineering becomes your greatest competitive advantage.",
        explanation: "DigiMarket engineers full-stack web applications tailored to your proprietary business workflows. From B2B client self-service portals to real-time operations dashboards and automated API pipelines, we build software that scales cleanly.",
        features: [
          { title: "Bespoke Portals & Dashboards", desc: "Interactive role-based access portals for clients, vendors, executives, and field staff." },
          { title: "RESTful & GraphQL API Integrations", desc: "Connect disparate ERPs, CRMs, legacy databases, and third-party SaaS tools into a unified data flow." },
          { title: "Granular Role-Based Access (RBAC)", desc: "Fine-grained permissions, audit logs, and security controls meeting strict enterprise standards." },
          { title: "Real-Time Data Pipelines", desc: "Live status updates, telemetry feeds, and interactive data visualizations powered by WebSockets." },
          { title: "Scalable Cloud-Native Architecture", desc: "Containerized deployments on AWS and Google Cloud ready for concurrent enterprise user loads." }
        ],
        benefits: [
          "Eliminate recurring monthly per-seat licensing fees",
          "Automate repetitive manual data transfers between legacy systems",
          "Full ownership of your intellectual property and source code",
          "Custom workflows specifically tailored to your team's exact procedures"
        ],
        included: [
          "Technical requirement specification and data modeling",
          "Database schema design and normalization",
          "Interactive Figma UI/UX prototyping and usability validation",
          "Front-end and back-end application engineering",
          "Automated unit and integration testing pipelines",
          "CI/CD deployment to secure cloud infrastructure",
          "Complete documentation and code handover"
        ],
        techStack: ["Node.js / Express", "React / Next.js", "Python / FastAPI", "PostgreSQL", "Docker", "AWS / GCP"],
        whyLored: "We approach web development as serious engineering. Our engineers write clean, maintainable code with strict typing, robust test coverage, and documentation that ensures your investment lasts for years.",
        faqs: [
          { q: "Who owns the source code and intellectual property?", a: "You do. 100% of the code, database schemas, and assets belong to your organization upon project completion." },
          { q: "How do you ensure data security in custom web applications?", a: "We apply industry-standard practices including data encryption at rest and in transit, prepared SQL statements to prevent injection, JWT-based secure sessions, and regular penetration testing." },
          { q: "Can you integrate with our existing ERP or on-premise database?", a: "Yes. We have deep experience building secure middleware and API bridges connecting modern web interfaces to legacy databases and ERP platforms." }
        ]
      }
    ]
  },
  {
    id: "website-management",
    slug: "website-management-services",
    url: "/website-management-services/",
    name: "Website Management",
    tagline: "Proactive maintenance, performance tuning, uptime monitoring, and technical protection for high-value web properties.",
    description: "Websites are living digital assets that degrade if left unattended. DigiMarket provides continuous website management, security monitoring, performance tuning, and technical updates so your team can focus on running your business.",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80",
    badge: "Continuous Care",
    services: [
      {
        id: "website-management-services",
        slug: "website-management-services",
        url: "/website-management-services/",
        title: "Website Management & Maintenance",
        h1: "Website Management & Maintenance Services",
        subtitle: "Dedicated technical management, proactive security updates, continuous uptime monitoring, and reliable support.",
        metaTitle: "Website Management & Maintenance Services | DigiMarket",
        metaDesc: "Comprehensive website management, CMS maintenance, uptime monitoring, security patching, and technical support across India & GCC.",
        heroImage: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80",
        problemTitle: "The Hidden Cost of Neglected Websites",
        problemDesc: "An unmaintained website will eventually break: security patches get skipped, database tables bloat, SSL certificates expire, and broken links accumulate. When failure occurs during critical business hours, lost revenue and reputational damage far exceed the cost of proactive management.",
        intro: "A successful website requires ongoing vigilance. DigiMarket provides structured website management agreements that keep your digital presence secure, fast, and constantly up to date.",
        explanation: "Our technical management team takes complete custody of your website's operational health. We perform weekly software updates in staging before pushing to production, monitor server health 24/7, conduct automated offsite backups, and provide guaranteed turnaround times for content and feature updates.",
        features: [
          { title: "24/7/365 Uptime Monitoring", desc: "Automated heartbeat pings every 60 seconds with instant alert escalation if downtime occurs." },
          { title: "Staging-Verified Core Updates", desc: "We test all CMS, theme, and plugin updates in a sandboxed staging environment to prevent production breakage." },
          { title: "Automated Daily Offsite Backups", desc: "Encrypted daily backups stored across geo-redundant cloud locations with single-click restore capability." },
          { title: "Proactive Security Scanning", desc: "Continuous malware scanning, firewall rule maintenance, and vulnerability patching." },
          { title: "Dedicated Support Retainer Hours", desc: "Guaranteed monthly developer hours for adding pages, updating copy, tweaking banners, and evolving features." }
        ],
        benefits: [
          "Zero downtime anxiety during critical marketing campaigns",
          "Guaranteed SLA response times for emergency technical issues",
          "Protection against ransomware, defacement, and database corruption",
          "Clean, predictable monthly operational expenditure"
        ],
        included: [
          "24/7 server and uptime health monitoring",
          "Weekly core, plugin, and dependency patching",
          "Daily cloud-synced offsite backups",
          "Monthly speed and technical audit report",
          "Dedicated priority ticket support channel",
          "DNS and SSL renewal management"
        ],
        techStack: ["Cloudflare", "Uptime Kuma / Pingdom", "AWS S3 Backups", "Sucuri / Wordfence", "Git Versioning"],
        whyLored: "We assign dedicated technical engineers — not outsourced call center reps. When you request an update or encounter a bug, the engineer who knows your codebase handles it immediately.",
        faqs: [
          { q: "What is your emergency response time for critical issues?", a: "For critical downtime or security breaches, our emergency response team responds within 60 minutes, 24 hours a day, 7 days a week." },
          { q: "Can we use our management retainer hours for new design work?", a: "Yes. Retainer hours can be allocated to content updates, new landing pages, banner adjustments, or minor feature additions." },
          { q: "What if our website was built by another agency?", a: "We routinely onboard websites built by previous developers. We begin with a comprehensive technical audit and code review before assuming ongoing custody." }
        ]
      },
      {
        id: "performance-optimization",
        slug: "website-performance-optimisation",
        url: "/website-performance-optimisation/",
        title: "Performance Optimization",
        h1: "Website Performance Optimization",
        subtitle: "Speed optimization and Core Web Vitals engineering to turn sluggish websites into instant-loading digital assets.",
        metaTitle: "Website Performance Optimization & Core Web Vitals | DigiMarket",
        metaDesc: "Comprehensive speed optimization for LCP, INP, and CLS. Cut load times under 1.5s to improve Google rankings and customer conversion rates.",
        heroImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
        problemTitle: "Every Second of Delay Destroys Conversions",
        problemDesc: "Studies by Google and Akamai confirm that every additional second of mobile load time slashes conversion rates by up to 20%. Furthermore, Google's Core Web Vitals algorithms penalize sluggish websites with lower organic search rankings.",
        intro: "Speed is a foundational feature, not an afterthought. At DigiMarket, we optimize every layer of the web delivery chain — from database queries to browser rendering mechanics.",
        explanation: "We conduct deep code-level profiling to diagnose bottlenecks. Rather than applying surface-level caching plugins, we restructure asset loading, defer render-blocking JavaScript, compress media with modern AVIF/WebP formats, tune server TTFB, and eliminate Cumulative Layout Shift.",
        features: [
          { title: "Core Web Vitals Engineering", desc: "Systematic remediation for Largest Contentful Paint (LCP), Interaction to Next Paint (INP), and Cumulative Layout Shift (CLS)." },
          { title: "Advanced Asset Optimization", desc: "Tree-shaking unused CSS/JS, minification, and modern Next-Gen image conversion (AVIF/WebP)." },
          { title: "Server & TTFB Tuning", desc: "Nginx/Apache caching configuration, HTTP/3 protocol activation, and PHP OPcache optimization." },
          { title: "Global CDN & Edge Caching", desc: "Configuring Cloudflare or AWS CloudFront edge workers to deliver static assets within milliseconds worldwide." },
          { title: "Database Query Optimization", desc: "Indexing slow database tables, pruning post revisions, and optimizing transient data queries." }
        ],
        benefits: [
          "Page load times reduced to sub-1.5 seconds on real mobile networks",
          "Pass all Google Core Web Vitals assessments with green scores (90+)",
          "Higher conversion and form-completion rates across all digital ads",
          "Lower server CPU utilization and hosting infrastructure costs"
        ],
        included: [
          "Before-and-after performance benchmarking report",
          "Render-blocking script deferral and critical CSS extraction",
          "Media library compression and responsive image srcset setup",
          "Server configuration audit and CDN setup",
          "Database cleanup and transient optimization",
          "30 days post-optimization performance monitoring"
        ],
        techStack: ["Google PageSpeed Insights", "Lighthouse", "WebPageTest", "Cloudflare APO", "Redis", "Chrome DevTools Profiler"],
        whyLored: "We don't mask speed issues with reckless caching that breaks dynamic shopping carts or lead forms. We fix the underlying code and infrastructure for lasting speed.",
        faqs: [
          { q: "Will performance optimization break any features on our website?", a: "No. All optimization work is first validated in an isolated staging environment with thorough automated and manual regression tests before production deployment." },
          { q: "Can an existing slow WordPress site achieve a 90+ PageSpeed score?", a: "Yes. By refactoring render-blocking assets, eliminating redundant scripts, and implementing edge caching, we regularly take WordPress sites from 30s to 90+ scores." },
          { q: "How does performance impact our Google Ads Quality Score?", a: "Faster landing page load times directly boost Google Ads Landing Page Experience scores, lowering your Cost Per Click (CPC) and improving ad positions." }
        ]
      },
      {
        id: "website-audit",
        slug: "website-audit-services",
        url: "/website-audit-services/",
        title: "Website Audit",
        h1: "Professional Website Audit Services",
        subtitle: "In-depth technical, SEO, security, and UX audits that reveal hidden bottlenecks and provide an actionable roadmap for growth.",
        metaTitle: "Professional Website Audit Services | DigiMarket",
        metaDesc: "Comprehensive technical audits covering SEO health, security vulnerabilities, Core Web Vitals, mobile UX, and conversion funnels.",
        heroImage: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80",
        problemTitle: "You Cannot Fix What You Cannot See",
        problemDesc: "Businesses often spend thousands of dollars on digital marketing without realizing their website is silently leaking revenue through crawl errors, broken tracking tags, insecure endpoints, and confusing mobile layouts.",
        intro: "A rigorous technical audit provides the clarity you need to make intelligent digital investments. DigiMarket evaluates your web properties against international engineering and search standards.",
        explanation: "Our comprehensive audit is conducted by experienced software engineers and digital growth strategists, not automated one-click PDF generators. We manually inspect your technical infrastructure, crawl your entire site hierarchy, analyze security postures, and present prioritized, actionable findings.",
        features: [
          { title: "Technical SEO Inspection", desc: "Indexation analysis, canonicalization checks, XML sitemaps, robots.txt, structured data, and hreflang validation." },
          { title: "Performance & Web Vitals Profiling", desc: "Granular breakdown of network requests, DOM complexity, asset weight, and mobile render milestones." },
          { title: "Security & Vulnerability Assessment", desc: "Analysis of SSL/TLS cipher suites, HTTP security headers, exposed endpoints, and CMS attack vectors." },
          { title: "Conversion & UX Friction Review", desc: "Heuristic evaluation of mobile navigation, form usability, visual hierarchy, and CTA clarity." },
          { title: "Analytics & Tracking Audit", desc: "Verification of GA4 events, Meta Pixel firing accuracy, Google Tag Manager hygiene, and conversion attribution." }
        ],
        benefits: [
          "Uncover hidden technical errors suppressing organic search rankings",
          "Identify exact friction points causing visitor drop-off before checkout or contact",
          "Receive a prioritized roadmap sorted by business impact and implementation effort",
          "Clear executive summary suitable for board and stakeholder presentations"
        ],
        included: [
          "Full site crawl report (up to 10,000 URLs)",
          "Detailed 30+ page written technical audit document",
          "Prioritized action matrix (Critical, High, Medium, Low)",
          "1-hour executive video walk-through with our senior engineering team",
          "Implementation guidelines ready for your internal developers or DigiMarket"
        ],
        techStack: ["Screaming Frog", "Google Search Console", "Ahrefs / SEMrush", "OWASP ZAP", "Chrome DevTools", "Hotjar"],
        whyLored: "Unlike generic agencies who send automated tool exports, DigiMarket provides human-verified engineering insights. We tell you exactly what is broken, why it matters commercially, and precisely how to fix it.",
        faqs: [
          { q: "How long does a comprehensive website audit take?", a: "A standard website audit requires 5 to 7 business days for thorough data collection, manual code review, and report preparation." },
          { q: "Can DigiMarket implement the fixes identified in the audit?", a: "Yes. We can either execute the prioritized remediation roadmap on your behalf or provide technical handover to your in-house engineering team." },
          { q: "Do you need server or CMS access to perform the audit?", a: "We can perform a comprehensive external audit without credentials. However, providing read-only access to Google Search Console and GA4 allows for much deeper analysis." }
        ]
      }
    ]
  },
  {
    id: "digital-marketing",
    slug: "digital-marketing",
    url: "/digital-marketing/",
    name: "Digital Marketing",
    tagline: "Search engine optimization, paid advertising, and marketing systems focused on measurable revenue growth.",
    description: "Marketing without clear commercial measurement is speculation. DigiMarket builds performance marketing and organic search engines that attract qualified prospects, reduce customer acquisition costs, and produce verifiable business returns across India and the GCC.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    badge: "Growth Engine",
    services: [
      {
        id: "seo-services",
        slug: "seo-services",
        url: "/seo-services/",
        title: "SEO Services",
        h1: "SEO Services for Sustainable Organic Growth",
        subtitle: "Technical, on-page, and local SEO designed to secure durable top rankings for commercial intent searches across India & the GCC.",
        metaTitle: "SEO Services for Sustainable Organic Growth | DigiMarket",
        metaDesc: "Technical SEO, local search optimization, content strategy, and authority building engineered for long-term customer acquisition.",
        heroImage: "https://images.unsplash.com/photo-1571786256017-aee7a0c009b6?auto=format&fit=crop&w=1200&q=80",
        problemTitle: "The Trap of Vanity Rankings",
        problemDesc: "Ranking for obscure keywords with zero commercial value generates traffic that never buys. Sustainable business growth requires ranking for high-intent search terms used by decision-makers ready to purchase.",
        intro: "Search engines reward technical excellence, relevant content, and authentic authority. DigiMarket builds ethical, white-hat SEO strategies engineered around commercial outcomes rather than vanity metrics.",
        explanation: "Our SEO methodology operates at the intersection of technical engineering and content strategy. We resolve complex crawling issues, build topical authority through authoritative business content, and capture high-intent local and regional queries across target geographies.",
        features: [
          { title: "Technical SEO & Site Architecture", desc: "Crawl budget optimization, canonical management, schema markup, and Core Web Vitals compliance." },
          { title: "Commercial Keyword Research", desc: "Identifying high-intent search terms that map directly to high-margin service and product inquiries." },
          { title: "On-Page Semantic Optimization", desc: "Refining title tags, header hierarchies, internal linking clusters, and content depth for entity-based search." },
          { title: "Local & Regional SEO (India & GCC)", desc: "Google Business Profile optimization, local citation building, and regional keyword localization." },
          { title: "Authoritative Link Building", desc: "Earning genuine, contextual editorial backlinks from credible industry publications." }
        ],
        benefits: [
          "Consistent stream of inbound qualified leads without continuous ad spend",
          "Top rankings for primary commercial search queries in your industry",
          "Enhanced brand authority and credibility in your target markets",
          "Compounding return on investment that outlasts individual ad campaigns"
        ],
        included: [
          "Comprehensive technical SEO baseline audit",
          "Competitor keyword gap analysis",
          "Monthly content strategy and optimization schedule",
          "Google Business Profile optimization and review management framework",
          "Custom Looker Studio performance dashboard with conversion attribution"
        ],
        techStack: ["Google Search Console", "Ahrefs", "SEMrush", "Screaming Frog", "SurferSEO", "Schema App"],
        whyLored: "We don't use black-hat shortcuts that invite algorithmic penalties. Our strategies are grounded in software engineering standards and high-quality, human-written content that builds permanent digital equity.",
        faqs: [
          { q: "How long does it take to see tangible results from SEO?", a: "Meaningful organic growth typically manifests between 3 to 6 months as search engines recrawl, index, and build trust in your optimized site architecture." },
          { q: "Do you guarantee #1 rankings on Google?", a: "No legitimate agency can guarantee a specific #1 rank because Google's algorithms are proprietary and dynamic. We guarantee proven engineering methodologies, transparent reporting, and consistent growth in qualified organic traffic." },
          { q: "Can you optimize our presence for both India and GCC markets?", a: "Yes. We configure multi-region SEO architectures, including hreflang tags, localized landing pages, and country-specific Google Search Console configurations." }
        ]
      },
      {
        id: "performance-marketing",
        slug: "performance-marketing",
        url: "/performance-marketing/",
        title: "Performance Marketing",
        h1: "Performance Marketing Focused on Results",
        subtitle: "Data-driven Google Ads and Meta campaigns engineered to maximize return on ad spend (ROAS) and capture qualified leads.",
        metaTitle: "Performance Marketing & Paid Ads Management | DigiMarket",
        metaDesc: "High-ROI Google Ads, Meta Ads, and performance marketing campaigns managed with scientific conversion tracking and zero ad waste.",
        heroImage: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80",
        problemTitle: "Stop Burning Ad Budget on Unqualified Clicks",
        problemDesc: "Broad match keywords, misconfigured conversion pixels, generic ad creatives, and disconnected landing pages cause companies to waste 40% to 60% of their digital advertising budgets on clicks that never convert.",
        intro: "Performance marketing is not about spending more; it is about eliminating waste and scaling what works. DigiMarket engineers paid campaigns with mathematical discipline and end-to-end attribution.",
        explanation: "We manage paid search and paid social campaigns with rigorous hypothesis testing. We build dedicated high-converting landing pages, set up server-side conversion tracking (CAPI), structure tightly themed ad groups, and optimize bids based on actual cost-per-acquisition (CPA).",
        features: [
          { title: "Google Search & Performance Max", desc: "Capturing active purchase intent with high-relevance search ads and tightly negative-matched keyword lists." },
          { title: "Meta (Instagram & Facebook) Ads", desc: "Audience segmentation, creative testing, and retargeting funnels that educate and convert." },
          { title: "Server-Side Conversion Tracking (CAPI)", desc: "Bypassing browser ad-blockers and iOS privacy restrictions with robust server-to-server tracking." },
          { title: "High-Converting Custom Landing Pages", desc: "Dedicated landing pages designed specifically to match ad scent and maximize conversion rates." },
          { title: "Continuous A/B Creative Testing", desc: "Iterative testing of headlines, hooks, value propositions, and visual creative formats." }
        ],
        benefits: [
          "Predictable cost-per-lead and transparent return on advertising spend",
          "Immediate market traction for new product and service launches",
          "Elimination of wasted ad spend through aggressive negative keyword management",
          "Full attribution showing which campaigns produce paying clients"
        ],
        included: [
          "Complete ad account audit and restructuring",
          "Audience research and competitor advertising analysis",
          "Copywriting and high-impact visual creative production",
          "Server-side conversion tracking and GTM configuration",
          "Weekly bid management, negative keyword pruning, and budget allocation",
          "Bi-weekly performance review meetings"
        ],
        techStack: ["Google Ads", "Meta Ads Manager", "Google Tag Manager Server-Side", "Looker Studio", "Triple Whale"],
        whyLored: "We align our incentives with your bottom line. We do not celebrate high click-through rates if they do not produce revenue, and we never make unsupported promises of overnight riches.",
        faqs: [
          { q: "What monthly ad spend do you typically recommend?", a: "While this varies by industry and market competitiveness, we generally recommend a minimum monthly media budget of ₹50,000 for India or 3,000 AED for GCC markets to gather statistically significant performance data." },
          { q: "Do we pay the ad networks directly?", a: "Yes. Your organization retains full direct ownership of your Google Ads and Meta accounts, paying the platforms directly for ad spend. We charge a transparent management fee." },
          { q: "How quickly can campaigns go live?", a: "Once strategy alignment, tracking configuration, and creative assets are approved, campaigns typically go live within 5 to 7 business days." }
        ]
      },
      {
        id: "social-media-marketing",
        slug: "social-media-marketing",
        url: "/social-media-marketing/",
        title: "Social Media Marketing",
        h1: "Social Media Marketing That Builds Your Brand",
        subtitle: "Strategic content planning, brand storytelling, and community engagement that creates genuine commercial credibility.",
        metaTitle: "Strategic Social Media Marketing | DigiMarket",
        metaDesc: "Professional social media strategy, content planning, and brand storytelling designed for B2B enterprises and premium consumer brands.",
        heroImage: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=1200&q=80",
        problemTitle: "The Noise of Ineffective Social Posting",
        problemDesc: "Posting generic festival wishes, quote cards, and uninspired stock graphics does nothing to build commercial authority. It wastes internal resources without giving prospective clients a single reason to trust your business.",
        intro: "Your social media channels should be an active demonstration of your expertise, your culture, and your capabilities. DigiMarket builds content systems that articulate what makes your business exceptional.",
        explanation: "We craft thoughtful social media strategies focused on LinkedIn, Instagram, and YouTube. We replace hollow filler with substantive case studies, technical breakdowns, leadership perspectives, and high-production visual assets that position your firm as an industry benchmark.",
        features: [
          { title: "Editorial Content Calendars", desc: "Structured monthly calendars aligned with key business milestones, industry trends, and product launches." },
          { title: "LinkedIn Thought Leadership", desc: "Executive ghostwriting and company page management positioning your leadership as domain authorities." },
          { title: "Premium Visual Creative", desc: "Clean, consistent brand graphics, carousels, and motion graphics that adhere to your visual identity." },
          { title: "Short-Form Video Production", desc: "Conceptualizing and editing punchy, informative Reels and Shorts showcasing project results." },
          { title: "Community Management & Listening", desc: "Engaging with industry conversations and managing incoming messages with professional poise." }
        ],
        benefits: [
          "Establish authority in competitive regional and international markets",
          "Attract top-tier talent and commercial partners through authentic brand culture",
          "Keep existing clients and prospects engaged between sales cycles",
          "Consistent, polished brand presentation across all public touchpoints"
        ],
        included: [
          "Platform audit and profile bio optimization",
          "Monthly editorial content calendar (12–16 bespoke posts/month)",
          "Original graphic design, carousel layouts, and copy",
          "Active community monitoring and inquiry triage",
          "Monthly engagement and audience growth analytics"
        ],
        techStack: ["LinkedIn Company Pages", "Instagram Professional", "Canva Enterprise / Figma", "Buffer / Metricool", "Adobe Premiere"],
        whyLored: "We respect your brand's dignity. We don't chase cheap algorithmic trends that undermine your credibility; we create intelligent content that resonates with serious business decision-makers.",
        faqs: [
          { q: "Which platforms should our business focus on?", a: "For B2B, technology, and engineering firms, LinkedIn is paramount. For lifestyle, retail, and consumer products, Instagram and YouTube drive stronger brand affinity. We tailor the platform mix to where your buyers actually spend time." },
          { q: "Do you need our team to provide raw photos and videos?", a: "Yes, genuine imagery from your office, factory, or project sites always outperforms generic assets. We provide shot lists and creative briefs to make capturing assets effortless for your team." },
          { q: "Can you handle customer inquiries coming through direct messages?", a: "We monitor incoming DMs and comments, answering standard FAQs and immediately routing qualified commercial inquiries to your sales team via WhatsApp or email." }
        ]
      },
      {
        id: "marketing-automation",
        slug: "marketing-automation",
        url: "/marketing-automation/",
        title: "Marketing Automation",
        h1: "Marketing Automation That Saves Time and Improves Conversion",
        subtitle: "Automated lead triage, email nurturing workflows, and CRM integrations that turn cold prospects into sales-ready opportunities.",
        metaTitle: "Marketing Automation & CRM Workflows | DigiMarket",
        metaDesc: "Streamline lead nurturing, automate sales follow-ups, and integrate CRMs with custom marketing automation workflows.",
        heroImage: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
        problemTitle: "The Leak in the Sales Funnel",
        problemDesc: "When a potential client submits an inquiry and waits 48 hours for a reply, the likelihood of closing drops by 80%. Manual lead handling leads to forgotten follow-ups, lost customer context, and burned marketing investments.",
        intro: "Marketing automation ensures that every lead receives instant acknowledgement, timely follow-up, and personalized education without requiring constant human intervention.",
        explanation: "DigiMarket designs intelligent automation systems linking your web forms, CRM, email providers, and messaging platforms. We build multi-touch email sequences, automated lead scoring, and instant notification pipelines so your sales team contacts prospects at the exact moment of peak interest.",
        features: [
          { title: "Instant Lead Notification Systems", desc: "Instant alert routing to sales reps via WhatsApp, Telegram, or Slack the moment a high-value form is submitted." },
          { title: "Automated Email Nurture Sequences", desc: "Behavior-triggered drip campaigns that educate prospects over weeks, overcoming objections automatically." },
          { title: "CRM Integration & Pipeline Sync", desc: "Flawless synchronization with HubSpot, Zoho, Odoo, or Salesforce with complete tracking history." },
          { title: "Lead Scoring & Routing Rules", desc: "Automatically qualifying inquiries based on company size, budget, and page engagement." },
          { title: "Automated Re-engagement Workflows", desc: "Reviving dormant leads who went quiet with automated value-driven check-in triggers." }
        ],
        benefits: [
          "Zero inbound leads fall through the cracks",
          "Accelerate sales cycles by pre-educating prospects before the first call",
          "Save hundreds of hours of manual administrative data entry monthly",
          "Clear visibility into lead velocity and pipeline progression"
        ],
        included: [
          "Customer journey mapping and automation architecture",
          "CRM account setup and custom field mapping",
          "Copywriting for email nurture and follow-up templates",
          "Webhook and API integrations connecting web forms to CRM",
          "Team training and documentation on managing the pipeline"
        ],
        techStack: ["HubSpot", "Zoho CRM", "Make / n8n", "Zapier", "ActiveCampaign", "Odoo CRM"],
        whyLored: "As digital engineers, we don't just write emails; we build resilient, fault-tolerant data pipelines with error handling, logging, and data backup safeguards.",
        faqs: [
          { q: "Can automation work with our existing CRM software?", a: "Yes. Whether you use Zoho, HubSpot, Odoo, Salesforce, or Google Sheets, we integrate your website and marketing funnels seamlessly." },
          { q: "Will automated emails feel robotic to our clients?", a: "No. We write clean, plain-text email templates that read like personal 1-to-1 notes from your team, avoiding spammy marketing visuals." },
          { q: "Do you support automated WhatsApp messaging?", a: "Yes, we integrate with official WhatsApp Business API providers to send automated template messages, appointment reminders, and lead notifications." }
        ]
      },
      {
        id: "analytics-reporting",
        slug: "analytics-reporting",
        url: "/analytics-reporting/",
        title: "Analytics & Reporting",
        h1: "Analytics & Reporting for Better Business Decisions",
        subtitle: "Accurate tracking infrastructure and executive dashboards that provide truthful clarity on marketing ROI and user behavior.",
        metaTitle: "Analytics & Business Reporting Services | DigiMarket",
        metaDesc: "GA4 setup, server-side tracking, custom Looker Studio dashboards, and full-funnel conversion attribution.",
        heroImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
        problemTitle: "Making Decisions in the Dark",
        problemDesc: "Relying on default, unverified analytics leads to misattributed sales, distorted metrics, and confident investments into channels that aren't actually producing paying clients.",
        intro: "Accurate data is the prerequisite for intelligent growth. DigiMarket builds robust tracking architectures that give business leaders complete transparency into what drives inquiries, sales, and revenue.",
        explanation: "We deploy Google Analytics 4 (GA4) via Google Tag Manager with comprehensive custom event frameworks. We set up cross-domain tracking, funnel milestone visualization, and custom executive dashboards in Looker Studio that present essential business metrics clearly.",
        features: [
          { title: "GA4 Custom Event Architecture", desc: "Tracking specific business interactions: form submissions, document downloads, video watches, and high-value button clicks." },
          { title: "Google Tag Manager Hygiene", desc: "Clean, standardized tag containers with strict trigger conditions and zero duplicate fires." },
          { title: "Executive Looker Studio Dashboards", desc: "Live, visual dashboards consolidating data from GA4, Google Ads, Meta Ads, and CRM into one screen." },
          { title: "E-Commerce Enhanced Measurement", desc: "Tracking product impressions, cart additions, checkout steps, and revenue attribution." },
          { title: "Data Privacy & Consent Compliance", desc: "Google Consent Mode v2 implementation respecting user privacy regulations." }
        ],
        benefits: [
          "Complete confidence in your marketing ROI figures",
          "Identify exactly where users drop out of your conversion funnel",
          "Save countless hours formerly spent pulling manual spreadsheet reports",
          "Make capital allocation decisions backed by empirical commercial data"
        ],
        included: [
          "Audit of existing tracking scripts and discrepancy diagnosis",
          "Google Tag Manager and GA4 property configuration",
          "Custom event tracking taxonomy and implementation",
          "Custom Looker Studio executive dashboard build",
          "Monthly reporting review call with actionable strategic recommendations"
        ],
        techStack: ["Google Analytics 4", "Google Tag Manager", "Looker Studio", "BigQuery", "Hotjar", "PostHog"],
        whyLored: "We only mention tools and implement tracking configurations that provide genuine business utility. We focus on business revenue metrics, not vanity pageview counts.",
        faqs: [
          { q: "Is our existing Google Analytics 4 tracking properly?", a: "In over 80% of audits we perform, default GA4 setups miss key conversion events, double-count sessions, or fail to track cross-domain redirects accurately." },
          { q: "Can we view all our ad platforms on a single dashboard?", a: "Yes. Our Looker Studio dashboards pull metrics from Google Ads, Meta Ads, SEO rankings, and CRM leads into a clean, unified view." },
          { q: "How do you handle cookie consent and GDPR / regional privacy laws?", a: "We implement Google Consent Mode v2 with compliant banner integrations that respect visitor choices while maximizing anonymous attribution modeling." }
        ]
      },
      {
        id: "conversion-optimisation",
        slug: "conversion-optimisation",
        url: "/conversion-optimisation/",
        title: "Conversion Optimisation",
        h1: "Conversion Optimisation That Turns Traffic Into Action",
        subtitle: "Systematic UX refinements, form streamlining, and landing page engineering to increase the percentage of visitors who become paying customers.",
        metaTitle: "Conversion Rate Optimization (CRO) | DigiMarket",
        metaDesc: "Turn more existing website traffic into qualified leads and revenue with scientific CRO, user journey analysis, and conversion design.",
        heroImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
        problemTitle: "The High Cost of Poor Conversion",
        problemDesc: "Doubling your traffic through ad spend is expensive and slow. Doubling your conversion rate produces twice the revenue from your existing traffic without spending an extra rupee on advertising.",
        intro: "Traffic is useless if visitors leave without taking action. DigiMarket applies behavioral psychology, user experience engineering, and empirical testing to turn passive browsers into active inquiries.",
        explanation: "We identify friction points in your customer journey through session recordings, heatmaps, and funnel drop-off analytics. We then redesign key landing pages, simplify complex forms, clarify value propositions, and optimize calls-to-action for maximum response.",
        features: [
          { title: "Heuristic UX & Friction Audits", desc: "Identifying cognitive friction, visual clutter, and confusing UI patterns that cause visitor abandonment." },
          { title: "Form Field Minimization & Optimization", desc: "Restructuring lead capture forms into high-converting multi-step experiences with smart auto-fill." },
          { title: "Value Proposition Clarification", desc: "Rewriting headlines and supporting copy to answer buyer objections within the first 5 seconds." },
          { title: "Heatmap & Session Replay Analysis", desc: "Observing real user interactions to discover where visitors hesitate, rage click, or exit." },
          { title: "Mobile Conversion Tuning", desc: "Sticky mobile CTA bars, thumb-friendly tap targets, and streamlined mobile navigation." }
        ],
        benefits: [
          "Immediate reduction in customer acquisition cost (CAC)",
          "Higher inquiry volume from your current website traffic",
          "Improved return on advertising spend (ROAS) across all campaigns",
          "A smoother, more professional experience for prospective clients"
        ],
        included: [
          "Behavioral tracking tool deployment (Hotjar/Clarity)",
          "Conversion funnel drop-off report and diagnosis",
          "Wireframe redesigns for critical landing and checkout pages",
          "Copywriting revisions for headlines and CTAs",
          "Before-and-after conversion rate benchmarking"
        ],
        techStack: ["Microsoft Clarity", "Hotjar", "Google Optimize / VWO", "Figma", "GA4 Funnel Exploration"],
        whyLored: "We don't guess what converts; we inspect real user behavior. Our design changes are rooted in behavioral science and proven UX patterns that drive measurable action.",
        faqs: [
          { q: "How much traffic do we need for CRO to be effective?", a: "While formal A/B testing benefits from higher traffic volumes (10,000+ monthly visits), heuristic UX improvements and form streamlining dramatically improve conversion even for modest B2B traffic levels." },
          { q: "What is an average conversion rate improvement?", a: "Well-executed CRO engagements typically produce conversion improvements between 20% and 50% across key landing pages." },
          { q: "How does CRO interact with our ongoing ad campaigns?", a: "CRO directly amplifies paid advertising efficiency. When landing pages convert higher, your Cost Per Lead drops and ad algorithms reward your account with cheaper traffic." }
        ]
      }
    ]
  },
  {
    id: "infrastructure-systems",
    slug: "infrastructure-systems",
    url: "/infrastructure-systems/",
    name: "Infrastructure & Systems",
    tagline: "Enterprise cloud hosting, network security, business communication, and ERP systems engineered for reliability.",
    description: "Modern businesses cannot tolerate infrastructure failures. DigiMarket provides resilient cloud architecture, network security, corporate email systems, and Odoo ERP implementations that keep your operations dependable 24 hours a day.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
    badge: "Enterprise Backbone",
    services: [
      {
        id: "cloud-infrastructure",
        slug: "cloud-infrastructure",
        url: "/cloud-infrastructure/",
        title: "Cloud Infrastructure",
        h1: "Cloud Infrastructure Built for Reliability and Scale",
        subtitle: "High-performance cloud server architecture, auto-scaling environments, and proactive server management on AWS, Google Cloud, and DigitalOcean.",
        metaTitle: "Cloud Infrastructure & Server Management | DigiMarket",
        metaDesc: "Architect, deploy, and manage secure, high-availability cloud infrastructure on AWS, Google Cloud, and enterprise Linux environments.",
        heroImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
        problemTitle: "The Frailty of Cheap Shared Hosting",
        problemDesc: "Relying on cheap, overcrowded shared hosting leaves your critical business website vulnerable to sudden server crashes during traffic spikes, shared IP blacklisting, and sluggish response times that alienate customers.",
        intro: "Your digital services require dedicated, isolated cloud resources engineered for 99.9% uptime. DigiMarket architects, provisions, and maintains resilient cloud environments built around your workloads.",
        explanation: "We deploy isolated Virtual Private Servers (VPS) and containerized clusters configured with hardened Linux kernels, Nginx reverse proxies, SSL certificate automation, and global content delivery networks. We monitor server CPU, memory, and disk I/O around the clock.",
        features: [
          { title: "Dedicated Cloud Provisioning", desc: "Configuring high-compute cloud instances on AWS, Google Cloud, or DigitalOcean tailored to your application needs." },
          { title: "Nginx / LiteSpeed Optimization", desc: "High-concurrency web server configuration handling thousands of concurrent users with minimal resource usage." },
          { title: "Automated Daily Snapshot Backups", desc: "Automated, encrypted server image snapshots stored in geographically isolated object storage." },
          { title: "Cloudflare Enterprise Security & CDN", desc: "DDoS mitigation, web application firewall (WAF) rules, and edge caching across 300+ global data centers." },
          { title: "24/7 Resource & Uptime Telemetry", desc: "Real-time monitoring of RAM, CPU load, disk usage, and network traffic with automated anomaly alarms." }
        ],
        benefits: [
          "Rock-solid 99.9% uptime during high-volume marketing campaigns",
          "Dedicated clean IP addresses that protect email and domain reputation",
          "Rapid disaster recovery with automated rollback snapshots",
          "Scalable infrastructure that grows effortlessly alongside your business"
        ],
        included: [
          "Infrastructure architecture consultation and capacity sizing",
          "Linux server hardening (SSH keys, UFW firewall, fail2ban)",
          "Database clustering and automated backup configuration",
          "DNS zone management and SSL/TLS automation",
          "Monthly security patching and resource utilization reports"
        ],
        techStack: ["AWS (EC2, S3, RDS)", "Google Cloud Platform", "DigitalOcean", "Ubuntu Server", "Nginx", "Docker", "Cloudflare"],
        whyLored: "We manage cloud servers with strict DevOps principles. We don't rely on cumbersome shared hosting panels; we build reproducible, secure server environments that run without friction.",
        faqs: [
          { q: "Can you migrate our existing website from our current host without downtime?", a: "Yes. We execute zero-downtime server migrations by cloning data, syncing changes, and performing seamless DNS TTL cutovers during low-traffic windows." },
          { q: "Where should our servers be located geographically?", a: "For Indian audiences, we deploy instances in Mumbai or Bengaluru. For Middle East clients, we deploy in UAE (Dubai) or Bahrain data centers to guarantee minimum network latency." },
          { q: "Who manages security updates and OS patches?", a: "Under our infrastructure management, DigiMarket handles all operating system updates, kernel patches, and firewall configurations proactively." }
        ]
      },
      {
        id: "network-security-services",
        slug: "network-security-services",
        url: "/network-security-services/",
        title: "Network Security & VPN",
        h1: "Network Security & VPN Solutions",
        subtitle: "Secure remote access, encrypted business VPNs, firewall deployment, and threat prevention for modern distributed teams.",
        metaTitle: "Network Security & Business VPN Solutions | DigiMarket",
        metaDesc: "Enterprise network security, dedicated business VPN setups, firewall configuration, and secure remote access for organizations.",
        heroImage: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80",
        problemTitle: "The Risk of Unprotected Remote Access",
        problemDesc: "As teams work from home, branch offices, and client sites across India and the GCC, accessing central databases over unencrypted public Wi-Fi creates severe risks of data theft, credential interception, and corporate espionage.",
        intro: "Protecting your company's intellectual property and client data requires secure, encrypted network architecture. DigiMarket deploys business-grade VPN and firewall systems built on open standards.",
        explanation: "We configure dedicated WireGuard and OpenVPN business networks with multi-factor authentication, segment internal networks to restrict access to sensitive financial servers, and configure intrusion prevention firewalls that safeguard your internal systems.",
        features: [
          { title: "Dedicated Business WireGuard VPNs", desc: "Ultra-fast, cryptographically modern private tunnels connecting remote staff to corporate files securely." },
          { title: "Multi-Factor Authentication (MFA)", desc: "Enforcing time-based one-time password (TOTP) verification for all remote network logins." },
          { title: "Network Segmentation & Zero Trust", desc: "Isolating accounting, HR, and development subnets so a compromised laptop cannot access core business servers." },
          { title: "Next-Gen Firewall Configuration", desc: "Deep packet inspection, IP blacklisting, geo-blocking, and port hardening across all perimeter gateways." },
          { title: "Secure Branch-to-Branch Site Links", desc: "Encrypted site-to-site IPsec connections linking head offices to remote branch facilities seamlessly." }
        ],
        benefits: [
          "Safe, encrypted remote work capabilities for employees worldwide",
          "Protection against corporate data exfiltration and credential theft",
          "Compliance with regional data security standards and client confidentiality mandates",
          "Centralized control over employee access privileges and access logs"
        ],
        included: [
          "Network architecture audit and threat surface assessment",
          "Dedicated VPN gateway deployment on secure cloud hardware",
          "Client configuration profiles for Windows, macOS, iOS, and Android",
          "Multi-factor authentication (MFA) setup and user onboarding guide",
          "Firewall rule hardening and continuous access log monitoring"
        ],
        techStack: ["WireGuard", "OpenVPN", "pfSense / OPNsense", "Tailscale Enterprise", "UFW / iptables", "Fail2ban"],
        whyLored: "We do not make unrealistic promises of absolute invulnerability. Instead, we implement battle-tested cryptographic protocols and pragmatic access policies that make your systems resilient and safe.",
        faqs: [
          { q: "Is WireGuard fast enough for day-to-day work without slowing down internet speeds?", a: "Yes. WireGuard is significantly faster and more resource-efficient than legacy IPsec or OpenVPN, allowing seamless video calls and large file transfers." },
          { q: "Can employees access the VPN from mobile phones?", a: "Yes. We configure intuitive mobile applications with single-tap connection and biometric security authentication." },
          { q: "How do we revoke access when an employee leaves the company?", a: "Our centralized key management allows your administrator or DigiMarket to instantly revoke access credentials in a single click." }
        ]
      },
      {
        id: "business-email",
        slug: "business-email",
        url: "/business-email/",
        title: "Business Email Solutions",
        h1: "Professional Business Email Solutions",
        subtitle: "Enterprise domain email setup, Google Workspace and Microsoft 365 migrations, and SPF/DKIM/DMARC deliverability protection.",
        metaTitle: "Professional Business Email Solutions | DigiMarket",
        metaDesc: "Reliable business email setup on Google Workspace & Microsoft 365. Full SPF, DKIM, and DMARC deliverability configuration.",
        heroImage: "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?auto=format&fit=crop&w=1200&q=80",
        problemTitle: "When Important Business Emails Land in Spam",
        problemDesc: "Sending commercial proposals from generic @gmail.com addresses destroys customer trust. Even worse, poorly authenticated custom domain emails often land directly in clients' spam folders or bounce back entirely.",
        intro: "Your corporate email is your most critical commercial communication channel. DigiMarket provisions and authenticates professional email infrastructure that guarantees deliverability and security.",
        explanation: "We set up and configure enterprise email on Google Workspace, Microsoft 365, or dedicated private email servers. We implement complete cryptographic authentication (SPF, DKIM, DMARC) so your messages pass strict corporate spam filters and protect your brand against spoofing.",
        features: [
          { title: "Google Workspace & Microsoft 365 Setup", desc: "Corporate deployment with shared team inboxes, calendar integration, and cloud drive permissions." },
          { title: "SPF, DKIM & DMARC Authentication", desc: "Full DNS cryptographic alignment preventing domain spoofing and guaranteeing 99%+ inbox placement." },
          { title: "Zero-Data-Loss Email Migrations", desc: "Seamless migration of decades of emails, folder structures, and contacts from legacy webmail providers." },
          { title: "Anti-Spam & Threat Protection", desc: "Enterprise phishing defenses, attachment sandboxing, and malicious link interception." },
          { title: "Mobile & Outlook Configuration", desc: "Step-by-step setup guides for Apple Mail, Outlook, and Android email clients." }
        ],
        benefits: [
          "Establish high credibility with custom @yourcompany.com email addresses",
          "Ensure high-value quotes, invoices, and proposals reach client inboxes reliably",
          "Centralized administration allowing instant user provisioning and offboarding",
          "Protection against domain impersonation and phishing scams"
        ],
        included: [
          "DNS record configuration (MX, TXT, SPF, DKIM, DMARC)",
          "User account creation, aliases, and department distribution groups",
          "Mailbox migration from legacy cPanel or hosting servers",
          "Security policies (Enforce 2-Step Verification)",
          "Executive setup support across desktop and mobile devices"
        ],
        techStack: ["Google Workspace", "Microsoft 365", "Zoho Workplace", "Cloudflare DNS", "DMARC Analyzer", "BIMI"],
        whyLored: "We understand email deliverability at a protocol level. We configure your DNS records so that every proposal you send lands cleanly in your client's primary inbox.",
        faqs: [
          { q: "Can we transfer our old emails and folders without losing anything?", a: "Yes. We use automated server-to-server IMAP migration tools that replicate your complete email history, folder structures, and read states with zero downtime." },
          { q: "What is DMARC and why is it mandatory now?", a: "Google and Yahoo now enforce strict DMARC policies for all commercial senders. Without verified SPF, DKIM, and DMARC records, your emails will be rejected by major email providers." },
          { q: "Which is better for our business: Google Workspace or Microsoft 365?", a: "Google Workspace is generally preferred for modern browser-based collaboration and intuitive mobile apps. Microsoft 365 is ideal for organizations deeply reliant on desktop Excel and Outlook workflows." }
        ]
      },
      {
        id: "odoo-erp",
        slug: "odoo-erp",
        url: "/odoo-erp/",
        title: "Odoo / ERP Implementation",
        h1: "Odoo & ERP Implementation Services",
        subtitle: "End-to-end ERP deployment, custom module configuration, and workflow automation tailored to trading, retail, and manufacturing enterprises.",
        metaTitle: "Odoo & ERP Implementation Services | DigiMarket",
        metaDesc: "Comprehensive Odoo ERP planning, custom module development, data migration, and workflow automation for businesses in India & GCC.",
        heroImage: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80",
        problemTitle: "Fragmented Data and Operational Chaos",
        problemDesc: "Managing inventory in spreadsheets, invoicing in separate accounting software, and tracking leads on whiteboards creates blind spots, double data entry, and costly fulfillment errors that stifle expansion.",
        intro: "An integrated Enterprise Resource Planning (ERP) platform unifies your sales, inventory, purchasing, accounting, and HR into a single source of commercial truth.",
        explanation: "DigiMarket specializes in deploying Odoo ERP for ambitious small and mid-sized enterprises across India and the GCC. We map your real-world business workflows, customize essential modules, migrate historical data, and train your staff for seamless adoption.",
        features: [
          { title: "CRM & Sales Pipeline Management", desc: "Automate quotations, track customer interactions, and convert approved quotes into sales orders." },
          { title: "Inventory & Warehouse Multi-Location", desc: "Real-time stock valuation, automated reordering rules, barcode scanning, and multi-warehouse transfers." },
          { title: "Invoicing & Regional Tax Compliance", desc: "Full support for Indian GST (e-invoicing/e-way bills) and GCC VAT & ZATCA e-invoicing for Saudi Arabia." },
          { title: "Purchasing & Vendor Management", desc: "Streamline Requests for Quotation (RFQs), purchase orders, vendor bills, and supplier rating metrics." },
          { title: "Custom Module Development & API Bridges", desc: "Extending Odoo with tailored Python modules that match your proprietary business operations." }
        ],
        benefits: [
          "Single unified platform replacing disconnected SaaS subscriptions",
          "Real-time operational visibility into stock levels, pending orders, and cash flow",
          "Eliminate manual data re-entry errors across sales and warehouse teams",
          "Full compliance with regional tax authorities in India and the GCC"
        ],
        included: [
          "Business process discovery and gap analysis",
          "Odoo Community or Enterprise server deployment",
          "Module configuration (Sales, Purchase, Inventory, Invoicing, Accounting)",
          "Data cleansing, normalization, and historical migration",
          "Role-based permission matrix and security setup",
          "Hands-on employee training and video documentation"
        ],
        techStack: ["Odoo 17 / 18", "Python", "PostgreSQL", "Ubuntu Server", "Docker", "XML-RPC API"],
        whyLored: "We don't force generic out-of-the-box templates onto unique businesses. We study your actual fulfillment and accounting workflows to configure an ERP system that your team actually enjoys using.",
        faqs: [
          { q: "What is the difference between Odoo Community and Odoo Enterprise?", a: "Odoo Community is open-source and free of software licensing fees, ideal for organizations wanting complete self-hosted control. Odoo Enterprise includes official mobile apps, advanced accounting, and full studio customization." },
          { q: "Does your Odoo implementation support Saudi Arabia ZATCA Phase 2 e-invoicing?", a: "Yes. We configure ZATCA-compliant cryptographic stamps, QR codes, and automated API reporting for Saudi Arabian entities." },
          { q: "How long does a standard Odoo ERP implementation take?", a: "A phased implementation focusing on Core Sales, Inventory, and Invoicing typically takes 6 to 10 weeks from discovery to go-live." }
        ]
      },
      {
        id: "backup-recovery",
        slug: "backup-recovery",
        url: "/backup-recovery/",
        title: "Backup & Disaster Recovery",
        h1: "Backup & Disaster Recovery Solutions",
        subtitle: "Automated offsite backups, disaster recovery runbooks, and business continuity systems that ensure your company never loses data.",
        metaTitle: "Backup & Disaster Recovery Solutions | DigiMarket",
        metaDesc: "Automated, encrypted offsite backups and rapid disaster recovery solutions ensuring business continuity against ransomware and server failure.",
        heroImage: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80",
        problemTitle: "The Catastrophe of Unprepared Data Loss",
        problemDesc: "Ransomware attacks, accidental database drops, and catastrophic cloud provider outages happen every single day. Without tested, immutable offsite backups, recovering lost business records is virtually impossible.",
        intro: "A backup is only as good as its ability to be restored under pressure. DigiMarket engineers automated, air-gapped backup and disaster recovery systems that guarantee business continuity.",
        explanation: "We implement the 3-2-1 backup standard: 3 copies of your data, across 2 different media types, with 1 copy stored in an air-gapped, offsite cloud repository. We conduct scheduled quarterly restore drills to prove that your databases and files can be recovered within hours.",
        features: [
          { title: "Automated Daily & Hourly Snapshots", desc: "Automated incremental backups of databases, application files, and server images with zero downtime." },
          { title: "Immutable & Air-Gapped Cloud Storage", desc: "Backups stored in write-once-read-many (WORM) S3 buckets that cannot be altered or deleted by ransomware." },
          { title: "End-to-End AES-256 Encryption", desc: "All backup archives are encrypted before leaving your servers and remain encrypted in transit and at rest." },
          { title: "Documented Disaster Recovery Runbooks", desc: "Step-by-step technical procedures allowing rapid restoration to fresh hardware in an emergency." },
          { title: "Quarterly Restoration Testing", desc: "Simulated disaster recovery drills verifying backup integrity and measuring real-world Recovery Time Objectives (RTO)." }
        ],
        benefits: [
          "Complete immunity against ransomware extortion and database corruption",
          "Guaranteed Recovery Point Objective (RPO) minimizing data loss to under 1 hour",
          "Peace of mind knowing your core operational history is permanently safe",
          "Compliance with industry regulations and business insurance requirements"
        ],
        included: [
          "Critical business data audit and classification",
          "Automated backup script engineering and deployment",
          "Air-gapped AWS S3 / Wasabi cloud storage repository provisioning",
          "Disaster recovery runbook documentation",
          "Quarterly mock restoration report and verification certificate"
        ],
        techStack: ["AWS S3 Glacier", "BorgBackup / Restic", "PostgreSQL WAL Archiving", "Duplicity", "Wasabi Hot Cloud Storage"],
        whyLored: "We treat backup as an engineering discipline, not a checkbox. We don't just schedule backups and hope for the best; we verify restore capability with rigorous simulation drills.",
        faqs: [
          { q: "How frequently should our databases be backed up?", a: "For active transactional databases and ecommerce sites, we configure Continuous Write-Ahead Log (WAL) archiving combined with hourly incremental snapshots, ensuring data loss is capped at under 15 minutes." },
          { q: "Can ransomware delete our backup copies?", a: "No. We store backups in immutable cloud buckets with Object Lock enabled, meaning even if an attacker gains root access to your main server, they cannot delete or encrypt your offsite backup archives." },
          { q: "How quickly can our systems be brought back online after a total server failure?", a: "With our automated server provisioning templates, we can restore a full production environment to fresh cloud hardware within 2 to 4 hours." }
        ]
      }
    ]
  },
  {
    id: "branding-creative",
    slug: "branding-creative",
    url: "/branding-creative/",
    name: "Branding & Creative",
    tagline: "Brand strategy, visual identity design, UI/UX engineering, and marketing collateral built to stand out.",
    description: "Branding is not just a logo; it is the instinctive reputation and emotional trust your business commands in the marketplace. DigiMarket crafts distinctive visual identities, design systems, and digital user experiences that command premium positioning.",
    image: "https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&w=1200&q=80",
    badge: "Identity & Trust",
    services: [
      {
        id: "brand-strategy",
        slug: "brand-strategy",
        url: "/brand-strategy/",
        title: "Brand Strategy",
        h1: "Brand Strategy That Gives Your Business Direction",
        subtitle: "Clarifying market positioning, target audience segmentation, and core messaging to build enduring commercial distinction.",
        metaTitle: "Brand Strategy & Positioning Consulting | DigiMarket",
        metaDesc: "Strategic brand positioning, value proposition definition, audience analysis, and messaging frameworks that differentiate your business.",
        heroImage: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
        problemTitle: "The Danger of Being a Commodity",
        problemDesc: "When your business looks and sounds exactly like every competitor in your market, prospective clients are forced to choose based on the only remaining differentiator: price. This leads to shrinking margins and commoditization.",
        intro: "A powerful brand strategy establishes why your business matters, whom you serve best, and why you command premium pricing. DigiMarket helps leadership teams define clear, defensible market positioning.",
        explanation: "We conduct in-depth executive interviews, competitor landscape audits, and customer persona research. We synthesize these insights into a definitive Brand Strategy Blueprint that guides your visual identity, sales communications, and long-term expansion.",
        features: [
          { title: "Competitive Landscape Mapping", desc: "Analyzing rival positioning across India and the GCC to identify vacant, high-value market positions." },
          { title: "Ideal Customer Profile (ICP) Definition", desc: "Detailed buyer personas focusing on real purchasing motivations, pain points, and decision criteria." },
          { title: "Core Value Proposition Framework", desc: "Articulating your primary commercial promise with clarity, precision, and memorability." },
          { title: "Brand Voice & Tone Guidelines", desc: "Establishing rules for how your company speaks across web copy, sales pitches, and corporate communications." },
          { title: "Strategic Messaging Matrix", desc: "Tailoring value pillars for different stakeholder audiences (C-suite, technical buyers, end-users)." }
        ],
        benefits: [
          "Command premium pricing without client pushback",
          "Align sales, marketing, and leadership around a singular commercial narrative",
          "Attract higher-tier clients who value expertise over cheap commodity rates",
          "Accelerate sales cycles with clear, differentiated messaging"
        ],
        included: [
          "Executive discovery workshops with leadership stakeholders",
          "Competitor positioning matrix and gap analysis",
          "Comprehensive written Brand Strategy Playbook",
          "Key messaging pillars and elevator pitch guide",
          "Strategic handover session with your marketing and sales leads"
        ],
        techStack: ["Miro", "Figma", "Strategyzer Business Model Canvas", "Notion Playbooks"],
        whyLored: "We are practical business strategists, not academic theorists. We build brand strategies grounded in commercial reality, designed to generate real customer loyalty and sustainable revenue.",
        faqs: [
          { q: "Is brand strategy only for large multinational corporations?", a: "No. Small and mid-sized enterprises often benefit most from brand strategy because they cannot afford to waste capital on unfocused marketing that fails to resonate with buyers." },
          { q: "How long does a brand strategy engagement take?", a: "A thorough brand strategy engagement typically spans 3 to 4 weeks, including stakeholder interviews, competitor research, and playbook delivery." },
          { q: "What is the tangible output of this engagement?", a: "You receive an executive-ready Brand Strategy Playbook defining your market positioning, core narrative, target personas, and messaging guidelines for all future marketing." }
        ]
      },
      {
        id: "brand-identity",
        slug: "brand-identity",
        url: "/brand-identity/",
        title: "Logo & Brand Identity",
        h1: "Logo & Brand Identity Design",
        subtitle: "Distinctive logo systems, bespoke typography, tailored color palettes, and comprehensive guidelines built for timeless recognition.",
        metaTitle: "Logo & Brand Identity Design Services | DigiMarket",
        metaDesc: "Craft distinctive logos, comprehensive visual identities, color systems, and corporate brand guidelines that command authority.",
        heroImage: "https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&w=1200&q=80",
        problemTitle: "The Damage of Cheap, Inconsistent Visuals",
        problemDesc: "Amateur logos generated from cheap clip-art marketplaces fail to reproduce cleanly on signage, digital screens, or corporate collateral. Inconsistent colors and mismatched fonts signal to prospects that your business is unpolished and unreliable.",
        intro: "Visual identity is the physical embodiment of your brand's reputation. At DigiMarket, we design enduring visual identity systems that project confidence, technological expertise, and professional prestige.",
        explanation: "We create versatile logo marks engineered for modern high-resolution screens as well as physical print, signage, and packaging. We define disciplined typography hierarchies, calibrated color palettes, and comprehensive brand guidelines that ensure total consistency across your organization.",
        features: [
          { title: "Primary & Secondary Logo Architecture", desc: "Flexible logo lockups: horizontal, stacked, emblem marks, and scalable responsive favicons." },
          { title: "Curated Color Systems", desc: "Calibrated palettes with primary dark tones, neutral accents, and functional UI tokens (HEX, RGB, CMYK, Pantone)." },
          { title: "Enterprise Typography Pairing", desc: "Selecting and licensing premium editorial and digital typefaces suited for both print and responsive web." },
          { title: "Stationery & Corporate Collateral", desc: "Business cards, letterheads, invoice templates, presentation decks, and email signatures." },
          { title: "Comprehensive Brand Guidelines Manual", desc: "A rigorous 40+ page specification manual detailing minimum sizing, clear space, and forbidden usages." }
        ],
        benefits: [
          "Instantly recognizable visual presence across print and digital media",
          "Confidence when pitching to high-value enterprise and institutional clients",
          "Flawless visual consistency across departments and regional offices",
          "Production-ready vector files prepared for any physical or digital application"
        ],
        included: [
          "3 distinct creative logo concepts rooted in strategic research",
          "Iterative refinement on the selected visual direction",
          "Complete vector asset export kit (SVG, EPS, PDF, high-res PNG)",
          "Print-ready corporate stationery suite",
          "Full Digital Brand Guidelines PDF"
        ],
        techStack: ["Adobe Illustrator", "Figma", "Adobe InDesign", "Glyphs", "Pantone Formula Guides"],
        whyLored: "We design with architectural precision. Our logos are balanced, scalable, and engineered to endure for decades without looking dated.",
        faqs: [
          { q: "How many logo concepts will we be presented with?", a: "We present 3 thoroughly developed, strategically distinct concepts. Each concept is presented in real-world mockups (signage, digital screens, stationery) so you can evaluate its commercial impact." },
          { q: "Do we receive full copyright and trademark rights?", a: "Yes. Once final payment is completed, complete and unrestricted intellectual property rights for the finalized visual identity transfer to your company." },
          { q: "Can you provide Arabic typography adaptations for GCC markets?", a: "Yes. We have deep experience crafting dual-language English/Arabic typographic identities with harmonious aesthetic parity." }
        ]
      },
      {
        id: "creative-design",
        slug: "creative-design",
        url: "/creative-design/",
        title: "Creative Design Services",
        h1: "Creative Design That Makes Your Brand Stand Out",
        subtitle: "High-impact marketing collateral, digital advertising creatives, company profiles, and presentation decks that communicate value with elegance.",
        metaTitle: "Creative Design & Marketing Collateral | DigiMarket",
        metaDesc: "Professional graphic design, corporate brochures, investor pitch decks, exhibition graphics, and high-converting marketing creatives.",
        heroImage: "https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?auto=format&fit=crop&w=1200&q=80",
        problemTitle: "When Great Work Looks Mediocre on Paper",
        problemDesc: "You might deliver world-class engineering or services, but if your sales presentations and marketing brochures look like generic PowerPoint templates, prospective clients will subconsciously question your professional quality.",
        intro: "Every piece of collateral your prospect touches should reinforce your reputation. DigiMarket delivers sophisticated creative design that articulates complex capabilities with clarity and visual power.",
        explanation: "We design investor pitch decks, corporate capability profiles, exhibition graphics, advertising banners, and printed reports. We focus on clear typographic hierarchy, purposeful whitespace, and custom diagrammatic illustrations that make technical concepts immediately intelligible.",
        features: [
          { title: "Corporate Capability Profiles & Brochures", desc: "Stunning digital and print brochures that showcase your projects, team, and services with pride." },
          { title: "High-Stakes Presentation & Pitch Decks", desc: "Persuasive slide decks formatted in Figma, PowerPoint, or Keynote that keep decision-makers engaged." },
          { title: "Advertising & Campaign Creatives", desc: "Eye-catching static and motion ad creatives engineered for high CTR across Meta and Google Display." },
          { title: "Trade Show & Exhibition Graphics", desc: "Large-format booth backdrops, roll-up banners, and physical collateral with crisp vector fidelity." },
          { title: "Infographics & Custom Technical Diagrams", desc: "Transforming dense data and workflows into elegant, easily scannable visual diagrams." }
        ],
        benefits: [
          "Leave a memorable, professional impression during client sales meetings",
          "Win more bids with clear, visually compelling proposal documents",
          "Maintain total visual cohesion across online and offline marketing materials",
          "Free your internal team from struggling with complex layout software"
        ],
        included: [
          "Concept exploration and structural layout wireframing",
          "High-resolution vector design and typography styling",
          "Print-ready CMYK files with bleed and trim marks",
          "Interactive, optimized digital PDF versions for email sharing",
          "Editable source files and asset libraries"
        ],
        techStack: ["Adobe InDesign", "Figma", "Adobe Photoshop", "Adobe Illustrator", "Keynote / PowerPoint"],
        whyLored: "We avoid superficial decoration. Our creative design is purposeful, structured, and focused on making your business communication compelling and effective.",
        faqs: [
          { q: "Can we edit text in the presentation decks you design?", a: "Yes. When building sales or pitch decks, we format the final deliverables directly in editable PowerPoint or Google Slides templates so your team can tweak numbers and dates anytime." },
          { q: "Do you coordinate with commercial printing vendors?", a: "Yes. We prepare color-accurate print-ready files and can liaise directly with your local printing vendor to verify paper stocks, coatings, and proofs." },
          { q: "Can you handle ongoing monthly design requirements?", a: "Yes, we offer ongoing creative retainers for companies that require consistent monthly design support for sales collateral, social graphics, and campaign assets." }
        ]
      },
      {
        id: "ui-ux-design",
        slug: "ui-ux-design",
        url: "/ui-ux-design/",
        title: "UI/UX Design",
        h1: "UI/UX Design for Better Digital Experiences",
        subtitle: "User-centered interface design, wireframing, interactive prototyping, and comprehensive design systems built for effortless adoption.",
        metaTitle: "UI/UX Design for Web & Mobile Platforms | DigiMarket",
        metaDesc: "Intuitive user experience research, wireframing, Figma design systems, and modern digital interfaces designed for frictionless usability.",
        heroImage: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&w=1200&q=80",
        problemTitle: "Software That Confuses Users Gets Abandoned",
        problemDesc: "Even the most powerful back-end software will fail if users find the interface confusing, cluttered, or frustrating. Bad UX leads to lost sales, high customer support tickets, and abandoned digital products.",
        intro: "Exceptional UI/UX design bridges human psychology and engineering logic. DigiMarket crafts digital interfaces that feel natural, intuitive, and enjoyable from the very first click.",
        explanation: "Our design process starts with deep user journey mapping and low-fidelity wireframing before polishing pixel-perfect visual interfaces in Figma. We construct scalable design systems with reusable components, responsive auto-layouts, and accessible color tokens that developers can implement without ambiguity.",
        features: [
          { title: "User Research & Task-Flow Mapping", desc: "Mapping user journeys to streamline multi-step processes and eliminate unnecessary cognitive steps." },
          { title: "Rapid Wireframing & Usability Testing", desc: "Low-fidelity interactive prototypes to test workflows and navigation before investing in high-fidelity design." },
          { title: "Scalable Figma Design Systems", desc: "Component libraries with auto-layout, interactive states, design tokens, and comprehensive variant sets." },
          { title: "Responsive Multi-Device Layouts", desc: "Pixel-accurate UI specifications tailored for mobile phones, tablets, and wide enterprise displays." },
          { title: "Interactive Clickable Prototypes", desc: "Realistic Figma prototypes that allow stakeholders and prospective clients to experience the product before code is written." }
        ],
        benefits: [
          "Dramatically reduce development rework by validating UX before writing code",
          "Lower user onboarding time and eliminate customer support confusion",
          "Increase user retention and commercial task completion rates",
          "Provide engineering teams with unambiguous, component-driven design specs"
        ],
        included: [
          "User persona research and journey mapping",
          "Interactive Figma prototype with complete user flows",
          "Comprehensive Design System component library in Figma",
          "Developer handoff documentation with spacing, typography, and token guides",
          "Asset export kit (icons, illustrations, vector components)"
        ],
        techStack: ["Figma", "FigJam", "Maze Usability Testing", "Storybook", "WCAG 2.1 Contrast Standards"],
        whyLored: "Because we have in-house software engineers, our designers design for reality. We don't create fantasies in Figma that are impossible or exorbitantly expensive to build; our designs translate cleanly into production code.",
        faqs: [
          { q: "What deliverables do our developers receive?", a: "Your engineering team receives an organized, production-grade Figma file with design tokens, component variants, auto-layout constraints, and interactive flow diagrams." },
          { q: "Do you design for both web applications and mobile apps?", a: "Yes. We design for responsive web portals, iOS native applications, Android interfaces, and specialized tablet kiosk systems." },
          { q: "How do you test if the design is actually user-friendly?", a: "We run unmoderated task tests using interactive Figma prototypes on platforms like Maze, observing real users complete core tasks and measuring success rates." }
        ]
      },
      {
        id: "rebranding-services",
        slug: "rebranding-services",
        url: "/rebranding-services/",
        title: "Rebranding",
        h1: "Rebranding Services for Businesses Ready for Their Next Stage",
        subtitle: "Strategic brand evolution, visual modernization, and launch planning for established companies outgrowing their original identity.",
        metaTitle: "Corporate Rebranding Services | DigiMarket",
        metaDesc: "Comprehensive rebranding for established businesses. Brand audits, identity evolution, website redesign, and change management.",
        heroImage: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1200&q=80",
        problemTitle: "When Your Reputation Has Outgrown Your Identity",
        problemDesc: "Many established businesses operate with a visual identity created years ago when the company was just starting out. Today, that dated look fails to reflect their real scale, sophistication, and commercial capability.",
        intro: "Rebranding is not about discarding your hard-earned heritage; it is about modernizing your identity so it accurately represents the scale and ambitions of your company today.",
        explanation: "DigiMarket guides leadership teams through strategic rebranding. We audit your existing brand equity, preserve what your customers cherish, modernize outdated visual elements, redesign your digital presence, and manage a confident public launch.",
        features: [
          { title: "Brand Equity & Perception Audit", desc: "Evaluating customer sentiment and identifying existing visual assets with high recognition value." },
          { title: "Strategic Repositioning", desc: "Updating your commercial mission and value proposition to reflect your current market stature." },
          { title: "Logo Evolution & Modernization", desc: "Refining or replacing outdated marks with sophisticated, scalable contemporary iconography." },
          { title: "Full Digital & Physical Overhaul", desc: "Updating websites, social profiles, vehicles, signage, uniforms, and corporate stationery." },
          { title: "Rebrand Launch & Transition Strategy", desc: "Crafting internal and external communication strategies to unveil your new identity with authority." }
        ],
        benefits: [
          "Re-energize your market presence and attract higher-tier business opportunities",
          "Signal growth, stability, and technological leadership to clients and investors",
          "Unify newly acquired divisions or services under one cohesive brand banner",
          "Boost internal employee pride and attract top industry talent"
        ],
        included: [
          "Brand audit and stakeholder transition roadmapping",
          "Evolved visual identity and design guidelines",
          "Complete corporate stationery and marketing asset redesign",
          "Website redesign and digital brand asset rollout",
          "Press release and public announcement messaging kit"
        ],
        techStack: ["Figma", "Adobe Creative Cloud", "Brandfolder", "Notion Launch Boards"],
        whyLored: "We understand that rebranding an established company carries operational responsibility. We manage transitions with care, ensuring that existing brand recognition and customer trust are preserved while elevating your image.",
        faqs: [
          { q: "How do we know if our company needs a full rebrand or just a refresh?", a: "If your business model, target clientele, or product lines have fundamentally shifted, a full rebrand is usually warranted. If your offerings remain identical but your visual presentation looks dated, an identity refresh is the smarter approach." },
          { q: "Will rebranding confuse our loyal existing customers?", a: "Not when executed properly. We prepare client communication letters and transparent messaging that explains the evolution as a positive milestone celebrating your company's growth." },
          { q: "How long does a complete corporate rebrand take?", a: "A comprehensive rebranding project typically takes 8 to 12 weeks from initial research to company-wide asset rollout." }
        ]
      }
    ]
  }
];

// Helper to look up any service by its exact URL or slug
export function getServiceByUrl(url) {
  const cleanUrl = url.endsWith('/') ? url : `${url}/`;
  for (const cat of SERVICE_CATEGORIES) {
    for (const s of cat.services) {
      if (s.url === cleanUrl || s.slug === url.replace(/\//g, '')) {
        return { ...s, category: cat };
      }
    }
  }
  return null;
}

// Helper to look up a category by its URL or slug
export function getCategoryByUrl(url) {
  const cleanUrl = url.endsWith('/') ? url : `${url}/`;
  for (const cat of SERVICE_CATEGORIES) {
    if (cat.url === cleanUrl || cat.slug === url.replace(/\//g, '')) {
      return cat;
    }
  }
  return null;
}

// All flat services array
export const ALL_SERVICES = SERVICE_CATEGORIES.flatMap(cat =>
  cat.services.map(s => ({ ...s, category: cat }))
);
