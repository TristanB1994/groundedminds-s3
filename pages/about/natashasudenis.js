import React from 'react';
import SEO from '../../src/components/SEO';

const AboutNatashaSudenis = () => {
    const bannerLabel = "Meet Natasha";
    const titleString = "Natasha Sudenis | Grounded Minds Therapy";
    const descriptionString = "Natasha Sudenis is a Registered Social Worker who specializes in OCD, anxiety disorders, eating disorders, perfectionism, chronic illness.";

    return (
        <>
            <SEO
                title={titleString}
                description={descriptionString}
                image="https://www.groundedminds.ca/natasha.jpeg"
                imageAlt="Natasha Sudenis therapist specialized in anxiety, OCD, PTSD, eating disorders and borderline personality disorder"
            />
            <div>
                <p className="question">Natasha Sudenis</p>
            </div>
            <section className="content pb10">
                <div className="portrait-reverse">
                    <img alt="Therapist picture" id="NS-SECTION" src="/natasha.jpeg" />
                    <div className="ownertexts">
                        <p id="ownertext">pronouns: she/her<br /><br />MA | Registered Psychotherapist (Qualifying)</p>
                    </div>
                </div>
                <p className="question" style={{ width: 'fit-content', marginLeft: 'auto', marginRight: 'auto'}}>
                    SPECIALTIES
                </p>
                <ul className="aaa aaaL" id="ocdsubtypes" style={{ width: 'fit-content', margin: 'auto' }}>
                    <li>obsessive-compulsive disorder</li>
                    <li>worry and generalized anxiety</li>
                    <li>panic atacks and panic disorder</li>
                    <li>social anxiety</li>
                    <li>health anxiety</li>
                    <li>phobias</li>
                    <li>eating disorders</li>
                    <li>perfectionism and burnout</li>
                    <li>chronic pain and illness</li>
                </ul>
                <br />
            </section>
            {/* TODO */}
            <section className="content">
                <p className="question">Natasha's Approach</p>
                <p className="pb10 aaa">         
                    I help clients understand the mental loops that keep them caught—those persistent “what if” thoughts, urges to analyze, and rituals that bring short-term relief but strengthen anxiety over time. My approach emphasizes building psychological flexibility and self-trust, helping clients face uncertainty without being pulled back into old mental habits.
                </p>
                <p className="pb10 aaa">
                    My style is warm, optimistic, and direct. I connect easily with people and aim to create a space that encourages exploration, curiosity, and the discovery of new possibilities. 
                Together, we’ll look at what’s driving your current struggles while developing practical tools for meaningful change.
                </p>
                <p className="pb10 aaa">         
                    Therapy with me often involves:
                </p>
                <div className="pb10 specialtiesli">  
                    <ul className="aaa aaaL">                
                        <li>Examining the way your mind automatically interprets experiences and how these interpretations shape emotions and behaviour.</li>
                        <li>Noticing recurring patterns-in thoughts, relationships, or self-talk that may keep you feeling stuck.</li>
                        <li>Building tools to navigate difficult emotions and moments of stress, so you can respond rather than react.</li>
                        <li>Clarifying the personal meaning behind your goals, exploring why change matters to you and what it means to live in alignment with your values.</li>
                    </ul>
                </div>
                {/* <p className="pb10 aaa">         
                    Counselling is not about being fixed, it’s about realizing you were never broken to begin with
                </p> */}
                <p className="pb10 aaa">         
                    I draw on evidence-based approaches including <em><span style={{ color: 'rgb(112, 145, 99)' }}>Exposure and Response Prevention (ERP), Cognitive Behavioural Therapy (CBT), trauma-informed nervous-system-aware psychotherapy and Acceptance and Commitment Therapy (ACT)</span></em> to support symptom reduction and lasting change. With over a decade of experience in the mental health field, I’ve developed a deep focus on Obsessive-Compulsive Disorder (OCD), complex anxiety presentations, and eating disorders.
                </p>
            </section>
            <section className="content">
                <p className="question">Education</p>
                <p className='pb10 aaa'>
                    I am a Registered Psychotherapist (Qualifying) with the College of Registered Psychotherapists of Ontario (CRPO).
                </p> 
                <p className='pb10 aaa'>
                    I hold a Master of Arts in Counselling Psychology (MACP) and have advanced training in a variety of anxiety and OCD specific therapies including Exposure and Response Prevention (ERP).
                    I also have a graduate degree in Expressive Arts Therapy 
                </p>
                <p className="question">Availability</p>
                <p className="pb10 aaa">
                    Availability for new clients! Please send me an e-mail or click "Book with Natasha" to schedule an appointment. I also have some limited availability for sliding scale sessions.
                </p>
                <p className="question">Contact</p>
                <p className="deets">
                    <a href="mailto:natasha@groundedminds.ca">natasha@groundedminds.ca</a>
                </p>
            </section>
            <br /><br />
            <section id="aboutBannerBottom">
                <div className="mb40 mt40 raise">
                    <a className="booknow caps" href="https://groundedmindstherapy.janeapp.com/#/staff_member/11" id="about-banner-cta" target="_blank" rel="noopener noreferrer">Book with Natasha</a>
                </div>
            </section>
            <br />
        </>
    );
}

export default AboutNatashaSudenis;

export async function getStaticProps() {
  return {
    props: {
      navOptions: { 
        isHome: false, 
        bannerLabel: "Meet Natasha" 
      }
    }
  };
}
