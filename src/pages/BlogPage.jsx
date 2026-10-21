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
        title="Blog"
        items={[{ label: "Blog" }]}
        image={img("blog-gulf.jpg")}
      />
      <section className="blog-page">
        <div className="container blog-page__layout">
          <div>
            {filtering && (
              <p className="blog-page__status">
                {results.length} article{results.length === 1 ? "" : "s"}
                {category ? ` in ${category}` : ""}
                {tag ? ` tagged ${tag}` : ""}
                {query ? ` matching “${params.get("q").trim()}”` : ""}.{" "}
                <button type="button" onClick={() => setParams({})}>
                  Clear
                </button>
              </p>
            )}
            {!filtering && results[0] && <BlogCard {...results[0]} layout="feature" />}
            {results.length === 0 && <p className="blog-page__empty">No articles match this search.</p>}
            <div className="blog-page__grid">
              {(filtering ? results : results.slice(1)).map((blog) => (
                <BlogCard {...blog} key={blog.id} />
              ))}
            </div>
          </div>
          <BlogSidebar />
        </div>
      </section>
    </>
  );
}

export default BlogPage;
