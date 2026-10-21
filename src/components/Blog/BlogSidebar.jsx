import { useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { blogs } from "../../data/blogs";
import { recentNews, blogTags } from "../../data/blogSidebar";

function BlogSidebar() {
  const navigate = useNavigate();
  const [params] = useSearchParams();
  const paramQuery = params.get("q") || "";
  const activeCategory = params.get("category") || "";
  const activeTag = params.get("tag") || "";
  const [query, setQuery] = useState(paramQuery);
  const [syncedQuery, setSyncedQuery] = useState(paramQuery);
  if (syncedQuery !== paramQuery) {
    setSyncedQuery(paramQuery);
    setQuery(paramQuery);
  }
  const categories = [...new Set(blogs.map((blog) => blog.category))];

  function onSearch(event) {
    event.preventDefault();
    const value = query.trim();
    navigate(value ? `/blogs?q=${encodeURIComponent(value)}` : "/blogs");
  }

  return (
    <aside className="blog-side">
      <section>
        <h2>Search</h2>
        <form onSubmit={onSearch}>
          <label className="sr-only" htmlFor="blog-search">
            Search articles
          </label>
          <input
            id="blog-search"
            type="search"
            placeholder="Search articles"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
          <button type="submit">Search</button>
        </form>
      </section>

      <section>
        <h2>Categories</h2>
        <ul className="blog-side__categories">
          {categories.map((name) => (
            <li key={name}>
              <Link
                to={`/blogs?category=${encodeURIComponent(name)}`}
                aria-current={activeCategory === name ? "true" : undefined}
              >
                <span>{name}</span>
                <span>{blogs.filter((blog) => blog.category === name).length}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Recent articles</h2>
        <ul className="blog-side__recent">
          {recentNews.map((item) => (
            <li key={item.id}>
              <Link to={`/blog/${item.id}`}>
                <img src={item.image} alt="" />
                <span>
                  <strong>{item.title}</strong>
                  <time>{item.date}</time>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Tags</h2>
        <ul className="blog-tags">
          {blogTags.map((tag) => (
            <li key={tag}>
              <Link
                to={`/blogs?tag=${encodeURIComponent(tag)}`}
                aria-current={activeTag === tag ? "true" : undefined}
              >
                {tag}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </aside>
  );
}

export default BlogSidebar;
