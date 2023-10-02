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
          className="relative w-fit pb-1 font-bold text-white hover:text-primary-green focus-visible:text-teal-300"
          target="_blank"
        >
          <ExternalLinkIcon className="external-link mr-1 h-3 w-3" />
          {link.description}
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
    <li className="group relative mb-12 pb-1 transition-all motion-reduce:transition-none lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
      <div className="absolute -inset-x-6 -inset-y-4 -z-10 hidden rounded lg:block lg:group-hover:bg-slate-800/50 "></div>

      <div>
        <header className="mb-1 text-sm">{date}</header>

        <Link
          className="group/link font-medium text-slate-200  hover:text-teal-300 focus-visible:text-teal-300"
          href={title.href}
          target="_blank"
          aria-label={title.description}
        >
          <span className="absolute -inset-x-6 -inset-y-4 hidden rounded lg:block"></span>
          <span>
            {titleSplit.textStart}
            <span className="whitespace-nowrap">
              {' '}
              {titleSplit.textEnd}
              <RightUpArrowIcon className="external-link group-hover/link:-translate-y-1 group-hover/link:translate-x-1" />
            </span>
          </span>
        </Link>

        <p className="mb-3">{description}</p>

        {links.length ? <ExperienceLinksList links={links} /> : null}

        {technologies.length ? (
          <ExperienceTechList technologies={technologies} />
        ) : null}
      </div>
    </li>
  );
};

const Experiences = () => {
  const { ref } = useSectionInView(NavLinkType.EXPERIENCE);

  return (
    <section id={NavLinkType.EXPERIENCE} ref={ref}>
      <h1 className="head_text">EXPERIENCE</h1>

      <ul className="group/list">
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

      <a
        href="/resume.pdf"
        download
        className="group inline-flex w-fit"
        target="_blank"
      >
        <span>
          <span className="link-indicator group-hover:border-white">
            Download Full Resume
          </span>
          <span className="link-indicator whitespace-nowrap group-hover:border-white">
            {' '}
            Resume
            <RightArrowIcon className="external-link group-hover:translate-x-2 group-focus-visible:translate-x-2" />
          </span>
        </span>
      </a>
    </section>
  );
};

export default Experiences;
