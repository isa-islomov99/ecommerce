// import React from "react";
// import Categorys from "./components/category/Categorys";
// import Header from "./components/header/Header";
// import HomeMainCarousel from "./components/homeMainCarousel/HomeMainCarousel";
// import Phones from "./components/phones/Phones";
// import "./_app.scss";
// import { Route, Switch } from "react-router";
// import Main_page from "./pages/Main_page.jsx";
// import Store_route from "./routes/Store_route";
// import Notebooks from "./components/notebooks/Notebooks";
// import Brands from "./components/brands/Brands";
// import Comments from "./components/comments/Comments";
// import Faq from "./components/faq/Faq";
// import Footer from "./components/footer/Footer";
// import AllProductsCard from "./components/allProductsCard/AllProductsCard";

// const App = () => {
//   return (
//     <div>
//       <Header />
//       <Categorys />
//       <HomeMainCarousel />
//       <Phones />
//       <Notebooks />
//       <Route
//         exact
//         path="/category/:id"
//         render={(props) => {
//           return <AllProductsCard {...props} />;
//         }}
//       />
//       <Brands />
//       <Comments />
//       <Faq />
//       <Footer />
//       <Switch>
//         <Route render={() => <Main_page />} path="/" exact />
//         <Route render={() => <Store_route />} path="/store" exact />
//       </Switch>
//     </div>
//   );
// };

// export default App;

import React from "react";
import "./app.scss";
import Categorys from "./components/category/Categorys";
import Header from "./components/header/Header";
import { Route, Switch } from "react-router";
import { BackTop } from "antd";
import { ArrowUpOutlined } from "@ant-design/icons";
import Footer from "./components/footer/Footer";
import AllProductsCard from "./components/allProductsCard/AllProductsCard";
import MainPage from "./containers/MainPage";
import AllBrandsCard from "./components/allBrandsCard/AllBrandsCard";
import FilteredBrandCategory from "./components/filteredBrandCategory/FilteredBrandCategory";
import PageNavigationListener from "./utils/PageNavigationListener";
import ProductInfo from "./pages/productInfo/ProductInfo";
import About from "./pages/about/About";

const App = () => {
  return (
    <div className="App">
      <BackTop>
        <div className="scroll_to_top">
          <ArrowUpOutlined className="up_arrow" />
        </div>
      </BackTop>
      <Header />
      <Categorys />
      <PageNavigationListener />
      <Route exact path="/">
        <MainPage />
      </Route>
      <Route exact path="/about">
        <About />
      </Route>
      <Route
        exact
        path="/category/:id"
        render={(props) => {
          return <AllProductsCard {...props} />;
        }}
      />
      <Route
        exact
        path="/brands/:id"
        render={(props) => {
          return <AllBrandsCard {...props} />;
        }}
      />
      <Route
        exact
        path="/brands/:id/:id"
        render={(props) => {
          return <FilteredBrandCategory {...props} />;
        }}
      />
      <Route
        exact
        path="/product/view/:id"
        render={(props) => {
          return <ProductInfo {...props} />;
        }}
      />
      <Footer />
    </div>
  );
};

export default App;
