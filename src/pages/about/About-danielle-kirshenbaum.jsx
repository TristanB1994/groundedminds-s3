import React from 'react';
import '../../assets/styles.css'; // Adjust the path as necessary
import Layout from '../../components/Layout';

const AboutDanielleKirshenbaum = () => {
    
    const bannerLabel = "Meet Daniel";

    return (
        <Layout navOptions={{ isHome: false, bannerLabel: bannerLabel }}>
            <div>
                <p className="question">Danielle Kirshenbaum</p>
            </div>
            <section className="content">
                <div className="portrait portrait-reverse">
                    <img alt="Therapist picture" id="DK-SECTION" src="/headshotdanielle.png" />
                    <div className="ownertexts">
                        <p id="ownertext">pronouns: she/her <br /><br /> MSW, RSW | Psychotherapist</p>
                    </div>
                </div>
                <p className="question" style={{ width: 'fit-content', marginLeft: 'auto', marginRight: 'auto' }}>SPECIALTIES</p>
                <ul className="aaa aaaL" id="ocdsubtypes" style={{ width: 'fit-content', marginLeft: 'auto', marginRight: 'auto' }}>
                    <li>anxiety disorders</li>
                    <li>obsessive-compulsive disorder (OCD)</li>
                    <li>perinatal and postpartum concerns</li>
                    <li>psychosis</li>
                    <li>bipolar disorder</li>
                    <li>depressive disorders</li>
                    <li>eating disorders + disordered eating</li>
                    <li>stress + life changes</li>
                    <li>relationship issues</li>
                    <li>personal growth</li>
                </ul>
                <br />
                <br />
            </section>
            <section className="content">
                <p className="pb10 aaa">
                    I am an empathetic, compassionate, down-to-earth therapist. Whether it is OCD, anxiety, depression, psychosis, or general life stressors affecting your mood and day-to-day functioning, I am here to figure it out with you. <br /><br /> I will collaboratively and non-judgmentally work with you to uncover your own strengths and employ them (as well as provide you with new tools) to overcome this tough period.
                </p>
                <p className="question">Danielle's Approach</p>
                <p className="pb10 aaa">
                    Through my years of working with individuals experiencing a wide spectrum of challenges, I have come to see that we, as humans, have incredible and unique strengths to overcome adversity - but there are times when intrusive negative thoughts are so loud, or life stressors are so plentiful - that it is very easy to feel completely overwhelmed and lost. You may even worry that these distressing feelings will last forever. Let's get you feeling like yourself again. <br /><br /> I come from a strengths-based perspective and very much tailor the tools and approach I use to the individual I am working with. This means that while we will no doubt utilize evidence-based approaches to guide us in our work together, my approach with you will very much be centered around your unique history, challenges, needs, and strengths.
                </p>
                <p className="pb10 aaa">
                    I incorporate elements from the following evidence-based therapies in my practice: <em><span style={{ color: 'rgb(112, 145, 99)' }}>Cognitive Behavioural Therapy, Dialectical Behaviour Therapy, Exposure and Response Prevention, Trauma-Informed Therapy and Mindfulness.</span></em>
                </p>
            </section>
            <section className="content">
                <p className="question">Education</p>
                <p className="pb10 aaa">
                    I am a Registered Social Worker (RSW) with the Ontario College of Social Workers and Social Service Workers (OCSWSSW). <br /><br />
                    I have a Master of Social Work Degree from York University and a Bachelor of Arts (B.A.) degree from Western University.
                </p>
                <p className="question">Availability</p>
                <p className="pb10 aaa">
                    Accepting new clients. Please send me an e-mail or click "Book with Danielle" to schedule an appointment.
                </p>
                <p className="question">Contact</p>
                <p className="deets">
                    <a href="mailto:danielle@groundedminds.ca">danielle@groundedminds.ca</a>
                </p>
            </section>
            <br /><br />
            <section id="aboutBannermid">
                <div className="mb40 mt40 raise">
                    <a className="booknow caps" href="https://groundedmindstherapy.janeapp.com/#/staff_member/6" id="about-banner-cta" target="_blank">Book with Danielle</a>
                </div>
            </section>
            <br />
        </Layout>
    );
}

export default AboutDanielleKirshenbaum;
