import React from 'react';
import Layout from '../components/Layout';
import { Helmet } from 'react-helmet';

const FAQ = () => {

  const bannerText = "FAQ";
  const titleString = "FAQ | Grounded Minds Therapy";
  const descriptionString = "Discover answers to commonly asked questions. Have a question that’s not answered here? Reach out today.";

  return (
    <>
        <Helmet>
            <title>{titleString}</title>
            <meta name="description" content={descriptionString} />

            <meta property="og:url" content="https://www.groundedminds.ca/faq" />
            <meta property="og:type" content="website" />
            <meta property="og:title" content={ titleString } />
            <meta property="og:description" content={descriptionString} />
            <meta property="og:image" content="https://www.groundedminds.ca/static/assets/consultation.jpeg" />
            <meta property="og:image:alt" content={descriptionString} />
            <meta property="og:image:height" content="300" />
            <meta property="og:image:width" content="300" />
        </Helmet>
        <Layout navOptions={{ isHome: false, bannerLabel: bannerText }}>
            <section className="content">
                <p className="question">
                    I'm new to therapy, what can I expect?
                </p>
                <p className="answer">
                    After your first session is booked, you will receive a link to review and complete our intake paperwork. At your first appointment, your therapist will spend time getting to know you and the concerns that are bringing you into therapy. There's absolutely no pressure—it’s okay if you don't know what to say or what to talk about. Your therapist will answer any questions you have, support you in developing goals for therapy, and start discussing a plan to tackle your concerns. It's normal to feel nervous, and your therapist will do their best to make sure you feel as comfortable as possible as you get to know each other.
                </p>
                <br/>
                <p className="question">
                    Is virtual therapy a good fit for me?
                </p>
                <p className="answer">
                    Virtual therapy has so many benefits and provides the same level of care you would receive during an in-person session. Researchers have looked into this and studies show that virtual therapy is just as effective as in-person therapy.
                </p>
                <p className="answer">
                    Although it is a great option for most people, it is not an appropriate substitute for face-to-face therapy in every situation or for every person. If you're easily frustrated by technology issues or don't have a private space to engage in virtual appointments, it may not be the best option for you. If you're not sure it's right for you, please schedule a free consultation and we can discuss your individual situation.
                </p>
                <br/>
                <p className="question">
                    What are some of the advantages or benefits of virtual therapy?
                </p>
                <p className="answer">
                    Virtual therapy is often much more accessible! It can remove some of the traditional barriers to therapy including transportation, parking fees, long commutes, childcare, scheduling issues, anxiety about leaving your home or meeting with a therapist, and a lack of services in your community. It is also a good option for those who may want or need to stay home, or simply feel more comfortable meeting with a therapist virtually.
                    <br/><br/>
                    If you're doing exposure therapy, meeting with your therapist virtually also allows them to be in your environment with you. This is especially helpful when you're working on exposure exercises that could not be done in a traditional office setting (for example, obsessions and/or compulsions involving specific aspects of your home).
                </p>
                <br/>
                <p className="question">
                    Generally, who is suitable for virtual therapy with Grounded Minds?
                </p>
                <p className="answer">
                    Grounded Minds provides individual counselling and psychotherapy to teens and adults who reside in Ontario.
                </p>
                <p className="answer">
                    You need: a private space to connect for sessions, an e-mail address, and either a telephone or computer to engage in virtual therapy.
                </p>
                <br/>
                <p className="question">
                    What are some of the disadvantages or risks of virtual therapy?
                </p>
                <p className="answer">
                    There may be interruptions in service or other technology-related issues. There may also be increased risks to your privacy due to the nature of technology. Additionally, misinterpretations may occur when accessing any form of therapy. This may be more likely to occur in telephone or message-based therapy because these formats do not allow for body language cues. If this is a concern for you, we encourage you to seek out video or in-person sessions.
                </p>
                <br/>
                <p className="question">
                    Generally, who is not suitable for virtual therapy with Grounded Minds?
                </p>
                <p className="answer">
                    Grounded Minds does not offer couples or family counselling. We also do not offer services for children.
                    <br/><br/>
                    Grounded Minds does not provide crisis services and as such, cannot provide immediate response to crisis situations. If you are experiencing thoughts of hurting yourself or others, if you are at risk of domestic violence, if you are planning to disclose trauma or abuse for the first time, or you are experiencing a significant worsening of mental health symptoms or psychosis, virtual therapy may not be the best fit for you.
                </p>
                <p className="answer">
                    These problems are generally not suitable for virtual therapy because they may require a greater level of care, or more immediate care than virtual therapy can provide. If you feel that this applies to you but would like to pursue virtual therapy, please schedule a consultation and we can discuss your situation.
                </p>
                <br/>
                <p className="question">
                    Will therapy sessions be covered by my extended health insurance plan?
                </p>
                <p className="answer">
                    Many benefit plans cover psychotherapy and counselling services provided by a therapist with a Masters of Social Work (MSW) or Master of Arts in Counselling Psychology (MACP) degree. Please contact your insurance provider to confirm coverage. Grounded Minds does not offer direct billing, but receipts will be provided for you to submit to your insurance.
                </p>
                <br/>
                <p className="question">
                    Is payment complicated?
                </p>
                <p className="answer">
                    Not at all. Accepted forms of payment include credit card and e-transfer. If you choose to pay by credit card, your therapist will securely store your preferred card on file and charge the session fee at each appointment. If you choose to pay by e-transfer, you may send the e-transfer to <u>hello@groundedminds.ca</u> prior to your session. You will receive a receipt following the appointment. This will ease the payment process and allow us to focus on what's important—you!
                </p>
                <br/>
                <p className="question">
                    Do you offer lower cost or "sliding scale" services?
                </p>
                <p className="answer">
                    The therapists at Grounded Minds are committed to offering therapy services that are accessible and affordable. We often offer "sliding scale" fees to help our clients access therapy. If this is something you're interested in, please contact us to see if any of our therapists have availability to offer a reduced fee.
                </p>
                <br/><br/><br/>
                <p className="caps">
                    <span style={{ color: "rgb(112, 145, 99)", fontSize: "20px" }}>
                        Have a question that's not answered here? Let's chat.
                    </span>
                </p>
                <br/>
            </section>
            <div id="anotherbanner">
                <div className="banner">
                    <p id="pp">
                        <a className="homebanner3" href="/contact">
                            Get in Touch
                        </a>
                    </p>
                </div>
                <br/><br/>
            </div>
        </Layout>
    </>
  );
};

export default FAQ;