import React from "react";
import "./about.scss";

const About = () => {
  return (
    <div className="about">
      <div className="container">
        <h1 className="about__title">Biz haqimizda</h1>
        <p className="about__subtitle">
          <span>Shop.uz</span> – bu 2017 yilda yo‘lga qo‘yilgan zamonaviy
          internet-do‘kon bo‘lib, o‘z mijozlarini yetakchi xalqaro va mahalliy
          ishlab chiqaruvchilarining sifatli mahsulotlari bilan xursand qiladi.
          Shuningdek, xaridorlarga ko‘rsatiladigan yuqori sifatli xizmat, xarid
          qilish jarayonining yanada tezroq va yoqimli bo‘lishini ta‘minlaydi.
        </p>
        <p className="about__subtitle">
          Shop.uz jamoasi yosh, shijoatli va mehnatsevar insonlardan iborat
          bo‘lib, ular zamon bilan hamnafas bo‘lishga va o‘z ustilarida tinmay
          ishlashga intiladilar. Ahil jamoamiz a‘zolari tomonidan har bir ishga
          professional va ijodkorona yondashuv Siz aziz xaridorlarni
          ajablantirishi tabiiy!
        </p>
        <p className="about__subtitle">
          Jahon miqyosidagi ishlab chiqaruvchilar bilan strategik hamkorlik,
          olcha.uz foydalanuvchilariga innovatsiyalar va eksklyuziv
          yangiliklardan xabardor bo‘lish imkonini beradi.
        </p>
      </div>
    </div>
  );
};

export default About;
