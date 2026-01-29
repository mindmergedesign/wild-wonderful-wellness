import type { APIRoute } from 'astro'

export const prerender = false

/**
 * API endpoint to enable preview mode
 * Usage: /api/preview?secret=YOUR_SECRET&slug=/page-slug
 */
export const GET: APIRoute = async ({ request, cookies, redirect }) => {
	const url = new URL(request.url)
	const secret = url.searchParams.get('secret')
	const slug = url.searchParams.get('slug') || '/'

	console.log('Preview API called:', {
		hasSecret: !!secret,
		slug,
		envSecret: import.meta.env.SANITY_PREVIEW_SECRET ? 'set' : 'not set'
	})

	// Check the secret token
	const previewSecret = import.meta.env.SANITY_PREVIEW_SECRET || 'preview-secret-token'

	if (!secret) {
		return new Response(
			'Missing secret parameter. Usage: /api/preview?secret=YOUR_SECRET&slug=/page-slug',
			{
				status: 400,
				headers: { 'Content-Type': 'text/plain' }
			}
		)
	}

	if (secret !== previewSecret) {
		console.log('Invalid secret provided')
		return new Response('Invalid token', {
			status: 401,
			headers: { 'Content-Type': 'text/plain' }
		})
	}

	console.log('Preview mode enabled, setting cookie')

	// Enable preview mode by setting a cookie
	cookies.set('sanity-preview', 'true', {
		path: '/',
		httpOnly: true,
		sameSite: 'lax', // Changed from 'strict' for better compatibility
		maxAge: 60 * 60 * 24, // 24 hours
		secure: false // Allow in development (http)
	})

	console.log('Redirecting to:', slug)

	// Redirect to the page
	return redirect(slug)
}
