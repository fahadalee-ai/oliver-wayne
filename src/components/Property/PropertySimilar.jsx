import PropertyCarousel from "../cards/PropertyCarousel";
import PropertyListCard from "../cards/PropertyListCard";

function PropertySimilar({ properties = [] }) {
    if (!properties.length) return null;

    return (
        <div className="row">
            <div className="col-lg-12">
                <div className="similiar__item">
                    <h6 className="text-capitalize detail-heading mb-0">similiar properties</h6>
                    <PropertyCarousel
                        className="similiar__property-carousel"
                        properties={properties}
                        renderSlide={(property) => (
                            <div className="item">
                                <PropertyListCard {...property} layout="grid" />
                            </div>
                        )}
                    />
                </div>
            </div>
        </div>
    )
}

export default PropertySimilar