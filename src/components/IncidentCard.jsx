import React from "react";
import { format } from "date-fns";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";

const severityColors = {
  Low: "bg-green-100/90 text-green-800 border border-green-200 shadow-green-100/50 hover:bg-green-100 hover:border-green-300",
  Medium:
    "bg-yellow-100/90 text-yellow-800 border border-yellow-200 shadow-yellow-100/50 hover:bg-yellow-100 hover:border-yellow-300",
  High: "bg-red-100/90 text-red-800 border border-red-200 shadow-red-100/50 hover:bg-red-100 hover:border-red-300",
};

const severityIcons = {
  Low: "🟢",
  Medium: "🟡",
  High: "🔴",
};

const truncateText = (text, maxLength = 150) => {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).trim() + "...";
};

export const IncidentCard = ({ incident, isExpanded, onToggle }) => {
  const severityColor = severityColors[incident.severity];
  const severityIcon = severityIcons[incident.severity];

  return (
    <div className="transform transition-all duration-500 hover:-translate-y-1 bg-white/95 backdrop-blur-md rounded-xl border border-gray-200/50 overflow-hidden">
      <div className="p-6">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <div className="flex items-center gap-3">
              <h3 className="text-xl font-semibold text-gray-900">
                {incident.title}
              </h3>
              <span className="text-sm">{severityIcon}</span>
            </div>
            <div className="mt-2 flex items-center gap-4">
              <span
                className={`px-3 py-1 text-xs font-medium rounded-full ${severityColor}`}
              >
                {incident.severity}
              </span>
              <span className="text-sm text-gray-500 flex items-center gap-2">
                <svg
                  className="w-4 h-4 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                {format(new Date(incident.reported_at), "MMM d, yyyy")}
              </span>
            </div>
          </div>
        </div>

        <div className="mt-4">
          <div
            className={`text-gray-600 overflow-hidden transition-all duration-300 ${
              isExpanded ? "" : "line-clamp-2"
            }`}
          >
            {incident.description}
          </div>
        </div>

        <button
          onClick={() => onToggle(incident.id)}
          className="mt-4 inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-700"
        >
          {isExpanded ? "Show Less" : "View Details"}
          {isExpanded ? (
            <ChevronUpIcon className="ml-1.5 h-4 w-4" />
          ) : (
            <ChevronDownIcon className="ml-1.5 h-4 w-4" />
          )}
        </button>
      </div>
    </div>
  );
};
