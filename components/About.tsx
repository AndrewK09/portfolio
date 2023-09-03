'use client';

import { NavLinkType } from '@/lib/data';
import { useSectionInView } from '@/lib/hooks';

const About = () => {
  const { ref } = useSectionInView(NavLinkType.ABOUT);

  return (
    <section id="about" ref={ref}>
      <h1 className="head_text">ABOUT</h1>
      <p className="mb-4">
        {`Back in 2019, I had started learning JavaScript, HTML and CSS whenever I had some free time. 
        I ended up enjoying coding and web development so much that I decided to pursue programming full-time. 
        I have been a professional software engineer for over 2 years now and had the opportunity to learn a variety of 
        technologies, both frontend and backend over the past few years. `}
      </p>

      <p>
        My goal is to build highly performant applications that solve real-world
        problems and provide users with an awesome experience.
      </p>

      <br />
      <p className="mb-4">
        In my free time, I enjoy practicing piano, learning new things, hiking
        in the summer and snowboarding in the winter.
      </p>
    </section>
  );
};

export default About;
