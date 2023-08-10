import React, { useState } from "react";
import Header from './components/Header/Header'
import Content from "./components/Content/Content";
import { Route, Routes } from "react-router-dom";
import Cart from "./components/Cart/Cart";
import axios from "axios";

function App() {
  const [pizzas, setPizzas] = React.useState([])

  React.useEffect(() => {
    fetch('http://localhost:3000/bd.json').then((resp) => resp.json()).then(json => {
      setPizzas(json.pizzas)
    })
  }, [])

  console.log(pizzas)

  return (
    <div className="wrapper">
      <Header/>

      <Routes>
        <Route path="/" element={<Content items={pizzas}/>}/>
        <Route path="/cart" element={<Cart/>}/>
      </Routes>
    </div>
  );
}

export default App;
