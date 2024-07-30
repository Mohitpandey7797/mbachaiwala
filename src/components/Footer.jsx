import React from 'react';

const Footer = () => {
    return <>

        <footer>

            <h1>Let's <br />
                #ConnectOnCutting?
            </h1>
            <aside>
                <a href="/" className="footerLinks">Home</a>
                <a href="/story" className="footerLinks">Story</a>
                <a href="/media" className="footerLinks">Media</a>
                <a href="/franchise" className="footerLinks">Franchise</a>
                <a href="/event" className="footerLinks">Event</a>
                <a href="/chaiwalacares" className="footerLinks">Chai Wala Cares</a>
            </aside>

            <div>
                <h5>Email</h5>
                <a href="mailto: info@mbachaiwala.com">Info@mbachaiwala.com</a>
                <a href="mailto: franchise@mbachaiwala.com">
                    Franchise@mbachaiwala.com
                </a>
            </div>

            <div>
                <h5>Phone</h5>
                <a href="tel: +91722905222">+91722905222</a>
            </div>

            <p>© COPYRIGHT 2022 MBA CHAIWALA. MADE BY</p>

        </footer>

        <div className="footer"></div>
    </>

};

export default Footer;
