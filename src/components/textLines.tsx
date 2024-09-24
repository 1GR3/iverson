import * as React from "react";
import { useSpring, animated } from '@react-spring/web'; // Animation from react-spring
import { useScroll } from 'react-use-gesture';

const TextLines: React.FC = () => {
    const [scrollY, setScrollY] = React.useState(0);
    const isBrowser = typeof window !== "undefined";

    // Define the text lines along with their fade-in and fade-out thresholds
    const textAnimations = [
        { text: "The full story of crypto is still untold.", fadeIn: 350, fadeOut: 1000 },
        { text: "Millions of its holders have gone unheard.<br />We’re here to change that.", fadeIn: 1150, fadeOut: 1850 },
        { text: "Doctors.<br />Filmmakers.<br />Memorabilia collectors.<br />Artists.<br />Contract lawyers.<br />Software developers.", fadeIn: 2000, fadeOut: 3500 },
        { text: "We’re here to amplify your voice.", fadeIn: 3950, fadeOut: 4550 },
        { text: "Loud and clear.", fadeIn: 4700, fadeOut: 5400 },
    ];

    // Calculate which text should be visible based on scrollY
    const currentIndex = textAnimations.findIndex(
        (item) => scrollY >= item.fadeIn && scrollY <= item.fadeOut
    );

    // Get the animation spring for the current text line
    const spring = useSpring({
        opacity: currentIndex !== -1 ? 1 : 0,
        scale: currentIndex !== -1 ? 1 : 0.8,
        config: { tension: 200, friction: 20 },
    });

    // Use the scroll event to capture scroll position
    if (isBrowser) {
        useScroll(
            ({ xy: [, y] }) => {
                setScrollY(y); // Update scrollY value
            },
            { domTarget: window }
        );
    }

    return (
        <div className="position-fixed w-100 h-100 d-flex align-items-center justify-content-center">
            {currentIndex !== -1 && (
                <animated.div
                    style={{
                        opacity: spring.opacity,
                        scale: spring.scale,
                        transformOrigin: 'center',
                    }}
                    className={"text-lines"}

                    dangerouslySetInnerHTML={{ __html: textAnimations[currentIndex].text }}
                >

                </animated.div>
            )}
        </div>
    );
};

export default TextLines;
