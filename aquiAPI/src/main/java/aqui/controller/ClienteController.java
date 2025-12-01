package aqui.controller;

import aqui.Cliente;
import aqui.repository.ClienteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.ResponseEntity;


@RestController
@RequestMapping("/clientes")
@CrossOrigin(origins = "*")
public class ClienteController {

    @Autowired
    private ClienteRepository repository;

    @PostMapping
    public Cliente cadastrar(@RequestBody Cliente novoCliente) {
        return repository.save(novoCliente);
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody Cliente dadosLogin) {
        // Busca o cliente no banco pelo email que veio do Front
        Cliente clienteEncontrado = repository.findByEmail(dadosLogin.getEmail());

        // Se não achou ninguém, retorna Erro 404 (Not Found)
        if (clienteEncontrado == null) {
            return ResponseEntity.status(404).body("Não foi encontrado nenhuma conta com este email!");
        }

        // Se achou, verifica se a senha bate
        if (clienteEncontrado.getSenha().equals(dadosLogin.getSenha())) {
            return ResponseEntity.ok(clienteEncontrado);
        } else {
            return ResponseEntity.status(401).body("A senha inserida está incorreta!");
        }
    }

    // --- NOVO MÉTODO: Buscar dados completos (incluindo biblioteca) pelo ID ---
    @GetMapping("/{id}")
    public ResponseEntity<Cliente> buscarPorId(@PathVariable Long id) {
        return repository.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }
}