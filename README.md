# Amiy Naturals Homepage Clone

A pixel-perfect visual clone of the [Amiy Naturals](https://amiynaturals.com/) homepage built with **React.js** and **Tailwind CSS**. This project replicates the homepage layout, design, and responsiveness of the original site using modern frontend technologies.

---

## Table of Contents

1. [Project Overview](#project-overview)
2. [Tech Stack](#tech-stack)
3. [Folder Structure](#folder-structure)
4. [Component Breakdown](#component-breakdown)
5. [Tailwind CSS Usage](#tailwind-css-usage)
6. [Layout System](#layout-system)
7. [Responsiveness](#responsiveness)
8. [How to Run the Project](#how-to-run-the-project)
9. [Build for Production](#build-for-production)

---

## Project Overview

This project is a **static frontend clone** of the Amiy Naturals homepage. It focuses on replicating:

- The visual layout and design of every section
- Responsive behavior across mobile, tablet, and desktop
- Hover animations and transitions
- Clean, modular, and beginner-friendly code

**Note:** This is a UI-only project. No backend functionality, authentication, or real e-commerce features are included.

---

## Tech Stack

| Technology   | Purpose                          |
| ------------ | -------------------------------- |
| React.js     | UI library (functional components + hooks) |
| Tailwind CSS | Utility-first CSS framework      |
| Vite         | Fast build tool and dev server   |

---

## Folder Structure

```
amiy-clone/
├── index.html                 # HTML entry point with Google Fonts
├── vite.config.js             # Vite configuration with Tailwind plugin
├── package.json               # Project dependencies and scripts
├── public/                    # Static assets
│   └── favicon.svg
├── src/
│   ├── main.jsx               # React entry point - renders App
│   ├── App.jsx                # Root component - renders Home page
│   ├── App.css                # Minimal app-level styles
│   ├── index.css              # Global styles + Tailwind theme config
│   ├── assets/                # Static assets (images, SVGs)
│   ├── components/            # Reusable UI components
│   │   ├── Navbar.jsx         # Navigation bar with sticky behavior
│   │   ├── Hero.jsx           # Full-width hero banner section
│   │   ├── ProductCard.jsx    # Individual product card component
│   │   ├── ProductSection.jsx # "Our Products" section with grid
│   │   ├── TrendingSection.jsx# "Trending" mini products section
│   │   ├── CombosSection.jsx  # "Our Combos" section
│   │   ├── FeaturedOn.jsx     # "Featured On" media logos section
│   │   ├── CategorySection.jsx# "Shop by Concern" categories
│   │   ├── AboutSection.jsx   # Brand story / about section
│   │   ├── Testimonial.jsx    # Customer testimonials slider
│   │   ├── BlogSection.jsx    # Recent blog posts grid
│   │   ├── Newsletter.jsx     # Email newsletter signup
│   │   └── Footer.jsx         # Footer with links and social icons
│   └── pages/
│       └── Home.jsx           # Homepage - assembles all components
```

---

## Component Breakdown

### 1. Navbar (`Navbar.jsx`)

The navigation bar sits at the top of the page with **sticky positioning**.

**Key features:**
- **Announcement bar:** A green banner at the very top showing promotional text
- **Logo:** "Amiy Naturals" displayed using the Playfair Display heading font
- **Navigation links:** Home, Shop, Combos, About, Blog, Contact
- **Icons:** Search, User Account, and Cart with a badge counter
- **Mobile menu:** A hamburger menu that toggles a dropdown on smaller screens
- **Sticky behavior:** Uses `useState` and `useEffect` hooks to detect scroll position and add a shadow when scrolled

**Tailwind classes explained:**
- `sticky top-0 z-50` — Keeps the navbar fixed at the top of the viewport
- `transition-shadow duration-300` — Smooth shadow transition on scroll
- `hidden md:flex` — Hides desktop nav links on mobile, shows on medium screens+
- `max-h-0 opacity-0` / `max-h-96 opacity-100` — Animates mobile menu open/close

### 2. Hero Section (`Hero.jsx`)

A full-width banner that serves as the main visual entry point.

**Key features:**
- Background image with gradient overlay for text readability
- Heading with accent-colored text ("Bio-Neuromodulation")
- Two CTA buttons: "Shop Now" (solid) and "Learn More" (transparent)
- Wave SVG at the bottom for a smooth transition to the next section

**Tailwind classes explained:**
- `h-[60vh] md:h-[85vh]` — Responsive viewport height (60% on mobile, 85% on desktop)
- `bg-cover bg-center bg-no-repeat` — Background image covers the full area
- `bg-gradient-to-r from-black/50 to-black/20` — Semi-transparent gradient overlay
- `hover:-translate-y-0.5` — Subtle lift animation on button hover
- `backdrop-blur-sm` — Glassmorphism effect on the "Learn More" button

### 3. Product Card (`ProductCard.jsx`)

A reusable card component used in both "Our Products" and "Our Combos" sections.

**Key features:**
- Product image with hover zoom effect
- Badge display (e.g., "Bestseller", "New")
- Discount percentage calculation
- Star rating display
- Quick View overlay on hover
- "Add to Bag" button

**Tailwind classes explained:**
- `group` — Enables group-hover effects on child elements
- `group-hover:scale-105` — Image zoom on card hover
- `line-clamp-1` / `line-clamp-2` — Truncates text to 1 or 2 lines
- `translate-y-4 group-hover:translate-y-0` — Slide-up animation for Quick View button
- `aspect-square` — Maintains 1:1 aspect ratio for the image container

### 4. Product Section (`ProductSection.jsx`)

Displays the main product lineup in a responsive grid.

**Key features:**
- Section heading with decorative underline
- "View All" link with arrow icon
- 5-column grid on desktop, 2-column on mobile

**Tailwind classes explained:**
- `grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5` — Responsive grid: 2 cols -> 3 cols -> 5 cols
- `gap-4 md:gap-6` — Responsive spacing between cards

### 5. Trending Section (`TrendingSection.jsx`)

Showcases mini/trial-size products with an overlay card design.

**Key features:**
- Cards with full-bleed images
- Gradient overlay at the bottom with product name, price, and "Shop Now" link
- Cream-colored background section

**Tailwind classes explained:**
- `bg-bg-cream` — Uses custom cream background color from theme
- `bg-gradient-to-t from-black/70 to-transparent` — Bottom-up gradient for text readability
- `aspect-square` — Square image containers

### 6. Combos Section (`CombosSection.jsx`)

Displays combo product packs using the same `ProductCard` component.

**Key features:**
- 3-column grid layout on desktop
- Reuses ProductCard for consistent design
- Descriptive subtitle

### 7. Featured On (`FeaturedOn.jsx`)

A press/media section showing publication logos.

**Key features:**
- Abbreviation-style logo cards
- Light green background
- Hover lift animation

**Tailwind classes explained:**
- `bg-primary-light` — Light green background from theme
- `flex flex-wrap items-center justify-center` — Centered, wrapping layout
- `group-hover:-translate-y-0.5` — Subtle lift on hover

### 8. Shop by Concern (`CategorySection.jsx`)

Category cards that help users find products by health concern.

**Key features:**
- 5-column image grid with overlay text
- Emoji icons for each category
- "Build My Regimen" CTA card at the bottom

**Tailwind classes explained:**
- `aspect-[3/4]` — 3:4 aspect ratio for tall cards
- `bg-gradient-to-t from-black/70 via-black/20 to-transparent` — Multi-stop gradient
- `group-hover:scale-110` — Zoom effect on hover

### 9. About Section (`AboutSection.jsx`)

Brand story section with image and text side-by-side.

**Key features:**
- Two-column layout (image + text)
- Decorative background shapes
- Feature highlight badges (100% Natural, Lab Tested, etc.)
- "Learn More About Us" CTA button

**Tailwind classes explained:**
- `grid md:grid-cols-2 gap-8 md:gap-16 items-center` — Side-by-side layout
- `-z-10` — Places decorative elements behind the image
- `tracking-[0.15em]` — Custom letter spacing for the subtitle

### 10. Testimonials (`Testimonial.jsx`)

A slider/carousel showing customer reviews.

**Key features:**
- Previous/Next arrow navigation
- Star rating display
- Customer avatar (initials), name, location, and product used
- Dot navigation for direct slide access
- Active dot becomes an elongated pill shape

**Tailwind classes explained:**
- `w-2.5 h-2.5 rounded-full` / `w-8` — Dot indicator changes width when active
- `-translate-x-12` — Positions arrows outside the card
- `italic` — Styled quote text

### 11. Blog Section (`BlogSection.jsx`)

Displays recent blog posts in a card grid.

**Key features:**
- 4-column grid on desktop
- Image with hover zoom
- Date, title, and excerpt
- Title changes color on hover

**Tailwind classes explained:**
- `aspect-[4/3]` — 4:3 aspect ratio for blog images
- `group-hover:text-primary` — Title color change on card hover

### 12. Newsletter (`Newsletter.jsx`)

Email signup section with a form.

**Key features:**
- Full-width green background
- Email input with rounded design
- Subscribe button with accent gold color
- Privacy notice text

**Tailwind classes explained:**
- `bg-primary` — Full green background
- `flex flex-col sm:flex-row` — Stacks vertically on mobile, horizontal on tablet+
- `focus:ring-2 focus:ring-accent` — Gold focus ring on the input

### 13. Footer (`Footer.jsx`)

Comprehensive footer with multiple link columns and social icons.

**Key features:**
- 6-column link grid (Products, Combos, Mini Products, About, Help, Policy)
- Social media icons (Facebook, Instagram, Pinterest, YouTube)
- Copyright bar at the bottom

**Tailwind classes explained:**
- `grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6` — Responsive column layout
- `bg-text-dark` — Dark background using theme color
- `text-white/60` — Semi-transparent white text for secondary links
- `hover:text-accent` — Gold color on link hover

---

## Tailwind CSS Usage

This project uses **Tailwind CSS v4** with the Vite plugin integration. The theme is configured in `src/index.css` using the `@theme` directive:

```css
@theme {
  --color-primary: #2d6b4f;      /* Brand green */
  --color-accent: #c8a96e;       /* Gold accent */
  --color-bg-cream: #faf7f2;     /* Light cream background */
  --color-text-dark: #2c2c2c;    /* Dark text */
  --color-text-gray: #6b6b6b;    /* Secondary text */
  --font-heading: 'Playfair Display', serif;  /* Heading font */
  --font-body: 'Poppins', sans-serif;         /* Body font */
}
```

These custom colors and fonts are used throughout as Tailwind utility classes like `bg-primary`, `text-accent`, `font-heading`, etc.

---

## Layout System

The layout is built using a combination of **Flexbox** and **CSS Grid**:

### Flexbox Usage
- **Navbar:** `flex items-center justify-between` for horizontal alignment
- **Hero CTA buttons:** `flex flex-col sm:flex-row gap-4` for responsive button layout
- **Footer bottom bar:** `flex flex-col md:flex-row items-center justify-between`

### Grid Usage
- **Product grids:** `grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5` for responsive product layouts
- **Category grid:** `grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5` for concern categories
- **Blog grid:** `grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4` for blog posts
- **Footer columns:** `grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6` for link sections

### Spacing
- Sections use `py-12 md:py-20` for vertical padding (48px mobile, 80px desktop)
- Content is constrained with `max-w-7xl mx-auto px-4 md:px-8`
- Card gaps use `gap-4 md:gap-6` for responsive spacing

---

## Responsiveness

The design is fully responsive across three breakpoints:

| Breakpoint | Screen Width | Key Changes |
|-----------|-------------|-------------|
| Mobile    | < 768px     | Single/two-column grids, hamburger menu, stacked layouts |
| Tablet    | 768px - 1024px | 3-column grids, expanded navigation starts showing |
| Desktop   | > 1024px    | Full 5-6 column grids, side-by-side layouts, all nav visible |

**Responsive techniques used:**
- `md:` and `lg:` prefixes for breakpoint-specific styles
- `hidden md:block` / `md:hidden` for showing/hiding elements
- Responsive text sizes: `text-sm md:text-base lg:text-lg`
- Responsive padding: `px-4 md:px-8`, `py-12 md:py-20`
- Responsive grid columns: `grid-cols-2 md:grid-cols-3 lg:grid-cols-5`

---

## How to Run the Project

### Prerequisites
- Node.js (v18 or higher recommended)
- npm (comes with Node.js)

### Steps

1. **Clone the repository:**
   ```bash
   git clone https://github.com/DevMohit7049/amiy-clone.git
   cd amiy-clone
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open in browser:**
   Visit `http://localhost:5173` in your browser.

---

## Build for Production

To create an optimized production build:

```bash
npm run build
```

The output will be in the `dist/` folder. Preview the production build with:

```bash
npm run preview
```

---

## Key Design Decisions

1. **Tailwind v4 with Vite plugin** — Uses the modern `@tailwindcss/vite` plugin instead of the older PostCSS setup, providing faster builds and better DX.

2. **Custom theme via `@theme`** — All brand colors, fonts, and design tokens are defined in one place (`index.css`), making them available as Tailwind utilities throughout the project.

3. **Placeholder images** — Uses Unsplash images as placeholders to match the layout and feel of the original site. These can be replaced with actual product images.

4. **Functional components with hooks** — All components use React functional components. `useState` is used for interactive elements (mobile menu, testimonial slider, newsletter form) and `useEffect` for scroll detection.

5. **Component reusability** — `ProductCard` is used by both the Products and Combos sections, demonstrating component reuse.

---

## License

This project is for educational purposes only. All product names, descriptions, and branding belong to [Amiy Naturals](https://amiynaturals.com/).
