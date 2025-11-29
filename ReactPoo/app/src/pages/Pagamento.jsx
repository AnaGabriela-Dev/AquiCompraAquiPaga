import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./pagamento.css";
import { Header } from "../components/Header";

export default function Pagamento({ cart, setCart, total }) {
    const [metodo, setMetodo] = useState(null);
    const navigate = useNavigate();
    const [paymentMethod, setPaymentMethod] = useState(null);
    const [processando, setProcessando] = useState(false);


    const handlePagar = () => {
        setProcessando(true);  // ativa animação
        setCart([]);           // limpa o carrinho

        setTimeout(() => {
            navigate("/fim-pagamento");
        }, 2000); // 2 segundos de animação
    };


    return (
        <>
            <Header/>

            <div className="pagamento-container">
                <h1>Escolha o método de pagamento</h1>

                <div className="metodos">
                    <button
                        className={paymentMethod === "pix" ? "selected" : "metodo"}
                        onClick={() => setPaymentMethod("pix")}
                    >
                        <img src="/imagens/pixIcon.png" alt="Pix" className="icone" />
                        PIX
                    </button>

                    <button
                        className={paymentMethod === "cartao" ? "selected" : "metodo"}
                        onClick={() => setPaymentMethod("cartao")}
                    >
                        <img src="/imagens/cartaoIcon.png" alt="Cartao" className="icone" />
                        Cartão
                    </button>

                    <button
                        className={paymentMethod === "boleto" ? "selected" : "metodo"}
                        onClick={() => setPaymentMethod("boleto")}
                    >
                        <img src="/imagens/boletoIcon.png" alt="Boleto" className="icone" />
                        Boleto
                    </button>
                </div>

                {paymentMethod && (
                    <div className="resumo-box">
                        <h2>Resumo da compra</h2>

                        <div className="itens-resumo">
                            {cart.map((item) => (
                                <div className="item-resumo" key={item.uniqueId}>
                                    <span className="item-nome">{item.nome}</span>
                                    <span className="item-preco">R$ {item.preco.toFixed(2)}</span>
                                </div>
                            ))}
                        </div>

                        <h3>Total: R$ {total.toFixed(2)}</h3>

                        <button 
                            className="pagar-button"
                            onClick={handlePagar}
                        >
                            Pagar
                        </button>

                        {processando && (
                            <div className="overlay-processando">
                                <div className="spinner"></div>
                                <p>Processando pagamento...</p>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </>
    );
}