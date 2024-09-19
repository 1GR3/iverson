import React from "react";

// Triangle component that forms the base of each beam
const Triangle: React.FC = () => {
    return (
        <svg
            width="50%"
            height="50%" // Adjust to 50% of the container height
            viewBox="0 0 100 100"
            style={{
                position: 'absolute',
                top: 0,
                left: 0,
            }}
        >
            <path d="M0,0 L0,100 L1,100 Z" fill="#FD5300" stroke="#FD5300" />
        </svg>
    );
};

// The TriangleQuarter component creates the beams
const TriangleQuarter: React.FC = () => {
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
                width: '100%', // Adjust width to line up the triangles
                height: '100%',
            }}
        >
            <Triangle />
        </div>
    ));

    return <>{triangles}</>;
};

// The Beams component combines all quarters and applies rotations and flips
const Beams: React.FC = () => {
    return (
        <div className="position-fixed" style={{ width: '100vw', height: '100vh', top: '0', left: '0' }}>
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
                <TriangleQuarter />
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
                <TriangleQuarter />
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
                <TriangleQuarter />
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
                <TriangleQuarter />
            </div>
        </div>
    );
};

export default Beams;
