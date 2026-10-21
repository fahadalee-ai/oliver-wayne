import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import BlogSidebar from "../components/Blog/BlogSidebar";
import BlogCard from "../components/cards/BlogCard";
import PageBanner from "../components/layout/StickyHeader/PageBanner";
import { blogs } from "../data/blogs";
import { img } from "../utils/asset";

function BlogPage() {
  const [params, setParams] = useSearchParams();
  const query = (params.get("q") || "").trim().toLowerCase();
  const category = params.get("category") || "";
  const tag = params.get("tag") || "";

  const results = useMemo(() => {
    return blogs.filter((blog) => {
      if (category && blog.category !== category) return false;
      if (tag && !(blog.tags || []).includes(tag)) return false;
      if (!query) return true;
      const haystack = `${blog.title} ${blog.excerpt} ${blog.category}`.toLowerCase();
      return haystack.includes(query);
    });
  }, [query, category, tag]);

  const filtering = Boolean(query || category || tag);

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
              {filtering && (
                <p>
                  {results.length} article{results.length === 1 ? "" : "s"}
                  {category ? ` in ${category}` : ""}
                  {tag ? ` tagged ${tag}` : ""}
                  {query ? ` matching “${params.get("q").trim()}”` : ""}.{" "}
                  <button
                    type="button"
                    className="btn btn-link p-0"
                    onClick={() => setParams({})}
                  >
                    Clear
                  </button>
                </p>
              )}
              {results.length === 0 && (
                <p>No articles match this search.</p>
              )}
              <div className="row">
                {results.map((blog) => (
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
