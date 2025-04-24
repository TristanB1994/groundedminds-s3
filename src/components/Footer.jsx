import React from 'react';
// import '../assets/styles.css'; // Adjust the path as necessary

const Footer = () => {

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // for smooth scrolling
        });
    };

    return (
        <>
            <footer className="footer">
                <div className="footerformat"> 
                    <div className="mailing">   
                        <p className="pb10">            
                            Mailing Address:
                        </p>
                        <p>
                            Angie Blandford
                        </p>
                        <p>
                            PO BOX 99900 QF 685 798
                        </p>
                        <p>
                            STN MAIN
                        </p>
                        <p>
                            Orillia, ON, Canada
                        </p>
                        <p>
                            L3V 0G1
                        </p>
                    </div>
                    <div className="socials">
                        <div className="instagram">
                            <a href="https://www.instagram.com/groundedmindstherapy/" target="_blank">  
                                <img alt="instagram logo" src="/Insta-icon.png"/>           
                                </a>              
                           <a href="https://www.instagram.com/groundedmindstherapy/" target="_blank">   
                                groundedmindstherapy
                            </a>
                        </div>
                        <div className="fb mb20">
                            <a href="https://www.facebook.com/groundedmindstherapy" target="_blank">
                                <img alt="facebook logo" src="/FB-icon.png"/>
                            </a>                
                            <a href="https://www.facebook.com/groundedmindstherapy" target="_blank">
                                groundedmindstherapy
                            </a>
                        </div>
                        <a id="pyschology"></a>
                    </div>
                </div>
                <div className="balloons">
                    <button id="backtotop" onClick={scrollToTop}></button>
                </div>
            </footer>
        </>
    );
}

export default Footer;
