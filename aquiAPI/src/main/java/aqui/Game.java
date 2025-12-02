package aqui;

import jakarta.persistence.*;

@Entity
@Table(name = "game")
public class Game {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nome;
    private Double preco;

    // USE APENAS STRING (Sem @Enumerated)
    private String categoria;

    @Column(columnDefinition = "TEXT")
    private String descricao;

    private String imagemUrl;
    private String urlJogo;
    private String desenvolvedor;

    public Game() {}

    // Getters e Setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    public String getNome() { return nome; }
    public void setNome(String nome) { this.nome = nome; }
    public Double getPreco() { return preco; }
    public void setPreco(Double preco) { this.preco = preco; }
    public String getCategoria() { return categoria; }
    public void setCategoria(String categoria) { this.categoria = categoria; }
    public String getDescricao() { return descricao; }
    public void setDescricao(String descricao) { this.descricao = descricao; }
    public String getImagemUrl() { return imagemUrl; }
    public void setImagemUrl(String imagemUrl) { this.imagemUrl = imagemUrl; }
    public String getUrlJogo() { return urlJogo; }
    public void setUrlJogo(String urlJogo) { this.urlJogo = urlJogo; }
    public String getDesenvolvedor() { return desenvolvedor; }
    public void setDesenvolvedor(String desenvolvedor) { this.desenvolvedor = desenvolvedor; }
}