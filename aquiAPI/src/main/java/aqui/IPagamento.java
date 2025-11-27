package aqui;

interface IPagamento {
    boolean processarPagamento(double valor);

    StatusPagamento getStatus();
}