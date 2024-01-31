import React from 'react'
import Navbar from './components/navfoot/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Product from './components/product/Product';
import "../src/assets/css/styles.css"


export default function App() {
  return (
    <>
      <Router>
        <Navbar title="Robin Text" />
        <Routes>
          <Route exact path="/" element={<Product />} />
        </Routes>
      </Router>
    </>
  );
}
