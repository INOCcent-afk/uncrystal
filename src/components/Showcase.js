import React from "react";
import "./Showcase.scss";
import SwiperCore, { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
import ZabonOne from "./images/szablon1-286x400.jpg";
import ZabonTwo from "./images/szablon2-286x400.jpg";
import ZabonThree from "./images/szablon3-286x400.jpg";
import ZabonFour from "./images/szablon4-286x400.jpg";
import ZabonFifth from "./images/szabon5-286x400.jpg";
import ZabonSixth from "./images/szablon6-286x400.jpg";

SwiperCore.use([Autoplay]);

function Showcase() {
  return (
    <>
      <div className="showcase">
        <div className="showcase-title">
          <p>You will save time and money </p>
          <p>using a library of unique templates created by our specialist</p>
        </div>
        <div className="swiper-storage">
          <Swiper
            spaceBetween={50}
            slidesPerView={1}
            initialSlide={3}
            breakpoints={{
              400: {
                slidesPerView: 1.5,
                spaceBetween: 100,
              },
              600: {
                slidesPerView: 2,
              },
              800: {
                slidesPerView: 3,
              },
              1300: {
                slidesPerView: 4,
              },
              1500: {
                slidesPerView: 5,
              },
            }}
            loop={true}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            <SwiperSlide className="firstSlide slide">
              <img src={ZabonOne} alt="SlideImg" />
            </SwiperSlide>
            <SwiperSlide className="secondSlide slide">
              <img src={ZabonTwo} alt="SlideImg" />
            </SwiperSlide>
            <SwiperSlide className="thirdSlide slide">
              <img src={ZabonThree} alt="SlideImg" />
            </SwiperSlide>
            <SwiperSlide className="fourthSlide slide">
              <img src={ZabonFour} alt="SlideImg" />
            </SwiperSlide>
            <SwiperSlide className="fifthSlide slide">
              <img src={ZabonFifth} alt="SlideImg" />
            </SwiperSlide>
            <SwiperSlide className="sixthSlide slide">
              <img src={ZabonSixth} alt="SlideImg" />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="showcase-footer">
          <p>
            Be wherever your customers are. Don't limit yourself to only
            mailings.
          </p>
          <p>See what else you can do with SARE:</p>
        </div>
      </div>
    </>
  );
}

export default Showcase;
