'use client';

import { NavLinkType } from '@/lib/data';
import { useSectionInView } from '@/lib/hooks';

const About = () => {
  const { ref } = useSectionInView(NavLinkType.ABOUT);

  return (
    <section id="about" ref={ref}>
      <h1 className="head_text">ABOUT</h1>
      <p className="mb-4">
        {`Back in 2012, I decided to try my hand at creating custom Tumblr themes
        and tumbled head first into the rabbit hole of coding and web
        development. Fast-forward to today, and I've had the privilege of
        building software for an advertising agency, a start-up, a student-led
        design studio, and a huge corporation.`}
      </p>
      <p className="mb-4">
        {`My main focus these days is building products and leading projects for
        our clients at Upstatement. In my free time I've also released an online
        video course that covers everything you need to know to build a web app
        with the Spotify API.`}
      </p>
      <p className="mb-4">
        In my free time, I enjoy practicing piano, learning new things, hiking
        in the summer and snowboarding in the winter.
      </p>
    </section>
  );
};

export default About;
