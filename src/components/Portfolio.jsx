/* eslint-disable react/no-unknown-property */

import { projects } from "./project";

const Portfolio = () => {
  return (
    <div className="mx-4 my-32 lg:mx-12" id="portfolio">
      <div className="mb-20 flex flex-col justify-between gap-5 sm:flex-row md:items-center">
        <div>
          <p className="mb-5 text-xl font-semibold text-headingcolor">
            Recent Projects
          </p>
          <h2 className="text-4xl font-bold text-headingcolor md:text-5xl">
            My Portfolio
          </h2>
        </div>

        <button className=" w-2/3  rounded-md bg-dribble px-4 py-3 text-white sm:w-auto">
          <a
            href="https://github.com/hit-man-shu/hit-man-shu"
            target="_blank"
            rel="noopener noreferrer"
            className="flex gap-2 text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              width="24"
              height="24"
            >
              <path
                fillRule="evenodd"
                d="M12 0C5.37 0 0 5.37 0 12c0 5.302 3.438 9.8 8.205 11.385.6.11.82-.26.82-.58 0-.29-.01-1.25-.01-2.27-3.002.65-3.905-1.45-3.905-1.45-.527-1.337-1.287-1.69-1.287-1.69-1.054-.72.08-.705.08-.705 1.167.082 1.783 1.2 1.783 1.2 1.037 1.778 2.718 1.263 3.384.965.105-.76.404-1.27.735-1.56-2.577-.295-5.28-1.29-5.28-5.73 0-1.265.45-2.3 1.18-3.115-.12-.298-.51-1.477.11-3.08 0 0 1.005-.31 3.3 1.2.96-.265 1.98-.397 3-.4 1.02.003 2.04.135 3 .4 2.28-1.51 3.285-1.2 3.285-1.2.62 1.603.23 2.782.115 3.08.73.815 1.18 1.85 1.18 3.115 0 4.455-2.705 5.43-5.29 5.72.415.36.785 1.066.785 2.145 0 1.55-.015 2.805-.015 3.185 0 .32.215.7.825.58C20.565 21.795 24 17.3 24 12c0-6.63-5.37-12-12-12z"
              />
            </svg>
            Visit My GitHub
          </a>
        </button>
      </div>

      {/* project card */}
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
        {projects.map((project) => (
          <div key={project.id} className="cursor-pointer rounded-xl shadow-xl">
            <img
              src={project.image}
              alt=""
              className="rounded-t duration-300 hover:scale-90"
            />
            <div className="p-8">
              <h3 className="mb-2 text-2xl font-semibold text-headingcolor">
                {project.name}
              </h3>
              <p className="mb-4 text-body">{project.description}</p>
              <a
                href={project.url}
                target="_blank"
                rel="noreferrer"
                className="underline underline-offset-8 duration-300 hover:text-pink-700"
              >
                View Live
              </a>
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="mx-4  rounded-md bg-dribble px-4 py-2 text-white"
              >
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
