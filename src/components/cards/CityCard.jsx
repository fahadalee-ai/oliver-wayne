import { Link } from "react-router-dom";

function CityCard({ name, propertyCount, image }) {
    return (
        <Link to="/properties">
            <div className="card__image-hover-style-v3">
                <div className="card__image-hover-style-v3-thumb h-230">
                    <img src={image} alt={name} className="img-fluid w-100" />
                </div>
                <div className="overlay">
                    <div className="desc">
                        <h6 className="text-capitalize">{name}</h6>
                        <p className="text-capitalize">{propertyCount} properties</p>
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default CityCard;
