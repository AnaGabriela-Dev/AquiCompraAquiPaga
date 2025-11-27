package aqui.repository;

import aqui.Produto_indie; // Importa a classe Indie
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProdutoIndieRepository extends JpaRepository<Produto_indie, Long> {
    // Gerencia só a tabela de Indie
}