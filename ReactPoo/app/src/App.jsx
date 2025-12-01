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
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const calcular = async () => {
      if (cart.length > 0) {
        const response = await api.post("/pagamento/calcular", { cart });
        setTotal(response.data);
      } else {
        setTotal(0);
      }
    };
    calcular();
  }, [cart]);



  const addToCart = (item) => {
    const itemExistente = cart.find((c) => c.Id === item.id);

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

  const removeFromCart = (Id) => {
    setCart(prev => prev.filter(item => item.id !== Id));
  };
    

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
