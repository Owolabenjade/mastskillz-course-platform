import React from 'react';
import { Image, Upload, X } from 'lucide-react';
import { useModuleContext } from '../../context/ModuleContext';

const ImageContainer = () => {
  const { 
    moduleData, 
    activeModule, 
    activePage,
    updatePageContent
  } = useModuleContext();
  
  const handleImageSelect = () => {
    // In a real implementation, this would open a file dialog
    // For now, we'll just simulate adding an image URL
    const mockImageUrl = '/api/placeholder/800/400';
    updatePageContent(activeModule, activePage, 'imageUrl', mockImageUrl);
  };
  
  const removeImage = () => {
    updatePageContent(activeModule, activePage, 'imageUrl', '');
  };
  
  return (
    <section className="bg-white p-5 rounded-lg shadow-sm border border-gray-200">
      <div className="flex items-center mb-3 text-gray-700">
        <Image className="h-5 w-5 mr-2" />
        <h2 className="font-medium">Image Content</h2>
      </div>
      
      {moduleData[activeModule].pages[activePage].imageUrl ? (
        <div className="relative rounded-md overflow-hidden">
          <img 
            src={moduleData[activeModule].pages[activePage].imageUrl}
            alt="Uploaded content" 
            className="w-full h-auto"
          />
          <button 
            className="absolute top-2 right-2 p-1 bg-white bg-opacity-80 rounded-full text-gray-700 hover:text-red-600"
            onClick={removeImage}
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      ) : (
        <div className="border border-dashed border-gray-300 rounded-md p-8 bg-gray-50 flex flex-col items-center justify-center">
          <Upload className="h-12 w-12 text-gray-400 mb-3" />
          <p className="text-sm text-gray-500 mb-1">Drag and drop your image here</p>
          <p className="text-xs text-gray-400 mb-4">Supported formats: JPG, PNG, GIF (max 5MB)</p>
          <button 
            className="px-4 py-2 bg-white border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"
            onClick={handleImageSelect}
          >
            Browse Images
          </button>
        </div>
      )}
    </section>
  );
};

export default ImageContainer;