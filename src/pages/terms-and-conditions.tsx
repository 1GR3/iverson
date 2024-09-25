import * as React from "react";
import { Link } from "gatsby";

const TermsAndConditions: React.FC = () => {

    return (
        <div className="legal">
            <main className="container">
                <header style={{ textAlign: "center", marginBottom: "2rem" }}>
                    <h2>NATIONAL CRYPTOCURRENCY ASSOCIATION</h2>
                    <h1>Website Terms and Conditions of Use</h1>
                </header>

                <ol>
                    <li>
                        <h3>LIMITATIONS OF LIABILITY AND INDEMNIFICATION</h3>
                        <p>
                            By using any services provided by National Cryptocurrency Association, you agree that in no event will the NCA, their officers, employees, agents, affiliates, licensees, and web hosting services be liable for any direct or indirect, incidental, special or consequential damages...
                        </p>
                    </li>
                    <li>
                        <h3>USER CONSENT AND AUTHORIZATION</h3>
                        <p>
                            The User consents by use of this website to be a member of the NCA. Eligibility for membership in this organization, including the rights and privileges of members, shall be as provided in the articles of incorporation and bylaws of the organization...
                        </p>
                    </li>
                    <li>
                        <h3>USER BENEFITS AND COMMUNICATION</h3>
                        <p>
                            The National Cryptocurrency Association may offer various benefits to users, such as access to exclusive content, events, and discounts, as described on the website...
                        </p>
                    </li>
                    <li>
                        <h3>THE ROLE OF THE NATIONAL CRYPTOCURRENCY ASSOCIATION</h3>
                        <p>
                            Opinions, advice, statements or other comments should be construed as industry information and not as professional advice from National Cryptocurrency Association...
                        </p>
                    </li>
                    <li>
                        <h3>CONFIDENTIALITY</h3>
                        <p>
                            It is agreed that all personal information given to National Cryptocurrency Association will be kept and processed as described in the NCA’s Privacy Policy.
                        </p>
                    </li>
                    <li>
                        <h3>NO WARRANTIES</h3>
                        <p>
                            The National Cryptocurrency Association provides services on an "as is" basis and does not make any warranty, express, implied, limited or other with respect to the services provided...
                        </p>
                    </li>
                    <li>
                        <h3>JURISDICTION</h3>
                        <p>
                            This Agreement or any dispute arising from this Agreement is governed by the laws of Delaware, without regard to provisions of conflicts of law...
                        </p>
                    </li>
                    <li>
                        <h3>SEVERABILITY</h3>
                        <p>
                            If any provision is found to be invalid, the remaining provisions will be in full force and effect.
                        </p>
                    </li>
                    <li>
                        <h3>CERTIFICATION</h3>
                        <p>
                            You certify that you are at least 16 years of age and that your answers to the registration materials on National Cryptocurrency Association will be truthful.
                        </p>
                    </li>
                    <li>
                        <h3>ENTIRE AGREEMENT</h3>
                        <p>
                            This Agreement constitutes your entire Terms and Conditions of Use Agreement with National Cryptocurrency Association with respect to any services.
                        </p>
                    </li>
                    <li>
                        <h3>WAIVER</h3>
                        <p>
                            The failure of the NCA to exercise or enforce any right or provision of this Agreement shall not operate as a waiver of such right or provision...
                        </p>
                    </li>
                </ol>


                <footer style={{ marginTop: "2rem" }}>
                    <Link to="/">Back to Home</Link>
                </footer>
            </main>
        </div>
    );
}

export default TermsAndConditions