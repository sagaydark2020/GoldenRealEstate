package ae.goldenrealestate.repository;

import ae.goldenrealestate.data.model.BuildingEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BuildingRepository extends JpaRepository <BuildingEntity, Long> {

}
