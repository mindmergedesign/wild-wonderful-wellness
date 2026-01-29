import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

// Misc Functions
export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs))
}

export const slugify = (...args: any) => {
	const value = args.join(' ')

	return value
		.normalize('NFD') // split an accented letter in the base letter and the acent
		.replace(/[\u0300-\u036f]/g, '') // remove all previously split accents
		.toLowerCase()
		.trim()
		.replace(/[^a-z0-9 ]/g, '') // remove all chars not letters, numbers and spaces (to be replaced)
		.replace(/\s+/g, '-') // separator
}

export function getRandomInt(max: number) {
	return Math.floor(Math.random() * max)
}

export function groupByDate(array: any, string: any) {
	return array.filter((item: any) => item?._createdAt.slice(0, 4) == string)
}

export function portableToPlain(blocks = []) {
	return (
		blocks
			// loop through each block
			.map((block) => {
				// if it's not a text block with children,
				// return nothing
				//@ts-ignore
				if (block._type !== 'block' || !block.children) {
					return ''
				}
				// loop through the children spans, and join the
				// text strings
				//@ts-ignore
				return block.children.map((child: any) => child.text).join('')
			})
			// join the paragraphs leaving split by two linebreaks
			.join('\n\n')
	)
}

export function truncateString(string: string, limit: number) {
	if (string.length > limit) {
		return string.substring(0, limit) + '...'
	} else {
		return string
	}
}

export function shuffleArray(array: any) {
	for (let i = array.length - 1; i > 0; i--) {
		// Pick a random index from 0 to 1 * (i + 1));
		// Swap elements at i and j
		;[array[i], array[j]] = [array[j], array[i]]
	}
	return array
}
