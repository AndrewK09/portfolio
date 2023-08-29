export enum NavLinkType {
  ABOUT = 'about',
  EXPERIENCE = 'experience',
  PROJECT = 'projects',
  CONTACT = 'contact',
  TECHNOLOGY = 'technical skills',
}

export const navLinks = [
  {
    name: NavLinkType.ABOUT,
    href: '#about',
  },
  {
    name: NavLinkType.TECHNOLOGY,
    href: '#technology',
  },
  {
    name: NavLinkType.EXPERIENCE,
    href: '#experience',
  },
  {
    name: NavLinkType.PROJECT,
    href: '#projects',
  },
  {
    name: NavLinkType.CONTACT,
    href: '#contact',
  },
];

export const FrontendTechnologies = [
  'JavaScript',
  'TypeScript',
  'HTML',
  'CSS',
  'React',
  'Redux',
  'Next.js',
  'Tailwind CSS',
];

export const BackendTechnologies = [
  'Node.js',
  'Express',
  'PostgreSQL',
  'Sequelize',
  'SQL',
  'MySQL',
  'MongoDB',
];

export const DevOpsTechnologies = ['Git', 'Heroku', 'Amazon AWS', 'Docker'];

export const TestingTechnologies = ['Mocha', 'Chai', 'Jest'];

export const MainTechnologies = [
  'JavaScript',
  'TypeScript',
  'HTML',
  'CSS',
  'React',
  'Redux',
  'Node.js',
  'Express',
  'PostgreSQL',
  'Sequelize',
  'Git',
  'REST API',
];

export const OtherTechnologies = [
  'Next.js',
  'Tailwind CSS',
  'SQL',
  'MySQL',
  'MongoDB',
  'VMware vCenter',
  'VMware NSX',
  'Heroku',
  'Amazon AWS',
  'Docker',
  'Mocha',
  'Chai',
  'Socket.io',
];
