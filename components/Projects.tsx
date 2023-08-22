import Image, { StaticImageData } from 'next/image';

import project1 from '@/public/test-background.png';

const Project = ({
  title,
  description,
  image,
  technologies,
  githubUrl,
  websiteUrl,
}: {
  title: string;
  description: string;
  image: { src: StaticImageData; alt: string };
  technologies: string[];
  githubUrl?: string;
  websiteUrl?: string;
}) => {
  return (
    <div className="relative mb-8">
      <div className="-z-10 opacity-20 ">
        <Image src={image.src} alt={image.alt} />
      </div>

      <div className="absolute left-0 top-0 z-10 flex-col px-10 py-16 ">
        <header className="mb-10 text-2xl font-bold ">{title}</header>

        <p className="mb-6">{description}</p>

        <ul className="mb-6 flex flex-wrap space-x-4">
          {technologies.map((technology) => (
            <li key={technology}>{technology}</li>
          ))}
        </ul>

        <div className="space-x-4">
          {githubUrl ? <span>Git</span> : null}
          {websiteUrl ? <span>Git</span> : null}
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <section className="p-4 pt-2">
      <h1 className="head_text p-2 pt-4">Projects</h1>
      <Project
        title="Test project 1"
        description="Web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more."
        image={{ src: project1, alt: 'picture' }}
        technologies={['tech1', 'tech2']}
      />
    </section>
  );
};

export default Projects;
