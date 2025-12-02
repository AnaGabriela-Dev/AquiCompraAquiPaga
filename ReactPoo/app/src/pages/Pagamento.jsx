import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./pagamento.css";
import { Header } from "../components/Header";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { api } from "../lib/axios";

export default function Pagamento({ cart, setCart, total }) {
    const [metodo, setMetodo] = useState(null);
    const navigate = useNavigate();
    const [paymentMethod, setPaymentMethod] = useState(null);
    const [processando, setProcessando] = useState(false);
    const { user } = useContext(UserContext);


    const handlePagar = async () => {
        if (!paymentMethod) {
            alert("Escolha um método de pagamento!");
            return;
        }

        if (!user?.id) {
            alert("Você precisa estar logado!");
            return;
        }

        setProcessando(true);

        try {
            await api.post("/compras", {
                userId: user.id,
                jogosIds: cart.map(j => j.id)
            });

            setCart([]);

            setTimeout(() => {
                navigate("/fim-pagamento");
            }, 1500);

        } catch (erro) {
            console.error(erro);
            alert("Erro ao registrar compra.");
            setProcessando(false);
        }
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