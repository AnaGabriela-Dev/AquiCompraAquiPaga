import "../index.css"
import { useEffect, useState } from "react";
import { GameCards } from "./GameCard";
import { api } from "../lib/axios"; // Supondo que api esteja configurada para http://localhost:8080

export function Corpo({ addToCart }) {
    const [opacity, setOpacity] = useState(1);

    const [jogosRetro, setJogosRetro] = useState([]);
    const [jogosIndie, setJogosIndie] = useState([]);

    // Efeito do fade no scroll (Mantido original)
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

    // --- AQUI ESTÁ A MUDANÇA ---
    // Carregar jogos do backend (Endpoint Único /games)
    useEffect(() => {
        async function fetchJogos() {
            try {
                // 1. Busca TUDO na rota /games
                const response = await api.get("/games");
                const todosJogos = response.data;

                // 2. Filtra aqui no Javascript
                // Indies: Preço > 0
                const indies = todosJogos.filter(jogo => jogo.preco && jogo.preco > 0);
                
                // Retrô: Preço 0 ou nulo
                const retro = todosJogos.filter(jogo => !jogo.preco || jogo.preco === 0);

                setJogosIndie(indies);
                setJogosRetro(retro);

            } catch (error) {
                console.error("Erro ao buscar jogos:", error);
            }
        }

        fetchJogos();
    }, []);

    return (
        <div>
            {/* Cabeçalho com fade (Mantido original) */}
            <div className="corpoSite" style={{ opacity }}>
                <h1 className="tituloStyle">Aqui compra, aqui paga</h1>
                <p className="textStyle">
                    Uma plataforma online para download, venda e hospedagem de jogos independentes
                </p>
            </div>

            {/* Seção Indies */}
            <section className="secJogos">
                <h2 style={{ marginBottom: "60px" }}>Jogos Indie</h2>
                {/* Passa a lista filtrada para o seu componente de cards */}
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