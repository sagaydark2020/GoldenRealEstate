package ae.goldenrealestate.data.dto;

import ae.goldenrealestate.data.model.BuildingEntity;
import ae.goldenrealestate.data.model.TodoEntity;
import ae.goldenrealestate.data.model.UserEntity;

import java.io.Serializable;

public class ProjectCompositeDto implements Serializable {

    private Long buildingId;
    private Long userId;
    private Long id;
    private String name;
    private String description;
    private String projectProgress;

    public String getProjectProgress() {
        return projectProgress;
    }

    public void setProjectProgress(String projectProgress) {
        this.projectProgress = projectProgress;
    }

    public Long getBuildingId() {
        return buildingId;
    }

    public void setBuildingId(Long buildingId) {
        this.buildingId = buildingId;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public UserEntity unwrapUserEntity() {
        UserEntity entity = new UserEntity();
        entity.setId(this.userId);
        return entity;
    }

    public BuildingEntity unwrapBuildingEntity() {
        BuildingEntity entity = new BuildingEntity();
        entity.setId(this.buildingId);
        return entity;
    }

    public TodoEntity unwrapTodoEntity() {
        TodoEntity entity = new TodoEntity();
        entity.setId(this.id);
        entity.setDescription(this.description);
        entity.setName(this.name);
        return entity;
    }
}
