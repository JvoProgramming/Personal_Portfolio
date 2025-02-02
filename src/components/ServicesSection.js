import React from 'react';
import { MdDesktopMac, MdCode, MdBuild } from 'react-icons/md';
import styled from 'styled-components';
import SectionTitle from './SectionTitle';
import ServicesSectionItem from './ServicesSectionItem';

const ServicesItemsStyles = styled.div`
  padding: 10rem 0;
  .services__allItems {
    display: flex;
    gap: 10rem;
    justify-content: space-between;
    margin-top: 5rem;
  }
  @media only screen and (max-width: 768px) {
    .services__allItems {
      flex-direction: column;
      max-width: 350px;
      margin: 0 auto;
      margin-top: 5rem;
      gap: 5rem;
    }
  }
`;

export default function ServicesSection() {
  return (
    <ServicesItemsStyles>
      <div className="container">
        <SectionTitle
          subheading="End-to-End Software Solutions"
          heading="Services"
        />
        <div className="services__allItems">
          <ServicesSectionItem
            icon={<MdCode />}
            title="Full Stack Development"
            desc="I design and develop scalable, high-performance applications, seamlessly integrating front-end and back-end technologies. From crafting intuitive user interfaces to building robust APIs and databases, I ensure efficient and maintainable solutions."
          />
          <ServicesSectionItem
            icon={<MdDesktopMac />}
            title="Web Application Development"
            desc="I create modern, responsive, and dynamic web applications tailored to user needs. My expertise spans UI/UX design, front-end frameworks, and back-end development to deliver seamless digital experiences."
          />
          <ServicesSectionItem
            icon={<MdBuild />}
            title="Software Architecture & Optimization"
            desc="Beyond development, I focus on designing scalable system architectures, optimizing performance, and ensuring best practices in security, deployment, and maintainability."
          />
        </div>
      </div>
    </ServicesItemsStyles>
  );
}
