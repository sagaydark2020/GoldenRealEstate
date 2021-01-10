package ae.goldenrealestate.endpoints.rest.impl;

import ae.goldenrealestate.config.ServiceConfig;
import ae.goldenrealestate.endpoints.rest.api.RestConfigController;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Import;
import org.springframework.transaction.annotation.EnableTransactionManagement;

@Configuration
@ComponentScan(basePackageClasses = {RestConfigController.class})
@Import({ServiceConfig.class})
@EnableTransactionManagement
public class AssetController {
}
