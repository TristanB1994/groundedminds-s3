import React from 'react';

const AbDetails = () => {
    return (
        <>
            <section classname="content">
                <div classname="portrait">   
                    <img alt="Therapist picture" id="ALB-SECTION" src="/portrait.jpeg"/>       
                    <div classname="ownertexts">     
                        <p classname="fancy">          
                        <br/>
                            Angie Blandford
                            <span id="bigabout">
                                <br/>
                            </span>          
                        </p>            
                        <p id="ownertext">
                            pronouns: she/her
                            <br/><br/>
                            MSW, RSW | Founder of Grounded Minds
                        </p>
                    </div>
                </div>
                <br/>
                <p classname="pb10 aaa">   
                    My goal is to provide a space where you can feel seen, heard and understood. Together, we will explore your symptoms and help you make sense of them. I'll introduce you to a variety of coping strategies that you can use in moments of anxiety as well as your day to day life. 
                    <br/><br/> 
                    Anxiety and OCD symptoms are awful, but you don't have to go through them alone. Over time, the tools you learn in therapy can help you feel more confident and less afraid. I love being a therapist because I get to help people 
                    <i>just like you</i> 
                    learn how to manage distressing emotions like anxiety.    
                </p>
            </section>
            <section classname="content">   
                <p classname="question">      
                    Angie's Approach   
                </p>   
                <p classname="pb10 aaa">
                    I am a supportive and compassionate therapist. I enjoy helping people identify their needs, better understand their emotions, and learn meaningful coping strategies in a gentle, easy-going environment.   
                </p>
                <p classname="pb10 aaa">       
                    Working authentically and flexibly are some of my core values as a therapist. I don't believe there is a one-size-fits-all approach to therapy. What works best for you might not work best for someone else. Some folks thrive when doing this work in a structured, guided way. Other people prefer that we take a more exploratory, conversational approach. Some enjoy a mixture of both solution-focused and supportive counselling. 
                    <br/><br/>
                    You are the expert on you. Shortly after beginning therapy, you'll likely get a sense of what's helpful and what's not so helpful. I value your input and strive to tailor my approach to best support you.    
                </p>
                <p classname="pb10 aaa">
                    I incorporate elements from the following evidence-based therapies in my practice:
                    <em>
                        <span style="color: rgb(112, 145, 99);">
                            Cognitive Behaviour Therapy, Cognitive Processing Therapy, Exposure and Response Prevention, Inference-Based CBT, Acceptance and Commitment Therapy, Person-Centered Therapy, Somatic Therapy, Mindfulness and Motivational Interviewing. 
                        </span>
                    </em>
                </p>
            </section>
            <p classname="question">     
                Specialties
            </p>
            <section classname="content">
                <div classname="pb10 specialtiesli">      
                    <ul classname="aaa aaaL">           
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
            </section>
            <section classname="content">    
                <p classname="question">        
                    Education    
                </p>
                <p classname="pb10 aaa">        
                    I am a Registered Social Worker (RSW) with the 
                    <br/> 
                    Ontario College of Social Workers and Social Service Workers (OCSWSSW).    
                </p>
                <p classname="pb10 aaa">            
                    I have a Master of Social Work (MSW) degree from the University of Toronto and a Bachelor of Science (BSc) degree in Psychology: Brain and Cognition from the University of Guelph.     
                </p>
                <p classname="question">        
                    Availability       
                </p>   
                <p classname="pb10 aaa">        
                    Caseload is full.
                    <br/>        
                </p>
                <p classname="question">        
                    Contact        
                </p>    
                <p classname="deets">        
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
                <div classname="mb40 mt40 raise">       
                    {/* <!-- <a className="booknow caps" href="/contact">Book A Session</a> -->         */}
                    <a classname="booknow caps" href="https://groundedmindstherapy.janeapp.com/#/staff_member/1" id="about-banner-cta" target="_blank">
                        Book with Angie
                    </a>
                </div>
            </section>
        </>
    );
}

// export default AbDetails;
