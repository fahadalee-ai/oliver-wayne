import { Link } from "react-router-dom";

function PropertyCard({ id, title, price, image, baths, beds, rooms, area, badges = [] }) {
    const content = (
            <div className="card__image-hover h-250">
                <div className="card__image-hover-overlay">
                    <div className="listing-badges">
                        {badges.map((badge, index) => (
                            <span key={index} className={badge === 'Featured' ? 'featured' : ''}>
                                {badge}
                            </span>
                        ))}
                    </div>
                    <div className="card__image-content">
                        <div className="card__image-content-desc">
                            <h6>{title}</h6>
                            <p className="mb-0">{price}</p>
                        </div>
                        <ul className="list-inline card__hidden-content">
                            <li className="list-inline-item">
                                Baths
                                <span>
                                    <i className="fa fa-bath"></i>
                                    {baths}
                                </span>
                            </li>
                            <li className="list-inline-item">
                                Beds
                                <span>
                                    <i className="fa fa-bed"></i>
                                    {beds}
                                </span>
                            </li>
                            <li className="list-inline-item">
                                Rooms
                                <span>
                                    <i className="fa fa-inbox"></i>
                                    {rooms}
                                </span>
                            </li>
                            <li className="list-inline-item">
                                Area
                                <span>
                                    <i className="fa fa-map"></i>
                                    {area}
                                </span>
                            </li>

                        </ul>
                    </div>
                    <img alt={title} src={image} className="img-fluid h-40 " />
                </div>
            </div>
    );

    if (id) {
        return <Link to={`/property/${id}`}>{content}</Link>;
    }

    return <a href="javascript:void(0)">{content}</a>;
}

export default PropertyCard;
