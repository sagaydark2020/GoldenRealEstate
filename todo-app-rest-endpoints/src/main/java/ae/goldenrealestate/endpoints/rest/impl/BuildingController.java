package ae.goldenrealestate.endpoints.rest.impl;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(value = "/api")
public class BuildingController extends AssetController {

    private static final Logger LOGGER = LoggerFactory.getLogger(BuildingController.class.getName());

    @GetMapping("/buildings")
    public ResponseEntity<List> getBuildings(@RequestParam(required = false) String title) {
        LOGGER.info("Let us log something 33");
        return new ResponseEntity<List>(HttpStatus.OK);
    }

}
