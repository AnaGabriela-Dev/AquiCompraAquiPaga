import "../index.css"
import { useEffect, useState } from "react";
import { GameCards } from "./GameCard";
// import { api } from "../lib/axios"; // <-- Não vamos usar o axios agora para evitar erro de porta

export function Corpo({ addToCart }) {
    const [opacity, setOpacity] = useState(1);

    const [jogosRetro, setJogosRetro] = useState([]);
    const [jogosIndie, setJogosIndie] = useState([]);

    // Efeito do fade (Mantido)
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

    // --- CORREÇÃO AQUI: Carregar jogos com fetch direto e lógica de filtro ---
    useEffect(() => {
        async function carregarDados() {
            try {
                // 1. Pega usuário logado para filtrar biblioteca (se houver)
                const usuarioLogado = JSON.parse(localStorage.getItem('usuarioLogado'));
                let idsJaComprados = [];

                if (usuarioLogado) {
                    const respCliente = await fetch(`http://localhost:8080/clientes/${usuarioLogado.id}`);
                    if (respCliente.ok) {
                        const dadosCliente = await respCliente.json();
                        idsJaComprados = dadosCliente.biblioteca ? dadosCliente.biblioteca.map(g => g.id) : [];
                    }
                }

                // 2. Busca TODOS os jogos
                const response = await fetch("http://localhost:8080/games");
                if (!response.ok) throw new Error("Erro ao conectar com a API");
                
                const todosJogos = await response.json();

                // 3. Remove os que já estão na biblioteca
                const jogosParaExibir = todosJogos.filter(jogo => !idsJaComprados.includes(jogo.id));

                // 4. Separa nas prateleiras usando o PREÇO
                // Indies: Preço maior que 0
                const indies = jogosParaExibir.filter(jogo => jogo.preco && jogo.preco > 0);
                
                // Retrô: Preço 0 ou nulo
                const retro = jogosParaExibir.filter(jogo => !jogo.preco || jogo.preco === 0);

                setJogosIndie(indies);
                setJogosRetro(retro);

            } catch (error) {
                console.error("Erro ao buscar jogos:", error);
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

            {/* Seção Indies */}
            <section className="secJogos">
                <h2 style={{ marginBottom: "60px" }}>Jogos Indie</h2>
                <GameCards games={jogosIndie} addToCart={addToCart} />
            </section>

            {/* Seção Retrô */}
            <section className="secRetro">
                <h2 style={{ marginBottom: "60px" }}>Jogos Retrô</h2>
                <GameCards games={jogosRetro} addToCart={addToCart} />
            </section>
        </div>
    );
}