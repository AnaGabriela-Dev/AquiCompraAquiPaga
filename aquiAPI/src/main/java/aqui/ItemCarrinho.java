package aqui;

public class ItemCarrinho {
    private Produto_indie produto;
    private int quantidade;
    private double precoUni;

    public ItemCarrinho(Produto_indie produto, int quantidade, double precoUni) {
        this.produto = produto;
        this.quantidade = quantidade;
        this.precoUni = precoUni;
    }

    public void setProduto() {
        this.produto = produto;
    }

    public void setQuantidade() {
        this.quantidade = quantidade;
    }

    public Produto_indie getProduto() {
        return this.produto;
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
        return produto.getPreco() * quantidade;
    }

}
