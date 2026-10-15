import { useState } from "react";

function PropertyDetailContent({
  description = [],
  detailLeft = [],
  detailRight = [],
  additionalLeft = [],
  additionalRight = [],
  features = [],
  floorPlans = [],
  locationMap = {},
  nearby = [],
}) {
  const [expanded, setExpanded] = useState(false);
  const [openFloor, setOpenFloor] = useState(floorPlans[0]?.id ?? null);
  const [locationTab, setLocationTab] = useState("map");

  return (
    <div className="row">
      <div className="col-lg-12">
        {/* DESCRIPTION */}
        <div className="single__detail-desc">
          <h5 className="text-capitalize detail-heading mt-0">description</h5>
          <div className={`show__more ${expanded ? "visible" : ""}`}>
            {description.map((text, index) => (
              <p key={index}>{text}</p>
            ))}
            {!expanded && (
              <a
                href="javascript:void(0)"
                className="show__more-button"
                onClick={(e) => {
                  e.preventDefault();
                  setExpanded(true);
                }}
              >
                read more
              </a>
            )}
          </div>
        </div>
        <div className="clearfix"></div>
        {/* PROPERTY DETAILS */}
        <div className="single__detail-features">
          <h5 className="text-capitalize detail-heading">property details</h5>
          <div className="property__detail-info">
            <div className="row">
              <div className="col-md-6 col-lg-6">
                <ul className="property__detail-info-list list-unstyled">
                  {detailLeft.map((item) => (
                    <li key={item.label}>
                      <b>{item.label}:</b> {item.value}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="col-md-6 col-lg-6">
                <ul className="property__detail-info-list list-unstyled">
                  {detailRight.map((item) => (
                    <li key={item.label}>
                      <b>{item.label}:</b> {item.value}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <h6 className="text-primary">Additional details</h6>
            <div className="row">
              <div className="col-md-6 col-lg-6">
                <ul className="property__detail-info-list list-unstyled">
                  {additionalLeft.map((item) => (
                    <li key={`add-${item.label}`}>
                      <b>{item.label}:</b> {item.value}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="col-md-6 col-lg-6">
                <ul className="property__detail-info-list list-unstyled">
                  {additionalRight.map((item) => (
                    <li key={`add-${item.label}`}>
                      <b>{item.label}:</b> {item.value}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="clearfix"></div>
        {/* FEATURES */}
        <div className="single__detail-features">
          <h5 className="text-capitalize detail-heading">features</h5>
          <ul className="list-unstyled icon-checkbox">
            {features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
        </div>
        {/* FLOOR PLAN */}
        <div className="single__detail-features">
          <h5 className="text-capitalize detail-heading">floor plan</h5>
          <div className="floorplan" role="tablist">
            {floorPlans.map((plan) => {
              const isOpen = openFloor === plan.id;
              return (
                <div className="card" key={plan.id}>
                  <div className="card-header" role="tab">
                    <a
                      href="javascript:void(0)"
                      className={`text-capitalize ${isOpen ? "" : "collapsed"}`}
                      onClick={(e) => {
                        e.preventDefault();
                        setOpenFloor(isOpen ? null : plan.id);
                      }}
                    >
                      {plan.title}{" "}
                      <span className="badge badge-light rounded p-1 ml-2">
                        {plan.size}
                      </span>
                    </a>
                  </div>
                  <div
                    className={`collapse ${isOpen ? "show" : ""}`}
                    role="tabpanel"
                  >
                    <div className="card-body">
                      <figure>
                        <img
                          src={plan.image}
                          alt={plan.title}
                          className="img-fluid"
                        />
                      </figure>
                      {plan.text}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        {/* LOCATION */}
        <div className="single__detail-features">
          <h5 className="text-capitalize detail-heading">location</h5>
          <ul className="nav nav-pills mb-3" role="tablist">
            <li className="nav-item">
              <button
                type="button"
                className={`nav-link btn btn-block ${locationTab === "map" ? "active" : ""}`}
                onClick={() => setLocationTab("map")}
              >
                <i className="fa fa-map-marker"></i>
              </button>
            </li>
            <li className="nav-item">
              <button
                type="button"
                className={`nav-link btn btn-block ${locationTab === "street" ? "active" : ""}`}
                onClick={() => setLocationTab("street")}
              >
                <i className="fa fa-street-view"></i>
              </button>
            </li>
          </ul>
          <div className="tab-content">
            <div
              className={`tab-pane fade ${
                locationTab === "map" ? "show active" : ""
              }`}
            >
              <div id="map-canvas">
                <iframe
                  className="h600 w100"
                  src={locationMap.mapEmbed}
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  title="Property map"
                ></iframe>
              </div>
            </div>
            <div
              className={`tab-pane fade ${
                locationTab === "street" ? "show active" : ""
              }`}
            >
              <iframe
                className="h600 w100"
                src={locationMap.streetEmbed}
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="Street view"
              ></iframe>
            </div>
          </div>
        </div>
        {/* WHAT'S NEARBY */}
        <div className="single__detail-features">
          <h5 className="text-capitalize detail-heading">what's nearby</h5>
          <div className="single__detail-features-nearby">
            {nearby.map((group) => (
              <div key={group.id}>
                <h6 className="text-capitalize">
                  <span>
                    <i className={`fa ${group.icon}`}></i>
                  </span>{" "}
                  {group.title}
                </h6>
                <ul className="list-unstyled">
                  {group.places.map((place) => (
                    <li key={place.name}>
                      <span>{place.name}</span>
                      <p>{place.distance}</p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PropertyDetailContent;
