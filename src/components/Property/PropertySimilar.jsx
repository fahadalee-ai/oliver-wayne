import PropertyListCard from "../cards/PropertyListCard";

function PropertySimilar({ properties = [] }) {
  if (!properties.length) return null;

  return (
    <section className="property-similar">
      <h2>Similar properties</h2>
      <div className="property-similar__grid">
        {properties.map((property) => (
          <PropertyListCard {...property} layout="grid" key={property.id} />
        ))}
      </div>
    </section>
  );
}

export default PropertySimilar;
