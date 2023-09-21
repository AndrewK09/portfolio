const LinkWrap = ({ text, href }: { text: string; href: string }) => (
  <a
    href={href}
    className="hover:text-primary-green font-medium text-slate-300"
    target="_blank"
    rel="noreferrer"
  >
    {text}
  </a>
);

const About = () => {
  return (
    <footer>
      <p className="text-sm">
        Built with <LinkWrap text="Next.js " href="https://nextjs.org/" />
        and <LinkWrap text="Tailwind CSS, " href="https://tailwindcss.com/" />
        deployed with{' '}
        <LinkWrap text="Vercel" href="https://vercel.com/dashboard" />.
      </p>
    </footer>
  );
};

export default About;
