import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './component/Home/Home.js'
import React, { useEffect } from 'react'
import WebFont from 'webfontloader'
import Header from './component/layout/Header/Header'
import Footer from './component/layout/Footer/Footer.js'
import ProductDetails from './component/layout/Product/ProductDetails.js'
import Product from './component/layout/Product/Product.js'
import Search from './component/layout/Product/Search.js'

function App () {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Roboto', 'Droid Sans', 'Chilanka']
      }
    })
  }, [])

  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products/:id' element={<ProductDetails />} />
        <Route path='/products' element={<Product />} />
        {/* <Route path='/products/:keyword' element={<Product />} /> */}
        <Route path='/search' element={<Search />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
