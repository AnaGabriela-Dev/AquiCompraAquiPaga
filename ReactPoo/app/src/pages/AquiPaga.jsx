import { Header } from "../components/Header";
import { useNavigate } from "react-router-dom";

import "./aquiPaga.css"

export default function AquiPaga({cart, removeFromCart}) {
    const navigate = useNavigate();
    const total = cart.reduce((acc, item) => acc + item.preco, 0);

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
                                    onClick={() => removeFromCart(item.uniqueId)}
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