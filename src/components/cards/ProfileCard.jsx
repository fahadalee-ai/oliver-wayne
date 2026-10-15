import { Link } from "react-router-dom";
import ProfileSocialButtons from "../Shared/ProfileSocialButtons";

function ProfileCard({
    variant = "agent",
    layout = "grid",
    id,
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
    const to = isAgency ? `/agency/${id}` : `/agent/${id}`;
    const subtitle = isAgency ? location : role;
    const imageClass = isAgency ? "profile__agency-logo" : "profile__agents-avatar";

    const info = (
        <div className={`profile__${prefix}-info`}>
            <h5 className="text-capitalize">
                <Link to={to}>{name}</Link>
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
            <ProfileSocialButtons showYoutube={isAgency} />
        </div>
    );

    if (layout === "list") {
        return (
            <div className="cards mt-0 mb-4">
                <div className="row">
                    <div className="col-md-6 col-lg-6">
                        <Link to={to} className={imageClass}>
                            <img src={image} alt={name} className="img-fluid" />
                            <div className="total__property-agent">{listingsCount}</div>
                        </Link>
                    </div>
                    <div className="col-md-6 col-lg-6 my-auto">{info}</div>
                </div>
            </div>
        );
    }

    return (
        <div className="cards mt-0 mb-4">
            <div className={`profile__${prefix}-header`}>
                <Link to={to} className={imageClass}>
                    <img src={image} alt={name} className="img-fluid" />
                    <div className="total__property-agent">{listingsCount}</div>
                </Link>
            </div>
            <div className={`profile__${prefix}-body`}>
                {info}
            </div>
        </div>
    );
}

export default ProfileCard;