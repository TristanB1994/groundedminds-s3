import React from 'react';
import Head from 'next/head';

const AboutAngieBlandford = () => {
    const bannerLabel = "Meet Angie";
    const titleString = "Angie Blandford | Grounded Minds Therapy";
    const descriptionString = "Angie Blandford is a Registered Social Worker who specializes in anxiety disorders, OCD and PTSD.";

    return (
        <>
            <Head>
                <title>{titleString}</title>
                <meta name="description" content={descriptionString} />

                <meta property="og:url" content="https://www.groundedminds.ca/angieblandford" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content={titleString} />
                <meta property="og:description" content={descriptionString} />
                <meta property="og:image" content="https://www.groundedminds.ca/portrait.jpeg" />
                <meta property="og:image:alt" content="Angie Blandford OCD, PTSD and anxiety Specialist" />
                <meta property="og:image:height" content="300" />
                <meta property="og:image:width" content="300" />
            </Head>
            <div>
                <p className="question">Angie Blandford</p>
            </div>
            <section className="content">
                <div className="portrait">
                    <img alt="Therapist picture" id="ALB-SECTION" src="/portrait.jpeg" />
                    <div className="ownertexts">
                        <p id="ownertext">
                            pronouns: she/her<br /><br />
                            MSW, RSW | Founder of Grounded Minds
                        </p>
                    </div>
                </div>
                <p className="question" style={{ width: 'fit-content', marginLeft: 'auto', marginRight: 'auto' }}>
                    SPECIALTIES:
                </p>
                <ul className="aaa aaaL" id="ocdsubtypes" style={{ width: 'fit-content', marginLeft: 'auto', marginRight: 'auto' }}>
                    <li>generalized anxiety disorder</li>
                    <li>social anxiety disorder</li>
                    <li>agoraphobia</li>
                    <li>specific fears and phobias</li>
                    <li>emetophobia</li>
                    <li>obsessive-compulsive disorder (OCD)</li>
                    <li>depression</li>
                    <li>trauma and post-traumatic stress disorder (PTSD)</li>
                    <li>sleep issues and insomnia</li>
                    <li>stress and burnout</li>
                    <li>anger management and emotion regulation</li>
                </ul>
                <br /><br />
                <p className="pb10 aaa">
                    My goal is to provide a space where you can feel seen, heard and understood. Together, we will explore your symptoms and help you make sense of them. I'll introduce you to a variety of coping strategies that you can use in moments of anxiety as well as your day to day life. <br /><br />
                    Anxiety and OCD symptoms are awful, but you don't have to go through them alone. Over time, the tools you learn in therapy can help you feel more confident and less afraid. I love being a therapist because I get to help people <i>just like you</i> learn how to manage distressing emotions like anxiety.
                </p>
            </section>
            <section className="content">
                <p className="question">Angie's Approach</p>
                <p className="pb10 aaa">
                    I am a supportive and compassionate therapist. I enjoy helping people identify their needs, better understand their emotions, and learn meaningful coping strategies in a warm, easy-going environment.
                </p>
                <p className="pb10 aaa">
                    Working authentically and flexibly are some of my core values as a therapist. I don't believe there is a one-size-fits-all approach to therapy. What works best for you might not work best for someone else. Some folks thrive when doing this work in a structured, guided way. Other people prefer that we take a more exploratory, conversational approach. Some enjoy a mixture of both solution-focused and supportive counselling. <br /><br />
                    You are the expert on you. Shortly after beginning therapy, you'll likely get a sense of what's helpful and what's not so helpful. I value your input and strive to tailor my approach to best support you.
                </p>
                <p className="pb10 aaa">
                    I incorporate elements from the following evidence-based therapies in my practice: <em><span style={{ color: 'rgb(112, 145, 99)' }}>Cognitive Behaviour Therapy, Cognitive Processing Therapy, Exposure and Response Prevention, Acceptance and Commitment Therapy, Person-Centered Therapy, Somatic Therapy, Mindfulness and Motivational Interviewing.</span></em>
                </p>
            </section>
            <section className="content">
                <p className="question">Education</p>
                <p className="pb10 aaa">
                    I am a Registered Social Worker (RSW) with the <br />
                    Ontario College of Social Workers and Social Service Workers (OCSWSSW).
                </p>
                <p className="pb10 aaa">
                    I have a Master of Social Work (MSW) degree from the University of Toronto and a Bachelor of Science (BSc) degree in Psychology: Brain and Cognition from the University of Guelph.
                </p>
                <p className="question">Availability</p>
                <p className="pb10 aaa">Caseload is full.<br /></p>
                <p className="question">Contact</p>
                <p className="deets">
                    <a href="mailto:angie@groundedminds.ca">angie@groundedminds.ca</a> <br />
                    <a href="tel:2892126486">289-212-6486</a>
                </p>
                <br />
            </section>
            <section id="aboutbanner">
                <div className="mb40 mt40 raise">
                    <a className="booknow caps" href="https://groundedmindstherapy.janeapp.com/#/staff_member/1" id="about-banner-cta" target="_blank" rel="noopener noreferrer">Book with Angie</a>
                </div>
            </section>
            <br />
        </>
    );
}

export default AboutAngieBlandford;

export async function getServerSideProps() {
  return {
    props: {
      navOptions: { 
        isHome: false, 
        bannerLabel: "Meet Angie" 
      }
    }
  };
}
