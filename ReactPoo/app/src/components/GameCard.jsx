import "./GameCard.css";

export function GameCards({ games, addToCart }) {
  return (
    <div className="cards-container">
      {games.map((game) => (
        <div key={game.id} className="game-card">
          <img src={game.imagem_url} alt={game.nome} className="game-card-image" />

          <h3 className="game-card-title">{game.nome}</h3>
          <p className="game-card-description">{game.descricao}</p>
          <p className="game-card-price">R$ {game.preco.toFixed(2)}</p>

          <button className="game-card-button" onClick={() => addToCart(game)}>
            Adicionar ao carrinho
          </button>
        </div>
      ))}
    </div>
  );
} export default GameCards;
