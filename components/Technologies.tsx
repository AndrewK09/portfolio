'use client';

import { MainTechnologies, OtherTechnologies, NavLinkType } from '@/lib/data';
import { useSectionInView } from '@/lib/hooks';

const TechnologyList = ({
  category,
  technologies,
}: {
  category: string;
  technologies: string[];
}) => {
  return (
    <>
      <h2 className="mb-2 font-bold text-slate-200">{`${category}:`} </h2>

      <ul className="mb-6 flex flex-row flex-wrap gap-x-2">
        {technologies.map((technology) => (
          <li className="tech" key={technology}>
            {technology}
          </li>
        ))}
      </ul>
    </>
  );
};

const Technologies = () => {
  const { ref } = useSectionInView(NavLinkType.TECHNOLOGY);

  return (
    <section id={NavLinkType.TECHNOLOGY} ref={ref} className="w-full">
      <h1 className="head_text">TECHNICAL SKILLS</h1>

      <TechnologyList category="MAIN" technologies={MainTechnologies} />
      <TechnologyList category="OTHER" technologies={OtherTechnologies} />
    </section>
  );
};

export default Technologies;
