import React from 'react';
import Head from 'next/head';

const ServicesTrauma = () => {
    const bannerLabel = "Trauma Therapy";
    const titleString = "Therapy for Trauma and PTSD | Grounded Minds";
    const descriptionString = "Are you struggling to regain your life after a traumatic event? Therapy can help you process trauma, get un-stuck and move forward.";

    return (
        <>
            <Head>
                <title>{ titleString }</title>
                <meta name="description" content={ descriptionString } />

                <meta property="og:url" content="https://www.groundedminds.ca/trauma" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content={ titleString } />
                <meta property="og:description" content={ descriptionString } />
                <meta property="og:image" content="https://www.groundedminds.ca/trauma.jpeg" />
                <meta property="og:image:alt" content={ descriptionString } />
                <meta property="og:image:height" content="300" />
                <meta property="og:image:width" content="300" />
            </Head>
            <section className="content">
                <p className="pb10 aaa">
                    <br />Are you struggling to regain your life after a traumatic event? Therapy can help you process trauma, get un-stuck and move forward.
                    <br /><br />
                </p>
                <div className="serviceimg" id="serviceupperanxiety">
                    <img alt="Online therapy setting" src="/traumapic.jpeg" />
                </div>
                <div className="sidesplt">
                    <div className="pb30" id="consult">
                        <h3 className="sessions caps up">
                            Common Symptoms of
                            <br />
                            Post-Traumatic Stress Disorder (PTSD) Include:
                        </h3>
                        <section className="content">
                            <div className="pb10 specialtiesli">
                                <ul className="aaa aaaL">
                                    <li>nightmares or thoughts about the event(s) that feel intrusive</li>
                                    <li>you try not to think about what happened</li>
                                    <li>go out of your way to avoid people, places or situations that remind you of what happened</li>
                                    <li>you feel on guard or easily startled</li>
                                    <li>feel detached from other people or your surroundings</li>
                                    <li>feel upset or distressed when reminded of the trauma</li>
                                    <li>struggle with guilt or shame</li>
                                    <li>blaming yourself or others for what happened</li>
                                </ul>
                            </div>
                            <br />
                            <a className="booknow" href="https://groundedmindstherapy.janeapp.com/" target="_blank" rel="noopener noreferrer">
                                Sound familiar? We can help.
                            </a>
                            <br /><br />
                            <div>
                                <h3 className="caps sessions">
                                    What is trauma?
                                </h3>
                                <div>
                                    <p className="pb10 aaa">
                                        Trauma encompasses single events, multiple events, or events that were repeated and long-lasting. Traumatic events can leave our bodies flooded with thoughts and emotions that are difficult to process, and make it challenging for our nervous system to escape a state of fight, flight or freeze. Trauma includes experiences like war, assault, and car accidents. It also includes events such as childhood abuse or neglect. Post-traumatic stress disorder symptoms can develop from a wide range of events, including experiences where our lives are in immediate danger.
                                        <br /><br />
                                        After a distressing event occurs, it is normal to experience strong emotions. If these challenges persist, you may be struggling with post-traumatic stress disorder symptoms. Trauma can impact your sense of safety, trust, power, control, self-esteem, and intimacy. It can harm your overall mental health, relationships and your ability to function day to day.
                                    </p>
                                </div>
                                <br />
                                <div className="serviceimg" id="serviceupperanxietyvs">
                                    <img alt="Online therapy setting" src="/trauma.jpeg" />
                                </div>
                            </div>
                        </section>
                        <div className="pb30" id="consult">
                            <h3 className="sessions caps up">
                                Trauma Treatment
                            </h3>
                            <p className="pb10 aaa">
                                Our experienced therapists will start with a detailed assessment to better understand how trauma has affected your life. Using a variety of evidence-based techniques, we will help you recover from the symptoms you're experiencing. This usually involves learning how to calm your nervous system, teaching you to challenge and change any unhelpful thoughts you have about the trauma and supporting you in building a life worth living.
                            </p>
                            <h3 className="sessions caps up">
                                Cognitive Processing Therapy (CPT)
                                <br />for Post-Traumatic Stress Disorder (PTSD) Symptoms
                            </h3>
                            <p className="pb10 aaa">
                                One of the most effective treatments for PTSD is Cognitive Processing Therapy (CPT). CPT is a trauma-focused talk therapy. It teaches you to identify, examine, and change negative thoughts. We can't directly change how we feel. Think about this: if someone told you to "just feel better" you'd probably laugh- it's not an effective strategy! By changing our thoughts, we can actually improve how we feel (and research backs this up). CPT is an evidence-based treatment for PTSD. To read more about CPT, click <a className="rate" href="https://cptforptsd.com/about-cpt/" target="_blank" rel="noopener noreferrer">here.</a>
                                <br /><br />
                                Moonsun Jang, Anka Krivokuca, Rafeya Shami and Angie Blandford are trained CPT providers. Anka also offers Prolonged Exposure (PE) Therapy for PTSD and Lianne offers Eye Movement Desensitization and Reprocessing (EMDR) Therapy for PTSD. All of our therapists use trauma-informed practices to support you in healing from difficult experiences. During the assessment, you and your therapist will talk about what approach is the best fit for you.
                            </p>
                            <br />
                            <a className="booknow" href="https://groundedmindstherapy.janeapp.com/" target="_blank" rel="noopener noreferrer">
                                ONLINE BOOKING
                            </a>
                        </div>
                    </div>
                    <div className="serviceimg" id="serviceupper">
                        <img alt="Online therapy setting" src="/faqspic.jpeg" />
                    </div>
                    <div className="serviceimg pb20" id="serviceupper3"></div>
                </div>
            </section>
        </>
    );
}

export default ServicesTrauma;

export async function getServerSideProps() {
  return {
    props: {
      navOptions: { 
        isHome: false, 
        bannerLabel: "Trauma Therapy" 
      }
    }
  };
}
