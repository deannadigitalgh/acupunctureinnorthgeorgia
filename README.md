# Acupuncture in North Georgia - Static Website

**Client:** AA (Deanna Stennett)  
**Project:** Migration from Wix to static site + SEO optimization  
**Status:** Complete  

---

## 🎯 Project Goals Achieved

### Task 1: Acupuncture Website ✅ COMPLETE & READY FOR LAUNCH
- [x] Migrated from Wix to zero-cost static hosting
- [x] Self-maintainable by non-technical user (via GitHub Copilot)
- [x] Optimized for target SEO keywords in Georgia/Northern Georgia
- [x] Fast lead capture form with Formspree integration ready
- [x] Visual branding implemented:
  - Logo integrated into navigation header on all pages
  - Professional headshot added to About page and homepage
  - Consistent mobile-responsive image display
- [x] **SEO Fixes Implemented (February 2026):**
  - Sitemap.xml auto-generation via Astro sitemap plugin
  - robots.txt created with proper directives
  - Schema markup updated with real phone number and GPS coordinates
  - Privacy policy page created and linked on all contact forms
  - Test files cleaned up, favicon references fixed

### Task 2: Shamanism Website 🦁 IN PROGRESS
- [ ] See `TASK_2_SHAMANISM_WEBSITE.md` for full project scope
- [ ] Awaiting client content (services, pricing, testimonials, photos)
- [ ] Separate repository recommended (`projaa-shaman`)

---

## 🚀 Tech Stack

| Component | Technology | Cost |
|-----------|------------|------|
| **Framework** | Astro 5.x | Free |
| **Hosting** | Cloudflare Pages | Free |
| **Version Control** | GitHub | Free |
| **Content Management** | GitHub Copilot (free tier) | $0-10/mo |
| **Forms** | Custom API route + email integration | Free |
| **Online Booking** | Cal.com (self-service scheduling) | Free tier available |

