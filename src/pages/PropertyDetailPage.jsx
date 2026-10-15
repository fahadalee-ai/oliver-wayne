import { useParams, Link } from "react-router-dom";
import Breadcrumb from "../components/layout/StickyHeader/Breadcrumb";
import PropertyDetailHeader from "../components/Property/PropertyDetailHeader";
import PropertyDetailGallery from "../components/Property/PropertyDetailGallery";
import PropertyDetailContent from "../components/Property/PropertyDetailContent";
import PropertyDetailSidebar from "../components/Property/PropertyDetailSidebar";
import { propertyListings, defaultPropertyDetail } from "../data/propertyListings";
import PropertySimilar from "../components/Property/PropertySimilar";

function PropertyDetailPage() {
    const { id } = useParams();
    const property = propertyListings.find((p) => String(p.id) === id);
    if (!property) {
        return (
            <section className="container py-5">
                <p>Property not found.</p>
                <Link to="/properties">Back to properties</Link>
            </section>
        );
    }

    const detail = { ...defaultPropertyDetail, ...property };
    const similar = propertyListings.filter((p) => String(p.id) !== id).slice(0, 6);

    return (
        <>
            <Breadcrumb
                items={[
                    { label: "Properties", to: "/properties" },
                    { label: detail.title },
                ]}
            />
            <PropertyDetailHeader {...detail} />
            <PropertyDetailGallery images={detail.galleries} />
            <section className="single__Detail">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <PropertyDetailContent {...detail} />
                        </div>
                        <div className="col-lg-4">
                            <PropertyDetailSidebar {...detail} />
                        </div>
                    </div>
                    <PropertySimilar properties={similar} />
                </div>
            </section>
        </>
    );
}

export default PropertyDetailPage;
