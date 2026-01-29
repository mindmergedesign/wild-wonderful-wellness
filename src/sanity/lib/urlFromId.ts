export const urlFromId = (ref: string) => {
	const [_file, id, extension] = ref.split('-')
	return `https://cdn.sanity.io/files/v8ngbpl7/production/${id}.${extension}`
}
