import React from 'react';
import { useSpring, animated } from '@react-spring/web';
import { useScroll } from 'react-use-gesture';
import "bootstrap-icons/font/bootstrap-icons.css";

const EndSection: React.FC<{ scrollY: number }> = ({ scrollY }) => {
    // Define the scroll range (8200px to 8700px) for the fade-in effect
    const fadeStart = 7200;
    const fadeEnd = 7700;

    // Calculate the opacity based on the scroll position
    const opacity = Math.min(Math.max((scrollY - fadeStart) / (fadeEnd - fadeStart), 0), 1);

    // Use react-spring for smooth transitions (just for opacity here)
    const spring = useSpring({
        opacity, // Set opacity based on scroll
        config: { tension: 200, friction: 20 },
    });

    return (
        <animated.section
            className="d-flex flex-column justify-content-between min-vh-100 text-center bg-danger position-fixed w-100"
            style={{
                top: 0,  // Keep it fixed at the top of the viewport
                zIndex: 3,  // Ensure it appears on top
                ...spring,  // Apply the opacity animation from react-spring
            }}
        >
            {/* Header */}
            <header className="pt-3">
                <h1 className="fw-bold">NATIONAL CRYPTOCURRENCY ASSOCIATION</h1>
            </header>

            {/* Main content */}
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <p className="text-lines mb-5">
                            We give you the tools needed to<br />
                            unlock the full potential of crypto.
                        </p>
                        <p className="text-lines mb-5">
                            Whether you're just getting started<br />
                            or leading the charge, join us in showing<br />
                            that crypto is here for good.
                        </p>

                        <button type="button" className="btn btn-light" data-bs-toggle="modal" data-bs-target="#signUpModal">
                            BECOME A MEMBER
                        </button>
                    </div>
                </div>
            </div>

            {/* Footer with Icons */}
            <footer className="pb-4">
                <div className="d-flex justify-content-center fs-4">
                    <a href="#" className="mx-2">
                        <i className="bi bi-facebook text-light"></i>
                    </a>
                    <a href="#" className="mx-2">
                        <i className="bi bi-twitter-x"></i>
                    </a>
                    <a href="#" className="mx-2">
                        <i className="bi bi-instagram"></i>
                    </a>
                    <a href="#" className="mx-2">
                        <i className="bi bi-linkedin"></i>
                    </a>
                </div>
            </footer>
        </animated.section>
    );
};

export default EndSection;