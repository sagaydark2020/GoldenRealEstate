package ae.goldenrealestate.endpoints.rest;

import com.sun.org.slf4j.internal.Logger;
import com.sun.org.slf4j.internal.LoggerFactory;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;

@ComponentScan("ae.goldenrealestate")
@RestController
@RequestMapping(value = "/api")
public class BuildingController {

    private static final Logger logger = LoggerFactory.getLogger(BuildingController.class.getClass());

    @GetMapping("/buildings")
    public ResponseEntity<List> getBuildings(@RequestParam(required = false) String title) {
        logger.debug("GetBuildings API Invoked");
        return new ResponseEntity<List>(HttpStatus.OK);
    }

}
