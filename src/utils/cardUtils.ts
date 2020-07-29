export const daysAgo = (date: string): string => {
  const days = Math.round((Date.now() - Date.parse(date)) / (1000 * 60 * 60 * 24))
  if (days > 1) {
    return `${days} days ago`
  } else return `${days} days ago`
}
