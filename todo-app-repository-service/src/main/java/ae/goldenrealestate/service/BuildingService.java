package ae.goldenrealestate.service;

import ae.goldenrealestate.data.model.BuildingEntity;
import ae.goldenrealestate.repository.BuildingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;

import java.util.List;
import java.util.Optional;

@Configuration
public class BuildingService {

    @Autowired
    private BuildingRepository buildingRepository;

    public BuildingEntity createBuilding(BuildingEntity buildingEntity) {
        return buildingRepository.save(buildingEntity);
    }

    public BuildingEntity updateBuilding(BuildingEntity buildingEntity) {
        return buildingRepository.save(buildingEntity);
    }

    public Optional<BuildingEntity> deleteBuildingById(long id) {
        Optional<BuildingEntity> buildingEntity = findBuildingById(id);
        buildingRepository.deleteById(id);
        return buildingEntity;
    }

    public Optional<BuildingEntity> findBuildingById(long id) {
        return buildingRepository.findById(id);
    }

    public List<BuildingEntity> getAllBuildings() {
        return buildingRepository.findAll();
    }
}
