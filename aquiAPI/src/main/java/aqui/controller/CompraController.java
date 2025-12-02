package aqui.controller;

import aqui.Compra;
import aqui.CompraRequestDTO;
import aqui.CompraService;
import aqui.Game;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/compras")
@CrossOrigin(origins = "http://localhost:5173")
public class CompraController {

    @Autowired
    private CompraService compraService;

    @PostMapping
    public ResponseEntity<?> registrarCompra(@RequestBody CompraRequestDTO dto) {
        Compra compra = compraService.registrarCompra(dto.getUserId(), dto.getJogosIds());
        return ResponseEntity.ok(compra);
    }

    @GetMapping("/{userId}")
    public ResponseEntity<?> listarJogos(@PathVariable Long userId) {
        List<Game> games = compraService.listarJogosComprados(userId);
        return ResponseEntity.ok(games);
    }
}
