import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import "../styles/styles.scss";
import NCAgraphic from '../components/NCA';
import { useSpring, animated } from '@react-spring/web'; // Animation from react-spring
import { useScroll } from 'react-use-gesture';
import TextLines from "../components/textLines";
import ImageFlow from "../components/imageFlow";
import Beams from "../components/beams";
import EndSection from "../components/endSection";
import SignUpModal from "../components/modal";

// Dynamically import bootstrap on the client side
const isBrowser = typeof window !== "undefined";
if (isBrowser) {
  import('bootstrap/dist/js/bootstrap.bundle.min.js');
}

const IndexPage: React.FC<PageProps> = () => {
  // Use spring for the scaling animation
  const [{ scale }, api] = useSpring(() => ({ scale: 1 }));

  // Scroll position state
  const [scrollY, setScrollY] = React.useState(0);

  const isBrowser = typeof window !== "undefined";
  // Use the scroll event to trigger the scaling and capture scroll position
  if (isBrowser) {
    useScroll(
      ({ xy: [, y] }) => {
        const newScale = Math.min(1 + y / 100, 50);
        api.start({ scale: newScale });

        // Update scrollY state with current scroll position
        setScrollY(y);

        // Log scroll position for debugging
        console.log("Scroll Y:", y);
      },
      { domTarget: window }
    );
  }

  // Use spring for fading out and moving header and footer based on scroll position
  const headerFooterSpring = useSpring({
    opacity: scrollY < 25 ? 1 : scrollY > 150 ? 0 : 1 - (scrollY - 25) / 125,
    transform: scrollY < 25 ? 'translateY(0px)' : scrollY > 150 ? 'translateY(-16px)' : `translateY(${-(scrollY - 25) / 125 * 16}px)`,
    config: { tension: 200, friction: 20 },
  });

  const footerSpring = useSpring({
    opacity: scrollY < 25 ? 1 : scrollY > 150 ? 0 : 1 - (scrollY - 25) / 125,
    transform: scrollY < 25 ? 'translateY(0px)' : scrollY > 150 ? 'translateY(16px)' : `translateY(${(scrollY - 25) / 125 * 16}px)`,
    config: { tension: 200, friction: 20 },
  });

  return (
    <div className="overflow-hidden" style={{ minHeight: '10000px' }}>
      <animated.div
        style={{
          width: '100vw',
          height: '100vh',
          scale,
          transformOrigin: '0% 0%',  // Ensures the scaling happens from the top-left corner
          position: 'fixed',                 // Keeps it in view while scrolling
          top: '50%',                        // Center it vertically
          left: '50%',                       // Center it horizontally
          display: 'flex',                   // Flexbox for centering the content
          justifyContent: 'center',          // Horizontal centering
          alignItems: 'center',              // Vertical centering
          transform: 'translate(-50%, -50%)',// Precisely center the element in the viewport
        }}
      >
        {/* Pass the scroll position as a prop */}
        <NCAgraphic scrollY={scrollY} />
      </animated.div>

      <TextLines scrollY={scrollY} />
      <ImageFlow scrollY={scrollY} />
      <Beams scrollY={scrollY} />
      <EndSection scrollY={scrollY} />

      {/* Header */}
      <animated.header className="position-fixed top-0 w-100 px-4" style={headerFooterSpring}>
        <div className="row">
          <div className="col-12 col-md-6 offset-md-3 order-2 order-md-1 py-3">
            <h1 className="text-center">NATIONAL CRYPTOCURRENCY ASSOCIATION</h1>
          </div>
          <div className="col-12 col-md-3 order-1 order-md-2 text-end py-3">
            <button type="button" className="btn btn-link btn-lg p-0 text-decoration-none text-uppercase">
              Sign Up
            </button>
          </div>
        </div>
      </animated.header>

      {/* Footer */}
      <animated.footer className="position-fixed bottom-0 w-100 d-flex justify-content-center" style={footerSpring}>
        <button type="button" className="btn btn-outline-light btn-lg p-3 mb-3">
          <i className="bi bi-chevron-down"></i>
        </button>
      </animated.footer>

      <SignUpModal />
    </div>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>National Cryptocurrency Association</title>;
