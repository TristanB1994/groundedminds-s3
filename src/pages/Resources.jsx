import React from 'react';
import '../assets/team.css';
import '../assets/styles.css';
import Layout from '../components/Layout';
import CenteredRow from '../components/CenteredRow';
import { Helmet } from 'react-helmet';

function Resources() {

  const bannerLabel = 'Resources';
  const titleString = 'Resources | Grounded Minds Therapy';
  const descriptionString = 'Explore free services and affordable therapy options. Get support from Canadian helplines and access mental health services. Your mental well-being matters.';

  return (
    <>
      <Helmet>
        <meta property="og:url" content="https://www.groundedminds.ca/resources" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={ titleString } />
        <meta property="og:description" content={ descriptionString } />
        <meta property="og:image" content="https://www.groundedminds.ca/static/assets/eucs.jpeg" />
        <meta property="og:image:alt" content={ descriptionString } />
        <meta property="og:image:height" content="300" />
        <meta property="og:image:width" content="300" />
      </Helmet>
      <Layout navOptions={{ isHome: false, bannerLabel: 'Resources' }}>

        <main>

          <section className="question">
            Crisis + Distress Resources
          </section>

          <section className="availability">
            <p>
              Canada's Suicide Crisis Hotline: 
            </p>
            <br />
            <CenteredRow>
              <p key="1">Call or Text 988 |&nbsp;</p>
              <a key="2" target="_blank" rel="noopener noreferrer" className="rate" href="https://988.ca">www.988.ca</a>
            </CenteredRow>
            <br />
            <br />
            <p>
              Distress and Crisis Ontario:
            </p>
            <br />
            <CenteredRow>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="rate"
                href="http://www.dcontario.org"
              >
                www.dcontario.org
              </a>          
            </CenteredRow>
            <br />
            <br />
            <p>
              Assaulted Women's Helpline:
            </p>
            <br />
            
            <CenteredRow>
              <p>1-866-863-0511 |&nbsp;</p><a target="_blank" rel="noopener noreferrer" className="rate" href="https://www.awhl.org/index.html">www.awhl.org</a>
            </CenteredRow>
            <br />
            <br />
            <p>Seniors Safety Line:</p>
            <p>1-866-299-1011</p>
            <br />
            <p>Hope for Wellness Help Line <i>(for all Indigenous peoples)</i>:</p>
            <p>1-855-242-3310</p>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="rate"
              href="https://hopeforwellness.ca/index.html"
            >
              www.hopeforwellness.ca
            </a>
            <br />
            <br />
            <p>Good2Talk Helpline <i>(for post-secondary students)</i>:</p>
            <p>1-866-925-5454 or text GOOD2TALKON to 686868</p>
            <br />
            <br />
            <p>Kids Help Phone:</p>
            <p>1-800-668-6868 or text CONNECT to 686868</p>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="rate"
              href="https://kidshelpphone.ca/"
            >
              www.kidshelpphone.ca
            </a>
          </section>

          <section className="question">Free Resources</section>
          <section className="availability">
            <p>
              ConnexOntario <i>(discover services in Ontario)</i>:<br />1-866-531-2600
            </p>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="rate"
              href="https://www.connexontario.ca"
            >
              www.connexontario.ca
            </a>
            .
            <br />
            <br />
            <p>BounceBack <i>(guided self-help for anxiety + depression)</i>:</p>
            <p>1-866-345-0224 or{' '}
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="rate"
              href="https://bouncebackontario.ca/"
            >
              www.bouncebackontario.ca
            </a>
            </p>
            <br />
            <p>Ontario Structured Psychotherapy Program (OSP):</p>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="rate"
              href="https://www.waypointcentre.ca/programs_and_services/ontario_structured_psychotherapy"
            >
              Waypoint Centre (Simcoe Muskoka)
            </a>{' '}
            or{' '}
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="rate"
              href="https://www.theroyal.ca/osp"
            >
              The Royal (Ottawa Area)
            </a>{' '}
            or{' '}
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="rate"
              href="https://www.camh.ca/en/your-care/programs-and-services/ontario-structured-psychotherapy-osp-program"
            >
              CAMH (GTA)
            </a>{' '}
            or{' '}
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="rate"
              href="https://www.ontarioshores.ca/services/ontario-structured-psychotherapy-program"
            >
              Ontario Shores (Whitby Area)
            </a>
            <br />
            <br />
            <p>Canadian Mental Health Association (CMHA):</p>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="rate"
              href="https://cmha.ca/find-your-cmha"
            >
              wwww.cmha.ca/find-your-cmha
            </a>
            .
            <br />
            <br />
            <p>LGBT Youthline Ontario <i>(peer support for LGBTQ2S+ young people)</i>:</p>
            <p>647-694-4275 or{' '}
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="rate"
              href="https://www.youthline.ca/"
            >
              www.youthline.ca
            </a>
            </p>
          </section>

          <section className="question">Low Cost + Sliding Scale Resources</section>
          <section className="content mb32">
            <p>Affordable Therapy Network:</p>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="rate"
              href="https://www.affordabletherapynetwork.com/"
            >
              www.affordabletherapynetwork.com
            </a>
            <br />
            <br />
            <p>Open Path Collective:</p>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="rate"
              href="https://www.openpathcollective.org/"
            >
              www.openpathcollective.org
            </a>
            <br />
            <br />
            <p>Hard Feelings:</p>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="rate"
              href="https://www.hardfeelings.org/"
            >
              www.hardfeelings.org
            </a>
            <br />
            <br />
            <p>Toronto Institute for Relational Psychotherapy:</p>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="rate"
              href="https://www.tirp-lowcost-therapy.ca/"
            >
              www.tirp-lowcost-therapy.ca
            </a>
            <br />
            <br />
            <p>COSTI Immigrant Services:</p>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="rate"
              href="http://www.costi.org/index.html.php/"
            >
              www.costi.org
            </a>
            <br />
            <br />
            <br />
            <section className="content">
              <p className="question">Links</p>
              <div className="links">
                <ul>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.ocswssw.org/members/online-register/"
                  >
                    <li>OCSWSSW</li>
                  </a>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.linkedin.com/in/angie-blandford/"
                  >
                    <li>LinkedIn</li>
                  </a>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.psychologytoday.com/ca/therapists/grounded-minds-therapy-orillia-on/976632"
                  >
                    <li>PsychologyToday Profile - Grounded Minds</li>
                  </a>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.psychologytoday.com/ca/therapists/angie-blandford-whitchurch-stouffville-on/782873"
                  >
                    <li>PsychologyToday Profile - Angie Blandford</li>
                  </a>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.psychologytoday.com/ca/therapists/moonsun-jang-vaughan-on/1016960"
                  >
                    <li>PsychologyToday Profile - Moonsun Jang</li>
                  </a>
                </ul>
              </div>
              <br />
              <br />
            </section>
            <p className="caps">
              <span style={{ color: 'rgb(112, 145, 99)', fontSize: '20px' }}>
                Know of a resource we&apos;re missing? <br />
                Reach out and let us know! <br />
              </span>
            </p>
          </section>

          <div>
            <div id="anotherbanner">
              <div className="banner">
                <p id="pp">
                  <a className="homebanner3" href="/contact">
                    Get in Touch
                  </a>
                </p>
              </div>
              <br />
              <br />
            </div>
          </div>
        </main>
      </Layout>
    </>
  );
}

export default Resources;
