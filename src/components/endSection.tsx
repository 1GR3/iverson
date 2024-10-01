import React from 'react';
import { useSpring, animated } from '@react-spring/web';
import { useScroll } from 'react-use-gesture';
import "bootstrap-icons/font/bootstrap-icons.css";

const EndSection: React.FC<{ scrollY: number }> = ({ scrollY }) => {
    // Define the scroll range (8200px to 8700px) for the fade-in effect
    const fadeStart = 7900;
    const fadeEnd = 8300;

    // Calculate the opacity based on the scroll position
    const opacity = Math.min(Math.max((scrollY - fadeStart) / (fadeEnd - fadeStart), 0), 1);

    // Use react-spring for smooth transitions (just for opacity here)
    const spring = useSpring({
        opacity, // Set opacity based on scroll
        config: { tension: 200, friction: 20 },
    });

    // New spring for the Twitter icon
    const twitterSpring = useSpring({
        opacity: opacity === 1 ? 1 : 0, // Only show when the section is fully visible
        transform: opacity === 1 ? 'translateY(0)' : 'translateY(20px)', // Add a small animation
        pointerEvents: opacity === 1 ? 'auto' : 'none', // Disable interaction when not visible
        config: { tension: 200, friction: 20 },
    });

    return (
        <animated.section
            className="d-flex flex-column justify-content-between min-vh-100  bg-danger position-fixed w-100"
            style={{
                top: 0,  // Keep it fixed at the top of the viewport
                zIndex: 3,  // Ensure it appears on top
                ...spring,  // Apply the opacity animation from react-spring
            }}
        >
            {/* Header */}
            <header className="pt-3 px-3">
                <h1 className="fw-bold text-start text-md-center col-6 col-md-12">NATIONAL CRYPTOCURRENCY ASSOCIATION</h1>
            </header>

            {/* Main content */}
            <div className="container text-center">
                <div className="row">
                    <div className="col-12">
                        <p className="text-lines mb-5">
                            We are the National <br />
                            Cryptocurrency Association.
                        </p>
                        <p className="text-lines mb-5">
                            Whether you’re just getting started<br />
                            or leading the charge—if you believe crypto 
                            <br />
                            is here for good, we are here for you.
                        </p>

                        <button type="button" className="btn btn-light" data-bs-toggle="modal" data-bs-target="#signUpModal">
                            BECOME A MEMBER
                        </button>
                    </div>
                </div>
            </div>

            {/* Footer with Icons */}
            <footer className="pb-4 text-center">
                <animated.div className="d-flex justify-content-center fs-4" style={{
                    opacity: twitterSpring.opacity,
                    transform: twitterSpring.transform,
                    pointerEvents: twitterSpring.pointerEvents as any
                }}>
                    <a 
                        href="https://x.com/NatCryptoAssoc" 
                        className="mx-2"
                        aria-hidden={opacity !== 1}
                        tabIndex={opacity === 1 ? 0 : -1}
                    >
                        <i className="bi bi-twitter-x"></i>
                    </a>
                </animated.div>
            </footer>
        </animated.section>
    );
};

export default EndSection;