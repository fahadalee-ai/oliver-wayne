import { useState } from "react";

function stat(label, value) {
  if (value === undefined || value === null || String(value).trim() === "") return null;
  return { label, value: String(value) };
}

function PropertyDetailContent({
  description = [],
  detailLeft = [],
  detailRight = [],
  additionalLeft = [],
  additionalRight = [],
  features = [],
  beds,
  baths,
  area,
  rooms,
  floorPlans = [],
  locationMap = {},
  nearby = [],
}) {
  const [openFloor, setOpenFloor] = useState(floorPlans[0]?.id ?? null);
  const [locationTab, setLocationTab] = useState("map");
  const stats = [
    stat("Bedrooms", beds),
    stat("Bathrooms", baths),
    stat("Area", area),
    stat("Rooms", rooms),
  ].filter(Boolean);
  const facts = [...detailLeft, ...detailRight, ...additionalLeft, ...additionalRight];

  return (
    <div className="property-main">
      {stats.length > 0 && (
        <ul className="property-stats">
          {stats.map((item) => (
            <li key={item.label}>
              <span>{item.label}</span>
              <strong>{item.value}</strong>
            </li>
          ))}
        </ul>
      )}

      {description.length > 0 && (
        <section>
          <h2>Description</h2>
          {description.map((text) => (
            <p key={text}>{text}</p>
          ))}
        </section>
      )}

      {facts.length > 0 && (
        <section>
          <h2>Property details</h2>
          <dl className="property-facts">
            {facts.map((item) => (
              <div key={item.label}>
                <dt>{item.label}</dt>
                <dd>{item.value}</dd>
              </div>
            ))}
          </dl>
        </section>
      )}

      {features.length > 0 && (
        <section>
          <h2>Features</h2>
          <ul className="property-features">
            {features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
        </section>
      )}

      {floorPlans.length > 0 && (
        <section>
          <h2>Floor plans</h2>
          <div className="property-plans">
            {floorPlans.map((plan) => {
              const isOpen = openFloor === plan.id;
              return (
                <article key={plan.id}>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setOpenFloor(isOpen ? null : plan.id)}
                  >
                    <span>{plan.title}</span>
                    <span>{plan.size}</span>
                  </button>
                  {isOpen && (
                    <div>
                      {plan.image ? <img src={plan.image} alt={plan.title} /> : null}
                      {plan.text ? <p>{plan.text}</p> : null}
                    </div>
                  )}
                </article>
              );
            })}
          </div>
        </section>
      )}

      {locationMap?.mapEmbed && (
        <section>
          <h2>Location</h2>
          <div className="property-map-tabs" role="tablist">
            <button type="button" aria-selected={locationTab === "map"} onClick={() => setLocationTab("map")}>
              Map
            </button>
            {locationMap.streetEmbed && (
              <button type="button" aria-selected={locationTab === "street"} onClick={() => setLocationTab("street")}>
                Street
              </button>
            )}
          </div>
          <div className="property-map">
            <iframe
              src={locationTab === "street" ? locationMap.streetEmbed : locationMap.mapEmbed}
              title={locationTab === "street" ? "Street view" : "Property map"}
              loading="lazy"
            />
          </div>
        </section>
      )}

      {nearby.length > 0 && (
        <section>
          <h2>What’s nearby</h2>
          <div className="property-nearby">
            {nearby.map((group) => (
              <div key={group.id}>
                <h3>{group.title}</h3>
                <ul>
                  {group.places.map((place) => (
                    <li key={place.name}>
                      <span>{place.name}</span>
                      <span>{place.distance}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

export default PropertyDetailContent;
