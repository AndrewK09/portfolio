'use client';

import Link from 'next/link';

import { NavLinkType, SPJTechnologies } from '@/lib/data';
import { useSectionInView } from '@/lib/hooks';

const Experience = ({
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
    <div className="mb-12">
      <header className="mb-1 text-sm">{date}</header>
      <div>
        <span className="group flex flex-row flex-wrap items-center">
          <Link
            className="mb-3 text-lg font-medium text-slate-200 group-hover:text-blue-500"
            href={title.href}
            target="_blank"
          >
            {title.description}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="external-link group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-blue-500"
            >
              <path d="M7 17l9.2-9.2M17 17V7H7" />
            </svg>
          </Link>
        </span>

        <p className="mb-3">{description}</p>

        <ul className="mb-3 flex flex-row gap-x-4 text-sm">
          {links.map((link) => (
            <li key={link.href}>
              <span className="group">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="external-link mr-1 h-3 w-3 group-hover:text-blue-500"
                >
                  <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                  <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                </svg>
                <Link
                  href={link.href}
                  className="pb-1 font-bold text-white group-hover:text-blue-500"
                  target="_blank"
                >
                  {link.description}
                </Link>
              </span>
            </li>
          ))}
        </ul>

        <ul className="flex flex-row flex-wrap gap-x-1 gap-y-1">
          {technologies.map((technology) => (
            <li key={technology} className="tech">
              {technology}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const Experiences = () => {
  const { ref } = useSectionInView(NavLinkType.EXPERIENCE);

  return (
    <section id={NavLinkType.EXPERIENCE} ref={ref}>
      <h1 className="head_text">EXPERIENCE</h1>

      <Experience
        date="JUL 2020 - FEB 2023"
        title={{
          description: 'Full Stack Software Engineer - SPJ Solutions Inc',
          href: 'https://spjsolutions.com/',
        }}
        description="Delivered high-quality, robust production code to a variety of clients including Aerodata and Osceola County Sheriff’s Office. Collaborated closely with network consultants to develop and troubleshoot issues. Provided leadership within engineering department through close collaboration, and mentorship."
        links={[
          {
            href: 'https://www.vmware.com/content/dam/digitalmarketing/vmware/en/pdf/customers/vmw-osceola-county-sheriff-en-success-story.pdf',
            description: 'Case Study 1',
          },
          {
            href: 'https://www.vmware.com/content/dam/digitalmarketing/vmware/en/pdf/casestudy/customers/vmware-aerodata-casestudy.pdf',
            description: 'Case Study 2',
          },
        ]}
        technologies={SPJTechnologies}
      />

      <Experience
        date="AUG 2019 - NOV 2019"
        title={{
          description: 'Software Engineering Immersive Resident - Galvanize',
          href: 'https://www.galvanize.com',
        }}
        description="Mentored students in JavaScript fundamentals, data structures, and front/back-end technologies resulting in 100% students passing the midterm. Collaborated with other Residents on ways to improve curriculum and experience for students"
      />

      <a href="/resume.pdf" download className="group flex flex-row">
        <span className="link-indicator group-hover:border-white">
          Download Full Resume
        </span>
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#ffffff"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="external-link group-hover:translate-x-2 "
          >
            <path d="M5 12h13M12 5l7 7-7 7" />
          </svg>
        </span>
      </a>
    </section>
  );
};

export default Experiences;
