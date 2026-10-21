import { Link } from "react-router-dom";

function BlogCard({
  title,
  excerpt,
  image,
  badge,
  authorName,
  authorImage,
  date,
  id,
  layout = "card",
}) {
  return (
    <article className={`blog-card${layout === "feature" ? " blog-card--feature" : ""}`}>
      <Link to={`/blog/${id}`} className="blog-card__media">
        <img src={image} alt="" />
        {badge ? <span>{badge}</span> : null}
      </Link>
      <div className="blog-card__body">
        {badge && layout === "feature" ? <p className="blog-card__kicker">{badge}</p> : null}
        <h2>
          <Link to={`/blog/${id}`}>{title}</Link>
        </h2>
        <p>{excerpt}</p>
        <div className="blog-card__meta">
          <img src={authorImage} alt="" />
          <span>{authorName}</span>
          {date ? <time>{date}</time> : null}
        </div>
      </div>
    </article>
  );
}

export default BlogCard;
