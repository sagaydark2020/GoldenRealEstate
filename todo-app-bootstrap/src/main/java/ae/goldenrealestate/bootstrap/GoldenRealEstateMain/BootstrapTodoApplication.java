package ae.goldenrealestate.bootstrap.GoldenRealEstateMain;

import ae.goldenrealestate.endpoints.rest.impl.AssetController;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Import;

@Import(AssetController.class)
@SpringBootApplication
public class BootstrapTodoApplication {

    public static void main(String[] args) {

        SpringApplication.run(BootstrapTodoApplication.class, args);
    }

}
