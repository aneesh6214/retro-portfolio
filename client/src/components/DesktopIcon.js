import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './DesktopIcon.css';

const DesktopIcon = ({ image, label }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen); // Toggle the state on click
    };

    return (
        <>
            {/* Original desktop icon and text (remains unchanged) */}
            <div className="desktop-icon">
                <img src={image} alt={label} className="icon-image" onClick={handleClick} />
                <span>{label}</span>
            </div>

            {/* Duplicate "app window" that opens in the center of the screen */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="app-window"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0, opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        onClick={handleClick}  // Clicking the duplicate will close it
                    >
                        <img src={image} alt={label} className="app-image" />
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default DesktopIcon;
