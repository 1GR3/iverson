import React from 'react';

const SignUpModal: React.FC = () => {
    return (
        <div className="modal fade" id="signUpModal" tabIndex={-1} aria-labelledby="signUpModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header border-0 pt-5 position-relative">
                        <h5 className="modal-title" id="signUpModalLabel">Sign Up</h5>
                        <button type="button" className="btn btn-close position-absolute"
                            style={{ top: '8px', right: '6px' }}
                            data-bs-dismiss="modal" aria-label="Close">
                            <i className="bi bi-x fs-3"></i>
                        </button>
                    </div>

                    <div className="modal-body">
                        <p className="text-center">This is a text to provide context to the form.</p>
                        <form>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Name <span className="text-danger">*</span></label>
                                <input type="text" className="form-control" id="name" placeholder="e.g. Jane Smith" required />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email<span className="text-danger">*</span></label>
                                <input type="email" className="form-control" id="email" placeholder="e.g. jane@nca.org" required />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="state" className="form-label">State</label>
                                <select class="form-select" aria-label="Select a state" id="state">
                                    <option value="" selected>Select a state</option>
                                    <option value="AL">Alabama</option>
                                    <option value="AK">Alaska</option>
                                    <option value="AZ">Arizona</option>
                                    <option value="AR">Arkansas</option>
                                    <option value="CA">California</option>
                                    <option value="CO">Colorado</option>
                                    <option value="CT">Connecticut</option>
                                    <option value="DE">Delaware</option>
                                    <option value="FL">Florida</option>
                                    <option value="GA">Georgia</option>
                                    <option value="HI">Hawaii</option>
                                    <option value="ID">Idaho</option>
                                    <option value="IL">Illinois</option>
                                    <option value="IN">Indiana</option>
                                    <option value="IA">Iowa</option>
                                    <option value="KS">Kansas</option>
                                    <option value="KY">Kentucky</option>
                                    <option value="LA">Louisiana</option>
                                    <option value="ME">Maine</option>
                                    <option value="MD">Maryland</option>
                                    <option value="MA">Massachusetts</option>
                                    <option value="MI">Michigan</option>
                                    <option value="MN">Minnesota</option>
                                    <option value="MS">Mississippi</option>
                                    <option value="MO">Missouri</option>
                                    <option value="MT">Montana</option>
                                    <option value="NE">Nebraska</option>
                                    <option value="NV">Nevada</option>
                                    <option value="NH">New Hampshire</option>
                                    <option value="NJ">New Jersey</option>
                                    <option value="NM">New Mexico</option>
                                    <option value="NY">New York</option>
                                    <option value="NC">North Carolina</option>
                                    <option value="ND">North Dakota</option>
                                    <option value="OH">Ohio</option>
                                    <option value="OK">Oklahoma</option>
                                    <option value="OR">Oregon</option>
                                    <option value="PA">Pennsylvania</option>
                                    <option value="RI">Rhode Island</option>
                                    <option value="SC">South Carolina</option>
                                    <option value="SD">South Dakota</option>
                                    <option value="TN">Tennessee</option>
                                    <option value="TX">Texas</option>
                                    <option value="UT">Utah</option>
                                    <option value="VT">Vermont</option>
                                    <option value="VA">Virginia</option>
                                    <option value="WA">Washington</option>
                                    <option value="WV">West Virginia</option>
                                    <option value="WI">Wisconsin</option>
                                    <option value="WY">Wyoming</option>
                                </select>
                            </div>

                            <div className="mb-4">
                                <label htmlFor="cryptoExperience" className="form-label">Crypto experience</label>
                                <select className="form-select" id="cryptoExperience">
                                    <option value="Beginner">I’m new to crypto</option>
                                    <option value="Intermediate">I know a little</option>
                                    <option value="Expert">I know a lot</option>
                                </select>
                            </div>

                            <button type="submit" className="btn btn-dark btn-sm w-100">SIGN UP</button>
                        </form>
                    </div>

                    <div className="modal-footer text-center d-block border-0 pt-4 pb-5">
                        <small className="">This is room for a legal disclaimer and linking to any <a href="#" className="text-dark">Privacy Policy</a>.</small>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUpModal;
