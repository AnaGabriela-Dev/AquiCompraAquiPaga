package aqui.controller;

import aqui.Carrinho;
import aqui.Cliente;
import aqui.Game;
import aqui.repository.CarrinhoRepository;
import aqui.repository.ClienteRepository;
import aqui.repository.GameRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/carrinho")
@CrossOrigin(origins = "*")
public class CarrinhoController {

    @Autowired
    private CarrinhoRepository carrinhoRepo;
    @Autowired
    private ClienteRepository clienteRepo;
    @Autowired
    private GameRepository gameRepo;

    // Buscar Carrinho
    @GetMapping("/{clienteId}")
    public Carrinho buscarCarrinho(@PathVariable Long clienteId) {
        Cliente cliente = clienteRepo.findById(clienteId).orElse(null);
        return obterOuCriarCarrinho(cliente);
    }

    // Adicionar Item
    @PostMapping("/{clienteId}/adicionar/{gameId}")
    public Carrinho adicionarAoCarrinho(@PathVariable Long clienteId, @PathVariable Long gameId) {
        Cliente cliente = clienteRepo.findById(clienteId).orElse(null);
        Game game = gameRepo.findById(gameId).orElse(null);

        if (cliente != null && game != null) {
            Carrinho carrinho = obterOuCriarCarrinho(cliente);
            // Evita duplicatas no carrinho
            if (!carrinho.getProdutos().contains(game)) {
                carrinho.adicionarProduto(game);
                return carrinhoRepo.save(carrinho);
            }
            return carrinho;
        }
        return null;
    }

    // --- FINALIZAR COMPRA: Move do Carrinho para a Biblioteca ---
    @PostMapping("/{clienteId}/finalizar")
    public ResponseEntity<?> finalizarCompra(@PathVariable Long clienteId) {
        Cliente cliente = clienteRepo.findById(clienteId).orElse(null);

        if (cliente == null) return ResponseEntity.notFound().build();

        Carrinho carrinho = carrinhoRepo.findByCliente(cliente);
        if (carrinho == null || carrinho.getProdutos().isEmpty()) {
            return ResponseEntity.badRequest().body("Carrinho vazio!");
        }

        // 1. Adiciona os jogos na biblioteca do cliente
        cliente.getBiblioteca().addAll(carrinho.getProdutos());
        clienteRepo.save(cliente);

        // 2. Limpa o carrinho
        carrinho.getProdutos().clear();
        carrinhoRepo.save(carrinho);

        return ResponseEntity.ok("Compra realizada com sucesso! Jogos adicionados ao perfil.");
    }

    private Carrinho obterOuCriarCarrinho(Cliente cliente) {
        if (cliente == null) return null;
        Carrinho carrinho = carrinhoRepo.findByCliente(cliente);
        if (carrinho == null) {
            carrinho = new Carrinho();
            carrinho.setCliente(cliente);
            carrinhoRepo.save(carrinho);
        }
        return carrinho;
    }
}