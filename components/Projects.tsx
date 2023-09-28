'use client';

import Image, { StaticImageData } from 'next/image';

import { useSectionInView } from '@/lib/hooks';
import { NavLinkType } from '@/lib/data';
import { ProjectData } from '@/lib/project-data';

import SocialIconWrap from './SocialIconWrap';
import { posthog } from 'posthog-js';

const ProjectListItem = ({
  title,
  description,
  image,
  technologies = [],
  githubUrl,
  websiteUrl,
}: {
  title: string;
  description: string;
  image: { src: StaticImageData; alt: string };
  technologies?: string[];
  githubUrl?: string;
  websiteUrl?: string;
}) => {
  return (
    <li className="relative mb-12 list-none sm:grid sm:grid-cols-6 sm:grid-rows-6">
      <div className=" relative -z-10 col-span-full row-span-full hidden h-full shadow-lg shadow-secondary-navy sm:block">
        <Image
          src={image.src}
          alt={image.alt}
          className="h-auto object-cover opacity-10"
          fill
          sizes="10vw"
        />
      </div>

      <div className="relative sm:col-span-full sm:row-span-full sm:px-12 sm:py-12 ">
        <header className="mb-10 text-xl font-bold text-white ">{title}</header>

        {/* Mobile */}
        <Image
          src={image.src}
          alt={image.alt}
          className="mb-6 object-cover opacity-90 shadow-lg shadow-secondary-navy sm:hidden"
          sizes="10vw"
        />

        <div className="mb-6 rounded-md text-white/70">
          <p>{description}</p>
        </div>
        <ul className="mb-6 flex flex-wrap gap-x-2">
          {technologies.map((technology) => (
            <li className="tech" key={technology}>
              {technology}
            </li>
          ))}
        </ul>

        <div className="flex flex-row justify-end space-x-4">
          {githubUrl ? (
            <div
              onClick={() => {
                posthog.capture(`${title}_click`);
              }}
            >
              <SocialIconWrap url={githubUrl} />
            </div>
          ) : null}
          {websiteUrl ? <SocialIconWrap url={websiteUrl} /> : null}
        </div>
      </div>
    </li>
  );
};

const Projects = () => {
  const { ref } = useSectionInView(NavLinkType.PROJECT, 0.25);

  return (
    <section id={NavLinkType.PROJECT} ref={ref}>
      <h1 className="head_text p-2 pt-4">PROJECTS</h1>
      <ul>
        {ProjectData.map((project) => (
          <ProjectListItem
            key={project.title}
            title={project.title}
            description={project.description}
            image={project.image}
            technologies={project.technologies}
            githubUrl={project.githubUrl}
            websiteUrl={project.websiteUrl}
          />
        ))}
      </ul>
    </section>
  );
};

export default Projects;
