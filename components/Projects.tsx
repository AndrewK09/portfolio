'use client';

import Image, { StaticImageData } from 'next/image';

import project1 from '@/public/test-background.png';
import { useSectionInView } from '@/lib/hooks';
import { NavLinkType } from '@/lib/data';

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
    <div className="relative mb-8 flex flex-col items-center justify-center">
      <div className="opacity-2 -z-10 w-full border-2">
        <Image src={image.src} alt={image.alt} />
      </div>

      <div className="absolute left-0 top-0 z-10 h-full w-full flex-col px-10 py-16 ">
        <header className="mb-6 text-2xl font-bold ">{title}</header>

        <div className="mb-6 rounded-md bg-slate-900 px-5 py-5 text-white/70 shadow-md">
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
          {githubUrl ? <span>Git</span> : null}
          {websiteUrl ? <span>Git</span> : null}
        </div>
      </div>
    </div>
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
      />
    </section>
  );
};

export default Projects;
