import { Link } from "react-router-dom";

function BlogDetail({
  title,
  image,
  authorName,
  authorImage,
  date,
  category,
  content = [],
  quote,
  tags = [],
  authorBio,
  prev,
  next,
}) {
  return (
    <div className="single__blog-detail">
      <h1>{title}</h1>
      <div className="single__blog-detail-info">
        <ul className="list-inline">
          <li className="list-inline-item">
            <figure className="image-profile">
              <img src={authorImage} className="img-fluid" alt={authorName} />
            </figure>
          </li>
          <li className="list-inline-item">
            <span>by {authorName}</span>
          </li>
          <li className="list-inline-item">
            <span className="text-dark text-capitalize ml-1">{date}</span>
          </li>
          {category && (
            <li className="list-inline-item">
              <span className="text-dark text-capitalize ml-1">in </span>
              <Link to={`/blogs?category=${encodeURIComponent(category)}`}>{category}</Link>
            </li>
          )}
        </ul>
      </div>
      <figure>
        <img src={image} className="img-fluid" alt={title} />
      </figure>
      {content.map((paragraph, index) => (
        <p key={index} className={index === 0 ? "drop-cap" : undefined}>
          {paragraph}
        </p>
      ))}
      {quote && (
        <blockquote className="block-quote">
          <p>{quote.text}</p>
          <cite>{quote.cite}</cite>
        </blockquote>
      )}
      {tags.length > 0 && (
        <div className="blog__tags mb-4">
          <ul className="list-inline">
            {tags.map((tag) => (
              <li className="list-inline-item" key={tag}>
                <Link to={`/blogs?tag=${encodeURIComponent(tag)}`}>#{tag}</Link>
              </li>
            ))}
          </ul>
        </div>
      )}
      <div className="wrap__profile">
        <div className="wrap__profile-author">
          <figure>
            <img
              src={authorImage}
              alt={authorName}
              className="img-fluid img-circle"
            />
          </figure>
          <div className="wrap__profile-author-detail">
            <div className="wrap__profile-author-detail-name">author</div>
            <h2 className="h5">{authorName}</h2>
            <p>{authorBio}</p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          {prev && (
            <div className="single_navigation-prev">
              <Link to={`/blog/${prev.id}`}>
                <span>previous post</span>
                {prev.title}
              </Link>
            </div>
          )}
        </div>
        <div className="col-md-6">
          {next && (
            <div className="single_navigation-next text-left text-md-right">
              <Link to={`/blog/${next.id}`}>
                <span>next post</span>
                {next.title}
              </Link>
            </div>
          )}
        </div>
      </div>
      <div className="clearfix"></div>
    </div>
  );
}

export default BlogDetail;
