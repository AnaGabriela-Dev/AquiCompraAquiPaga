import { BrowserRouter, Routes, Route } from "react-router-dom";
import { api } from './lib/axios';
import { useState, useEffect } from 'react';

import Cadastro from "./pages/Cadastro";
import Login from "./pages/Login";
import Home from "./pages/Home";
import AquiPaga from "./pages/AquiPaga";


export default function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    const itemExistente = cart.find((c) => c.id === item.id);
    if (itemExistente) {
      alert('Este item já está no carrinho!');
      return;
    } 
    
    alert('Adicionado ao carrinho!');
    setCart([...cart, item]);
  };

  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  useEffect(() => {
      async function getData() {
        try {
          const response = await api.get("/hello");
          console.log("Resposta da API:", response.data);
        } catch (error) {
          console.error("Erro ao chamar API:", error);
        }
      }

      getData();
    }, []);
    

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home addToCart={addToCart} />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/login" element={<Login />} />
          <Route path="/aquiPaga" element={<AquiPaga cart={cart} removeFromCart={removeFromCart} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
