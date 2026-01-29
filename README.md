# Wild And Wonderful Wellness website
https://www.wildandwonderfulwellness.com

A modern, production-ready starter template for building fast, content-driven websites with Astro 5, Tailwind CSS v4, and Sanity CMS.

## Features

- **Astro 5** - Modern static site generator with server-side rendering
- **Tailwind CSS v4** - Utility-first CSS framework with CSS-based configuration
- **Sanity CMS** - Structured content management with preview mode
- **Starwind UI** - Custom accessible component library (Button, Accordion, Tabs, Dropdown)
- **TypeScript** - Full type safety with strict mode
- **SEO Optimized** - Sitemap generation, meta tags, favicons
- **Dark Mode** - Built-in theme toggle
- **Page Builder** - Flexible content blocks for dynamic layouts
- **Netlify Ready** - Configured for SSR deployment

## Quick Start

### Prerequisites

- Node.js 18+
- npm or pnpm
- Sanity account ([sign up free](https://www.sanity.io/))

### Installation

1. **Clone or use this template:**
```bash
git clone <your-repo-url>
cd astro-tw-sanity
```

2. **Install dependencies:**
```bash
npm install
```

3. **Set up environment variables:**
```bash
cp .env.example .env
```

4. **Update `.env` with your Sanity credentials:**
   - Get your Project ID and Dataset from [sanity.io/manage](https://www.sanity.io/manage)
   - Create a read token for preview mode (optional)

5. **Update `astro.config.mjs` with your Sanity project details** (lines 21-26):
```javascript
sanity({
  projectId: 'your-project-id',
  dataset: 'production',
  apiVersion: '2025-03-23',
  useCdn: false,
  studioUrl: '/studio'
})
```

6. **Start the development server:**
```bash
npm run dev
```

7. **Visit** `http://localhost:4321`

## Project Structure

```
/
├── src/
│   ├── components/
│   │   ├── config/          # Configuration files (navigation, etc.)
│   │   ├── elements/        # Organized UI components
│   │   │   ├── navigation/  # Header, NavBar, Logo
│   │   │   ├── content/     # Content display components
│   │   │   ├── media/       # Video, carousel, images
│   │   │   ├── interactive/ # Forms, theme toggle, preview banner
│   │   │   └── page-builder/# Dynamic page builder blocks
│   │   ├── layout/          # Layout wrappers (Header, Footer, Container)
│   │   └── starwind/        # Starwind UI component library
│   ├── layouts/
│   │   └── Layout.astro     # Base layout with SEO
│   ├── pages/
│   │   ├── index.astro      # Homepage
│   │   ├── [...slug].astro  # Dynamic routes from Sanity
│   │   ├── style-guide.astro # Component showcase (demo - see below)
│   │   ├── preview-test.astro # Preview mode tester (demo - see below)
│   │   └── api/             # Preview mode API endpoints
│   ├── sanity/
│   │   ├── lib/             # Sanity utilities
│   │   └── schemaTypes/     # Content type definitions
│   └── styles/
│       └── global.css       # Tailwind v4 config + custom styles
├── studio/                   # Sanity Studio (optional)
├── astro.config.mjs
├── package.json
└── .env.example
```

## Customization Guide

### 1. Update Site Branding

**Logo:**
- Edit `/src/components/elements/navigation/Logo.astro`
- Replace the SVG placeholder with your logo

**Navigation:**
- Edit `/src/components/config/navigation.ts`
- Update `navigationConfig` array with your menu items:
```typescript
export const navigationConfig: NavigationItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Contact', href: '/contact' },
];
```

**Footer:**
- Edit `/src/components/config/navigation.ts`
- Update `footerConfig` object:
```typescript
export const footerConfig = {
  showCopyright: true,
  showCredit: true,
  creditText: 'Site by Your Company',
  creditUrl: 'https://yourcompany.com',
};
```

### 2. Configure Tailwind Theme

Edit `/src/styles/global.css` to customize colors, fonts, and design tokens:

```css
:root {
  --primary: 217 19% 38%;
  --primary-foreground: 0 0% 98%;
  /* Update other color variables */
}
```

### 3. Set Up Sanity Content

1. Navigate to your Sanity Studio (if embedded: `/studio`)
2. Create content using the schemas in `/src/sanity/schemaTypes/`
3. Available content types:
   - `home` - Homepage content
   - `generic` - Generic pages with Page Builder
   - `post` - Blog posts
   - `category` - Post categories
   - `author` - Post authors

### 4. Preview Mode Setup

For content preview functionality:

1. Add `SANITY_API_READ_TOKEN` to `.env`
2. Set `PUBLIC_SANITY_VISUAL_EDITING_ENABLED=true`
3. Use `/api/preview?secret=YOUR_SECRET&slug=/page-path` to enable
4. Use `/api/exit-preview` to disable

See `SANITY_PREVIEW_SETUP.md` for detailed instructions.

## Demo Pages

⚠️ **Important:** This boilerplate includes demo pages for development reference.

### `/style-guide`
- **Purpose:** Comprehensive component showcase with all Starwind UI components
- **Size:** 632 lines of demo content
- **Features:** Live examples of buttons, colors, forms, typography
- **Action:** Delete or restrict access before production deployment

### `/preview-test`
- **Purpose:** Sanity preview mode testing and diagnostics
- **Size:** 98 lines
- **Features:** Preview status indicator, cookie inspection, debugging tools
- **Action:** Delete or restrict access before production deployment

**To remove demo pages:**
```bash
rm src/pages/style-guide.astro
rm src/pages/preview-test.astro
```

See `DEMO_PAGES.md` for more details.

## Available Scripts

| Command              | Description                          |
| -------------------- | ------------------------------------ |
| `npm run dev`        | Start dev server at localhost:4321   |
| `npm run build`      | Build for production                 |
| `npm run preview`    | Preview production build             |
| `npm run format`     | Format code with Prettier            |
| `npm run format:check` | Check code formatting              |
| `npm run check`      | Run Astro type checking              |
| `npm run clean`      | Clean build artifacts                |

## Component Library (Starwind UI)

### Button
```astro
---
import { Button } from '@/components/starwind/button'
---

<Button variant="primary" size="md">Click me</Button>
<Button variant="outline" size="sm">Outline</Button>
<Button href="/about" variant="ghost">Link Button</Button>
```

**Variants:** `default`, `primary`, `secondary`, `outline`, `ghost`, `info`, `success`, `warning`, `error`
**Sizes:** `sm`, `md`, `lg`, `icon`

### Accordion
```astro
---
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/starwind/accordion'
---

<Accordion>
  <AccordionItem value="item-1">
    <AccordionTrigger>Section 1</AccordionTrigger>
    <AccordionContent>Content here</AccordionContent>
  </AccordionItem>
</Accordion>
```

### Tabs
```astro
---
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/starwind/tabs'
---

<Tabs defaultValue="tab1">
  <TabsList>
    <TabsTrigger value="tab1">Tab 1</TabsTrigger>
    <TabsTrigger value="tab2">Tab 2</TabsTrigger>
  </TabsList>
  <TabsContent value="tab1">Content 1</TabsContent>
  <TabsContent value="tab2">Content 2</TabsContent>
</Tabs>
```

### Dropdown
```astro
---
import { Dropdown, DropdownTrigger, DropdownContent, DropdownItem } from '@/components/starwind/dropdown'
---

<Dropdown>
  <DropdownTrigger>Open Menu</DropdownTrigger>
  <DropdownContent>
    <DropdownItem href="/link1">Link 1</DropdownItem>
    <DropdownItem href="/link2">Link 2</DropdownItem>
  </DropdownContent>
</Dropdown>
```

## Deployment

### Netlify (Recommended)

1. Push code to Git repository
2. Connect repository to Netlify
3. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
4. Add environment variables in Netlify dashboard
5. Deploy!

### Vercel

1. Install Vercel adapter: `npm install @astrojs/vercel`
2. Update `astro.config.mjs`:
   ```javascript
   import vercel from '@astrojs/vercel/serverless';
   export default defineConfig({
     adapter: vercel()
   });
   ```
3. Deploy via Vercel CLI or Git integration

## Tech Stack

- **Framework:** Astro 5.16+
- **Styling:** Tailwind CSS v4.1+
- **CMS:** Sanity 3.x
- **Language:** TypeScript
- **UI Library:** Custom Starwind components
- **Icons:** Lucide Astro
- **Utilities:** tailwind-variants, tailwind-merge, clsx

## Documentation

- [CLAUDE.md](./CLAUDE.md) - AI-assisted development guide
- [AGENTS.md](./AGENTS.md) - Detailed technology stack documentation
- [DEMO_PAGES.md](./DEMO_PAGES.md) - Demo pages documentation
- [SANITY_PREVIEW_SETUP.md](./SANITY_PREVIEW_SETUP.md) - Preview mode setup
- [CHANGELOG.md](./CHANGELOG.md) - Version history

## Contributing

Contributions welcome! Please open an issue or submit a pull request.

## License

MIT License - feel free to use this template for any project.

## Support

- [Astro Documentation](https://docs.astro.build)
- [Tailwind CSS v4 Docs](https://tailwindcss.com/docs)
- [Sanity Documentation](https://www.sanity.io/docs)

---

**Built with ❤️ using Astro, Tailwind CSS, and Sanity**
