import React, { useState } from 'react';
import MenuBar from './components/MenuBar';
import './App.css';
import wallpaper from './resources/wallpaper.png';
import aboutMeImage from './resources/about-me.png';
import resume from './resources/resume.png';
import Application from './components/Application';
import Folder from './components/Folder';

function App() {
  const [zIndexStack, setZIndexStack] = useState(1); // Initialize z-index stack
  const [windowZIndexes, setWindowZIndexes] = useState({
    aboutMe: 1,
    resume: 1,
    projects: 1, // Add folder z-index tracking
  });

  const bringToFront = (windowName) => {
    setZIndexStack(zIndexStack + 1); // Increment the zIndexStack
    setWindowZIndexes((prevZIndexes) => ({
      ...prevZIndexes,
      [windowName]: zIndexStack + 1, // Set the z-index for the clicked window to be on top
    }));
  };

  return (
    <div className="desktop" style={{ backgroundImage: `url(${wallpaper})` }}>
      <MenuBar />
      <Application
        image={aboutMeImage}
        label="about-me.txt"
        top={10}
        left={5}
        zIndex={windowZIndexes.aboutMe} // Pass the current z-index for this window
        onClick={() => bringToFront('aboutMe')}
      />
      <Application
        image={resume}
        label="resume.pdf"
        top={30}
        left={20}
        zIndex={windowZIndexes.resume} // Pass the current z-index for this window
        onClick={() => bringToFront('resume')}
      />
      <Folder
        label="Projects"
        top={10}
        left={90}
        zIndex={windowZIndexes.projects} // Pass the z-index for the folder
        onClick={() => bringToFront('projects')}
      />
    </div>
  );
}

export default App;
