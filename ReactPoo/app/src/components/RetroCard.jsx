import "./RetroCard.css";

export function RetroCard({ games, addToCart }) {
  return (
    <div className="cards-container">
      {games.map((game) => (
        <div key={game.id} className="game-card-retro">
          
          <img 
            src={game.imagem_url} 
            alt={game.nome} 
            className="game-card-image" 
          />

          <h3 className="game-card-title">{game.nome}</h3>
          <p className="game-card-description">{game.descricao}</p>

          <button 
            className="game-card-button" 
            onClick={() => addToCart(game)}
          >
            Adicionar ao carrinho
          </button>
        </div>
      ))}
    </div>
  );
}

export default RetroCard;
