import type { BlockContent } from './blockContent'

/**
 * Interface for TwoCols object type
 */
export interface TwoCols {
	_type: 'twoCols'
	contentLeft?: BlockContent
	contentRight?: BlockContent
}
