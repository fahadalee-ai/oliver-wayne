import SearchFilter from "./SearchFilter";

function Hero() {
  return (
    <div className="wrap__intro d-flex align-items-md-center  ">
      <div className="container  ">
        <div className="row align-items-center justify-content-start flex-wrap">
          <div className="col-12">
            <div className="wrap__intro-heading">
              <h1 className="text-capitalize">
                Temporary Lodging for Critical Infrastructure Workers
              </h1>
              <p>
                Browse a comprehensive selection of trusted local lodging
                options designed for qualified professionals working across the
                defense, energy, manufacturing, and other critical
                infrastructure sectors.
              </p>

              <div className="bg__overlay-black p-4">
                <SearchFilter />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
