import React from 'react';
import styled from 'styled-components';
import Button from '../components/Button';
import PText from '../components/PText';
import AboutImg from '../assets/images/about-page-img.png';
import AboutInfoItem from '../components/AboutInfoItem';
import ContactBanner from '../components/ContactBanner';

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
    <AboutPageStyles>
      <div className="container">
        <div className="top-section">
          <div className="left">
            <p className="about__subheading">
              Hi, I am <span>Johnny Vo</span>
            </p>
            <h2 className="about__heading">An Aspiring Developer</h2>
            <div className="about__info">
              <PText>
                I grew up in the Inland Empire, a metropolitan area and region
                in Southern California. I have been interacting with computers
                since I was four years old. I've always loved technology and
                kept a keen eye on the technological growth throughout my life.
                It is amazing to see how creative technology can be whilst being
                one of the most useful things the world utilizes.
                <br />
                <br />
                My coding journey started when my highschool opened its first
                ever robotics course during my senior year. This was an
                opportunity for me to delve into the world of programming and
                computer science. Since then, I continued to look forward on my
                journey as a developer and earned my Bachelor of Science in
                Computer Science.
                <br />
                <br />
                My vision is to develop innovative technologies that can drive
                the world to another level. As technology is progressing better
                than ever, it is time for us to create useful, helpful, and
                ethical products that the world can use. Let's strive together
                to make this happen!
                <br />
                <br />
              </PText>
            </div>
            <Button btnText="My Resume" btnLink="#" />
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
              items={['C++', 'Python', 'Java']}
            />
            <AboutInfoItem
              title="Front-End"
              items={['HTML', 'CSS', 'Javascript', 'React']}
            />
            <AboutInfoItem
              title="Back-End"
              items={['NodeJS', 'ExpressJS', 'MongoDB']}
            />
          </div>
        </div>
      </div>
      <ContactBanner />
    </AboutPageStyles>
  );
}
