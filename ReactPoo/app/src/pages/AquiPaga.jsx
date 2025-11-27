import { Header } from "../components/Header";

import "./aquiPaga.css"

export default function AquiPaga({cart, removeFromCart}) {
    return(
        <>
            <Header/>

            <div className="carrinho-container">
                <h1 className="carrinho-title">Carrinho</h1>

                {cart.length === 0 && <p>O carrinho está vazio :</p>}

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
                                    onClick={() => removeFromCart(item.id)}
                                >
                                    Remover
                                </button>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </>
    )
}