import React from 'react';
import styled from 'styled-components';
import HoverVideoPlayer from 'react-hover-video-player';

const ProjectItemStyle = styled.div`
  .projectItem__img {
    width: 100%;
    height: 400px;
    border-radius: 12px;
    overflow: hidden;
    display: inline-block;
    border: 3px solid var(--gray-2);
    img {
      height: 100%;
    }
  }
  .projectItem__info {
    margin-top: 1rem;
    background-color: var(--deep-dark);
    padding: 1rem;
    border-radius: 12px;
  }
  .projectItem__title {
    font-size: 2.2rem;
  }
  .projectItem__desc {
    font-size: 1.6rem;
    font-family: 'RobotoMono Regular';
    margin-top: 1rem;
  }
  @media only screen and (max-width: 768px) {
    .projectItem__img {
      height: 350px;
    }
  }
`;

export default function ProjectItem({
  img = '',
  title = 'Project Name',
  desc = 'This is an application that I have been working on',
  link = '',
  vid = '',
  vidVolume = '.25',
}) {
  return (
    <ProjectItemStyle>
      <a href={link}>
        <HoverVideoPlayer
          className="projectItem__img"
          videoSrc={vid}
          pausedOverlay={<img src={img} alt="project img" />}
          muted={false}
          volume={vidVolume}
          sizingMode="container"
        />
      </a>
      <div className="projectItem__info">
        <a href={link}>
          <h3 className="projectItem__title">{title}</h3>
        </a>
        <p className="projectItem__desc">{desc}</p>
      </div>
    </ProjectItemStyle>
  );
}
