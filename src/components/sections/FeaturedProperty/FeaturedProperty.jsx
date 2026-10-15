import { featuredProperties } from "../../../data/properties"
import PropertySection from "../PropertySection/PropertySection"

function FeaturedProperty() {
    return (
        <PropertySection
            title="Featured Properties"
            subtitle="Premium properties, carefully selected for you."
            properties={featuredProperties}
        />
    )
}

export default FeaturedProperty