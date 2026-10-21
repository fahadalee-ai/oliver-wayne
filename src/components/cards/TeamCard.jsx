import { Link } from "react-router-dom";

function TeamCard({ id, name, role, image, greeting, bio, layout = "hover" }) {
    if (layout === "plain") {
        return (
            <article className="about-team-card">
                <img alt={name} className="about-team-card__photo" src={image} />
                <div>
                    <h3>{name}</h3>
                    <p className="about-team-card__role">{role}</p>
                    <p>{bio}</p>
                    <Link to={`/agent/${id}`}>Agent profile</Link>
                </div>
            </article>
        );
    }

    return (
        <div className="wrap-agent">
            <div className="team-member">
                <div className="team-img">
                    <img alt="team member" className="img-fluid w-100" src={image} />
                </div>
                <div className="team-hover">
                    <div className="desk">
                        <h5>{greeting}</h5>
                        <p>{bio}</p>
                        <Link className="btn btn-primary" to={`/agent/${id}`}>
                            Agent Profile
                        </Link>
                    </div>
                    <ul className="list-inline s-link mb-0">
                        <li className="list-inline-item">
                            <span aria-hidden="true"><i className="fa fa-facebook"></i></span>
                        </li>
                        <li className="list-inline-item">
                            <span aria-hidden="true"><i className="fa fa-twitter"></i></span>
                        </li>
                        <li className="list-inline-item">
                            <span aria-hidden="true"><i className="fa fa-google-plus"></i></span>
                        </li>
                    </ul>
                </div>
                <div className="team-title">
                    <h6>{name}</h6>
                    <span>{role}</span>
                </div>
            </div>
        </div>
    );
}

export default TeamCard;
