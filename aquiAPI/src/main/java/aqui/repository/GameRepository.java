package aqui.repository;

import aqui.Game;
import aqui.GameCategory;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface GameRepository extends JpaRepository<Game, Long> {
    List<Game> findByCategoria(GameCategory categoria);
}
