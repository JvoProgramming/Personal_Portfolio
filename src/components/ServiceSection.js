import React from 'react';
import { MdCode, MdDesktopMac, MdPhonelinkSetup } from 'react-icons/md';
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

export default function ServiceSection() {
  return (
    <ServicesItemsStyles>
      <div className="container">
        <SectionTitle
          heading="Services"
          subheading="meeting a client's needs"
        />
        <div className="services__allItems">
          <ServicesSectionItem
            icon={<MdPhonelinkSetup />}
            title="App Dev"
            desc="I develop applications for mobile devices that users can use on-the-go. These apps can be used offline or online depending on what the client needs"
          />
          <ServicesSectionItem
            icon={<MdDesktopMac />}
            title="Software Developer"
            desc="I also design and develop software to meet client's needs. I can design the requirements that must be done and tie together the entire functionality the system/application"
          />
          <ServicesSectionItem
            icon={<MdCode />}
            title="Web Dev"
            desc="Developing websites is another skill I possess. I can design unique UI/UX for a beautiful and responsive front-end experience."
          />
        </div>
      </div>
    </ServicesItemsStyles>
  );
}
