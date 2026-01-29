# Sanity Preview Mode Setup Guide

This guide explains how to set up and use Sanity preview mode to view draft content before publishing.

---

## Overview

Preview mode allows you to view unpublished draft content from Sanity CMS on your live site before making it public. This is useful for:

- Reviewing content changes before publishing
- Sharing draft content with stakeholders
- Testing content layout and formatting
- Quality assurance workflows

---

## Setup Instructions

### 1. Create Environment Variables

Create a `.env` file in the root of your project (copy from `.env.example`):

```bash
cp .env.example .env
```

### 2. Get Your Sanity API Token

1. Go to [Sanity Manage](https://www.sanity.io/manage)
2. Select your project (`f732bn2a`)
3. Navigate to **API** → **Tokens**
4. Click **Add API token**
5. Give it a name (e.g., "Preview Token")
6. Set permissions to **Viewer** (read-only)
7. Copy the token

### 3. Configure Environment Variables

Add these to your `.env` file:

```env
# Required for preview mode
SANITY_API_READ_TOKEN=your_token_from_step_2

# Optional: Custom preview secret (defaults to 'preview-secret-token')
SANITY_PREVIEW_SECRET=your-custom-secret-here

# Set to "true" to enable visual editing (optional)
PUBLIC_SANITY_VISUAL_EDITING_ENABLED=false
```

⚠️ **Important**: Never commit your `.env` file to version control. It's already in `.gitignore`.

---

## How to Use Preview Mode

### Method 1: URL-Based Preview (Recommended)

Access preview mode by visiting:

```
https://your-site.com/api/preview?secret=YOUR_SECRET&slug=/page-slug
```

**Parameters:**
- `secret` - Your preview secret from `.env` (required)
- `slug` - The page you want to preview (optional, defaults to `/`)

**Examples:**
```
# Preview homepage
/api/preview?secret=your-secret

# Preview specific page
/api/preview?secret=your-secret&slug=/about

# Preview nested page
/api/preview?secret=your-secret&slug=/blog/my-post
```

### Method 2: Cookie-Based Preview

Once you've accessed the preview URL, a cookie is set for 24 hours. You can then:

1. Navigate normally through your site
2. All pages will show draft content
3. A yellow banner appears at the bottom indicating preview mode
4. Click "Exit Preview" to return to published content

---

## Preview Banner

When preview mode is active, you'll see a yellow banner at the bottom of every page:

```
⚠️ Preview Mode Active
You are viewing draft content from Sanity
[Exit Preview Button]
```

This banner:
- Is only visible in preview mode
- Doesn't appear to regular visitors
- Provides a quick way to exit preview mode
- Is accessible and screen-reader friendly

---

## Exiting Preview Mode

Three ways to exit preview mode:

1. **Click the "Exit Preview" button** in the banner
2. **Visit**: `/api/exit-preview`
3. **Wait 24 hours** for the cookie to expire

---

## Setting Up Preview in Sanity Studio

To add a preview button in your Sanity Studio:

### 1. Create a Preview Plugin

In your Sanity Studio project, create `plugins/preview.ts`:

```typescript
import { definePlugin } from 'sanity'

export const previewPlugin = definePlugin({
  name: 'preview-plugin',
  document: {
    actions: (prev, { schemaType }) => {
      // Only add preview button to specific document types
      if (!['generic', 'post', 'home'].includes(schemaType)) {
        return prev
      }

      return [
        ...prev,
        {
          label: 'Preview',
          icon: () => '👁️',
          onHandle: ({ draft, published }) => {
            const doc = draft || published
            const slug = doc?.slug?.current || ''
            const previewUrl = `https://your-site.com/api/preview?secret=YOUR_SECRET&slug=/${slug}`
            window.open(previewUrl, '_blank')
          }
        }
      ]
    }
  }
})
```

### 2. Add to sanity.config.ts

```typescript
import { previewPlugin } from './plugins/preview'

export default defineConfig({
  // ... other config
  plugins: [
    // ... other plugins
    previewPlugin()
  ]
})
```

---

## How It Works

### Architecture

```
┌─────────────────┐
│  Sanity Studio  │
│  (Draft Content)│
└────────┬────────┘
         │
         │ API Token
         ▼
