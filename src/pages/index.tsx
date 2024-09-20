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

//import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


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

  return (
    <div className="overflow-hidden" style={{ minHeight: '5000px' }}>
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
      <EndSection />
      {/* Header */}
      <header className="position-fixed top-0 w-100 px-4">
        <div className="row">
          <div className="col-12 col-md-6 offset-md-3 order-2 order-md-1 py-3">
            <h1 className="text-center">NATIONAL CRYPTOCURRENCY ASSOCIATION</h1>
          </div>
          <div className="col-12 col-md-3 order-1 order-md-2 text-end py-3">
            <button type="button" className="btn btn-link btn-lg p-0 text-decoration-none">
              JOIN NCA
            </button>
          </div>
        </div>
      </header>

      {/* Footer */}
      <footer className="position-fixed bottom-0 w-100 d-flex justify-content-center">
        <button type="button" className="btn btn-link btn-lg py-3 text-decoration-none">
          START JOURNEY
        </button>
      </footer>
      <SignUpModal />
    </div>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;