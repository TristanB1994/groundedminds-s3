import React from 'react';
import SEO from '../../src/components/SEO';

const AboutLianneSaxon = () => {
    const bannerLabel = "Meet Lianne";
    const titleString = "Lianne Saxon | Grounded Minds Therapy";
    const descriptionString = "Lianne Saxon is a Registered Psychotherapist (Qualifying) who specializes in anxiety disorders, OCD, trauma, depression and grief.";

    return (
        <>
            <SEO
                title={titleString}
                description={descriptionString}
                image="https://www.groundedminds.ca/lianne-profile.jpeg"
                imageAlt="Lianne Saxon - Anxiety, OCD, Trauma, Depression and Grief Therapist"
            />
            <div>
                <p className="question">Lianne Saxon</p>
            </div>
            <section className="content">
                <div className="portrait">
                    <img alt="Therapist picture" id="LS-SECTION" src="/lianne-profile.jpeg" />
                    <div className="ownertexts">
                        <p id="ownertext">
                            pronouns: she/her<br /><br />
                            MA | Registered Psychotherapist (Qualifying)
                        </p>
                    </div>
                </div>
                {/* SPECIALTIES */}
                <p className="question" style={{ width: 'fit-content', marginLeft: 'auto', marginRight: 'auto' }}>
                    SPECIALTIES:
                </p>
                <ul className="aaa aaaL" id="ocdsubtypes" style={{ width: 'fit-content', marginLeft: 'auto', marginRight: 'auto' }}>
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
                <br />
                {/* Introduction */}
                <p className='pb10 aaa'>
                    I'm an approachable, compassionate, non-judgmental therapist with a passion for sharing my knowledge and helping people. It would be an honour to work with you on your mental health and wellbeing. I understand how distressing mental health issues can be, and I'm eager to support you so that you're not dealing with them alone. 
                </p>
            </section>

            {/* Description */}
            <section className="content">
                <p className="question">        
                    Lianne's Approach      
                </p>
                <p className='pb10 aaa'>
                    I have experience and a keen interest in helping adults with anxiety disorders, OCD, trauma, depression and grief. Worries, intrusive thoughts, compulsions and trauma often include an element of shame, especially if they include "taboo" themes, and I'm comfortable discussing them. My approach is to respectfully listen, validate and normalize your experiences, and then figure out what we can do to address them.                        
                </p>
                <p className='pb10 aaa'>
                    Together, we'll use evidence-based therapies to work towards your goals, including reducing anxiety symptoms, managing OCD, and processing trauma. I listen but I also take an active role in sessions, gently challenging you in a way that encourages growth and learning.                            
                </p>
                <p className="pb10 aaa">
                    I incorporate elements from the following evidence-based therapies in my practice: <em><span style={{ color: 'rgb(112, 145, 99)' }}>EMDR, ERP, I-CBT, CBT, ACT, self-compassion, CPT, inner child work, EFT Tapping, grief counselling, ADHD coaching.</span></em>
                </p>
            </section>
            <section className="content">
                <p className="question">Availability</p>
                <p className="pb10 aaa">
                    Accepting new clients! Please send me an e-mail or click "Book with Lianne" to schedule a complimentary consultation call. I also have some limited availability for sliding scale clients.
                    <br />
                </p>
                <p className="question">Contact</p>
                <p className="deets">
                    <a href="mailto:lianne@groundedminds.ca">lianne@groundedminds.ca</a> <br />
                </p>
                <br />
            </section>
            <section id="aboutbanner">
                <div className="mb40 mt40 raise">
                    <a className="booknow caps" href="https://groundedmindstherapy.janeapp.com/#/staff_member/10" id="about-banner-cta" target="_blank" rel="noopener noreferrer">Book with Lianne</a>
                </div>
            </section>
            <br />
        </>
    );
}

export default AboutLianneSaxon;

export async function getStaticProps() {
  return {
    props: {
      navOptions: { 
        isHome: false, 
        bannerLabel: "Meet Lianne" 
      }
    }
  };
}
