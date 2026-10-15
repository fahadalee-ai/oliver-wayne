import { recentProperties } from "../../../data/properties";
import PropertySection from "../PropertySection/PropertySection";

function RecentProperty() {
  return (
    <PropertySection
      title="Latest Properties"
      subtitle="Discover our newest property listings."
      properties={recentProperties}
    />
  );
}

export default RecentProperty;
