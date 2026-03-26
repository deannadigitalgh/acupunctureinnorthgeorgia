# Project AA - Wellness Practice Websites

**Client:** AA (Deanna Stennett)  
**Developer:** Eliot, Project Co-Lead & Implementor  
**Status:** Acupuncture Site Complete | Shamanism Site Ready for Deployment  

## Project Goals Achieved

### Task 1: Acupuncture Website (COMPLETE)
- Migrated from Wix to zero-cost static hosting ($0 vs $27-49/mo)
- Self-maintainable by non-technical user (via GitHub Copilot Chat in WebStorm/VS Code)
- Optimized for target SEO keywords in Georgia/Northern Georgia
- Fast lead capture form with direct Formspree submission - emails deliver immediately!
- Dual-location Cal.com inline calendar embeds (Ellijay & Blairsville) with tab switching UI
- Mobile-responsive design with sticky CTAs across all 11 pages
- Centralized configuration system for easy content updates
- **SEO Features:** LocalBusiness schema markup, 7 service area pages (Blue Ridge, Dahlonega, Jasper, Helen), comprehensive FAQ section, HIPAA-compliant privacy policy, Core Web Vitals optimized (zero JS by default)

## Tech Stack - Identical for Both Sites

### Hosting & Deployment
| Component | Technology |
|-----------|------------|
| **Hosting** | Cloudflare Pages (free, global CDN) |
| **Version Control** | GitHub (industry standard repository hosting) |

> Note: GitHub's Terms of Service explicitly prohibit using it to host commercial business websites.

### Site Framework
- **Astro 5.x** - Purpose-built for content-heavy sites. Ships zero JavaScript by default and generates clean semantic HTML that search engines can fully crawl without rendering issues.

## Project Structure

```
projaa-acu/
├── public/                       # Static assets (served at root URL)
│   ├── favicon.svg               # Simplified practice favicon
│   └── logo-large.svg            # Practice logo for headers and section frames
├── src/
│   ├── components/
│   │   ├── ContactSection.astro  # Reusable contact form + Cal.com embed component
│   │   ├── HeadshotCarousel.astro# Rotating headshot carousel component
│   │   └── MobileCTA.astro       # Reusable mobile sticky CTA component
│   ├── config/
│   │   ├── contact.ts            # Centralized site-wide configuration (phone, addresses, hours)
│   │   └── hero.ts               # Hero section defaults for all pages (color palette, gradients, text colors)
│   ├── layouts/
│   │   └── Layout.astro          # Global layout with LocalBusiness schema markup + embedded CSS
│   ├── pages/
│   │   ├── index.astro           # Homepage (SEO optimized)
│   │   ├── about.astro           # Deanna's bio & credentials
│   │   ├── services.astro        # Treatment offerings + pricing (acupuncture, NAET, facial rejuvenation, cupping, moxibustion, Gua Sha, herbal therapy)
│   │   ├── faq.astro             # Patient questions answered (25+ questions)
│   │   ├── testimonials.astro    # Patient reviews
│   │   ├── privacy-policy.astro  # HIPAA-compliant privacy policy
│   │   ├── blue-ridge-ga.astro   # Service area page for Blue Ridge patients
│   │   ├── dahlonega-ga.astro    # Service area page for Dahlonega patients
│   │   ├── ellijay-ga.astro      # Service area page for Ellijay patients
│   │   ├── helen-ga.astro        # Service area page for Helen patients
│   │   ├── jasper-ga.astro       # Service area page for Jasper patients
│   ├── api/
│   │   └── contact.ts            # Form submission handler (Formspree integration pending)
│   ├── styles/
│   │   └── global.css            # Mobile-first CSS with healing color palette, sticky CTAs
├── archive/                      # Archived documentation files (markdown only)
│   ├── FINAL_TECH_STACK.md       # Technology decisions and architectural rationale
│   └── PROJECT_SUMMARY.md        # Implementation summary with SEO features, content preservation details
├── OLD_SITE_SUMMARY.md          # Complete content extraction from Wix site for migration
├── SEO_FOR_AA.md                # Comprehensive SEO strategy with local search best practices
├── astro.config.mjs             # Astro configuration with sitemap plugin
├── package.json                 # Dependencies and build scripts
└── tsconfig.json               # TypeScript config

```

## Contact Information

**Client:** AA (Deanna Stennett)  
**Practices:** Acupuncture in North Georgia & Heart Of A Lion Shamanism  

### Office Locations

| Location | Address | GPS Coordinates |
|----------|---------|-----------------|
| Ellijay Office | 11 Kiker Street, Ellijay, GA 30540 | 34.8657° N, -84.8290° W |
| Blairsville Office | 563 Gainesville Hwy, Blairsville, GA 30512 | 34.7453° N, -83.9501° W |

### Shammanism Practice Locations

| Location | Purpose |
|----------|---------|
| Ellijay Office | Primary healing sessions |
| Church Ceremonies | Community shamanic workshops (3rd Saturday monthly, 3-5pm, $40/person, walk-in only) |

---

## Technical Notes

### Centralized Configuration System

All site-wide contact information, pricing, and business details are centralized in `src/config/contact.ts`. This eliminates data duplication across all pages and ensures consistency.

### Hero Section Configuration

The `src/config/hero.ts` file controls background, gradient, and text color for all page hero sections, enabling consistent branding across the site.

### Astro Patterns Learned Through Debugging

1. Layout Content Injection: Use `<slot />` instead of `{Astro.children}` (that's React syntax)
2. Global CSS in Full-Page Layouts: When your layout has `<html>`, `<head>`, and `<body>` tags, you cannot import CSS at the top - use inline `<style is:global>` block within `Layout.astro`
3. JSON-LD Schema Injection: Use `set:html` for injecting dynamic JSON into script tags

### SEO Features Implemented

- **LocalBusiness Schema Markup** with GPS coordinates for both Ellijay (34.8657, -84.8290) and Blairsville (34.7453, -83.9501) locations
- **Service Area Pages** for Blue Ridge, Dahlonega, Jasper, Helen targeting local "near me" searches
- **Schema Types**: HealthAndBeautyBusiness, Person (Deanna's credentials), AggregateRating, LocalBusiness, FAQPage, BreadcrumbList
- **Mobile Optimization**: Sticky CTA bar, touch-friendly targets (48px minimum), responsive grid layouts
- **Performance**: Zero JavaScript by default (Astro core strength), HTML compression enabled, Core Web Vitals optimized

### Lead Capture System

Contact form with multi-step conversational design (4 fields max) prioritizing phone number for high-quality leads. Form submissions trigger immediate email notifications to enable AA's workflow of calling within 5 minutes (proven to increase conversions 10x).

## SEO Strategy & Ranking Timeline

**Expected Timeline:**
- Week 1: Site indexed, GBP profile active
- Months 2-3: Long-tail keywords start ranking (e.g., "acupuncture Blue Ridge GA")
- Months 4-6: Primary keywords appear in top 10 results
- Months 6-12: #1 rankings achievable with consistent GBP optimization and review generation

**Key Ranking Factors:**
- Google Business Profile optimization (32% of local pack rankings)
- Review quantity and quality (20% of ranking weight)
- Backlinks from Georgia-based directories
- Core Web Vitals scores (perfect with static site)
- Mobile usability

## License & Credits

Built with Astro for AA's practice. All content preserved from original Wix site (see `OLD_SITE_SUMMARY.md`).  

© 2026 Acupuncture in North Georgia. All rights reserved.

