import React from 'react';
import Layout from '../components/Layout';
import '../assets/styles.css'; // Adjust the path as necessary
import { Helmet } from 'react-helmet';


const Home = () => {
    const titleString = "Home | Grounded Minds Therapy";
    const metaDescription = "Virtual therapy for adults across Ontario. Treatment for anxiety, OCD and  PTSD.";

    return (
        <>
            <Helmet>
                <title> { titleString } </title>
                <meta name="description" content={ metaDescription } />

                <meta property="og:url" content="https://www.groundedminds.ca" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content=" Home | Grounded Minds Therapy " />
                <meta property="og:description" content={ metaDescription } />
                <meta property="og:image" content="https://www.groundedminds.ca/static/assets/homepg.jpeg" />
                <meta property="og:image:alt" content={ metaDescription } />
                <meta property="og:image:height" content="300" />
                <meta property="og:image:width" content="300" />
            </Helmet>
            <Layout navOptions={{ isHome: true }}>
                {/* Navigation */}
                <section className="content hfit widemb">    
                    <div id="homer">           
                        <p className="caps" id="stretchhome">
                            Let's work together to kick anxiety out of the driver's seat.
                        </p>
                        <p className="caps">               
                            Let's work together to kick anxiety out of the driver's seat.    
                        </p>
                    </div>
                </section>
                <div id="anotherbanner">     
                    <div className="banner">     
                        <p id="pp">               
                            <a className="homebanner3" href="https://groundedmindstherapy.janeapp.com" target="_blank">  
                                Schedule a Complimentary Consultation                
                            </a>
                        </p>
                    </div>
                </div>
                <br/>
                <section className="content hfit">       
                    <div className="homedivert">           
                        <div className="card">              
                            <p>                    
                                Are you looking to start counselling for an anxiety disorder or OCD? You're in the right place.  
                            </p>
                            <a className="booknow caps" href="/about">
                                Meet our team
                            </a>
                        </div>
                        <div className="card">   
                            <p>                   
                                Our therapists help people manage and overcome anxiety. Meet with a therapist from anywhere in Ontario.              
                            </p>
                            <a className="booknow caps" href="/services">
                                Virtual Therapy
                            </a>
                        </div>
                        <div className="card">               
                            <p>                    
                                If you're ready to feel more grounded, please reach out. Online booking is available for quick and easy scheduling.                
                            </p>
                            <a className="booknow caps" href="/contact">
                                Get In Touch
                            </a>
                        </div>
                        <div className="card">        
                            <p>
                                Wondering what to expect at your first session? Curious about virtual therapy? Click below for answers to our FAQs.    
                            </p>
                            <a className="booknow caps" href="/faq">
                                Learn more
                            </a>
                        </div>
                    </div>
                </section>
                <br/>
                <div id="homebanner2">       
                    <p>
                        “Our anxiety does not come from thinking about 
                        <br/> 
                        the future, but from wanting to control it.” 
                        <br/> 
                        –Kahlil Gibran           
                    </p>
                </div>
                <section>
                    <p className="liable">        
                        <i>
                            Grounded Minds is not available on a 24 hour basis and does not offer crisis services.
                        </i>
                    </p>
                    <p className="liable">          
                        <i>
                            If you are experiencing a crisis and/or require immediate help, please contact 911, your local <a className="rate" href="/resources">crisis line</a>
                            , or go directly to the nearest emergency department.
                        </i>
                    </p>
                </section>
            </Layout>
        </>
    );
}

export default Home;
