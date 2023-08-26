'use client';

import Link from 'next/link';

const NavbarLink = ({ href, label }: { href: string; label: string }) => {
  return (
    <Link href={href} className="group flex items-center py-3">
      <span className="mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200"></span>
      <span className="text-xs font-bold uppercase  tracking-widest group-hover:text-slate-200 group-focus-visible:text-slate-200">
        {label}
      </span>
    </Link>
  );
};

const navbarLinks = ['about', 'experience', 'projects', 'contact'];

const Navbar = () => {
  return (
    <nav className="flex">
      <ul>
        {navbarLinks.map((link) => (
          <li key={link}>
            <NavbarLink href={`#${link}`} label={link} />
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
