# Adrika Marketing - Angular

Full conversion of the Adrika Marketing Launchpad from React/Vite to Angular 19. All styles, fonts, and functionality have been preserved.

## Tech Stack

- **Angular 19** (latest)
- **Tailwind CSS 3** with same configuration as original
- **Lucide Angular** for icons
- **Angular Router** for navigation
- **Angular Animations** for page transitions

## Development

```bash
npm install
npm start
```

Open http://localhost:4200

## Build

```bash
npm run build
```

## Project Structure

- `src/app/components/` - Layout (Navbar, Footer, HeroBanner), UI components
- `src/app/pages/` - Index, About Us, Services, Our Work, Contact Us, NotFound
- `src/app/services/` - Toast service
- `src/lib/` - Utility functions (cn)
- `src/styles.css` - Global styles, Tailwind, CSS variables (Montserrat, Open Sans fonts)

## Routes

- `/` - Home
- `/about-us` - About Us
- `/services` - Services
- `/our-work` - Our Work
- `/contact-us` - Contact Us
- `*` - 404 Not Found

## Preserved from Original

- All CSS variables (colors, radii, etc.)
- Montserrat (headings) and Open Sans (body) fonts
- Dark theme styling
- All page content and layout
- Toast notifications on contact form submit
- Marquee animation for client logos
- Hero slider with 4 slides
- Filterable portfolio/work sections
