# K Club Residencia

**Luxury Kosher beachfront villa — Buenaventura Resort, Riviera Pacífica, Panamá**

> 🌐 Live site: [tommyhanono.github.io/k-club](https://tommyhanono.github.io/k-club/)

---

## About the Property

K Club Residencia is a 100% Kosher-certified, 2-level beachfront villa (~1,060 m²) within Buenaventura Resort — Panama's most exclusive private beach and golf community on the Pacific Riviera.

**Key features:**
- 1,060 m² across 2 levels (643 m² ground + 217 m² upper)
- Infinity pool with direct Pacific Ocean views
- Full Glatt Kosher-certified kitchen
- Private beach access + Buenaventura marina
- Access to 18-hole championship golf, equestrian center, beach clubs
- 1 hr from Panama City (PTY) — ~4 hrs from New York (JFK direct)

**Contact:**
- WhatsApp: [+507 66818669](https://wa.me/50766818669)
- Email: tommyhanono@gmail.com

---

## Website

Built with **React + Vite**, deployed to **GitHub Pages** via GitHub Actions.

### Sections

| Section | Description |
|---|---|
| **Hero** | Fullscreen drone video, title, and CTAs |
| **The Villa** | Interactive floor plans (SVG) + 6-image gallery with lightbox |
| **Kosher Luxury Services** | 4 service pillars + nautical gallery + Kosher callout |
| **Experience** | Philosophy quotes + 4-photo mosaic |
| **Location** | Google Maps embed + travel times |
| **Pricing & Booking** | 4-season rate table + inquiry form → WhatsApp |
| **Footer** | Navigation + contact + Kosher badge |

### Design System

| Token | Value | Usage |
|---|---|---|
| `--navy` | `#1a2744` | Primary dark |
| `--gold` | `#c9a84c` | Accents, borders |
| `--sand` | `#f7f3ec` | Section backgrounds |
| `--serif` | Cormorant Garamond | Headings, quotes |
| `--sans` | Inter | Body, labels |

---

## Tech Stack

- **Framework:** React 19 + Vite 8
- **Styles:** CSS Modules (per-component `.css` files, no Tailwind)
- **Deployment:** GitHub Actions → GitHub Pages
- **Assets:** Buenaventura resort photography, drone footage, marina photography

---

## Pricing Structure

| Season | Nightly | Weekly |
|---|---|---|
| Holiday Peak (Passover, Dec 24–Jan 5, Sukkot) | USD 5,500 | USD 34,000 |
| High Season (July–Aug, Spring Break) | USD 3,800 | USD 24,000 |
| Mid Season (March–June, Oct–Nov) | USD 2,800 | USD 17,000 |
| Low Season (Jan–Feb, September) | USD 2,200 | USD 13,500 |

Pricing benchmarked against comparable Caribbean luxury villa market. See [`MARKET-RESEARCH.md`](./MARKET-RESEARCH.md) for full analysis.

---

## Local Development

> **Note:** `npm` in this repo requires the full node path on this machine.

```bash
# Install dependencies
/Users/tommyhanono/nodejs/bin/node /Users/tommyhanono/nodejs/lib/node_modules/npm/bin/npm-cli.js install

# Dev server (http://localhost:5173)
/Users/tommyhanono/nodejs/bin/node node_modules/.bin/vite

# Production build
/Users/tommyhanono/nodejs/bin/node node_modules/.bin/vite build
```

---

## Deployment

Deploys automatically on push to `main` via `.github/workflows/deploy.yml`:

1. `actions/checkout@v4`
2. `actions/setup-node@v4` (Node 20)
3. `npm install && npm run build`
4. `actions/upload-pages-artifact@v3` → `actions/deploy-pages@v4`

The Vite config sets `base: '/k-club/'` for correct GitHub Pages asset paths.

---

## Assets

All assets in `public/assets/`:

| File | Description |
|---|---|
| `hero-video.mp4` | Drone footage (13 MB) |
| `bv-1.jpg` – `bv-38.jpg` | Buenaventura villa photography |
| `actual-marina.jpg` | Buenaventura marina at night |
| `boat-bar-design-land.jpg` | Nautical lounge concept |
| `boat-tub-design-land.jpg` | Yacht spa concept |

---

## Market Research

See [`MARKET-RESEARCH.md`](./MARKET-RESEARCH.md) for:
- Pricing benchmarks vs comparable Caribbean luxury villas (T&C 5BR: $5,300–$14,300/night, 2.7× peak multiplier)
- NY Kosher luxury travel market analysis
- Target audience profile (Modern Orthodox, NY metro, HHI $500K+)
- Ad copy angles and channel strategy
- Competitive landscape (ANI Private Resorts, Passover Oasis, Beach Enclave T&C)

---

## 🔗 Links

- **Live site:** https://tommyhanono.github.io/k-club/
- **GitHub repo:** https://github.com/tommyhanono/k-club
- **WhatsApp booking:** https://wa.me/50766818669
