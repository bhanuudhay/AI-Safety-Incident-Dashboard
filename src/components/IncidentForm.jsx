import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  ChevronUpIcon,
  ChevronDownIcon,
  PlusIcon,
} from "@heroicons/react/24/outline";

const SEVERITY_OPTIONS = [
  { value: "Low", color: "green", icon: "🟢" },
  { value: "Medium", color: "yellow", icon: "🟡" },
  { value: "High", color: "red", icon: "🔴" },
];

export const IncidentForm = ({ onSubmit }) => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [selectedSeverity, setSelectedSeverity] = useState("");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    watch,
  } = useForm();

  const currentSeverity = watch("severity");

  const onSubmitForm = (data) => {
    onSubmit(data);
    reset();
    setIsFormVisible(false);
    setSelectedSeverity("");
  };

  const getSeverityStyles = (severity) => {
    switch (severity) {
      case "Low":
        return "bg-green-50 text-green-700 border-green-200 hover:bg-green-100 hover:border-green-300 shadow-[0_0_15px_rgba(34,197,94,0.3)]";
      case "Medium":
        return "bg-yellow-50 text-yellow-700 border-yellow-200 hover:bg-yellow-100 hover:border-yellow-300 shadow-[0_0_15px_rgba(234,179,8,0.3)]";
      case "High":
        return "bg-red-50 text-red-700 border-red-200 hover:bg-red-100 hover:border-red-300 shadow-[0_0_15px_rgba(239,68,68,0.3)]";
      default:
        return "bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100 hover:border-gray-300";
    }
  };

  return (
    <div className="bg-white/95 backdrop-blur-md rounded-xl border border-gray-200/50 overflow-hidden shadow-lg transform transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20 relative">
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-purple-50/30 to-blue-50/50">
        <div
          className="absolute inset-0 opacity-10 animate-pattern-move"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%234F46E5' fill-opacity='0.2'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: "30px 30px",
          }}
        />
      </div>

      {/* Enhanced Toggle Button */}
      <button
        onClick={() => setIsFormVisible(!isFormVisible)}
        className="relative w-full px-6 py-4 flex items-center justify-between group"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-indigo-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-all duration-500" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>

        <h2 className="text-xl font-semibold flex items-center gap-3 text-gray-800 relative">
          <span className="relative">
            <span className="absolute -inset-2 rounded-lg bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 opacity-20 blur-md group-hover:opacity-30 transition-opacity duration-300" />
            <span className="relative inline-flex items-center justify-center w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg text-white transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-[360deg] shadow-lg shadow-blue-500/30">
              <PlusIcon className="w-5 h-5" />
            </span>
          </span>
          <span className="bg-gradient-to-r from-gray-800 via-gray-600 to-gray-800 bg-clip-text text-transparent group-hover:from-blue-600 group-hover:via-indigo-600 group-hover:to-purple-600 transition-all duration-500">
            Report New Incident
          </span>
        </h2>
        <span
          className={`transform transition-all duration-500 ${
            isFormVisible ? "rotate-180" : ""
          }`}
        >
          <ChevronDownIcon className="h-5 w-5 text-gray-500 group-hover:text-blue-500 transition-colors duration-300" />
        </span>
      </button>

      {/* Enhanced Form Content */}
      <div
        className={`relative transition-all duration-500 ease-in-out ${
          isFormVisible
            ? "max-h-[1000px] opacity-100 transform translate-y-0"
            : "max-h-0 opacity-0 transform -translate-y-4"
        } overflow-hidden`}
      >
        <form
          onSubmit={handleSubmit(onSubmitForm)}
          className="px-6 py-4 space-y-6 border-t border-gray-100"
        >
          {/* Enhanced Title Input */}
          <div className="transform transition-all duration-300 hover:translate-x-1">
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-700 mb-1.5"
            >
              Title
            </label>
            <div className="mt-1 relative group">
              <input
                type="text"
                id="title"
                {...register("title", { required: "Title is required" })}
                className={`block w-full px-4 py-3 rounded-lg border bg-white/80 backdrop-blur-sm ${
                  errors.title
                    ? "border-red-300 text-red-900 placeholder-red-300 focus:ring-red-500 focus:border-red-500 shadow-[0_0_15px_rgba(239,68,68,0.2)]"
                    : "border-gray-300 focus:ring-blue-500 focus:border-blue-500 hover:border-blue-400 focus:shadow-[0_0_15px_rgba(59,130,246,0.2)]"
                } shadow-sm transition-all duration-300 placeholder-gray-400 hover:bg-white/90`}
                placeholder="Enter incident title"
              />
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            </div>
            {errors.title && (
              <p className="mt-2 text-sm text-red-600 animate-fadeIn">
                {errors.title.message}
              </p>
            )}
          </div>

          {/* Enhanced Severity Selection */}
          <div className="transform transition-all duration-300 hover:translate-x-1">
            <label
              htmlFor="severity"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Severity
            </label>
            <div className="grid grid-cols-3 gap-3">
              {SEVERITY_OPTIONS.map((option) => (
                <label
                  key={option.value}
                  className={`relative flex items-center justify-center px-3 py-2.5 rounded-lg border cursor-pointer transition-all duration-300 transform hover:scale-[1.02] ${
                    currentSeverity === option.value
                      ? getSeverityStyles(option.value)
                      : "bg-white/80 hover:bg-gray-50/90"
                  }`}
                >
                  <input
                    type="radio"
                    value={option.value}
                    {...register("severity", {
                      required: "Severity is required",
                    })}
                    className="sr-only"
                  />
                  <span className="flex items-center gap-2">
                    <span className="text-lg transform transition-transform duration-300 group-hover:scale-110">
                      {option.icon}
                    </span>
                    <span className="font-medium">{option.value}</span>
                  </span>
                  {currentSeverity === option.value && (
                    <span className="absolute inset-0 rounded-lg ring-2 ring-offset-2 ring-offset-white ring-blue-500 animate-fadeIn"></span>
                  )}
                </label>
              ))}
            </div>
            {errors.severity && (
              <p className="mt-2 text-sm text-red-600 animate-fadeIn">
                {errors.severity.message}
              </p>
            )}
          </div>

          {/* Enhanced Description Textarea */}
          <div className="transform transition-all duration-300 hover:translate-x-1">
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700 mb-1.5"
            >
              Description
            </label>
            <div className="mt-1 relative group">
              <textarea
                id="description"
                rows={4}
                {...register("description", {
                  required: "Description is required",
                })}
                className={`block w-full px-4 py-3 rounded-lg border bg-white/80 backdrop-blur-sm ${
                  errors.description
                    ? "border-red-300 text-red-900 placeholder-red-300 focus:ring-red-500 focus:border-red-500 shadow-[0_0_15px_rgba(239,68,68,0.2)]"
                    : "border-gray-300 focus:ring-blue-500 focus:border-blue-500 hover:border-blue-400 focus:shadow-[0_0_15px_rgba(59,130,246,0.2)]"
                } shadow-sm transition-all duration-300 placeholder-gray-400 hover:bg-white/90 resize-none`}
                placeholder="Provide detailed information about the incident"
              />
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            </div>
            {errors.description && (
              <p className="mt-2 text-sm text-red-600 animate-fadeIn">
                {errors.description.message}
              </p>
            )}
          </div>

          {/* Enhanced Action Buttons */}
          <div className="flex items-center justify-end gap-4 pt-2">
            <button
              type="button"
              onClick={() => {
                reset();
                setIsFormVisible(false);
                setSelectedSeverity("");
              }}
              className="px-4 py-2 text-sm font-medium text-gray-500 hover:text-gray-700 transition-all duration-300 hover:bg-gray-50/80 rounded-lg backdrop-blur-sm hover:shadow-md"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="relative px-6 py-2 text-sm font-medium rounded-lg overflow-hidden group transform transition-transform duration-300 hover:scale-[1.02] focus:scale-[0.98]"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 transition-all duration-500 group-hover:scale-110 group-hover:animate-gradient-xy"></span>
              <span className="relative text-white flex items-center gap-2 font-semibold">
                Submit Incident
                <span className="w-1.5 h-1.5 rounded-full bg-white/50 animate-ping"></span>
              </span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
