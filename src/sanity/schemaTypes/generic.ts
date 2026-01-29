import type { SanityDocument, Slug } from 'sanity'
import type { PageBuilder } from './pageBuilder'

/**
 * Interface for Generic document type
 */
export interface Generic extends SanityDocument {
	_type: 'generic'
	title: string
	slug: Slug
	pageBuilder?: PageBuilder[]
}
