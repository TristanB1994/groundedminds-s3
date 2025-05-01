import React, { useRef } from 'react';
import SEO from '../src/components/SEO';

const About = () => {
    const bannerLabel = "Experts in Anxiety & OCD Treatment";
    const titleString = "Our Team | Grounded Minds Therapy";
    const descriptionString = "Our team specializes in supporting individuals with obsessive-compulsive disorder and anxiety disorders. With extensive training and experience, we welcome the opportunity to work with you.";

    const MoonsunSectionRef = useRef(null);
    const DanielleSectionRef = useRef(null);
    const AngieSectionRef = useRef(null);
    const LianneSectionRef = useRef(null);

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
            
            <section className="content">        
                <p className="question">            
                    Do you...
                </p>
                <div className="pb10 specialtiesli">           
                    <ul className="aaa aaaL">             
                        <li>find it hard to stop worrying?</li>      
                        <li>think about worst-case scenarios?</li>           
                        <li>feel weighed down by "what ifs?"</li>       
                        <li>feel anxious or on edge?</li>          
                        <li>feel uncomfortable with uncertainty or doubt?</li> 
                        <li>have "sticky" intrusive thoughts?</li>    
                        <li>have rituals or compulsions you feel the need to perform?</li>       
                        <li>fear or dread certain things or experiences?</li>  
                        <li>struggle to fall asleep or stay asleep?</li>               
                        <li>have panic attacks?</li>     
                        <li>struggle to slow down and enjoy the moment?</li>        
                    </ul>     
                </div><br/><br/>        
                <section className="caps">             
                    <span style={{ "color": "rgb(112, 145, 99)", "fontSize": "20px" }}> 
                        If any of these fit for you,
                        <br/>
                        we can help.
                    </span>        
                </section> 
                <br/><br/>
                <p className="pb10 aaa">           
                    Our team specializes in supporting individuals with obsessive compulsive disorder (OCD) and anxiety disorders. With extensive training and experience, we welcome the opportunity to work with you. 
                    <br/><br/>
                    Perhaps you've been to therapy before and felt like it wasn't the best fit. You may have liked your therapist but didn't see the changes you were looking for. 
                    <br/><br/>
                    Our therapists are skilled experts in anxiety and OCD treatment and use the most up to date, evidence-based practices. At Grounded Minds, our mission is to help you feel understood and supported while also seeing a significant improvement in the symptoms that brought you to us.         
                </p>    
            </section>    
            <section id="aboutmidbanner">            
                <div className="mb40 mt40 raise">       
                    <a className="booknow caps" href="https://groundedmindstherapy.janeapp.com/" target="_blank" rel="noopener noreferrer">        
                        Book a Therapy Session               
                    </a>
                </div>    
            </section>
            <br/>
            <div>
                <p className="question">        
                    Our Team
                </p>
            </div>
            {/* Therapist Gallery */}
            <section className="team-gallery-container">       
                <div className="team-thumbnails-grid">         
                    {/* <!-- Therapist Cards Positioned by grid -->           */}
                    <div className="team_portrait moonsun">                
                        <img onClick={() => scrollToSection(MoonsunSectionRef)} alt="moonsun jang therapist" id="MJ-SECTION-THUMB" src="/moonsun_thumbnail.jpeg"/>        
                        <button onClick={() => scrollToSection(MoonsunSectionRef)} className="teamthumbs" id="MJ-SECTION-CTA">                
                            Meet Moonsun
                        </button>
                    </div> 
                    <div className="team_portrait danielle">             
                        <img onClick={() => scrollToSection(DanielleSectionRef)} alt="danielle Kirshenbaum therapist" id="DK-SECTION-THUMB" src="/thumbnaildk.png"/>      
                        <button onClick={() => scrollToSection(DanielleSectionRef)} className="teamthumbs" id="DK-SECTION-CTA">                   
                            Meet Danielle
                        </button>
                    </div>
                    <div className="team_portrait lianne">       
                        <img onClick={() => scrollToSection(LianneSectionRef)} alt="lianne saxon therapist" id="LS-SECTION-THUMB" src="/lianne-team-page.jpeg"/>      
                        <button onClick={() => scrollToSection(LianneSectionRef)} className="teamthumbs" id="LS-SECTION-CTA">                   
                            Meet Lianne
                        </button>
                    </div>
                    <div className="team_portrait angie">       
                        <img onClick={() => scrollToSection(AngieSectionRef)} alt="angie blandford therapist" id="ALB-SECTION-THUMB" src="/ang_thumbnail.jpeg"/>      
                        <button onClick={() => scrollToSection(AngieSectionRef)} className="teamthumbs" id="ALB-SECTION-CTA">                   
                            Meet Angie
                        </button>
                    </div>
                </div> 
            </section>
            <br/><br/> 
            {/* Therapist Gallery */}
            <div>
                <p className="question">        
                  Anxiety + OCD Therapists  
                </p>
                <br></br><br></br>
            </div>
            {/* Moonsun Start */}
            <section className="content" ref={MoonsunSectionRef}>     
                <br/>       
                <div className="portrait team_portrait">      
                    <div className="ownertexts">               
                        <p className="fancy">                  
                            <br/>
                            Moonsun Jang
                            <span id="bigabout">
                                <br/>
                            </span>
                        </p>      
                        <p id="ownertext">pronouns: she/they
                            <br/><br/>
                            MSW, RSW | Psychotherapist
                        </p>            
                    </div>
                    <img alt="Therapist picture" id="MJ-SECTION" src="/headshotm.png"/>    
                </div>
                <section className="content">           
                    <p className="question">
                        Moonsun's Approach    
                    </p>         
                    <p className="pb10 aaa">       
                    
                        I am passionate about supporting adults with anxiety, OCD, and PTSD. Together, we will explore your concerns, address your symptoms, and help you find relief. 
                        <br/>             
                        We will work collaboratively to identify goals that matter to you and achieve powerful change through evidence-based techniques that align with your needs, goals, and strengths.
                    </p>      
                    <p className="pb10 aaa">    
                        You may be experiencing crippling anxiety, sticky intrusive thoughts, compulsions that you can't resist doing, or having trouble moving past a traumatic event. You can overcome the things that are keeping you stuck and move forward.
                        <br/><br/>                
                        The way we view and deal with mental health challenges are influenced by so many factors including our own life experiences, family, culture, and religion. Guided by this understanding, I take an inclusive, culturally-humble, and trauma-informed approach to therapy.
                        <br/>           
                    </p>
                </section>
                <p className="question">            
                    Specialties
                </p>
                <div className="pb10 specialtiesli"> 
                    <ul className="aaa aaaL">                
                        <li>obsessive-compulsive and related disorders</li>                
                        <li>anxiety disorders</li>                 
                        <li>PTSD and trauma-related disorders</li>                
                        <li>substances and addictions</li>                
                        <li>ADHD</li>               
                        <li>eating disorders</li>                
                        <li>borderline personality disorder</li>               
                        <li>stress and life changes</li>                
                        <li>personal growth and relationship concerns</li>         
                    </ul>
                </div>
            </section>
            <br/><br/>
            <section id="aboutBannermiddle">     
                <div className="mb40 mt40 raise">   
                    <a className="booknow caps" href="https://groundedmindstherapy.janeapp.com/#/staff_member/4" id="about-banner-cta" target="_blank" rel="noopener noreferrer">
                        Book with Moonsun
                    </a>
                </div>
            </section>
            {/* Moonsun End */}
            {/* Danielle Start   */}
            <section className="content" ref={DanielleSectionRef}>
                <br/>
                <div className="portrait-reverse">      
                    <div className="ownertexts">                
                        <p className="fancy">                   
                            <br/>
                            Danielle Kirshenbaum
                            <span id="bigabout">
                                <br/> 
                            </span>
                        </p>
                        <p id="ownertext">
                            pronouns: she/her 
                            <br/><br/> 
                            MSW, RSW | Psychotherapist
                        </p>
                    </div>
                    <img alt="Therapist picture" id="DK-SECTION" src="/headshotdanielle.png"/>     
                </div>
                <br></br>
                {/* <!-- Description --> */}
                <section className="content">           
                    <p className="question">               
                        Danielle's Approach 
                    </p>
                    <p className="pb10 aaa">         
                        I am an empathetic, compassionate, down-to-earth therapist. Whether it is OCD, anxiety, depression, psychosis, or general life stressors affecting your mood and day-to-day functioning, I am here to figure it out with you. 
                        <br/><br/>  
                        I will collaboratively and non-judgmentally work with you to uncover your own strengths and employ them (as well as provide you with new tools) to overcome this tough period.                       
                    </p>
                    <p className="pb10 aaa">        
                        Through my years of working with individuals experiencing a wide spectrum of challenges, I have come to see that we, as humans, have incredible and unique strengths to overcome adversity - but there are times when intrusive negative thoughts are so loud, or life stressors are so plentiful - that it is very easy to feel completely overwhelmed and lost. You may even worry that these distressing feelings will last forever. Let's get you feeling like yourself again. 
                        <br/><br/> 
                        I come from a strengths-based perspective and very much tailor the tools and approach I use to the individual I am working with. This means that while we will no doubt utilize evidence-based approaches to guide us in our work together, my approach with you will very much be centered around your unique history, challenges, needs, and strengths.             
                    </p>
                </section>
                {/* <!-- Description END -->    */}
                {/* <!-- SPECIALTIES -->         */}
                <p className="question">       
                    Specialties
                </p>
                <div className="pb10 specialtiesli">  
                    <ul className="aaa aaaL">                
                        <li>obsessive compulsive disorder</li>                
                        <li>anxiety disorders</li>                 
                        <li>perinatal and postpartum</li>                
                        <li>psychosis</li>                
                        <li>depressive disorders</li>                
                        <li>eating disorders</li>                
                        <li>stress and life changes</li>                
                        <li>personal growth and relationship concerns</li>           
                    </ul>
                </div>
                {/* <!-- SPECIALTIES END -->     */}
                </section>   
                <section className="availability">
                </section>   
                <br/><br/>    
                <section id="aboutBannermid">   
                    <div className="mb40 mt40 raise">      
                        <a className="booknow caps" href="https://groundedmindstherapy.janeapp.com/#/staff_member/6" id="about-banner-cta" target="_blank" rel="noopener noreferrer">
                            Book with Danielle
                        </a>
                    </div>
                </section>
                {/* Danielle End */}

                {/* Lianne Start */}
                <section className="content" ref={LianneSectionRef}>        
                    <div className="portrait">            
                        <div className="ownertexts">   
                            <p className="fancy">       
                                <br/>
                                   Lianne Saxon
                                <span id="bigabout">
                                    <br/>
                                </span>           
                            </p>
                            <p id="ownertext">pronouns: she/her
                                <br/><br/>
                                MA | Registered Psychotherapist (Qualifying) 
                            </p>            
                        </div>
                        <img alt="Therapist picture" id="ALB-SECTION" src="/lianne-profile.jpeg"/>    
                    </div>
                    <br/>
                </section>   
                <section className="content">     
                    <p className="question">        
                        Lianne's Approach      
                    </p>
                    <p className='pb10 aaa'>
                        I'm an approachable, compassionate, non-judgmental therapist with a passion for sharing my knowledge and helping people. It would be an honour to work with you on your mental health and wellbeing. I understand how distressing mental health issues can be, and I'm eager to support you so that you're not dealing with them alone. 
                    </p>
                    <p className='pb10 aaa'>
                        I have experience and a keen interest in helping adults with anxiety disorders, OCD, trauma, depression and grief. Worries, intrusive thoughts, compulsions and trauma often include an element of shame, especially if they include "taboo" themes, and I'm comfortable discussing them. My approach is to respectfully listen, validate and normalize your experiences, and then figure out what we can do to address them.                        
                    </p>
                    <p className='pb10 aaa'>
                        Together, we'll use evidence-based therapies to work towards your goals, including reducing anxiety symptoms, managing OCD, and processing trauma. I listen but I also take an active role in sessions, gently challenging you in a way that encourages growth and learning.                            
                    </p>
                </section>
                <p className="question">        
                    Specialties
                </p>
                <section className="content">   
                    <div className="pb10 specialtiesli">     
                        <ul className="aaa aaaL">                
                            <li>social anxiety</li>
                            <li>generalized anxiety</li>
                            <li>OCD</li>
                            <li>trauma + PTSD + complex trauma</li>
                            <li>health anxiety</li>
                            <li>ADHD</li>
                            <li>grief</li>
                            <li>body-focused repetitive behaviours (BFRBs)</li>
                            <li>depression</li>
                        </ul>
                    </div>
                    <p className="availability"></p>
                    <br/>
                </section>
                <section id="aboutBannermiddle">
                    <div className="mb40 mt40 raise">  
                        <a className="booknow caps" href="https://groundedmindstherapy.janeapp.com/#/staff_member/10" id="lianne-about-banner-cta" target="_blank" rel="noopener noreferrer">
                            Book with Lianne
                        </a>
                    </div>
                </section>
                {/* Lianne End */}

                {/* Angie Start */}
                <section className="content" ref={AngieSectionRef}>        
                    <div className="portrait-reverse">            
                        <div className="ownertexts">   
                            <p className="fancy">       
                                <br/>
                                Angie Blandford
                                <span id="bigabout">
                                    <br/>
                                </span>           
                            </p>
                            <p id="ownertext">pronouns: she/her
                                <br/><br/>
                                MSW, RSW | Clinical Director 
                            </p>            
                        </div>
                        <img alt="Therapist picture" id="ALB-SECTION" src="/portrait.jpeg"/>    
                    </div>
                    <br/>
                </section>   
                <section className="content">     
                    <p className="question">        
                        Angie's Approach      
                    </p>       
                    <p className="pb10 aaa">   
                        My goal is to provide a space where you can feel seen, heard and understood. Together, we will explore your symptoms and help you make sense of them. I'll introduce you to a variety of coping strategies that you can use in moments of anxiety as well as your day to day life. 
                        <br/><br/> 
                        Anxiety and OCD symptoms are awful, but you don't have to go through them alone. Over time, the tools you learn in therapy can help you feel more confident and less afraid. I love being a therapist because I get to help people 
                        <i>
                            just like you
                        </i>
                        learn how to manage distressing emotions like anxiety.        
                    </p> 
                    <p className="pb10 aaa">    
                        I am a supportive and compassionate therapist. I enjoy helping people identify their needs, better understand their emotions, and learn meaningful coping strategies in a gentle, easy-going environment.       
                    </p>
                    <p className="pb10 aaa">           
                        Working authentically and flexibly are some of my core values as a therapist. I don't believe there is a one-size-fits-all approach to therapy. What works best for you might not work best for someone else. Some folks thrive when doing this work in a structured, guided way. Other people prefer that we take a more exploratory, conversational approach. Some enjoy a mixture of both solution-focused and supportive counselling. 
                        <br/><br/> 
                        You are the expert on you. Shortly after beginning therapy, you'll likely get a sense of what's helpful and what's not so helpful. I value your input and strive to tailor my approach to best support you.        
                    </p>
                </section>
                <p className="question">        
                    Specialties
                </p>
                <section className="content">   
                    <div className="pb10 specialtiesli">     
                        <ul className="aaa aaaL">                
                            <li>anxiety disorders</li>                
                            <li>panic disorder + panic attacks</li>               
                            <li>agoraphobia</li>                
                            <li>phobias</li>                
                            <li>obsessive-compulsive disorder</li>                 
                            <li>depression</li>                
                            <li>trauma + PTSD</li>                
                            <li>sleep</li>               
                            <li>stress + burnout</li>           
                        </ul>
                    </div>
                    <p className="availability"></p>
                    <br/>
                </section>
                <section id="aboutbanner">     
                    <div className="mb40 mt40 raise">  
                        <a className="booknow caps" href="https://groundedmindstherapy.janeapp.com/#/staff_member/1" id="about-banner-cta" target="_blank" rel="noopener noreferrer">
                            Book with Angie
                        </a>
                    </div>
                </section>
                {/* Angie End */}
        </>        
    );
};

export default About;

export async function getStaticProps() {
  return {
    props: {
      navOptions: { 
        isHome: false, 
        bannerLabel: "Experts in Anxiety & OCD Treatment" 
      }
    }
  };
}
