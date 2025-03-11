import React, { useState } from 'react';
import { Edit, Upload, FileText, Film, Image, Save, X } from 'lucide-react';
import { useModuleContext } from '../context/ModuleContext';
import TextContainer from './containers/TextContainer';
import VideoContainer from './containers/VideoContainer';
import ImageContainer from './containers/ImageContainer';

const PageContent = () => {
  const { 
    moduleData, 
    activeModule, 
    activePage,
    updatePageTitle
  } = useModuleContext();
  
  const [isEditingTitle, setIsEditingTitle] = useState(false);
  const [tempTitle, setTempTitle] = useState('');
  
  const startEditingTitle = () => {
    setTempTitle(moduleData[activeModule].pages[activePage].title);
    setIsEditingTitle(true);
  };
  
  const saveTitle = () => {
    updatePageTitle(activeModule, activePage, tempTitle);
    setIsEditingTitle(false);
  };
  
  const cancelEditingTitle = () => {
    setIsEditingTitle(false);
  };

  return (
    <main className="flex-1 p-6 overflow-y-auto">
      <div className="max-w-3xl mx-auto">
        {/* Page title */}
        <div className="flex items-center justify-between mb-6 pb-2 border-b border-gray-200">
          {isEditingTitle ? (
            <div className="flex items-center space-x-2 w-full">
              <input
                type="text"
                value={tempTitle}
                onChange={(e) => setTempTitle(e.target.value)}
                className="flex-1 p-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                autoFocus
              />
              <button 
                onClick={saveTitle}
                className="p-1 bg-green-100 text-green-700 rounded-md hover:bg-green-200"
              >
                <Save className="h-5 w-5" />
              </button>
              <button 
                onClick={cancelEditingTitle}
                className="p-1 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          ) : (
            <>
              <h1 className="text-2xl font-bold text-gray-800">
                {moduleData[activeModule].pages[activePage].title}
              </h1>
              <button 
                onClick={startEditingTitle}
                className="p-1 text-gray-500 hover:text-green-600"
              >
                <Edit className="h-5 w-5" />
              </button>
            </>
          )}
        </div>
        
        {/* Content containers */}
        <div className="space-y-8">
          {/* Text container */}
          <TextContainer />
          
          {/* Video container */}
          <VideoContainer />
          
          {/* Image container */}
          <ImageContainer />
        </div>
        
        {/* Save changes button */}
        <div className="mt-8 flex justify-end">
          <button className="px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 shadow-sm">
            Save Changes
          </button>
        </div>
      </div>
    </main>
  );
};

export default PageContent;