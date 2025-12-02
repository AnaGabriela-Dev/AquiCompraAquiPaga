package aqui;

import java.util.List;

public class CompraRequestDTO {
    private Long userId;
    private List<Long> jogosIds;

    // getters e setters
    public List<Long> getJogosIds() {
        return jogosIds;
    }

    public void setJogosIds(List<Long> jogosIds) {
        this.jogosIds = jogosIds;
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }
}
