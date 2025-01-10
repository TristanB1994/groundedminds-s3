import React from 'react';
import '../../assets/styles.css'; // Adjust the path as necessary
import Layout from '../../components/Layout';
import { Helmet } from 'react-helmet';

const About = () => {
    return (
        <>
            <Helmet>
                <title>Our Team | Grounded Minds Therapy</title>
                <meta name="description" content="Our team specializes in supporting individuals with anxiety disorders and OCD. With extensive training and experience, we welcome the opportunity to work with you." />

                <meta property="og:url" content="https://www.groundedminds.ca/about" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Our Team | Grounded Minds Therapy" />
                <meta property="og:description" content="Our team specializes in supporting individuals with anxiety disorders and OCD. With extensive training and experience, we welcome the opportunity to work with you." />
                <meta property="og:image" content="https://www.groundedminds.ca/static/assets/homepage.jpeg" />
                <meta property="og:image:alt" content="Our team specializes in supporting individuals with anxiety disorders and OCD. With extensive training and experience, we welcome the opportunity to work with you." />
                <meta property="og:image:height" content="300" />
                <meta property="og:image:width" content="300" />
            </Helmet>
            <Layout navOptions={{ isHome: false, bannerLabel: 'Experts in Anxiety & OCD Treatment' }}>
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
                        Our team specializes in supporting individuals with anxiety disorders and OCD. With extensive training and experience, we welcome the opportunity to work with you. 
                        <br/><br/>
                        Perhaps you've been to therapy before and just felt like it wasn't the best fit. You may have even really liked your therapist but you didn't see the changes you were after. 
                        <br/><br/>
                        Our therapists are skilled experts in anxiety and OCD treatment and use the most up to date, evidence-based practices. At Grounded Minds, our mission is to help you feel understood and supported while also seeing a significant improvement in the symptoms that brought you here.         
                    </p>    
                </section>    
                <section id="aboutmidbanner">            
                    <div className="mb40 mt40 raise">       
                        <a className="booknow caps" href="https://groundedmindstherapy.janeapp.com/" target="_blank">        
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
                            <img alt="moonsun jang therapist" id="MJ-SECTION-THUMB" src="/moonsun_thumbnail.jpeg"/>        
                            <button className="teamthumbs" id="MJ-SECTION-CTA">                
                                Meet Moonsun
                            </button>
                        </div> 
                        <div className="team_portrait danielle">             
                            <img alt="danielle Kirshenbaum therapist" id="DK-SECTION-THUMB" src="/thumbnaildk.png"/>      
                            <button className="teamthumbs" id="DK-SECTION-CTA">                   
                                Meet Danielle
                            </button>
                        </div>
                        <div className="team_portrait angie">       
                            <img alt="angie blandford therapist" id="ALB-SECTION-THUMB" src="/ang_thumbnail.jpeg"/>      
                            <button className="teamthumbs" id="ALB-SECTION-CTA">                   
                                Meet Angie
                            </button>
                        </div>
                        <div className="team_portrait anka">               
                            <img alt="anka krivokuca therapist" id="AK-SECTION-THUMB" src="/ANKA_OurTeamPage.png"/>  
                            <button className="teamthumbs" id="AK-SECTION-CTA">                    
                                Meet Anka                
                            </button>
                        </div>
                    </div> 
                </section>
                <br/><br/> 
                {/* Therapist Gallery */}
                <div>
                    <p className="question">        
                        Meet Our Anxiety + OCD Therapists  
                    </p>
                </div>
                {/* Anka Start     */}
                <section className="content">    
                    <div className="portrait">          
                        {/* <!-- <img id="AK-SECTION" src="/ANKA_Headshot.png" alt="Therapist picture"> -->  */}
                        <div className="ANKA-portrait-image" id="AK-SECTION"></div>         
                        <div className="ownertexts ANKA-portrait-text">             
                            <p className="fancy">                  
                                <br/>
                                Anka Krivokuca
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
                    </div>   
                    {/* <div></div> */}
                </section>
                {/* Description START */}
                <section className="content">   
                    <p className="pb10 aaa">     
                        <br/>
                        I primarily work with OCD, anxiety disorders, BFRBs, trauma and body dysmorphia. I love helping people learn how to manage and overcome anxiety, worry, and OCD.
                        <br/>
                    </p>
                    <p className="question">            
                        Anka's Approach
                    </p>
                    <p className="pb10 aaa">          
                        I foster a "zero judgement" environment and work collaboratively to help my clients navigate the issues that are bringing them to therapy. My approach is very flexible and person-centered. I am able to provide directive, manualized therapy or more open-ended talk therapy depending on your needs and goals. Struggling with OCD or anxiety can result in a lot of distress and shame, but there is a way through these uncomfortable emotions. Obsessions in OCD can vary widely. Regardless of the "theme," I have years of experience and training successfully helping people manage OCD.             
                        <br/><br/>
                        Whatever brings you here, I am humbled by each opportunity to use my training and experience to help you reach your goals and live a fulfilling life. Let's work together to break the cycle of OCD, worry or anxiety.            
                        <br/><br/>
                    </p>
                    <p className="pb10 aaa">          
                        I incorporate elements from the following evidence-based therapies in my practice: 
                        <em>
                            <span style={{ "color": "rgb(112, 145, 99)" }}>
                                Cognitive Behavioural Therapy, Cognitive Processing Therapy, Prolonged Exposure Therapy, Acceptance and Commitment Therapy, and Exposure and Response Prevention.
                            </span>
                        </em>
                    </p>
                    <br/>
                    {/* Description END */}
                    {/* SPECIALTIES */}
                    <p className="question" style={{ "width": "fitContent", "marginLeft": "auto", "marginRight": "auto" }}>
                        SPECIALTIES  
                    </p>
                    {/* <ul className="aaa aaaL" id="ocdsubtypes" style={{ "width": "fitContent", "marginLeft": "auto", "marginRight": "auto" }}>   */}
                    <div className="pb10 specialtiesli">  
                        <ul className="aaa aaaL" id="ocdsubtypes" style={{ "width": "fitContent", "marginLeft": "auto", "marginRight": "auto" }}>  
                            <li>generalized anxiety</li>       
                            <li>social anxiety</li>     
                            <li>health anxiety</li>    
                            <li>phobias</li>     
                            <li>panic disorder</li>       
                            <li>obsessive-compulsive disorder (OCD)</li>       
                            <li>perinatal and postpartum OCD</li>        
                            <li>relationship obsessions</li>        
                            <li>body-focused repetitive behaviours (BFRBs)</li>        
                            <li>body dysmorphic disorder (BDD)</li>        
                            <li>depression</li>    
                        </ul>
                    </div>
                    <br/>
                </section>
                {/* SPECIALTIES END */}
                {/* AVAILABILITY START  */}
                <section className="content">
                    <section className="availability">    
                        <p className="question">            
                            Availability       
                        </p>
                        <p className="pb10 aaa">   
                            Accepting new clients!      
                        </p>
                        {/* <!-- <p className="question">            Contact        </p>        <p className="deets">            <a href="mailto:anka@groundedminds.ca"> anka@groundedminds.ca</a>        </p> -->   */}
                    </section>
                    <br/><br/>
                    {/* AVAILABILITY END */}
                    <section id="aboutBannermiddle">      
                        <div className="mb40 mt40 raise">         
                            <a className="booknow caps" href="https://groundedmindstherapy.janeapp.com/#/staff_member/7" id="about-banner-cta" target="_blank">
                                Book with Anka
                            </a>
                        </div> 
                    </section>
                    {/* Anka End  */}
                    {/* Danielle Start   */}
                    <section className="content">
                        <br/>
                        <div className="portrait portrait-reverse">      
                            <img alt="Therapist picture" id="DK-SECTION" src="/headshotdanielle.png"/>     
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
                        </div>
                        {/* <!-- Description --> */}
                        <section className="content">           
                            <p className="pb10 aaa">         
                                I am an empathetic, compassionate, down-to-earth therapist. Whether it is OCD, anxiety, depression, psychosis, or general life stressors affecting your mood and day-to-day functioning, I am here to figure it out with you. 
                                <br/><br/>  
                                I will collaboratively and non-judgmentally work with you to uncover your own strengths and employ them (as well as provide you with new tools) to overcome this tough period.                       
                            </p>
                            <p className="question">               
                                Danielle's Approach 
                            </p>
                            <p className="pb10 aaa">        
                                Through my years of working with individuals experiencing a wide spectrum of challenges, I have come to see that we, as humans, have incredible and unique strengths to overcome adversity - but there are times when intrusive negative thoughts are so loud, or life stressors are so plentiful - that it is very easy to feel completely overwhelmed and lost. You may even worry that these distressing feelings will last forever. Let's get you feeling like yourself again. 
                                <br/><br/> 
                                I come from a strengths-based perspective and very much tailor the tools and approach I use to the individual I am working with. This means that while we will no doubt utilize evidence-based approaches to guide us in our work together, my approach with you will very much be centered around your unique history, challenges, needs, and strengths.             
                            </p>
                            <p className="pb10 aaa">
                                I incorporate elements from the following evidence-based therapies in my practice: 
                                <em>
                                    <span style={{ "color": "rgb(112, 145, 99)" }}>
                                        Cognitive Behavioural Therapy, Dialectical Behaviour Therapy, Exposure and Response Prevention,  Trauma-Informed Therapy and Mindfulness.
                                    </span>
                                </em>
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
                        <p className="question">            
                            Availability        
                        </p>        
                        <p className="pb10 aaa">       
                            Accepting new clients! Please click "Book with Danielle" to schedule a complimentary consultation call.   
                        </p>
                        {/* <!-- <p className="question">            Contact        </p>        <p className="deets">            <a href="mailto:danielle@groundedminds.ca"> danielle@groundedminds.ca</a>        </p> -->     */}
                    </section>   
                    <br/><br/>    
                    <section id="aboutBannermid">   
                        <div className="mb40 mt40 raise">      
                            <a className="booknow caps" href="https://groundedmindstherapy.janeapp.com/#/staff_member/6" id="about-banner-cta" target="_blank">
                                Book with Danielle
                            </a>
                        </div>
                    </section>
                    {/* Danielle End */}
                    {/* Moonsun Start */}
                    <section className="content">     
                        <br/>       
                        <div className="portrait team_portrait">      
                            <img alt="Therapist picture" id="MJ-SECTION" src="/headshotmj.jpeg"/>    
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
                        </div>
                        <section className="content">   
                            <p className="pb10 aaa">       
                                <br/>
                                I am passionate about supporting adults with anxiety, OCD, and PTSD. Together, we will explore your concerns, address your symptoms, and help you find relief. 
                                <br/><br/>                 
                                We will work collaboratively to identify goals that matter to you and achieve powerful change through evidence-based techniques that align with your needs, goals, and strengths.
                            </p>            
                            <p className="question">
                                Moonsun's Approach    
                            </p>            
                            <p className="pb10 aaa">    
                                You may be experiencing crippling anxiety, sticky intrusive thoughts, compulsions that you can't resist doing, or having trouble moving past a traumatic event. You can overcome the things that are keeping you stuck and move forward.
                                <br/><br/>                
                                The way we view and deal with mental health challenges are influenced by so many factors including our own life experiences, family, culture, and religion. Guided by this understanding, I take an inclusive, culturally-humble, and trauma-informed approach to therapy.
                                <br/>           
                            </p>
                            <p className="pb10 aaa">   
                                I incorporate elements from the following evidence-based therapies in my practice: 
                                <em>
                                    <span style={{ "color": "rgb(112, 145, 99)" }}>
                                        Cognitive Behavioural Therapy, Cognitive Processing Therapy, Dialectical Behaviour Therapy, Acceptance and Commitment Therapy, Exposure and Response Prevention, Narrative Therapy, Person-Centered Therapy, Solution-Focused Brief Therapy, Mindfulness-Based Therapy, and Motivational Interviewing.
                                    </span> 
                                </em>
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
                    <section className="availability">        
                        <p className="question">            
                            Availability       
                        </p>
                        <p className="pb10 aaa">            
                            Accepting new clients! Please click "Book with Moonsun" to schedule a complimentary consultation call. I also have some limited availability for sliding scale clients.         
                        </p>
                        {/* <!-- <p className="question">            Contact        </p>        <p className="deets">            <a href="mailto:moonsun@groundedminds.ca"> moonsun@groundedminds.ca</a>        </p> -->  */}
                    </section>    
                    <br/><br/>
                    <section id="aboutBannermiddle">     
                        <div className="mb40 mt40 raise">   
                            <a className="booknow caps" href="https://groundedmindstherapy.janeapp.com/#/staff_member/4" id="about-banner-cta" target="_blank">
                                Book with Moonsun
                            </a>
                        </div>
                    </section>
                    {/* Moonsun End */}
                    {/* Angie Start */}
                    <section className="content">        
                        <div className="portrait">            
                            <img alt="Therapist picture" id="ALB-SECTION" src="/portrait.jpeg"/>    
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
                                    MSW, RSW | Clinic Owner 
                                </p>            
                            </div>
                        </div>
                        <br/>
                        <p className="pb10 aaa">   
                            My goal is to provide a space where you can feel seen, heard and understood. Together, we will explore your symptoms and help you make sense of them. I'll introduce you to a variety of coping strategies that you can use in moments of anxiety as well as your day to day life. 
                            <br/><br/> 
                            Anxiety and OCD symptoms are awful, but you don't have to go through them alone. Over time, the tools you learn in therapy can help you feel more confident and less afraid. I love being a therapist because I get to help people 
                            <i>
                                just like you
                            </i>
                            learn how to manage distressing emotions like anxiety.        
                        </p>
                    </section>   
                    <section className="content">     
                        <p className="question">        
                            Angie's Approach      
                        </p>        
                        <p className="pb10 aaa">    
                            I am a supportive and compassionate therapist. I enjoy helping people identify their needs, better understand their emotions, and learn meaningful coping strategies in a gentle, easy-going environment.       
                        </p>
                        <p className="pb10 aaa">           
                            Working authentically and flexibly are some of my core values as a therapist. I don't believe there is a one-size-fits-all approach to therapy. What works best for you might not work best for someone else. Some folks thrive when doing this work in a structured, guided way. Other people prefer that we take a more exploratory, conversational approach. Some enjoy a mixture of both solution-focused and supportive counselling. 
                            <br/><br/> 
                            You are the expert on you. Shortly after beginning therapy, you'll likely get a sense of what's helpful and what's not so helpful. I value your input and strive to tailor my approach to best support you.        
                        </p>
                        <p className="pb10 aaa">            
                            I incorporate elements from the following evidence-based therapies in my practice: 
                            <em> 
                                <span style={{ "color": "rgb(112, 145, 99)" }}>
                                    Cognitive Behaviour Therapy, Cognitive Processing Therapy, Exposure and Response Prevention, Acceptance and Commitment Therapy, Person-Centered Therapy, Somatic Therapy, Mindfulness and Motivational Interviewing. 
                                </span>
                            </em>
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
                        <p className="question">    
                            Availability
                        </p>  
                        <p className="pb10 aaa">        
                            Caseload is full. I am not able to take new clients at this time.
                            <br/>            
                        </p>
                        <p className="question"> 
                            Contact           
                        </p>        
                        <p className="deets">   
                            <a href="mailto:angie@groundedminds.ca">
                                angie@groundedminds.ca
                            </a>
                            <br/>
                            <a href="tel:2892126486">
                                289-212-6486
                            </a>
                        </p>
                        <br/>
                    </section>
                    <section id="aboutbanner">     
                        <div className="mb40 mt40 raise">  
                            <a className="booknow caps" href="https://groundedmindstherapy.janeapp.com/#/staff_member/1" id="about-banner-cta" target="_blank">
                                Book with Angie
                            </a>
                        </div>
                    </section>
                    {/* Angie End */}
                </section>
            </Layout>
        </>        
    );
}

export default About;
