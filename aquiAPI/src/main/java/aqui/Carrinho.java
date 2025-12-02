package aqui;

import jakarta.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "carrinhos")
public class Carrinho {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToOne
    @JoinColumn(name = "cliente_id")
    private Cliente cliente;

    // --- LISTA DE JOGOS (Essencial para o Controller funcionar) ---
    @ManyToMany(fetch = FetchType.EAGER)
    @JoinTable(
            name = "carrinho_jogos",
            joinColumns = @JoinColumn(name = "carrinho_id"),
            inverseJoinColumns = @JoinColumn(name = "game_id")
    )
    private List<Game> produtos = new ArrayList<>();

    private Double valorTotal = 0.0;

    public Carrinho() {}

    // --- CÁLCULO DO TOTAL ---
    // Soma os preços dos jogos. Se a lista for vazia, retorna 0.
    public Double getValorTotal() {
        if (produtos == null || produtos.isEmpty()) return 0.0;

        return produtos.stream()
                .mapToDouble(Game::getPreco) // Pega o preço (double) diretamente
                .sum();
    }

    // --- GETTERS E SETTERS (O erro estava na falta destes) ---

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public Cliente getCliente() { return cliente; }
    public void setCliente(Cliente cliente) { this.cliente = cliente; }

    // O Controller chama este método: carrinho.getProdutos()
    public List<Game> getProdutos() { return produtos; }
    public void setProdutos(List<Game> produtos) { this.produtos = produtos; }

    // --- MÉTODOS AUXILIARES (Facilitam adicionar/remover) ---
    public void adicionarProduto(Game jogo) {
        this.produtos.add(jogo);
    }

    public void removerProduto(Game jogo) {
        this.produtos.remove(jogo);
    }
}