import { jogosi } from "../data/jogosi";
import { jogosr } from "../data/jogosr";

import "../index.css"
import { useEffect, useState } from "react";
import { RetroCard } from "./RetroCard";
import { GameCards } from "./GameCard";

export function Corpo({addToCart}) {

    const tituloStyle={
        color: "white",
        fontSize : "80px",
        transform: "translateY(-50px)"
    }

    const textStyle={
        color: "white",
        fontSize : "30px",
        transform: "translateY(-10px)"
    }

       const [opacity, setOpacity] = useState(1);

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


    return (
        <div>
            <div className="corpoSite" style={{ opacity }}>
                <h1 style={tituloStyle}>Aqui compra, aqui paga</h1>
                <p style={textStyle}>Uma plataforma online para download, venda e hospedagem de jogos independentes</p>
            </div>

            <section className="secJogos">
                <h2 style={{
                    marginBottom: "60px"
                }}>Jogos</h2>
                <GameCards games={jogosi} addToCart={addToCart} />
            </section>

            <section className="secRetro">
                <h2 style={{
                    marginBottom: "60px"
                }}>Retro</h2>
                <GameCards games={jogosr} addToCart={addToCart} />
            </section>
        </div>
    );
}