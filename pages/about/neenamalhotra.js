import React from 'react';
import SEO from '../../src/components/SEO';

const AboutNeenaMalhotra = () => {
    const bannerLabel = "Meet Neena";
    const titleString = "Neena Malhotra | Grounded Minds Therapy";
    const descriptionString = "Neena Malhotra is a MSW, RSW, RP with over 25 years experience helping clients with OCD, anxiety disorders, depression, trauma, and more.";

    return (
        <>
            <SEO
                title={titleString}
                description={descriptionString}
                image="https://www.groundedminds.ca/neena_noshadow.jpeg"
                imageAlt="Neena Malhotra therapist specializing in OCD, anxiety disorders, depression, trauma, and PTSD"
            />
            <div>
                <p className="question">Neena Malhotra</p>
            </div>
            <section className="content">
                <div className="portrait">
                    <img alt="Therapist picture" id="NM-SECTION" src="/neena_noshadow.jpeg" />
                    <div className="ownertexts">
                        <p id="ownertext">
                            pronouns: she/her<br /><br />
                            MSW, RSW, RP
                        </p>
                    </div>
                </div>
                <p className="question" style={{ width: 'fit-content', marginLeft: 'auto', marginRight: 'auto' }}>SPECIALTIES:</p>
                <ul className="aaa aaaL" id="ocdsubtypes" style={{ width: 'fit-content', marginLeft: 'auto', marginRight: 'auto' }}>
                    <li>depression</li>
                    <li>anxiety disorders</li>
                    <li>phobias</li>
                    <li>panic disorder and panic attacks</li>
                    <li>OCD</li>
                    <li>BFRBs</li>
                    <li>trauma/PTSD</li>
                    <li>anger and emotion regulation</li>
                    <li>self esteem</li>
                    <li>perinatal concerns</li>
                    <li>grief and loss</li>
                </ul>
                <br />
            </section>
            <section className="content">
                <p className="question">Neena's Approach</p>
                <p className="pb10 aaa">
                    I am a compassionate and empathetic therapist that offers a collaborative approach to help you overcome struggles you may be currently experiencing in your life. Whether it is OCD, anxiety disorders, depression, grief/loss issues or trauma affecting your mood, or physical symptoms presenting in your body, I work jointly with you to gently challenge any current faulty belief system and behaviours.
                </p>
                <p className="pb10 aaa">
                    I have over 25 years experience as a clinical therapist using evidence based therapies like Cognitive Behaviour Therapy to reduce symptoms of anxiety, depression and Exposure and Response Prevention to help with OCD and Cognitive Processing Therapy to help with Post Traumatic Stress Disorder. I am an effective listener, but also give you specific tools and strategies to help you move forward in your life. I am a strong advocate for empowering my clients to live their lives to the fullest.
                </p>
            </section>
            <section className="content">
                {/* <p className="question">Education</p>
                <p className="pb10 aaa">
                    [Education details]<br />
                </p> */}
                <p className="question">Availability</p>
                <p className="pb10 aaa">Accepting new clients<br /></p>
                <p className="question">Contact</p>
                <p className="deets">
                    <a href="mailto:neena@groundedminds.ca">neena@groundedminds.ca</a>
                </p>
            </section>
            <section id="neenabanner">
                <div className="mb40 mt40 raise">
                    <a className="booknow caps"
                       href="https://groundedmindstherapy.janeapp.com/#/staff_member/12"
                       id="about-banner-cta" target="_blank" rel="noopener noreferrer">
                        Book with Neena
                    </a>
                </div>
            </section>
        </>
    );
}

export default AboutNeenaMalhotra;

export async function getStaticProps() {
  return {
    props: {
      navOptions: {
        isHome: false,
        bannerLabel: "Meet Neena"
      }
    }
  };
}
