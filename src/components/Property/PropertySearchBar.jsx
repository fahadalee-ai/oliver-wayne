import { propertyTypes, locations } from "../../data/filters";

function PropertySearchBar() {
  return (
    <div className="search__area bg__shadow">
      <div className="container">
        <div className="search__area-inner">
          <div className="row">
            <div className="col-6 col-lg-3 col-md-3">
              <div className="form-group">
                <select className="wide select_option form-control">
                  <option data-display="Property Status">Property Status</option>
                  <option>For Sale</option>
                  <option>For Rent</option>
                </select>
              </div>
            </div>
            <div className="col-6 col-lg-3 col-md-3">
              <div className="form-group">
                <select className="wide select_option form-control">
                  <option data-display="Property Type">Property Type</option>
                  {propertyTypes.map((type) => (
                    <option key={type}>{type}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="col-6 col-lg-3 col-md-3">
              <div className="form-group">
                <select className="wide select_option form-control">
                  <option data-display="Area From">Area From </option>
                  <option>1500</option>
                  <option>1200</option>
                  <option>900</option>
                  <option>600</option>
                  <option>300</option>
                  <option>100</option>
                </select>
              </div>
            </div>
            <div className="col-6 col-lg-3 col-md-3">
              <div className="form-group">
                <select className="wide select_option form-control">
                  <option data-display="Locations">Locations</option>
                  {locations.map((location) => (
                    <option key={location}>{location}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="col-6 col-lg-3 col-md-3">
              <div className="form-group">
                <select className="wide select_option form-control">
                  <option data-display="Bedrooms">Bedrooms</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  <option>6</option>
                  <option>7</option>
                  <option>8</option>
                  <option>9</option>
                </select>
              </div>
            </div>
            <div className="col-6 col-lg-3 col-md-3">
              <div className="form-group">
                <select className="wide select_option form-control">
                  <option data-display="Bedrooms">Bedrooms</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  <option>6</option>
                  <option>7</option>
                  <option>8</option>
                  <option>9</option>
                </select>
              </div>
            </div>
            <div className="col-6 col-lg-3 col-md-3">
              <div className="form-group">
                <select className="wide select_option form-control">
                  <option data-display="Bathrooms">Bathrooms</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                </select>
              </div>
            </div>
            <div className="col-12 col-lg-3 col-md-3">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Price range"
                />
              </div>
            </div>
            <div className="col-12 col-lg-3 col-md-3">
              <div className="form-group">
                <button className="btn btn-primary text-uppercase btn-block">
                  {" "}
                  search <i className="fa fa-search ml-1"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PropertySearchBar;
