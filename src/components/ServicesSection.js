import React from 'react';
import { MdDesktopMac, MdCode } from 'react-icons/md';
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
          subheading="meeting a client's needs"
          heading="Services"
        />
        <div className="services__allItems">
          <ServicesSectionItem
            icon={<MdDesktopMac />}
            title=""
            desc="Developing websites is another skill I possess. I can design unique UI/UX for a beautiful and responsive front-end experience. I can also build a back-end to handle server-side scripting and functionalities."
          />
          <ServicesSectionItem
            icon={<MdCode />}
            title="Software Developer"
            desc="I also design and develop software to meet client's needs. I can design the requirements that must be done and tie together the entire functionality the system/application"
          />
        </div>
      </div>
    </ServicesItemsStyles>
  );
}
