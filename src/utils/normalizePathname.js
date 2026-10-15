const LEGACY_PREFIXES = ["/oliver-wayne", "/oliverWayne-react-js"];

/**
 * Maps deploy URLs that are not real routes back onto the app.
 * `/index.html` and the old subfolder paths otherwise hit the 404 page.
 */
export function normalizePathname(pathname) {
  let path = pathname || "/";

  for (const prefix of LEGACY_PREFIXES) {
    if (path === prefix || path.startsWith(`${prefix}/`)) {
      path = path.slice(prefix.length) || "/";
      break;
    }
  }

  if (path === "/index.html" || path === "/404.html") {
    path = "/";
  }

  if (path.length > 1 && path.endsWith("/")) {
    path = path.slice(0, -1);
  }

  return path.startsWith("/") ? path : `/${path}`;
}
