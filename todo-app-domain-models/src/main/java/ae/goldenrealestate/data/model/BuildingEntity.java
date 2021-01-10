package ae.goldenrealestate.data.model;
import javax.persistence.*;
import java.io.Serializable;

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


}