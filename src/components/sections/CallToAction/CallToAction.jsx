import { Link } from "react-router-dom";

function CallToAction() {
  return (
    <section className="cta-v1 py-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-9">
            <h2 className="text-uppercase text-white">
              Looking To Rent Or Buy Your Property?
            </h2>
            <p className="text-capitalize text-white">
              Let our experienced team provide seamless, trusted property
              solutions tailored to your needs.
            </p>
          </div>
          <div className="col-lg-3">
            <Link
              to="/properties"
              className="btn btn-light text-uppercase "
            >
              browse properties
              <i className="fa fa-angle-right ml-3 arrow-btn "></i>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CallToAction;
