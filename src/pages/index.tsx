import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import "../styles/styles.scss";
import NCAgraphic from '../images/NCA.tsx';
import { useSpring, animated } from '@react-spring/web'; // Animation from react-spring
import { useScroll } from 'react-use-gesture';

const IndexPage: React.FC<PageProps> = () => {
  // Use spring for the scaling animation
  const [{ scale }, api] = useSpring(() => ({ scale: 1 }));

  // Use the scroll event to trigger the scaling
  useScroll(
    ({ xy: [, y] }) => {
      api.start({ scale: Math.min(1 + y / 100, 50) }); // Adjust scaling speed and max scale
    },
    { domTarget: window }
  );

  return (
    <div className="overflow-hidden" style={{ height: '500vh' }}>

      <animated.div
        style={{
          width: '100vw',
          height: '100vh',
          scale,
          transformOrigin: '0% 0%',  // Ensures the scaling happens from the center
          position: 'fixed',                 // Keeps it in view while scrolling
          top: '50%',                        // Center it vertically
          left: '50%',                       // Center it horizontally
          display: 'flex',                   // Flexbox for centering the content
          justifyContent: 'center',          // Horizontal centering
          alignItems: 'center',              // Vertical centering
          transform: 'translate(-50%, -50%)',// Precisely center the element in the viewport
        }}
      >
        {/* Your SVG Component with its viewBox */}
        <NCAgraphic />
      </animated.div>

      {/* Header */}
      <header className="position-fixed top-0 w-100  px-4">
        <div className="row ">
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

      {/* Main Content */}
      <main className="container-fluid"></main>

      {/* Footer */}
      <footer className="position-fixed bottom-0 w-100 d-flex justify-content-center">
        <button type="button" className="btn btn-link btn-lg p-0 text-decoration-none">
          START JOURNEY
        </button>
      </footer>
    </div>
  );
}

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
