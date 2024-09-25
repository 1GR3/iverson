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

                <section>
                    <h3>LIMITATIONS OF LIABILITY AND INDEMNIFICATION</h3>
                    <p>
                        By using any services provided by National Cryptocurrency Association, you agree that in no event will the NCA, their officers, employees, agents, affiliates, licensees, and web hosting services be liable for any direct or indirect, incidental, special or consequential damages as a result of your accessing the website and using any of the services available. Your sole remedy for any breach or default of this Agreement by National Cryptocurrency Association shall be a return of any fees paid to the NCA for any services provided under this Agreement. You indemnify and agree to defend and hold harmless National Cryptocurrency Association and their officers, employees, agents, affiliates, licensees, and web hosting services and third parties for any losses, costs, liabilities, and expenses (including but not limited to court costs, legal fees, awards, or settlements) relating to or arising out of your use of the NCA’s websites or services, including any breach by you of the Terms contained in this Agreement.
                    </p>
                </section>

                <section>
                    <h3>1. USER CONSENT AND AUTHORIZATION</h3>
                    <p>
                        The User consents by use of this website to be a member of the NCA. Eligibility for membership in this organization, including the rights and privileges of members, shall be as provided in the articles of incorporation and bylaws of the organization. The NCA reserves the right to terminate your membership or access to any or all of the services at any time without notice for any reason whatsoever.
                    </p>
                </section>

                <section>
                    <h3>2. USER BENEFITS AND COMMUNICATION</h3>
                    <p>
                        The National Cryptocurrency Association may offer various benefits to users, such as access to exclusive content, events, and discounts, as described on the website. The NCA reserves the right to modify or discontinue any user benefits at any time, without prior notice. The NCA reserves the right to contact users, via the provided contact information, for reasons including but not limited to website content, events, and promotions. The User acknowledges and agrees that the NCA may use the User's provided contact information, including email address, phone number, or other relevant details to communicate information.
                    </p>
                </section>

                <section>
                    <h3>3. THE ROLE OF THE NATIONAL CRYPTOCURRENCY ASSOCIATION</h3>
                    <p>
                        Opinions, advice, statements or other comments should be construed as industry information and not as professional advice from National Cryptocurrency Association. The National Cryptocurrency Association does not guarantee the accuracy or completeness of any of the information provided, and is not responsible for any loss resulting from your reliance on such information.
                    </p>
                </section>

                <section>
                    <h3>4. CONFIDENTIALITY</h3>
                    <p>
                        It is agreed that all personal information given to National Cryptocurrency Association will be kept and processed as described in the NCA’s Privacy Policy.
                    </p>
                </section>

                <section>
                    <h3>5. NO WARRANTIES</h3>
                    <p>
                        The National Cryptocurrency Association provides services on an "as is" basis and does not make any warranty, express, implied, limited or other with respect to the services provided. Specifically, National Cryptocurrency Association does not warrant that the service will always be available, be uninterrupted, be error-free, meet your requirements, or that any defects in the services will be corrected.
                    </p>
                </section>

                <section>
                    <h3>6. JURISDICTION</h3>
                    <p>
                        This Agreement or any dispute arising from this Agreement is governed by the laws of Delaware, without regard to provisions of conflicts of law. Any lawsuit arising from or related to this Agreement shall be brought exclusively before the United States District Court for the State of Delaware, and you hereby consent to the jurisdiction of any such court.
                    </p>
                </section>

                <section>
                    <h3>7. SEVERABILITY</h3>
                    <p>
                        If any provision is found to be invalid, the remaining provisions will be in full force and effect.
                    </p>
                </section>

                <section>
                    <h3>8. CERTIFICATION</h3>
                    <p>
                        You certify that you are at least 16 years of age and that your answers to the registration materials on National Cryptocurrency Association will be truthful.
                    </p>
                </section>

                <section>
                    <h3>9. ENTIRE AGREEMENT</h3>
                    <p>
                        This Agreement constitutes your entire Terms and Conditions of Use Agreement with National Cryptocurrency Association with respect to any services.
                    </p>
                </section>

                <section>
                    <h3>10. WAIVER</h3>
                    <p>
                        The failure of the NCA to exercise or enforce any right or provision of this Agreement shall not operate as a waiver of such right or provision. Any waiver of this Agreement by the NCA must be in writing and signed by an authorized representative of the NCA.
                    </p>
                </section>


                <footer style={{ marginTop: "2rem" }}>
                    <Link to="/">Back to Home</Link>
                </footer>
            </main>
        </div>
    );
}

export default TermsAndConditions