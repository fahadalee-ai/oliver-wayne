
function PropertyDetailHeader({ title, location, price }) {
    return (
        <div className="single__detail-area">
            <div className="container">
                <div className="row">
                    <div className="col-md-9 col-lg-8">
                        <div className="single__detail-area-title">
                            <h3 className="text-capitalize">{title}</h3>
                            <p>{location}</p>
                        </div>
                    </div>
                    <div className="col-md-3 col-lg-4">
                        <div className="single__detail-area-price">
                            <h4 className="text-capitalize text-gray">{price}</h4>
                            <ul className="list-inline">
                                <li className="list-inline-item">
                                    <a href="javascript:void(0)" className="badge badge-primary p-2 rounded">
                                        <i className="fa fa-exchange"></i>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="javascript:void(0)" className="badge badge-primary p-2 rounded">
                                        <i className="fa fa-heart"></i>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="javascript:void(0)" className="badge badge-primary p-2 rounded">
                                        <i className="fa fa-print"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PropertyDetailHeader