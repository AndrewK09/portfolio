'use client';

import { useState } from 'react';

import Link from 'next/link';

enum ActiveLinkType {
  ABOUT = 'about',
  EXPERIENCE = 'experience',
  PROJECT = 'projects',
  CONTACT = 'contact',
}

const NavbarLink = ({
  href,
  label,
  activeLink,
}: {
  href: string;
  label: string;
  activeLink: ActiveLinkType;
}) => {
  return (
    <Link
      href={`#${href}`}
      className={`${
        activeLink === href ? 'active ' : ''
      }group flex items-center py-3`}
    >
      <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200"></span>
      <span className="nav-text text-xs font-bold uppercase  tracking-widest group-hover:text-slate-200 group-focus-visible:text-slate-200">
        {label}
      </span>
    </Link>
  );
};

const navbarLinks = [
  ActiveLinkType.ABOUT,
  ActiveLinkType.EXPERIENCE,
  ActiveLinkType.PROJECT,
  ActiveLinkType.CONTACT,
];

const Navbar = () => {
  const [activeLink, setActiveLink] = useState<ActiveLinkType>(
    ActiveLinkType.ABOUT
  );

  return (
    <nav className="hidden lg:block">
      <ul className="w-max">
        {navbarLinks.map((link) => (
          <li key={link} onClick={() => setActiveLink(link)}>
            <NavbarLink href={link} label={link} activeLink={activeLink} />
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
