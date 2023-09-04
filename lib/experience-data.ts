export interface Experience {
  date: string;
  description: string;
  title: {
    description: string;
    href: string;
  };
  links?: { href: string; description: string }[];
  technologies?: string[];
}

const SPJTechnologies = [
  'JavaScript',
  'TypeScript',
  'React',
  'Redux',
  'Node.js',
  'Express',
  'PostgreSQL',
  'Sequelize',
];

const spjSolutions: Experience = {
  date: 'JUL 2020 - FEB 2023',
  title: {
    description: 'Full Stack Software Engineer - SPJ Solutions Inc',
    href: 'https://spjsolutions.com/',
  },
  description:
    'Delivered high-quality, robust production code to a variety of clients including Aerodata and Osceola County Sheriff’s Office. Collaborated closely with network consultants to develop and troubleshoot issues. Provided leadership within engineering department through close collaboration, and mentorship.',
  links: [
    {
      href: 'https://www.vmware.com/content/dam/digitalmarketing/vmware/en/pdf/customers/vmw-osceola-county-sheriff-en-success-story.pdf',
      description: 'Case Study 1',
    },
    {
      href: 'https://www.vmware.com/content/dam/digitalmarketing/vmware/en/pdf/casestudy/customers/vmware-aerodata-casestudy.pdf',
      description: 'Case Study 2',
    },
  ],
  technologies: SPJTechnologies,
};

const galvanize: Experience = {
  date: 'AUG 2019 - NOV 2019',
  title: {
    description: 'Software Engineering Immersive Resident - Galvanize',
    href: 'https://www.galvanize.com',
  },
  description:
    'Mentored students in JavaScript fundamentals, data structures, and front/back-end technologies resulting in 100% students passing the midterm. Collaborated with other Residents on ways to improve curriculum and experience for students',
};

export const ExperienceData: Experience[] = [spjSolutions, galvanize];
