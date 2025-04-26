import { useState } from "react";
import { mockIncidents } from "../data/mockIncidents";
import { isValidIncident } from "../types/incident";

export function useIncidents() {
  const [incidents, setIncidents] = useState(mockIncidents);
  const [expandedIds, setExpandedIds] = useState(new Set());
  const [selectedSeverity, setSelectedSeverity] = useState("All Severities");
  const [sortOrder, setSortOrder] = useState("Newest First");

  const toggleExpanded = (id) => {
    const newExpandedIds = new Set(expandedIds);
    if (newExpandedIds.has(id)) {
      newExpandedIds.delete(id);
    } else {
      newExpandedIds.add(id);
    }
    setExpandedIds(newExpandedIds);
  };

  const addIncident = (data) => {
    if (!isValidIncident(data)) {
      throw new Error("Invalid incident data");
    }

    const newIncident = {
      id: incidents.length + 1,
      ...data,
      reported_at: new Date().toISOString(),
    };
    setIncidents([newIncident, ...incidents]);
    return newIncident;
  };

  const filteredIncidents = incidents
    .filter(
      (incident) =>
        selectedSeverity === "All Severities" ||
        incident.severity === selectedSeverity
    )
    .sort((a, b) => {
      if (sortOrder === "Newest First") {
        return new Date(b.reported_at) - new Date(a.reported_at);
      }
      return new Date(a.reported_at) - new Date(b.reported_at);
    });

  const deleteIncident = (id) => {
    setIncidents(incidents.filter((incident) => incident.id !== id));
  };

  const updateIncident = (id, updates) => {
    setIncidents(
      incidents.map((incident) =>
        incident.id === id ? { ...incident, ...updates } : incident
      )
    );
  };

  return {
    incidents: filteredIncidents,
    selectedSeverity,
    setSelectedSeverity,
    sortOrder,
    setSortOrder,
    addIncident,
    deleteIncident,
    updateIncident,
    expandedIds,
    toggleExpanded,
  };
}
