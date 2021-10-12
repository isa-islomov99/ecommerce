import React from 'react'
import Categorys from './components/category/Categorys';
import Header from './components/header/Header';
import HomeMainCarousel from './components/homeMainCarousel/HomeMainCarousel';
import Phones from './components/phones/Phones';
import './_app.scss';
import { Route, Switch } from 'react-router';
import Main_page from './pages/Main_page.jsx'
import Store_route from './routes/Store_route';

const App = () => {
  return (
    <div>
      <Header />
      <Categorys />
      <HomeMainCarousel />
      <Phones />
      <Switch>
         <Route render={() => <Main_page/>}  path="/" exact />
         <Route render={() => <Store_route />}   path="/store" exact />
        </Switch>
    </div>
  )
}

export default App
