# Tech Stack — AA's Wellness Sites
### Acupuncture in North Georgia & Heart Of A Lion Shamanism

---

## Philosophy

The architecture is static-first: no server, no database, no hosting fees, no platform lock-in. Eliot builds and maintains the codebase. AA manages content through plain-English instructions to an AI coding assistant. Every dollar saved on infrastructure stays in the practice.

---

## Hosting & Deployment

### Cloudflare Pages
- **Cost:** Free, permanent
- **Why:** No commercial use restrictions (unlike GitHub Pages), no bandwidth caps, and Cloudflare's global CDN ensures fast load times worldwide — directly feeding Google's Core Web Vitals ranking signal
- **How it works:** The site files live in a GitHub repository. Every time a change is committed, Cloudflare automatically detects it and deploys the updated site globally within 60 seconds
- **Domains:** Custom domains (`acupunctureinnorthgeorgia.com`, `heartofalionshamanism.com`) attach for free

> **Note:** GitHub Pages was considered and ruled out. GitHub's own Terms of Service explicitly prohibit using it to host a commercial business website.

---

## Version Control

### GitHub
- **Cost:** Free
- **Why:** Industry standard repository hosting. Serves as the single source of truth for all site code. Every content update AA makes is committed here and triggers an automatic Cloudflare deployment

---

## Site Framework

### Astro
- **Cost:** Free, open source
- **Scaffolding:** `npm create astro@latest` (Webstorm > Terminal)
- **Why:** A modern static site generator purpose-built for content-heavy websites. Ships zero JavaScript to the browser by default — the single most effective way to hit sub-2.5-second load times that both Google's ranking algorithm and conversion benchmarks demand. Generates clean, semantic HTML that search engine crawlers can read fully with no JavaScript-rendered content that bots might skip

> **Note:** Next.js was considered and ruled out due to its newer caching model and deployment complexity adding unnecessary overhead for a static site of this scope.

---

## Content Management

### GitHub Copilot
- **Cost:** Free tier — 2,000 completions and 50 chat messages per month (resets monthly). $10/month if upgraded to Pro
- **Why:** Replaces the need for a traditional CMS entirely. AA opens VS Code or Webstorm, describes what she wants in plain English (e.g. *"Add a new blog post about the benefits of cupping therapy, publish it today"*), and Copilot makes the edit. She then clicks one button to commit and push the change. Cloudflare deploys it automatically within 60 seconds
- **Risk to monitor:** The 50 monthly chat messages is a ceiling worth watching. If AA updates content frequently and hits the limit, the $10/month Pro upgrade is the only potential recurring cost in the entire stack

---

## Scheduling & Lead Capture

### Cal.com
- **Cost:** Free (open source, cloud-hosted free tier)
- **Why:** Fully open source. Integrates natively with Apple Calendar, which AA already uses. Embedded directly into both static sites. New client inquiries trigger an immediate email notification to AA, preserving her existing workflow of receiving a lead and calling back immediately
- **SEO relevance:** Lead response time is the single highest-leverage conversion variable in the research — practices responding within 5 minutes are 10x more likely to convert. Cal.com supports this with real-time notifications the moment someone books or submits an inquiry

### MailChimp
- **Cost:** AA's existing subscription, unchanged
- **Why:** AA already uses this for newsletters. The static sites will include embedded MailChimp signup forms for list growth. No migration required

---

## Payments

### Square (Existing — Off-Site)
- **Cost:** AA's existing setup, unchanged
- **Why:** AA handles all payments locally post-treatment via Square on her phone. No payment processing is needed on the website

---

## SEO Architecture

The research is baked into the build from day one, not bolted on after.

### Google Business Profile — Primary SEO Asset
GBP signals account for **32% of local pack rankings**, making it the single most important factor. Both practices need fully built-out profiles with accurate hours, every service listed with local keyword descriptions, weekly Google Posts, and a proactive review-request system integrated into AA's post-session workflow. Reviews account for a further **20% of ranking weight** — review recency is the most underrated local ranking factor in 2025-2026.

### Service Area Pages (SAPs)
Pre-built into the site structure for North Georgia towns — Blue Ridge, Ellijay, Dahlonega, Jasper, Blairsville, and others. Each page is uniquely written with local landmarks, town-specific testimonials, and geo-targeted keywords. This is what drives rankings for "Acupuncture near me" searches from people in those towns without AA needing a physical office in each one.

> A Sterling Sky case study using this exact approach took a comparable practice from **35 to 1,350 daily clicks** and **670 to 1,920 monthly leads**.

### Schema Markup
Baked into every page at build time by Astro. The research shows 72.6% of first-page Google results use schema, and healthcare pages with review schema generate 58% higher click-through rates. Both sites will implement:
- `HealthAndBeautyBusiness`
- `FAQPage`
- `Person` (AA's credentials)
- `AggregateRating`
- `BreadcrumbList`

### E-E-A-T Signals
Both sites fall under Google's YMYL (Your Money or Your Life) category — health and wellness — which receives the strictest algorithmic scrutiny. AA's state licensing, NCCAOM certification, years of practice, and professional credentials are displayed prominently on every key page, not buried in an About section.

### Conversion Architecture
Follows the research-backed pattern for wellness sites, which achieve a **median 8.2% conversion rate** — the top 25% of practices hit 20%+:
- Three-field lead capture forms: Name, Phone, "What brings you in?"
- Sticky mobile footer with dual "Call Now" and "Book Now" CTAs
- Condition-specific testimonials placed directly above booking forms
- Real practitioner photos (never stock imagery)
- Transparent pricing and service descriptions

---

## Total Monthly Cost

| Item | Cost |
|---|---|
| Cloudflare Pages (hosting) | $0 |
| GitHub (version control) | $0 |
| Astro (framework) | $0 |
| Cal.com (scheduling) | $0 |
| GitHub Copilot (content management) | $0 free tier / $10 if upgraded |
| MailChimp (newsletters) | AA's existing cost, unchanged |
| Square (payments) | AA's existing cost, unchanged |
| **Total new monthly spend** | **$0** |

> For reference, Wix Business plans run $27–$49/month. This stack eliminates that cost permanently.
