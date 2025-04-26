// Severity levels for incidents
export const SEVERITY_LEVELS = {
  LOW: "Low",
  MEDIUM: "Medium",
  HIGH: "High",
};

// Validation functions
export const isValidSeverity = (severity) => {
  return Object.values(SEVERITY_LEVELS).includes(severity);
};

export const isValidIncident = (incident) => {
  return (
    incident &&
    typeof incident.title === "string" &&
    incident.title.length > 0 &&
    typeof incident.description === "string" &&
    incident.description.length > 0 &&
    isValidSeverity(incident.severity)
  );
};

// Helper functions for incident management
export const formatIncidentDate = (date) => {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
};

export const getSeverityColor = (severity) => {
  switch (severity) {
    case SEVERITY_LEVELS.LOW:
      return "green";
    case SEVERITY_LEVELS.MEDIUM:
      return "yellow";
    case SEVERITY_LEVELS.HIGH:
      return "red";
    default:
      return "gray";
  }
};
