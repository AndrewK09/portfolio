'use client';

import Image, { StaticImageData } from 'next/image';

import { useSectionInView } from '@/lib/hooks';
import { NavLinkType } from '@/lib/data';
import { ProjectData } from '@/lib/project-data';

import SocialIconWrap from './SocialIconWrap';

const ProjectItem = ({
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
    <li className=" relative mb-12 list-none sm:grid sm:grid-cols-6 sm:grid-rows-6">
      <div className="shadow-secondary-navy relative -z-10 col-span-full row-span-full shadow-lg">
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
          className="shadow-secondary-navy mb-6 opacity-90 shadow-lg sm:hidden"
          objectFit="cover"
        />

        <div className="mb-6 rounded-md text-white/70">
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
      <ul>
        {ProjectData.map((project) => (
          <li key={project.title}>
            <ProjectItem
              title={project.title}
              description={project.description}
              image={project.image}
              technologies={project.technologies}
              githubUrl={project.githubUrl}
              websiteUrl={project.websiteUrl}
            />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Projects;
