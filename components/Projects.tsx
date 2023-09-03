'use client';

import Image, { StaticImageData } from 'next/image';
import Link from 'next/image';

import project1 from '@/public/test-background.png';
import { useSectionInView } from '@/lib/hooks';
import { NavLinkType } from '@/lib/data';
import ProjectImage from './ProjectImage';
import SocialIconWrap from './SocialIconWrap';

enum Technologies {
  REACT = 'React',
  NODE = 'Node',
  EXPRESS = 'Express',
  POSTGRES = 'PostgreSQL',
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
    <li className="relative mb-12 grid grid-cols-6">
      <div className="relative -z-10 col-span-full row-span-full shadow-lg shadow-blue-950">
        <a>
          <Image src={image.src} alt={image.alt} className="opacity-10" />
        </a>
      </div>

      <div className="col-span-full row-span-full px-12 py-14 ">
        <header className="mb-10 text-xl font-bold text-white ">{title}</header>

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

        <div className="space-x-4">
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
        title="Test project 1"
        description="System to showcase the real time use of xAPI and a LRS system to collect, save and use data to analyze and generate report."
        image={{ src: project1, alt: 'picture' }}
        technologies={[
          Technologies.REACT,
          Technologies.NODE,
          Technologies.POSTGRES,
        ]}
        githubUrl="test/test"
        websiteUrl="test/test"
      />

      <Project
        title="Test project 2"
        description="System to showcase the real time use of xAPI and a LRS system to collect, save and use data to analyze and generate report."
        image={{ src: project1, alt: 'picture' }}
        technologies={[
          Technologies.REACT,
          Technologies.NODE,
          Technologies.POSTGRES,
        ]}
        githubUrl="test/test"
      />

      <Project
        title="Test project 3"
        description="System to showcase the real time use of xAPI and a LRS system to collect, save and use data to analyze and generate report."
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
