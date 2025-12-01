import { Header } from "../components/Header";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { api } from "../lib/axios";

import "./aquiPaga.css"

export default function AquiPaga({cart, removeFromCart}) {
    const navigate = useNavigate();
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

    return(
        <>
            <Header/>

            <div className="carrinho-container">
                <h1 className="carrinho-title">Carrinho</h1>

                {cart.length === 0 && <p className="empty-cart">Vazio</p>}

                {cart.length > 0 && (
                    <div className="carrinho-list">
                        {cart.map((item, index) => (
                            <div className="carrinho-item" key={index}>
                                
                                <div className="item-info">
                                    <span className="item-nome">{item.nome}</span>
                                    <span className="item-preco">
                                        R$ {item.preco.toFixed(2)}
                                    </span>
                                </div>
                                <button 
                                    className="remove-button" 
                                    onClick={() => removeFromCart(item.Id)}
                                >
                                    Remover
                                </button>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            <div className="pagamento-area">
                <p className="cart-total">Total: R$ {total.toFixed(2)}</p>
                <button 
                    className="confirm-button"
                    onClick={() => navigate("/pagamento")}
                >
                    Confirmar compra
                </button>
            </div>
        </>
    )
}