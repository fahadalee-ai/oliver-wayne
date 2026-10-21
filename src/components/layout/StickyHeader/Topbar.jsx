import { Link } from "react-router-dom";
import { formattedDate } from "../../../utils/date";

function Topbar() {
  return (
    <div className="topbar d-none d-sm-block">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-5">
            <div className="topbar-left">
              <div className="topbar-text">{formattedDate()}</div>
            </div>
          </div>
          <div className="col-sm-12 col-md-7">
            <div className="list-unstyled topbar-right">
              <ul className="topbar-link">
                <li><Link to="/contact">Contact Us</Link></li>
              </ul>
              <ul className="topbar-sosmed">
                <li><span aria-hidden="true"><i className="fa fa-facebook"></i></span></li>
                <li><span aria-hidden="true"><i className="fa fa-twitter"></i></span></li>
                <li><span aria-hidden="true"><i className="fa fa-instagram"></i></span></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Topbar
