const STORAGE_KEY = "ow-user-listings-v1";
export const MAX_IMAGE_BYTES = 180 * 1024;
export const MAX_LISTING_PHOTOS = 8;

function isListing(value) {
  return (
    value &&
    typeof value === "object" &&
    typeof value.id === "string" &&
    typeof value.title === "string"
  );
}

export function loadUserListings() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    const parsed = raw ? JSON.parse(raw) : [];
    if (!Array.isArray(parsed)) return [];
    return parsed.filter(isListing);
  } catch {
    return [];
  }
}

export function saveUserListings(listings) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(listings));
}

export function priceNumber(price) {
  const value = Number(String(price ?? "").replace(/[^0-9.]/g, ""));
  return Number.isFinite(value) ? value : 0;
}

export function areaNumber(area) {
  const value = Number(String(area ?? "").replace(/[^0-9.]/g, ""));
  return Number.isFinite(value) ? value : 0;
}

export function typeMatches(selected, propertyType) {
  if (!selected) return true;
  const wanted = selected.toLowerCase();
  const actual = String(propertyType ?? "").toLowerCase();
  if (!actual) return false;
  if (actual.includes(wanted) || wanted.includes(actual)) return true;
  if (wanted.startsWith("apartment") && actual.includes("apartment")) return true;
  if (wanted.startsWith("home") && /home|villa|townhouse|house/.test(actual)) return true;
  if (wanted.includes("hotel") && /hotel|motel/.test(actual)) return true;
  if (wanted.includes("room") && actual.includes("room")) return true;
  if (wanted.includes("rv") && actual.includes("rv")) return true;
  if (wanted.includes("condo") && actual.includes("condo")) return true;
  if (wanted.includes("land") && actual.includes("land")) return true;
  return false;
}

export function filterListings(listings, filters) {
  return listings.filter((property) => {
    if (filters.status && property.status !== filters.status) return false;
    if (!typeMatches(filters.type, property.type)) return false;
    if (
      filters.location &&
      !String(property.location ?? "")
        .toLowerCase()
        .includes(filters.location.toLowerCase().replace(/\.$/, ""))
    ) {
      return false;
    }
    if (filters.beds && Number(property.beds) < Number(filters.beds)) return false;
    if (filters.baths && Number(property.baths) < Number(filters.baths)) return false;
    if (filters.area && areaNumber(property.area) < Number(filters.area)) return false;
    if (filters.minPrice && priceNumber(property.price) < Number(filters.minPrice)) {
      return false;
    }
    if (filters.maxPrice && priceNumber(property.price) > Number(filters.maxPrice)) {
      return false;
    }
    return true;
  });
}

export function sortListings(listings, sort) {
  const copy = [...listings];
  if (sort === "price-asc") {
    copy.sort((a, b) => priceNumber(a.price) - priceNumber(b.price));
  } else if (sort === "price-desc") {
    copy.sort((a, b) => priceNumber(b.price) - priceNumber(a.price));
  } else if (sort === "rent") {
    return copy.filter((item) => item.status === "For Rent");
  } else if (sort === "sale") {
    return copy.filter((item) => item.status === "For Sale");
  }
  return copy;
}
