import React from "react";
import { useSpring, animated } from '@react-spring/web'; // Animation from react-spring
import { useScroll } from 'react-use-gesture';

interface TriangleProps {
    scrollY: number;
}

const Triangle: React.FC<TriangleProps> = ({ scrollY }) => {
    // Ensure scrollY is a valid number
    const safeScrollY = !isNaN(scrollY) ? scrollY : 0;

    // Logic to determine the base of the triangle
    let base = 0;

    if (safeScrollY >= 3000) {
        // Gradually increase the base from 0 to 400 between 3000 and 3500 scrollY
        const progress = Math.min((safeScrollY - 4100) / 3500, 1); // Get the progress between 4100 and 4600
        base = progress * 400; // Base increases from 0 to 400
    }

    return (
        <svg
            width="1000px"
            height="1000px"
            style={{
                position: 'absolute',
                top: 0,
                left: 0,
            }}
        >
            {/* Dynamically update the base of the triangle */}
            <path d={`M0,0 L${-base},1000 L${base},1000 Z`} fill="#FD5300" stroke="#FD5300" />
        </svg>
    );
};

const TriangleQuarter: React.FC<{ scrollY: number; heightPercent: number }> = ({ scrollY, heightPercent }) => {
    const beamCount = 9; // Number of triangles
    const skewAmount = 7; // Skew amount to slightly tilt each triangle

    // Calculate rotation based on scrollY
    const rotationDegree = -1 * (scrollY - 4510) / 295; // Rotate up to 10 degrees based on scroll

    const triangles = Array.from({ length: beamCount }, (_, i) => (
        <div
            key={i}
            style={{
                transform: `skewX(${skewAmount * i}deg) rotate(${rotationDegree * i}deg)`, // Added rotation
                transformOrigin: '0 0', // Upper-left corner for skewing and rotation
                position: 'absolute',
                transformBox: 'fill-box',
                top: 0,
                left: `${i * 0.125}%`, // Adjust the horizontal shift for each triangle
                width: '100%',
                height: '100%',
            }}
        >
            <Triangle scrollY={scrollY} />
        </div>
    ));

    return (
        <div style={{ width: '100%', height: `${heightPercent}%` }}>
            {triangles}
        </div>
    );
};


const Beams: React.FC<{ scrollY: number }> = ({ scrollY }) => {
    // Define the beam visibility based on scroll thresholds (similar to TextLines)
    const beamAnimations = [
        { fadeIn: 4100, fadeOut: 8400 },
    ];

    // Determine which beam group should be visible based on scroll position
    const currentIndex = beamAnimations.findIndex(
        (item) => scrollY >= item.fadeIn && scrollY <= item.fadeOut
    );

    // Use spring to smoothly scale the height from 1% to 50% based on scroll position
    const heightSpring = useSpring({
        heightPercent: scrollY >= 4100 && scrollY <= 8400
            ? Math.min(50, Math.max(1, (scrollY - 4100) / (8400 - 4100) * 50)) // Calculate the height percent from 1% to 50%
            : 1,
        config: { tension: 200, friction: 20 },
    });

    return (
        <div className="position-fixed" style={{ width: '100vw', height: '100vh', top: '0', left: '0' }}>
            {currentIndex !== -1 && (
                <animated.div
                    style={{
                        opacity: heightSpring.heightPercent.to(val => (val > 1 ? 1 : 0)),
                    }}
                >
                    {/* Bottom-right (Initial Quarter) */}
                    <animated.div
                        style={{
                            position: 'absolute',
                            overflow: 'hidden',
                            width: '50%',
                            height: heightSpring.heightPercent.to(h => `${h}%`),
                            top: '53%', // Starting slightly above the bottom to concentrate beams
                            right: 0,
                        }}
                    >
                        <TriangleQuarter scrollY={scrollY} heightPercent={heightSpring.heightPercent.get()} />
                    </animated.div>

                    {/* Bottom-left (Flipped horizontally) */}
                    <animated.div
                        style={{
                            position: 'absolute',
                            overflow: 'hidden',
                            width: '50%',
                            height: heightSpring.heightPercent.to(h => `${h}%`),
                            top: '53%', // Starting slightly above the bottom to concentrate beams
                            left: 0,
                            transform: 'scaleX(-1)', // Flip horizontally
                        }}
                    >
                        <TriangleQuarter scrollY={scrollY} heightPercent={heightSpring.heightPercent.get()} />
                    </animated.div>

                    {/* Top-right (Flipped vertically) */}
                    <animated.div
                        style={{
                            position: 'absolute',
                            overflow: 'hidden',
                            width: '50%',
                            height: heightSpring.heightPercent.to(h => `${h}%`),
                            bottom: '53%', // Starting slightly below the top to concentrate beams
                            right: 0,
                            transform: 'scaleY(-1)', // Flip vertically
                        }}
                    >
                        <TriangleQuarter scrollY={scrollY} heightPercent={heightSpring.heightPercent.get()} />
                    </animated.div>

                    {/* Top-left (Flipped both horizontally and vertically) */}
                    <animated.div
                        style={{
                            position: 'absolute',
                            overflow: 'hidden',
                            width: '50%',
                            height: heightSpring.heightPercent.to(h => `${h}%`),
                            bottom: '53%', // Starting slightly below the top to concentrate beams
                            left: 0,
                            transform: 'scale(-1, -1)', // Flip both horizontally and vertically
                        }}
                    >
                        <TriangleQuarter scrollY={scrollY} heightPercent={heightSpring.heightPercent.get()} />
                    </animated.div>
                </animated.div>
            )}
        </div>
    );
};

export default Beams;
