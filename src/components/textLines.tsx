import * as React from "react";
import { useSpring, animated, config } from '@react-spring/web';

const TextLines: React.FC = () => {
    const [scrollY, setScrollY] = React.useState(0);
    const isBrowser = typeof window !== "undefined";

    // Updated textAnimations array
    const textAnimations = [
        { text: "The full story of crypto is still untold.", fadeIn: 360, fadeOut: 1300 },
        { text: "Millions of its holders have gone unheard. <br class='d-none d-md-block' />We’re here to change that.", fadeIn: 1350, fadeOut: 2450 },
        [
            { text: "We see you.", fadeIn: 2500, fadeOut: 5000 },
            { text: "Savers. Builders.", fadeIn: 2750, fadeOut: 5000 },
            { text: "First time buyers.", fadeIn: 3000, fadeOut: 5000 },
            { text: "Artists. Nurses.", fadeIn: 3250, fadeOut: 5000 },
            { text: "Gamers. Shopkeepers.", fadeIn: 3500, fadeOut: 5000 },
            { text: "Nine-to-fivers.", fadeIn: 3750, fadeOut: 5000 },
            { text: "Weekend hustlers.", fadeIn: 4000, fadeOut: 5000 },
            { text: "The \“just curious.\”", fadeIn: 4250, fadeOut: 5000 },
            { text: "And the \“all in.\”", fadeIn: 4500, fadeOut: 5000 },
        ],
        { text: "You are the full story of crypto.<br />That’s why we’re here to represent you.", fadeIn: 5000, fadeOut: 7000 },
    ];

    // Use useRef to store the current scroll position
    const scrollRef = React.useRef(0);

    // Updated spring calculation
    const [spring, setSpring] = useSpring(() => ({
        scroll: 0,
        config: { tension: 200, friction: 20 },
    }));

    // Use the scroll event to capture scroll position
    React.useEffect(() => {
        if (isBrowser) {
            const handleScroll = () => {
                setScrollY(window.scrollY);
            };

            window.addEventListener('scroll', handleScroll, { passive: true });
            return () => window.removeEventListener('scroll', handleScroll);
        }
    }, [isBrowser]);

    // Calculate which text group should be visible based on scrollY
    const currentGroupIndex = textAnimations.findIndex((item, index) => 
        Array.isArray(item)
            ? scrollY >= item[0].fadeIn && scrollY <= item[item.length - 1].fadeOut
            : scrollY >= item.fadeIn && scrollY <= item.fadeOut
    );

    const createSpring = (fadeIn: number, fadeOut: number) => {
        return useSpring({
            opacity: scrollY >= fadeIn && scrollY <= fadeOut ? 1 : 0,
            scale: scrollY >= fadeIn && scrollY <= fadeOut ? 1 : 0.8,
            config: config.gentle,
        });
    };

    return (
        <div className="position-fixed w-100 h-100 d-flex align-items-center justify-content-center">
            <div className="text-lines d-flex flex-column align-items-center justify-content-center" style={{ height: '100%', position: 'relative', width: '100%' }}>
                {textAnimations.map((item, groupIndex) => {
                    if (Array.isArray(item)) {
                        return (
                            <div key={`group-${groupIndex}`} className="text-group position-absolute" style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '100%', textAlign: 'center' }}>
                                {item.map((subItem, subIndex) => {
                                    const spring = createSpring(subItem.fadeIn, subItem.fadeOut);
                                    return (
                                        <animated.div
                                            key={`${groupIndex}-${subIndex}`}
                                            className={`text-line ${subIndex === 0 || subIndex === item.length - 1 ? 'mb-4' : ''}`}
                                            style={{
                                                opacity: spring.opacity,
                                                transform: spring.scale.to(s => `scale(${s})`),
                                                transformOrigin: 'center',
                                            }}
                                            dangerouslySetInnerHTML={{ __html: subItem.text }}
                                        />
                                    );
                                })}
                            </div>
                        );
                    } else {
                        const spring = createSpring(item.fadeIn, item.fadeOut);
                        return (
                            <animated.div
                                key={groupIndex}
                                className="text-line position-absolute"
                                style={{
                                    opacity: spring.opacity,
                                    transform: spring.scale.to(s => `translate(-50%, -50%) scale(${s})`),
                                    transformOrigin: 'center',
                                    top: '50%',
                                    left: '50%',
                                    width: '100%',
                                    textAlign: 'center',
                                }}
                                dangerouslySetInnerHTML={{ __html: item.text }}
                            />
                        );
                    }
                })}
            </div>
        </div>
    );
};

export default TextLines;
