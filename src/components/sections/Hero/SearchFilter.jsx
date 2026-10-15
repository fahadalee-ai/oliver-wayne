import { useState } from "react";
import {
  rentPropertyTypes,
  buyPropertyTypes,
  locations,
} from "../../../data/filters";

const areaOptions = ["1500", "1200", "900", "600", "300", "100"];
const bedroomOptions = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
const bathroomOptions = ["1", "2", "3", "4", "5"];

function SearchFilter() {
  const [tab, setTab] = useState("rent");
  const propertyTypes = tab === "rent" ? rentPropertyTypes : buyPropertyTypes;

  return (
    <div className="search__property">
      <ul className="nav nav-tabs nav-tabs-02 mb-3" role="tablist">
        <li className="nav-item mr-1">
          <button
            type="button"
            className={`nav-link btn ${tab === "rent" ? "active" : ""}`}
            onClick={() => setTab("rent")}
          >
            Rent
          </button>
        </li>
        <li className="nav-item mr-1">
          <button
            type="button"
            className={`nav-link btn ${tab === "buy" ? "active" : ""}`}
            onClick={() => setTab("buy")}
          >
            Buy
          </button>
        </li>
      </ul>

      <form className="search__fields" onSubmit={(event) => event.preventDefault()}>
        <select className="select_option form-control" name="type" aria-label="Type Property">
          <option>Type Property</option>
          {propertyTypes.map((type) => (
            <option key={type}>{type}</option>
          ))}
        </select>
        <select className="select_option form-control" name="area" aria-label="Area From">
          <option>Area From</option>
          {areaOptions.map((area) => (
            <option key={area}>{area}</option>
          ))}
        </select>
        <select className="select_option form-control" name="bedrooms" aria-label="Bedrooms">
          <option>Bedrooms</option>
          {bedroomOptions.map((count) => (
            <option key={count}>{count}</option>
          ))}
        </select>
        <select className="select_option form-control" name="bathrooms" aria-label="Bathrooms">
          <option>Bathrooms</option>
          {bathroomOptions.map((count) => (
            <option key={count}>{count}</option>
          ))}
        </select>
        <select className="select_option form-control" name="location" aria-label="Locations">
          <option>Locations</option>
          {locations.map((location) => (
            <option key={location}>{location}</option>
          ))}
        </select>
        <button className="btn btn-primary search__submit" type="submit">
          <i className="fa fa-search"></i>
          <span>search</span>
        </button>
      </form>
    </div>
  );
}

export default SearchFilter;
