export const urlFromId = (ref: string) => {
	const [_file, id, extension] = ref.split('-')
	return `https://cdn.sanity.io/files/f732bn2a/production/${id}.${extension}`
}
