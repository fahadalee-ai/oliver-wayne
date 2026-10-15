import { useState } from "react";
import { propertyListings } from "../../data/propertyListings";
import PropertyListCard from "../cards/PropertyListCard";
import Stars from "../Shared/Stars";

function AgentDetailTabs({
    descriptionTitle,
    description = [],
    listingIds = [],
    reviews = [],
}) {

    const [tab, setTab] = useState("description");
    const [expanded, setExpanded] = useState(false);
    const agentProperties = propertyListings.filter((p) =>
        listingIds.includes(p.id)
    );

    return (
        <div className="single__detail-features tabs__custom">
            <h5 className="text-capitalize detail-heading">Agent details</h5>
            <ul className="nav nav-pills myTab" role="tablist">
                <li className="nav-item">
                    <button
                        type="button"
                        className={`nav-link btn btn-block ${tab === "description" ? "active" : ""}`}
                        onClick={() => setTab("description")}
                    >
                        Description
                    </button>
                </li>
                <li className="nav-item">
                    <button
                        type="button"
                        className={`nav-link btn btn-block ${tab === "listing" ? "active" : ""}`}
                        onClick={() => setTab("listing")}
                    >
                        Listing
                    </button>
                </li>
                <li className="nav-item">
                    <button
                        type="button"
                        className={`nav-link btn btn-block ${tab === "reviews" ? "active" : ""}`}
                        onClick={() => setTab("reviews")}
                    >
                        Reviews
                    </button>
                </li>
            </ul>
            <div className="tab-content" id="myTabContent">
                {tab === "description" && (
                    <div className="single__detail-desc">
                        <h5 className="text-capitalize detail-heading">{descriptionTitle}</h5>
                        <div className={`show__more ${expanded ? "visible" : ""}`}>
                            {description.map((text, index) => (
                                <p key={index}>{text}</p>
                            ))}
                            {!expanded && (
                                <a
                                    href="javascript:void(0)"
                                    className="show__more-button"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setExpanded(true);
                                    }}
                                >
                                    read more
                                </a>
                            )}
                        </div>
                    </div>
                )}
                {tab === "listing" && (
                    <div className="row">
                        {agentProperties.map((property) => (
                            <div className="col-lg-12" key={property.id}>
                                <PropertyListCard {...property} layout="list" />
                            </div>
                        ))}
                    </div>
                )}
                {tab === "reviews" && (
                    <div className="single__detail-features-review">
                        {reviews.map((review) => (
                            <div className="media mt-4" key={review.id}>
                                <img
                                    src={review.image}
                                    alt={review.name}
                                    className="img-fluid rounded-circle mr-3"
                                />
                                <div className="media-body">
                                    <h6 className="mt-0">{review.name}</h6>
                                    <span className="mb-3">{review.date}</span>
                                    <Stars rating={review.rating} />
                                    <p>{review.text}</p>
                                    {review.replies?.map((reply) => (
                                        <div className="media mt-4" key={reply.id}>
                                            <a className="pr-3" href="javascript:void(0)">
                                                <img
                                                    src={reply.image}
                                                    alt={reply.name}
                                                    className="img-fluid rounded-circle"
                                                />
                                            </a>
                                            <div className="media-body">
                                                <h6 className="mt-0">{reply.name}</h6>
                                                <span className="mb-3">{reply.date}</span>
                                                <Stars rating={reply.rating} />
                                                <p>{reply.text}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                        <hr />
                        <div className="row">
                            <div className="col-md-12">
                                <p className="mb-2">Your rating for this listing:</p>
                                <Stars rating={3} />
                                <div className="form-group">
                                    <label>Your Name</label>
                                    <input type="text" className="form-control" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label>What's your Email?</label>
                                    <input type="email" className="form-control" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label>Subject</label>
                                    <input type="text" className="form-control" />
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="form-group">
                                    <label>Your message</label>
                                    <textarea className="form-control" rows="4"></textarea>
                                </div>
                            </div>
                        </div>
                        <button type="button" className="btn btn-primary float-right">
                            Submit review <i className="fa fa-paper-plane ml-2"></i>
                        </button>
                        <div className="clearfix"></div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default AgentDetailTabs