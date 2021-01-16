package ae.goldenrealestate.data.model;

public enum ProjectProgress {
    NEW("New"), IN_PROGRESS("In Progress"), COMPLETED("Completed");

    private String enumAsString;

    ProjectProgress(String enumAsString) {
        this.enumAsString = enumAsString;
    }


    public static ProjectProgress fromString(String progressString) {
        for (ProjectProgress projectProgress : ProjectProgress.values()) {
            if (projectProgress.enumAsString.equalsIgnoreCase(progressString)) {
                return projectProgress;
            }
        }
        return null;
    }
    @Override
    public String toString() {
        return enumAsString;
    }
}