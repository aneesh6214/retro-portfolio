import React from 'react';
import './MenuBar.css';

const MenuBar = () => {
    return (
        <div className="menu-bar">
            <span className="left">Aneesh Kumar</span>
            <div className="right">
                <span>Github</span>
                <span>LinkedIn</span>
            </div>
        </div>
    );
};

export default MenuBar;
