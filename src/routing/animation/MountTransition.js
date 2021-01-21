import { motion } from 'framer-motion';
import React from 'react';

export const MountTransition = ({
    children,
    slide = 0,
    slideUp = 0,
}) => (
    <motion.div
        exit={{ opacity: 0, x: slide, y: slideUp }}
        initial={{ opacity: 0, x: slide, y: slideUp }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ ease: 'easeInOut', delay: 0.5, duration: 0.5 }}
        style={{ height: '100%' }}
    >
        {children}
    </motion.div>
);
