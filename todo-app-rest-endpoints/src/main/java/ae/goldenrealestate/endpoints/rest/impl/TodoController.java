package ae.goldenrealestate.endpoints.rest.impl;

import ae.goldenrealestate.data.model.TodoEntity;
import ae.goldenrealestate.service.TodoService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;

@CrossOrigin(origins = { "http://localhost:3000", "http://localhost:4200" })
@RestController
public class TodoController extends AssetController {
    private static final Logger LOGGER = LoggerFactory.getLogger(BuildingController.class.getName());

    @Autowired
    private TodoService todoService;

    @GetMapping("/api/todo")
    public ResponseEntity<List<TodoEntity>> getAllTodos() {
        List<TodoEntity> fetchedEntities = todoService.getAllTodos();
        LOGGER.info(" Fetched entities {} ", fetchedEntities);
        return ResponseEntity.ok().body(fetchedEntities);
    }
}
