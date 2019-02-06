//import images
import anthro from '../images/anthropology.png';
import apolo from '../images/apology.jpeg';
import archaeo from '../images/archaeology.jpg';
import astro from '../images/astrology.jpg';
import bio from '../images/biology.png';
import crypto from '../images/cryptology.png';
import egypto from '../images/egyptology.jpg';
import etymo from '../images/etymology.jpg';
import mytho from '../images/mythology.jpg';
import parapsycho from '../images/parapsychology.jpg';
import techno from '../images/technology.jpg';

//import views
import Anthropology from '../components/Anthropology.js';
import Apology from '../components/Apology.js';
import Archaeology from '../components/Archaeology.js';
import Astrology from '../components/Astrology.js';
import Biology from '../components/Biology.js';
import Cryptology from '../components/Cryptology.js';
import Egyptology from '../components/Egyptology.js';
import Parapsychology from '../components/Parapsychology.js';
import Etymology from '../components/Etymology.js';
import Mythology from'../components/Mythology.js';
import Technology from '../components/Technology.js';

const whizzes = [
  {
    name: 'Anthropology Whiz',
    image: anthro,
    component: Anthropology,
    path: 'anthropology'
  }, {
    name: 'Apology Whiz',
    image: apolo,
    component: Apology,
    path: 'apology'
  }, {
    name: 'Archaeology Whiz',
    image: archaeo,
    component: Archaeology,
    path: 'archaeology'
  }, {
    name: 'Astrology Whiz',
    image: astro,
    component: Astrology,
    path: 'astrology'
  }, {
    name: 'Biology Whiz',
    image: bio,
    component: Biology,
    path: 'biology'
  }, {
    name: 'Cryptology Whiz',
    image: crypto,
    component: Cryptology,
    path: 'cryptology'
  }, {
    name: 'Egyptology Whiz',
    image: egypto,
    component: Egyptology,
    path: 'egyptology'
  }, {
    name: 'Etymology Whiz',
    image: etymo,
    component: Etymology,
    path: 'etymology'
  }, {
    name: 'Mythology Whiz',
    image: mytho,
    component: Mythology,
    path: 'mythology'
  },{
    name: 'Parapsychology Whiz',
    image: parapsycho,
    component: Parapsychology,
    path: 'parapsychology'
  }, {
    name: 'Technology Whiz',
    image: techno,
    component: Technology,
    path: 'technology'
  }
];

export default whizzes;