import React from 'react';
import { FileText } from 'lucide-react';
import { useModuleContext } from '../../context/ModuleContext';

const TextContainer = () => {
  const { 
    moduleData, 
    activeModule, 
    activePage,
    updatePageContent
  } = useModuleContext();
  
  const handleTextChange = (e) => {
    const text = e.target.value;
    if (text.length <= 300) {
      updatePageContent(activeModule, activePage, 'text', text);
    }
  };
  
  return (
    <section className="bg-white p-5 rounded-lg shadow-sm border border-gray-200">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center text-gray-700">
          <FileText className="h-5 w-5 mr-2" />
          <h2 className="font-medium">Text Content</h2>
        </div>
        <div className="text-sm text-gray-500">
          {moduleData[activeModule].pages[activePage].text.length}/300 characters
        </div>
      </div>
      
      <textarea
        className="w-full p-3 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500 resize-none"
        rows="5"
        placeholder="Add your text content here (limited to 300 characters)..."
        value={moduleData[activeModule].pages[activePage].text}
        onChange={handleTextChange}
      ></textarea>
    </section>
  );
};

export default TextContainer;