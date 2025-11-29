import { BrowserRouter, Routes, Route } from "react-router-dom";
import { api } from './lib/axios';
import { useState, useEffect } from 'react';
import { Toaster, toast } from "react-hot-toast";

import Cadastro from "./pages/Cadastro";
import Login from "./pages/Login";
import Home from "./pages/Home";
import AquiPaga from "./pages/AquiPaga";
import Perfil from "./pages/Perfil";
import Pagamento from "./pages/Pagamento";
import Finalizado from "./pages/Finalizado"

export default function App() {
  const [cart, setCart] = useState([]);
  const total = cart.reduce((acc, item) => acc + item.preco, 0);


  const addToCart = (item) => {
    const itemExistente = cart.find((c) => c.uniqueId === item.uniqueId);

    if (itemExistente) {
      toast.error("Esse item já está no carrinho!", {
        icon: "💔",
        style: {
          background: "#ffb6c1",
          color: "#fff",
          fontWeight: "bold",
        },
      });
      return;
    }

    setCart([...cart, item]);

    toast.success(`${item.nome} adicionado ao carrinho!`, {
      icon: "🛒✨",
      style: {
        background: "#d4ffe1",
        color: "#2b7a4b",
        fontWeight: "bold",
      },
    });
  };

  const removeFromCart = (uniqueId) => {
    setCart(prev => prev.filter(item => item.uniqueId !== uniqueId));
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
      <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{
          style: {
            borderRadius: "12px",
            padding: "12px 16px",
            fontFamily: "Poppins",
          },
        }}
      />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home addToCart={addToCart} />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/login" element={<Login />} />
          <Route path="/aquiPaga" element={<AquiPaga cart={cart} removeFromCart={removeFromCart} />} />
          <Route path="/perfil" element={<Perfil />} />
          <Route path="/pagamento" element={<Pagamento cart={cart} setCart={setCart} total={total} />} />
          <Route path="/fim-pagamento" element={<Finalizado/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
