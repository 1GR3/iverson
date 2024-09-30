import * as React from "react";
import { useSpring, animated } from '@react-spring/web'; // Animation from react-spring
import { useScroll } from 'react-use-gesture';
import { withPrefix } from 'gatsby';

const ImageFlow: React.FC<{ scrollY: number }> = ({ scrollY }) => {

    const images = [
        withPrefix('/images/img01.jpg'),
        withPrefix('/images/img02.jpg'),
        withPrefix('/images/img03.jpg'),
        withPrefix('/images/img04.jpg'),
        withPrefix('/images/img05.jpg'),
        withPrefix('/images/img06.jpg'),
    ];

    // Predefined positions for each image (x, y in percentages, z in pixels)
    const imagePositions = [
        { x: 60, y: 70, z: 1700 }, // Position for image 1
        { x: 15, y: 55, z: 1500 }, // Position for image 2
        { x: 95, y: 52, z: 1000 }, // Position for image 3
        { x: 35, y: 12, z: 1800 }, // Position for image 4
        { x: 5, y: 9, z: 1300 }, // Position for image 5
        { x: 75, y: 8, z: 1100 }, // Position for image 6
    ];

    // Get the spring animation for each image based on the scroll position
    const springs = imagePositions.map((pos) =>
        useSpring({
            to: {
                z: -2700 + pos.z + scrollY * 0.75, // Move objects closer by reducing Z when scrolling down
            },
            config: { tension: 200, friction: 20 },
        })
    );

    // Function to calculate smooth opacity transitions
    const calculateOpacity = (z: number) => {
        if (z <= -400) return 0; // Completely invisible before -400px
        if (z > -400 && z <= 0) return (z + 400) / 400; // Fade in between -400px and 0px
        if (z > 0 && z <= 100) return 1 - (z / 100); // Fade out between 0px and 100px
        return 0; // Invisible after 100px
    };

    // Function to calculate z-index based on z value
    const calculateZIndex = (z: number) => {
        const minZ = -500; // Closest visible point
        const maxZ = 1000; // Furthest visible point
        const normalizedZ = Math.min(Math.max(z, minZ), maxZ); // Clamp z within the range
        const zIndex = Math.round(((normalizedZ - minZ) / (maxZ - minZ)) * 100); // Map z to z-index range
        return zIndex;
    };

    return (
        <div className="position-fixed w-100 h-100" style={{ perspective: '1000px', overflow: 'hidden' }}>
            {springs.map((spring, index) => (
                <animated.div
                    key={index}
                    className={"image-box position-absolute d-flex justify-content-center align-items-center"}
                    style={{
                        transform: spring.z.to(z => `translate3d(${imagePositions[index].x}vw, ${imagePositions[index].y}vh, ${z}px)`), // Use predefined percentage positions for X and Y
                        opacity: spring.z.to(calculateOpacity), // Fade in/out smoothly based on Z position
                        zIndex: spring.z.to(calculateZIndex), // Set z-index based on Z position
                        width: '200px', // Box size
                        height: '256px', // Box size
                        willChange: 'transform, opacity, z-index', // Optimization for animation
                    }}
                >
                    <img
                        src={images[index]} // Load the image from the array
                        alt={`Image ${index + 1}`} // Set alt text
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover', // Ensure images cover the container
                        }}
                    />
                </animated.div>
            ))}
        </div>
    );
};

const ParentComponent: React.FC = () => {
    const [scrollY, setScrollY] = React.useState(0);
    const isBrowser = typeof window !== "undefined";

    // Track the scroll position
    if (isBrowser) {
        useScroll(
            ({ xy: [, y] }) => {
                setScrollY(y);
            },
            { domTarget: window }
        );
    }

    // Define the scroll threshold for showing ImageFlow
    const currentIndex = scrollY >= 1251 && scrollY <= 3500 ? 1 : -1;

    // Use spring for smooth transition of opacity (show/hide ImageFlow)
    const spring = useSpring({
        opacity: currentIndex !== -1 ? 1 : 0,
        config: { tension: 200, friction: 20 },
    });

    return (
        <div>
            {/* Conditionally render the ImageFlow when the threshold is passed */}
            {currentIndex !== -1 && (
                <animated.div
                    style={{
                        opacity: spring.opacity,
                    }}
                >
                    <ImageFlow scrollY={scrollY} />
                </animated.div>
            )}
        </div>
    );
};

export default ParentComponent;
