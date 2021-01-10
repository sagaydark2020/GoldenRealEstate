package ae.goldenrealestate.endpoints.rest.impl;

import ae.goldenrealestate.data.model.BuildingEntity;
import ae.goldenrealestate.service.BuildingService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;

@RestController
@CrossOrigin(origins = { "http://localhost:3000", "http://localhost:4200" })
public class BuildingController extends AssetResource {

    private static final Logger LOGGER = LoggerFactory.getLogger(BuildingController.class.getName());

    @Autowired
    private BuildingService buildingService;

    @GetMapping("/api/buildings")
    public ResponseEntity<List<BuildingEntity>> getAllBuildings() {
        List<BuildingEntity> fetchedEntities = buildingService.getBuildings();
        LOGGER.info(" Fetched entities {} ", fetchedEntities);
        return ResponseEntity.ok().body(fetchedEntities);
    }

}
