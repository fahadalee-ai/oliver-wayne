import Attachment from "../Attachment/Attachment"
import PropertyDetailFilter from "./PropertyDetailFilter"

function PropertyDetailSidebar({
    agentName,
    agentImage,
    agentPhone,
    agentEmail,
    title,
    attachments = [],
}) {
    return (
        <div className="sticky-top">
            <div className="profile__agent mb-30">
                <div className="profile__agent__group">
                    <div className="profile__agent__header">
                        <div className="profile__agent__header-avatar">
                            <figure>
                                <img src={agentImage} alt={agentName} className="img-fluid" />
                            </figure>
                            <ul className="list-unstyled mb-0">
                                <li>
                                    <h5 className="text-capitalize">{agentName}</h5>
                                </li>
                                <li>
                                    <a href={`tel:${agentPhone}`}>
                                        <i className="fa fa-phone-square mr-1"></i>
                                        {agentPhone}
                                    </a>
                                </li>
                                <li>
                                    <a href={`mailto:${agentEmail}`}>
                                        <i className="fa fa-envelope mr-1"></i>
                                        {agentEmail}
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="profile__agent__body">
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Your Name" />
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Phone" />
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Email" />
                        </div>
                        <div className="form-group mb-0">
                            <textarea
                                className="form-control"
                                rows="5"
                                placeholder={`I'm interest in [ ${title} ]`}
                            ></textarea>
                        </div>
                    </div>
                    <div className="profile__agent__footer">
                        <div className="form-group mb-0">
                            <button type="button" className="btn btn-primary text-capitalize btn-block">
                                send message <i className="fa fa-paper-plane ml-1"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <Attachment attachments={attachments} />
            <PropertyDetailFilter />
        </div>
    )
}

export default PropertyDetailSidebar