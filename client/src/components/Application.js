import React, { useState } from 'react';
import Draggable from 'react-draggable';
import './Application.css';

const Application = ({ image, label, top, left, zIndex, onClick, children, popupWidth, popupHeight }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [imageDimensions, setImageDimensions] = useState({ width: 0, height: 0 });

    const handleClick = () => {
        onClick();
        setIsOpen(true);
    };

    const handleClose = () => {
        setIsOpen(false);
    };

    const handleImageLoad = (e) => {
        const { width, height } = e.target;
        setImageDimensions({ width, height });
    };

    const calculatedWidth = popupWidth || imageDimensions.width;
    const calculatedHeight = popupHeight || imageDimensions.height;

    return (
        <>
            <div className="desktop-icon" onClick={handleClick} style={{ top: `${top}%`, left: `${left}%`, position: 'absolute', zIndex: zIndex }}>
                <img src={image} alt={label} className="icon-image" />
                <span>{label}</span>
            </div>

            {isOpen && (
                <Draggable handle=".popup-header">
                    <div
                        className="popup-window"
                        style={{
                            top: '20%',
                            left: '30%',
                            transform: 'translate(-50%, -50%)',
                            zIndex: zIndex,
                            width: `${calculatedWidth}px`,
                            height: `${calculatedHeight}px`,
                        }}
                        onClick={onClick}
                    >
                        <div className="popup-header">
                            <button className="close-button" onClick={handleClose}>X</button>
                        </div>
                        {children ? (
                            <div className="popup-content">
                                {children}
                            </div>
                        ) : (
                            <img
                                src={image}
                                alt={label}
                                className="popup-image"
                                onLoad={handleImageLoad}
                            />
                        )}
                    </div>
                </Draggable>
            )}
        </>
    );
};

export default Application;