┌─────────────────┐     Cookie      ┌──────────────┐
│  Preview API    │ ──────────────► │  Your Site   │
│  /api/preview   │                 │ (Shows Drafts)│
└─────────────────┘                 └──────────────┘
```

### Technical Details

1. **Preview API** (`/api/preview`):
   - Validates the secret token
   - Sets a secure HTTP-only cookie
   - Redirects to the requested page

2. **Load Query** (`load-query.ts`):
   - Checks for preview cookie
   - Uses `previewDrafts` perspective when in preview mode
   - Uses `published` perspective for normal visitors

3. **Layout** (`Layout.astro`):
   - Detects preview cookie
   - Shows preview banner when active
   - Adds bottom padding to accommodate banner

---

## Security Considerations

✅ **Best Practices:**

1. **Keep your tokens secret** - Never commit them to Git
2. **Use strong preview secrets** - Generate random strings
3. **HTTP-only cookies** - Prevents XSS attacks
4. **Token permissions** - Use read-only tokens
5. **Time limits** - Cookies expire after 24 hours

⚠️ **Important Notes:**

- Preview mode only works on server-rendered pages (SSR)
- Static builds won't support real-time preview
- Tokens should be rotated periodically
- Don't share preview URLs publicly

---

## Troubleshooting

### Preview Mode Not Working

**Check these:**

1. ✅ Is `SANITY_API_READ_TOKEN` set in `.env`?
2. ✅ Is the token valid and has read permissions?
3. ✅ Is the preview secret correct?
4. ✅ Are cookies enabled in your browser?
5. ✅ Is the site running in SSR mode? (not static)

### Draft Content Not Showing

**Verify:**

1. ✅ Content is saved as draft in Sanity (not published)
2. ✅ Preview cookie is set (check browser DevTools)
3. ✅ Token has access to the dataset
4. ✅ `loadQuery` is called with `preview: isPreview`

### Preview Banner Not Appearing

**Check:**

1. ✅ Cookie is set correctly
2. ✅ `PreviewBanner` component is imported in Layout
3. ✅ `isPreview` variable is being checked

---

## Deployment

### Netlify

Add environment variables in Netlify dashboard:

1. Go to **Site settings** → **Environment variables**
2. Add `SANITY_API_READ_TOKEN`
3. Add `SANITY_PREVIEW_SECRET` (optional)
4. Redeploy your site

### Vercel

```bash
vercel env add SANITY_API_READ_TOKEN
vercel env add SANITY_PREVIEW_SECRET
```

---

## Advanced: Visual Editing

For real-time visual editing in Sanity Studio:

1. Set `PUBLIC_SANITY_VISUAL_EDITING_ENABLED=true`
2. Install Sanity Visual Editing package (already installed)
3. Configure overlays in your components
4. See [Sanity Visual Editing docs](https://www.sanity.io/docs/visual-editing)

---

## API Reference

### Preview API Endpoints

#### `GET /api/preview`

Enable preview mode.

**Query Parameters:**
- `secret` (required) - Preview secret token
- `slug` (optional) - Page to redirect to (default: `/`)

**Response:**
- `401` - Invalid token
- `302` - Redirect to page with preview cookie set

#### `GET /api/exit-preview`

Disable preview mode.

**Response:**
- `302` - Redirect to homepage with preview cookie cleared

---

## Files Modified/Created

### New Files
- `.env.example` - Environment variable template
- `src/pages/api/preview.ts` - Preview API endpoint
- `src/pages/api/exit-preview.ts` - Exit preview endpoint
- `src/components/elements/PreviewBanner.astro` - Preview banner component
- `SANITY_PREVIEW_SETUP.md` - This documentation

### Modified Files
- `src/sanity/lib/load-query.ts` - Added preview parameter
- `src/layouts/Layout.astro` - Added preview detection and banner
- `src/pages/[slug].astro` - Added preview support

---

## Support

For issues or questions:

1. Check the [Sanity Documentation](https://www.sanity.io/docs)
2. Review this guide's troubleshooting section
3. Check browser console for errors
4. Verify environment variables are set correctly

---

*Last Updated: 2025-10-02*
