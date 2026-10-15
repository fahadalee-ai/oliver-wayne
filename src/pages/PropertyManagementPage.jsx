import PageBanner from "../components/layout/StickyHeader/PageBanner";
import PropertyManagement from "../components/sections/PropertyManagement/PropertyManagement";
import { img } from "../utils/asset";

function PropertyManagementPage() {
  return (
    <>
      <PageBanner
        title="Property Management"
        items={[{ label: "Property Management" }]}
        image={img("aboutback.jpg")}
      />
      <PropertyManagement />
    </>
  );
}

export default PropertyManagementPage;
