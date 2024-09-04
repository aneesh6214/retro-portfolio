import React from 'react';
import MenuBar from './components/MenuBar';
import DesktopIcon from './components/DesktopIcon';
import './App.css';
import wallpaper from './resources/wallpaper.png';
import aboutMeImage from './resources/about-me.png';

function App() {
  return (
    <div className="desktop" style={{ backgroundImage: `url(${wallpaper})` }}>
      <MenuBar />
      <DesktopIcon image={aboutMeImage} label="about-me.txt" />
    </div>
  );
}

export default App;
