import "../index.css"
import { useEffect, useState } from "react";
import { GameCards } from "./GameCard";
import { api } from "../lib/axios";

export function Corpo({ addToCart }) {
    const [opacity, setOpacity] = useState(1);

    const [jogosRetro, setJogosRetro] = useState([]);
    const [jogosIndie, setJogosIndie] = useState([]);

    // Efeito do fade no scroll (igual antes)
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

    // Carregar jogos do backend
    useEffect(() => {
        async function fetchJogos() {
            try {
                const indie = await api.get("/jogos/INDIE");
                const retro = await api.get("/jogos/RETRO");

                setJogosIndie(indie.data);  // já vem com id, nome, preco, categoria
                setJogosRetro(retro.data);

            } catch (error) {
                console.error("Erro ao buscar jogos:", error);
            }
        }

        fetchJogos();
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
                <GameCards games={jogosIndie} addToCart={addToCart} />
            </section>

            <section className="secRetro">
                <h2 style={{ marginBottom: "60px" }}>Jogos Retrô</h2>
                <GameCards games={jogosRetro} addToCart={addToCart} />
            </section>
        </div>
    );
}
