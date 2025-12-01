package aqui;

import jakarta.persistence.*;

@Entity
@Table(name = "game")
public class Game {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nome;
    private double preco;

    @Enumerated(EnumType.STRING)
    private GameCategory categoria;
    private String descricao;
    private String imagemUrl;

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
    public String getNome() {
        return nome;
    }
    public void setNome(String nome) {
        this.nome = nome;
    }
    public String getDescricao() {
        return descricao;
    }
    public void setDescricao(String descricao) {
        this.descricao = descricao;}
    public String getImagemUrl() {
        return imagemUrl;}
    public void setImagemUrl(String imagemUrl) {
        this.imagemUrl = imagemUrl;}
}