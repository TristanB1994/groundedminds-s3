import React from 'react';
import '../../assets/styles.css'; // Adjust the path as necessary
import Layout from '../../components/Layout';

const AboutAnkaKrivokuca = () => {
    
    const bannerLabel = "Meet Anka";

    return (
        <Layout navOptions={{ isHome: false, bannerLabel: bannerLabel }}>
            <div>
                <p className="question">Anka Krivokuca</p>
            </div>
            <section className="content">
                <div className="portrait">
                    {/* <img id="AK-SECTION" src="/ANKA_Headshot.png" alt="Therapist picture"> */}
                    <div className="ANKA-portrait-image"></div>
                    <div className="ownertexts ANKA-portrait-text">
                        {/* <p id="lilabout" className="fancy"></p> */}
                        <p id="ownertext">
                            pronouns: she/her<br/><br/>
                            MSW, RSW | Psychotherapist
                        </p>
                    </div>
                </div>
                {/* SPECIALTIES */}
                <p className="question" style={{ width: 'fit-content', marginLeft: 'auto', marginRight: 'auto' }}>SPECIALTIES</p>
                <ul className="aaa aaaL" id="ocdsubtypes" style={{ width: 'fit-content', marginLeft: 'auto', marginRight: 'auto' }}>
                    <li>generalized anxiety and worry</li>
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
                    <li>trauma and PTSD</li>
                </ul>
                <br/>
            </section>
            <section className="content">
                <p className="pb10 aaa">
                    <br/>
                    I specialize in OCD, anxiety disorders, BFRBs, trauma and body dysmorphia. I love helping people learn how to worry less and live more in the here and now.
                    <br/>
                </p>
                <p className="question">Anka's Approach</p>
                <p className="pb10 aaa">
                    I foster a "zero judgement" environment and work collaboratively to help my clients navigate the issues that are bringing them to therapy. My approach is very flexible and person-centered. I am able to provide directive, manualized therapy or more open-ended talk therapy depending on your needs and goals. Struggling with OCD and anxiety can result in a lot of distress and shame, but there is a way through these uncomfortable emotions. You may be struggling with obsessions around contamination, your relationship or new baby. Obsessions in OCD can vary widely. Regardless of the "theme," I have years of experience and training successfully helping people manage OCD. I can support you in overcoming the unique set of challenges that OCD and anxiety bring.
                    <br/><br/>
                    Perhaps you're coming to therapy to work on skin picking, hair pulling or body image concerns. Maybe you need support moving forward after a traumatic event. Whatever brings you here, I am humbled by each opportunity to use my training and experience to help you reach your goals and live a fulfilling life. Let's work together to break the cycle of OCD, worry and anxiety.
                    <br/><br/>
                </p>
                <p className="pb10 aaa">
                    I incorporate elements from the following evidence-based therapies in my practice: <em><span style={{ color: 'rgb(112, 145, 99)' }}>Cognitive Behavioural Therapy, Cognitive Processing Therapy, Prolonged Exposure Therapy, Acceptance and Commitment Therapy, Dialectical Behaviour Therapy, and Exposure and Response Prevention.</span></em>
                </p>
            </section>
            <section className="content">
                <p className="question">Education</p>
                <p className="pb10 aaa">
                    I am a Registered Social Worker (RSW) with the Ontario College of Social Workers and Social Service Workers (OCSWSSW).
                    <br/><br/>
                    I have a Master of Social Work Degree and a Bachelor of Science Degree in Psychology and Sociology from the University of Toronto.
                </p>
                <p className="question">Availability</p>
                <p className="pb10 aaa">
                    Accepting new clients! Please send me an e-mail or click "Book with Anka" to schedule a complimentary consultation call.
                </p>
                <p className="question">Contact</p>
                <p className="deets">
                    <a href="mailto:anka@groundedminds.ca">anka@groundedminds.ca</a>
                </p>
            </section>
            <br/><br/>
            <section id="aboutBannermiddle">
                <div className="mb40 mt40 raise">
                    {/* <a className="booknow caps" href="/contact">Book A Session</a> */}
                    <a className="booknow caps" href="https://groundedmindstherapy.janeapp.com/#/staff_member/7" id="about-banner-cta" target="_blank">Book with Anka</a>
                </div>
            </section>
            <br/>
        </Layout>
    );
}

export default AboutAnkaKrivokuca;
