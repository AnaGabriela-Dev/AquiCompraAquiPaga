package aqui;

public class ItemCarrinho {
    private Game game;
    private int quantidade;
    private double precoUni;

    public ItemCarrinho(Game game, int quantidade, double precoUni) {
        this.game = game;
        this.quantidade = quantidade;
        this.precoUni = precoUni;
    }

    public void setGame() {
        this.game = game;
    }

    public void setQuantidade() {
        this.quantidade = quantidade;
    }

    public Game getGame() {
        return this.game;
    }

    public int getquantidade() {
        return this.quantidade;
    }

    public void setPrecoUni() {
        this.precoUni = precoUni;
    }

    public double getPrecoUni() {
        return this.precoUni;
    }

    public double subtotal() {
        return game.getPreco() * quantidade;
    }

}
