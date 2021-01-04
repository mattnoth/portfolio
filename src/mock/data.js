import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Matt Noth | Developer', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: 'Welcome to my portfolio website', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Matt Noth',
  subtitle: `I'm a software engineer and web developer.`,
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile-matt.jpeg',
  paragraphOne:
    'Go-getting software engineer with a background in music production, fresh out of General Assembly’s Software Engineering bootcamp. I am seeking a junior developer role in a small to medium sized development house or web based company to begin my coding career.',
  paragraphTwo:
    'An adaptive thinker, I thrive when applying creative flair to find simple solutions to complex problems and build enjoyable and tailored user experiences. I offer a unique blend of organization and imagination and can switch seamlessly between front-end and back-end tasks.',
  paragraphThree: `Check out my projects below`,
  resume: 'https://drive.google.com/file/d/1TKjv_rzVuW9kAa4M5e_unJQt_Tkfh06g/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'Beatbay.png',
    title: 'Beatbay',
    info:
      'My final capstone project for General Assembly’s Software Engineering bootcamp. The prompt was to create a fully functioning CRUD web application using technology we covered in class, as well as to learn and implement a new development tool of my choice. The site is a task management web application for songs, where users can upload songs via drag and drop, view them in a list, and post tasks on individual songs’ dashboards. The back-end API is built using Django’s rest framework, with complex relational models and querying. The front-end is built in React and employs Material UI.',
    info2: '',
    url: 'https://vast-dusk-53244.herokuapp.com/',
    repo: 'https://github.com/mattnoth/songhome-fe', // if no repo, the button will not show up
  },
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
      'Ongoing project. A “video game encyclopedia” with React.js, using a third party API, RAWG, to dynamically fetch data via user input. Users can search a string of text, or filter via a platform, genre, or decade. Clicking on a card generates a game details page, which includes video using React Player, pictures and other information about the selection.',
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
