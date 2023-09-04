'use client';

import Image, { StaticImageData } from 'next/image';

import { useSectionInView } from '@/lib/hooks';
import { NavLinkType } from '@/lib/data';

import project1 from '@/public/test-background.png';
import shoppingPortal from '@/public/shopify.gif';
import minesweeper from '@/public/minesweeper-lg.png';
import SocialIconWrap from './SocialIconWrap';

enum Technologies {
  REACT = 'React',
  REDUX = 'Redux',
  NODE = 'Node',
  EXPRESS = 'Express',
  POSTGRES = 'PostgreSQL',
  MATERIAL = 'Material UI',
}

const Project = ({
  title,
  description,
  image,
  technologies,
  githubUrl,
  websiteUrl,
}: {
  title: string;
  description: string;
  image: { src: StaticImageData; alt: string };
  technologies: string[];
  githubUrl?: string;
  websiteUrl?: string;
}) => {
  return (
    <li className="relative mb-12 list-none sm:grid sm:grid-cols-6 sm:grid-rows-6">
      <div className="relative -z-10 col-span-full row-span-full shadow-lg shadow-blue-950">
        <Image
          src={image.src}
          alt={image.alt}
          className="opacity-10"
          objectFit="cover"
          layout="fill"
        />
      </div>

      <div className="relative sm:col-span-full sm:row-span-full sm:px-12 sm:py-12 ">
        <header className="mb-10 text-xl font-bold text-white ">{title}</header>

        <Image
          src={image.src}
          alt={image.alt}
          className="mb-6 shadow-lg shadow-blue-900 sm:hidden"
          objectFit="cover"
        />

        <div className="mb-6 rounded-md bg-blue-950 px-5 py-5 text-white/70 shadow-md ">
          <p>{description}</p>
        </div>
        <ul className="mb-6 flex flex-wrap space-x-4">
          {technologies.map((technology) => (
            <li className="tech" key={technology}>
              {technology}
            </li>
          ))}
        </ul>

        <div className="flex flex-row justify-end space-x-4">
          {githubUrl ? (
            <SocialIconWrap url="https://github.com/AndrewK09" />
          ) : null}
          {websiteUrl ? (
            <SocialIconWrap url="https://www.linkedin.com/in/andrew-kn/" />
          ) : null}
        </div>
      </div>
    </li>
  );
};

const Projects = () => {
  const { ref } = useSectionInView(NavLinkType.PROJECT, 0.5);

  return (
    <section id={NavLinkType.PROJECT} ref={ref}>
      <h1 className="head_text p-2 pt-4">PROJECTS</h1>
      <Project
        title="Project Greenfield - Shopping Portal"
        description="Project Greenfield was my first group-project, I worked with 2 other developers. It comprises a complete redesign of an outdated client-facing retail web-portal that includes an image gallery, questions and answers, and ratings and reviews. I was in charge of the ratings and reviews portion."
        image={{ src: shoppingPortal, alt: 'Project-Greenfield' }}
        technologies={[
          Technologies.REACT,
          Technologies.REDUX,
          Technologies.MATERIAL,
          Technologies.NODE,
          Technologies.EXPRESS,
        ]}
        githubUrl="https://github.com/hrnyc23-vibranium/project-greenfield/tree/master"
      />

      <Project
        title="Minesweeper Clone"
        description="Minesweeper is a single page web application that mimicks the original Minesweeper that comes with Windows OS. This was the very first web application I built a month a half into coding bootcamp. We were instructed to spend a day on the MVP and see how far we get, but I enjoyed working on it so much I spent a few more days on it."
        image={{ src: minesweeper, alt: 'Minesweeper' }}
        technologies={[
          Technologies.REACT,
          Technologies.REDUX,
          Technologies.NODE,
          Technologies.EXPRESS,
        ]}
        githubUrl="minesweeper"
      />

      <Project
        title="Test project 3"
        description="Minesweeper is a single page web application that mimicks the original Minesweeper that comes with Windows OS. This was the very first web application I built a month a half into coding bootcamp. We were instructed to spend a day on the MVP and see how far we get, but I enjoyed working on this application so much I continued to work on it for a few more days."
        image={{ src: project1, alt: 'picture' }}
        technologies={[
          Technologies.REACT,
          Technologies.NODE,
          Technologies.POSTGRES,
        ]}
        githubUrl="test/test"
        websiteUrl="test/test"
      />
    </section>
  );
};

export default Projects;
