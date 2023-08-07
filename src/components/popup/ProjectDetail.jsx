import React from "react";
import { AiOutlineClose, AiOutlineGithub } from "react-icons/ai";
import { FiFigma , FiExternalLink} from "react-icons/fi";
import PropTypes from "prop-types";

export default function ProjectDetail({ projects, onClose }) {
  return (
    <div className="flex justify-center w-full mx-[25%]">
      <div className="flex bg-primary_bg p-6 rounded-lg space-x-4 w-full">
        <div
          className="w-[40%] max-h-80 bg-cover"
          style={{
            backgroundImage: `url(${projects.img})`,
          }}
        ></div>
        <div className="w-[60%] space-y-4 font-primary">
          <div className="flex justify-end">
            <AiOutlineClose
              className="text-project_name text-white/[.60] hover:text-white cursor-pointer"
              onClick={onClose}
            />
          </div>
          <div>
            <h1 className="text-titile font-secondary capitalize pb-2">{projects.name}</h1>
            <p className="w-fit text-description">
                {projects.description}
            </p>
          </div>
          <h1 className="font-secondary">Project Details:</h1>

          <div className="space-y-3">
          <hr className="mb-2 w-1full border-white/[.30]" />
            <div className="flex space-x-2">
              <h1 className="font-primary">Client:</h1>
              <p className="text-description">{projects.client}</p>
            </div>
            <hr className="mb-2 w-1full border-white/[.30]" />

            <div className="flex space-x-2">
              <h1 className="font-primary">Technologies:</h1>
              <p className="text-description capitalize">
                {projects.technologies}
              </p>
            </div>
            <hr className="mb-2 w-1full border-white/[.30]" />

            <div className="flex space-x-2">
              <h1 className="font-primary">Hours Soent:</h1>
              <div className="flex text-description space-x-1">
                <p>{projects.hours}</p>
                <p>hours</p>
              </div>
            </div>
            <hr className="mb-2 w-1full border-white/[.30]" />

            <div className="flex space-x-2">
              <h1 className="font-primary">Published Date:</h1>
              <p className="text-description">{projects.publish}</p>
            </div>
            <hr className="mb-2 w-1full border-white/[.30]" />

            <div className="flex space-x-2">
              <h1 className="font-primary">URL:</h1>
              <a
                target="_blank"
                rel="noreferrer"
                href={projects.url}
                className="text-cyan-300"
              >
                {projects.url_tag}
              </a>
            </div>

            <div className="flex space-x-2">
              <div className="capitalize flex items-center space-x-2 bg-black w-fit p-2 px-4 rounded-lg cursor-pointer">
                <FiFigma className="text-input_icon"/>
                <h1>figma</h1>
              </div>

              <div className="capitalize flex items-center space-x-2 bg-black w-fit p-2 px-4 rounded-lg cursor-pointer">
                <AiOutlineGithub className="text-input_icon"/>
                <h1>github</h1>
              </div>

              <div className="capitalize flex items-center space-x-2 bg-black w-fit p-2 px-4 rounded-lg cursor-pointer">
                <FiExternalLink className="text-input_icon"/>
                <h1>view more</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

ProjectDetail.propTypes = {
  projects: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
};
