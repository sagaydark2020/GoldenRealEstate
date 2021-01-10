package ae.goldenrealestate.service;

import ae.goldenrealestate.data.model.TodoEntity;
import ae.goldenrealestate.repository.TodoRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;

import java.util.List;
import java.util.Optional;

@Configuration
public class TodoService {

    private static final Logger LOGGER = LoggerFactory.getLogger(TodoService.class);

    @Autowired
    TodoRepository todoRepository;

    //change to dto
    public void addTodo(TodoEntity todoEntity) {
        todoRepository.save(todoEntity);
    }

    public Optional<TodoEntity> deleteTodoById(long id) {
        Optional<TodoEntity> todoEntity = todoRepository.findById(id);
        LOGGER.info("Todo findByid {} ", todoEntity);
        todoRepository.deleteById(id);
        return todoEntity;
    }

    public List<TodoEntity> getAllTodos() {
        TodoEntity todoEntity = new TodoEntity();
        todoEntity.setDescription("Nake sure you ckean the facade");
        todoEntity.setName("Clean Facade");
        addTodo(todoEntity);
        LOGGER.info("Todo Added {} ", todoEntity);
        return todoRepository.findAll();
    }
}
