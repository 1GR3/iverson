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
        // Gradually increase the base from 0 to 40 between 3000 and 3500 scrollY
        const progress = Math.min((safeScrollY - 3000) / 500, 1); // Get the progress between 3000 and 3500
        base = progress * 40; // Base increases from 0 to 40
    }

    return (
        <svg
            width="200px"
            height="200px"
            // viewBox="-10 0 10 100"
            style={{
                position: 'absolute',
                top: 0,
                left: 0,
            }}
        >
            {/* Dynamically update the base of the triangle */}
            <path d={`M0,0 L${-base},100 L${base},100 Z`} fill="#FD5300" stroke="#FD5300" />
        </svg>
    );
};

const TriangleQuarter: React.FC<{ scrollY: number }> = ({ scrollY }) => {
    const beamCount = 9; // Number of triangles
    const skewAmount = 7; // Skew amount to slightly tilt each triangle

    const triangles = Array.from({ length: beamCount }, (_, i) => (
        <div
            key={i}
            style={{
                transform: `skewX(${skewAmount * i}deg)`,
                transformOrigin: '0 0', // Upper-left corner for skewing
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

    return <>{triangles}</>;
};

const Beams: React.FC<{ scrollY: number }> = ({ scrollY }) => {
    // Define the beam visibility based on scroll thresholds (similar to TextLines)
    const beamAnimations = [
        { fadeIn: 2800, fadeOut: 4400 },
    ];

    // Determine which beam group should be visible based on scroll position
    const currentIndex = beamAnimations.findIndex(
        (item) => scrollY >= item.fadeIn && scrollY <= item.fadeOut
    );

    // Get the animation spring for the current beam visibility
    const spring = useSpring({
        opacity: currentIndex !== -1 ? 1 : 0,
        config: { tension: 200, friction: 20 },
    });

    return (
        <div className="position-fixed" style={{ width: '100vw', height: '100vh', top: '0', left: '0' }}>
            {currentIndex !== -1 && (
                <animated.div
                    style={{
                        opacity: spring.opacity,
                    }}
                >
                    {/* Bottom-right (Initial Quarter) */}
                    <div
                        style={{
                            position: 'absolute',
                            width: '50%',
                            height: '50%',
                            bottom: 0,
                            right: 0,
                        }}
                    >
                        <TriangleQuarter scrollY={scrollY} />
                    </div>

                    {/* Bottom-left (Flipped horizontally) */}
                    <div
                        style={{
                            position: 'absolute',
                            width: '50%',
                            height: '50%',
                            bottom: 0,
                            left: 0,
                            transform: 'scaleX(-1)', // Flip horizontally
                        }}
                    >
                        <TriangleQuarter scrollY={scrollY} />
                    </div>

                    {/* Top-right (Flipped vertically) */}
                    <div
                        style={{
                            position: 'absolute',
                            width: '50%',
                            height: '50%',
                            top: 0,
                            right: 0,
                            transform: 'scaleY(-1)', // Flip vertically
                        }}
                    >
                        <TriangleQuarter scrollY={scrollY} />
                    </div>

                    {/* Top-left (Flipped both horizontally and vertically) */}
                    <div
                        style={{
                            position: 'absolute',
                            width: '50%',
                            height: '50%',
                            top: 0,
                            left: 0,
                            transform: 'scale(-1, -1)', // Flip both horizontally and vertically
                        }}
                    >
                        <TriangleQuarter scrollY={scrollY} />
                    </div>
                </animated.div>
            )}
        </div>
    );
};

export default Beams;
