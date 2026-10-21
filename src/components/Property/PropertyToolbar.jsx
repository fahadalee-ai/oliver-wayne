const sortOptions = [
  { id: "default", label: "Featured order" },
  { id: "price-asc", label: "Low to high price" },
  { id: "price-desc", label: "High to low price" },
  { id: "sale", label: "For sale" },
  { id: "rent", label: "For rent" },
];

function PropertyToolbar({ view, onViewChange, sort, onSort, count }) {
  const current = sortOptions.find((option) => option.id === sort) || sortOptions[0];

  return (
    <div className="tabs__custom-v2">
      <ul className="nav nav-pills myTab" role="tablist">
        <li className="list-inline-item mr-auto">
          <span className="title-text">
            {count} {count === 1 ? "property" : "properties"}
          </span>
          <label className="sr-only" htmlFor="property-sort">Sort</label>
          <select
            id="property-sort"
            className="form-control d-inline-block w-auto ml-2"
            value={current.id}
            onChange={(event) => onSort(event.target.value)}
          >
            {sortOptions.map((option) => (
              <option key={option.id} value={option.id}>
                {option.label}
              </option>
            ))}
          </select>
        </li>
        <li className="nav-item">
          <button
            type="button"
            className={`nav-link btn btn-block ${view === "list" ? "active" : ""}`}
            aria-pressed={view === "list"}
            onClick={() => onViewChange("list")}
          >
            <span className="fa fa-th-list"></span>
            <span className="sr-only">List view</span>
          </button>
        </li>
        <li className="nav-item">
          <button
            type="button"
            className={`nav-link btn btn-block ${view === "grid" ? "active" : ""}`}
            aria-pressed={view === "grid"}
            onClick={() => onViewChange("grid")}
          >
            <span className="fa fa-th-large"></span>
            <span className="sr-only">Grid view</span>
          </button>
        </li>
      </ul>
    </div>
  );
}

export default PropertyToolbar;
