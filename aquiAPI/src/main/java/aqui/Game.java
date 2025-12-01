package aqui;

import jakarta.persistence.*;

@Entity
public class Game {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nome;
    private double preco;

    @Enumerated(EnumType.STRING)
    private GameCategory categoria;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public double getPreco() {
        return preco;
    }

    public void setPreco(double preco) {
        this.preco = preco;
    }

    public GameCategory getCategoria() {
        return categoria;
    }

    public void setCategoria(GameCategory categoria) {
        this.categoria = categoria;
    }
}