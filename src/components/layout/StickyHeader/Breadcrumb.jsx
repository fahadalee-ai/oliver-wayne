import { Link } from "react-router-dom";

function Breadcrumb({ items = [] }) {
  return (
    <div className="bg-light">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section__breadcrumb-v1">
              <ol className="breadcrumb mb-0 bg-light">

                <li className="breadcrumb-item">
                  <Link to="/">
                    <i className="fa fa-home"></i>
                  </Link>
                </li>

                {items.map((item, index) => {
                  const isLast = index === items.length - 1;

                  return (
                    <li key={index} className={`breadcrumb-item ${isLast ? "active" : ""}`}>

                      {isLast || !item.to ? (
                        <span className="text-capitalize">{item.label}</span>
                      ) : (
                        <Link to={item.to} className="text-capitalize">
                          {item.label}
                        </Link>
                      )}

                    </li>
                  );

                })}

              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Breadcrumb;
