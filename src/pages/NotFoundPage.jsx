import { Link } from "react-router-dom";

function NotFoundPage() {
    return (
        <div className="wrap-notfound bg-theme-v8 full-height">
            <div className="container h-100">
                <div className="row align-items-center h-100">
                    <div className="col mx-auto">
                        <div className="notfound-page">
                            <h1>404</h1>
                            <p>
                                Page not found!
                                <br />
                                <span>
                                    Sorry, but the page you were trying to view does not exist.
                                </span>
                                <br />
                            </p>
                            <div className="mt20">
                                <Link className="btn btn-primary" to="/">
                                    <i className="fa fa-reply"></i> Back to home
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NotFoundPage