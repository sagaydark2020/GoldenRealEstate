package ae.goldenrealestate.service;

import ae.goldenrealestate.data.model.BuildingEntity;
import ae.goldenrealestate.data.model.TodoEntity;
import ae.goldenrealestate.repository.BuildingRepository;
import ae.goldenrealestate.repository.TodoRepository;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;

import java.util.List;

@Configuration
public class TodoService {

    @Autowired
    TodoRepository todoRepository;

    //change to dto
    public void addTodo(TodoEntity todoEntity) {
        todoRepository.save(todoEntity);
    }

    public void deleteTodo(long id) {
        todoRepository.deleteById(id);
    }

    public List<TodoEntity> getAllTodos() {
        TodoEntity todoEntity = new TodoEntity();
        todoEntity.setDescription("Nake sure you ckean the facade");
        todoEntity.setName("Clean Facade");
        addTodo(todoEntity);
        System.out.println("Added Todo " + todoEntity);
        LoggerFactory.getLogger(TodoService.class).info(" Todo Added {} ", todoEntity);
        return todoRepository.findAll();
    }
}
