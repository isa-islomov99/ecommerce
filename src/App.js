import React from "react";
import "./app.scss";
import Categorys from "./components/category/Categorys";
import Header from "./components/header/Header";
import { Route } from "react-router";
import { BackTop } from "antd";
import { ArrowUpOutlined } from "@ant-design/icons";
import Footer from "./components/footer/Footer";
import AllProductsCard from "./components/allProductsCard/AllProductsCard";
import MainPage from "./containers/MainPage";
import AllBrandsCard from "./components/allBrandsCard/AllBrandsCard";
import FilteredBrandCategory from "./components/filteredBrandCategory/FilteredBrandCategory";
import FilterSelectBrands from "./components/filterSelectBrands/FilterSelectBrands";
import PageNavigationListener from "./utils/PageNavigationListener";
import ProductInfo from "./pages/productInfo/ProductInfo";
// import Main_page from "./pages/Main_page.jsx";
import StoreRoute from "./routes/Store_route";
import About from "./pages/about/About";
import Badges from "./components/badges/Badges";
import Cart from "./pages/cart/Cart";
import Favorites from "./pages/favorites/Favorites";
import FilterProductByCost from "./components/filterProductByCost/FilterProductByCost";

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
      <Badges />
      <Route exact path="/">
        <MainPage />
      </Route>
      <Route exact path="/about">
        <About />
      </Route>
      <Route exact path="/cart">
        <Cart />
      </Route>
      <Route exact path="/favorite">
        <Favorites />
      </Route>
      <Route path="/checkout" exact render={() => <StoreRoute />} />
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
      <Route
        exact
        path="/category/:id/:id"
        render={(props) => {
          return <FilterSelectBrands {...props} />;
        }}
      />
      <Route
        exact
        path="/category/:id/sort-by-price/:id"
        render={(props) => {
          return <FilterProductByCost {...props} />;
        }}
      />
      <Footer />
    </div>
  );
};

export default App;