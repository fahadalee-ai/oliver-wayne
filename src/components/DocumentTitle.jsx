import { useEffect } from "react";
import { useLocation, matchPath } from "react-router-dom";
import { normalizePathname } from "../utils/normalizePathname";
import { blogs } from "../data/blogs";
import { propertyListings } from "../data/propertyListings";
import { loadUserListings } from "../listings/storage";
import { agents } from "../data/agents";
import { agencies } from "../data/agencies";

const BRAND = "Oliver Wayne LLC";

const staticTitles = {
  "/": "Home",
  "/about": "About Us",
  "/membership": "Membership",
  "/lessors": "Lessors",
  "/property-management": "Property Management",
  "/properties": "Properties",
  "/add-listing": "Add Listing",
  "/contact": "Contact",
  "/blogs": "Blog",
  "/agents": "Agents",
  "/agencies": "Agencies",
};

function resolveTitle(pathname) {
  if (staticTitles[pathname]) {
    return staticTitles[pathname];
  }

  const property = matchPath("/property/:id", pathname);
  if (property) {
    const catalog = [...loadUserListings(), ...propertyListings];
    const item = catalog.find(
      (p) => String(p.id) === property.params.id
    );
    return item?.title || "Property Not Found";
  }

  const blog = matchPath("/blog/:id", pathname);
  if (blog) {
    const item = blogs.find((b) => String(b.id) === blog.params.id);
    return item?.title || "Blog Post";
  }

  const agent = matchPath("/agent/:id", pathname);
  if (agent) {
    const item = agents.find((a) => String(a.id) === agent.params.id);
    return item?.name || "Agent Profile";
  }

  const agency = matchPath("/agency/:id", pathname);
  if (agency) {
    const item = agencies.find((a) => String(a.id) === agency.params.id);
    return item?.name || "Agency Profile";
  }

  return "Page Not Found";
}

function DocumentTitle() {
  const location = useLocation();
  const pathname = normalizePathname(location.pathname);

  useEffect(() => {
    const page = resolveTitle(pathname);
    document.title = page === "Home" ? BRAND : `${page} | ${BRAND}`;
  }, [pathname]);

  return null;
}

export default DocumentTitle;
