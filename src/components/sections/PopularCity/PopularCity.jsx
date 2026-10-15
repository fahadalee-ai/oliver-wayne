import CityCard from "../../cards/CityCard"
import { popularCities } from "../../../data/cities"
import SectionTitle from "../SectionTitle/SectionTitle"

function PopularCity() {
    return (
        <section className="popular__city-large">
            <div className="container">
                <SectionTitle title="Popular Cities" subtitle="Explore properties in top locations." />
                <div className="row">
                    {popularCities.map((city) => (
                        <div className="col-md-6 col-lg-3" key={city.id}>
                            <CityCard {...city} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default PopularCity