package aqui;

import jakarta.persistence.Entity;
import jakarta.persistence.Table;

@Entity
@Table(name = "jogosi")
public class ProdutoIndie extends Produto {

    private Double preco;

    public ProdutoIndie() {}

    public Double getPreco() { return preco; }
    public void setPreco(Double preco) { this.preco = preco; }
}