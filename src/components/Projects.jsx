import React from 'react';
import {PROJECTS} from "../constants";

const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h1 className="my-20 text-center text-4xl">Projects</h1>
      <div>
        {PROJECTS.map((projects, index) => (
          <a key={index} href={projects.href} target="" className='w-full shadow-xl flex flex-col p-4 my-8 rounded-lg hover:scale-105 duration-300'>
            <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
              <div className="w-full lg:w-1/4">
                <img src={projects.image} className="w-8/12 h-full object-cover rounded-md mr-4" />
              </div> 
              <div className="w-full max-w-xl lg:w-3/4">
                <h6 className="mb-2 font-semibold">
                  {projects.title}<span className="text-sm text-purple-800"></span>
                </h6>
                <p className="mb-4 text-neutral-400">{projects.description}</p>
                {projects.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-600"
                >
                  {tech}
                </span>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Projects;
