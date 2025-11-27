package aqui;

import aqui.Produto_retro;
import aqui.Produto_indie;
import aqui.repository.ProdutoRetroRepository;
import aqui.repository.ProdutoIndieRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/jogos")
@CrossOrigin(origins = "*")
public class ProdutoController {

    // Injeta o especialista em Retro
    @Autowired
    private ProdutoRetroRepository retroRepository;

    // Injeta o especialista em Indie
    @Autowired
    private ProdutoIndieRepository indieRepository;

    // --- ROTAS PARA RETRO ---

    @GetMapping("/retro") // Acessa em: /jogos/retro
    public List<Produto_retro> listarRetros() {
        return retroRepository.findAll();
    }

    @PostMapping("/retro")
    public Produto_retro salvarRetro(@RequestBody Produto_retro jogo) {
        return retroRepository.save(jogo);
    }

    // --- ROTAS PARA INDIE ---

    @GetMapping("/indie") // Acessa em: /jogos/indie
    public List<Produto_indie> listarIndies() {
        return indieRepository.findAll();
    }

    @PostMapping("/indie")
    public Produto_indie salvarIndie(@RequestBody Produto_indie jogo) {
        return indieRepository.save(jogo);
    }
}