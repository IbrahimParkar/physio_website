/** Prefix browser URLs when the app is deployed as a GitHub Pages project site. */
export function sitePath(path: string) {
  return `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${path}`;
}
