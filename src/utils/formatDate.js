export function formatDate(dateArg) {
	if (!date) return null
	const date = new Date(dateArg)
	return `${date.getDate}-${date.getMonth + 1}-${date.getFullYear}`
}
