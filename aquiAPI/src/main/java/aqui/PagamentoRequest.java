package aqui;

import java.util.List;

public class PagamentoRequest {
    public List<Item> cart;

    public static class Item {
        public double preco;
    }
}