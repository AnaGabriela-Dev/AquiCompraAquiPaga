package aqui;

import java.time.LocalDate;

class PagamentoBoleto implements IPagamento {
    private Cliente cliente;
    private String codigoBarras;
    private LocalDate dataVencimento;
    private double valor;
    private StatusPagamento statusPagamento = StatusPagamento.PENDENTE;

    public PagamentoBoleto(String codigoBarras, double valor) {
        this.codigoBarras = codigoBarras;
        this.valor = valor;
    }

    public boolean processarPagamento(double valor) {

        this.statusPagamento = StatusPagamento.APROVADO;
        System.out.println("Status do pagamento: " + statusPagamento);
        return true;
    }

    public StatusPagamento getStatus() {
        return statusPagamento;
    }
}
