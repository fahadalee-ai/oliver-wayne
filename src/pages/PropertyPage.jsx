import { useState } from "react";
import Breadcrumb from "../components/layout/StickyHeader/Breadcrumb";
import PropertySearchBar from "../components/Property/PropertySearchBar";
import PropertyToolbar from "../components/Property/PropertyToolbar";
import { propertyListings } from "../data/propertyListings";
import PropertyListCard from "../components/cards/PropertyListCard";

function PropertyPage() {
    const [view, setView] = useState("grid");
    return (
        <>
            <Breadcrumb items={[
                { label: "Property Listing" },
            ]} />
            <PropertySearchBar />
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <PropertyToolbar view={view} onViewChange={setView} />
                            <div className="row">
                                {propertyListings.map((property) => (
                                    <div className={view === "grid" ? "col-md-4 col-lg-4" : "col-lg-12"} key={property.id}>
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
