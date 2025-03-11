import React from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { useModuleContext } from '../context/ModuleContext';

const ModuleSidebar = () => {
  const { 
    moduleData, 
    activeModule, 
    activePage,
    moduleExpanded, 
    toggleModule, 
    selectPage,
    addModule
  } = useModuleContext();

  return (
    <aside className="w-64 bg-white border-r border-gray-200 overflow-y-auto">
      <div className="p-4">
        <h2 className="font-semibold text-lg text-gray-700 mb-4">Course Modules</h2>
        
        <div className="space-y-2">
          {Object.keys(moduleData).map((moduleId) => (
            <div key={moduleId} className="border border-gray-200 rounded-md overflow-hidden">
              <button 
                className={`flex items-center justify-between w-full p-3 text-left ${activeModule === moduleId ? 'bg-green-50 text-green-700' : 'bg-white text-gray-700'}`}
                onClick={() => toggleModule(moduleId)}
              >
                <span className="font-medium">{moduleData[moduleId].title}</span>
                {moduleExpanded[moduleId] ? (
                  <ChevronDown className="h-4 w-4" />
                ) : (
                  <ChevronRight className="h-4 w-4" />
                )}
              </button>
              
              {moduleExpanded[moduleId] && (
                <div className="bg-gray-50 py-1">
                  {Object.keys(moduleData[moduleId].pages).map((pageId) => (
                    <button
                      key={pageId}
                      className={`flex items-center pl-6 pr-3 py-2 w-full text-left text-sm ${
                        activeModule === moduleId && activePage === pageId
                          ? 'bg-green-100 text-green-800'
                          : 'text-gray-600 hover:bg-gray-100'
                      }`}
                      onClick={() => selectPage(moduleId, pageId)}
                    >
                      <span className="truncate">{moduleData[moduleId].pages[pageId].title}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
        
        <button 
          className="mt-6 w-full px-4 py-2 border border-green-600 text-green-600 rounded-md hover:bg-green-50"
          onClick={addModule}
        >
          + Add New Module
        </button>
      </div>
    </aside>
  );
};

export default ModuleSidebar;