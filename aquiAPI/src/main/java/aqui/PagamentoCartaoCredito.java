package aqui;

import java.time.LocalDate;

class PagamentoCartaoCredito implements IPagamento {
    private Cliente cliente;
    private String numeroCartao;
    private String nomeTitular;
    private LocalDate dataValidade;
    private StatusPagamento statusPagamento = StatusPagamento.PENDENTE;

    public PagamentoCartaoCredito(String numeroCartao, String nomeTitular) {
        this.numeroCartao = numeroCartao;
        this.nomeTitular = nomeTitular;
    }

    public boolean processarPagamento(double valor) {

        if (valor < 5000.0) {
            statusPagamento = StatusPagamento.APROVADO;
            System.out.println("Status do pagamento: " + statusPagamento);
            return true;
        } else {
            statusPagamento = StatusPagamento.RECUSADO;
            System.out.println("Status do pagamento: " + statusPagamento);
            return false;
        }
    }

    public StatusPagamento getStatus() {
        return statusPagamento;
    }

}
