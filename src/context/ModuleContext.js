import React, { createContext, useState, useContext } from 'react';

// Initial data structure
const initialModuleData = {
  module1: {
    title: 'Module 1',
    pages: {
      page1: {
        title: 'Welcome to Module 1',
        text: '',
        videoUrl: '',
        imageUrl: ''
      },
      page2: {
        title: 'Module 1 - Advanced Concepts',
        text: '',
        videoUrl: '',
        imageUrl: ''
      }
    }
  },
  module2: {
    title: 'Module 2',
    pages: {
      page1: {
        title: 'Welcome to Module 2',
        text: '',
        videoUrl: '',
        imageUrl: ''
      },
      page2: {
        title: 'Module 2 - Advanced Concepts',
        text: '',
        videoUrl: '',
        imageUrl: ''
      }
    }
  },
  module3: {
    title: 'Module 3',
    pages: {
      page1: {
        title: 'Welcome to Module 3',
        text: '',
        videoUrl: '',
        imageUrl: ''
      },
      page2: {
        title: 'Module 3 - Advanced Concepts',
        text: '',
        videoUrl: '',
        imageUrl: ''
      }
    }
  },
  module4: {
    title: 'Module 4',
    pages: {
      page1: {
        title: 'Welcome to Module 4',
        text: '',
        videoUrl: '',
        imageUrl: ''
      },
      page2: {
        title: 'Module 4 - Advanced Concepts',
        text: '',
        videoUrl: '',
        imageUrl: ''
      }
    }
  },
  module5: {
    title: 'Module 5',
    pages: {
      page1: {
        title: 'Welcome to Module 5',
        text: '',
        videoUrl: '',
        imageUrl: ''
      },
      page2: {
        title: 'Module 5 - Advanced Concepts',
        text: '',
        videoUrl: '',
        imageUrl: ''
      }
    }
  }
};

// Create context
const ModuleContext = createContext();

export const ModuleProvider = ({ children }) => {
  const [moduleData, setModuleData] = useState(initialModuleData);
  const [activeModule, setActiveModule] = useState('module1');
  const [activePage, setActivePage] = useState('page1');
  const [moduleExpanded, setModuleExpanded] = useState({
    module1: true,
    module2: false,
    module3: false,
    module4: false,
    module5: false
  });

  // Toggle module expansion
  const toggleModule = (moduleId) => {
    setModuleExpanded({
      ...moduleExpanded,
      [moduleId]: !moduleExpanded[moduleId]
    });
  };

  // Select a specific page
  const selectPage = (moduleId, pageId) => {
    setActiveModule(moduleId);
    setActivePage(pageId);
    
    // Ensure the module is expanded when selecting a page
    if (!moduleExpanded[moduleId]) {
      toggleModule(moduleId);
    }
  };

  // Update page title
  const updatePageTitle = (moduleId, pageId, newTitle) => {
    setModuleData(prevData => {
      const newData = { ...prevData };
      newData[moduleId].pages[pageId].title = newTitle;
      return newData;
    });
  };

  // Update page content
  const updatePageContent = (moduleId, pageId, field, content) => {
    setModuleData(prevData => {
      const newData = { ...prevData };
      newData[moduleId].pages[pageId][field] = content;
      return newData;
    });
  };

  // Add a new module
  const addModule = () => {
    const newModuleId = `module${Object.keys(moduleData).length + 1}`;
    
    setModuleData(prevData => {
      return {
        ...prevData,
        [newModuleId]: {
          title: `Module ${Object.keys(prevData).length + 1}`,
          pages: {
            page1: {
              title: `Welcome to Module ${Object.keys(prevData).length + 1}`,
              text: '',
              videoUrl: '',
              imageUrl: ''
            },
            page2: {
              title: `Module ${Object.keys(prevData).length + 1} - Advanced Concepts`,
              text: '',
              videoUrl: '',
              imageUrl: ''
            }
          }
        }
      };
    });
    
    // Expand the new module
    setModuleExpanded(prev => ({
      ...prev,
      [newModuleId]: true
    }));
    
    // Set it as active
    setActiveModule(newModuleId);
    setActivePage('page1');
  };

  return (
    <ModuleContext.Provider
      value={{
        moduleData,
        activeModule,
        activePage,
        moduleExpanded,
        toggleModule,
        selectPage,
        updatePageTitle,
        updatePageContent,
        addModule
      }}
    >
      {children}
    </ModuleContext.Provider>
  );
};

// Custom hook for using the context
export const useModuleContext = () => {
  const context = useContext(ModuleContext);
  if (!context) {
    throw new Error('useModuleContext must be used within a ModuleProvider');
  }
  return context;
};