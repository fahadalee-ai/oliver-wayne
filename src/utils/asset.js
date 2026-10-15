/**
 * Production-safe image URLs.
 * Vite only bundles images that are imported (or globbed). Hard-coded
 * `/src/assets/...` paths work in `vite`/`vite preview` with the filesystem,
 * but break on a static Nginx/AWS deploy.
 */
const imageModules = import.meta.glob(
  "../assets/images/**/*.{png,jpg,jpeg,webp,gif,svg}",
  { eager: true, import: "default" }
);

const byFileName = Object.fromEntries(
  Object.entries(imageModules).map(([path, url]) => {
    const name = path.split("/").pop();
    return [name, url];
  })
);

/**
 * @param {string} path - filename or any path ending in the filename
 * @returns {string} hashed URL suitable for <img src> / CSS backgroundImage
 */
export function img(path) {
  if (!path) return "";
  const name = String(path).replace(/^.*[/\\]/, "");
  const url = byFileName[name];
  if (!url && import.meta.env.DEV) {
    console.warn(`[asset] missing image: ${name}`);
  }
  return url || "";
}

export default img;
