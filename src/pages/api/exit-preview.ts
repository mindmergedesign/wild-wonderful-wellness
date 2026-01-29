import type { APIRoute } from 'astro'

export const prerender = false

/**
 * API endpoint to disable preview mode
 * Usage: /api/exit-preview
 */
export const GET: APIRoute = async ({ cookies, redirect }) => {
	console.log('Exiting preview mode')

	// Clear the preview cookie
	cookies.delete('sanity-preview', {
		path: '/'
	})

	// Redirect to home or the referrer
	return redirect('/')
}
