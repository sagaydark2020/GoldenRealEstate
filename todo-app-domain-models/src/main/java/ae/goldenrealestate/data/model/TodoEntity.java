package ae.goldenrealestate.data.model;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Objects;
import java.util.Optional;

@Entity
@Table(name = "todo")
public class TodoEntity implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "name")
    private String name;

    @Column(name = "description")
    private String description;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "building_id")
    private BuildingEntity building;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "usertable_id")
    private UserEntity user;

    @Enumerated(EnumType.STRING)
    @Column(name = "project_progress", nullable = false)
    private ProjectProgress projectProgress;

    public ProjectProgress getProjectProgress() {
        return projectProgress;
    }

    public void setProjectProgress(ProjectProgress projectProgress) {
        this.projectProgress = projectProgress;
    }

    public BuildingEntity getBuilding() {
        return building;
    }

    public void setBuilding(BuildingEntity building) {
        this.building = building;
    }

    public UserEntity getUser() {
        return user;
    }

    public void setUser(UserEntity user) {
        this.user = user;
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

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }
    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof TodoEntity)) return false;
        TodoEntity that = (TodoEntity) o;
        return Objects.equals(name, that.name) &&
                Objects.equals(description, that.description);
    }

    @Override
    public int hashCode() {
        return Objects.hash(name, description);
    }

    @Override
    public String toString() {
        return "TodoEntity{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", description='" + description + '\'' +
                ", building=" + building +
                '}';
    }
}
