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
    <article className="blog-article">
      <header>
        {category ? (
          <p className="blog-article__kicker">
            <Link to={`/blogs?category=${encodeURIComponent(category)}`}>{category}</Link>
          </p>
        ) : null}
        <h1>{title}</h1>
        <div className="blog-article__meta">
          <img src={authorImage} alt="" />
          <span>by {authorName}</span>
          <time>{date}</time>
        </div>
      </header>
      <figure className="blog-article__hero">
        <img src={image} alt="" />
      </figure>
      <div className="blog-article__body">
        {content.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
        {quote ? (
          <blockquote>
            <p>{quote.text}</p>
            <cite>{quote.cite}</cite>
          </blockquote>
        ) : null}
      </div>
      {tags.length > 0 && (
        <ul className="blog-tags">
          {tags.map((tag) => (
            <li key={tag}>
              <Link to={`/blogs?tag=${encodeURIComponent(tag)}`}>{tag}</Link>
            </li>
          ))}
        </ul>
      )}
      <div className="blog-author">
        <img src={authorImage} alt="" />
        <div>
          <p>Author</p>
          <h2>{authorName}</h2>
          <p>{authorBio}</p>
        </div>
      </div>
      <nav className="blog-pager" aria-label="More articles">
        {prev ? (
          <Link to={`/blog/${prev.id}`}>
            <span>Previous</span>
            {prev.title}
          </Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link to={`/blog/${next.id}`} className="blog-pager__next">
            <span>Next</span>
            {next.title}
          </Link>
        ) : null}
      </nav>
    </article>
  );
}

export default BlogDetail;
