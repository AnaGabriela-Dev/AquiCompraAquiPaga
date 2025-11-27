package aqui.repository;

import aqui.Produto_retro; // Importa a classe Retro
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProdutoRetroRepository extends JpaRepository<Produto_retro, Long> {
    // Gerencia só a tabela de Retro
}