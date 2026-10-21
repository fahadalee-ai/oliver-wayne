import { useState } from "react";
import { propertyTypes, rentPropertyTypes, buyPropertyTypes, locations } from "../../data/filters";

const empty = {
  status: "",
  type: "",
  location: "",
  area: "",
  beds: "",
  baths: "",
  maxPrice: "",
};

function PropertySearchBar({ filters = empty, onSearch }) {
  const [draft, setDraft] = useState(filters);

  function update(field, value) {
    setDraft((current) => {
      const next = { ...current, [field]: value };
      const allowed =
        next.status === "For Rent"
          ? rentPropertyTypes
          : next.status === "For Sale"
            ? buyPropertyTypes
            : propertyTypes;
      if (next.type && !allowed.includes(next.type)) next.type = "";
      if (next.status === "For Rent") next.area = "";
      if (next.type === "Land" || next.type === "Hotels, Motels" || next.type === "RV Parking") {
        next.beds = "";
        next.baths = "";
      }
      return next;
    });
  }

  function onSubmit(event) {
    event.preventDefault();
    const next = { ...draft };
    if (next.status === "For Rent") next.area = "";
    if (next.type === "Land" || next.type === "Hotels, Motels" || next.type === "RV Parking") {
      next.beds = "";
      next.baths = "";
    }
    onSearch(next);
  }

  const types =
    draft.status === "For Rent"
      ? rentPropertyTypes
      : draft.status === "For Sale"
        ? buyPropertyTypes
        : propertyTypes;
  const showArea = draft.status !== "For Rent";
  const showRooms = draft.type !== "Land" && draft.type !== "Hotels, Motels" && draft.type !== "RV Parking";

  return (
    <div className="search__area bg__shadow">
      <div className="container">
        <form className="search__area-inner" onSubmit={onSubmit}>
          <div className="row">
            <div className="col-12 col-md-3">
              <label className="sr-only" htmlFor="filter-status">Status</label>
              <select
                id="filter-status"
                className="form-control mb-2"
                value={draft.status}
                onChange={(event) => update("status", event.target.value)}
              >
                <option value="">Property status</option>
                <option>For Sale</option>
                <option>For Rent</option>
              </select>
            </div>
            <div className="col-12 col-md-3">
              <label className="sr-only" htmlFor="filter-type">Type</label>
              <select
                id="filter-type"
                className="form-control mb-2"
                value={draft.type}
                onChange={(event) => update("type", event.target.value)}
              >
                <option value="">{draft.status === "For Rent" ? "Lodging type" : "Property type"}</option>
                {types.map((type) => (
                  <option key={type}>{type}</option>
                ))}
              </select>
            </div>
            {showArea && (
            <div className="col-6 col-md-3">
              <label className="sr-only" htmlFor="filter-area">Minimum area</label>
              <select
                id="filter-area"
                className="form-control mb-2"
                value={draft.area}
                onChange={(event) => update("area", event.target.value)}
              >
                <option value="">Area from</option>
                {["1500", "1200", "900", "600", "300", "100"].map((area) => (
                  <option key={area} value={area}>{area} sq ft</option>
                ))}
              </select>
            </div>
            )}
            <div className="col-6 col-md-3">
              <label className="sr-only" htmlFor="filter-location">Location</label>
              <select
                id="filter-location"
                className="form-control mb-2"
                value={draft.location}
                onChange={(event) => update("location", event.target.value)}
              >
                <option value="">Location</option>
                {locations.map((location) => (
                  <option key={location}>{location}</option>
                ))}
              </select>
            </div>
            {showRooms && (
            <div className="col-6 col-md-3">
              <label className="sr-only" htmlFor="filter-beds">Bedrooms</label>
              <select
                id="filter-beds"
                className="form-control mb-2"
                value={draft.beds}
                onChange={(event) => update("beds", event.target.value)}
              >
                <option value="">Bedrooms</option>
                {["1", "2", "3", "4", "5", "6"].map((count) => (
                  <option key={count} value={count}>{count}+</option>
                ))}
              </select>
            </div>
            )}
            {showRooms && (
            <div className="col-6 col-md-3">
              <label className="sr-only" htmlFor="filter-baths">Bathrooms</label>
              <select
                id="filter-baths"
                className="form-control mb-2"
                value={draft.baths}
                onChange={(event) => update("baths", event.target.value)}
              >
                <option value="">Bathrooms</option>
                {["1", "2", "3", "4", "5"].map((count) => (
                  <option key={count} value={count}>{count}+</option>
                ))}
              </select>
            </div>
            )}
            <div className="col-12 col-md-3">
              <label className="sr-only" htmlFor="filter-price">Maximum price</label>
              <input
                id="filter-price"
                type="number"
                min="0"
                className="form-control mb-2"
                placeholder={draft.status === "For Rent" ? "Max rent" : "Max price"}
                value={draft.maxPrice}
                onChange={(event) => update("maxPrice", event.target.value)}
              />
            </div>
            <div className="col-12 col-md-3">
              <button className="btn btn-primary text-uppercase btn-block" type="submit">
                search <i className="fa fa-search ml-1"></i>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default PropertySearchBar;
