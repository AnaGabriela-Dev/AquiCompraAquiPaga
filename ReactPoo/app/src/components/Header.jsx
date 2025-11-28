import logo from "../images/Xadrez.png"
import carrinho from "../images/carrinho.jpg"
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import toast from "react-hot-toast";

import "../index.css"
import "../styles/header.css"

export function Header({}){
    const { user, logout } = useContext(UserContext);
    const navigate = useNavigate();

    const containerEsquerda = {
        alignItems : "center",
        display: 'flex',
    }

    const containerDireita = {
        alignItems : "center",
        display: 'flex',
        justifyContent: 'flex-end',
        padding: '0 30px',
    }

    const textHeaderStyle = {
        fontSize : "25px",
        padding: "20px"
    }

    const loginStyle = {
        fontSize : "20px",
        padding: "20px"
    }

    function voltarAoTopo() {
        if (window.location.pathname === "/") {
            window.scrollTo({ top: 0, behavior: "smooth" });
        } else {
            navigate("/");
        }
    }

    function irAJogos() {
        if (window.location.pathname === "/") {
            window.scrollTo({ top: 680, behavior: "smooth" });
        } else {
            navigate("/", { state: { scrollTo: 680 } });
        }
    }

    function irARetro() {
        if (window.location.pathname === "/") {
            window.scrollTo({ top: 3480, behavior: "smooth" });
        } else {
            navigate("/", { state: { scrollTo: 3480 } });
        }
    }

    function irParaCadastro() {
        navigate("/cadastro");
    }

    function logar() {
        navigate("/login");
    }

    function abrirCarrinho() {
        navigate("/aquiPaga");
    }

    function irParaHome() {
        navigate("/");
    }

    return (
        <header className="headerStyle">
            <div style={containerEsquerda}>
                <section className="home" onClick={voltarAoTopo}>
                    <img src={logo}/>
                    <h1 style={{fontSize : "28px", padding: "20px"}}>Aqui compra</h1>
                </section>

                <section className="sectionHeader" onClick={irAJogos}>
                    <h1 style={textHeaderStyle}>Jogos</h1>
                </section>
                
                <section className="sectionHeader" onClick={irARetro}>
                    <h1 style={textHeaderStyle}>Retro</h1>
                </section>
            </div>

            <div style={containerDireita}>
                <section className="sectionHeader" onClick={abrirCarrinho}>
                    <h1 style={textHeaderStyle}>Aqui paga</h1>
                    <img style={{paddingRight: "40px"}} src={carrinho}/>
                </section>

                {user ? (
                    <>
                    <h3 className="user-style" 
                        onClick={() => navigate("/perfil")}
                    >
                        Olá, {user.nome}!
                    </h3>

                    <h4 className="logout-style" 
                        onClick={() => {
                            logout();  
                            toast.success("Você saiu da sua conta!", {
                            duration: 3000,
                            style: {
                                background: "#333",
                                color: "#fff",
                                fontSize: "18px"
                            }
                            });
                            navigate("/");  // redirecionar após sair
                        }}
                    >
                        Logout
                    </h4>
                    </>
                ) : (
                    <>
                    <section className="sectionHeader" onClick={irParaCadastro}>
                        <h4 style={loginStyle}>Cadastrar</h4>
                    </section>
                    <section className="sectionHeader" onClick={logar}>
                        <h4 style={loginStyle}>Logar</h4>
                    </section>
                    </>
                )}
            </div>

        </header>
    )
}