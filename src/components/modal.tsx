import React, { useState } from 'react';

const SignUpModal: React.FC = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [acceptedTerms, setAcceptedTerms] = useState(false); // Track checkbox state
    const [errors, setErrors] = useState({
        firstName: '',
        lastName: '',
        email: '',
        terms: '',
    });
    const [isSubmitted, setIsSubmitted] = useState(false); // Track submission state

    // Validation functions
    const validateFirstName = () => {
        if (firstName.trim() === '') {
            return 'First name is required';
        } else if (!/^[a-zA-Z]{2,30}$/.test(firstName)) {
            return 'First name must be between 2 and 30 characters and contain only letters';
        }
        return '';
    };

    const validateLastName = () => {
        if (lastName.trim() === '') {
            return 'Last name is required';
        } else if (!/^[a-zA-Z]{2,30}$/.test(lastName)) {
            return 'Last name must be between 2 and 30 characters and contain only letters';
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
        const firstNameError = validateFirstName();
        const lastNameError = validateLastName();
        const emailError = validateEmail();
        const termsError = validateTerms();

        if (firstNameError || lastNameError || emailError || termsError) {
            setErrors({ firstName: firstNameError, lastName: lastNameError, email: emailError, terms: termsError });
        } else {
            setErrors({ firstName: '', lastName: '', email: '', terms: '' });
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
                                <h5 className="modal-title" id="signUpModalLabel">Become a Member</h5>
                                <button type="button" className="btn btn-close position-absolute"
                                    style={{ top: '8px', right: '6px' }}
                                    data-bs-dismiss="modal" aria-label="Close">
                                    <i className="bi bi-x fs-3"></i>
                                </button>
                            </div>

                            <div className="modal-body pb-5">
                                <p className="text-center">This is a text to provide context to the form.</p>
                                <form onSubmit={handleSubmit}>
                                    {/* First Name Input */}
                                    <div className="mb-3">
                                        <label htmlFor="firstName" className="form-label">First Name <span className="text-danger">*</span></label>
                                        <input
                                            type="text"
                                            className={`form-control ${errors.firstName ? 'is-invalid' : ''}`}
                                            id="firstName"
                                            placeholder="e.g. Jane"
                                            value={firstName}
                                            onChange={(e) => setFirstName(e.target.value)}
                                            required
                                        />
                                        {errors.firstName && <div className="invalid-feedback">{errors.firstName}</div>}
                                    </div>

                                    {/* Last Name Input */}
                                    <div className="mb-3">
                                        <label htmlFor="lastName" className="form-label">Last Name <span className="text-danger">*</span></label>
                                        <input
                                            type="text"
                                            className={`form-control ${errors.lastName ? 'is-invalid' : ''}`}
                                            id="lastName"
                                            placeholder="e.g. Smith"
                                            value={lastName}
                                            onChange={(e) => setLastName(e.target.value)}
                                            required
                                        />
                                        {errors.lastName && <div className="invalid-feedback">{errors.lastName}</div>}
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
                                    <button type="submit" className="btn btn-dark btn-sm w-100">BECOME A MEMBER</button>
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
                                {/* Success SVG */}
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
