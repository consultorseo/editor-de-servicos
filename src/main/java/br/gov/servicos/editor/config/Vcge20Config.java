package br.gov.servicos.editor.config;

import br.gov.servicos.editor.servicos.MapaVcge20;
import lombok.AccessLevel;
import lombok.experimental.FieldDefaults;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.io.ClassPathResource;

@Configuration
@FieldDefaults(makeFinal = true, level = AccessLevel.PRIVATE)
public class Vcge20Config {
    @Bean
    public MapaVcge20 getMapaVcge20() {
        return new MapaVcge20(new ClassPathResource("areas-de-interesse.csv"));
    }
}