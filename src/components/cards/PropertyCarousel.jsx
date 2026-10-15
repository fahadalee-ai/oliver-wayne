import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import PropertyCard from "./PropertyCard";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function PropertyCarousel({ properties = [], renderSlide, className }) {
  return (
    <Swiper className={className}
      modules={[Navigation, Autoplay]}
      spaceBetween={20}
      slidesPerView={1}
      // navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000 }}
      loop={properties.length > 3}
      breakpoints={{
        600: {
          slidesPerView: 2,
        },
        1366: {
          slidesPerView: 3,
        },
      }}
    >
      {properties.map((property) => (
        <SwiperSlide key={property.id}>
          {renderSlide ? (
            renderSlide(property)
          ) : (
            <PropertyCard {...property} />
          )}
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default PropertyCarousel;
