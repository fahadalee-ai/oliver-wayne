import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "../../assets/css/PropertyDetailGallery.css";

function PropertyDetailGallery({ images = [], title = "Property" }) {
    if (!images.length) return null;
    return (
        <div className="slider__property bg-light">
            <Swiper
                className="slider__property-carousel-opacity listing-detail-gallery"
                modules={[Navigation, Autoplay]}
                slidesPerView={1.2}
                centeredSlides
                spaceBetween={16}
                loop={images.length > 2}
                navigation
                autoplay={images.length > 1 ? { delay: 4000, disableOnInteraction: false } : false}
                breakpoints={{
                    768: { slidesPerView: 1.6 },
                    1200: { slidesPerView: 2.2 },
                }}
            >
                {images.map((src, index) => (
                    <SwiperSlide key={index}>
                        <div className="item">
                            <img src={src} alt={`${title} photo ${index + 1}`} className="img-fluid" />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default PropertyDetailGallery