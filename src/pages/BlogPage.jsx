import BlogSidebar from "../components/Blog/BlogSidebar";
import BlogCard from "../components/cards/BlogCard";
import PageBanner from "../components/layout/StickyHeader/PageBanner";
import { blogs } from "../data/blogs";
import { img } from "../utils/asset";

function BlogPage() {
  return (
    <>
      <PageBanner
        title="blog"
        items={[{ label: "blog Listing" }]}
        image={img("aboutback.jpg")}
      />
      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="row">
                {blogs.map((blog) => (
                  <div className="col-md-6 col-lg-6 mb-4 d-flex" key={blog.id}>
                    <BlogCard {...blog} />
                  </div>
                ))}
              </div>
            </div>
            <div className="col-lg-4">
              <BlogSidebar />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default BlogPage;
