import React from 'react';
import "bootstrap-icons/font/bootstrap-icons.css";


const EndSection: React.FC = () => {
    return (
        <section className="d-flex flex-column justify-content-between min-vh-100 text-center bg-danger position-relative z-2" style={{ marginTop: '4400px' }}>
            {/* Header */}
            <header className="pt-5">
                <h1 className="fw-bold">NATIONAL CRYPTOCURRENCY ASSOCIATION</h1>
            </header>

            {/* <div className="d-flex flex-column justify-content-center align-items-center"> */}
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-9 col-lg-7 mx-auto">
                        <p className="text-lines mb-5">
                            We give you the tools needed to unlock the full potential of crypto.
                        </p>
                        <p className="text-lines mb-5">
                            Whether you're just getting started or leading the charge, join us in showing
                            that crypto is here for good.
                        </p>

                        <button type="button" className="btn btn-light" data-bs-toggle="modal" data-bs-target="#signUpModal">
                            SIGN UP</button>

                    </div>
                </div>
            </div>

            {/* Footer with Icons */}
            <footer className="pb-4">
                <div className="d-flex justify-content-center fs-4">
                    <a href="#" className="mx-2">
                        <i className="bi bi-facebook"></i>
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

        </section>
    );
};

export default EndSection;
