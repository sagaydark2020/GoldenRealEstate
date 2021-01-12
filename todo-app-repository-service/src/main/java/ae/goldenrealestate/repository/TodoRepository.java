package ae.goldenrealestate.repository;

import ae.goldenrealestate.data.model.TodoEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TodoRepository extends JpaRepository<TodoEntity, Long> {

}
