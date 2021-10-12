// import React from "react";
// import "./header.scss";
// import logo from "../../assets/img/logo.svg";
// import { Input, Select } from "antd";

// const { Option } = Select;

// const Header = () => {

//   function handleChange(value) {
//     console.log(`selected ${value}`);
//   }

//   return (
//     <header className="header">
//       <div className="container header__container">
//         <div className="header__logo_box">
//           <img className="header__logo_img" src={logo} alt="logo" />
//           <h2 className="header__logo_title">shop.uz</h2>
//         </div>
//         <div className="header__serach_bar">
//           <Input
//             className="header__input"
//             placeholder="Mahsulotlarni qidirish..."
//           />
//         </div>
//         <div className="header__language_bar">
//           <Select
//             defaultValue="O'zb"
//             style={{ width: 70 }}
//             onChange={handleChange}
//           >
//             <Option value="O'zb">O'zb</Option>
//             <Option value="Рус">Рус</Option>
//           </Select>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;

// import React from "react";
// import "./header.scss";
// import logo from "../../assets/img/logo.svg";
// import { Input, Select, Row, Col } from "antd";

// const { Option } = Select;

// const Header = () => {
//   function handleChange(value) {
//     console.log(`selected ${value}`);
//   }

//   return (
//     <header className="header">
//       <div className="container">
//         <Row className="header__container">
//           <Col xs={8} sm={8} md={8} lg={4} xl={8} className="header__logo_box">
//             <img className="header__logo_img" src={logo} alt="logo" />
//             <h2 className="header__logo_title">shop.uz</h2>
//           </Col>
//           <Col
//             xs={8}
//             sm={8}
//             md={8}
//             lg={16}
//             xl={8}
//             className="header__serach_bar"
//           >
//             <Input
//               className="header__input"
//               placeholder="Mahsulotlarni qidirish..."
//             />
//           </Col>
//           <Col
//             xs={8}
//             sm={8}
//             md={8}
//             lg={4}
//             xl={8}
//             className="header__language_bar"
//           >
//             <Select
//               defaultValue="O'zb"
//               style={{ width: 70 }}
//               onChange={handleChange}
//             >
//               <Option value="O'zb">O'zb</Option>
//               <Option value="Рус">Рус</Option>
//             </Select>
//           </Col>
//         </Row>
//       </div>
//     </header>
//   );
// };

// export default Header;

import React from "react";
import "./header.scss";
import logo from "../../assets/img/logo.svg";
import { Input, Select, Row, Col } from "antd";

const { Option } = Select;

const Header = () => {
  function handleChange(value) {
    console.log(`selected ${value}`);
  }

  return (
    <header className="header">
      <div className="container">
        <Row
          gutter={{ xs: 8, sm: 8, md: 8, lg: 18, xl: 8 }}
          className="header__container"
        >
          <Col span={8} className="header__logo_box">
            <img className="header__logo_img" src={logo} alt="logo" />
            <h2 className="header__logo_title">shop.uz</h2>
          </Col>
          <Col span={8} className="header__serach_bar">
            <Input
              className="header__input"
              placeholder="Mahsulotlarni qidirish..."
            />
          </Col>
          <Col span={8} className="header__language_bar">
            <Select
              defaultValue="O'zb"
              style={{ width: 70 }}
              onChange={handleChange}
            >
              <Option value="O'zb">O'zb</Option>
              <Option value="Рус">Рус</Option>
            </Select>
          </Col>
        </Row>
      </div>
    </header>
  );
};

export default Header;
