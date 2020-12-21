import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Matthew Noth | Developer', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: 'Welcome to my portfolio website', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Matthew Noth',
  subtitle: `I am a software engineer and web developer.`,
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile-matt.jpeg',
  paragraphOne:
    'Go getter software engineer with background in music production, seeking junior front-end developer role in a small to medium sized development house or web based company. An adaptive thinker who particularly enjoys utilizing creative flair to create enjoyable user experiences by using simple solutions to coding problems and building lightweight applications.',
  paragraphTwo:
    'I offer a unique mix of organization and imagination, connecting creative skills built through music production with software development, displaying data in both standard and unique ways particular to the user experience at hand.',
  paragraphThree: `Check out my projects-`,
  resume: 'https://drive.google.com/file/d/17uXT5w2fRKMtU5DwwOfWLpaBaVg2FDSH/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'simon-project.png',
    title: 'Simon',
    info:
      'Developed a recreation of the classic memory game Simon using vanilla JS / CSS and HTML, which implements an entirely in scope ES6 class constructor.  Created during General Assembly Bootcamp where the prompt was to create one of 6 games. Building the architecture for the timing & movement was the biggest hurdle.',
    info2: '',
    url: 'https://mattnoth.github.io/simon/',
    repo: 'https://github.com/mattnoth/simon', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Diskshelf-Project.png',
    title: 'Diskshelf',
    info:
      'Ongoing project; a  “video game encyclopedia” with React.js, using a third party API, RAWG, to dynamically fetch data via user input. Users can search a string of test, or filter via a platform, genre, or decade. Clicking on a card generates a game details page, which includes video, pictures and other information about the selection. ',
    info2: '',
    url: 'https://diskshelf.herokuapp.com',
    repo: 'https://github.com/mattnoth/diskshelf', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'botanical.png',
    title: 'Botanical Babble',
    info:
      'A group project for GA SEI, with a backend and frontend, MERN stack. Full CRUD website for discussion surrounding plants.',
    info2: '',
    url: 'https://bbfe.herokuapp.com/',
    repo: 'https://github.com/botanicalbabble/front-end', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: 'musicnoth@gmail.com',
  email: 'musicnoth@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/moodsmithmusic?lang=en',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: '',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/mattnoth/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/mattnoth',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
