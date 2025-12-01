package aqui.controller;

import aqui.Game; // Sua nova classe única
import aqui.repository.GameRepository; // Seu novo repositório único
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/games")
@CrossOrigin(origins = "*")
public class GameController {

    @Autowired
    private GameRepository repository;

    @GetMapping
    public List<Game> listarTodos() {
        return repository.findAll(); // Traz tudo misturado
    }
}