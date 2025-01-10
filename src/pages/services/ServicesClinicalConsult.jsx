import React from 'react';
import '../../assets/styles.css';
import Layout from '../../components/Layout';
import { Helmet } from 'react-helmet';

const ServicesClinicalConsult = () => {
    return (
        <>
            <Helmet>
                <meta property="og:url" content="https://www.groundedminds.ca/consultation" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content=" Clinical Consultation | Grounded Minds Therapy " />
                <meta property="og:description" content="Grounded Minds offers clinical consultation to fellow therapists. There is a  growing need for clinicians with expertise in OCD and anxiety disorders. We are passionate  about supporting you in doing this important work." />
                <meta property="og:image" content="https://www.groundedminds.ca/static/assets/homepage.jpeg" />
                <meta property="og:image:alt" content="Grounded Minds offers clinical consultation to fellow therapists. There is a  growing need for clinicians with expertise in OCD and anxiety disorders. We are passionate  about supporting you in doing this important work." />
                <meta property="og:image:height" content="300" />
                <meta property="og:image:width" content="300" />
            </Helmet>
            <Layout navOptions={{ isHome: false, bannerLabel: 'Consultation' }}>
                <div>
                    {/* <!-- Jump Angie's Picture to Angie's title -->  */}
                    <p className="question">
                        Meet Our Consultants        
                    </p>
                </div>    
                <section className="content">        
                    <div className="team_thumbnails">            
                        <div className="team_portrait">                
                            <img alt="angie blandford therapist" id="ALB-CONSULTATION-THUMB" src="/ang_thumbnail.jpeg"/>        
                                <button className="teamthumbs" id="ALB-CONSULTATION-CTA">                    
                                    View Angie's Bio               
                                </button>           
                        </div>        
                    </div>
                    <br/><br/>   
                </section>    
                <section className="content">    
                    <p className="question" id="ALB-CONSULTATION-TARGET">      
                        Angie Blandford, MSW, RSW
                        <br/>
                        (she/her)
                    </p>
                    <p className="pb10 aaa">    
                        Angie Blandford (MSW, RSW) is the founder of Grounded Minds. Angie started Grounded Minds after identifying a growing need for specialized anxiety and OCD treatment. In addition to her clinical practice, Angie is available to support therapists who are doing this important work with their clients.
                        <br/><br/> Angie offers virtual clinical consultation to fellow therapists who are looking for support implementing ERP for OCD or CBT for anxiety disorders. Angie has been formally trained in CBT for depression, generalized anxiety disorder, panic disorder, agoraphobia, specific fears and phobias, OCD, and PTSD. She has specialized training in ERP for OCD and CPT for PTSD. She spent several years offering structured psychotherapy to adults in Simcoe Muskoka prior to founding Grounded Minds.   
                    </p>    
                </section>    
                <section className="content">        
                    <p className="question">             
                        Consultation topics may include:        
                    </p>
                    <div className="pb10 specialtiesli">          
                        <ul className="aaa aaaL">               
                            <li>CBT protocols for various anxiety disorders</li>   
                            <li>CBT for OCD</li>          
                            <li>ERP rationale</li>          
                            <li>Supporting friends or family members of folks with OCD</li>   
                            <li>Implementing CBT interventions</li>           
                            <li>Implementing ERP for OCD</li>             
                            <li>Identifying exposure exercises</li>       
                            <li>Trouble shooting and problem solving</li>      
                            <li>Private practice questions</li>      
                            <li>Managing client motivation</li>   
                            <li>Case conceptualization</li>   
                        </ul>
                    </div>        
                    <br/><br/>
                    <a className="booknow" href="mailto: angie@groundedminds.ca">     
                        BOOK WITH ANGIE        
                    </a>
                    <br/><br/>    
                </section>    
                <section className="content">        
                    <br/><br/><br/><br/>        
                    <div className="serviceimg">
                        <img alt="Online therapy setting" src="/consultation.jpeg"/>   
                        <div className="sidesplt">
                        </div>
                        <br/>
                        <i>Please note that Grounded Minds does not offer formal supervision services that may be required for licensure.</i>        
                        <br/><br/><br/><br/>    
                    </div>
                </section>
            </Layout>
        </>
    );
}

export default ServicesClinicalConsult;
