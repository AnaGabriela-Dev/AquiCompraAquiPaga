import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

import "./PerfilCard.css";

export function PerfilCard({ games }) {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  return (
    <div className="box-card">
      {games.map((game) => (
        <div key={game.id} className="card-game">
          <img src={game.imagemUrl} alt={game.nome} className="game-card-image" />

          <h3 className="name-game">{game.nome}</h3>
          <p className="description-game">{game.descricao}</p>
        </div>
      ))}
    </div>
  );
} export default PerfilCard;
