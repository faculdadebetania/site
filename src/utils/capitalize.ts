export function capitalize(str: string) {
  const strings = str.split('/');
  return strings.map((s) => s.charAt(0).toUpperCase() + s.slice(1)).join('/');
}
