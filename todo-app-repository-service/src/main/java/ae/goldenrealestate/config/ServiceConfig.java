package ae.goldenrealestate.config;

import ae.goldenrealestate.IServiceConfig;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.transaction.annotation.EnableTransactionManagement;

@Configuration
@ComponentScan(basePackageClasses = {IServiceConfig.class})
@EntityScan(basePackageClasses = {IServiceConfig.class})
@EnableJpaRepositories(basePackageClasses = {IServiceConfig.class})
@EnableTransactionManagement
public class ServiceConfig {
}
