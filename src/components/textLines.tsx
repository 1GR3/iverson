import * as React from "react";
import { useSpring, animated } from '@react-spring/web';
import { useScroll } from 'react-use-gesture';

const TextLines: React.FC = () => {
    const [scrollY, setScrollY] = React.useState(0);
    const isBrowser = typeof window !== "undefined";

    // Define the text lines along with their fade-in and fade-out thresholds
    const textAnimations = [
        { text: "The full story of crypto is still untold.", fadeIn: 360, fadeOut: 1350 },
        { text: "Millions of its holders have gone<br class='d-block d-md-none' /> unheard. <br class='d-none d-md-block' />We’re here to change that.", fadeIn: 1450, fadeOut: 2450 },
        { text: "We see you.<br /><br />Builders.<br />Traders.<br />Small business owners.<br />Gamers.<br />Nine - to - fivers.<br />Shift workers.<br />HODLers.<br />The “just curious.”<br />The “all in.”<br /><br />You are the full story of crypto.", fadeIn: 2500, fadeOut: 3500 },
        { text: "You are the full story of crypto.<br />That’s why we’re here to represent you.", fadeIn: 3950, fadeOut: 5550 },
    ];

    // Calculate which text should be visible based on scrollY
    const currentIndex = textAnimations.findIndex(
        (item) => scrollY >= item.fadeIn && scrollY <= item.fadeOut
    );

    // Get the animation spring for the current text line, adjusting the scale and opacity based on scroll direction
    const spring = useSpring({
        opacity: scrollY >= textAnimations[currentIndex]?.fadeIn && scrollY <= textAnimations[currentIndex]?.fadeOut
            ? scrollY < textAnimations[currentIndex]?.fadeIn + ((textAnimations[currentIndex]?.fadeOut - textAnimations[currentIndex]?.fadeIn) / 2)
                ? 1
                : 0
            : 0,
        scale: scrollY >= textAnimations[currentIndex]?.fadeIn && scrollY <= textAnimations[currentIndex]?.fadeOut
            ? scrollY < textAnimations[currentIndex]?.fadeIn + ((textAnimations[currentIndex]?.fadeOut - textAnimations[currentIndex]?.fadeIn) / 2)
                ? 1 // On the way up or down, text is scaled to 1
                : 1.2 // At the bottom of the scroll window, it's slightly larger
            : 0.8, // When out of bounds, the scale is smaller
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
                />
            )}
        </div>
    );
};

export default TextLines;
