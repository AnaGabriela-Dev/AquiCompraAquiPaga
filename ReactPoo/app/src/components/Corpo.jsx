import "../index.css"
import { useEffect, useState } from "react";
import { GameCards } from "./GameCard";
// import { api } from "../lib/axios"; // Vamos usar fetch direto para garantir

export function Corpo({ addToCart }) {
    const [opacity, setOpacity] = useState(1);
    const [jogosRetro, setJogosRetro] = useState([]);
    const [jogosIndie, setJogosIndie] = useState([]);

    // Efeito do fade no scroll
    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const fadeEnd = 600;
            const newOpacity = Math.max(1 - scrollY / fadeEnd, 0);
            setOpacity(newOpacity);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // --- LÓGICA DE CARREGAR E FILTRAR ---
    useEffect(() => {
        async function carregarDados() {
            try {
                // 1. Pega usuário logado
                const usuarioLogadoString = localStorage.getItem('usuarioLogado');
                let idsJaComprados = [];

                // 2. Se estiver logado, busca o que ele já tem no banco
                if (usuarioLogadoString) {
                    const usuario = JSON.parse(usuarioLogadoString);
                    // Fetch no endpoint novo que criamos
                    const respCliente = await fetch(`http://localhost:8080/clientes/${usuario.id}`);
                    if (respCliente.ok) {
                        const dadosCliente = await respCliente.json();
                        // Cria lista só de IDs: [1, 5, 10...]
                        idsJaComprados = dadosCliente.biblioteca ? dadosCliente.biblioteca.map(g => g.id) : [];
                    }
                }

                // 3. Busca TODOS os jogos da loja
                const response = await fetch("http://localhost:8080/games");
                if (!response.ok) throw new Error("Erro ao buscar jogos");
                const todosJogos = await response.json();

                // 4. FILTRO: Remove da lista o que já está na biblioteca
                const jogosParaExibir = todosJogos.filter(jogo => !idsJaComprados.includes(jogo.id));

                // 5. Separa nas prateleiras
                const indies = jogosParaExibir.filter(jogo => jogo.preco > 0);
                const retro = jogosParaExibir.filter(jogo => !jogo.preco || jogo.preco === 0);

                setJogosIndie(indies);
                setJogosRetro(retro);

            } catch (error) {
                console.error("Erro ao carregar dados:", error);
            }
        }
        carregarDados();
    }, []);

    return (
        <div>
            <div className="corpoSite" style={{ opacity }}>
                <h1 className="tituloStyle">Aqui compra, aqui paga</h1>
                <p className="textStyle">
                    Uma plataforma online para download, venda e hospedagem de jogos independentes
                </p>
            </div>

            <section className="secJogos">
                <h2 style={{ marginBottom: "60px" }}>Jogos Indie</h2>
                {jogosIndie.length === 0 && <p style={{textAlign:'center'}}>Nenhum jogo novo por enquanto.</p>}
                <GameCards games={jogosIndie} addToCart={addToCart} />
            </section>

            <section className="secRetro">
                <h2 style={{ marginBottom: "60px" }}>Jogos Retrô</h2>
                <GameCards games={jogosRetro} addToCart={addToCart} />
            </section>
        </div>
    );
}