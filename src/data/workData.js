/**
 * ============================================================
 * DigiMarket DIGITAL AGENCY — WORK & CASE STUDIES DATA
 * Selected real-world projects across India & the GCC
 * ============================================================
 */

export const CASE_STUDIES = [
  {
    id: "gcc-retail-ecommerce",
    slug: "gcc-retail-ecommerce",
    title: "High-Performance Multi-Currency Storefront for GCC Retail",
    client: "Al-Miraj Home & Lifestyle",
    industry: "Retail & Consumer Goods",
    location: "Dubai, UAE & Muscat, Oman",
    services: ["Ecommerce Development", "Performance Optimization", "Payment Gateway Integration"],
    category: "Web Engineering",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80",
    excerpt: "Re-engineering a sluggish multi-brand retail catalog into a sub-second headless storefront with localized UAE and Oman payment gateways.",
    challenge: "The client operated on a legacy WooCommerce setup burdened with 40+ plugins. Slow page loads (6.4s on mobile) and checkout payment failures across regional GCC cards were causing over 72% cart abandonment.",
    strategy: "We decoupled the front-end using a custom lightweight React storefront, optimized product database queries, and implemented native GCC payment gateways supporting Apple Pay and local debit networks.",
    solution: "A modern, lightning-fast ecommerce platform with multi-currency switching (AED & OMR), instant AJAX product filtering, automated WhatsApp order updates, and localized address fields.",
    technology: ["React", "WooCommerce REST API", "Node.js", "Redis Cache", "Tap Payments", "Cloudflare"],
    implementation: "The build was executed over 7 weeks with zero downtime for existing retail operations. Product catalogs with over 8,000 SKUs were migrated cleanly with historical customer order records intact.",
    results: [
      { label: "Mobile Page Load", value: "1.2s", desc: "Down from 6.4 seconds previously" },
      { label: "Checkout Completion", value: "+38%", desc: "Direct increase in completed transactions" },
      { label: "Core Web Vitals", value: "98/100", desc: "Clean green status on Google PageSpeed" }
    ]
  },
  {
    id: "b2b-erp-cloud-portal",
    slug: "b2b-erp-cloud-portal",
    title: "Centralized Operations & Odoo ERP Implementation for Kerala Logistics",
    client: "Malabar Freight & Supply Chain",
    industry: "Logistics & Distribution",
    location: "Kochi & Kannur, Kerala",
    services: ["Odoo / ERP Implementation", "Custom Web Development", "Cloud Infrastructure"],
    category: "Infrastructure & Systems",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80",
    excerpt: "Consolidating fleet operations, consignment tracking, GST e-invoicing, and warehouse stock into a centralized Odoo ERP ecosystem.",
    challenge: "Disparate spreadsheet tracking across 4 regional warehouse hubs created invoicing delays, stock count mismatches, and endless phone calls for customer consignment inquiries.",
    strategy: "We deployed a dedicated Odoo Enterprise instance on secure cloud infrastructure, integrating automated GST e-way billing and building a lightweight client tracking portal.",
    solution: "A unified system connecting dispatch, billing, and fleet tracking. Clients now check real-time shipment status online, while accounting generates GST-compliant invoices automatically.",
    technology: ["Odoo ERP", "Python", "PostgreSQL", "AWS EC2 & S3", "Docker", "REST API"],
    implementation: "Implemented in a phased 8-week rollout, starting with core inventory and accounting before extending to driver mobile updates and client self-service portals.",
    results: [
      { label: "Invoice Processing Time", value: "-65%", desc: "Automated from order to delivery dispatch" },
      { label: "Data Accuracy", value: "99.8%", desc: "Elimination of double data entry across hubs" },
      { label: "System Uptime", value: "99.95%", desc: "Maintained consistently on dedicated AWS cloud" }
    ]
  },
  {
    id: "healthcare-corporate-platform",
    slug: "healthcare-corporate-platform",
    title: "Corporate Digital Platform & Patient Appointment Engine",
    client: "Crescent Specialty Clinics",
    industry: "Healthcare & Diagnostics",
    location: "Calicut & Kannur, Kerala",
    services: ["Website Development", "SEO Services", "UI/UX Design"],
    category: "Web Engineering",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80",
    excerpt: "Developing a trusted, accessible healthcare web platform that increased verified appointment bookings and organic local search visibility.",
    challenge: "The clinic's older website was non-responsive, difficult for elderly patients to read, and failed to rank for local specialist healthcare queries in northern Kerala.",
    strategy: "We designed an empathetic, high-contrast UI meeting accessibility standards (WCAG 2.1), built a streamlined doctor schedule and booking engine, and executed structured local SEO.",
    solution: "A clean, reassuring digital presence featuring department overviews, verified doctor profiles, one-click WhatsApp appointment triage, and rapid mobile load times.",
    technology: ["Next.js", "Clean CSS", "WordPress Headless", "Google Cloud", "Schema.org Health"],
    implementation: "Designed and engineered within 6 weeks, including extensive user testing with different age demographics to guarantee effortless navigation.",
    results: [
      { label: "Online Enquiries", value: "+54%", desc: "Substantial growth in confirmed doctor bookings" },
      { label: "Local Search Rank", value: "Top 3", desc: "For key clinical specialties in Malabar region" },
      { label: "Mobile Bounce Rate", value: "-41%", desc: "Reflecting intuitive, accessible navigation" }
    ]
  },
  {
    id: "industrial-brand-modernization",
    slug: "industrial-brand-modernization",
    title: "Brand Identity & Web Engineering for Engineering Manufacturer",
    client: "Apex Precision Tools",
    industry: "Industrial Manufacturing & Exports",
    location: "Bengaluru, Karnataka",
    services: ["Logo & Brand Identity", "Website Development", "Creative Design"],
    category: "Branding & Creative",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80",
    excerpt: "Transforming an established tool manufacturer's identity and online technical catalog to attract export buyers in Germany and the Middle East.",
    challenge: "Despite 18 years of high-precision engineering excellence, the client's visual materials and website looked dated, causing international buyers to perceive them as a low-cost commodity vendor.",
    strategy: "We engineered a refined, architectural brand identity, created a technical product specification catalog, and authored detailed capability profiles for international trade shows.",
    solution: "A commanding visual identity system and multilingual-ready website highlighting precision tolerances, ISO certifications, and interactive CAD request forms.",
    technology: ["Figma", "React", "Vector SVG System", "AWS CloudFront", "Tailored CMS"],
    implementation: "Delivered over 9 weeks, culminating in a complete launch kit including corporate stationery, factory signage guidelines, and export brochures.",
    results: [
      { label: "Export Enquiries", value: "+32%", desc: "Direct increase in RFQs from overseas distributors" },
      { label: "Catalog Downloads", value: "2,400+", desc: "Verified technical spec downloads in 6 months" },
      { label: "Brand Perceived Value", value: "Elevated", desc: "Successfully supported 15% price renegotiation" }
    ]
  }
];
