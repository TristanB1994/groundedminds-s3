import React from 'react';
// import '../assets/styles.css'; // Adjust the path as necessary

const MjangDetails = () => {
    return (
        <>
            <section className="content">
                <br />
                <div className="portrait team_portrait">
                    <img alt="Therapist picture" id="MJ-SECTION" src="/headshotmj.jpeg" />
                    <div className="ownertexts">
                        {/* <p id="lilabout" className="fancy"></p> */}
                        <p className="fancy">
                            <br />
                            Moonsun Jang<span id="bigabout"><br /></span>
                        </p>
                        <p id="ownertext">
                            pronouns: she/they<br /><br />
                            MSW, RSW | Psychotherapist
                        </p>
                    </div>
                </div>
                <section className="content">
                    <p className="pb10 aaa">
                        <br />
                        I am passionate about supporting adults with anxiety, OCD, and PTSD. Together, we will explore your concerns, address your symptoms, and help you find relief.
                        <br /><br />
                        We will work collaboratively to identify goals that matter to you and achieve powerful change through evidence-based techniques that align with your needs, goals, and strengths.
                    </p>
                    <p className="question">
                        Moonsun's Approach
                    </p>
                    <p className="pb10 aaa">
                        You may be experiencing crippling anxiety, sticky intrusive thoughts, compulsions that you can't resist doing, or having trouble moving past a traumatic event. You can overcome the things that are keeping you stuck and move forward.
                        <br /><br />
                        The way we view and deal with mental health challenges are influenced by so many factors including our own life experiences, family, culture, and religion. Guided by this understanding, I take an inclusive, culturally-humble, and trauma-informed approach to therapy.
                        <br />
                    </p>
                    <p className="pb10 aaa">
                        I incorporate elements from the following evidence-based therapies in my practice: <em><span style="color: rgb(112, 145, 99);">Cognitive Behavioural Therapy, Cognitive Processing Therapy, Dialectical Behaviour Therapy, Acceptance and Commitment Therapy, Exposure and Response Prevention, Narrative Therapy, Person-Centered Therapy, Solution-Focused Brief Therapy, Mindfulness-Based Therapy, and Motivational Interviewing.</span></em>
                    </p>
                </section>
                <p className="question">
                    Specialties
                </p>
                <div className="pb10 specialtiesli">
                    <ul className="aaa aaaL">
                        <li>obsessive-compulsive and related disorders</li>
                        <li>anxiety disorders</li>
                        <li>PTSD and trauma-related disorders</li>
                        <li>substances and addictions</li>
                        <li>ADHD</li>
                        <li>eating disorders</li>
                        <li>borderline personality disorder</li>
                        <li>stress and life changes</li>
                        <li>personal growth and relationship concerns</li>
                    </ul>
                </div>
            </section>
            <section className="content">
                <p className="question">
                    Education
                </p>
                <p className="pb10 aaa">
                    I am a Registered Social Worker (RSW) with the Ontario College of Social Workers and Social Service Workers (OCSWSSW).
                    <br /><br />
                    I have a Master of Social Work Degree from Wilfrid Laurier University, an Advanced Diploma in Behavioural Science Technology from St. Lawrence College, and a Bachelor of Science Degree in Psychology and Sociology from Queen's University.
                </p>
                <p className="question">
                    Availability
                </p>
                <p className="pb10 aaa">
                    Accepting new clients! Please send me an e-mail or click "Book with Moonsun" to schedule a complimentary consultation call. I also have some limited availability for sliding scale clients.
                </p>
                <p className="question">
                    Contact
                </p>
                <p className="deets">
                    <a href="mailto:moonsun@groundedminds.ca">moonsun@groundedminds.ca</a>
                </p>
            </section>
            <br /><br />
            <section id="aboutBannermiddle">
                <div className="mb40 mt40 raise">
                    {/* <a className="booknow caps" href="/contact">Book A Session</a> */}
                    <a className="booknow caps" href="https://groundedmindstherapy.janeapp.com/#/staff_member/4" id="about-banner-cta" target="_blank">Book with Moonsun</a>
                </div>
            </section>
        </>
    );
}

// export default MjangDetails;