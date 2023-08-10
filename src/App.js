import React from "react";
import Header from './components/Header/Header'
import Content from "./components/Content/Content";
import { Route, Routes } from "react-router-dom";
import Cart from "./components/Cart/Cart";

function App() {
  return (
    <div className="wrapper">
      <Header/>

      <Routes>
        <Route path="/" element={<Content/>}/>
        <Route path="/cart" element={<Cart/>}/>
      </Routes>
    </div>
  );
}

export default App;
