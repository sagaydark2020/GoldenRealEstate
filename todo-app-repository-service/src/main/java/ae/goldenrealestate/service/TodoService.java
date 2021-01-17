package ae.goldenrealestate.service;

import ae.goldenrealestate.data.dto.ProjectCompositeDto;
import ae.goldenrealestate.data.model.BuildingEntity;
import ae.goldenrealestate.data.model.ProjectProgress;
import ae.goldenrealestate.data.model.TodoEntity;
import ae.goldenrealestate.data.model.UserEntity;
import ae.goldenrealestate.data.specification.TodoSpecification;
import ae.goldenrealestate.repository.BuildingRepository;
import ae.goldenrealestate.repository.TodoRepository;
import ae.goldenrealestate.repository.UserRepository;
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

    @Autowired
    private BuildingRepository buildingRepository;

    @Autowired
    private UserRepository userRepository;

    //change to dto
    public TodoEntity saveUpdate(ProjectCompositeDto projectCompositeDto) {
        LOGGER.info("Creating Project : {} " , projectCompositeDto);
        Optional<BuildingEntity> buildingEntity =  buildingRepository.findById(projectCompositeDto.unwrapBuildingEntity().getId());
        LOGGER.info("Building  : {} " , buildingEntity);
        Optional<UserEntity> userEntity =  userRepository.findById(projectCompositeDto.unwrapUserEntity().getId());
        LOGGER.info("User  : {} " , userEntity);
        TodoEntity todoEntity = projectCompositeDto.unwrapTodoEntity();
        todoEntity.setProjectProgress(ProjectProgress.fromString(projectCompositeDto.getProjectProgress()));
        buildingEntity.ifPresent(todoEntity::setBuilding);
        userEntity.ifPresent(todoEntity::setUser);
        return todoRepository.save(todoEntity);
    }

    public TodoEntity deleteTodoById(long id) {
        TodoEntity todoEntity = findTodoById(id);
        LOGGER.info("Todo deleteTodoById {} ", todoEntity);
        todoRepository.deleteById(id);
        return todoEntity;
    }

    public TodoEntity findTodoById(long id) {
        return todoRepository.findById(id).get();
    }

    public List<TodoEntity> getAllTodos() {
        return todoRepository.findAll();
    }

    public List<TodoEntity> getTodosByFilter(ProjectCompositeDto searchCriteria) {
        TodoSpecification specification = new TodoSpecification(searchCriteria);
        LOGGER.info(" TodoSpecification : {} " , specification);
        return todoRepository.findAll(specification);
    }
}
