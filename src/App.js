import React from "react";
import Categorys from "./components/category/Categorys";
import Header from "./components/header/Header";
import HomeMainCarousel from "./components/homeMainCarousel/HomeMainCarousel";
import Phones from "./components/phones/Phones";
import "./_app.scss";
import { Route, Switch } from "react-router";
import Main_page from "./pages/Main_page.jsx";
import Store_route from "./routes/Store_route";
import Notebooks from "./components/notebooks/Notebooks";
import Brands from "./components/brands/Brands";
import Comments from "./components/comments/Comments";
import Faq from "./components/faq/Faq";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <div>
      <Header />
      <Categorys />
      <HomeMainCarousel />
      <Phones />
      <Notebooks />
      <Brands />
      <Comments />
      <Faq />
      <Footer />
      {/* <Switch>
        <Route render={() => <Main_page />} path="/" exact />
        <Route render={() => <Store_route />} path="/store" exact />
      </Switch> */}
    </div>
  );
};

export default App;
