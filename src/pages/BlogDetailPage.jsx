import { useParams, Link } from "react-router-dom";
import PageBanner from "../components/layout/StickyHeader/PageBanner";
import BlogDetail from "../components/Blog/BlogDetail";
import BlogSidebar from "../components/Blog/BlogSidebar";
import { blogs, defaultBlogDetail } from "../data/blogs";
import { img } from "../utils/asset";

function BlogDetailPage() {
  const { id } = useParams();
  const blog = blogs.find((item) => String(item.id) === id);
  if (!blog) {
    return (
      <section className="container py-5">
        <p>Post not found.</p>
        <Link to="/blogs">Back to blog</Link>
      </section>
    );
  }
  const post = { ...defaultBlogDetail, ...blog };
  return (
    <>
      <PageBanner
        title="blog"
        items={[{ label: "blogs", to: "/blogs" }, { label: blog.title }]}
        image={img("aboutback.jpg")}
      />
      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <BlogDetail {...post} />
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

export default BlogDetailPage;
