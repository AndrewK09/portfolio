import Experiences from '@/components/Experiences';
import About from '@/components/About';
import Projects from '@/components/Projects';
import { SocialIcon } from 'react-social-icons';

const SocialIconWrap = ({ url }: { url: string }) => {
  return <SocialIcon url={url} fgColor="white" bgColor="transparent" />;
};

const Portfolio = () => {
  return (
    <div className=" xl:px-18 mx-auto w-full max-w-screen-xl gap-x-20 px-10 lg:px-16 xl:flex xl:max-w-screen-2xl xl:justify-between">
      <header className="py-52 lg:top-0 xl:sticky xl:flex xl:max-h-screen xl:min-w-fit xl:flex-col xl:justify-between xl:py-24 2xl:w-2/5">
        <div>
          <h1 className="text-6xl font-bold text-slate-100 sm:text-7xl md:text-8xl xl:text-6xl ">
            Andrew Kan
          </h1>
          <h2 className="mt-3 text-xl font-medium text-slate-300 sm:text-2xl md:text-3xl xl:text-xl">
            Full Stack Software Engineer
          </h2>
          <p className="mt-6 max-w-xs text-lg">
            I build accessible, inclusive products and digital experiences for
            the web.
          </p>
        </div>

        <ul className="-ml-2 mt-4 flex">
          <li>
            <SocialIconWrap url="https://github.com/AndrewK09" />
          </li>

          <li>
            <SocialIconWrap url="https://www.linkedin.com/in/andrew-kn/" />
          </li>
        </ul>
      </header>

      <main className="w-auto  xl:py-24">
        <About />
        <Experiences />
        <Projects />
      </main>
    </div>
  );
};

export default Portfolio;
