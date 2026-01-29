/**
 * Reusable Tally form embed script
 * This script handles loading the Tally widget and setting up iframe sources
 */
function initializeTallyEmbeds() {
	const d = document
	const w = 'https://tally.so/widgets/embed.js'

	const loadEmbeds = function () {
		if (typeof window.Tally !== 'undefined') {
			window.Tally.loadEmbeds()
		} else {
			d.querySelectorAll('iframe[data-tally-src]:not([src])').forEach(function (e) {
				e.src = e.dataset.tallySrc
			})
		}
	}

	if (typeof window.Tally !== 'undefined') {
		loadEmbeds()
	} else if (d.querySelector('script[src="' + w + '"]') == null) {
		const s = d.createElement('script')
		s.src = w
		s.onload = loadEmbeds
		s.onerror = loadEmbeds
		d.body.appendChild(s)
	}
}

// Initialize on page load
document.addEventListener('astro:page-load', initializeTallyEmbeds)

// Also run immediately if the page is already loaded
if (document.readyState === 'loading') {
	document.addEventListener('DOMContentLoaded', initializeTallyEmbeds)
} else {
	initializeTallyEmbeds()
}
