function PropertyDetailHeader({ title, location, price }) {
    return (
        <div className="single__detail-area">
            <div className="container">
                <div className="row">
                    <div className="col-md-9 col-lg-8">
                        <div className="single__detail-area-title">
                            <h1 className="text-capitalize h3">{title}</h1>
                            <p>{location}</p>
                        </div>
                    </div>
                    <div className="col-md-3 col-lg-4">
                        <div className="single__detail-area-price">
                            <h4 className="text-capitalize text-gray">{price}</h4>
                            <button type="button" className="btn btn-primary" onClick={() => window.print()}>
                                Print
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PropertyDetailHeader;
