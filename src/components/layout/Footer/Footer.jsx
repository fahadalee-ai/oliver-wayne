import { Link } from "react-router-dom";
import CallToAction from "../../sections/CallToAction/CallToAction";
import { img } from "../../../utils/asset";
import { propertyTypes } from "../../../data/filters";

function Footer({ variant = "solid" }) {
  const isImage = variant === "image";

  return (
    <>
      <CallToAction />
      <footer>
        <div
          className={`wrapper__footer ${isImage ? "bg-theme-footer" : "bg__footer"}`}
        >
          <div className=" container">
            <div className="row">
              <div className="col-md-4">
                <div className="widget__footer mb-3">
                  {/*  <h4 className="footer-title">company info</h4>  */}
                  <figure>
                    <img
                      src={img("logo_white_horizontal.png")}
                      alt="logo"
                      className="logo-footer"
                    />
                  </figure>
                  <p>
                    Oliver Wayne is built for people who need a comprehensive
                    list of all temporary lodging options in a single area.
                  </p>
                </div>
                <div className="border-line"></div>
                <div className="widget__footer">
                  <h4 className="footer-title">follow us </h4>
                  {/*  <p>
                        Follow us and stay in touch to get the latest news
                    </p>  */}
                  <p>
                    <button className="btn btn-social btn-social-o facebook mr-1">
                      <i className="fa fa-facebook-f"></i>
                    </button>
                    <button className="btn btn-social btn-social-o twitter mr-1">
                      <i className="fa fa-twitter"></i>
                    </button>

                    <button className="btn btn-social btn-social-o linkedin mr-1">
                      <i className="fa fa-linkedin"></i>
                    </button>
                    <button className="btn btn-social btn-social-o instagram mr-1">
                      <i className="fa fa-instagram"></i>
                    </button>

                    <button className="btn btn-social btn-social-o youtube mr-1">
                      <i className="fa fa-youtube"></i>
                    </button>
                  </p>
                </div>
              </div>

              {/*  QUICK LINKS  */}
              <div className="col-md-4">
                <div className="widget__footer">
                  <h4 className="footer-title">Quick Links</h4>
                  <div className="link__category">
                    <ul className="list-unstyled ">
                      {propertyTypes.map((type) => (
                        <li className="list-inline-item" key={type}>
                          <Link to="/properties">{type}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/*  NEWSLETTERS  */}
              <div className="col-md-4">
                <div className="widget__footer">
                  <h4 className="footer-title">newsletter</h4>
                  {/*  Form Newsletter  */}

                  <div className="widget__form-newsletter ">
                    <p>
                      Don’t miss to subscribe to our news feeds, kindly fill the
                      form below
                    </p>
                    <div className="mt-3">
                      <input
                        type="text"
                        className="form-control mb-2"
                        placeholder="Your email address"
                      />

                      <button
                        className="btn btn-primary btn-block text-capitalize"
                        type="button"
                      >
                        subscribe
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              {/*  END NEWSLETTER  */}
            </div>
          </div>
        </div>

        {/*  Footer Bottom  */}
        <div className={isImage ? "bg__footer-bottom-v1" : "bg__footer-bottom"}>
          <div className="container">
            <div className="row flex-column-reverse flex-md-row">
              <div className="col-md-6">
                <span>
                  © 2026 Oliver Wayne LLC
                </span>
              </div>
              <div className="col-md-6">
                <ul className="list-inline ">
                  <li className="list-inline-item">
                    <a href="javascript:void(0)">privacy</a>
                  </li>
                  <li className="list-inline-item">
                    <a href="javascript:void(0)">contact</a>
                  </li>
                  <li className="list-inline-item">
                    <Link to="/about">about</Link>
                  </li>
                  <li className="list-inline-item">
                    <Link to="/property-management">management</Link>
                  </li>
                  <li className="list-inline-item">
                    <a href="javascript:void(0)">faq</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
