package ae.goldenrealestate.endpoints.rest.impl;

import ae.goldenrealestate.config.ServiceConfig;
import ae.goldenrealestate.data.model.BuildingEntity;
import ae.goldenrealestate.service.BuildingService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Import;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;


@RestController
public class BuildingController extends AssetController {

    private static final Logger LOGGER = LoggerFactory.getLogger(BuildingController.class.getName());

    @Autowired
    private BuildingService buildingService;


    @GetMapping("/api/buildingssdd")
    public ResponseEntity<List<BuildingEntity>> getAllBuildings() {
        LOGGER.info("something");
        return ResponseEntity.ok().body(buildingService.getBuildings());
    }

}
