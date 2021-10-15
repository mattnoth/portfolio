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
  name: 'Matt Noth.',
  subtitle: `I'm a software engineer and web developer.`,
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile-matt.jpeg',
  paragraphOne:
    'A go-getting junior software engineer with a background in music production, I am seeking a junior developer role in a  medium to larger sized development house or web based company to continue my coding career.',
  paragraphTwo:
    'An adaptive thinker, I thrive when applying my creative flair to find simple solutions to complex problems and build enjoyable, tailored user experiences. I offer a unique blend of organization and imagination and can switch seamlessly between front-end and back-end tasks.',
  paragraphThree: 'Check out my projects below.',
  resume: 'https://drive.google.com/file/d/1z7ybJF75_hHKAMtFYANi1RLllgF_CrdH/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'Beatbay.png',
    title: 'Beatbay',
    info:
      'Created a fully functioning CRUD web application that is a task management web application for songs, where songwriters and producers can upload songs via drag and drop, view them in a list, and post tasks on individual songs’ dashboards. The back-end API is built using Django’s rest framework, with relational models and  querying a Postgres database. The front-end is built in React and employs Material UI.',
    info2: '',
    url: 'https://vast-dusk-53244.herokuapp.com/',
    repo: 'https://github.com/mattnoth/songhome-fe', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'simon-project.png',
    title: 'Simon',
    info:
      'Recreated the classic memory game Simon with vanilla JS / CSS and HTML, created entirely in ES6 class constructor scope. Building the timing and computer turns using timeouts was the biggest hurdle.',
    info2: '',
    url: 'https://mattnoth.github.io/simon/',
    repo: 'https://github.com/mattnoth/simon', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Diskshelf-Project.png',
    title: 'Diskshelf',
    info:
      'A “video game encyclopedia” with React.js, using a third party API, RAWG, to dynamically fetch data via user input. Users can search a string of text, or filter by platform, genre, or decade. Clicking on a card generates a game details page, which includes video, pictures and other information about the selection.',
    info2: '',
    url: 'https://diskshelf.herokuapp.com',
    repo: 'https://github.com/mattnoth/diskshelf', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'botanical.png',
    title: 'Botanical Babble',
    info:
      'Group project: created a CRUD functioning, full-stack Mongo Express React Node (MERN) web application social site where users can display and discuss house plants. I primarily focused on back-end routes, as well as path routing and data movement on the front-end, and consistently provided debugging support to my teammates.',
    info2: '',
    url: 'https://bbfe.herokuapp.com/',
    repo: 'https://github.com/botanicalbabble/front-end', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'castmash.png',
    title: 'Castmash',
    info: `Cast Mash is an ongoing group project that takes two actors and "Mashes" them together to find out what movies they've both been in.`,
    info2: '',
    url: 'https://cast-mash.netlify.app/',
    repo: 'https://github.com/mattnoth/cast-mash', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: 'matt.j.noth@gmail.com',
  email: 'matt.j.noth@gmail.com',
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
