import React from 'react';
import SEO from '../../src/components/SEO';
import TeamMember from '../../src/components/TeamMember';
import teamMembers from '../../src/data/teamMembers';

const ServicesIndividualTherapy = () => {
    const bannerLabel = "Services";
    const titleString = "Individual Therapy | Grounded Minds Therapy";
    const descriptionString = "Our therapists are passionate about supporting adults with anxiety disorders, OCD, and other mental health concerns. Together, we will explore your concerns, address your symptoms, and help you find a way forward.";

    return (
        <>
            <SEO
                title={titleString}
                description={descriptionString}
                image="https://www.groundedminds.ca/virtualtherapy.jpeg"
                imageAlt={descriptionString}
            />
            <section className="content">        
                <div className="sidesplt">            
                    <div className="">                
                        <h3 className="caps sessions">             
                            Virtual Therapy           
                        </h3>        
                    </div>         
                    <div className="">        
                        Grounded Minds offers virtual therapy to individuals across Ontario. We are passionate about providing counselling that is <span style={{ color: "rgb(158, 187, 145)" }}><i>accessible, compassionate + down to earth.</i></span>
                        No waitlist, commute, or parking fees. You can meet with an experienced therapist from the comfort of your home. Easy online booking and flexible options- meet with your therapist by phone or video, morning or night, weekday or weekend. Grounded Minds offers therapy that works for you.      
                    </div>           
                    <br/><br/>           
                    <p className="pb30">        
                        <span className="rate">Fee</span>: $180 per 50 minute therapy session
                    </p>            
                    <br/><br/>      
                    <div id="anotherbanner">          
                        <div className="banner">               
                            <p id="pp">                       
                                <a className="homebanner3" href="https://groundedmindstherapy.janeapp.com" target="_blank" rel="noopener noreferrer">      
                                    Schedule a Free Consultation Call                      
                                </a>
                            </p>
                        </div>
                        <br/><br/>        
                    </div>
                    <div>      
                        <p className="question">   
                            Our Team           
                        </p>
                    </div>
                </div>
            </section>
            {/* Therapist Gallery */}
            <section className="team-gallery-container">        
                <div className="team-thumbnails-grid">          
                    {teamMembers.map(member => (
                        <TeamMember
                            key={member.name}
                            name={member.name}
                            image={member.image}
                            profileUrl={member.profileUrl}
                            alt={member.alt}
                        />
                    ))}
                </div>    
            </section>     
            {/* Therapist Gallery */}
            <br/><br/><br/><br/>    
            <section className="content">        
                <div className="">
                    Not sure who you'd like to work with? No problem. Reach out and we'll point you in the right direction.            
                    <br/><br/><br/><br/>            
                    <a className="booknow" href="/contact">                
                        GET IN TOUCH            
                    </a>
                </div>
            </section>
        </>
    );
}

export default ServicesIndividualTherapy;

export async function getStaticProps() {
  return {
    props: {
      navOptions: { 
        isHome: false, 
        bannerLabel: "Therapy" 
      }
    }
  };
}
