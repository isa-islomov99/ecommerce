import React from 'react'
import Categorys from './components/category/Categorys';
import Header from './components/header/Header';
import HomeMainCarousel from './components/homeMainCarousel/HomeMainCarousel';
import Phones from './components/phones/Phones';
import './_app.scss';

const App = () => {
  return (
    <div>
      <Header />
      <Categorys />
      <HomeMainCarousel />
      <Phones />
    </div>
  )
}

export default App
