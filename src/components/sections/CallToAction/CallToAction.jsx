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
            <a
              href="javascript:void(0)"
              className="btn btn-light text-uppercase "
            >
              request a quote
              <i className="fa fa-angle-right ml-3 arrow-btn "></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CallToAction;
