import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../styling/clientcarousel.css';

const ExpandableCard = ({ title, image, description }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleToggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <>
            <div className="image-container" onClick={handleToggleExpand}>
                <img src={image} alt={title} />
                <AnimatePresence>
                    {isExpanded && (
                        <motion.div
                            className="description-container"
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                        >
                            <h2>{title}</h2>
                            <p>{description}</p>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </>
    );
};

export default ExpandableCard;
