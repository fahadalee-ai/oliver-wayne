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
                <li><a href="javascript:void(0)" title="">Career</a></li>
                <li><a href="javascript:void(0)" title="">Contact Us</a></li>
                <li><a href="javascript:void(0)" title="">Login / Register</a></li>
              </ul>
              <ul className="topbar-sosmed">
                <li><a href="javascript:void(0)"><i className="fa fa-facebook"></i></a></li>
                <li><a href="javascript:void(0)"><i className="fa fa-twitter"></i></a></li>
                <li><a href="javascript:void(0)"><i className="fa fa-instagram"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Topbar
