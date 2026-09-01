# Havenux — Style Reference
> violet-lit vault at midnight. A near-black canvas glows with a single lavender signal and a green confirmation light, every surface rounded just enough to feel handled.

**Theme:** dark

Havenux operates as a dark-mode security console: a near-black violet-tinted canvas (`#1c1624`) with whisper-thin light borders, one vivid green that signals 'go', and one lavender violet that carries brand voice in headlines and highlights. The interface feels like a vault UI — dense product surfaces, glass-blur header, 20px rounded cards floating on a midnight field. This directly serves the product: Havenux builds risk management, KYC, and market software for financial institutions, so the UI itself should read as secure, controlled, and precise.

Typography is Inter (a geometric sans, standing in for a bespoke display face), tightening at large sizes for a compressed, engineered feel. Color is rationed: green appears only where action is requested, violet only where brand voice is needed, everything else is monochrome. The hero headline uses a violet-to-orange gradient on a single phrase to create one moment of chromatic warmth before the page settles back into its dark security posture.

This document is the single source of truth for visual decisions on havenux.com. Component-level implementation lives in [`styles.css`](styles.css); page structure lives in [`index.html`](index.html) and [`insights.html`](insights.html).

---

## Tokens — Colors

| Name | Value | Token | Role |
|------|-------|-------|------|
| Midnight Plum | `#1c1624` | `--color-midnight-plum` | Page canvas, primary dark surface — the near-black with a violet undertone that gives the UI its cool, secure temperature |
| Shadow Plum | `#2d2734` | `--color-shadow-plum` | Elevated card surface, product cards, service cards — one step lighter than canvas to suggest depth without a shadow |
| Elevated Panel | `#3a3340` | `--color-elevated-panel` | Modals, popovers, nested containers — one step above card surface |
| Bone White | `#f1f0ec` | `--color-bone-white` | Primary text, icon strokes, button labels on dark — warm off-white avoids the sterile feel of pure white against violet-black |
| Fog Line | `#e5e7eb` | `--color-fog-line` | Hairline borders, dividers, card outlines — used at 8–15% opacity, the most-used neutral in the system |
| Ash Veil | `#d0c9c4` | `--color-ash-veil` | Muted secondary text, card body copy — sits between white and mid-gray for tertiary hierarchy |
| Mid Ash | `#a5a2a5` | `--color-mid-ash` | Muted helper text, placeholder copy, metadata (stats labels, domain strings) — low-priority text that recedes |
| Iron Edge | `#55505b` | `--color-iron-edge` | Subtle dividers, ghost button borders in resting state — barely visible structural lines |
| Lavender Spark | `#b997ff` | `--color-lavender-spark` | Violet brand accent: eyebrow labels, gradient highlights, hover states, product-card icon tint |
| Signal Green | `#00f575` | `--color-signal-green` | The single primary-action color — "Get a Demo" button, checkmarks, positive stats. Rationed to 1–2 uses per viewport |
| Neon Violet | `#6b13f5` | `--color-neon-violet` | Radial gradient anchor in hero and CTA-band background glows |
| Ember Orange | `#ff5632` | `--color-ember-orange` | Terminal color in the violet-to-orange gradient text; also used for the "Why Havenux" icon accent to introduce a third, sparing color note |
| Plasma Pink | `#ff9efa` | `--color-plasma-pink` | Radial gradient origin point behind the hero visual |

## Tokens — Typography

**Font:** Inter (loaded via Google Fonts), used as the substitute for a custom geometric sans across the entire system — captions through display headlines. Weight 450 is the default body/UI weight; 500 for headings; 700 only for the hero display headline.

| Role | Size | Line Height | Letter Spacing |
|------|------|-------------|-----------------|
| caption | 12px | 1.5 | 0.03em |
| body-sm | 14px | 1.5 | normal |
| body | 16px | 1.5 | normal |
| subheading | 18px | 1.4 | -0.18px |
| heading-sm | 24px | 1.2 | -0.24px |
| heading | 32px | 1.15 | -0.32px |
| heading-lg | 48px | 1.05 | -0.96px |
| display | 64–72px | 1.05–1.08 | -0.02em |

