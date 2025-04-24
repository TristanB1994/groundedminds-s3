import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

const Home = () => {
    const titleString = "Home | Grounded Minds Therapy";
    const descriptionString = "Virtual therapy for adults across Ontario. Treatment for anxiety, OCD and PTSD.";

    return (
        <>
            <Head>
                <title>{titleString}</title>
                <meta name="description" content={descriptionString} />

                <meta property="og:url" content="https://www.groundedminds.ca" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content={titleString} />
                <meta property="og:description" content={descriptionString} />
                <meta property="og:image" content="https://www.groundedminds.ca/homepg.jpeg" />
                <meta property="og:image:alt" content={descriptionString} />
                <meta property="og:image:height" content="300" />
                <meta property="og:image:width" content="300" />
            </Head>
            
            {/* Main Content */}
            <section className="content hfit widemb">    
                <div id="homer">           
                    <p className="caps" id="stretchhome">
                        let's break up with anxiety
                    </p>
                    <p className="caps">               
                        let's break up with anxiety    
                    </p>
                </div>
            </section>
            <div id="anotherbanner">     
                <div className="banner">     
                    <p id="pp">               
                        <a className="homebanner3" href="https://groundedmindstherapy.janeapp.com" target="_blank" rel="noopener noreferrer">  
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
                            Are you looking for OCD therapy or anxiety disorder treatment? You're in the right place.  
                        </p>
                        <Link href="/about" passHref legacyBehavior>
                            <a className="booknow caps">Meet our team</a>
                        </Link>
                    </div>
                    <div className="card">   
                        <p>                   
                            Our therapists help people overcome anxiety, OCD and trauma. Meet with a therapist from anywhere in Ontario.              
                        </p>
                        <Link href="/services" passHref legacyBehavior>
                            <a className="booknow caps">Virtual Therapy</a>
                        </Link>
                    </div>
                    <div className="card">               
                        <p>                    
                            If you're ready to feel more grounded, please reach out. Online booking is available for quick and easy scheduling.                
                        </p>
                        <Link href="/contact" passHref legacyBehavior>
                            <a className="booknow caps">Get In Touch</a>
                        </Link>
                    </div>
                    <div className="card">        
                        <p>
                            Wondering what to expect at your first session? Curious about virtual therapy? Click below for answers to our FAQs.    
                        </p>
                        <Link href="/faq" passHref legacyBehavior>
                            <a className="booknow caps">Learn more</a>
                        </Link>
                    </div>
                </div>
            </section>
            <br/>
            <div id="homebanner2">       
                <p>
                    "Our anxiety does not come from thinking about 
                    <br/> 
                    the future, but from wanting to control it." 
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
                        If you are experiencing a crisis and/or require immediate help, please contact 911, your local <Link href="/resources" passHref legacyBehavior><a className="rate">crisis line</a></Link>
                        , or go directly to the nearest emergency department.
                    </i>
                </p>
            </section>
        </>
    );
};

// Define page layout options if needed
// Home.getLayout = (page) => page;

export default Home;

export async function getStaticProps() {
    return { props: { navOptions: { isHome: true } } };
}
