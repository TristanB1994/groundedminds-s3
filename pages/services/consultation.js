import React, { useRef } from 'react';
import SEO from '../../src/components/SEO';

const ServicesClinicalConsult = () => {
    const bannerLabel = "Consultation";
    const titleString = "Clinical Consultation | Grounded Minds Therapy";
    const descriptionString = "Grounded Minds offers clinical consultation to fellow therapists. There is a growing need for clinicians with expertise in OCD and anxiety disorders. We are passionate about supporting you in doing this important work.";

    const AngieSectionRef = useRef(null);

    const scrollToSection = (sectionRef) => {
        sectionRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <>
            <SEO
                title={titleString}
                description={descriptionString}
                image="https://www.groundedminds.ca/homepage.jpeg"
                imageAlt={descriptionString}
            />
            <div>
                {/* <!-- Jump Angie's Picture to Angie's title -->  */}
                <p className="question">
                    Meet Our Consultants        
                </p>
            </div>
            <section className="content consultation_thumbnail_grid">
                {/* Angie Consultation Section */}
                <div onClick={() => scrollToSection(AngieSectionRef)} className="team_thumbnails angie">            
                    <div className="team_portrait">                
                        <img alt="angie blandford therapist" id="ALB-CONSULTATION-THUMB" src="/ang_thumbnail.jpeg"/>        
                            <button className="teamthumbs" id="ALB-CONSULTATION-CTA">                    
                                View Angie's Bio               
                            </button>           
                    </div>        
                </div>
            </section>
            <br/><br/>
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
                        <li>Treating BFRBs</li>  
                        <li>Trouble shooting and problem solving</li>      
                        <li>Private practice questions</li>      
                        <li>Managing client motivation</li>   
                        <li>Case conceptualization</li>   
                    </ul>
                </div>     
                <br></br>   <br></br>
                <section className="content">              
                    <div className="serviceimg">
                        <img alt="Online therapy setting" src="/consultation.jpeg"/>   
                        <div className="sidesplt">
                        </div>
                        <br/>
                        <i>Please note that Grounded Minds does not offer formal supervision services that may be required for licensure.</i>        
                        <br/><br/><br/><br/>    
                    </div>
                </section>
            </section>
            {/* Angie START */}
            <section ref={AngieSectionRef} className="content">    
                <p className="question" id="ALB-CONSULTATION-TARGET">      
                    Angie Blandford, MSW, RSW
                    <br/>
                    (she/her)
                </p>
                <p className="pb10 aaa">    
                    Angie Blandford is the founder of Grounded Minds. Angie started Grounded Minds after identifying a growing need for specialized anxiety and OCD treatment. In addition to her clinical practice, Angie is available to support therapists who are doing this important work with their clients.
                    <br/><br/> Angie offers virtual clinical consultation to fellow therapists who are looking for support implementing ERP for OCD or CBT for anxiety disorders. Angie has been formally trained in CBT for depression, generalized anxiety disorder, panic disorder, agoraphobia, specific fears and phobias, OCD, and PTSD. She has specialized training in ERP for OCD and CPT for PTSD. She spent several years offering structured psychotherapy to adults in Simcoe Muskoka prior to founding Grounded Minds.   
                </p>    
            </section>    
            <section className="content">        
                <br/><br/>
                <a className="booknow" href="https://groundedmindstherapy.janeapp.com/#/staff_member/1" target="_blank" rel="noopener noreferrer">     
                    BOOK WITH ANGIE        
                </a> 
            </section>    
            {/* Angie END */}
        </>
    );
}

export default ServicesClinicalConsult;

export async function getStaticProps() {
  return {
    props: {
      navOptions: { 
        isHome: false, 
        bannerLabel: "Consultation" 
      }
    }
  };
}
