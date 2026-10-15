import { Link } from "react-router-dom";

function PageBanner({ title, items = [], image }) {
    return (
        <div
            className="bg-theme-overlay"
            style={
                image
                    ? { backgroundImage: `url(${image})` }
                    : undefined
            }
        >
            <section className="section__breadcrumb">
                <div className="container">
                    <div className="row d-flex justify-content-center">
                        <div className="col-md-8 text-center">
                            <h2 className="text-capitalize text-white">{title}</h2>
                            <ul className="list-inline">
                                <li className="list-inline-item">
                                    <Link to="/" className="text-white">
                                        home
                                    </Link>
                                </li>
                                {items.map((item, index) => {
                                    const isLast = index === items.length - 1;
                                    return (
                                        <li key={index} className="list-inline-item">
                                            {isLast || !item.to ? (
                                                <span className="text-white text-capitalize">
                                                    {item.label}
                                                </span>
                                            ) : (
                                                <Link
                                                    to={item.to}
                                                    className="text-white text-capitalize"
                                                >
                                                    {item.label}
                                                </Link>
                                            )}
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default PageBanner