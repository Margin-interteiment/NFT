import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import "../App.css";
import imgageOfCol1 from "../images/imageOfCol1.png";
import imgageOfCol2 from "../images/imageOfCol2.png";
import ProfileOfImage2 from "../images/ProfileOfImage2.png";

export default function PopularCollectionsSlider() {
  const images = [imgageOfCol1, imgageOfCol2, imgageOfCol1, imgageOfCol2];

  return (
    <div className="Main">
      <h1 className="PopularOfSliderOfTitle">Popular Collections</h1>

      <div className="MainOfPopOfSlider">
        <Swiper
          spaceBetween={10}
          slidesPerView={3}
          // navigation
          pagination={{ clickable: false }}
          // modules={[Navigation, Pagination]}
        >
          {images.map((img, index) => (
            <SwiperSlide key={index}>
              <ul className="PopularCardOfList">
                <li className="PopularCardOfListItem">
                  <img
                    src={img}
                    alt={`Slide ${index + 1}`}
                    className="PopularCardOfListItemOfImg"
                  />
                  <div className="PopularCardOfListItemContentOfProfile">
                    <img
                      src={ProfileOfImage2}
                      alt="Profile"
                      className="PopularProfileOfImage"
                    />

                    <p className="PopularCardOfListItemContentOfProfileTextAuthor">
                      @wzard
                    </p>

                    <p className="PopularCardOfListItemContentOfProfileText">
                      ERC-721
                    </p>
                  </div>
                </li>
              </ul>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <button type="button" className="MoreView">
        View All
      </button>
    </div>
  );
}
