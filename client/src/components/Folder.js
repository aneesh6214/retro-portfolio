import React from 'react';
import folderIcon from '../resources/folder.png';
import Application from './Application';

const Folder = ({ label, top, left, zIndex, onClick }) => {
    return (
        <Application
            image={folderIcon}
            label={label}
            top={top}
            left={left}
            zIndex={zIndex}
            onClick={onClick}
            popupHeight={500}
            popupWidth={850}
        >
            <div className="folder-content">
                <p>You're inside the folder: <strong>{label}</strong></p>
                <p>This folder is located on the desktop.</p>
                <div className="folder-items">
                    <p>Placeholder for folder items...</p>
                </div>
            </div>
        </Application>
    );
};

export default Folder;
