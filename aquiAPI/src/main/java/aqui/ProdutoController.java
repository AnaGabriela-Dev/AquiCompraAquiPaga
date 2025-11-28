package aqui;

import  aqui.repository.ProdutoRetroRepository;
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
    public List<ProdutoRetro> listarRetros() {
        return retroRepository.findAll();
    }

    @PostMapping("/retro")
    public ProdutoRetro salvarRetro(@RequestBody ProdutoRetro jogo) {
        return retroRepository.save(jogo);
    }

    // --- ROTAS PARA INDIE ---

    @GetMapping("/indie") // Acessa em: /jogos/indie
    public List<ProdutoIndie> listarIndies() {
        return indieRepository.findAll();
    }

    @PostMapping("/indie")
    public ProdutoIndie salvarIndie(@RequestBody ProdutoIndie jogo) {
        return indieRepository.save(jogo);
    }
}