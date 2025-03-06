import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import "../App.css";
import imageOfExplore1 from "../images/imageOfExplore1.png";
import imageOfExplore2 from "../images/imageOfExplore2.png";
import imageOfExplore3 from "../images/imageOfExplore3.png";
import imageOfProfile3 from "../images/imageOfProfile3.png";

export default function ExploreOfCategoriesSlider() {
  const images = [
    imageOfExplore1,
    imageOfExplore2,
    imageOfExplore3,
    imageOfExplore1,
    imageOfExplore2,
    imageOfExplore3,
    imageOfExplore1,
    imageOfExplore2,
    imageOfExplore3,
  ];

  return (
    <div className="Main">
      <h1 className="ExploreSliderOfTitle">Explore By Categories</h1>

      <div className="MainOfExploreOfSlider">
        <Swiper
          spaceBetween={10}
          slidesPerView={3}
          // navigation
          pagination={{ clickable: false }}
          // modules={[Navigation, Pagination]}
        >
          {images.map((img, index) => (
            <SwiperSlide key={index}>
              <ul className="CardOfList">
                <li className="CardOfListItemExplore">
                  <div className="ExploreOfListItemOfDiv">
                    <img
                      src={img}
                      alt={`Slide ${index + 1}`}
                      className="ExploreOfListItemOfImg"
                    />
                    <p className="ExploreOfListItemOfImgText">View more </p>
                  </div>

                  <div className="CardOfListItemContentOfProfile">
                    <img
                      src={imageOfProfile3}
                      alt="Profile"
                      className="ProfileOfImage"
                    />
                    <p className="CardOfListItemContentOfProfileText">
                      Virtual Art
                    </p>
                  </div>
                  <div className="CardOfListItemContentOfCurrent">
                    <p className="CardOfListItemContentOfCurrentTextOne">
                      Current Bid
                    </p>
                    <p className="CardOfListItemContentOfCurrentTextTwo">
                      4.89 ETH
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
