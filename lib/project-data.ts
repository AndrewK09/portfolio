import { StaticImageData } from 'next/image';

import shoppingPortal from '@/public/shopify.gif';
import minesweeper from '@/public/minesweeper-lg.png';

export enum Technologies {
  REACT = 'React',
  REDUX = 'Redux',
  NODE = 'Node',
  EXPRESS = 'Express',
  POSTGRES = 'PostgreSQL',
  MATERIAL = 'Material UI',
}

interface Project {
  title: string;
  description: string;
  image: { src: StaticImageData; alt: string };
  technologies: Technologies[];
  githubUrl?: string;
  websiteUrl?: string;
}

const greenfield = {
  title: 'Project Greenfield - Shopping Portal',
  description:
    'Project Greenfield was my first group-project, I worked with 2 other developers. It comprises a complete redesign of an outdated client-facing retail web-portal that includes an image gallery, questions and answers, and ratings and reviews. I was in charge of the ratings and reviews portion.',
  image: { src: shoppingPortal, alt: 'Project-Greenfield' },
  technologies: [
    Technologies.REACT,
    Technologies.REDUX,
    Technologies.MATERIAL,
    Technologies.NODE,
    Technologies.EXPRESS,
  ],
  githubUrl:
    'https://github.com/hrnyc23-vibranium/project-greenfield/tree/master',
};

const minesweeperClone = {
  title: 'Minesweeper Clone',
  description:
    'Minesweeper Clone is a single page web application that mimicks the original Minesweeper that comes with Windows OS. This was the very first web application I built a month a half into coding bootcamp. We were instructed to spend a day on the MVP and see how far we get, but I enjoyed working on it so much I spent a few more days on it.',
  image: { src: minesweeper, alt: 'Minesweeper' },
  technologies: [
    Technologies.REACT,
    Technologies.REDUX,
    Technologies.NODE,
    Technologies.EXPRESS,
  ],
  githubUrl: 'https://github.com/AndrewK09/Minesweeper',
};

// const dummyData = {
//   title: 'Test 3',
//   description:
//     'Minesweeper Clone is a single page web application that mimicks the original Minesweeper that comes with Windows OS. This was the very first web application I built a month a half into coding bootcamp. We were instructed to spend a day on the MVP and see how far we get, but I enjoyed working on it so much I spent a few more days on it.',
//   image: { src: minesweeper, alt: 'Minesweeper' },
//   technologies: [
//     Technologies.REACT,
//     Technologies.REDUX,
//     Technologies.NODE,
//     Technologies.EXPRESS,
//   ],
//   githubUrl: 'https://github.com/AndrewK09/Minesweeper',
//   websiteUrl: 'test/test',
// };

export const ProjectData: Project[] = [greenfield, minesweeperClone];
