function PropertyToolbar({ view, onViewChange }) {
    return (
        <div className="tabs__custom-v2">
            <ul className="nav nav-pills myTab" role="tablist">
                <li className="list-inline-item mr-auto">
                    <span className="title-text">Sort by</span>
                    <div className="btn-group">
                        <a href="javascript:void(0)" className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true"
                            aria-expanded="false">
                            Based Properties
                        </a>
                        <div className="dropdown-menu">
                            <a className="dropdown-item" href="javascript:void(0)">Low to High Price</a>
                            <a className="dropdown-item" href="javascript:void(0)">High to Low Price </a>
                            <a className="dropdown-item" href="javascript:void(0)">Sell Properties</a>

                            <a className="dropdown-item" href="javascript:void(0)">Rent Properties</a>
                        </div>
                    </div>
                </li>
                <li className="nav-item">
                    <button
                        type="button"
                        className={`nav-link btn btn-block ${view === "list" ? "active" : ""}`}
                        onClick={() => onViewChange("list")}
                    >
                        <span className="fa fa-th-list"></span>
                    </button>
                </li>
                <li className="nav-item">
                    <button
                        type="button"
                        className={`nav-link btn btn-block ${view === "grid" ? "active" : ""}`}
                        onClick={() => onViewChange("grid")}
                    >
                        <span className="fa fa-th-large"></span>
                    </button>
                </li>
            </ul>
        </div>
    );
}

export default PropertyToolbar