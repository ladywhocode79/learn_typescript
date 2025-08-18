export function capitalize(text: string): string {
    const value = text ? text.charAt(0).toUpperCase() + text.slice(1).toLowerCase() : ''

  return value
}