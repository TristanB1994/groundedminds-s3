import React from 'react';
import Head from 'next/head';

const AboutMoonsunJang = () => {
    const bannerLabel = "Meet Moonsun";
    const titleString = "Moonsun Jang | Grounded Minds Therapy";
    const descriptionString = "Moonsun Jang is a Registered Social Worker who specializes in anxiety disorders, OCD, PTSD, borderline personality disorder and eating disorders.";

    return (
        <>
            <Head>
                <title>{titleString}</title>
                <meta name="description" content={descriptionString} />

                <meta property="og:url" content="https://www.groundedminds.ca/moonsunjang" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content={titleString} />
                <meta property="og:description" content={descriptionString} />
                <meta property="og:image" content="https://www.groundedminds.ca/headshotm.png" />
                <meta property="og:image:alt" content="Moonsun Jang therapist specialized in anxiety, OCD, PTSD, eating disorders and borderline personality disorder" />
                <meta property="og:image:height" content="300" />
                <meta property="og:image:width" content="300" />
            </Head>
            <div>
                <p className="question">Moonsun Jang</p>
            </div>
            <section className="content">
                <div className="portrait-reverse">
                    <img alt="Therapist picture" id="MJ-SECTION" src="/headshotm.png" />
                    <div className="ownertexts">
                        <p id="ownertext">pronouns: she/they<br /><br />MSW, RSW | Psychotherapist</p>
                    </div>
                </div>
                <p className="question" style={{ width: 'fit-content', margin: 'auto' }}>SPECIALTIES</p>
                <ul className="aaa aaaL" id="ocdsubtypes" style={{ width: 'fit-content', margin: 'auto' }}>
                    <li>anxiety disorders</li>
                    <li>obsessive-compulsive (OCD) and related disorders</li>
                    <li>PTSD and trauma-related disorders</li>
                    <li>substance use and addictions</li>
                    <li>ADHD</li>
                    <li>eating disorders</li>
                    <li>borderline personality disorder (BPD)</li>
                    <li>stress and life changes</li>
                    <li>personal growth</li>
                    <li>relationship issues</li>
                </ul>
                <br />
            </section>
            <section className="content">
                <p className="pb10 aaa">
                    <br />I am passionate about supporting adults with anxiety, OCD, and PTSD. Together, we will explore your concerns, address your symptoms, and help you find relief. <br /><br />
                    We will work collaboratively to identify goals that matter to you and achieve powerful change through evidence-based techniques that align with your needs, goals, and strengths.
                </p>
                <p className="question">Moonsun's Approach</p>
                <p className="pb10 aaa">
                    You may be experiencing crippling anxiety, sticky intrusive thoughts, compulsions that you can't resist doing, or having trouble moving past a traumatic event. You can overcome the things that are keeping you stuck and move forward.<br /><br />
                    The way we view and deal with mental health challenges are influenced by so many factors including our own life experiences, family, culture, and religion. Guided by this understanding, I take an inclusive, culturally-humble, and trauma-informed approach to therapy.<br />
                </p>
                <p className="pb10 aaa">
                    I incorporate elements from the following evidence-based therapies in my practice: <em><span style={{ color: 'rgb(112, 145, 99)' }}>Cognitive Behavioural Therapy, Cognitive Processing Therapy, Dialectical Behaviour Therapy, Acceptance and Commitment Therapy, Exposure and Response Prevention, Narrative Therapy, Person-Centered Therapy, Solution-Focused Brief Therapy, Mindfulness-Based Therapy, and Motivational Interviewing.</span> </em>
                </p>
            </section>
            <section className="content">
                <p className="question">Education</p>
                <p className="pb10 aaa">
                    I am a Registered Social Worker (RSW) with the Ontario College of Social Workers and Social Service Workers (OCSWSSW). <br /><br />
                    I have a Master of Social Work Degree from Wilfrid Laurier University, an Advanced Diploma in Behavioural Science Technology from St. Lawrence College, and a Bachelor of Science Degree in Psychology and Sociology from Queen's University.
                </p>
                <p className="question">Availability</p>
                <p className="pb10 aaa">
                    Accepting new clients! Please send me an e-mail or click "Book with Moonsun" to schedule a complimentary consultation call. I also have some limited availability for sliding scale clients.
                </p>
                <p className="question">Contact</p>
                <p className="deets">
                    <a href="mailto:moonsun@groundedminds.ca">moonsun@groundedminds.ca</a>
                </p>
            </section>
            <br /><br />
            <section id="aboutBannermiddle">
                <div className="mb40 mt40 raise">
                    <a className="booknow caps" href="https://groundedmindstherapy.janeapp.com/#/staff_member/4" id="about-banner-cta" target="_blank" rel="noopener noreferrer">Book with Moonsun</a>
                </div>
            </section>
            <br />
        </>
    );
}

export default AboutMoonsunJang;

export async function getStaticProps() {
  return {
    props: {
      navOptions: { 
        isHome: false, 
        bannerLabel: "Meet Moonsun" 
      }
    }
  };
}