## Tokens — Spacing & Shapes

**Base unit:** 8px · **Density:** comfortable

| Name | Value |
|------|-------|
| `--s-8` | 8px |
| `--s-16` | 16px |
| `--s-24` | 24px |
| `--s-32` | 32px |
| `--s-40` | 40px |
| `--s-56` | 56px |
| `--s-80` | 80px |
| `--s-120` | 120px |

### Border Radius

| Element | Value |
|---------|-------|
| Cards | 20px |
| Buttons | 12px |
| Small elements (badges, icon tiles) | 8px |
| Pills | 9999px |

### Layout

- **Page max-width:** 1200px
- **Section padding:** 80px vertical on mobile, 120px on desktop (`--s-80` / `--s-120`)
- **Card padding:** 32px
- **Grid gaps:** 20px between cards

---

## Components

### Primary Action Button (`.btn-primary`)
Filled `#00f575` with black text, 12px radius, right-arrow icon. Used for "Get a Demo" — the single conversion moment repeated in the header, hero, and CTA band. Never more than one filled-green button visible per viewport section.

### Ghost Button (`.btn-ghost`)
Transparent background, 1px `#55505b` border, `#f1f0ec` text. Used for "Sign In", "View Products", "Contact Sales" — secondary actions that sit next to the green CTA without competing.

### Glass Header (`.site-header`)
Sticky, `#1c1624` at 80% opacity with 12px backdrop blur, 1px bottom border at 10% opacity. Contains the Havenux logo mark (left), nav links (center), and CTA cluster (right: ghost Sign In + green Get a Demo). Collapses to a full-screen mobile drawer under 1024px.

### Product Screenshot Frame (`.mock-frame`)
A CSS/SVG-built dashboard mockup (no real product screenshots exist yet) standing in for the hero visual — a dark card surface with a KYC checklist panel and a live market chart, using the same violet/green palette as the marketing site for visual continuity. `box-shadow: 0 0 60px rgba(185, 151, 255, 0.15)` for the ambient glow.

### Product Card (`.product-card`)
Background `#2d2734`, 1px `#e5e7eb`-at-14%-opacity border, 20px radius, 32px padding. Icon tile (lavender or green tint) → category tag → heading → body copy → domain link with arrow. Used for the four Havenux products (BRMS, CKYC, SAS, SMS).

### Why-Havenux Card (`.why-card`)
Wider two-column internal layout (icon + text side by side) for value-proposition statements in the mid-page trust section.

### Service Card (`.service-card`)
Numbered (01–04) cards on the darker canvas background (nested inside the `#2d2734` services section for a surface-within-surface effect), each listing 3 sub-capabilities with a lavender checkmark. Four services in a 2-column grid: Custom Software Development, Mobile App Development, Website Design, and AI Application Development.

### Contact Card & Form (`.contact-info` / `.contact-form`)
Two-column layout (0.85fr / 1.15fr) mirroring the card-surface language. The left card lists direct contact methods (`.contact-method`) — WhatsApp and email — each a full-width row with a green icon tile, label, and value, hover-highlighted in green to signal "this is clickable and free." The right card is a form (name, phone/email, product-interest select, message) whose submit button reads "Send via WhatsApp": on submit, JS builds a `wa.me`/`api.whatsapp.com` deep link from the field values and opens it in a new tab — no backend, no data leaves the browser except through WhatsApp itself. A `.form-note` under the button makes that mechanism explicit to the visitor.

### Blog Card (`.blog-card`)
Used on the Insights page. Same surface/radius/border language as product cards, with a pill-shaped category tag (`.blog-tag`, lavender-on-lavender-10%) above the headline, an excerpt, and a `.blog-meta` footer row (status · read time) separated by a hairline border.

### Gradient Highlighted Text (`.gradient-text`)
`linear-gradient(91deg, #855aff 14.92%, #ff5632 90.53%)` clipped to text. Applied to one phrase per headline (hero and CTA band) — the only two moments of full chromatic warmth on the page.