**Total Monthly Cost: $0** (vs. Wix's $27-49/month)

---

## 📁 Project Structure

```
projaa-acu/
├── public/                       # Static assets (served at root URL)
│   ├── favicon.svg               # Simplified practice favicon (10.5KB — replace old placeholder)
│   ├── favicon.ico               # Legacy fallback (delete 175KB version, recreate from SVG if needed)
│   ├── logo.svg                  # Practice logo for headers/hero sections
│   └── headshots/                # Professional headshots
│       └── AA-headshot-10.jpg    # Deanna's professional headshot
├── src/
│   ├── layouts/
│   │   └── Layout.astro          # Global layout with schema markup + embedded CSS
│   ├── pages/
│   │   ├── index.astro           # Homepage (SEO optimized)
│   │   ├── about.astro           # Deanna's bio & credentials
│   │   ├── services.astro        # Treatment offerings + pricing
│   │   ├── faq.astro             # Patient questions answered
│   │   ├── testimonials.astro    # Patient reviews
│   │   ├── blue-ridge-ga.astro   # Service area page (SEO)
│   │   ├── dahlonega-ga.astro    # Service area page (SEO)
│   │   ├── jasper-ga.astro       # Service area page (SEO)
│   │   ├── helen-ga.astro        # Service area page (SEO)
│   │   └── api/
│   │       └── contact.ts        # Form submission handler
│   └── styles/
│       └── global.css            # Legacy file - CSS now embedded in Layout.astro
├── public/                       # Static assets (favicon, images)
├── astro.config.mjs             # Astro configuration
├── package.json                 # Dependencies
├── tsconfig.json               # TypeScript config
├── old_site_summary.md         # Preserved content from Wix site
└── README.md                   # This file
```

---

## 🎨 SEO Strategy Implemented

### Primary Keywords Targeted
- "Acupuncture in Georgia"
- "Alternative Medicine in Georgia"
- "Holistic Medicine in Georgia"
- "Acupuncture near me" (Northern Georgia)
- "Alternative Medicine Near Me" (Blue Ridge, Ellijay)
- "Holistic Medicine Near Me" (Blue Ridge, Ellijay)

### Local SEO Tactics
1. **Service Area Pages** - Dedicated pages for Blue Ridge, Dahlonega, Jasper, Helen
2. **Schema Markup** - HealthAndBeautyBusiness + Person schema on every page
3. **Local Keywords** - Embedded in headers, content, meta tags
4. **Google Business Profile** - Must be claimed and optimized (separate task)
5. **NAP Consistency** - Name, Address, Phone consistent across all pages

### Schema Markup Features
- LocalBusiness schema with geo-coordinates
- Service areas for all Northern Georgia towns
- Founder credentials (Deanna Stennett)
- Opening hours specification
- Price range indicators

---

## 📱 Mobile Optimization

- **Mobile-first CSS** - All styles designed for mobile, enhanced for desktop
- **Sticky Mobile CTA** - "Call Now" and "Book Online" buttons always visible on mobile
- **Touch-friendly targets** - 48px minimum tap targets per WCAG guidelines
- **Fast loading** - Zero JavaScript by default (Astro's core strength)

---

## 📧 Lead Capture Implementation

### Form Fields (Optimized for Conversion)
1. Full Name *
2. Phone Number *
3. Email Address *
4. Service Interest (dropdown)
5. Message (optional)

### Workflow
1. Visitor fills out form → submits
2. API route processes submission
3. **TODO:** Integrate with email service (Formspree, EmailJS, etc.)
4. AA receives immediate notification
5. AA calls visitor within minutes (per existing workflow)

---

## 🛠️ Deployment Instructions

### Step 1: Create GitHub Repository
```bash
# In your terminal
cd /mnt/shared/WebStormProjects/projaa-acu
git init
git add .
git commit -m "Initial commit - Acupuncture website"
```

### Step 2: Deploy to Cloudflare Pages
1. Go to https://pages.cloudflare.com/
2. Sign in with GitHub account
3. Select this repository
4. Build command: `npm run build`
5. Build output directory: `dist`
6. Add custom domain: `acupunctureinnorthgeorgia.com`

### Step 3: Configure Form Email Integration (CRITICAL - Required for Lead Capture)

**Formspree Setup:**
1. Sign up at https://formspree.io/
2. Create new form for AA's email address
3. Copy your Form ID (looks like `xmqbzqkp`)
4. Add as environment variable in Cloudflare Pages:
   - Go to Project Settings > Environment Variables
   - Add: `FORMSPREE_FORM_ID` = `your_actual_form_id_here`
5. Test form submission on staging site

**Note:** The API route is already configured at `src/pages/api/contact.ts`. It will automatically use the environment variable when deployed.

### Step 4: Google Business Profile (CRITICAL for #1 Rankings)

This is the **#1 ranking factor** for "near me" queries per SEO research:

1. **Claim Business:**
   - Go to https://business.google.com/
   - Search for "Acupuncture in North Georgia"
   - Click "Manage Now" if unclaimed

2. **Verify Both Locations:**
   - Ellijay: 11 Kiker Street, Ellijay, GA 30540
   - Blairsville: 563 Gainesville Hwy, Blairsville, GA 30512
   - Verification method: Postcard mail (7-14 days)

3. **Optimize Profile:**
   - Upload 20+ professional photos (office, Deanna headshot, treatment room, team)
   - Set accurate hours: Mon-Fri 9AM-5PM, Sat-Sun by appointment
   - Add services list (Acupuncture, NAET, Facial Rejuvenation, Five-Element)
   - Write compelling business description with keywords

4. **Review Collection System:**
   - Generate QR code linking to review page
   - Add to patient intake forms and office signage
   - Send automated email/SMS 24 hours after appointment requesting review
   - Respond professionally to ALL reviews within 48 hours

5. **Weekly Google Posts:**
   - Share health tips, office updates, patient success stories (anonymized)
   - Keep profile active for better rankings

### Step 5: Submit Sitemap to Google Search Console
1. After deployment, go to https://search.google.com/search-console/
2. Add property: `https://acupunctureinnorthgeorgia.com`
3. Verify ownership (HTML file upload or DNS record)
4. Submit sitemap: `https://acupunctureinnorthgeorgia.com/sitemap.xml`
5. Monitor indexing status and fix any errors

### Step 6: Set Up Google Analytics 4 (Optional but Recommended)
1. Create account at https://analytics.google.com/
2. Add property for acupunctureinnorthgeorgia.com
3. Get tracking ID (G-XXXXXXXXXX)
4. Add to `src/layouts/Layout.astro` in `<head>` section
5. Monitor traffic, user behavior, and conversions

---

## 🖼️ Visual Assets

### Logo & Headshot Implementation
The following assets have been integrated into the website:

| Asset | Location | Usage |
|-------|----------|-------|
| `favicon.svg` | `/public/favicon.svg` | Primary favicon (SVG format for scalability) |
| `favicon.ico` | `/public/favicon.ico` | Fallback favicon for older browsers |
| `logo-large.svg` | `/public/logo-large.svg` | **All pages**: Navigation header (all) + Top/bottom of pages WITHOUT headshots (Services, FAQ, Testimonials, Service Area pages: Blue Ridge, Dahlonega, Jasper, Helen) |
| `AA-headshot-10.jpg` | `/public/headshots/AA-headshot-10.jpg` | About page hero section + homepage About section (paired with logo) |

### Logo Placement Strategy

**Navigation Header (All Pages)**: Consistent branding, always accessible  
**Pages WITH Headshot (About + Homepage About Section)**: Large logo frames headshot at top and bottom - creates visual bookends around personal connection  
**Pages WITHOUT Headshot (Services, FAQ, Testimonials, Service Area pages)**: Large logo at top AND bottom of page - establishes brand identity before content and reinforces it after  

This placement strategy ensures AA's professional branding is present on every page while using the headshot strategically to build personal trust where it matters most.

> **Note**: Additional logo variants (`logo-med.svg`, `icon.svg`, PNG icons) are available in `/public/` but not currently used. This keeps the site focused on content and faster loading.

### How AA Can Update Images (Non-Technical Workflow)

**Option 1: GitHub Copilot in WebStorm/VS Code**
1. Open project in WebStorm or VS Code
2. Replace image files in `/public/` folder
3. Commit and push to GitHub
4. Cloudflare auto-deploys within 60 seconds

**Option 2: Direct File Replacement**
1. Navigate to `public/` folder
2. Replace existing images with new versions (keep same filename)
3. Save, commit, and push
4. Site updates automatically

> 💡 **Tip:** For best performance, optimize images before uploading:
> - Logos: SVG format preferred (scalable vector graphics)
> - Photos: JPEG/WebP format, max 2MB file size
> - Use tools like [Squoosh.app](https://squoosh.app/) or [TinyPNG](https://tinypng.com/)

---

## 📝 Content Management for AA

### How AA Can Update Content (Non-Technical Workflow)

**Option 1: GitHub Copilot in WebStorm/VS Code**
1. Open project in WebStorm or VS Code
2. Use Copilot Chat to describe changes: *"Add a new blog post about cupping therapy benefits"*
3. Review the generated content
4. Commit and push to GitHub
5. Cloudflare auto-deploys within 60 seconds

**Option 2: Direct File Editing**
1. Open any `.astro` file in `src/pages/`
2. Edit text content directly
3. Save, commit, and push
4. Site updates automatically

### Content to Update Regularly
- Testimonials (add new patient reviews)
- Blog posts (create new pages for health tips)
- Service descriptions (update offerings)
- Hours of operation (if changed)

---

## 🎯 Next Steps & Recommendations

### ✅ COMPLETED BEFORE LAUNCH (February 2026)

The following critical fixes have been implemented based on the SEO evaluation:

1. ✅ **Sitemap Plugin Added** - Astro sitemap plugin configured in `astro.config.mjs`
2. ✅ **robots.txt Created** - Located at `/public/robots.txt` with sitemap reference
3. ✅ **Schema Markup Updated** - Real phone number (+14109619033) and GPS coordinates (Ellijay: 34.8657, -84.8290)
4. ✅ **Formspree Integration Ready** - Contact form API route configured for email delivery (requires Form ID setup)
5. ✅ **Privacy Policy Page Created** - `/privacy-policy` page with HIPAA-compliant language
6. ✅ **Favicon References Fixed** - Removed non-existent fallback files from Layout.astro
7. ✅ **Test Files Cleaned Up** - All debug test files removed from `src/pages/`
8. ✅ **Privacy Policy Links Added** - All contact forms now link to privacy policy

### 📅 NEW: Cal.com Online Booking Integration (February 2026)

1. ✅ **Cal.com Inline Embed Implemented** - Month view calendar embedded in homepage contact section using `set:html` directive for script execution
2. ✅ **Dual Booking Options** - Online self-service calendar + traditional phone form
3. ✅ **Configuration Centralized** - Cal.com settings in `src/config/contact.ts` (update `calLink`, `containerId`, and `layout`)
4. ✅ **Responsive Styling** - Mobile-optimized embed container with proper z-index and scroll handling
5. ✅ **SEO-Friendly** - Inline embed allows Google to index calendar content (vs. hidden floating button)

### ⚠️ Known Console Warnings (Third-Party Library Issues)

The Cal.com embed generates console warnings in Chrome. These are **known issues with Cal.com's library**, not our implementation:

1. **`markdownToSafeHTML` client-side import** - Cal.com incorrectly imports a server-side utility
2. **Zustand deprecation notice** - Cal.com uses older zustand API (`create` vs `createWithEqualityFn`)
3. **aria-hidden focus issue** - Accessibility concern in modal dialogs

**Impact**: None to Minor - These are warnings only, functionality is unaffected. See [`CAL_COM_SETUP_GUIDE.md`](CAL_COM_SETUP_GUIDE.md) (see "Known Console Warnings" section near the end) for detailed analysis and monitoring plan.

### ⚠️ REMAINING CRITICAL ACTIONS (You Must Complete)

1. **[ ] Set up Cal.com Account & Configure Event Types** (Recommended but optional)
   - See [`CAL_COM_SETUP_GUIDE.md`](CAL_COM_SETUP_GUIDE.md) for detailed step-by-step instructions
   - Quick steps:
     ```bash
     # Go to https://cal.com and create account
     # Create event types: "New Patient Acupuncture", "Follow-up Appointment"
     # Update src/config/contact.ts with your cal.com username/event URL
     # Example: calLink: 'deanna-stennett/new-patient-acupuncture'
     ```

2. **[ ] Set up Formspree Account & Get Form ID**
   ```bash
   # Go to https://formspree.io/ and create account
   # Create new form for AA's email address
   # Add FORMSPREE_FORM_ID environment variable to Cloudflare Pages:
   # FORMSPREE_FORM_ID=your_actual_form_id_here
   ```

3. **[ ] Claim & Optimize Google Business Profile** (Required for #1 rankings)
   - Go to https://business.google.com/
   - Verify both Ellijay and Blairsville locations
   - Upload 20+ professional photos
   - Set up automated review collection system
   - Post weekly updates via GBP dashboard

3. **[ ] Deploy to Cloudflare Pages**
   ```bash
   git init
   git add .
   git commit -m "SEO fixes: sitemap, robots.txt, privacy policy, Formspree integration"
   # Push to GitHub and connect to Cloudflare Pages
   ```

4. **[ ] Submit Sitemap to Google Search Console**
   - After deployment, submit `https://acupunctureinnorthgeorgia.com/sitemap.xml`
   - Verify property ownership

5. **[ ] Set Up Google Analytics 4** (Optional but recommended)
   - Add tracking code to Layout.astro
   - Monitor traffic and rankings

### SEO Timeline Expectations
- **Month 1:** Site indexed by Google, GBP profile active
- **Months 2-3:** Begin ranking for long-tail keywords
- **Months 4-6:** Target primary keywords start appearing in top results
- **Ongoing:** Add blog content, collect reviews, build backlinks

### SEO Implementation Status
See [`SEO_EVALUATION_AA_WEBSITE_PROJECT.md`](SEO_EVALUATION_AA_WEBSITE_PROJECT.md) for detailed analysis of how well the current implementation aligns with research-backed SEO best practices.

**Current Score: 8/10** - Technical foundation now complete, missing only off-page elements (GBP, backlinks, blog content).

### Cost Savings Summary
| Platform | Monthly Cost | Annual Savings |
|----------|--------------|----------------|
| Wix (current) | $27-49 | $324-588 |
| WordPress self-hosted | $10-20 | $120-240 + maintenance time |
| **This solution** | **$0** | **$324-588/year** |

---

## 📅 Cal.com Integration Details

> **Note**: See [`CAL_COM_WARNINGS.md`](CAL_COM_WARNINGS.md) for detailed analysis of known console warnings (third-party library issues that don't affect functionality).

### What is Cal.com?
Cal.com is a free, open-source scheduling platform that allows clients to book appointments directly from your website. It integrates with Google Calendar, iCal, and other calendar services.

### Why Inline Embed (Not Floating Button)?

Based on SEO evaluations and user performance research:

| Feature | **Inline Embed** ✅ | Floating Button ❌ |
|---------|---------------------|-------------------|
| **SEO Indexing** | Google can index calendar content | Hidden from crawlers |
| **Conversion Rate** | Higher (visible immediately) | Lower (requires click) |
| **Mobile UX** | Better (native scroll) | Can be tricky on small screens |
| **Professional Look** | More trustworthy for healthcare | Looks like ad/pop-up |
| **Accessibility** | Screen readers can access | May require extra steps |

**Recommendation**: Inline embed is the best choice for medical/healthcare practices where trust and SEO matter.

### How It Works on This Site

1. **Inline Embed** - A month-view calendar appears in the homepage contact section
2. **Self-Service Booking** - Clients can select available times instantly
3. **Calendar Sync** - Events automatically sync with AA's Google Calendar (if configured)
4. **Fallback Form** - Traditional email form remains for clients who prefer phone calls

### Configuration

Edit `src/config/contact.ts` to update the Cal.com profile:

```typescript
export const CAL_COM = {
  calLink: 'deannastennett/newacuellijay', // Your event type slug from Cal.com
  containerId: 'my-cal-inline-newacuellijay', // Unique ID for this embed
  layout: 'month_view' as const, // Options: month_view, week_view, day_view
} as const;
```

**How to Get Your Embed Code:**

1. **Log into Cal.com Dashboard**: https://app.cal.com
2. **Go to Event Types**: Click on your event type (e.g., "New Acupuncture Appointment")
3. **Click "Share" or "Embed"** in the top right
4. **Choose "Inline Embed"** option
5. **Copy the HTML code** and update `src/config/contact.ts` with:
   - Your `calLink` (the event type slug)
   - Your `containerId` (the div ID from the embed code)

**Example Event Type URLs:**
- Profile page: `https://cal.com/deannastennett`
- Specific event type: `https://cal.com/deannastennett/newacuellijay`

### Technical Implementation Notes

This site uses Astro's `set:html` directive to render the Cal.com embed code. This is critical because:

1. **Script Execution**: The Cal.com embed requires JavaScript to run. Using `{config.getCalEmbedHtml()}` with `set:html` ensures the script executes properly instead of being escaped as text.
2. **Security**: Astro's `set:html` is safe here because we control the template string in `contact.ts`.
3. **Performance**: The Cal.com embed script loads asynchronously, so it doesn't block page rendering.

**Alternative Approaches Considered:**
- ❌ **React Component**: Would require installing React runtime (adds ~15KB bundle)
- ❌ **Iframe Embed**: Less flexible styling, potential cross-origin issues
- ✅ **Inline Script with `set:html`**: Zero dependencies, full control, best performance

### Testing Your Integration

After updating `calLink` in `src/config/contact.ts`:

1. **Local Test**: Run `npm run dev` and navigate to homepage
2. **Verify Calendar Loads**: You should see a month-view calendar in the contact section
3. **Test Booking Flow**: Click on an available date → select time → complete booking form
4. **Check Email Confirmation**: Both you and the client should receive confirmation emails

### Troubleshooting

| Issue | Solution |
|-------|----------|
| Calendar doesn't load | Check browser console for errors; verify `calLink` matches your Cal.com event type slug exactly |
| Script not executing | Ensure you're using `set:html={config.getCalEmbedHtml()}` in the Astro template, not `{config.getCalEmbedScript()}` |
| Wrong layout showing | Update `layout` property in `CAL_COM` config (`month_view`, `week_view`, or `day_view`) |
| Mobile display issues | The embed is responsive by default; check that container has sufficient width (min 300px recommended) |

### Benefits for AA

✅ **24/7 Booking** - Clients can book outside office hours  
✅ **No Back-and-Forth** - Eliminates phone tag and scheduling delays  
✅ **Calendar Sync** - Automatic conflict prevention  
✅ **Email Notifications** - Automated reminders to both parties  
✅ **Free Tier** - No cost for basic scheduling features  
✅ **SEO Boost** - Google can index calendar content (vs. hidden floating button)  

### Migration Path

1. **Create Cal.com Account**: https://cal.com (free tier available)
2. **Connect Your Calendar**: 
   - Google Calendar: Direct integration
   - Apple Calendar: Use iCal sync URL
3. **Create Event Types** in Cal.com dashboard:
   - "New Acupuncture Appointment" (90 minutes)
   - "Follow-up Appointment" (60 minutes)
   - "NAET Allergy Treatment" (as needed)
4. **Get Embed Code**: For each event type, click Share → Inline Embed
5. **Update Configuration** in `src/config/contact.ts`:
   ```typescript
   calLink: 'deannastennett/newacuellijay', // Your event type slug
   containerId: 'my-cal-inline-newacuellijay', // Unique ID per embed
   layout: 'month_view' as const,
   ```
6. **Commit and Push** - Changes deploy automatically to Cloudflare Pages!

### Adding Multiple Event Types

If you want different calendars for different services (e.g., acupuncture vs shamanism):

1. Create separate event types in Cal.com dashboard
2. Get embed code for each one
3. Update `containerId` to be unique per embed:
   ```typescript
   // For acupuncture site
   containerId: 'my-cal-inline-acu',
   
   // For shamanism site (separate repo)
   containerId: 'my-cal-inline-shaman',
   ```

4. Update the `calLink` to point to different event types:
   ```typescript
   calLink: 'deannastennett/new-patient-acupuncture'  // Acupuncture
   calLink: 'deannastennett/shamanic-healing-session' // Shamanism
   ```

---

## 🔧 Technical Notes & Key Lessons Learned

### 🎓 Critical Astro Patterns (Learned Through Debugging)

#### 0. Centralized Configuration Pattern ✅ NEW!

**Always use `src/config/contact.ts` for site-wide constants:**

```typescript
// src/config/contact.ts - Single source of truth
import * as config from '../config/contact.ts';

// Usage in any page:
<a href={config.getPhoneLink()}>{config.PHONE.formatted}</a>
```

**Benefits:**
- ✅ One edit updates ALL pages
- ✅ Eliminates data duplication (15+ instances → 1 source)
- ✅ Prevents inconsistent phone numbers across pages
- ✅ Easy for non-technical users to maintain

#### 1. Layout Content Injection: `<slot />` Not `{Astro.children}`

❌ **WRONG** (React/Vue syntax - doesn't work in Astro):
```astro
<body>
    {Astro.children}
</body>
```

✅ **CORRECT** (Astro syntax):
```astro
<body>
    <slot />
</body>
```

This was the #1 cause of blank pages. Always use `<slot />` to inject page content into layouts.

#### 2. Global CSS in Full-Page Layouts

When your layout has `<html>`, `<head>`, and `<body>` tags, you **cannot** import CSS at the top:

❌ **WRONG**:
```astro
---
import '../styles/global.css';  // Doesn't work!
---
<html>...</html>
```

✅ **CORRECT**:
```astro
<head>
    <style is:global>
        /* All your CSS here */
    </style>
</head>
```

#### 3. JSON-LD Schema Injection

Use `set:html` for injecting dynamic JSON into script tags:

```astro
<script 
    type="application/ld+json"
    set:html={schemaJson}
></script>
```

---

### ⚠️ Troubleshooting Blank Pages

If you encounter a blank page when running `npm run dev`:

1. **Check Layout uses `<slot />`** - Not `{Astro.children}` (that's React syntax!)
2. **Clear cache and restart**:
   ```bash
   rm -rf .astro node_modules/.cache
   npm run dev
   ```
3. **Verify global styles are embedded** in `Layout.astro` using `<style is:global>`

### Development Workflow

```bash
# Start dev server with hot reload
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview
```

### Browser DevTools Checklist
If page doesn't render:
1. Check Console tab for JavaScript errors
2. Check Network tab to verify CSS files are loading (status 200)
3. Verify HTML structure includes `<body>` tag and `<slot />` in layout
4. Clear browser cache and reload

### Known Issues Fixed

**Issue: Contact header button doesn't work on all pages**  
**Root Cause:** Navigation link used `href="#contact"` but only worked on pages with a section having `id="contact"`. Pages `about.astro` and `faq.astro` were missing this section.  
**Solution:** Added contact form sections to both `about.astro` and `faq.astro` so the navigation "Contact" link works consistently across all 9 pages.

**Issue: Page not rendering when running `npm run dev` (BLANK SCREEN)**  
**Root Cause:** Using `{Astro.children}` instead of `<slot />` in Layout.astro  
**Solution:** Changed to `<slot />` which is the correct Astro syntax for layout content injection.

**Issue: CSS not loading**  
**Root Cause:** Importing CSS at top of Layout file with `<html>`, `<head>`, `<body>` structure.  
**Solution:** Moved all CSS into inline `<style is:global>` block within `Layout.astro`.

❌ **WRONG:**
```astro
<body>
    {Astro.children}  <!-- This does NOT work in Astro! -->
</body>
```

✅ **CORRECT:**
```astro
<body>
    <slot />  <!-- This is the correct Astro syntax -->
</body>
```

This was the #1 cause of blank pages during development. Always use `<slot />` to inject page content into layouts.

### Performance Optimizations
- Zero JavaScript sent to browser by default (Astro)
- HTML compression enabled (`compressHTML: true`)
- Inline stylesheets for critical CSS (embedded in Layout)
- Lazy loading on images and iframes
- Minimal external dependencies

### Accessibility Features
- Semantic HTML structure with proper heading hierarchy
- Skip-to-content link for keyboard users
- High contrast color scheme
- Touch-friendly targets (48px minimum per WCAG guidelines)

### Browser Support
- All modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)

---

## 🦁 TASK 2: Shamanism Website

**Status:** Ready for Development - See [`TASK_2_SHAMANISM_WEBSITE.md`](TASK_2_SHAMANISM_WEBSITE.md) for full scope.

A second static website is being built using the same Astro + Cloudflare Pages stack for AA's shamanic healing practice "Heart Of A Lion Shamanism". The technical architecture, deployment process, and maintenance workflow are identical to this acupuncture site.

**Key Differences:**
- Separate repository recommended (`projaa-shaman`)
- Different branding (reds/golds vs. healing greens/blues)
- Workshop calendar feature (not needed on acupuncture site)
- Target keywords: "Shamanic Healing in Georgia", "Shamanic Workshop Near Me"

---

## 📞 Contact Information

**Client:** AA (Deanna Stennett)  
**Practice:** Acupuncture in North Georgia  
**Offices:** 
- Ellijay: 11 Kiker Street, Ellijay, GA 30540
- Blairsville: 563 Gainesville Hwy, Blairsville, GA 30512

---

## 🔧 Centralized Configuration System

### Overview
All site-wide contact information, pricing, and business details are now centralized in a single configuration file: `src/config/contact.ts`. This eliminates data duplication across all pages and ensures consistency.

### What's Centralized?

| Category | Examples |
|----------|----------|
| **Practice Info** | Name, founder name, tagline |
| **Contact Details** | Phone number (formatted + E.164), office addresses |
| **Business Hours** | Weekday/weekend hours, full description |
| **Service Areas** | All Northern Georgia towns with distances |
| **Pricing** | First visit ($130/90min), follow-up ($90/60min) |
| **Services** | Acupuncture, NAET, Facial Rejuvenation (basic info) |
| **SEO Config** | Domain URL, primary keywords |

### How to Update Contact Info

**Non-technical users:** Simply edit `src/config/contact.ts`:

```typescript
export const PHONE = {
  main: '+14109619033',           // Change this ONE value
  formatted: '(410) 961-9033',    // Update display format too
} as const;
```

**Result:** Phone number updates automatically across ALL 9 pages!

### Benefits Achieved

| Before | After |
|--------|-------|
| ❌ 15+ phone number instances scattered across pages | ✅ 1 source of truth |
| ❌ Inconsistent numbers (410 vs 706 area codes) | ✅ Guaranteed consistency |
| ❌ Risk of missing a page when updating | ✅ Automatic propagation |
| ❌ Hard to maintain long-term | ✅ Easy for non-technical users |

### Technical Implementation

```typescript
// src/config/contact.ts - Single source of truth
export const PHONE = { main: '+14109619033', formatted: '(410) 961-9033' };

// Any page imports and uses it
import * as config from '../config/contact.ts';
<a href={config.getPhoneLink()}>{config.PHONE.formatted}</a>
```

---

## 🧹 Pre-Deployment Checklist (February 2026 Update)

**All critical SEO fixes have been implemented. Before deploying to Cloudflare Pages:**

### ✅ Files Created
- [x] `/public/robots.txt` - With sitemap reference
- [x] `/src/pages/privacy-policy.astro` - HIPAA-compliant privacy policy
- [x] Sitemap auto-generation configured via Astro plugin

### ✅ Files Verified Clean
- [x] No test files remain in `src/pages/` directory
- [x] All favicon references fixed (removed non-existent PNG fallbacks)
- [x] Schema markup updated with real phone number and GPS coordinates

### ⚠️ Environment Variables Required
Add these to Cloudflare Pages before deployment:
```bash
FORMSPREE_FORM_ID=your_actual_formspree_form_id_here
```

### ✅ Final Verification Steps
1. Run `npm run build` locally to ensure no errors
2. Test form submission with Formspree test mode
3. Verify sitemap.xml generates at `/sitemap.xml` after build
4. Check robots.txt is accessible at `/robots.txt`
5. Confirm privacy policy page renders correctly

### 🚀 Deployment Command
```bash
git init
git add .
git commit -m "SEO fixes: sitemap, robots.txt, privacy policy, Formspree integration, schema update"
git push origin main  # Push to GitHub for Cloudflare Pages auto-deploy
```

---

## 📄 License & Credits

Built with Astro for AA's practice. All content preserved from original Wix site (see `old_site_summary.md`).

© 2026 Acupuncture in North Georgia. All rights reserved.
