package aqui.repository;

import aqui.Carrinho;
import aqui.Cliente;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CarrinhoRepository extends JpaRepository<Carrinho, Long> {
    // Busca o carrinho específico daquele cliente
    Carrinho findByCliente(Cliente cliente);
}