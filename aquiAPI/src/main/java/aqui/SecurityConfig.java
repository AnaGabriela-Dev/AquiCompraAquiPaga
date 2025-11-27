package aqui;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
public class SecurityConfig {

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
                .cors(Customizer.withDefaults()) // Aceita a config do Controller/Application
                .csrf(csrf -> csrf.disable())    // Desliga proteção de formulário
                .authorizeHttpRequests(auth -> auth
                        // Libera o "Sinal de Fumaça" que o navegador manda antes do POST
                        .requestMatchers(HttpMethod.OPTIONS, "/**").permitAll()
                        // Libera todo o resto
                        .anyRequest().permitAll()
                )
                .headers(headers -> headers.frameOptions(frame -> frame.disable()));

        return http.build();
    }
}