'use client';

import Link from 'next/link';
import { NavLinkType, navLinks } from '@/lib/data';
import { useActiveSectionContext } from '@/lib/hooks';

const NavbarLink = ({
  href,
  label,
  activeLink,
}: {
  href: string;
  label: string;
  activeLink: NavLinkType;
}) => {
  return (
    <Link
      href={href}
      className={`${
        activeLink === label ? 'active ' : ''
      }group flex items-center py-3`}
    >
      <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200"></span>
      <span className="nav-text text-xs font-bold uppercase  tracking-widest group-hover:text-slate-200 group-focus-visible:text-slate-200">
        {label}
      </span>
    </Link>
  );
};

const Navbar = () => {
  // const [activeLink, setActiveL ink] = useState<NavLinkType>(NavLinkType.ABOUT);
  const { activeSection, setActiveSection } = useActiveSectionContext();

  return (
    <nav className="hidden lg:block">
      <ul className="w-max">
        {navLinks.map(({ name, href }) => (
          <li key={name} onClick={() => setActiveSection(name)}>
            <NavbarLink href={href} label={name} activeLink={activeSection} />
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
