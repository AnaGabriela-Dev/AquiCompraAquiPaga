package aqui;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

public class Carrinho {
    private LocalDate data;
    private StatusPedidos status;
    private List<ItemCarrinho> itens = new ArrayList<>();
    private Cliente cliente;
    private IPagamento metodoPagamento;

    public Carrinho(Cliente cliente) {
        this.cliente = cliente;
        this.data = LocalDate.now();
        this.status = StatusPedidos.PENDENTE;
    }

    private StatusPedidos statusPedido = StatusPedidos.PENDENTE;

    public StatusPedidos getStatusPedido() {
        return statusPedido;
    }

    public void setStatusPedido(StatusPedidos statusPedido) {
        this.statusPedido = statusPedido;
    }

    public LocalDate getData() {
        return data;
    }

    public void setData(LocalDate data) {
        this.data = data;
    }

    public Cliente getCliente() {
        return cliente;
    }

    public void setCliente(Cliente cliente) {
        this.cliente = cliente;
    }

    public List<ItemCarrinho> getItens() {
        return itens;
    }

    public void setItens(List<ItemCarrinho> itens) {
        this.itens = itens;
    }

    public IPagamento getMetodoPagamento() {
        return metodoPagamento;
    }

    public void setMetodoPagamento(IPagamento metodoPagamento) {
        this.metodoPagamento = metodoPagamento;
    }

    public void adicionarItem(Game game, int quantidade, double precoUni) {
        ItemCarrinho item = new ItemCarrinho(game, quantidade, precoUni);
        itens.add(item);
    } 

    public double calcularTotal() {
        double total = 0.0;
        for (ItemCarrinho item : itens) {
            total += item.subtotal();
        }
        return total;
    }


    public void removeItem(ItemCarrinho item) {
        itens.remove(item);
    }
    public double aplicarDesconto(double desconto) {
        if (desconto < 0 || desconto > 1) {
            throw new IllegalArgumentException("O desconto deve estar entre 0 e 1");
        }

        double total = calcularTotal();
        double valorComDesconto = total * (1 - desconto);

        return valorComDesconto;
    }



    public boolean processarPagamento() {
        double valor = calcularTotal();
        if (metodoPagamento != null) {
            boolean sucesso = metodoPagamento.processarPagamento(valor);

            if (sucesso) {
                statusPedido = StatusPedidos.PROCESSANDO;
            } else {
                statusPedido = StatusPedidos.PENDENTE;
            }
            return sucesso;
        }
        return false;
    }
}
