import PropertyCarousel from "../../cards/PropertyCarousel"
import SectionTitle from "../SectionTitle/SectionTitle"

function PropertySection({ title, subtitle, properties }) {
    return (
        <section className="recent__property pt-0">
            <div className="container">
                <SectionTitle title={title} subtitle={subtitle} />
                <PropertyCarousel properties={properties} />
            </div>
        </section>
    )
}

export default PropertySection