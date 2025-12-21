import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const PersonDetailsModal = ({ isOpen, onClose, person }) => {
    if (!isOpen || !person) return null;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={onClose}
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'rgba(0, 0, 0, 0.6)',
                    zIndex: 2000, // Higher than everything
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: '2rem'
                }}
            >
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.8, opacity: 0 }}
                    onClick={(e) => e.stopPropagation()}
                    style={{
                        background: 'var(--color-bg)',
                        padding: '2rem',
                        borderRadius: '1.5rem',
                        border: '2px solid var(--color-gold)',
                        boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
                        maxWidth: '400px',
                        width: '100%',
                        color: 'var(--color-text)',
                        textAlign: 'center',
                        position: 'relative'
                    }}
                >
                    <button
                        onClick={onClose}
                        style={{
                            position: 'absolute',
                            top: '1rem',
                            right: '1rem',
                            background: 'none',
                            border: 'none',
                            fontSize: '1.5rem',
                            color: 'var(--color-maroon)',
                            cursor: 'pointer'
                        }}
                    >
                        ×
                    </button>

                    <h2 style={{
                        fontFamily: 'Great Vibes, cursive',
                        color: 'var(--color-maroon)',
                        fontSize: '2.5rem',
                        marginBottom: '1rem'
                    }}>
                        {person.role}
                    </h2>

                    <h3 style={{
                        fontFamily: 'Cinzel, serif',
                        fontSize: '1.5rem',
                        marginBottom: '1rem',
                        color: 'var(--color-gold)'
                    }}>
                        {person.name}
                    </h3>

                    <p style={{ lineHeight: '1.6', fontSize: '1.1rem' }}>
                        {person.description}
                    </p>

                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

export default PersonDetailsModal;
