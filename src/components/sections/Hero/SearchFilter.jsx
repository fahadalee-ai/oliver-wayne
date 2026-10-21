import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  rentPropertyTypes,
  buyPropertyTypes,
  locations,
} from "../../../data/filters";

const areaOptions = ["1500", "1200", "900", "600", "300", "100"];
const bedroomOptions = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
const bathroomOptions = ["1", "2", "3", "4", "5"];
const lodgingWithoutRooms = new Set(["Hotels, Motels", "RV Parking"]);

const emptyFields = {
  type: "",
  area: "",
  beds: "",
  baths: "",
  location: "",
};

function fieldsFor(tab, type) {
  if (tab === "rent") {
    if (lodgingWithoutRooms.has(type)) return ["type", "location"];
    return ["type", "location", "beds", "baths"];
  }
  if (type === "Land") return ["type", "area", "location"];
  return ["type", "area", "beds", "baths", "location"];
}

function SearchFilter() {
  const navigate = useNavigate();
  const [tab, setTab] = useState("rent");
  const [fields, setFields] = useState(emptyFields);
  const propertyTypes = tab === "rent" ? rentPropertyTypes : buyPropertyTypes;
  const visible = fieldsFor(tab, fields.type);

  function switchTab(next) {
    setTab(next);
    setFields(emptyFields);
  }

  function update(key, value) {
    setFields((current) => {
      const next = { ...current, [key]: value };
      const allowed = new Set(fieldsFor(tab, next.type));
      Object.keys(next).forEach((name) => {
        if (!allowed.has(name)) next[name] = "";
      });
      return next;
    });
  }

  function onSubmit(event) {
    event.preventDefault();
    const params = new URLSearchParams();
    params.set("status", tab === "rent" ? "For Rent" : "For Sale");
    visible.forEach((key) => {
      if (fields[key]) params.set(key, fields[key]);
    });
    navigate(`/properties?${params.toString()}`);
  }

  return (
    <div className="search__property">
      <ul className="nav nav-tabs nav-tabs-02 mb-3" role="tablist">
        <li className="nav-item mr-1">
          <button
            type="button"
            className={`nav-link btn ${tab === "rent" ? "active" : ""}`}
            aria-pressed={tab === "rent"}
            onClick={() => switchTab("rent")}
          >
            Rent
          </button>
        </li>
        <li className="nav-item mr-1">
          <button
            type="button"
            className={`nav-link btn ${tab === "buy" ? "active" : ""}`}
            aria-pressed={tab === "buy"}
            onClick={() => switchTab("buy")}
          >
            Buy
          </button>
        </li>
      </ul>

      <form className="search__fields" onSubmit={onSubmit}>
        {visible.includes("type") && (
          <select
            className="select_option form-control"
            name="type"
            aria-label={tab === "rent" ? "Lodging type" : "Property type"}
            value={fields.type}
            onChange={(event) => update("type", event.target.value)}
          >
            <option value="">{tab === "rent" ? "Lodging type" : "Property type"}</option>
            {propertyTypes.map((type) => (
              <option key={type}>{type}</option>
            ))}
          </select>
        )}
        {visible.includes("area") && (
          <select
            className="select_option form-control"
            name="area"
            aria-label="Area from"
            value={fields.area}
            onChange={(event) => update("area", event.target.value)}
          >
            <option value="">Area from</option>
            {areaOptions.map((area) => (
              <option key={area} value={area}>{area} sq ft</option>
            ))}
          </select>
        )}
        {visible.includes("beds") && (
          <select
            className="select_option form-control"
            name="beds"
            aria-label="Bedrooms"
            value={fields.beds}
            onChange={(event) => update("beds", event.target.value)}
          >
            <option value="">Bedrooms</option>
            {bedroomOptions.map((count) => (
              <option key={count} value={count}>{count}+</option>
            ))}
          </select>
        )}
        {visible.includes("baths") && (
          <select
            className="select_option form-control"
            name="baths"
            aria-label="Bathrooms"
            value={fields.baths}
            onChange={(event) => update("baths", event.target.value)}
          >
            <option value="">Bathrooms</option>
            {bathroomOptions.map((count) => (
              <option key={count} value={count}>{count}+</option>
            ))}
          </select>
        )}
        {visible.includes("location") && (
          <select
            className="select_option form-control"
            name="location"
            aria-label="Location"
            value={fields.location}
            onChange={(event) => update("location", event.target.value)}
          >
            <option value="">Location</option>
            {locations.map((location) => (
              <option key={location}>{location}</option>
            ))}
          </select>
        )}
        <button className="btn btn-primary search__submit" type="submit">
          <i className="fa fa-search"></i>
          <span>search</span>
        </button>
      </form>
    </div>
  );
}

export default SearchFilter;
