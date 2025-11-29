import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

import "./GameCard.css";

export function GameCards({ games, addToCart }) {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  const handleAddClick = (game) => {
    if (!user) {
      alert("Você precisa estar logado para adicionar itens ao carrinho!");
      navigate("/login"); // redireciona
      return;
    }

    addToCart(game); // só chama se estiver logado
  };

  return (
    <div className="cards-container">
      {games.map((game) => (
        <div key={game.id} className="game-card">
          <img src={game.imagemUrl} alt={game.nome} className="game-card-image" />

          <h3 className="game-card-title">{game.nome}</h3>
          <p className="game-card-description">{game.descricao}</p>
          <p className="game-card-price">R$ {game.preco.toFixed(2)}</p>

          <button
            className="game-card-button"
            key={game.uniqueId}
            onClick={() => handleAddClick(game)}
          >
            Adicionar ao carrinho
          </button>
        </div>
      ))}
    </div>
  );
} export default GameCards;
