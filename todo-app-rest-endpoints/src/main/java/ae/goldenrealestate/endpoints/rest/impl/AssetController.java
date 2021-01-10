package ae.goldenrealestate.endpoints.rest.impl;
import ae.goldenrealestate.config.ServiceConfig;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Import;
import org.springframework.transaction.annotation.EnableTransactionManagement;

@Configuration
@ComponentScan(basePackageClasses= {IRestPackage.class})
@Import({ServiceConfig.class})
@EnableTransactionManagement
public class AssetController {
}
