package aqui.repository;

import aqui.ProdutoRetro;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProdutoRetroRepository extends JpaRepository<ProdutoRetro, Long> {
}