import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";
import MainPage from './pages/Main.jsx';

import Header from './components/header/Header';
import SearchPage from './pages/SearchPage.jsx';
import Auth from './components/auth/Auth.jsx';
import ProductPage from './pages/ProductPage.jsx';
import BasketPage from './pages/BasketPage.jsx';
import ComparePage from './pages/ComparePage.jsx';




function App() {
  return (

    <>

      <Header />
      <Auth />
      <Routes>

        <Route exact path="/" element={<MainPage />} />
        <Route exact path="/search/:page/:query" element={<SearchPage />} />
        <Route exact path="/product" element={<ProductPage />} />
        <Route exact path="/basket" element={<BasketPage />} />
        <Route exact path="/compare" element={<ComparePage />} />

      </Routes>


    </>
  );
}

export default App;
