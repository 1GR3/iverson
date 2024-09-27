import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import "../styles/styles.scss";
import NCAgraphic from '../components/NCA';
import NCAmask from '../components/NCAmask';
import { useSpring, animated } from '@react-spring/web';
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
  const [{ scale }, api] = useSpring(() => ({ scale: 1 }));
  const [scrollY, setScrollY] = React.useState(0);
  const [isMaskVisible, setIsMaskVisible] = React.useState(true);

  const isBrowser = typeof window !== "undefined";
  if (isBrowser) {
    useScroll(
      ({ xy: [, y] }) => {
        const newScale = Math.min(1 + y / 100, 50);
        api.start({ scale: newScale });
        setScrollY(y);
      },
      { domTarget: window }
    );
  }

  // Fading header/footer effect based on scroll position
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

  // Handle mask completion
  const handleMaskCompletion = () => {
    setIsMaskVisible(false); // Hide NCAmask after animation
  };

  return (
    <div className="overflow-hidden" style={{ minHeight: '10000px' }}>
      {/* Render NCAgraphic only when NCAmask is not visible */}
      {!isMaskVisible && (
        <animated.div
          style={{
            width: '100vw',
            height: '100vh',
            scale,
            transformOrigin: '0% 0%',
            position: 'fixed',
            top: '50%',
            left: '50%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            transform: 'translate(-50%, -50%)',
          }}
        >
          <NCAgraphic scrollY={scrollY} />
        </animated.div>
      )}

      {/* Show NCAmask while it's visible */}
      {isMaskVisible && (
        <div className="position-fixed w-100 h-100" style={{ overflow: 'hidden' }}>
          <NCAmask scrollY={scrollY} onAnimationComplete={handleMaskCompletion} />
        </div>
      )}

      <TextLines scrollY={scrollY} />
      <ImageFlow scrollY={scrollY} />
      <Beams scrollY={scrollY} />
      <EndSection scrollY={scrollY} />

      {/* Header */}
      <animated.header className="position-fixed top-0 w-100 px-4" style={headerFooterSpring}>
        <div className="row">
          <div className="col-12 col-md-6 mx-auto order-2 order-md-1 py-3">
            <h1 className="text-start text-md-center">NATIONAL CRYPTOCURRENCY ASSOCIATION</h1>
          </div>
        </div>
      </animated.header>

      <div className="position-fixed top-0 end-0 z-3">
        <button type="button" className="btn btn-link btn-lg p-3 text-decoration-none text-uppercase signup" data-bs-toggle="modal" data-bs-target="#signUpModal">
          Sign Up
        </button>
      </div>

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

export const Head: HeadFC = () => (
  <>
    <title>National Cryptocurrency Association</title>;
    {/* Open Graph tags */}
    <meta property="og:title" content="National Cryptocurrency Association" />
    <meta property="og:description" content="Whether you’re just getting started or leading the charge—if you believe crypto is here for good, we are here for you." />
    <meta property="og:image" content="https://www.national-cryptocurrency-association.org/images/og-image.jpg" />
    <meta property="og:url" content="https://www.national-cryptocurrency-association.org" />
    <meta property="og:type" content="website" />

    {/* Twitter Card tags */}
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="National Cryptocurrency Association" />
    <meta name="twitter:description" content="Whether you’re just getting started or leading the charge—if you believe crypto is here for good, we are here for you." />
    <meta name="twitter:image" content="https://www.national-cryptocurrency-association.org/og-image.jpg" />
  </>
)