package ae.goldenrealestate.service;

import ae.goldenrealestate.data.model.BuildingEntity;
import ae.goldenrealestate.repository.BuildingRepository;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;

import java.util.List;

@Configuration
public class BuildingService {

    @Autowired
    private BuildingRepository buildingRepository;

    //change to dto
    public void addBuilding(BuildingEntity buildingEntity) {
        buildingRepository.save(buildingEntity);
    }

    public void delete(long id) {
        buildingRepository.deleteById(id);
    }

    public List<BuildingEntity> getBuildings() {
        BuildingEntity buildingEntity = new BuildingEntity();
        buildingEntity.setBuildingLocation("abu dhabi");
        buildingEntity.setBuildingName("aldar hq");
        addBuilding(buildingEntity);
        System.out.println("Added building " + buildingEntity);
        LoggerFactory.getLogger(BuildingRepository.class).info("Buildings Added {} ", buildingEntity);
        return buildingRepository.findAll();
    }
}
