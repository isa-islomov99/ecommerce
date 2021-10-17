import React from "react";
import "./faq.scss";
import faqImg from "../../assets/img/faq_man.jpg";

import { Row, Col, Collapse } from "antd";

const { Panel } = Collapse;

const Faq = () => {
  return (
    <div className="faq">
      <div className="container">
        <Row>
          <Col xs={24} sm={24} md={24} lg={24} xl={24}>
            <h1 className="faq__section_title_text">FaQ</h1>
          </Col>
        </Row>
        <Row className="faq__main_box">
          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
            <img
              className="faq__illustrator_img"
              src={faqImg}
              alt="man-thinking"
            />
          </Col>
          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
            <div className="faq__collapse_box">
              <Collapse accordion>
                <Panel header="Muddatli to'lov shartlari" key="1">
                  <p>
                    Bizda O‘zbekiston bo‘yicha yetkazib beriladigan muddatli
                    to‘lov mavjud.Muddatli to‘lovga mahsulot xarid qilish uchun:
                    Pasport, oxirgi 3 oyda faol bo‘lgan va SMS-maʼlumotlar
                    xizmati yoqilgan Uzсard yoki Humo kartochkasi bo‘lishi
                    lozim.
                  </p>
                </Panel>
                <Panel header=" Qanday xarid qilinadi ?" key="2">
                  <p>
                    1. Sayt menyusi yoki qidiruv tugmasi orqali o'zingizga
                    kerakli bo'lgan maxsulotni tanlang. 2. Xarid qilish/bo’lib
                    to’lash tugmasini bosing. Siz birdaniga bir necha xaridni
                    amalga oshirishingiz mumkin. 3. Tanlagan maxsulotingiz
                    savatchaga tushadi. Siz u yerdan buyurtmani
                    rasmiylashtirasiz. 4. Rasmiylashtirish davomida Siz yetkazib
                    berish manzili va to'lov turlarini kiritishingiz lozim.
                    Shundan so'ng buyurtmani rasmiylashtirish tugmasini bosing.
                  </p>
                </Panel>
                <Panel
                  header="Qanday qilib to'lovni amalga oshiraman ?"
                  key="3"
                >
                  <p>
                    To'lov turi ixtiyoringiz - Istasangiz buyurtmani qabul
                    qilgan payt naqd yoki plastik karta orqali, istasangiz
                    buyurtma paytida onlayn to'lasangiz bo'ladi
                  </p>
                </Panel>
                <Panel header="Yetkazib berish muddati qancha ?" key="4">
                  <p>
                    Toshkent bo'ylab - 12 ish soatida (Biz undan ham tezroq
                    yetkazishga xarakat qilamiz) O'zbekistonning boshqa barcha
                    hududlariga - 2 ish kuni (tezroq yetkazishga xarakat
                    qilishamiz) Ekspress - Toshkent bo'ylab 4 ish soatida
                    (yakshanbadan tashqari)
                  </p>
                </Panel>
                <Panel header="Nega Shop.uz da narxlar qimmat" key="5">
                  <p>Shop.uz da mahsulotlar narxlari imkon boricha minimallashtirishga alohida urg'u beriladi, va shu bilan birga sifatli mahsulotlarni iste'molchilarga yetkazib beradi</p>
                </Panel>
              </Collapse>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Faq;
