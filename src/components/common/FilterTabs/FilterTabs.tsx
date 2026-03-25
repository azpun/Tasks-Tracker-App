import { useState } from "react";

const tabs = ["All", "To Do", "In Progress", "Done"];

export const FilterTabs = () => {
  const [activeTab, setActiveTab] = useState("All");

  return (
    <div className="bg-white border-b border-slate-200 overflow-x-auto">
      <div className="flex min-w-max">
        {tabs.map((tab) => (
          <button
            key={tab}
            type="button"
            onClick={() => setActiveTab(tab)}
            className={`px-5 py-3 text-sm font-medium whitespace-nowrap transition-colors duration-200 relative
              ${
                activeTab === tab
                  ? "text-blue-500"
                  : "text-slate-500 hover:text-slate-700"
              }`}
          >
            {tab}
            {/* Active indicator */}
            <span
              className={`absolute bottom-0 left-0 right-0 h-0.5 bg-blue-500 transition-transform duration-200 origin-center
                ${activeTab === tab ? "scale-x-100" : "scale-x-0"}`}
            />
          </button>
        ))}
      </div>
    </div>
  );
};
