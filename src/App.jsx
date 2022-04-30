import React from 'react'
import './assets/css/style.css'
import Cart from './components/Cart/Cart'
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Cart title="Meu carrinho" json={1} />} />
        <Route exact path="/abaixo-10-reais" element={<Cart title="Meu carrinho" json={2} />} />
      </Routes>
    </div>
  )
}

export default App