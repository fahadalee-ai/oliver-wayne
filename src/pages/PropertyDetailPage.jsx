import { useParams, Link, useNavigate } from "react-router-dom";
import Breadcrumb from "../components/layout/StickyHeader/Breadcrumb";
import PropertyDetailHeader from "../components/Property/PropertyDetailHeader";
import PropertyDetailGallery from "../components/Property/PropertyDetailGallery";
import PropertyDetailContent from "../components/Property/PropertyDetailContent";
import PropertyDetailSidebar from "../components/Property/PropertyDetailSidebar";
import PropertySimilar from "../components/Property/PropertySimilar";
import { useListings } from "../listings/useListings";
import { youtubeId } from "../utils/youtube";
import { agents } from "../data/agents";

function fact(label, value) {
    if (value === undefined || value === null || String(value).trim() === "") return null;
    return { label, value: String(value) };
}

function PropertyDetailPage() {
    const { id } = useParams();
    const navigate = useNavigate();
    const { listings, removeListing } = useListings();
    const property = listings.find((p) => String(p.id) === id);
    if (!property) {
        return (
            <section className="container py-5">
                <p>Property not found.</p>
                <Link to="/properties">Back to properties</Link>
            </section>
        );
    }

    const roomBits = [
        property.beds !== "" && property.beds !== undefined && property.beds !== null ? `${property.beds} bedrooms` : "",
        property.baths !== "" && property.baths !== undefined && property.baths !== null ? `${property.baths} bathrooms` : "",
        property.area || "",
    ].filter(Boolean);
    const matchedAgent = agents.find(
        (agent) => agent.name === (property.contactName || property.agentName)
    );
    const detail = {
        ...property,
        description: property.description?.length
            ? property.description
            : [
                `${property.title} is a ${property.type} in ${property.location}.`,
                `It is listed ${String(property.status).toLowerCase()} at ${property.price}${roomBits.length ? `, with ${roomBits.join(", ")}` : ""}.`,
                property.source === "local"
                    ? "Saved in this browser only. It is not published to a shared website."
                    : "This is sample catalog content. Confirm availability with Oliver Wayne before making plans.",
            ],
        galleries: Array.isArray(property.images) && property.images.length
            ? property.images
            : property.image
              ? [property.image]
              : [],
        floorPlans: [],
        attachments: [],
        nearby: [],
        features: Array.isArray(property.features) ? property.features : [],
        locationMap: null,
        additionalLeft: [
            fact("Living rooms", property.livingRooms),
            fact("Dining rooms", property.diningRooms),
            fact("Kitchens", property.kitchens),
            fact("Flooring", property.flooring),
            fact("Furnished", property.furnished),
        ].filter(Boolean),
        additionalRight: [
            fact("Heating", property.heating),
            fact("Cooling", property.cooling),
            fact("Garage", property.garage),
            fact("Garage size", property.garageSize),
            fact("Parking", property.parking),
        ].filter(Boolean),
        detailLeft: [
            fact("Property ID", property.id),
            fact("Price", property.price),
            fact("Property size", property.area),
            fact("Lot size", property.lotSize),
            fact("Bedrooms", property.beds),
            fact("Bathrooms", property.baths),
        ].filter(Boolean),
        detailRight: [
            fact("Property type", property.type),
            fact("Property status", property.status),
            fact("Location", property.location),
            fact("Address", property.address),
            fact("Rooms", property.rooms ?? property.beds),
            fact("Year built", property.yearBuilt),
            fact("Available", property.available),
        ].filter(Boolean),
        agentName: property.contactName || property.agentName,
        agentPhone: property.contactPhone || property.agentPhone || matchedAgent?.mobile || "",
        agentEmail: property.contactEmail || property.agentEmail || matchedAgent?.email || "",
        agentId: property.source === "local" ? "" : matchedAgent?.id || "",
        youtubeId: youtubeId(property.youtube),
    };
    const similar = listings.filter((p) => String(p.id) !== id).slice(0, 6);

    return (
        <>
            <Breadcrumb
                items={[
                    { label: "Properties", to: "/properties" },
                    { label: detail.title },
                ]}
            />
            <div className="property-page">
                <div className="container">
                    <PropertyDetailHeader {...detail} />
                    {property.source === "local" && (
                        <div className="property-local">
                            <p>This listing is saved in this browser only. It is not published.</p>
                            <div>
                                <Link className="btn btn-primary" to={`/add-listing?edit=${property.id}`}>
                                    Edit listing
                                </Link>
                                <button
                                    type="button"
                                    className="btn btn-outline-primary"
                                    onClick={() => {
                                        if (window.confirm("Remove this listing from this browser?")) {
                                            removeListing(property.id);
                                            navigate("/properties");
                                        }
                                    }}
                                >
                                    Remove listing
                                </button>
                            </div>
                        </div>
                    )}
                    <PropertyDetailGallery images={detail.galleries} title={detail.title} />
                    {detail.youtubeId && (
                        <div className="listing-video">
                            <h2>Video</h2>
                            <div className="listing-video__frame">
                                <iframe
                                    src={`https://www.youtube-nocookie.com/embed/${detail.youtubeId}`}
                                    title={`${detail.title} video`}
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                />
                            </div>
                        </div>
                    )}
                    <div className="property-page__layout">
                        <PropertyDetailContent {...detail} />
                        <PropertyDetailSidebar {...detail} />
                    </div>
                    <PropertySimilar properties={similar} />
                </div>
            </div>
        </>
    );
}

export default PropertyDetailPage;
