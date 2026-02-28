import React from 'react';
import SEO from '../../src/components/SEO';

const AboutNeenaMalhotra = () => {
    const bannerLabel = "Meet Neena";
    const titleString = "Neena Malhotra | Grounded Minds Therapy";
    const descriptionString = "Neena Malhotra is a [credentials]...";

    return (
        <>
            <SEO
                title={titleString}
                description={descriptionString}
                image="https://www.groundedminds.ca/neena-profile.jpeg"
                imageAlt="Neena Malhotra [specialties]"
            />
            <div>
                <p className="question">Neena Malhotra</p>
            </div>
            <section className="content">
                <div className="portrait">
                    <img alt="Therapist picture" id="NM-SECTION" src="/neena-profile.jpeg" />
                    <div className="ownertexts">
                        <p id="ownertext">
                            pronouns: [pronouns]<br /><br />
                            [Credentials]
                        </p>
                    </div>
                </div>
                <p className="question">SPECIALTIES:</p>
                <ul className="aaa aaaL">
                    <li>[Specialty 1]</li>
                    <li>[Specialty 2]</li>
                    <li>[Specialty 3]</li>
                </ul>
            </section>
            <section className="content">
                <p className="question">Neena's Approach</p>
                <p className="pb10 aaa">
                    [Approach description]
                </p>
            </section>
            <section className="content">
                <p className="question">Education</p>
                <p className="pb10 aaa">
                    [Education details]<br />
                </p>
                <p className="question">Availability</p>
                <p className="pb10 aaa">[Availability status]<br /></p>
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
