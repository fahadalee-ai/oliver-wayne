import { propertyTypes, locations } from "../../data/filters";

function PropertyDetailFilter() {
  return (
    <div className="products__filter mb-30">
      <div className="products__filter__group">
        <div className="products__filter__header">
          <h5 className="text-center text-capitalize">property filter</h5>
        </div>
        <div className="products__filter__body">
          <div className="form-group">
            <select className="wide select_option form-control" defaultValue="">
              <option value="" disabled>
                Property Status
              </option>
              <option>For Sale</option>
              <option>For Rent</option>
            </select>
          </div>
          <div className="form-group">
            <select className="wide select_option form-control" defaultValue="">
              <option value="" disabled>
                Property Type
              </option>
              {propertyTypes.map((type) => (
                <option key={type}>{type}</option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <select className="wide select_option form-control" defaultValue="">
              <option value="" disabled>
                Area From
              </option>
              <option>1500</option>
              <option>1200</option>
              <option>900</option>
              <option>600</option>
              <option>300</option>
              <option>100</option>
            </select>
          </div>
          <div className="form-group">
            <select className="wide select_option form-control" defaultValue="">
              <option value="" disabled>
                Locations
              </option>
              {locations.map((location) => (
                <option key={location}>{location}</option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <select className="wide select_option form-control" defaultValue="">
              <option value="" disabled>
                Bedrooms
              </option>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => (
                <option key={n}>{n}</option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <select className="wide select_option form-control" defaultValue="">
              <option value="" disabled>
                Bathrooms
              </option>
              {[1, 2, 3, 4, 5].map((n) => (
                <option key={n}>{n}</option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label className="mb-3">Price range</label>
            <div className="row">
              <div className="col-6">
                <input
                  type="number"
                  className="form-control"
                  placeholder="Min"
                  defaultValue={1300}
                />
              </div>
              <div className="col-6">
                <input
                  type="number"
                  className="form-control"
                  placeholder="Max"
                  defaultValue={7600}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="products__filter__footer">
          <div className="form-group mb-0">
            <button
              type="button"
              className="btn btn-primary text-capitalize btn-block"
            >
              <i className="fa fa-search mr-1"></i> search property
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PropertyDetailFilter;
