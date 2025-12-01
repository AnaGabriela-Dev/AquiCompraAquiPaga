package aqui.controller;

import aqui.Game;
import aqui.GameCategory;
import aqui.repository.GameRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/jogos")
@CrossOrigin(origins = "*")
public class GameController {

    @Autowired
    private GameRepository gameRepository;

    // LISTAR TODOS OS JOGOS
    @GetMapping
    public List<Game> listarTodos() {
        return gameRepository.findAll();
    }

    // LISTAR POR CATEGORIA (INDIE OU RETRO)
    @GetMapping("/{categoria}")
    public List<Game> listarPorCategoria(@PathVariable String categoria) {
        GameCategory cat = GameCategory.valueOf(categoria.toUpperCase());
        return gameRepository.findByCategoria(cat);
    }

    // SALVAR NOVO JOGO
    @PostMapping
    public Game salvar(@RequestBody Game game) {
        return gameRepository.save(game);
    }
}
