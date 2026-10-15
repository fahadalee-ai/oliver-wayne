function CategoryList({
  title = "Property Categories",
  categories = [],
}) {
  return (
    <aside className="wrapper__list__category">
      <div className="widget widget__archive">
        <div className="widget__title">
          <h5 className="text-dark mb-0 text-center">{title}</h5>
        </div>
        <ul className="list-unstyled">
          {categories.map((cat) => (
            <li key={cat.id}>
              <a href="javascript:void(0)" className="text-capitalize">
                {cat.name}
                <span className="badge badge-primary">{cat.count}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}

export default CategoryList;
