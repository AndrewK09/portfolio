import Experiences from "@/components/Experiences"
import About from "@/components/About"
import Projects from "@/components/Projects"

const Portfolio = () => {

  return (
    <div className="w-full mx-auto max-w-screen-lg py-12 px-10 font-sans bg-slate-800">


      <header className='py-52'>
        <h1 className='text-6xl font-bold sm:text-7xl'>Andrew Kan</h1>
        <h2 className='text-2xl sm:text-xl font-medium mt-3'>Full Stack Software Engineer</h2>
        <p className='text-lg mt-6 max-w-xs'>I build accessible, inclusive products and digital experiences for the web.</p>
      </header>



      <main className='pt-24'>
        <About />
        <Experiences />
        <Projects />
      </main>



    </div>
  )
}

export default Portfolio