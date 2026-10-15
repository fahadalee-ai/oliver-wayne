/** Shared filter options for Home search + Properties filters */

export const rentPropertyTypes = [
  "Hotels, Motels",
  "Apartments",
  "Homes",
  "Rooms",
  "RV Parking",
];

export const buyPropertyTypes = ["Homes", "Condos", "Land"];

/** Combined list for Quick Links / categories */
export const propertyTypes = [
  "Hotels, Motels",
  "Apartments",
  "Homes",
  "Rooms",
  "RV Parking",
  "Condos",
  "Land",
];

/** Sidebar category counts (placeholder counts until live data) */
export const propertyCategories = propertyTypes.map((name, index) => ({
  id: index + 1,
  name,
  count: [18, 24, 16, 12, 8, 10, 6][index] ?? 0,
}));

export const locations = [
  "Pascagoula, MS.",
  "Gautier, MS.",
  "Ocean Springs, MS.",
  "Biloxi, MS.",
  "Gulfport, MS.",
  "Mobile, AL.",
];
