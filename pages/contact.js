import React from 'react';
import SEO from '../src/components/SEO';

const Contact = () => {
    const bannerText = "Get In Touch"
    const titleString = "Contact | Grounded Minds Therapy";
    const descriptionString = "Get in touch to schedule a free consultation call, book a therapy session, or ask any  questions you might have. We'd love to hear from you!";

    return (
        <>
            <SEO
                title={titleString}
                description={descriptionString}
                image="https://www.groundedminds.ca/contact_banner.jpg"
                imageAlt={descriptionString}
            />
            <section className="content mb32">         
                <div className="touchlayout">            
                    <div className="verticle">                
                        {/* <!-- Removed MAR 3 2021 -->                 */}
                        {/* <!-- ADDED JUL 8 2021 -->                 */}
                        <p className="clrrevers" id="bigclrTop">            
                            Welcoming 
                            <br/>
                            new clients
                        </p>
                        <div className="contactimg center">    
                        {/* <!-- <img src="/contact_banner.jpg" alt="therapy office"> -->            */}
                        </div>
                    </div>
                    <div id="contact900">               
                        {/* <!-- Removed MAR 3 2021 -->    */}
                        {/* <!-- ADDED JUL 8 2021 --> */}
                        <p className="clrrevers" id="bigclr">              
                            Welcoming 
                            <br/>
                            new clients
                        </p>
                        {/* <!-- <p className="fancy font22 pb20 mt20">  added mt 20 Nov 4 2020                    Please get in touch to <br>start your journey.                </p> -->   */}
                        <div className="deetswitch">                   
                            <div id="hook">
                                {/* <!-- <p className="pb10">                            I offer free 15 minute telephone consultations to discuss any questions surrounding goodness of fit or logistics.                                    </p> -->       */}
                                {/* <!-- Please get in touch if you have questions, are interested in booking a session or would benefit from a free 15 minute phone consultation.  -->                */}
                            </div>
                            <div className="deetwidth">                    
                                <div className="deets">           
                                    <a href="mailto: hello@groundedminds.ca">
                                        <p className="brandborder">             
                                            Email
                                        </p>
                                    </a>
                                    <p>
                                        <a href="mailto: hello@groundedminds.ca">                           
                                            hello@groundedminds.ca                          
                                        </a>
                                    </p>
                                </div>
                                <div className="deets">                          
                                    <a href="tel:2892126486">
                                        <p className="brandborder">      
                                            Phone                     
                                        </p>                        
                                    </a> 
                                    <p>
                                        <a href="tel:2892126486">        
                                            289-212-6486                   
                                        </a>
                                    </p>
                                </div>
                                {/* <!-- Removed MAR 3 2021 --> */}
                                {/* <!-- Returned JUL 8 2021 --> */}
                                <div className="deets">               
                                    <p className="brandborder">          
                                        Online Booking                    
                                    </p>                            
                                    <iframe frameBorder="0" height="28" scrolling="no" src="https://groundedmindstherapy.janeapp.com/embed/book_online" target="_blank" width="177"></iframe>   
                                </div>
                            </div>
                        </div>
                    </div>  
                </div>    
            </section>
        </>
    );
}

export default Contact;

export async function getStaticProps() {
  return {
    props: {
      navOptions: { 
        isHome: false, 
        bannerLabel: "Get In Touch" 
      }
    }
  };
}