### CTA Band (`.cta-band`)
Full-width rounded card with a radial violet glow (`#6b13f5`) behind centered headline, body copy, and a button pair. Closes the page before the footer.

### Top Banner (`.top-banner`)
Dismissible announcement strip above the header, `#241c2c`, centered text with an inline green link.

### Glass/Ghost pairing rule
Every section that offers an action pairs exactly one ghost button with at most one green button — never two green buttons side by side.

---

## Do's and Don'ts

### Do
- Use `#00f575` only for the single most important action per viewport — it is rationed, not decorative
- Apply 20px radius to all card surfaces, 12px to buttons, 8px to small inline elements
- Use `#b997ff` for brand voice: eyebrow labels, hover accents, product-card icon tints — never for large fills or body text
- Separate surfaces with `#e5e7eb` at 8–15% opacity borders, not box-shadows or color fills
- Keep the hero product mockup at or above 45% viewport width on desktop
- Use weight 450 as the default body/UI weight, 500 for headings, 700 only for the display headline

### Don't
- Don't add more than one filled green button per viewport
- Don't use `#b997ff` or `#00f575` as large background fills
- Don't introduce drop shadows on cards — use surface color steps (`#1c1624` → `#2d2734` → `#3a3340`) instead
- Don't use pure white (`#ffffff`) for text — always the warm `#f1f0ec`
- Don't break the single-font rule
- Don't add photography, lifestyle imagery, or decorative illustration — product mockups, icons, and typography carry the whole visual system

---

## Surfaces

| Level | Name | Value | Purpose |
|-------|------|-------|---------|
| 0 | Canvas | `#1c1624` | Page background, hero field, footer |
| 1 | Card Surface | `#2d2734` | Product cards, service cards, mockup frame, CTA band |
| 2 | Elevated Panel | `#3a3340` | Modals, popovers (reserved for future product UI, not used on the marketing page yet) |

## Imagery

No photography or stock illustration. The only visual content is: the Havenux logo mark (a stylized hexagonal "vault" shape with a green core), inline SVG icons (outline style, 1.8px stroke, no filled icon packs, no emoji), and one CSS/SVG-built product mockup in the hero. Background atmosphere comes from soft radial gradients (violet → pink → dark) behind the hero and CTA band. A shorter hero variant (`.hero--compact`, used on the Insights page) scales the glow down to `560px` so its radial fade completes inside the shorter section — the full-size `900px` glow is reserved for hero sections tall enough to contain it.

## Pages

- **`index.html`** — the main landing page: hero, products, why-Havenux, services (including AI applications), contact.
- **`insights.html`** — the blog index. Same header/footer and design tokens; a compact hero, then a 3-column `.blog-grid` of post-preview cards. Nav links from this page point back to `index.html#section` anchors; only "Insights" points to itself.

## Content Contacts

- **Email:** `contact@havenux.com`
- **WhatsApp:** `+977 9714234414` (matches the number already live on market.havenux.com) — used for the header/hero/CTA "Get a Demo" links, the contact-card WhatsApp row, and the contact form's submit action.
- **Social:** Facebook, LinkedIn, X, Instagram, TikTok only (footer `.footer-social`) — currently placeholder `#` hrefs pending real profile URLs.

## Accessibility Notes

- All interactive targets are at least 44×44px (buttons, nav toggle, banner close)
- Visible focus rings (`2px solid #b997ff`, 2px offset) on every focusable element — never removed
- Green-on-black (`#00f575` / `#000`) and bone-white-on-midnight (`#f1f0ec` / `#1c1624`) both exceed 4.5:1 contrast
- `prefers-reduced-motion` disables scroll-reveal animation and smooth-scroll entirely
- Mobile nav traps focus visually via full-screen overlay and closes on `Escape`
- Semantic landmarks (`header`, `nav`, `main`, `footer`) and a skip-to-content link precede the header

## Similar Brands

- **Linear** — dark-mode product-UI-as-hero, geometric sans with tight tracking, purple-tinted canvas with a single action accent
- **Vercel** — rationed color usage, geometric sans at all sizes, minimal decoration
- **Railway** — dark purple-tinted canvas, single vivid accent for primary action, 20px card radii
