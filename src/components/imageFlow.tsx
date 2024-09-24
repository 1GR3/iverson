import * as React from "react";
import { useSpring, animated } from '@react-spring/web'; // Animation from react-spring
import { useScroll } from 'react-use-gesture';

const ImageFlow: React.FC<{ scrollY: number }> = ({ scrollY }) => {
    const isBrowser = typeof window !== "undefined";

    // Generate random positions for the images in 3D space (initial Z positions are far from the camera)
    const imagePositions = React.useMemo(() => {
        return Array(6).fill(0).map(() => ({
            x: Math.random() * 2000 - 1000, // Random X position
            y: Math.random() * 1000 - 500,  // Random Y position
            z: Math.random() * 5000 + 1000, // Random Z position (far from the camera)
        }));
    }, []);

    // Get the spring animation for each image based on the scroll position
    const springs = imagePositions.map((pos, index) =>
        useSpring({
            to: {
                z: -4500 + pos.z + scrollY * 1.5, // Move objects closer by reducing Z when scrolling down
            },
            config: { tension: 200, friction: 20 },
        })
    );

    return (
        <div className="position-fixed w-100 h-100" style={{ perspective: '1000px', overflow: 'hidden' }}>
            {springs.map((spring, index) => (
                <animated.div
                    key={index}
                    className={"image-box position-absolute d-flex justify-content-center align-items-center"}
                    style={{
                        transform: spring.z.to(z => `translate3d(${imagePositions[index].x}px, ${imagePositions[index].y}px, ${z}px)`), // Use the updated Z to move images closer
                        opacity: 1, // Fixed opacity for testing
                        width: '200px', // Box size
                        height: '256px', // Box size
                        border: '1px solid white', // Set background color to white for visibility

                        willChange: 'transform, opacity', // Optimization for animation
                    }}
                >
                    image
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
    const currentIndex = scrollY >= 1251 ? 1 : -1;

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
