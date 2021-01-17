package ae.goldenrealestate.repository;

import ae.goldenrealestate.data.model.TodoEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

public interface TodoRepository extends JpaRepository<TodoEntity, Long> , JpaSpecificationExecutor<TodoEntity> {

}
