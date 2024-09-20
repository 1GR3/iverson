import React from 'react';

const SignUpModal: React.FC = () => {
    return (
        <div className="modal fade" id="signUpModal" tabIndex={-1} aria-labelledby="signUpModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="signUpModalLabel">Sign Up</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>

                    <div className="modal-body">
                        <p className="text-center">This is a text to provide context to the form.</p>
                        <form>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Name <span className="text-danger">*</span></label>
                                <input type="text" className="form-control" id="name" placeholder="e.g. Jane Smith" required />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email <span className="text-danger">*</span></label>
                                <input type="email" className="form-control" id="email" placeholder="e.g. jane@nca.org" required />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="state" className="form-label">State</label>
                                <input type="text" className="form-control" id="state" placeholder="e.g. Alabama" />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="cryptoExperience" className="form-label">Crypto experience</label>
                                <select className="form-select" id="cryptoExperience">
                                    <option value="Beginner">Beginner</option>
                                    <option value="Intermediate">Intermediate</option>
                                    <option value="Expert">Expert</option>
                                </select>
                            </div>

                            <button type="submit" className="btn btn-dark w-100">SIGN UP</button>
                        </form>
                    </div>

                    <div className="modal-footer text-center">
                        <small className="text-muted">This is room for a legal disclaimer and linking to any <a href="#">Privacy Policy</a>.</small>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUpModal;
