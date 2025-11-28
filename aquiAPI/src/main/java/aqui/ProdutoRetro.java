package aqui;

import jakarta.persistence.Entity;
import jakarta.persistence.Table;

@Entity
@Table(name = "jogosr")
public class ProdutoRetro extends Produto {


    public ProdutoRetro() {}
}