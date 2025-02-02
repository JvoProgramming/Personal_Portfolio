import React from 'react';
import styled from 'styled-components';
import PText from '../components/PText';
import AboutImg from '../assets/images/about-page-img.png';
import AboutInfoItem from '../components/AboutInfoItem';
import ContactBanner from '../components/ContactBanner';
import ButtonA from '../components/ButtonA';
import Resume from '../assets/other/JohnnyVo_Web_Dev.pdf';

const AboutPageStyles = styled.div`
  padding: 20rem 0 10rem 0;
  .top-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
  .left {
    flex: 3;
  }
  .right {
    flex: 2;
  }
  .about__subheading {
    font-size: 2.2rem;
    margin-bottom: 2rem;
    span {
      background-color: var(--deep-dark);
      padding: 0.5rem;
      border-radius: 8px;
    }
  }
  .about__heading {
    font-size: 3.6rem;
    margin-bottom: 3rem;
  }
  .about__info {
    margin-bottom: 4rem;
    .para {
      max-width: 100%;
    }
  }
  .right {
    img {
      border: 2px solid var(--gray-1);
    }
  }
  .about__info__items {
    margin-top: 15rem;
  }
  .about__info__item {
    margin-bottom: 10rem;
  }
  .about__info__heading {
    font-size: 3.6rem;
    text-transform: uppercase;
  }
  @media only screen and (max-width: 768px) {
    padding: 10rem 0;
    .top-section {
      flex-direction: column;
      gap: 5rem;
    }
    .about__subheading {
      font-size: 1.8rem;
    }
    .about__heading {
      font-size: 2.8rem;
    }
    .about__info__heading {
      font-size: 3rem;
    }
  }
`;

export default function About() {
  return (
    <>
      <AboutPageStyles>
        <div className="container">
          <div className="top-section">
            <div className="left">
              <p className="about__subheading">
                Hi, I am <span>Johnny Vo</span>
              </p>
              <h2 className="about__heading">Software Engineer</h2>
              <div className="about__info">
                <PText>
                  I grew up in the Inland Empire, a region in Southern
                  California, and have been passionate about technology since
                  childhood. From an early age, I was fascinated by how
                  technology shapes the world and knew I wanted to be part of
                  that innovation.
                  <br />
                  <br />
                  My journey into programming began in high school when I took
                  part in my school's first-ever robotics course. That
                  experience sparked my interest in software development,
                  leading me to pursue a Bachelor of Science in Computer
                  Science.
                  <br />
                  <br />
                  Now working as a Software Engineer @ KLaunch, I am dedicated
                  to building impactful and efficient solutions. I believe in
                  leveraging technology to solve real-world problems and create
                  meaningful advancements. As innovation accelerates, my goal is
                  to contribute to ethical and forward-thinking solutions that
                  make a difference.
                </PText>
              </div>
              <ButtonA btnText="My Resume" btnLink={Resume} />
            </div>
            <div className="right">
              <img src={AboutImg} alt="Johnny Vo img" />
            </div>
          </div>
          <div className="about__info__items">
            <div className="about__info__item">
              <h1 className="about__info__heading">Education</h1>
              <AboutInfoItem
                title="School"
                items={['University of California, Riverside']}
              />
              <AboutInfoItem title="Major" items={['Computer Science']} />
            </div>
            <div className="about__info__item">
              <h1 className="about__info__heading">Skills</h1>
              <AboutInfoItem
                title="Languages"
                items={[
                  'Java',
                  'Python',
                  'C++',
                  'JavaScript',
                  'TypeScript',
                  'SQL',
                  'HTML5',
                  'CSS3',
                ]}
              />
              <AboutInfoItem
                title="Frameworks & Libraries"
                items={['React.js', 'Redux.js', 'AngularJS']}
              />
              <AboutInfoItem
                title="Developer Tools"
                items={['Git', 'GitHub', 'AWS', 'Jira']}
              />
            </div>
          </div>
        </div>
        <ContactBanner />
      </AboutPageStyles>
    </>
  );
}
