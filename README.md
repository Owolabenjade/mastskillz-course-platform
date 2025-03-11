# Mastskillz Course Platform

A modern, responsive web application that allows course creators to easily build educational content using pre-designed templates.

## Features

- Module-based course structure with expandable navigation
- Consistent content containers for text, video, and images
- Character-limited text content areas (300 characters per section)
- Editable page titles for customization
- Intuitive user interface with green and black color scheme
- Responsive design that works on all devices

## Project Structure

```
mastskillz-course-platform/
├── public/
├── src/
│   ├── components/
│   │   ├── containers/
│   │   │   ├── TextContainer.jsx
│   │   │   ├── VideoContainer.jsx
│   │   │   └── ImageContainer.jsx
│   │   ├── MastskillzWebsite.jsx
│   │   ├── ModuleSidebar.jsx
│   │   └── PageContent.jsx
│   ├── context/
│   │   └── ModuleContext.js
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
├── package.json
├── tailwind.config.js
└── postcss.config.js
```

## Getting Started

### Prerequisites

- Node.js (v14.0.0 or higher)
- npm (v6.0.0 or higher)

### Installation

1. Clone the repository:
```
git clone https://github.com/yourusername/mastskillz-course-platform.git
cd mastskillz-course-platform
```

2. Install dependencies:
```
npm install
```

3. Start the development server:
```
npm start
```

4. Open your browser and go to `http://localhost:3000`

## Usage

1. **Navigate Through Modules:**
   - Click on a module in the sidebar to expand it
   - Select a page within the module to view and edit its content

2. **Edit Content:**
   - Change page titles by clicking the edit icon
   - Add text content (limited to 300 characters)
   - Upload videos and images using the dedicated containers

3. **Add New Modules:**
   - Click the "+ Add New Module" button to extend your course

4. **Publish Your Course:**
   - Click the "Publish" button in the header when your course is ready

## Customization

- Modify the color scheme in `tailwind.config.js`
- Adjust the content limitations in the container components
- Extend functionality by adding new container types

## Technologies Used

- React.js
- Tailwind CSS
- Lucide Icons
- Context API for state management