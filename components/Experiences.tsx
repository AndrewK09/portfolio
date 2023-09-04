'use client';

import Link from 'next/link';

import { NavLinkType } from '@/lib/data';
import { useSectionInView } from '@/lib/hooks';

import { ExternalLinkIcon, RightArrowIcon, RightUpArrowIcon } from './icons';
import { Experience, ExperienceData } from '@/lib/experience-data';

const ExperienceLinksList = ({
  links = [],
}: {
  links: Experience['links'];
}) => {
  return (
    <ul className="mb-3 flex flex-row gap-x-4 text-sm">
      {links.map((link) => (
        <li key={link.href}>
          <span className="group">
            <ExternalLinkIcon className="external-link group-hover:text-primary-green mr-1 h-3 w-3" />

            <Link
              href={link.href}
              className="group-hover:text-primary-green pb-1 font-bold text-white"
              target="_blank"
            >
              {link.description}
            </Link>
          </span>
        </li>
      ))}
    </ul>
  );
};

const ExperienceTechList = ({
  technologies = [],
}: {
  technologies: Experience['technologies'];
}) => {
  return (
    <ul className="flex flex-row flex-wrap gap-x-1 gap-y-1">
      {technologies.map((technology) => (
        <li key={technology} className="tech">
          {technology}
        </li>
      ))}
    </ul>
  );
};

const ExperienceListItem = ({
  date,
  title,
  description,
  links = [],
  technologies = [],
}: {
  date: string;
  title: { description: string; href: string };
  description: string;
  links?: { href: string; description: string }[];
  technologies?: string[];
}) => {
  return (
    <li className="mb-12">
      <header className="mb-1 text-sm">{date}</header>

      <span className="group flex flex-row flex-wrap items-center">
        <Link
          className="group-hover:text-primary-green mb-3 text-lg font-medium text-slate-200"
          href={title.href}
          target="_blank"
        >
          {title.description}

          <RightUpArrowIcon className="external-link group-hover:text-primary-green group-hover:-translate-y-1 group-hover:translate-x-1" />
        </Link>
      </span>

      <p className="mb-3">{description}</p>

      <ExperienceLinksList links={links} />

      <ExperienceTechList technologies={technologies} />
    </li>
  );
};

const Experiences = () => {
  const { ref } = useSectionInView(NavLinkType.EXPERIENCE);

  return (
    <section id={NavLinkType.EXPERIENCE} ref={ref}>
      <h1 className="head_text">EXPERIENCE</h1>

      <ul>
        {ExperienceData.map((experience) => (
          <ExperienceListItem
            key={experience.title.href}
            date={experience.date}
            title={experience.title}
            description={experience.description}
            links={experience.links}
            technologies={experience.technologies}
          />
        ))}
      </ul>

      <a href="/resume.pdf" download className="group flex flex-row">
        <span className="link-indicator group-hover:border-white">
          Download Full Resume
        </span>
        <span>
          <RightArrowIcon className="external-link group-hover:translate-x-2 " />
        </span>
      </a>
    </section>
  );
};

export default Experiences;
