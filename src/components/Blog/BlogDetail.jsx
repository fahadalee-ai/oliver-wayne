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
            <span>by </span>
            <a href="javascript:void(0)">{authorName},</a>
          </li>
          <li className="list-inline-item">
            <span className="text-dark text-capitalize ml-1">{date}</span>
          </li>
          <li className="list-inline-item">
            <span className="text-dark text-capitalize ml-1">in </span>
            <a href="javascript:void(0)">{category}</a>
          </li>
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
      <div className="blog__tags mb-4">
        <ul className="list-inline">
          {tags.map((tag) => (
            <li className="list-inline-item" key={tag}>
              <a href="javascript:void(0)">#{tag}</a>
            </li>
          ))}
        </ul>
      </div>
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
            <h5>{authorName}</h5>
            <p>{authorBio}</p>
            <ul className="list-inline">
              <li className="list-inline-item">
                <a href="javascript:void(0)" className="btn btn-social btn-social-o facebook ">
                  <i className="fa fa-facebook"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="javascript:void(0)" className="btn btn-social btn-social-o twitter ">
                  <i className="fa fa-twitter"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="javascript:void(0)" className="btn btn-social btn-social-o instagram ">
                  <i className="fa fa-instagram"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="javascript:void(0)" className="btn btn-social btn-social-o telegram ">
                  <i className="fa fa-telegram"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="javascript:void(0)" className="btn btn-social btn-social-o linkedin ">
                  <i className="fa fa-linkedin"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <div className="single_navigation-prev">
            <a href="javascript:void(0)">
              <span>previous post</span>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem,
              similique.
            </a>
          </div>
        </div>
        <div className="col-md-6">
          <div className="single_navigation-next text-left text-md-right">
            <a href="javascript:void(0)">
              <span>next post</span>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Perferendis, nesciunt.
            </a>
          </div>
        </div>
      </div>
      <div className="clearfix"></div>
    </div>
  );
}

export default BlogDetail;
