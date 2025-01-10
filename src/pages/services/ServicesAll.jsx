import React from 'react';
import '../../assets/styles.css';
import Layout from '../../components/Layout';
import { Helmet } from 'react-helmet';

const ServicesAll = () => {
    
    const bannerLabel = "Services";
    const titleString = "Services | Grounded Minds Therapy";
    const descriptionString = "Grounded Minds offers virtual counselling and consultation services to  individuals across Ontario. We combine compassionate talk therapy with skills-based  techniques to support people with anxiety, OCD and PTSD.";
    
    return (
        <>
            <Helmet>
                <title>{titleString}</title>
                <meta name="description" content={descriptionString} />

                <meta property="og:url" content="https://www.groundedminds.ca/services" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content={titleString} />
                <meta property="og:description" content={descriptionString} />
                <meta property="og:image" content="https://www.groundedminds.ca/static/assets/virtualtherapy.jpeg" />
                <meta property="og:image:alt" content={descriptionString} />
                <meta property="og:image:height" content="300" />
                <meta property="og:image:width" content="300" />
            </Helmet>
            <Layout navOptions={{ isHome: false, bannerLabel: bannerLabel }}>
                <section className="content">        
                    <p className="pb40 pt20" id="servicetag">       
                        Grounded Minds offers virtual counselling and psychotherapy services to individuals across Ontario.      
                        <br/><br/> 
                        We combine compassionate talk therapy with skills-based techniques so that you feel understood, supported <i>and</i> equipped to manage life's ups and downs.          
                    </p>
                    {/* <!-- TODO Make this full width in mobile -->         */}
                    <div className="serviceimg" id="serviceuppertea">            
                        <img alt="Online therapy setting" src="/virtualtherapy.jpeg"/>    
                    </div>
                    <div className="sidesplt">       
                        <div className="">               
                            <h3 className="caps sessions"> 
                                Individual Therapy             
                            </h3>     
                            <div className="">         
                                <div>                
                                    <p className="pb10">             
                                        Grounded Minds specializes in providing therapy to individuals who are struggling with anxiety and OCD. Although this is our primary focus, several of our therapists have a great deal of experience working with other concerns as well. You can read more about our therapists, their specialties and approaches <a className="rate" href="/about">here</a>.
                                        <br/><br/>
                                        Not sure which of our therapists is the best fit for you? E-mail <u>hello@groundedminds.ca</u> and we'd be happy to make a suggestion. Once you set an appointment, you will meet virtually by telephone or secure video.
                                        <br/><br/>
                                    </p>
                                    {/* <!-- Using secure video conferencing software or telephone, we will be able to see and hear one another. --> */}
                                    {/* <!-- <p className="pb20">                            To engage in a virtual session you will need to be in a private environment where you are unlikely to be overheard or interrupted.                    </p> -->             */}
                                </div>
                                <div>
                                    <p className="pb30">
                                        <span className="rate">Rate</span>: $160 per 50 minute therapy session     
                                    </p>
                                    {/* <!-- Hidden JUL 8 --> */}
                                    {/* <!-- <a className="booknow" href="/contact">                        Book Now                    </a> -->  */}
                                    <a className="booknow" href="https://groundedmindstherapy.janeapp.com/" target="_blank">        
                                        BOOK AN APPOINTMENT
                                    </a>
                                </div>
                                <br/><br/>
                                {/* ADDED during react convertion */}
                                {/* <div> */}
                                <p className="coverage sliding-scale">        
                                    <i>Note:</i> We offer a limited number of appointments at a sliding scale rate. If this is something you are interested in, please contact us <a className="rate" href="/contact">here</a>.
                                    <br/>
                                </p>
                            </div>           
                            <div className="pb30" id="consult">          
                                <h3 className="sessions caps up"> 
                                    Initial Consultation Calls    
                                </h3>
                                <p className="pb30">                   
                                    15 minute telephone meetings are available to help you determine whether one of our therapists might be a good fit to support you. Research consistently shows that a good relationship with your therapist is one of the best predictors of successful therapy. These meetings are free of charge.     
                                </p>
                                {/* <!-- Hidden JUL 8 -->        */}
                                {/* <!-- <a className="booknow" href="/contact">                    Book Now                </a> -->      */}
                                <a className="booknow" href="https://groundedmindstherapy.janeapp.com/" target="_blank">                    
                                    BOOK A CONSULTATION CALL                
                                </a>
                            </div>           
                            <br/>
                        </div>
                        {/* <!-- TODO Make this full width in mobile -->    */}
                        <div className="serviceimg" id="serviceupperhope">    
                            <img alt="Online therapy setting" src="/aboutmidbanner.jpg"/>     
                        </div>
                        <div className="pb30" id="consult">    
                            <h3 className="sessions caps up"> 
                                Clinical Consultation for Therapists
                            </h3>
                            <p className="pb30">              
                                Angie Blandford (MSW, RSW) offers clinical consultation to fellow therapists on the following topics: <i> working with individuals who have OCD or OCD symptoms, supporting friends/family members of folks with OCD, implementing Exposure and Response Prevention (ERP) for OCD, and CBT for anxiety disorders. </i> Angie founded Grounded Minds and specializes in treating OCD and anxiety disorders. 
                                <br/><br/>
                                To learn more about clinical consultation, please click <a className="rate" href="/consultation">here</a>. There are a limited number of therapists providing ERP for OCD, and we are passionate about supporting you in doing this important work with your clients. 
                                <br/><br/>
                                Please get in touch for scheduling, rates and questions.        
                            </p>
                            <a className="booknow" href="https://groundedminds.ca/contact">                
                                GET IN TOUCH           
                            </a>
                        </div>
                    </div>       
                    {/* <!-- TODO Make this full width in mobile -->    */}
                    <div className="serviceimg" id="servicesupperlaptop">            
                        <img alt="Online therapy setting" src="/services_page_banner.jpeg"/>   
                    </div>       
                    <br/>        
                    <p className="coverage pb10">     
                        <i><u>Note on Therapy Coverage:</u></i>
                        <br/><br/>
                        Many extended health care plans cover services provided by a Registered Social Worker (RSW) with their MSW. Please contact your insurance provider to confirm coverage.    
                    </p>
                    <p className="coverage pb10">            
                        Grounded Minds does not offer direct billing and cannot guarantee that services will be covered under your insurance plan. Receipts will be provided for you to submit for reimbursement, if applicable. Services provided by an RSW are tax deductible as a medical expense.       
                    </p>
                    <p className="coverage pb10">           
                        If you are looking for OHIP-covered or free mental health services, please see our <a className="rate" href="/resources">resources page</a>.
                    </p>    
                </section>
            </Layout>
        </>
    );
}

export default ServicesAll;
