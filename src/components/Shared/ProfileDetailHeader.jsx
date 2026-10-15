import ProfileSocialButtons from "./ProfileSocialButtons";

function ProfileDetailHeader({
  variant = "agent",
  name,
  role,
  location,
  image,
  listingsCount,
  office,
  mobile,
  fax,
  email,
}) {
  const isAgency = variant === "agency";
  const prefix = isAgency ? "agency" : "agents";
  const subtitle = isAgency ? location : role;
  const imageClass = isAgency
    ? "profile__agency-logo"
    : "profile__agents-avatar";

  return (
    <div className="row no-gutters">
      <div className="col-lg-12 cards mt-0">
        <div className="row">
          <div className="col-md-6 col-lg-6">
            <a href="javascript:void(0)" className={imageClass}>
              <img src={image} alt={name} className="img-fluid" />
              <div className="total__property-agent">{listingsCount}</div>
            </a>
          </div>
          <div className="col-md-6 col-lg-6 my-auto">
            <div className={`profile__${prefix}-info`}>
              <h5 className="text-capitalize">
                <a href="javascript:void(0)">{name}</a>
              </h5>
              <p className="text-capitalize mb-1">{subtitle}</p>
              <ul className="list-unstyled mt-2">
                <li>
                  <a href="javascript:void(0)" className="text-capitalize">
                    <span>
                      <i className="fa fa-building"></i> office :
                    </span>{" "}
                    {office}
                  </a>
                </li>
                <li>
                  <a href={`tel:${mobile}`} className="text-capitalize">
                    <span>
                      <i className="fa fa-phone"></i> mobile :
                    </span>{" "}
                    {mobile}
                  </a>
                </li>
                <li>
                  <a href="javascript:void(0)" className="text-capitalize">
                    <span>
                      <i className="fa fa-fax"></i> fax :
                    </span>{" "}
                    {fax}
                  </a>
                </li>
                <li>
                  <a href={`mailto:${email}`} className="text-capitalize">
                    <span>
                      <i className="fa fa-envelope"></i> email :
                    </span>{" "}
                    {email}
                  </a>
                </li>
              </ul>
              <ProfileSocialButtons showYoutube />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileDetailHeader;