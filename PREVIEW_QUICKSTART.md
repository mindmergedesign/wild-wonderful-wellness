# Sanity Preview - Quick Start

Get preview mode running in 5 minutes!

## Step 1: Get Your Token

1. Visit: https://www.sanity.io/manage/personal/tokens
2. Click "Add API token"
3. Name: "Preview Token"
4. Permissions: **Viewer**
5. Copy the token

## Step 2: Create .env File

```bash
cp .env.example .env
```

Add your token:

```env
SANITY_API_READ_TOKEN=your_token_here
SANITY_PREVIEW_SECRET=my-secret-123
```

## Step 3: Restart Dev Server

**Important:** Restart your dev server after creating .env:

```bash
# Stop the server (Ctrl+C)
# Then restart:
npm run dev
```

## Step 4: Test It

**First, visit the test page:**

```
http://localhost:4321/preview-test
```

This page shows:
- Current preview status
- Environment variables status
- Test links to enable/exit preview

**Then, enable preview:**

```
http://localhost:4321/api/preview?secret=my-secret-123
```

You should see:
- Yellow banner at bottom
- "Preview Mode Active" message
- Draft content from Sanity

## Step 4: Exit Preview

Click "Exit Preview" button or visit:

```
http://localhost:4321/api/exit-preview
```

---

## Preview a Specific Page

```
/api/preview?secret=my-secret-123&slug=/about
/api/preview?secret=my-secret-123&slug=/blog/my-post
```

---

## Troubleshooting

**Not working?**

1. Check `.env` file exists and has token
2. Restart dev server: `npm run dev`
3. Clear browser cookies
4. Check browser console for errors

---

📖 **Full Documentation**: See `SANITY_PREVIEW_SETUP.md`
