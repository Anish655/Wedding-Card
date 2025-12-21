
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import realRosePetal from '../assets/real_rose_petal_optimized.webp';
import realMarigold from '../assets/real_marigold_optimized.webp';

const FlowerRain = () => {
    const [flowers, setFlowers] = useState([]);
    const flowerTypes = ['rose', 'marigold'];

    useEffect(() => {
        // Generate initial flowers
        const initialFlowers = Array.from({ length: 30 }).map((_, i) => ({
            id: i,
            x: Math.random() * 100, // percentage
            delay: Math.random() * 10,
            duration: 8 + Math.random() * 12,
            type: flowerTypes[Math.floor(Math.random() * flowerTypes.length)],
            size: 1.5 + Math.random() * 1.5, // rem
            rotation: Math.random() * 360
        }));
        setFlowers(initialFlowers);
    }, []);

    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            pointerEvents: 'none',
            zIndex: 50,
            overflow: 'hidden'
        }}>
            {flowers.map((flower) => (
                <motion.div
                    key={flower.id}
                    initial={{ y: -100, x: `${flower.x}vw`, rotate: flower.rotation, opacity: 0.9 }}
                    animate={{
                        y: '105vh',
                        rotate: flower.rotation + 360,
                    }}
                    transition={{
                        duration: flower.duration,
                        repeat: Infinity,
                        delay: flower.delay,
                        ease: "linear",
                    }}
                    style={{
                        position: 'absolute',
                        width: `${flower.size}rem`,
                        height: `${flower.size}rem`,
                        filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))'
                    }}
                >
                    <img
                        src={flower.type === 'rose' ? realRosePetal : realMarigold}
                        alt={flower.type}
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'contain'
                            /* No mix-blend-mode needed for transparent PNGs */
                        }}
                    />
                </motion.div>
            ))}
        </div>
    );
};

export default FlowerRain;
