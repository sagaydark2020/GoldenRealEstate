package ae.goldenrealestate.endpoints.rest.impl;

import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Import;

@Configuration
@Import(BuildingController.class)
public class AssetController {
}
