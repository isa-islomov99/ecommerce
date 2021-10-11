import React from 'react'
import Categorys from './components/category/Categorys';
import Header from './components/header/Header';
import HomeMainCarousel from './components/homeMainCarousel/HomeMainCarousel';
import './_app.scss';

const App = () => {
  return (
    <div>
      <Header />
      <Categorys />
      <HomeMainCarousel />
    </div>
  )
}

export default App
