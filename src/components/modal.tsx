import React, { useState } from 'react';

const AlertIcon = () => {
    return (
        <svg
            data-testid="geist-icon"
            height="16"
            strokeLinejoin="round"
            viewBox="0 0 16 16"
            width="16"
            style={{ width: 16, height: 16, color: '#FD5300' }}
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5.30761 1.5L1.5 5.30761L1.5 10.6924L5.30761 14.5H10.6924L14.5 10.6924V5.30761L10.6924 1.5H5.30761ZM5.10051 0C4.83529 0 4.58094 0.105357 4.3934 0.292893L0.292893 4.3934C0.105357 4.58094 0 4.83529 0 5.10051V10.8995C0 11.1647 0.105357 11.4191 0.292894 11.6066L4.3934 15.7071C4.58094 15.8946 4.83529 16 5.10051 16H10.8995C11.1647 16 11.4191 15.8946 11.6066 15.7071L15.7071 11.6066C15.8946 11.4191 16 11.1647 16 10.8995V5.10051C16 4.83529 15.8946 4.58093 15.7071 4.3934L11.6066 0.292893C11.4191 0.105357 11.1647 0 10.8995 0H5.10051ZM8.75 3.75V4.5V8L8.75 8.75H7.25V8V4.5V3.75H8.75ZM8 12C8.55229 12 9 11.5523 9 11C9 10.4477 8.55229 10 8 10C7.44772 10 7 10.4477 7 11C7 11.5523 7.44772 12 8 12Z"
                fill="currentColor"
            ></path>
        </svg>
    );
};


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
            return 'This is a mandatory field.';
        }
        return '';
    };

    const validateLastName = () => {
        if (lastName.trim() === '') {
            return 'Last name is required';
        } else if (!/^[a-zA-Z]{2,30}$/.test(lastName)) {
            return 'This is a mandatory field.';
        }
        return '';
    };

    const validateEmail = () => {
        if (email.trim() === '') {
            return 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            return 'Please enter a valid email address.';
        }
        return '';
    };

    const validateTerms = () => {
        if (!acceptedTerms) {
            return 'You must approve the Terms and Privacy Policy.';
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
                        <div className='min-vh-100 min-vh-md-0'>
                            {/* Original Form */}
                            <div className="modal-header border-0 pt-5 position-relative ">
                                <h5 className="modal-title" id="signUpModalLabel">Become a Member</h5>
                                <button type="button" className="btn btn-close position-absolute"
                                    style={{ top: '16px', right: '16px' }}
                                    data-bs-dismiss="modal" aria-label="Close">
                                    <i className="bi bi-x fs-3"></i>
                                </button>
                            </div>

                            <div className="modal-body pb-5">
                                <p className="text-center">This is a text to provide context to the form.</p>
                                <form onSubmit={handleSubmit} noValidate>
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
                                        {errors.firstName && <div className="invalid-feedback"><AlertIcon />{errors.firstName}</div>}
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
                                        {errors.lastName && <div className="invalid-feedback"><AlertIcon />{errors.lastName}</div>}
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
                                        {errors.email && <div className="invalid-feedback"><AlertIcon />{errors.email}</div>}
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
                                        {errors.terms && <div className="invalid-feedback d-block"><AlertIcon />{errors.terms}</div>}
                                    </div>

                                    <button type="submit" className="btn btn-dark btn-sm w-100">BECOME A MEMBER</button>
                                </form>
                            </div>
                        </div>
                    ) : (
                        /* Success State */
                        <div className="modal-body text-center py-5 min-vh-100 min-vh-md-0 d-flex flex-column justify-content-center align-items-center">
                            <h5 className='modal-title'>Success!</h5>
                            <button type="button" className="btn btn-close position-absolute"
                                style={{ top: '16px', right: '16px' }}
                                data-bs-dismiss="modal" aria-label="Close">
                                <i className="bi bi-x fs-3"></i>
                            </button>
                            <div className="my-5">
                                <svg width="160" height="160" viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M77.8336 104.765L68.9424 159.285L63.2741 158.285L73.567 104.011L55.3435 156.16L49.9339 154.192L69.4931 102.533L42.493 150.722L37.5078 147.843L65.7433 100.362L30.7814 143.134L26.3726 139.434L62.4264 97.5747L20.5658 133.628L16.867 129.219L59.6368 94.2591L12.1567 122.493L9.27944 117.508L57.4727 90.5053L5.80907 110.066L3.84006 104.658L55.989 86.4341L1.71487 96.726L0.715469 91.0578L55.2379 82.1668L0 82.8786V77.1226L55.2347 77.8335L0.715469 68.9422L1.71487 63.274L55.9872 73.5663L3.84006 55.3433L5.80907 49.934L57.4705 69.4947L9.27944 42.4932L12.1567 37.508L59.6417 65.7451L16.867 30.7813L20.5658 26.3728L62.4251 62.4247L26.3726 20.566L30.7814 16.8669L65.7442 59.641L37.5078 12.1568L42.493 9.27933L69.4949 57.4711L49.9339 5.80913L55.3435 3.84001L73.5665 55.9876L63.2741 1.71487L68.9424 0.715301L77.8332 55.2343L77.1227 0H82.8785L82.1671 55.238L91.0578 0.715301L96.7261 1.71487L86.4337 55.9898L104.658 3.84001L110.066 5.80913L90.5053 57.4725L117.508 9.27933L122.493 12.1568L94.2578 59.6395L129.219 16.8669L133.629 20.566L97.5774 62.423L139.434 26.3728L143.134 30.7813L100.361 65.7439L147.843 37.508L150.722 42.4932L102.532 69.4938L154.192 49.934L156.16 55.3433L104.013 73.5665L158.285 63.274L159.285 68.9422L104.766 77.8335L160 77.1226V82.8786L104.763 82.1669L159.285 91.0578L158.285 96.726L104.01 86.4338L156.16 104.658L154.192 110.066L102.53 90.5061L150.722 117.508L147.843 122.493L100.366 94.2604L143.134 129.219L139.434 133.628L97.5761 97.5761L133.629 139.434L129.219 143.134L94.2583 100.363L122.493 147.843L117.508 150.722L90.5062 102.53L110.066 154.192L104.658 156.16L86.4337 104.009L96.7261 158.285L91.0578 159.285L82.1671 104.763L82.8785 160H77.1227L77.8336 104.765Z" fill="#F64C07" />
                                </svg>
                            </div>
                            <p className='mb-5'>Thank you for signing up.</p>
                            <div>
                                <button type="button" className="btn btn-outline-dark btn-lg" data-bs-dismiss="modal">CLOSE</button>
                            </div>
                        </div>

                    )}
                </div>
            </div>
        </div>
    );
};

export default SignUpModal;
