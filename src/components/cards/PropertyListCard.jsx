import { Link } from "react-router-dom";

function PropertyListCard({
    layout = "grid",
    id,
    title, type, location, price, image,
    agentName, agentImage, baths, beds, rooms, area,
    ribbon, status,
}) {
    if (layout === "grid") {
        return (
            <div className="card__image card__box-v1">
                <div className="card__image-header h-250">
                    <div className="ribbon text-capitalize">{ribbon}</div>
                    <Link to={`/property/${id}`}>
                        <img src={image} alt={title} className="img-fluid w100 img-transition" />
                    </Link>
                    <div className="info">{status}</div>
                </div>
                <div className="card__image-body">
                    <span className="badge badge-primary text-capitalize mb-2">{type}</span>
                    <h6 className="text-capitalize">
                        <Link to={`/property/${id}`}>{title}</Link>
                    </h6>

                    <p className="text-capitalize">
                        <i className="fa fa-map-marker"></i>
                        {location}
                    </p>
                    <ul className="list-inline card__content">
                        <li className="list-inline-item">

                            <span>
                                baths <br />
                                <i className="fa fa-bath"></i> {baths}
                            </span>
                        </li>
                        <li className="list-inline-item">
                            <span>
                                beds <br />
                                <i className="fa fa-bed"></i> {beds}
                            </span>
                        </li>
                        <li className="list-inline-item">
                            <span>
                                rooms <br />
                                <i className="fa fa-inbox"></i> {rooms}
                            </span>
                        </li>
                        <li className="list-inline-item">
                            <span>
                                area <br />
                                <i className="fa fa-map"></i> {area}
                            </span>
                        </li>
                    </ul>
                </div>
                <div className="card__image-footer">
                    <figure>
                        <img src={agentImage} alt={agentName} className="img-fluid rounded-circle" />
                    </figure>
                    <ul className="list-inline my-auto">
                        <li className="list-inline-item ">
                            <span>{agentName}</span>

                        </li>

                    </ul>
                    <ul className="list-inline my-auto ml-auto">
                        <li className="list-inline-item">

                            <h6>{price}</h6>
                        </li>

                    </ul>
                </div>
            </div>
        );
    }
    return (
        <div className="card__image card__box-v1">
            <div className="row no-gutters">
                <div className="col-md-4 col-lg-3 col-xl-4">
                    <div className="card__image__header h-250">
                        <Link to={`/property/${id}`}>
                            <div className="ribbon text-capitalize">{ribbon}</div>
                            <img src={image} alt={title} className="img-fluid w100 img-transition" />
                            <div className="info">{status}</div>
                        </Link>
                    </div>
                </div>
                <div className="col-md-4 col-lg-6 col-xl-5 my-auto">
                    <div className="card__image__body">

                        <span className="badge badge-primary text-capitalize mb-2">{type}</span>
                        <h6>
                            <Link to={`/property/${id}`}>{title}</Link>
                        </h6>
                        <div className="card__image__body-desc">
                            <p className="text-capitalize">
                                <i className="fa fa-map-marker"></i>
                                {location}
                            </p>
                        </div>

                        <ul className="list-inline card__content">
                            <li className="list-inline-item">

                                <span>
                                    baths <br />
                                    <i className="fa fa-bath"></i> {baths}
                                </span>
                            </li>
                            <li className="list-inline-item">
                                <span>
                                    beds <br />
                                    <i className="fa fa-bed"></i> {beds}
                                </span>
                            </li>
                            <li className="list-inline-item">
                                <span>
                                    rooms <br />
                                    <i className="fa fa-inbox"></i> {rooms}
                                </span>
                            </li>
                            <li className="list-inline-item">
                                <span>
                                    area <br />
                                    <i className="fa fa-map"></i> {area}
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-md-4 col-lg-3 col-xl-3 my-auto card__image__footer-first">
                    <div className="card__image__footer">
                        <figure>
                            <img src={agentImage} alt={agentName} className="img-fluid rounded-circle" />
                        </figure>
                        <ul className="list-inline my-auto">
                            <li className="list-inline-item name">
                                <span>{agentName}</span>

                            </li>


                        </ul>
                        <ul className="list-inline my-auto ml-auto price">
                            <li className="list-inline-item ">

                                <h6>{price}</h6>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PropertyListCard