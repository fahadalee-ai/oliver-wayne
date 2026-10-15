import { Link } from "react-router-dom";

function BlogCard({ title, excerpt, image, badge, authorName, authorImage, id }) {
    return (
        <div className="blog__grid w-100">
            <div className="card__image">
                <div className="card__image-header h-250">
                    <img src={image} alt={title} className="img-fluid w100 img-transition" />
                    <div className="info">{badge}</div>
                </div>
                <div className="card__image-body">
                    <h6 className="text-capitalize">
                        <Link to={`/blog/${id}`}>{title}</Link>
                    </h6>
                    <p className="mb-0">
                        {excerpt}
                    </p>
                </div>
                <div className="card__image-footer">
                    <figure>
                        <img
                            src={authorImage}
                            alt={authorName}
                            className="img-fluid rounded-circle"
                        />
                    </figure>
                    <ul className="list-inline my-auto">
                        <li className="list-inline-item">
                            <a href="javascript:void(0)">
                                {authorName}
                            </a>

                        </li>
                    </ul>
                    <ul className="list-inline my-auto ml-auto">
                        <li className="list-inline-item">
                            <Link to={`/blog/${id}`} className="btn btn-sm btn-primary">
                                <small className="text-white">
                                    read more <i className="fa fa-angle-right ml-1"></i>
                                </small>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default BlogCard