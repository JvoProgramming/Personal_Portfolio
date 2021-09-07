import { v4 as uuidv4 } from 'uuid';
import ProjectImg from '../images/projectImg.png';

const projects = [
  {
    id: uuidv4(),
    name: 'Linguality',
    desc:
      'An application to track your all data from one place. I developed the website and the mobile app',
    img: ProjectImg,
  },
  {
    id: uuidv4(),
    name: 'The Last War',
    desc:
      'An app to help people to get an overview of how they can make the city beautiful.',
    img: ProjectImg,
  },
  {
    id: uuidv4(),
    name: 'IN PROGRESS',
    desc: '...',
    img: ProjectImg,
  },
  {
    id: uuidv4(),
    name: 'IN PROGRESS',
    desc: '...',
    img: ProjectImg,
  },
  {
    id: uuidv4(),
    name: 'IN PROGRESS',
    desc: '...',
    img: ProjectImg,
  },
];

export default projects;
