# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] - 2026-01-09

### Added

- **Navigation Configuration System** - Config-based navigation in `src/components/config/navigation.ts`
- **Component Organization** - Logical subdirectories for better structure:
  - `elements/navigation/` - Header, NavBar, Logo
  - `elements/content/` - Content display components
  - `elements/media/` - Media components
  - `elements/interactive/` - Interactive components
  - `elements/page-builder/` - Page builder blocks
  - `config/` - Configuration files
- **Sanity Queries File** - Created `src/sanity/lib/queries.ts` to centralize all page queries
- **Logo Component** - Added `src/components/elements/navigation/Logo.astro` with placeholder SVG
- **Package.json Scripts** - New helpful scripts:
  - `npm run format` - Format code with Prettier
  - `npm run format:check` - Check code formatting
  - `npm run check` - Run Astro type checking
  - `npm run clean` - Clean build artifacts
- **Comprehensive Documentation**:
  - `README.md` - Complete setup and usage guide
  - `DEMO_PAGES.md` - Demo pages documentation
  - `CHANGELOG.md` - Version history (this file)
- **.gitignore Improvements** - Added patterns for IDE files, OS files, and nested .DS_Store
- **Package Metadata** - Description, keywords, and license fields

### Changed

- **Component Structure** - Reorganized 17 components into logical subdirectories
- **Navigation System** - Replaced hardcoded `navItems.js` with flexible config-based system
- **Footer Configuration** - Removed hardcoded "mindmerge" branding, now uses `footerConfig`
- **Icon Library** - Switched from @tabler/icons to lucide-astro for consistency
- **Package Name** - Changed from "astrosite" to "astro-tailwind-sanity-starter"
- **Version** - Bumped from 0.0.2 to 1.0.0
- **Tailwind Config** - Fixed `components.json` to reference correct CSS file path
- **.env.example** - Improved documentation and placeholder values
- **Sanity Utils Refactor** - Moved page queries from `utils.ts` to dedicated `queries.ts` file for better organization

### Removed

- **Unused Dependencies** (7 packages, ~500KB+ saved):
  - `@astro-community/astro-embed-utils` - Not used
  - `@types/react` - No React components exist
  - `@types/react-dom` - No React components exist
  - `@tabler/icons` - Replaced with lucide-astro
  - `class-variance-authority` - Not used (project uses tailwind-variants)
  - `tw-animate-css` - Not used (project uses tailwindcss-animate)
  - `astro-meta-tags` - Not functional in current setup
- **Duplicate Components** - Removed old `Accordion.astro` (kept Starwind version)
- **Hardcoded Navigation** - Deleted `navItems.js` file
- **Hardcoded Branding** - Removed "mindmerge" footer credit link
- **Debug Code** - Removed `console.log` statements from Dropdown component
- **System Files** - Removed all .DS_Store files from repository

### Fixed

- **Import Paths** - Updated 20+ component imports to reflect new directory structure
- **Build Errors** - Resolved all missing import errors in PageBuilder components
- **Configuration Files**:
  - Fixed `components.json` Tailwind config path
  - Fixed `astro.config.mjs` by removing unused metaTags integration
  - Fixed `.env.example` with clearer placeholders
- **TypeScript** - All type errors resolved

### Security

- **.env.example** - Ensured no real credentials in example file
- **Footer** - Removed hardcoded external links
- **.gitignore** - Improved to prevent committing sensitive files

## [0.0.2] - Previous

Initial boilerplate with Astro 5, Tailwind CSS v4, and Sanity CMS.

### Features

- Astro 5 with SSR
- Tailwind CSS v4 (CSS-based configuration)
- Sanity CMS integration with preview mode
- Starwind UI component library
- TypeScript strict mode
- Dark mode support
- SEO optimization
- Netlify adapter

---

## Migration Guide (0.0.2 → 1.0.0)

If upgrading from version 0.0.2, follow these steps:

### 1. Update Dependencies

```bash
npm install
```

### 2. Update Navigation

Replace hardcoded navigation with config:

- Create `/src/components/config/navigation.ts` with your navigation items
- Update any custom navigation code to import from the config file

### 3. Update Component Imports

If you have custom pages or components:

- Update imports from `@/components/elements/X` to `@/components/elements/category/X`
- Example: `@/components/elements/Logo` → `@/components/elements/navigation/Logo`

### 4. Update Footer

- Remove any hardcoded footer credits
- Configure footer in `/src/components/config/navigation.ts`

### 5. Update Environment Variables

- Review `.env.example` for new variable formats
- Update your `.env` file accordingly

### 6. Review Demo Pages

- Decide whether to keep or remove `style-guide.astro` and `preview-test.astro`
- See `DEMO_PAGES.md` for options

---

## Upgrade Path

### From 0.0.2 to 1.0.0

**Compatibility:** Breaking changes in component structure
**Effort:** Medium (2-3 hours for customized projects)
**Benefits:**

- Better organization
- Smaller bundle size (~500KB reduction)
- Improved maintainability
- Config-based navigation

### Recommended Steps:

1. Backup your project
2. Create a new branch for the upgrade
3. Follow migration guide above
4. Test thoroughly
5. Merge when ready

---

## Support

For questions or issues:

- Review documentation files (README.md, AGENTS.md, DEMO_PAGES.md)
- Check [Astro documentation](https://docs.astro.build)
- Open an issue in the repository

---

**Note:** This changelog follows [Keep a Changelog](https://keepachangelog.com/) principles. Each version documents:

- **Added** - New features
- **Changed** - Changes to existing functionality
- **Deprecated** - Soon-to-be removed features
- **Removed** - Removed features
- **Fixed** - Bug fixes
- **Security** - Security improvements
