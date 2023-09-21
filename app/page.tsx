import About from '@/components/About';
import Experiences from '@/components/Experiences';
import Projects from '@/components/Projects';
import Navbar from '@/components/Navbar';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Technologies from '@/components/Technologies';
import SocialIconWrap from '@/components/SocialIconWrap';

const Portfolio = () => {
  return (
    <div className=" mx-auto w-full max-w-screen-xl px-4 xs:px-10 md:px-20 lg:flex lg:justify-between lg:gap-x-28 lg:px-16">
      <header className="py-52 lg:sticky  lg:top-0 lg:flex lg:max-h-screen lg:min-w-fit lg:flex-col lg:justify-between lg:py-24 lg:pb-20 2xl:w-2/5">
        <div>
          <h1 className="text-4xl font-extrabold text-slate-100 xs:text-5xl sm:text-6xl md:text-7xl lg:text-6xl">
            Andrew Kan
          </h1>
          <h2 className="mt-6 text-xl font-medium text-slate-200 xs:text-xl sm:text-2xl md:text-3xl lg:text-2xl">
            Full Stack Software Engineer
          </h2>
          <p className="lg: mb-8 mt-6 text-lg lg:max-w-xs">
            I build accessible, inclusive products and digital experiences for
            the web.
          </p>

          <Navbar />
        </div>

        <ul className="lg: -ml-2 mt-10 flex">
          <li>
            <SocialIconWrap url="https://github.com/AndrewK09" />
          </li>

          <li>
            <SocialIconWrap url="https://www.linkedin.com/in/andrew-kn/" />
          </li>
        </ul>
      </header>

      <main className="w-auto py-12 lg:py-24">
        <About />
        <Technologies />
        <Experiences />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </div>
  );
};

export default Portfolio;
