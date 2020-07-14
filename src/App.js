import React from 'react';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Products from './Products';
import ProductDetails from './ProductDetails';
import Header from './Header';

function NotFound(){
  return  <div>
            <h3>404: Page Not Found</h3>
          </div>
}
function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Home/> }/>
        <Route path="about" element={<About/> }/>
        <Route path="products" element={<Products/>} />
        <Route path="products/:productID" element={<ProductDetails/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </div>
  );
}

export default App;
