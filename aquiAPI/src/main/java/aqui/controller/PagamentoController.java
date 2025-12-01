package aqui.controller;

import aqui.PagamentoRequest;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/pagamento")
public class PagamentoController {

    @PostMapping("/calcular")
    public double calcularTotal(@RequestBody PagamentoRequest request) {

        double total = request.cart.stream()
                .mapToDouble(item -> item.preco)
                .sum();

        return total;
    }
}
