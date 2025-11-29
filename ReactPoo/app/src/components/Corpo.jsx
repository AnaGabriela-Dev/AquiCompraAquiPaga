import "../index.css"
import { useEffect, useState } from "react";
import { GameCards } from "./GameCard";

export function Corpo({addToCart}) {
    const [opacity, setOpacity] = useState(1);

    const [jogosRetro, setJogosRetro] = useState([]);
    const [jogosIndie, setJogosIndie] = useState([]);

    useEffect(() => {
        const handleScroll = () => {
            const scrollAmount = window.scrollY;
            const fadeStart = 300;     // onde o fade começa
            const fadeEnd = 600;     // onde o fade termina
            const newOpacity = Math.max(1 - scrollAmount / fadeEnd, 0);
            setOpacity(newOpacity);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        async function fetchJogos() {
            try {
                const indieResponse = await fetch("http://localhost:8080/jogos/indie");
                const retroResponse = await fetch("http://localhost:8080/jogos/retro");

                const indieData = await indieResponse.json();
                const retroData = await retroResponse.json();

                setJogosIndie(
                    indieData.map(jogo => ({
                        ...jogo,
                        uniqueId: `indie-${jogo.id}`
                    }))
                );

                setJogosRetro(
                    retroData.map(jogo => ({
                        ...jogo,
                        uniqueId: `retro-${jogo.id}`
                    }))
                );
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
                <p className="textStyle">Uma plataforma online para download, venda e hospedagem de jogos independentes</p>
            </div>

            <section className="secJogos">
                <h2 style={{
                    marginBottom: "60px"
                }}>Jogos</h2>
                <GameCards games={jogosIndie} addToCart={addToCart} />
            </section>

            <section className="secRetro">
                <h2 style={{
                    marginBottom: "60px"
                }}>Retro</h2>
                <GameCards games={jogosRetro} addToCart={addToCart} />
            </section>
        </div>
    );
}