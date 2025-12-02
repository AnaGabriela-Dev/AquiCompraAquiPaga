package aqui.controller;

import aqui.Cliente;
import aqui.repository.ClienteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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
        Cliente clienteEncontrado = repository.findByEmail(dadosLogin.getEmail());
        if (clienteEncontrado == null) {
            return ResponseEntity.status(404).body("Não foi encontrado nenhuma conta com este email!");
        }
        if (clienteEncontrado.getSenha().equals(dadosLogin.getSenha())) {
            return ResponseEntity.ok(clienteEncontrado);
        } else {
            return ResponseEntity.status(401).body("A senha inserida está incorreta!");
        }
    }

    // --- NOVO: Endpoint para buscar os dados atualizados (incluindo biblioteca) ---
    @GetMapping("/{id}")
    public ResponseEntity<Cliente> buscarPorId(@PathVariable Long id) {
        return repository.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }
}