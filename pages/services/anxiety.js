import React from 'react';
import Head from 'next/head';

const ServicesAnxiety = () => {
    const bannerLabel = "Anxiety";
    const titleString = "Therapy for Anxiety | Grounded Minds";
    const descriptionString = "Discover relief from anxiety with Grounded Minds. Our therapists can help you learn how to manage and overcome anxiety.";

    return (
        <>
            <Head>
                <title>{ titleString }</title>
                <meta name="description" content={ descriptionString } />
                <meta property="og:url" content="https://www.groundedminds.ca/anxiety" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content={ titleString } />
                <meta property="og:description" content={ descriptionString } />
                <meta property="og:image" content="https://www.groundedminds.ca/anxiety-photo.jpeg" />
                <meta property="og:image:alt" content={ descriptionString } />
                <meta property="og:image:height" content="300" />
                <meta property="og:image:width" content="300" />
            </Head>
            <section className="content">
                <p className="pb10 aaa">
                    <br />
                    We have all experienced anxiety- the butterflies, sweating, heart pounding, difficulty thinking. Maybe you feel anxious when you meet new people, travel somewhere new, or have to give a presentation at work. Some anxiety and worry is a natural part of life.
                    <br /><br />
                    But what if you feel anxious <span style={{ color: "rgb(158, 187, 145)" }}>way more</span> than "sometimes?" What if you feel anxious so often and so intensely that it gets in the way and makes life miserable? Anxiety becomes problematic when it is persistent or debilitating.
                    <br /><br />
                    We work with folks struggling with anxiety every day. You don't have to live with unmanageable levels of fear and discomfort- we can help you learn how to manage anxiety so that you feel calmer and more grounded. Anxiety disorders are treatable and there are several effective, evidence-based therapies we can use to support you.
                    <br /><br />
                </p>
                <div className="serviceimg" id="serviceupperanxiety">
                    <img alt="Online therapy setting" src="/anxiety-photo.jpeg" />
                </div>
                <div className="sidesplt">
                    <div className="pb30" id="consult">
                        <h3 className="sessions caps up">
                            Signs That Anxiety May Be A Problem:
                        </h3>
                        <section className="content">
                            <div className="pb10 specialtiesli">
                                <ul className="aaa aaaL">
                                    <li>you often feel anxious or on edge</li>
                                    <li>you find it hard to stop worrying</li>
                                    <li>you're constantly thinking about worst-case scenarios</li>
                                    <li>you feel weighed down by "what ifs?"</li>
                                    <li>you fear or dread certain things or experiences</li>
                                    <li>you procrastinate or avoid things</li>
                                    <li>you experience physical symptoms like difficulty breathing, sweating or a racing heart</li>
                                    <li>worry or anxiety affects your daily life</li>
                                    <li>you struggle to fall asleep or stay asleep</li>
                                    <li>you have anxiety or panic attacks</li>
                                </ul>
                            </div>
                            <br />
                            <a className="booknow" href="https://groundedmindstherapy.janeapp.com/" target="_blank" rel="noopener noreferrer">
                                BOOK A FREE CONSULTATION CALL
                            </a>
                            <br /><br />
                            <div>
                                <h3 className="caps sessions">
                                    What is anxiety?
                                </h3>
                                <div>
                                    <p className="pb10 aaa">
                                        Anxiety is our body's natural alarm system, and it's incredibly useful when it functions properly. Our brains are pre-programmed to sound an alarm when threatened. We experience that alarm as anxiety. To protect us from danger, our body prepares us to fight, flight, or freeze. This biological function helps us react quickly and keeps us safe. If we never experienced anxiety or fear, we wouldn't be able to react swiftly in the face of danger.
                                        <br /><br />
                                        <span style={{ color: "rgb(158, 187, 145)" }}>Anxiety disorders occur when the fight or flight system is overly reactive or sensitive.</span>
                                        <br /><br />
                                        We don't need to get rid of anxiety entirely (and wouldn't want to!), but it's not helpful for your stress response system to go off when there is no actual threat. If your body is sending you false alarms left and right, you probably feel restless, jumpy, on edge, overwhelmed and exhausted. We need to kick anxiety out of the driver's seat. Our experienced anxiety therapists can help you learn how to calm your nervous system when it misfires. Over time, we can work together to re-wire your fight or flight system so that it's only sounding the alarm when it really needs to.
                                        <br /><br />
                                    </p>
                                </div>
                                <br />
                                <div className="serviceimg" id="serviceupperanxietyvs">
                                    <img alt="Online therapy setting" src="/anx_vs_anxd.png" />
                                </div>
                            </div>
                        </section>
                        <div className="pb30" id="consult">
                            <h3 className="sessions caps up">
                                Anxiety Treatment
                            </h3>
                            <p className="pb10 aaa">
                                Our experienced therapists will start with a detailed assessment to better understand how anxiety is affecting your life. Using a variety of evidence-based therapies, we will help you learn how to manage and overcome anxiety. This usually involves calming your nervous system, learning how to manage distressing emotions, slowly facing your fears, re-wiring anxious thinking, reducing worry, and supporting you in building a life that is in line with your values.
                            </p>
                            <h3 className="sessions caps up">
                                Cognitive Behavioural Therapy (CBT) for Anxiety
                            </h3>
                            <p className="pb10 aaa">
                                One of the most effective treatments for anxiety disorders is Cognitive Behavioural Therapy (CBT). In CBT, we'll break down anxiety into more manageable parts. This includes identifying links between triggering situations, feelings, thoughts and behaviours.
                                <br /><br />
                                Often anxiety involves unhelpful behaviours like avoidance and negative thoughts such as jumping to worst-case scenarios. CBT addresses these symptoms by slowly helping you face feared situations, building your confidence and teaching you how to challenge your worries.
                                <br /><br />
                                Our therapists are also trained in other evidence-based therapies for anxiety. During the assessment, you and your therapist will talk about what approach is the best fit for you.
                            </p>
                            <br />
                            <a className="booknow" href="https://groundedmindstherapy.janeapp.com/" target="_blank" rel="noopener noreferrer">
                                GET STARTED TODAY
                            </a>
                        </div>
                        <div className="sidesplt">
                            <div className="pb30" id="consult">
                                <h3 className="sessions caps up">
                                    What You Could Expect After Anxiety Treatment:
                                </h3>
                                <section className="content">
                                    <div className="pb10 specialtiesli">
                                        <ul className="aaa aaaL">
                                            <li>feel calmer and more grounded</li>
                                            <li>less time spent worrying</li>
                                            <li>worries feel more manageable and less intense</li>
                                            <li>more confidence in your ability to cope with anxiety-provoking situations</li>
                                            <li>more energy</li>
                                            <li>better sleep</li>
                                            <li>you don't experience as many physical symptoms like muscle tension or difficulty breathing</li>
                                            <li>you are able to do the things you used to avoid</li>
                                            <li>overall improvements in your mood and relationships</li>
                                        </ul>
                                    </div>
                                </section>
                            </div>
                            <div className="serviceimg" id="serviceupper">
                                <img alt="Online therapy setting" src="/contact_banner.jpg" />
                            </div>
                            <div className="serviceimg pb20" id="serviceupper3"></div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default ServicesAnxiety;

export async function getStaticProps() {
  return {
    props: {
      navOptions: { 
        isHome: false, 
        bannerLabel: "Anxiety" 
      }
    }
  };
}
