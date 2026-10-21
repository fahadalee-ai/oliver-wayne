import { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  useNavigate,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import PropertyPage from "./pages/PropertyPage";
import PropertyDetailPage from "./pages/PropertyDetailPage";
import HeroLayout from "./components/layout/HeroLayout";
import StickyLayout from "./components/layout/StickyLayout";
import AboutPage from "./pages/AboutPage";
import BlogPage from "./pages/BlogPage";
import BlogDetailPage from "./pages/BlogDetailPage";
import AgentPage from "./pages/AgentPage";
import AgentDetailPage from "./pages/AgentDetailPage";
import AgencyPage from "./pages/AgencyPage";
import AgencyDetailPage from "./pages/AgencyDetailPage";
import MembershipPage from "./pages/MembershipPage";
import LessorPage from "./pages/LessorPage";
import PropertyManagementPage from "./pages/PropertyManagementPage";
import AddListingPage from "./pages/AddListingPage";
import ContactPage from "./pages/ContactPage";
import NotFoundPage from "./pages/NotFoundPage";
import { ListingsProvider } from "./listings/ListingsContext";
import ScrollToTop from "./components/ScrollToTop";
import DocumentTitle from "./components/DocumentTitle";
import { normalizePathname } from "./utils/normalizePathname";

const routerBasename =
  (import.meta.env.BASE_URL || "/").replace(/\/$/, "") || "/";

function AppRoutes() {
  const location = useLocation();
  const navigate = useNavigate();
  const pathname = normalizePathname(location.pathname);

  useEffect(() => {
    if (pathname === location.pathname) return;
    navigate(
      { pathname, search: location.search, hash: location.hash },
      { replace: true }
    );
  }, [pathname, location.pathname, location.search, location.hash, navigate]);

  const routeLocation =
    pathname === location.pathname ? location : { ...location, pathname };

  return (
    <>
      <ScrollToTop />
      <DocumentTitle />
      <Routes location={routeLocation}>
        <Route element={<HeroLayout />}>
          <Route path="/" element={<HomePage />} />
        </Route>

        <Route element={<StickyLayout />}>
          <Route path="/about" element={<AboutPage />} />
          <Route path="/membership" element={<MembershipPage />} />
          <Route path="/lessors" element={<LessorPage />} />
          <Route path="/property-management" element={<PropertyManagementPage />} />
          <Route path="/properties" element={<PropertyPage />} />
          <Route path="/add-listing" element={<AddListingPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/property/:id" element={<PropertyDetailPage />} />
          <Route path="/blogs" element={<BlogPage />} />
          <Route path="/blog/:id" element={<BlogDetailPage />} />
          <Route path="/agents" element={<AgentPage />} />
          <Route path="/agent/:id" element={<AgentDetailPage />} />
          <Route path="/agencies" element={<AgencyPage />} />
          <Route path="/agency/:id" element={<AgencyDetailPage />} />
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <Router basename={routerBasename}>
      <ListingsProvider>
        <AppRoutes />
      </ListingsProvider>
    </Router>
  );
}

export default App;
