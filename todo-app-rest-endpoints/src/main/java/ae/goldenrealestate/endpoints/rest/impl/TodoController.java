package ae.goldenrealestate.endpoints.rest.impl;

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
import java.util.Optional;

@CrossOrigin(origins = {"http://localhost:3000", "http://localhost:4200"})
@RestController
public class TodoController extends AssetResource {

    private static final Logger LOGGER = LoggerFactory.getLogger(BuildingController.class.getName());

    @Autowired
    private TodoService todoService;

    @GetMapping("/api/todo")
    public ResponseEntity<List<TodoEntity>> getAllTodos() {
        List<TodoEntity> fetchedEntities = todoService.getAllTodos();
        LOGGER.info(" Fetched entities {} ", fetchedEntities);
        return ResponseEntity.ok().body(fetchedEntities);
    }

    @GetMapping("/api/todo/{id}")
    public ResponseEntity<Optional<TodoEntity>> getTodoById(@PathVariable long id) {
        Optional<TodoEntity> fetchedEntities = todoService.findTodoById(id);
        LOGGER.info(" Fetched entities by id {} ", fetchedEntities);
        return ResponseEntity.ok().body(fetchedEntities);
    }

    @DeleteMapping("/api/todo/{id}")
    public ResponseEntity<Optional<TodoEntity>> deleteTodoById(@PathVariable long id) {
        Optional<TodoEntity> fetchedEntities = todoService.deleteTodoById(id);
        LOGGER.info(" Deleted entities {} ", fetchedEntities);
        return ResponseEntity.ok().body(fetchedEntities);
    }

    @PutMapping("/api/todo/{id}")
    public ResponseEntity<TodoEntity> updateTodo(@PathVariable long id,
                                                 @RequestBody TodoEntity todoEntity) {
        TodoEntity updatedEntity = todoService.updateTodo(todoEntity);
        return new ResponseEntity<TodoEntity>(todoEntity, HttpStatus.OK);
    }

    @PostMapping("/api/todo")
    public ResponseEntity<Void> createTodo(@PathVariable String username, @RequestBody TodoEntity todoEntity) {
        TodoEntity createdEntity = todoService.createTodo(todoEntity);
        URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(createdEntity.getId())
                .toUri();
        return ResponseEntity.created(uri).build();
    }
}
