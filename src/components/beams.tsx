import React from "react";
import { useSpring, animated } from '@react-spring/web'; // Animation from react-spring

interface TriangleProps {
    scrollY: number;
}

const Triangle: React.FC<TriangleProps> = ({ scrollY }) => {
    const safeScrollY = !isNaN(scrollY) ? scrollY : 0;
    let base = 0;

    if (safeScrollY >= 4000) {
        const progress = Math.min((safeScrollY - 5000) / 3500, 1);
        base = progress * 285;
    }

    return (
        <svg width="1000px" height="1000px" style={{ position: 'absolute', top: 0, left: 0 }}>
            <path d={`M0,0 L${-base},1000 L${base},1000 Z`} fill="#FD5300" stroke="#FD5300" />
        </svg>
    );
};

const TriangleQuarter: React.FC<{ scrollY: number; heightPercent: number }> = ({ scrollY, heightPercent }) => {
    const beamCount = 9;
    const skewAmount = 7;
    const rotationDegree = -1 * (scrollY - 4510) / 295;

    const triangles = Array.from({ length: beamCount }, (_, i) => (
        <div
            key={i}
            style={{
                transform: `skewX(${skewAmount * i}deg) rotate(${rotationDegree * i}deg)`,
                transformOrigin: '0 0',
                position: 'absolute',
                transformBox: 'fill-box',
                top: 0,
                left: `${i * 0.0125}%`,
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
    const beamAnimations = [{ fadeIn: 5000, fadeOut: 10300 }];
    const currentIndex = beamAnimations.findIndex(
        (item) => scrollY >= item.fadeIn && scrollY <= item.fadeOut
    );

    const heightSpring = useSpring({
        heightPercent: scrollY >= 5000 && scrollY <= 10300
            ? Math.min(50, Math.max(1, (scrollY - 5000) / (7300 - 5000) * 50))
            : 1,
        config: { tension: 40, friction: 10 },
    });

    // Spring for top/bottom position transition
    const positionSpring = useSpring({
        topBottomPercent: scrollY >= 7000 && scrollY <= 7900
            ? Math.max(50, 55.5 - (scrollY - 7000) / 900 * 5.5) // Interpolate from 55.5% to 50%
            : scrollY < 7000
                ? 55.5
                : 50, // After 7900px, it should remain at 50%
        config: { tension: 100, friction: 10 },
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
                            top: positionSpring.topBottomPercent.to(v => `${v}%`), // Change top position
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
                            top: positionSpring.topBottomPercent.to(v => `${v}%`), // Change top position
                            left: 0,
                            transform: 'scaleX(-1)',
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
                            bottom: positionSpring.topBottomPercent.to(v => `${v}%`), // Change bottom position
                            right: 0,
                            transform: 'scaleY(-1)',
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
                            bottom: positionSpring.topBottomPercent.to(v => `${v}%`), // Change bottom position
                            left: 0,
                            transform: 'scale(-1, -1)',
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
