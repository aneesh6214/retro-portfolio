import React, { useState, useEffect } from 'react';
import './MenuBar.css';
import logo from '../resources/logo.png'; // Import the logo image

const MenuBar = () => {
    const [time, setTime] = useState(new Date());

    // Update the time every second
    useEffect(() => {
        const timer = setInterval(() => setTime(new Date()), 1000);
        return () => clearInterval(timer); // Clean up the interval
    }, []);

    return (
        <div className="taskbar">
            {/* Replace the text with the logo image */}
            <div className="logo">
                <img src={logo} alt="logo" className="logo-image" />
            </div>
            <div className="date-time">
                {time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })} <br />
                {time.toLocaleDateString()}
            </div>
        </div>
    );
};

export default MenuBar;
