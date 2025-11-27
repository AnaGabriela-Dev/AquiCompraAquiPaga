package aqui;

import java.time.LocalDate;
import java.time.LocalDate;

public class PagamentoPix implements IPagamento{
    private String codigoBarras;
    private double valor;
    private LocalDate dataValidade;
    private StatusPagamento statusPagamento = StatusPagamento.PENDENTE;

    public PagamentoPix(double valor) {
        this.valor = valor;
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
