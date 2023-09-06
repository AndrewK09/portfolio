'use client';

import Link from 'next/link';

import { NavLinkType } from '@/lib/data';
import { useSectionInView } from '@/lib/hooks';

import { ExternalLinkIcon, RightArrowIcon, RightUpArrowIcon } from './icons';
import { Experience, ExperienceData } from '@/lib/experience-data';
import { separateLastWordOfText } from '@/lib/helpers';

const ExperienceLinksList = ({
  links = [],
}: {
  links: Experience['links'];
}) => (
  <ul className="mb-3 flex flex-row gap-x-4 text-sm">
    {links.map((link) => (
      <li key={link.href}>
        <Link
          href={link.href}
          className="group w-fit pb-1 font-bold text-white"
          target="_blank"
        >
          <ExternalLinkIcon className="external-link group-hover:text-primary-green mr-1 h-3 w-3" />
          <span className="group-hover:text-primary-green">
            {link.description}
          </span>
        </Link>
      </li>
    ))}
  </ul>
);

const ExperienceTechList = ({
  technologies = [],
}: {
  technologies: Experience['technologies'];
}) => (
  <ul className="flex flex-row flex-wrap gap-x-1 gap-y-1">
    {technologies.map((technology) => (
      <li key={technology} className="tech">
        {technology}
      </li>
    ))}
  </ul>
);

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
  const titleSplit = separateLastWordOfText(title.description);

  return (
    <li className="mb-12">
      <header className="mb-1 text-sm">{date}</header>

      <Link
        className="group mb-3 w-fit  items-center text-lg font-medium text-slate-200"
        href={title.href}
        target="_blank"
      >
        <span className="group-hover:text-primary-green">
          {titleSplit.textStart}
        </span>

        <span className="group-hover:text-primary-green whitespace-nowrap">
          {' '}
          {titleSplit.textEnd}
          <RightUpArrowIcon className="external-link group-hover:-translate-y-1 group-hover:translate-x-1" />
        </span>
      </Link>

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

      <Link href="/resume.pdf" download className="group inline-flex w-fit ">
        <span>
          <span className="link-indicator group-hover:border-white">
            Download Full Resume
          </span>
          <span className="link-indicator whitespace-nowrap group-hover:border-white">
            {' '}
            Resume
            <RightArrowIcon className="external-link group-hover:translate-x-2 " />
          </span>
        </span>
      </Link>
    </section>
  );
};

export default Experiences;
