import React from "react";
import "./comments.scss";
import { UserOutlined } from "@ant-design/icons";
import MainSwiperCarousel from "../mainSwiperCarousel/MainSwiperCarousel";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";

import SwiperCore, { Pagination, Navigation } from "swiper/core";

SwiperCore.use([Pagination, Navigation]);

const Comments = () => {
  const CommentsData = [
    {
      commentText:
        "Сегодня гостила у дочери и было приятно, что от зятя шел аромат именно той туалетной воды, которую я подарила ему недавно на День рождения.",
      clientName: "Otabek",
    },
    {
      commentText:
        "Купили тостер по скидке, за 350 тысяч. Неплохой тостер за подобные деньги. Пластмассовый корпус, вес вообще не чувствуется.",
      clientName: "Kamilla",
    },
    {
      commentText:
        "особенно БОЛЬШОЕ СПАСИБО менеджерам кто нашли товар так быстро и поставщику за быструю доставку",
      clientName: "Bahrom",
    },
    {
      commentText:
        "Shop.uz saytiga rahmat juda tez yetkazib berishdi, anchadan beri shu korinishdagi tarozini qidirib yurgan edim shu saytdan topdim",
      clientName: "Moxina",
    },
    {
      commentText:
        "Туалетная вода Mary Kay High Intensity Ocean - новинка из серии мужских ароматов компании Мери Кей. Аромат имеет красивое оформление:",
      clientName: "Aziz",
    },
    {
      commentText:
        "Выбрала несколько предметов, на фото выглядят меньше чем в реале. По факту больше, соответственно удобнее",
      clientName: "Farxod",
    },
    {
      commentText:
        "Большой экран, крайне яркий и приятный глазу, производительный и идеально подогнанный под ладонь своего владельца. Это само",
      clientName: "Qodir",
    },
    {
      commentText:
        "Доставка была осуществлена очень быстро и спасибо поставщику за проявленное внимание к покупателю.",
      clientName: "Irina",
    },
  ];
  return (
    <div className="comments">
      <div className="container">
        <h1 className="comments__products_comment_title">
          Mahsulotlarga sharhlar
        </h1>
        <MainSwiperCarousel slidesPerView="4">
          {CommentsData &&
            CommentsData.map((item, i) => (
              <SwiperSlide key={i} className="swiper_slide_card">
                <div className="comments__box">
                  <p className="comments__comment_txt">{item.commentText}</p>
                  <div className="comments__user_info_box">
                    <UserOutlined
                      style={{
                        fontSize: "17px",
                        color: "#a5c926",
                      }}
                    />
                    <h4 className="comments__user_name">{item.clientName}</h4>
                  </div>
                </div>
              </SwiperSlide>
            ))}
        </MainSwiperCarousel>
      </div>
    </div>
  );
};

export default Comments;
