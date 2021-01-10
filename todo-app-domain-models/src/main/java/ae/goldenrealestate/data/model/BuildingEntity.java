package ae.goldenrealestate.data.model;
import javax.persistence.*;
import java.io.Serializable;
import java.util.Objects;

@Entity
@Table(name = "building")
public class BuildingEntity implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long buildingId;

    @Column(name = "buildingName")
    private String buildingName;

    @Column(name = "location")
    private String buildingLocation;

    public String getBuildingName() {
        return buildingName;
    }

    public void setBuildingName(String buildingName) {
        this.buildingName = buildingName;
    }

    public String getBuildingLocation() {
        return buildingLocation;
    }

    public void setBuildingLocation(String buildingLocation) {
        this.buildingLocation = buildingLocation;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        BuildingEntity that = (BuildingEntity) o;
        return buildingId == that.buildingId &&
                Objects.equals(buildingName, that.buildingName) &&
                Objects.equals(buildingLocation, that.buildingLocation);
    }

    @Override
    public int hashCode() {
        return Objects.hash(buildingId, buildingName, buildingLocation);
    }

    @Override
    public String toString() {
        return "BuildingEntity{" +
                "buildingId=" + buildingId +
                ", buildingName='" + buildingName + '\'' +
                ", buildingLocation='" + buildingLocation + '\'' +
                '}';
    }
}