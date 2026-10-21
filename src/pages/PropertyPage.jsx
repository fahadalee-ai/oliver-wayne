import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Breadcrumb from "../components/layout/StickyHeader/Breadcrumb";
import PropertySearchBar from "../components/Property/PropertySearchBar";
import PropertyToolbar from "../components/Property/PropertyToolbar";
import PropertyListCard from "../components/cards/PropertyListCard";
import { useListings } from "../listings/useListings";
import { filterListings, sortListings } from "../listings/storage";

function readFilters(params) {
  return {
    status: params.get("status") || "",
    type: params.get("type") || "",
    location: params.get("location") || "",
    area: params.get("area") || "",
    beds: params.get("beds") || "",
    baths: params.get("baths") || "",
    minPrice: params.get("minPrice") || "",
    maxPrice: params.get("maxPrice") || "",
  };
}

function PropertyPage() {
  const [view, setView] = useState("grid");
  const [sort, setSort] = useState("default");
  const [params, setParams] = useSearchParams();
  const filters = useMemo(() => readFilters(params), [params]);
  const { listings } = useListings();

  const results = useMemo(
    () => sortListings(filterListings(listings, filters), sort),
    [listings, filters, sort]
  );

  function applyFilters(next) {
    const query = new URLSearchParams();
    Object.entries(next).forEach(([key, value]) => {
      if (value) query.set(key, value);
    });
    setParams(query);
  }

  return (
    <>
      <Breadcrumb items={[{ label: "Property Listing" }]} />
      <PropertySearchBar
        key={params.toString()}
        filters={filters}
        onSearch={applyFilters}
      />
      <section>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <PropertyToolbar
                view={view}
                onViewChange={setView}
                sort={sort}
                onSort={setSort}
                count={results.length}
              />
              {results.length === 0 && (
                <p>
                  No properties match these filters. Sample listings use other
                  cities, so a Gulf Coast search can be empty until you add one.{" "}
                  <button
                    type="button"
                    className="btn btn-link p-0"
                    onClick={() => {
                      setSort("default");
                      setParams({});
                    }}
                  >
                    Clear filters
                  </button>
                </p>
              )}
              <div className="row">
                {results.map((property) => (
                  <div
                    className={view === "grid" ? "col-12 col-md-4" : "col-12"}
                    key={property.id}
                  >
                    <PropertyListCard {...property} layout={view} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default PropertyPage;
