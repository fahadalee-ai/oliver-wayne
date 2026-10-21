import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { propertyTypes, locations } from "../../data/filters";

function PropertyDetailFilter() {
  const navigate = useNavigate();
  const [status, setStatus] = useState("");
  const [type, setType] = useState("");
  const [area, setArea] = useState("");
  const [location, setLocation] = useState("");
  const [beds, setBeds] = useState("");
  const [baths, setBaths] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  function onSubmit(event) {
    event.preventDefault();
    const params = new URLSearchParams();
    const values = { status, type, area, location, beds, baths, minPrice, maxPrice };
    Object.entries(values).forEach(([key, value]) => {
      if (value) params.set(key, value);
    });
    navigate(`/properties?${params.toString()}`);
  }

  return (
    <form className="products__filter mb-30" onSubmit={onSubmit}>
      <div className="products__filter__group">
        <div className="products__filter__header">
          <h5 className="text-center text-capitalize">property filter</h5>
        </div>
        <div className="products__filter__body">
          <div className="form-group">
            <label className="sr-only" htmlFor="detail-status">Property status</label>
            <select id="detail-status" className="form-control" value={status} onChange={(event) => setStatus(event.target.value)}>
              <option value="">Property status</option>
              <option>For Sale</option>
              <option>For Rent</option>
            </select>
          </div>
          <div className="form-group">
            <label className="sr-only" htmlFor="detail-type">Property type</label>
            <select id="detail-type" className="form-control" value={type} onChange={(event) => setType(event.target.value)}>
              <option value="">Property type</option>
              {propertyTypes.map((item) => (
                <option key={item}>{item}</option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label className="sr-only" htmlFor="detail-area">Minimum area</label>
            <select id="detail-area" className="form-control" value={area} onChange={(event) => setArea(event.target.value)}>
              <option value="">Area from</option>
              {["1500", "1200", "900", "600", "300", "100"].map((item) => (
                <option key={item}>{item}</option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label className="sr-only" htmlFor="detail-location">Location</label>
            <select id="detail-location" className="form-control" value={location} onChange={(event) => setLocation(event.target.value)}>
              <option value="">Locations</option>
              {locations.map((item) => (
                <option key={item}>{item}</option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label className="sr-only" htmlFor="detail-beds">Bedrooms</label>
            <select id="detail-beds" className="form-control" value={beds} onChange={(event) => setBeds(event.target.value)}>
              <option value="">Bedrooms</option>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => (
                <option key={n}>{n}</option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label className="sr-only" htmlFor="detail-baths">Bathrooms</label>
            <select id="detail-baths" className="form-control" value={baths} onChange={(event) => setBaths(event.target.value)}>
              <option value="">Bathrooms</option>
              {[1, 2, 3, 4, 5].map((n) => (
                <option key={n}>{n}</option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label className="mb-3">Price range</label>
            <div className="row">
              <div className="col-6">
                <label className="sr-only" htmlFor="detail-min-price">Minimum price</label>
                <input
                  id="detail-min-price"
                  type="number"
                  min="0"
                  className="form-control"
                  placeholder="Min"
                  value={minPrice}
                  onChange={(event) => setMinPrice(event.target.value)}
                />
              </div>
              <div className="col-6">
                <label className="sr-only" htmlFor="detail-max-price">Maximum price</label>
                <input
                  id="detail-max-price"
                  type="number"
                  min="0"
                  className="form-control"
                  placeholder="Max"
                  value={maxPrice}
                  onChange={(event) => setMaxPrice(event.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="products__filter__footer">
          <div className="form-group mb-0">
            <button type="submit" className="btn btn-primary text-capitalize btn-block">
              <i className="fa fa-search mr-1"></i> search property
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}

export default PropertyDetailFilter;
