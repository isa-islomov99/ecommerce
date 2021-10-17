// import React, {useState} from "react";
// import "./mainSwiperCarousel.scss";
// import { RightOutlined, LeftOutlined, HeartOutlined, HeartFilled } from "@ant-design/icons";

// import { Swiper, SwiperSlide } from "swiper/react";

// // Import Swiper styles
// import "swiper/swiper.min.css";
// import "swiper/components/pagination/pagination.min.css";
// import "swiper/components/navigation/navigation.min.css";

// import SwiperCore, { Navigation } from "swiper/core";

// SwiperCore.use([Navigation]);

// const MainSwiperCarousel = ({ children, arrayCut }) => {
//   const navigationPrevRef = React.useRef(null);
//   const navigationNextRef = React.useRef(null);

//   const [toggleHeart, setToggleHeart] = useState(false);
//   const handleHeart = () => {
//     setToggleHeart(!toggleHeart)
//   }
//   return (
//     <>
//       <div className="main_swiper_carousel">
//         <div className="arrow_circle_icons">
//           <div ref={navigationNextRef} className="button_arrow">
//             <RightOutlined style={{ fontSize: "15px", color: "#a5c926" }} />
//           </div>
//         </div>
//         <Swiper
//           slidesPerView={5}
//           spaceBetween={30}
//           loop={true}
//           loopFillGroupWithBlank={true}
//           navigation={{
//             prevEl: navigationPrevRef.current,
//             nextEl: navigationNextRef.current,
//           }}
//           onSwiper={(swiper) => {
//             // Delay execution for the refs to be defined
//             setTimeout(() => {
//               // Override prevEl & nextEl now that refs are defined
//               swiper.params.navigation.prevEl = navigationPrevRef.current;
//               swiper.params.navigation.nextEl = navigationNextRef.current;

//               // Re-init navigation
//               swiper.navigation.destroy();
//               swiper.navigation.init();
//               swiper.navigation.update();
//             });
//           }}
//           className="mySwiper"
//           breakpoints={{
//             310: {
//               slidesPerView: 1,
//             },
//             600: {
//               slidesPerView: 2,
//             },
//             766: {
//               slidesPerView: 3,
//             },
//             960: {
//               slidesPerView: 4,
//             },
//             1100: {
//               slidesPerView: 5,
//             },
//           }}
//         >
//           {/* {children} */}
//           {arrayCut &&
//             arrayCut.map((item, i) => (
//               <SwiperSlide key={i} className="swiper_slide_card">
//                 <div className="main_swiper_carousel__product_card_heart" onClick={handleHeart}>
//                   {toggleHeart ? <HeartFilled style={{ fontSize: "21px", color: "#a5c926" }} /> : <HeartOutlined style={{ fontSize: "21px", color: "#a5c926" }} />}
//                 </div>
//                 <div className="product_carousel_card_img">
//                   <img
//                     className="swiper_slide_card_img"
//                     src={item?.img}
//                     alt="card-img"
//                   />
//                 </div>
//                 <div className="product_carousel_card_info">
//                   {item.price.discount && <span className="main_swiper_carousel__product_sale_text">Chegirma:</span>}
//                   <p className="main_swiper_carousel__product_category">{item.catigory}</p>
//                   <div className="main_swiper_carousel__product_price">
//                     <h5 className={item.price.discount ? "main_swiper_carousel__product_price_text" : "main_swiper_carousel__product_sale_price_text"}>{item.price.cost} so'm</h5>
//                     {item.price.discount && <span className="main_swiper_carousel__product_price_sale">{item.price.discount_price} so'm</span>}
//                   </div>
//                   <p className="main_swiper_carousel__product_title">{item.title}</p>
//                   <button className="main_swiper_carousel__product_btn">Xarid qilish</button>
//                 </div>
//               </SwiperSlide>
//             ))}
//         </Swiper>
//       </div>
//     </>
//   );
// };

// export default MainSwiperCarousel;





import React, {useState} from "react";
import "./mainCarouselCards.scss";
import { RightOutlined, LeftOutlined, HeartOutlined, HeartFilled } from "@ant-design/icons";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";

import SwiperCore, { Navigation } from "swiper/core";

SwiperCore.use([Navigation]);

const MainCarouselCards = ({ children, slidesPerView = 5 }) => {
  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);

  return (
    <>
      <div className="main_swiper_carousel">
        <div className="arrow_circle_icons">
          <div ref={navigationNextRef} className="button_arrow">
            <RightOutlined style={{ fontSize: "15px", color: "#a5c926" }} />
          </div>
        </div>
        <Swiper
          slidesPerView={slidesPerView}
          spaceBetween={30}
          loop={true}
          loopFillGroupWithBlank={true}
          navigation={{
            prevEl: navigationPrevRef.current,
            nextEl: navigationNextRef.current,
          }}
          onSwiper={(swiper) => {
            // Delay execution for the refs to be defined
            setTimeout(() => {
              // Override prevEl & nextEl now that refs are defined
              swiper.params.navigation.prevEl = navigationPrevRef.current;
              swiper.params.navigation.nextEl = navigationNextRef.current;

              // Re-init navigation
              swiper.navigation.destroy();
              swiper.navigation.init();
              swiper.navigation.update();
            });
          }}
          className="mySwiper"
          breakpoints={{
            310: {
              slidesPerView: 1,
            },
            600: {
              slidesPerView: 2,
            },
            766: {
              slidesPerView: 3,
            },
            960: {
              slidesPerView: 4,
            },
            1100: {
              slidesPerView: slidesPerView,
            },
          }}
        >
          {children}
        </Swiper>
      </div>
    </>
  );
};

export default MainCarouselCards;
