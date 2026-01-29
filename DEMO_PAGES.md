# Demo Pages Documentation

This boilerplate includes two demo pages for development and testing purposes. These pages showcase the component library and help with debugging, but should be removed or restricted before production deployment.

## Included Demo Pages

### 1. Style Guide (`/style-guide`)

**File:** `/src/pages/style-guide.astro`
**Size:** 632 lines
**Purpose:** Comprehensive showcase of all Starwind UI components

#### Features:
- **Live Component Examples** - See all components in action
- **Button Variants** - All button styles and sizes demonstrated
- **Color Tokens** - Visual reference for light/dark mode colors
- **Typography Samples** - Heading and text style examples
- **Accordion Demonstrations** - Interactive accordion examples
- **Tabs Showcase** - Tab component with working examples
- **Dropdown Menus** - Dropdown component demonstrations
- **Form Elements** - Input fields, checkboxes, radio buttons
- **Interactive Theme Switcher** - Toggle between light and dark modes
- **Copy-Paste Ready** - Code examples for each component

#### Use Cases:
- **Design Reference** - Quick visual reference during development
- **QA Testing** - Ensure component consistency across the site
- **Client Presentations** - Show available UI components
- **Developer Documentation** - Learn how to use each component

#### What It Contains:
```
- Color palette visualization (lines 28-104)
- Button component showcase (all variants and sizes)
- Typography examples (headings h1-h6, paragraphs, lists)
- Form elements (inputs, textareas, selects, checkboxes, radios)
- Starwind UI components (Accordion, Tabs, Dropdown)
- Theme toggle demonstration
```

---

### 2. Preview Test (`/preview-test`)

**File:** `/src/pages/preview-test.astro`
**Size:** 98 lines
**Purpose:** Test and verify Sanity preview mode functionality

#### Features:
- **Preview Mode Status** - Shows whether preview mode is currently active
- **Cookie Inspection** - Displays current preview cookie value
- **Enable/Disable Controls** - Quick links to toggle preview mode
- **Visual Debugging** - Clear indicators for preview state
- **API Endpoint Links** - Direct access to preview mode endpoints
- **Troubleshooting Tips** - Helpful debugging information

#### Use Cases:
- **Verify Configuration** - Ensure preview mode is set up correctly
- **Debug Preview Issues** - Diagnose why preview mode isn't working
- **Test Content Editor Workflow** - Validate the content preview experience
- **Development Testing** - Quick access to preview mode controls

#### What It Contains:
```
- Preview mode status indicator (lines 12-27)
- Cookie value display
- Enable preview link with secret
- Disable preview link
- Troubleshooting checklist (lines 85-94)
```

---

## For Production Deployment

⚠️ **Important:** These demo pages should not be accessible in production.

### Option 1: Delete Demo Pages (Recommended)

The simplest approach - remove the files entirely:

```bash
rm src/pages/style-guide.astro
rm src/pages/preview-test.astro
```

**Pros:**
- Cleanest solution
- No risk of exposure
- Reduces bundle size

**Cons:**
- Must recreate if needed later
- Loses reference documentation

---

### Option 2: Restrict Access with Environment Check

Add conditional redirects in each demo page:

```astro
---
// At the top of style-guide.astro and preview-test.astro
if (import.meta.env.PROD) {
  return Astro.redirect('/404');
}
---
```

**Pros:**
- Pages available in development
- Automatic protection in production
- Easy to maintain

**Cons:**
- Files still deployed (minimal size impact)
- Could be bypassed if someone modifies code

---

### Option 3: Password Protection (Netlify)

Use Netlify's password protection feature for specific paths:

1. Create a `_headers` file in `/public`:
```
/style-guide
  Basic-Auth: demo:your-password-here

/preview-test
  Basic-Auth: demo:your-password-here
```

2. Or use Netlify's dashboard to set up password protection

**Pros:**
- Pages remain accessible to authorized users
- Useful for client demos
- Easy to share with team

**Cons:**
- Requires Netlify-specific configuration
- Not portable to other hosts

---

### Option 4: Move to Admin Routes

Reorganize as protected admin pages:

```
src/pages/admin/
├── style-guide.astro
└── preview-test.astro
```

Then add authentication middleware or basic auth.

**Pros:**
- Organized admin section
- Can add more admin tools
- Clear separation from public pages

**Cons:**
- Requires authentication implementation
- More complex setup

---

## Customization

### Customizing Style Guide

If you want to keep and customize the style guide:

1. **Update Color Tokens** (lines 8-12):
```javascript
const lightStyle = 'your-light-mode-css-variables'
const darkStyle = 'your-dark-mode-css-variables'
```

2. **Add Custom Components**:
```astro
<Section>
  <h2>Your Custom Component</h2>
  <YourComponent />
</Section>
```

3. **Modify Typography Samples**:
Update the heading and paragraph examples to match your content style.

4. **Add Design Tokens**:
Include spacing, border-radius, or shadow examples.

### Customizing Preview Test

To add custom preview scenarios:

1. **Add Content Type Tests**:
```astro
<a href="/api/preview?secret={secret}&slug=/your-content-type">
  Test Your Content Type
</a>
```

2. **Add Validation Checks**:
```astro
{previewEnabled && sanityToken ? (
  <p>✅ All preview requirements met</p>
) : (
  <p>❌ Preview configuration incomplete</p>
)}
```

3. **Add Debug Information**:
Display additional cookie or environment variable information.

---

## Related Files

### Component References
- `/src/components/starwind/` - Components showcased in style guide
- `/src/styles/global.css` - Color tokens and theme configuration

### Preview Mode Files
- `/src/pages/api/preview.ts` - Preview mode enable endpoint
- `/src/pages/api/exit-preview.ts` - Preview mode disable endpoint
- `/src/components/elements/interactive/PreviewBanner.astro` - Preview mode banner
- `SANITY_PREVIEW_SETUP.md` - Full preview mode documentation

---

## Best Practices

### Development
- ✅ Use style guide as component reference
- ✅ Test new components in style guide first
- ✅ Use preview test to debug content issues
- ✅ Keep demo pages updated with new components

### Before Deployment
- ⚠️ Review which option works best for your project
- ⚠️ Test that demo pages are not publicly accessible
- ⚠️ Consider keeping style guide for internal use
- ⚠️ Document your choice in project README

### After Deployment
- ✅ Verify demo pages are inaccessible (if removed/restricted)
- ✅ Test preview mode with actual content
- ✅ Monitor for any 404 errors if pages were deleted
- ✅ Update documentation if approach changes

---

## Questions?

If you have questions about demo pages:
- See [README.md](./README.md) for general setup
- See [SANITY_PREVIEW_SETUP.md](./SANITY_PREVIEW_SETUP.md) for preview mode details
- See [AGENTS.md](./AGENTS.md) for component documentation
