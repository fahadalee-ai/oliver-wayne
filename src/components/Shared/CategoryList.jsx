import { Link } from "react-router-dom";
import { useListings } from "../../listings/useListings";
import { typeMatches } from "../../listings/storage";

function CategoryList({
  title = "Property Categories",
  categories = [],
}) {
  const { listings } = useListings();

  return (
    <aside className="wrapper__list__category">
      <div className="widget widget__archive">
        <div className="widget__title">
          <h5 className="text-dark mb-0 text-center">{title}</h5>
        </div>
        <ul className="list-unstyled">
          {categories.map((cat) => {
            const count = listings.filter((property) =>
              typeMatches(cat.name, property.type)
            ).length;
            return (
              <li key={cat.id}>
                <Link
                  to={`/properties?type=${encodeURIComponent(cat.name)}`}
                  className="text-capitalize"
                >
                  {cat.name}
                  <span className="badge badge-primary">{count}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </aside>
  );
}

export default CategoryList;
