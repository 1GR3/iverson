import React, { useState } from 'react';

const SignUpModal: React.FC = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [acceptedTerms, setAcceptedTerms] = useState(false); // Track checkbox state
    const [errors, setErrors] = useState({
        name: '',
        email: '',
        terms: '',
    });
    const [isSubmitted, setIsSubmitted] = useState(false); // Track submission state

    // Validation functions
    const validateName = () => {
        if (name.trim() === '') {
            return 'Name is required';
        } else if (!/^[a-zA-Z ]{2,30}$/.test(name)) {
            return 'Name must be between 2 and 30 characters and contain only letters and spaces';
        }
        return '';
    };

    const validateEmail = () => {
        if (email.trim() === '') {
            return 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            return 'Email is invalid';
        }
        return '';
    };

    const validateTerms = () => {
        if (!acceptedTerms) {
            return 'You must accept the Terms and Privacy Policy';
        }
        return '';
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault(); // Prevent form from submitting
        const nameError = validateName();
        const emailError = validateEmail();
        const termsError = validateTerms();

        if (nameError || emailError || termsError) {
            setErrors({ name: nameError, email: emailError, terms: termsError });
        } else {
            setErrors({ name: '', email: '', terms: '' });
            setIsSubmitted(true); // Set the state to show the success message
        }
    };

    return (
        <div className="modal fade" id="signUpModal" tabIndex={-1} aria-labelledby="signUpModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    {!isSubmitted ? (
                        <>
                            {/* Original Form */}
                            <div className="modal-header border-0 pt-5 position-relative">
                                <h5 className="modal-title" id="signUpModalLabel">Sign Up</h5>
                                <button type="button" className="btn btn-close position-absolute"
                                    style={{ top: '8px', right: '6px' }}
                                    data-bs-dismiss="modal" aria-label="Close">
                                    <i className="bi bi-x fs-3"></i>
                                </button>
                            </div>

                            <div className="modal-body pb-5">
                                <p className="text-center">This is a text to provide context to the form.</p>
                                <form onSubmit={handleSubmit}>
                                    {/* Name Input */}
                                    <div className="mb-3">
                                        <label htmlFor="name" className="form-label">Name <span className="text-danger">*</span></label>
                                        <input
                                            type="text"
                                            className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                                            id="name"
                                            placeholder="e.g. Jane Smith"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            required
                                        />
                                        {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                                    </div>

                                    {/* Email Input */}
                                    <div className="mb-3">
                                        <label htmlFor="email" className="form-label">Email <span className="text-danger">*</span></label>
                                        <input
                                            type="email"
                                            className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                                            id="email"
                                            placeholder="e.g. jane@nca.org"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            required
                                        />
                                        {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                                    </div>

                                    {/* State Selection */}
                                    <div className="mb-3">
                                        <label htmlFor="state" className="form-label">State</label>
                                        <select className="form-select" aria-label="Select a state" id="state" defaultValue="">
                                            <option value="" selected>Select a state</option>
                                            {/* Options */}
                                            <option value="AL">Alabama</option>
                                            {/* More state options */}
                                        </select>
                                    </div>

                                    {/* Crypto Experience Selection */}
                                    <div className="mb-4">
                                        <label htmlFor="cryptoExperience" className="form-label">Crypto experience</label>
                                        <select className="form-select" id="cryptoExperience">
                                            <option value="Beginner">I’m new to crypto</option>
                                            <option value="Intermediate">I know a little</option>
                                            <option value="Expert">I know a lot</option>
                                        </select>
                                    </div>

                                    {/* Terms and Privacy Policy Checkbox */}
                                    <div className="form-check mb-4">
                                        <input
                                            type="checkbox"
                                            className={`form-check-input ${errors.terms ? 'is-invalid' : ''}`}
                                            id="acceptTerms"
                                            checked={acceptedTerms}
                                            onChange={(e) => setAcceptedTerms(e.target.checked)}
                                            required
                                        />
                                        <label className="form-check-label" htmlFor="acceptTerms">
                                            By becoming a member, you accept our <a href="terms-and-conditions" className="text-dark" target='_blank'>Terms</a> and <a href="privacy-policy" className="text-dark" target='_blank'>Privacy Policy</a>. <span className="text-danger">*</span>
                                        </label>
                                        {errors.terms && <div className="invalid-feedback d-block">{errors.terms}</div>}
                                    </div>

                                    {/* Submit Button */}
                                    <button type="submit" className="btn btn-dark btn-sm w-100">SIGN UP</button>
                                </form>
                            </div>
                        </>
                    ) : (
                        /* Success State */
                        <div className="modal-body text-center py-5">
                            <h5 className='modal-title'>Success!</h5>
                            <button type="button" className="btn btn-close position-absolute"
                                style={{ top: '8px', right: '6px' }}
                                data-bs-dismiss="modal" aria-label="Close">
                                <i className="bi bi-x fs-3"></i>
                            </button>
                            <div className="my-5">
                                <svg width="160" height="161" viewBox="0 0 160 161" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M77.8336 105.222L68.9424 159.742L63.2741 158.742L73.567 104.468L55.3435 156.617L49.9339 154.649L69.4931 102.99L42.493 151.179L37.5078 148.3L65.7433 100.819L30.7814 143.591L26.3726 139.891L62.4264 98.0317L20.5658 134.085L16.867 129.676L59.6368 94.7161L12.1567 122.95L9.27944 117.965L57.4727 90.9624L5.80907 110.523L3.84006 105.115L55.989 86.8911L1.71487 97.183L0.715469 91.5148L55.2379 82.6239L0 83.3356V77.5796L55.2347 78.2905L0.715469 69.3992L1.71487 63.7311L55.9872 74.0233L3.84006 55.8003L5.80907 50.391L57.4705 69.9517L9.27944 42.9502L12.1567 37.965L59.6417 66.2021L16.867 31.2384L20.5658 26.8298L62.4251 62.8817L26.3726 21.023L30.7814 17.3239L65.7442 60.098L37.5078 12.6138L42.493 9.73636L69.4949 57.9281L49.9339 6.26616L55.3435 4.29704L73.5665 56.4447L63.2741 2.1719L68.9424 1.17233L77.8332 55.6913L77.1227 0.457031H82.8785L82.1671 55.6951L91.0578 1.17233L96.7261 2.1719L86.4337 56.4469L104.658 4.29704L110.066 6.26616L90.5053 57.9296L117.508 9.73636L122.493 12.6138L94.2578 60.0966L129.219 17.3239L133.629 21.023L97.5774 62.8801L139.434 26.8298L143.134 31.2384L100.361 66.201L147.843 37.965L150.722 42.9502L102.532 69.9509L154.192 50.391L156.16 55.8003L104.013 74.0236L158.285 63.7311L159.285 69.3992L104.766 78.2905L160 77.5796V83.3356L104.763 82.6239L159.285 91.5148L158.285 97.183L104.01 86.8908L156.16 105.115L154.192 110.523L102.53 90.9631L150.722 117.965L147.843 122.95L100.366 94.7174L143.134 129.676L139.434 134.085L97.5761 98.0332L133.629 139.891L129.219 143.591L94.2583 100.82L122.493 148.3L117.508 151.179L90.5062 102.987L110.066 154.649L104.658 156.617L86.4337 104.466L96.7261 158.742L91.0578 159.742L82.1671 105.22L82.8785 160.457H77.1227L77.8336 105.222Z" fill="#F64C07" />
                                </svg>

                            </div>
                            <p className='mb-5'>Thank you for signing up.</p>
                            <button type="button" className="btn btn-outline-dark btn-lg" data-bs-dismiss="modal">CLOSE</button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default SignUpModal;
