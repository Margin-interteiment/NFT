import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import "../App.css";
import img1 from "../images/img-1.png";
import img2 from "../images/img-2.png";
import img3 from "../images/img-3.png";
import ProfileOfImage from "../images/ProfileOfImage.svg";

export default function AuctionsOfSlider() {
  const images = [img1, img2, img3, img1, img2, img3, img1, img2, img3];

  return (
    <div className="Main">
      <h1 className="MainOfAuctionsOfSliderOfTitle">Live Auctions</h1>

      <div className="MainOfAuctionsOfSlider">
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
                <li className="CardOfListItem">
                  <img
                    src={img}
                    alt={`Slide ${index + 1}`}
                    className="CardOfListItemOfImg"
                  />
                  <div className="CardOfListItemContentOfProfile">
                    <img
                      src={ProfileOfImage}
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
                  <button
                    type="button"
                    className="CardOfListItemContentOfCurrentBtn"
                  >
                    Place a bid
                  </button>
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
