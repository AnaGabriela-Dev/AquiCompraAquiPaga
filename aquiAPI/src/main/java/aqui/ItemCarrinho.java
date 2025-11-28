package aqui;

public class ItemCarrinho {
    private ProdutoIndie produto;
    private int quantidade;
    private double precoUni;

    public ItemCarrinho(ProdutoIndie produto, int quantidade, double precoUni) {
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

    public ProdutoIndie getProduto() {
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
