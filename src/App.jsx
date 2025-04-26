import { useState, useEffect } from "react";
import { IncidentCard } from "./components/IncidentCard";
import { IncidentForm } from "./components/IncidentForm";
import { mockIncidents } from "./data/mockIncidents";
import { AdjustmentsHorizontalIcon } from "@heroicons/react/24/outline";

function App() {
  const [incidents, setIncidents] = useState(mockIncidents);
  const [expandedIds, setExpandedIds] = useState(new Set());
  const [selectedSeverity, setSelectedSeverity] = useState("All Severities");
  const [sortOrder, setSortOrder] = useState("Newest First");
  const [isLoaded, setIsLoaded] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
    // Show welcome message for 2 seconds
    const welcomeTimer = setTimeout(() => {
      setShowWelcome(false);
    }, 2000);

    // Then show the main content
    const loadTimer = setTimeout(() => {
      setIsLoaded(true);
    }, 2500);

    return () => {
      clearTimeout(welcomeTimer);
      clearTimeout(loadTimer);
    };
  }, []);

  const handleToggleExpand = (id) => {
    const newExpandedIds = new Set(expandedIds);
    if (newExpandedIds.has(id)) {
      newExpandedIds.delete(id);
    } else {
      newExpandedIds.add(id);
    }
    setExpandedIds(newExpandedIds);
  };

  const handleSubmit = (data) => {
    const newIncident = {
      id: incidents.length + 1,
      ...data,
      reported_at: new Date().toISOString(),
    };
    setIncidents([newIncident, ...incidents]);
  };

  const filteredIncidents = incidents
    .filter((incident) => {
      const matchesSeverity =
        selectedSeverity === "All Severities" ||
        incident.severity === selectedSeverity;

      const matchesSearch = searchTerm
        ? incident.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          incident.description.toLowerCase().includes(searchTerm.toLowerCase())
        : true;

      return matchesSeverity && matchesSearch;
    })
    .sort((a, b) => {
      if (sortOrder === "Newest First") {
        return new Date(b.reported_at) - new Date(a.reported_at);
      }
      return new Date(a.reported_at) - new Date(b.reported_at);
    });

  const getStaggeredDelay = (index) => {
    return `${(index % 5) * 100}ms`;
  };

  return (
    <>
      {/* Enhanced Welcome Message */}
      <div
        className={`fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-700 ${
          showWelcome ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Animated background with gradient and particles */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900">
          <div className="absolute inset-0 animate-pulse-slow bg-[radial-gradient(circle_at_50%_50%,rgba(14,165,233,0.1),transparent_50%)]"></div>
        </div>

        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -inset-[10px] opacity-30">
            <div className="absolute top-1/2 left-0 w-96 h-96 -translate-y-1/2 -translate-x-1/2 bg-primary-500/20 rounded-full blur-3xl animate-blob1"></div>
            <div className="absolute top-1/2 right-0 w-96 h-96 translate-x-1/2 -translate-y-1/2 bg-purple-500/20 rounded-full blur-3xl animate-blob2"></div>
            <div className="absolute bottom-0 left-1/2 w-96 h-96 -translate-x-1/2 translate-y-1/2 bg-blue-500/20 rounded-full blur-3xl animate-blob3"></div>
          </div>
        </div>

        {/* Welcome content */}
        <div className="relative text-center space-y-6 max-w-4xl mx-auto px-4">
          <div className="animate-slide-up-fade opacity-0 [animation-delay:200ms] [animation-fill-mode:forwards]">
            <h1 className="text-4xl md:text-7xl font-bold text-white tracking-tight">
              Welcome to
            </h1>
          </div>

          <div className="animate-slide-up-fade opacity-0 [animation-delay:600ms] [animation-fill-mode:forwards]">
            <h2 className="text-3xl md:text-6xl font-bold">
              <span className="inline-block animate-gradient-text bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-[length:200%_auto]">
                AI Safety Incident Dashboard
              </span>
            </h2>
          </div>

          <div className="animate-slide-up-fade opacity-0 [animation-delay:1000ms] [animation-fill-mode:forwards]">
            <div className="flex items-center justify-center gap-3">
              <span className="w-2 h-2 bg-blue-400 rounded-full animate-ping-slow"></span>
              <span className="w-2 h-2 bg-purple-400 rounded-full animate-ping-slow [animation-delay:200ms]"></span>
              <span className="w-2 h-2 bg-blue-400 rounded-full animate-ping-slow [animation-delay:400ms]"></span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div
        className={`min-h-screen relative overflow-hidden ${
          isLoaded ? "opacity-100" : "opacity-0"
        } transition-opacity duration-1000`}
      >
        {/* Background Image Layer */}
        <div
          className="fixed inset-0 bg-cover bg-center bg-no-repeat animate-subtle-zoom"
          style={{
            backgroundImage: `url("https://images.unsplash.com/photo-1557264337-e8a93017fe92?auto=format&fit=crop&q=80&w=2070")`,
            transform: "scale(1.1)",
          }}
        />

        {/* Gradient Overlay Layer */}
        <div
          className="fixed inset-0 bg-gradient-to-br from-slate-900/95 via-blue-900/90 to-slate-900/95"
          style={{
            backdropFilter: "blur(10px)",
          }}
        />

        {/* Content Layer */}
        <div className="relative z-10">
          <div className="container mx-auto px-4 py-8">
            <header className="bg-white/10 backdrop-blur-md rounded-xl shadow-lg mb-8 px-6 py-4 border border-white/10">
              <div className="flex justify-between items-center">
                <div className="flex flex-col">
                  <h1 className="relative text-3xl md:text-4xl font-bold">
                    {/* Animated Background */}
                    <span className="absolute -inset-1 rounded-lg bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 opacity-50 blur-lg animate-pulse-slow"></span>

                    {/* Main Title */}
                    <span className="relative">
                      <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient-text">
                        AI Safety
                      </span>{" "}
                      <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient-text [animation-delay:150ms]">
                        Incident Dashboard
                      </span>
                    </span>

                    {/* Decorative Elements */}
                    <span className="absolute top-0 left-0 w-full h-full">
                      <span className="absolute -top-1 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-ping-slow"></span>
                      <span className="absolute -bottom-1 right-1/4 w-2 h-2 bg-purple-400 rounded-full animate-ping-slow [animation-delay:500ms]"></span>
                    </span>
                  </h1>
                  <p className="text-white/60 mt-2 text-sm md:text-base animate-fade-in-delayed">
                    Monitoring and Managing AI Safety Incidents
                  </p>
                </div>
                <span className="text-lg text-white/90 font-medium animate-fade-in">
                  {incidents.length} Incidents
                </span>
              </div>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-6">
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg border border-white/10">
                  <div className="flex items-center gap-2 mb-6">
                    <AdjustmentsHorizontalIcon className="h-5 w-5 text-white" />
                    <h2 className="text-xl font-semibold text-white">
                      Filters
                    </h2>
                  </div>
                  <div className="space-y-4">
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Search incidents..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full bg-white/20 border-2 border-white/30 rounded-xl px-4 py-3 text-white placeholder-white/70 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-200"
                      />
                    </div>
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="relative">
                        <label className="block text-sm font-medium text-white mb-2">
                          Filter by Severity
                        </label>
                        <div className="relative">
                          <select
                            value={selectedSeverity}
                            onChange={(e) =>
                              setSelectedSeverity(e.target.value)
                            }
                            className="appearance-none w-full bg-white/20 border-2 border-white/30 rounded-xl px-4 py-3 text-white placeholder-white/70 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-200"
                            style={{
                              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='white'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                              backgroundPosition: "right 16px center",
                              backgroundSize: "16px",
                              backgroundRepeat: "no-repeat",
                              paddingRight: "42px",
                            }}
                          >
                            <option
                              value="All Severities"
                              className="bg-slate-800 text-white"
                            >
                              All Severities
                            </option>
                            <option
                              value="Low"
                              className="bg-slate-800 text-white"
                            >
                              Low
                            </option>
                            <option
                              value="Medium"
                              className="bg-slate-800 text-white"
                            >
                              Medium
                            </option>
                            <option
                              value="High"
                              className="bg-slate-800 text-white"
                            >
                              High
                            </option>
                          </select>
                        </div>
                      </div>
                      <div className="relative">
                        <label className="block text-sm font-medium text-white mb-2">
                          Sort by Date
                        </label>
                        <div className="relative">
                          <select
                            value={sortOrder}
                            onChange={(e) => setSortOrder(e.target.value)}
                            className="appearance-none w-full bg-white/20 border-2 border-white/30 rounded-xl px-4 py-3 text-white placeholder-white/70 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-200"
                            style={{
                              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='white'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                              backgroundPosition: "right 16px center",
                              backgroundSize: "16px",
                              backgroundRepeat: "no-repeat",
                              paddingRight: "42px",
                            }}
                          >
                            <option
                              value="Newest First"
                              className="bg-slate-800 text-white"
                            >
                              Newest First
                            </option>
                            <option
                              value="Oldest First"
                              className="bg-slate-800 text-white"
                            >
                              Oldest First
                            </option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 auto-rows-auto">
                  {filteredIncidents.length > 0 ? (
                    filteredIncidents.map((incident, index) => (
                      <div
                        key={incident.id}
                        className="opacity-0 animate-slide-up-fade [animation-fill-mode:forwards]"
                        style={{
                          animationDelay: getStaggeredDelay(index),
                        }}
                      >
                        <div
                          className={`
                          h-full transform transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1
                          ${index % 3 === 0 ? "sm:col-span-2" : ""}
                        `}
                        >
                          <IncidentCard
                            incident={incident}
                            isExpanded={expandedIds.has(incident.id)}
                            onToggle={handleToggleExpand}
                          />
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="col-span-full text-center py-12 bg-white/10 backdrop-blur-md rounded-xl border border-white/10">
                      <p className="text-white/90 text-lg">
                        No incidents found
                      </p>
                    </div>
                  )}
                </div>

                {filteredIncidents.length > 0 && (
                  <div className="flex justify-center mt-8">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce [animation-delay:0ms]"></div>
                      <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce [animation-delay:150ms]"></div>
                      <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce [animation-delay:300ms]"></div>
                    </div>
                  </div>
                )}
              </div>

              <div className="lg:col-span-1">
                <div className="sticky top-8">
                  <IncidentForm onSubmit={handleSubmit} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
