package aqui;

import aqui.repository.ClienteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/clientes")
@CrossOrigin(origins = "*") // <--- ESSA LINHA TEM QUE ESTAR ATIVA (COLORIDA)
public class ClienteController {

    @Autowired
    private ClienteRepository repository;

    @PostMapping
    public Cliente cadastrar(@RequestBody Cliente novoCliente) {
        return repository.save(novoCliente);
    }
}