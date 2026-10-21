import { useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { blogs } from "../../data/blogs";
import { recentNews, blogTags } from "../../data/blogSidebar";

function BlogSidebar() {
    const navigate = useNavigate();
    const [params] = useSearchParams();
    const paramQuery = params.get("q") || "";
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
        <div className="sticky-top">
            <aside>
                <div className="widget__sidebar">
                    <div className="widget__sidebar__header">
                        <h6 className="text-capitalize">search</h6>
                    </div>
                    <div className="widget__sidebar__body">
                        <form className="input-group" onSubmit={onSearch}>
                            <label className="sr-only" htmlFor="blog-search">Search articles</label>
                            <input
                                id="blog-search"
                                type="search"
                                className="form-control"
                                placeholder="Search article . . ."
                                value={query}
                                onChange={(event) => setQuery(event.target.value)}
                            />
                            <span className="input-group-btn">
                                <button type="submit" className="btn-search btn" aria-label="Search articles">
                                    <i className="fa fa-search"></i>
                                </button>
                            </span>
                        </form>
                    </div>
                </div>
            </aside>
            <aside>
                <div className="widget__sidebar">
                    <div className="widget__sidebar__header">
                        <h6 className="text-capitalize">category</h6>
                    </div>
                    <div className="widget__sidebar__body">
                        <ul className="list-unstyled">
                            {categories.map((name) => (
                                <li key={name}>
                                    <Link
                                        to={`/blogs?category=${encodeURIComponent(name)}`}
                                        className="text-capitalize"
                                    >
                                        {name}
                                        <span className="badge badge-primary">
                                            {blogs.filter((blog) => blog.category === name).length}
                                        </span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </aside>
            <aside>
                <div className="widget__sidebar">
                    <div className="widget__sidebar__header">
                        <h6 className="text-capitalize">recents news</h6>
                    </div>
                    <div className="widget__sidebar__body">
                        {recentNews.map((item) => (
                            <div className="widget__sidebar__body-img" key={item.id}>
                                <img src={item.image} alt="" className="img-fluid" />
                                <div className="widget__sidebar__body-heading">
                                    <h6 className="text-capitalize">
                                        <Link to={`/blog/${item.id}`}>{item.title}</Link>
                                    </h6>
                                </div>
                                <span className="badge badge-secondary p-1 text-capitalize mb-1">
                                    {item.date}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </aside>
            <aside>
                <div className="widget__sidebar">
                    <div className="widget__sidebar__header">
                        <h6 className="text-capitalize">tags</h6>
                    </div>
                    <div className="widget__sidebar__body">
                        <div className="blog__tags p-0">
                            <ul className="list-inline">
                                {blogTags.map((tag) => (
                                    <li className="list-inline-item" key={tag}>
                                        <Link to={`/blogs?tag=${encodeURIComponent(tag)}`}>#{tag}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </aside>
        </div>
    )
}

export default BlogSidebar
