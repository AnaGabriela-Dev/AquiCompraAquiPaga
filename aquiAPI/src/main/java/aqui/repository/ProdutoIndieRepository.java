package aqui.repository;

import aqui.ProdutoIndie;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProdutoIndieRepository extends JpaRepository<ProdutoIndie, Long> {
}