package ae.goldenrealestate.endpoints.rest.impl;

import ae.goldenrealestate.data.model.BuildingEntity;
import ae.goldenrealestate.service.BuildingService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;

@RestController
@CrossOrigin(origins = {"http://localhost:3000", "http://localhost:4200"})
public class BuildingController extends AssetResource {

    private static final Logger LOGGER = LoggerFactory.getLogger(BuildingController.class.getName());

    @Autowired
    private BuildingService buildingService;

    @GetMapping("/api/buildings")
    public ResponseEntity<List<BuildingEntity>> getAllBuildings() {
        try {
            List<BuildingEntity> fetchedEntities = buildingService.getAllBuildings();
            LOGGER.info(" Fetched entities {} ", fetchedEntities);
            return ResponseEntity.ok().body(fetchedEntities);
        } catch (Exception e) {
            LOGGER.error("Exception while retrieving building . Stacktrace: \n{}", e.getStackTrace());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @GetMapping("/api/buildings/{id}")
    public ResponseEntity<BuildingEntity> getBuildingById(@PathVariable long id) {
        try {
            BuildingEntity fetchedEntities = buildingService.findBuildingById(id);
            LOGGER.info(" Fetched entities by id {} ", fetchedEntities);
            return ResponseEntity.ok().body(fetchedEntities);
        } catch (Exception e) {
            LOGGER.error("Exception while retrieving building . Stacktrace: \n{}", e.getStackTrace());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @DeleteMapping("/api/buildings/{id}")
    public ResponseEntity<BuildingEntity> deleteBuildingById(@PathVariable long id) {
        try {
            BuildingEntity fetchedEntities = buildingService.deleteBuildingById(id);
            LOGGER.info(" Deleted entities {} ", fetchedEntities);
            return ResponseEntity.ok().body(fetchedEntities);
        } catch (Exception e) {
            LOGGER.error("Exception while Deleting building . Stacktrace: \n{}", e.getStackTrace());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @PutMapping("/api/buildings/{id}")
    public ResponseEntity<BuildingEntity> updateBuilding(@PathVariable long id,
                                                         @RequestBody BuildingEntity buildingEntity) {
        try {
            BuildingEntity updatedEntity = buildingService.updateBuilding(buildingEntity);
            return new ResponseEntity<BuildingEntity>(updatedEntity, HttpStatus.OK);
        } catch (Exception e) {
            LOGGER.error("Exception while Updating building . Stacktrace: \n{}", e.getStackTrace());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @PostMapping("/api/buildings")
    public ResponseEntity<Void> createBuilding(@PathVariable String username, @RequestBody BuildingEntity buildingEntity) {
        try {
            BuildingEntity createdEntity = buildingService.createBuilding(buildingEntity);
            URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(createdEntity.getId())
                    .toUri();
            return ResponseEntity.created(uri).build();
        } catch (Exception e) {
            LOGGER.error("Exception while Creating building . Stacktrace: \n{}", e.getStackTrace());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }
}
