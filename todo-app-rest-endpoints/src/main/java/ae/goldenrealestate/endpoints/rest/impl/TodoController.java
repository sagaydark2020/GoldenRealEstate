package ae.goldenrealestate.endpoints.rest.impl;

import ae.goldenrealestate.data.dto.ProjectCompositeDto;
import ae.goldenrealestate.data.model.TodoEntity;
import ae.goldenrealestate.service.TodoService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;

@CrossOrigin(origins = {"http://localhost:3000", "http://localhost:4200"})
@RestController
public class TodoController extends AssetResource {

    private static final Logger LOGGER = LoggerFactory.getLogger(TodoController.class.getName());

    @Autowired
    private TodoService todoService;

    @GetMapping("/api/todo")
    public ResponseEntity<List<TodoEntity>> getAllTodos() {
        try {
            List<TodoEntity> fetchedEntities = todoService.getAllTodos();
            LOGGER.info(" Fetched entities {} ", fetchedEntities);
            return ResponseEntity.ok().body(fetchedEntities);
        } catch (Exception e) {
            LOGGER.error("Exception while retrieving Project . Stacktrace: \n{}", e.getStackTrace());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @GetMapping("/api/todo/{id}")
    public ResponseEntity<TodoEntity> getTodoById(@PathVariable long id) {
        try {
            TodoEntity fetchedEntities = todoService.findTodoById(id);
            LOGGER.info(" Fetched entities by id {} ", fetchedEntities);
            return ResponseEntity.ok().body(fetchedEntities);
        } catch (Exception e) {
            LOGGER.error("Exception while retrieving Project . Stacktrace: \n{}", e.getStackTrace());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @DeleteMapping("/api/todo/{id}")
    public ResponseEntity<TodoEntity> deleteTodoById(@PathVariable long id) {
        try {
            TodoEntity fetchedEntities = todoService.deleteTodoById(id);
            LOGGER.info(" Deleted entities {} ", fetchedEntities);
            return ResponseEntity.ok().body(fetchedEntities);
        } catch (Exception e) {
            LOGGER.error("Exception while deleting Project . Stacktrace: \n{}", e.getStackTrace());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @PutMapping("/api/todo/{id}")
    public ResponseEntity<TodoEntity> updateTodo(@PathVariable long id,
                                                 @RequestBody ProjectCompositeDto projectCompositeDto) {
        try {
            TodoEntity createdEntity = todoService.saveUpdate(projectCompositeDto);
            URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(createdEntity.getId())
                    .toUri();
            return ResponseEntity.created(uri).build();
        } catch (Exception e) {
            LOGGER.error("Exception while Updating Project . Stacktrace: \n{}", e.getStackTrace());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @PostMapping("/api/todo")
    public ResponseEntity<Void> createTodo(@PathVariable Long buildingId, @RequestBody ProjectCompositeDto
            projectCompositeDto) {
        try {
            TodoEntity createdEntity = todoService.saveUpdate(projectCompositeDto);
            URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(createdEntity.getId())
                    .toUri();
            return ResponseEntity.created(uri).build();
        } catch (Exception e) {
            LOGGER.error("Exception while retrieving Project . Stacktrace: \n{}", e.getStackTrace());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }
}
