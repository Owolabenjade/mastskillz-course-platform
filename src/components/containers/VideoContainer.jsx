import React from 'react';
import { Film, X } from 'lucide-react';
import { useModuleContext } from '../../context/ModuleContext';

const VideoContainer = () => {
  const { 
    moduleData, 
    activeModule, 
    activePage,
    updatePageContent
  } = useModuleContext();
  
  const handleVideoSelect = () => {
    // In a real implementation, this would open a file dialog
    // For now, we'll just simulate adding a video URL
    const mockVideoUrl = '/sample-video.mp4';
    updatePageContent(activeModule, activePage, 'videoUrl', mockVideoUrl);
  };
  
  const removeVideo = () => {
    updatePageContent(activeModule, activePage, 'videoUrl', '');
  };
  
  return (
    <section className="bg-white p-5 rounded-lg shadow-sm border border-gray-200">
      <div className="flex items-center mb-3 text-gray-700">
        <Film className="h-5 w-5 mr-2" />
        <h2 className="font-medium">Video Content</h2>
      </div>
      
      {moduleData[activeModule].pages[activePage].videoUrl ? (
        <div className="relative pt-[56.25%] bg-gray-900 rounded-md overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center text-white">
            Video Player Placeholder
          </div>
          <button 
            className="absolute top-2 right-2 p-1 bg-white bg-opacity-80 rounded-full text-gray-700 hover:text-red-600"
            onClick={removeVideo}
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      ) : (
        <div className="border border-dashed border-gray-300 rounded-md p-8 bg-gray-50 flex flex-col items-center justify-center">
          <Film className="h-12 w-12 text-gray-400 mb-3" />
          <p className="text-sm text-gray-500 mb-1">Upload your video content</p>
          <p className="text-xs text-gray-400 mb-4">Supported formats: MP4, MOV, AVI (max 500MB)</p>
          <button 
            className="px-4 py-2 bg-white border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"
            onClick={handleVideoSelect}
          >
            Select Video
          </button>
        </div>
      )}
    </section>
  );
};

export default VideoContainer;