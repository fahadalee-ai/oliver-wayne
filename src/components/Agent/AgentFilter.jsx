import { propertyTypes, locations } from "../../data/filters";

function AgentFilter() {
  return (
    <div className="products__filter mb-30">
      <div className="products__filter__group">
        <div className="products__filter__header">
          <h5 className="text-center text-capitalize">find agents</h5>
        </div>
        <div className="products__filter__body">
          <div className="form-group">
            <label>Enter Agent name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter agent name"
            />
          </div>
          <div className="form-group">
            <label>Property Categories</label>
            <select className="select_option wide form-control" defaultValue="">
              <option value="" disabled>
                Property Categories
              </option>
              {propertyTypes.map((type) => (
                <option key={type}>{type}</option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label>All Cities</label>
            <select className="select_option wide form-control" defaultValue="">
              <option value="" disabled>
                All Cities
              </option>
              {locations.map((location) => (
                <option key={location}>{location}</option>
              ))}
            </select>
          </div>
          <button
            type="button"
            className="btn btn-primary text-capitalize btn-block"
          >
            search agents <i className="fa fa-search ml-1"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default AgentFilter;
