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
    private TodoRepository todoRepository;

    //change to dto
    public TodoEntity createTodo(TodoEntity todoEntity) {
        return todoRepository.save(todoEntity);
    }

    public TodoEntity updateTodo(TodoEntity todoEntity) {
        return todoRepository.save(todoEntity);
    }

    public Optional<TodoEntity> deleteTodoById(long id) {
        Optional<TodoEntity> todoEntity = findTodoById(id);
        LOGGER.info("Todo deleteTodoById {} ", todoEntity);
        todoRepository.deleteById(id);
        return todoEntity;
    }

    public Optional<TodoEntity> findTodoById(long id) {
        return todoRepository.findById(id);
    }

    public List<TodoEntity> getAllTodos() {;
        return todoRepository.findAll();
    }
}
