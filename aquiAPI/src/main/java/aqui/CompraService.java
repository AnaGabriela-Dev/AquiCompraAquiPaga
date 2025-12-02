package aqui;

import aqui.repository.ClienteRepository;
import aqui.repository.CompraRepository;
import aqui.repository.GameRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class CompraService {

    @Autowired
    private CompraRepository compraRepository;

    @Autowired
    private ClienteRepository clienteRepository;

    @Autowired
    private GameRepository jogoRepository;

    public Compra registrarCompra(Long userId, List<Long> jogosIds) {
        Cliente cliente = clienteRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("Usuário não encontrado"));

        List<Game> games = jogoRepository.findAllById(jogosIds);

        Compra compra = new Compra();
        compra.setCliente(cliente);
        compra.setGames(games);

        return compraRepository.save(compra);
    }

    public List<Game> listarJogosComprados(Long userId) {
        List<Compra> compras = compraRepository.findByClienteId(userId);

        return compras.stream()
                .flatMap(c -> c.getGames().stream())
                .distinct()
                .collect(Collectors.toList());
    }
}
