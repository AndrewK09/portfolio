export enum NavLinkType {
  ABOUT = 'about',
  EXPERIENCE = 'experience',
  PROJECT = 'projects',
  CONTACT = 'contact',
}

export const navLinks = [
  {
    name: NavLinkType.ABOUT,
    href: '#about',
  },
  {
    name: NavLinkType.EXPERIENCE,
    href: '#experience',
  },
  {
    name: NavLinkType.PROJECT,
    href: '#projects',
  },
  {
    name: NavLinkType.CONTACT,
    href: '#contact',
  },
];
