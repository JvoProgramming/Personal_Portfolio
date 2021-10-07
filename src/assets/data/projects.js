import { v4 as uuidv4 } from 'uuid';
import LingualityImg from '../images/LingualityImg.jpeg';
import PhotoITImg from '../images/PhotoITImg.png';
import LastWarImg from '../images/TheLastWarImg.jpeg';
import CinemaBaseImg from '../images/CinemaBaseImg.jpg';
import WiredImg from '../images/WiredImg.jpg';
import LastWarVid from '../videos/TheLastWar.mp4';
import LingualityVid from '../videos/Linguality.mkv';
import PhotoITVid from '../videos/photoIT.mp4';

const projects = [
  {
    id: uuidv4(),
    name: 'photoIT',
    desc:
      'A photo-sharing web application. You can show off your amazing photography skills to your friends, family, or strangers on the internet!',
    img: PhotoITImg,
    vid: PhotoITVid,
    link: 'https://photoit.netlify.app/views/home.html',
  },
  {
    id: uuidv4(),
    name: 'Linguality',
    desc:
      'A translation application utilizing machine learning tools that help English speakers communicate in a foreign language. Have a chat in a different language now!',
    img: LingualityImg,
    vid: LingualityVid,
    link: 'https://github.com/JvoProgramming/Linguality',
  },
  {
    id: uuidv4(),
    name: 'The Last War',
    desc:
      'A single-player zombie survival game. Try to survive as long as you can!',
    img: LastWarImg,
    vid: LastWarVid,
    link: 'https://github.com/JvoProgramming/The-Last-War',
    vidVolume: '.15',
  },
  {
    id: uuidv4(),
    name: 'CinemaBase - IN PROGRESS',
    desc:
      'A web application where users can view a database for movies. If you need information about a movie, this is the perfect website for you.',
    img: CinemaBaseImg,
    vid: '',
    link: 'https://github.com/JvoProgramming/CinemaBase',
  },
  {
    id: uuidv4(),
    name: 'Wired - IN PROGRESS',
    desc:
      'Wired is a simple way to communicate with your friends, family, or co-workers via voice, video, and text. Create groups or communities where you can talk, chat, or discuss.',
    img: WiredImg,
    vid: '',
    link: 'https://github.com/JvoProgramming/Wired',
  },
];

export default projects;
