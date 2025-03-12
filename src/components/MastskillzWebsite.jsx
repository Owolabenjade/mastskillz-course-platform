import React from 'react';
import ModuleSidebar from './ModuleSidebar';
import PageContent from './PageContent';

const MastskillzWebsite = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 overflow-auto">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <div className="w-10 h-10 rounded bg-green-600 flex items-center justify-center text-white font-bold">
                MS
              </div>
              <span className="ml-2 text-xl font-semibold text-gray-800">Mastskillz</span>
            </div>
            
            {/* Action buttons */}
            <div className="flex items-center space-x-4">
              <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200">
                Preview
              </button>
              <button className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700">
                Publish
              </button>
            </div>
          </div>
        </div>
      </header>
      
      <div className="flex flex-1 overflow-hidden">
        {/* Module sidebar */}
        <ModuleSidebar />
        
        {/* Content area */}
        <PageContent />
      </div>
    </div>
  );
};

export default MastskillzWebsite;