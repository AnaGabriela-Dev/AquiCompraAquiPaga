package aqui;

import jakarta.persistence.*;

@Entity
@Table(name = "jogosr") // O nome aqui TEM que bater com o do INSERT
public class Produto_retro {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nome;
    private String descricao;
    private String imagemUrl;

    public Produto_retro() {} // Construtor vazio obrigatório

    // Getters e Setters (pode gerar com Alt+Insert)
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    public String getNome() { return nome; }
    public void setNome(String nome) { this.nome = nome; }
    public String getDescricao() { return descricao; }
    public void setDescricao(String descricao) { this.descricao = descricao; }
    public String getImagemUrl() { return imagemUrl; }
    public void setImagemUrl(String imagemUrl) { this.imagemUrl = imagemUrl;}

}