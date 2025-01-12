import React from 'react';
import '../../assets/styles.css';
import Layout from '../../components/Layout';
import teamMembers from '../../data/teamMembers';
import TeamMember from '../../components/TeamMember';
import { Helmet } from 'react-helmet';

const ServicesIndividualTherapy = () => {

    const bannerLabel = "Services";
    const titleString = "Individual Therapy | Grounded Minds Therapy";
    const descriptionString = "Our therapists are passionate about supporting adults with anxiety disorders,  OCD, and other mental health concerns. Together, we will explore your concerns, address your  symptoms, and help you find a way forward.";

    return (
        <>
            <Helmet>
                <meta property="og:url" content="https://www.groundedminds.ca/individualtherapy" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content={ titleString } />
                <meta property="og:description" content={ descriptionString } />
                <meta property="og:image" content="https://www.groundedminds.ca/static/assets/virtualtherapy.jpeg" />
                <meta property="og:image:alt" content={ descriptionString } />
                <meta property="og:image:height" content="300" />
                <meta property="og:image:width" content="300" />
            </Helmet>
            <Layout navOptions={{ isHome: false, bannerLabel: bannerLabel }}>
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
                                    <a className="homebanner3" href="https://groundedmindstherapy.janeapp.com" target="_blank">      
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
                {/* Therapist Gallery      */}
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
                        {/* <!-- Therapist Cards Positioned by grid -->             */}
                        {/* <div className="team_portrait moonsun">                
                            <img alt="moonsun jang therapist" data-profile="{{ url_for('moonsun') }}" id="MJ-REDIRECT-PROFILE-THUMB" src="/moonsun_thumbnail.jpeg"/>               
                            <button className="teamthumbs" data-profile="{{ url_for('moonsun') }}" id="MJ-REDIRECT-PROFILE-CTA">                    
                                Meet Moonsun
                            </button>            
                        </div>
                        <div className="team_portrait danielle">               
                            <img alt="danielle Kirshenbaum therapist" data-profile="{{ url_for('danielle') }}" id="DK-REDIRECT-PROFILE-THUMB" src="/thumbnaildk.png"/>                
                            <button className="teamthumbs" data-profile="{{ url_for('danielle') }}" id="DK-REDIRECT-PROFILE-CTA">               
                                Meet Danielle
                            </button>
                        </div>
                        <div className="team_portrait angie">                
                            <img alt="angie blandford therapist" data-profile="{{ url_for('angie') }}" id="ALB-REDIRECT-PROFILE-THUMB" src="/ang_thumbnail.jpeg"/>            
                            <button className="teamthumbs" data-profile="{{ url_for('angie') }}" id="ALB-REDIRECT-PROFILE-CTA">            
                                Meet Angie 
                            </button>
                        </div>
                        <div className="team_portrait anka">              
                            <img alt="anka krivokuca therapist" data-profile="{{ url_for('anka') }}" id="AK-REDIRECT-PROFILE-THUMB" src="/ANKA_OurTeamPage.png"/>      
                            <button className="teamthumbs" data-profile="{{ url_for('anka') }}" id="AK-REDIRECT-PROFILE-CTA">               
                                Meet Anka            
                            </button>
                        </div>  */}

                    </div>    
                </section>     
                {/* Therapist Gallery      */}
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
            </Layout>
        </>
    );
}

export default ServicesIndividualTherapy;
