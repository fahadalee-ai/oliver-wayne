import { blogCategories, recentNews, blogTags, } from "../../data/blogSidebar";

function BlogSidebar() {
    return (
        <div className="sticky-top">
            <aside>
                <div className="widget__sidebar">
                    <div className="widget__sidebar__header">
                        <h6 className="text-capitalize">search</h6>
                    </div>
                    <div className="widget__sidebar__body">
                        <div className="input-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Search article . . ."
                            />
                            <span className="input-group-btn">
                                <button type="button" className="btn-search btn">
                                    <i className="fa fa-search"></i>
                                </button>
                            </span>
                        </div>
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
                            {blogCategories.map((cat) => (
                                <li key={cat.id}>
                                    <a href="javascript:void(0)" className="text-capitalize">
                                        {cat.name}
                                        <span className="badge badge-primary">{cat.count}</span>
                                    </a>
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
                                    <h6 className="text-capitalize">{item.title}</h6>
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
                                        <a href="javascript:void(0)">#{tag}</a>
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