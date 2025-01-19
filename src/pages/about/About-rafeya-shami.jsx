import React from 'react';
import '../../assets/styles.css'; // Adjust the path as necessary
import Layout from '../../components/Layout';
import { Helmet } from 'react-helmet';

const AboutRafeyaShami = () => {

    const bannerLabel = "Meet Rafeya";
    const titleString = "Rafeya Shami | Grounded Minds Therapy";
    const descriptionString = "Rafeya Shami is a RPQ who TODO.";

    return (
        <>
            {/* All the HEAD tag content goes here */}
            <Helmet>
                <title>{titleString}</title>
                <meta name="description" content={descriptionString} />

                <meta property="og:url" content="https://www.groundedminds.ca/rafeyashami" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content={titleString} />
                <meta property="og:description" content={descriptionString} />
                <meta property="og:image" content="https://www.groundedminds.ca/static/assets/rafeya.jpeg" />
                <meta property="og:image:alt" content="Rafeya Shami" />
                <meta property="og:image:height" content="300" />
                <meta property="og:image:width" content="300" />
            </Helmet>
            {/* Page content goes between the Layout component */}
            <Layout navOptions={{ isHome: false, bannerLabel: bannerLabel }}>
                <div>
                    <p className="question">Rafeya Shami</p>
                </div>
                <section className="content">
                    <div className="portrait">
                        <img alt="Therapist picture" id="RAF-SECTION" src="/Rafeya.jpeg"/>
                        <div className="ownertexts">
                            <p id="ownertext">
                                pronouns: she/her<br /><br />
                                Registered Psychotherapist (Qualifying)                            </p>
                        </div>
                    </div>
                    <p className="question" style={{ width: 'fit-content', marginLeft: 'auto', marginRight: 'auto' }}>
                        SPECIALTIES:
                    </p>
                    <ul className="aaa aaaL" id="ocdsubtypes" style={{ width: 'fit-content', marginLeft: 'auto', marginRight: 'auto' }}>
                        <li>anxiety disorders</li>  
                        <li>relationship anxiety + other relationship concerns</li>              
                        <li>panic disorder + panic attacks</li>                              
                        <li>phobias</li>                
                        <li>obsessive-compulsive disorder</li>                 
                        <li>depression</li>                
                        <li>trauma + PTSD</li>  
                        <li>grief and loss</li>  
                        <li>career counselling</li>  
                        <li>perinatal and postpartum concerns</li> 
                        <li>borderline personality disorder</li>  
                        <li>ADHD</li>      
                        <li>self-esteem and body image</li>      
                    </ul>
                    <br /><br />
                    <p className="pb10 aaa">
                    I create a supportive, judgment-free space where clients feel safe to explore their challenges, intrusive thoughts and work towards meaningful change. My approach is flexible and tailored to your unique needs, whether you prefer a structured, directive therapy or an open-ended, exploratory style. Together, we’ll collaborate to identify your goals and navigate the difficulties that brought you to therapy.
                    </p>
                </section>
                <section className="content">
                    <p className="question">Rafeya's Approach</p>
                    <p className="pb10 aaa">
                    Living with OCD, depression, anxiety, or grief can feel overwhelming and isolating, but there is a way forward. Obsessions and intrusive thoughts in OCD can take many forms, often leading to significant distress and shame and I understand how lonely that can feel. I am here to provide a safe space for us to explore your intrusive thoughts together – without shame and fear of judgement. 
                    </p>
                    <p className="pb10 aaa">
                    Whether it’s tackling the relentless worries of anxiety, processing the pain of loss, or overcoming the heaviness of depression, I am here to guide you toward healing and growth.
                    Whatever challenges you’re facing, I am honored to walk this journey with you. Let’s work together to help you find clarity, build resilience, and create a fulfilling, balanced life.
                    </p>
                    <p className="pb10 aaa">
                        I incorporate elements from the following evidence-based therapies in my practice: <em><span style={{ color: 'rgb(112, 145, 99)' }}>Cognitive Behaviour Therapy, Cognitive Processing Therapy, Exposure and Response Prevention, Exposure Therapy, Acceptance and Commitment Therapy, Dialectical Behaviour Therapy, Solution-Focused Therapy, and Narrative Therapy.</span></em>
                    </p>
                </section>
                <section className="content">
                    <p className="question">Education</p>
                    <p className="pb10 aaa">
                        I am a Registered Psychotherapist (Qualifying) <br></br> with the College of Registered Psychotherapists of Ontario (CRPO). 
                    </p>
                    <p className="pb10 aaa">
                        I have a Master of Counselling Psychology (MACP) degree from Yorkville University. 
                    </p>
                    <p className="question">Availability</p>
                    <p className="pb10 aaa">Accepting new clients. Please click the link below to book online or e-mail rafeya@groundedminds.ca. I look forward to meeting you!<br /></p>
                    <p className="question">Contact</p>
                    <p className="deets">
                        <a href="mailto:rafeya@groundedminds.ca">rafeya@groundedminds.ca</a>
                    </p>
                    <br />
                </section>
                <section id="aboutbanner">
                    <div className="mb40 mt40 raise">
                        <a className="booknow caps" href="https://groundedmindstherapy.janeapp.com/#/staff_member/9" id="about-banner-cta" target="_blank">Book with Rafeya</a>
                    </div>
                </section>
                <br />
           </Layout>
        </>
    );
}

export default AboutRafeyaShami;