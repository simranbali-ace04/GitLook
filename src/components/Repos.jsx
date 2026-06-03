import React from "react";
import { FaRegStar } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { GoDotFill } from "react-icons/go";

const Repos = () => {
  return (
    <div className="w-3/4 h-auto p-8">
      <div className="flex flex-row mt-5 gap-2">
        <div className="font-heading text-3xl text-smoky font-semibold">
          <h1>Repositories</h1>
        </div>
        <div className="border-t border-bone text-olive-500 w-full mt-5"></div>
      </div>

      <div className="flex flex-row mt-3 gap-3">
        {/* Cards */}

        <div className="w-1/3 border-2 border-olive-400 min-h-40">
          <div className="flex flex-row justify-between">
            <h2 className="font-heading text-2xl font-semibold text-smoky p-4">
              GitLook
            </h2>
            <div className="flex flex-row mt-5 mr-16 gap-1">
              <FaRegStar size={16} />
              <p className="text-smoky font-body text-sm">17</p>
            </div>
          </div>
          <p className="font-body text-xs font-semibold text-olive ml-4 tracking-wider">
            GitLook is a GitHub profile finder built with React and the GitHub
            REST API for exploring developer profiles, repositories, and
            statistics.<repellendus className="Lorem1000"></repellendus>
          </p>
          <div className="font-body text-xs font-semibold text-olive-500 ml-4 mt-5 flex gap-8">
            <p className="flex flex-row justify-center">
              {" "}
              <GoDotFill className="text-yellow-300" /> JavaScript{" "}
            </p>
            <p>Updated today </p>
          </div>
          <div className="p-4 flex justify-between">
            <div className="text-xs text-smoky font-body tracking-tight flex flex-row gap-1 hover:underline">
              <a href="https://github.com/simranbali-ace04/GitLook">
                View Repository
              </a>
              <FaArrowRight size={14} className="mt-1" />
            </div>
            <div className="text-xs text-smoky font-body tracking-tight flex flex-row gap-1 hover:underline">
              <a href="https://vault-wise-ace.vercel.app/">Live Demo</a>
              <FiExternalLink size={14} className="mt-1" />
            </div>
          </div>

          
        </div>

        <div className="w-1/3 border-2 border-olive-400 min-h-40">
          <div className="flex flex-row justify-between">
            <h2 className="font-heading text-2xl font-semibold text-smoky p-4">
              GitLook
            </h2>
            <div className="flex flex-row mt-5 mr-16 gap-1">
              <FaRegStar size={16} />
              <p className="text-smoky font-body text-sm">17</p>
            </div>
          </div>
          <p className="font-body text-xs font-semibold text-olive ml-4 tracking-wider">
            GitLook is a GitHub profile finder built with React and the GitHub
            REST API for exploring developer profiles, repositories, and
            statistics.<repellendus className="Lorem1000"></repellendus>
          </p>
          <div className="font-body text-xs font-semibold text-olive-500 ml-4 mt-5 flex gap-8">
            <p className="flex flex-row justify-center">
              {" "}
              <GoDotFill className="text-yellow-300" /> JavaScript{" "}
            </p>
            <p>Updated today </p>
          </div>
          <div className="p-4 flex justify-between">
            <div className="text-xs text-smoky font-body tracking-tight flex flex-row gap-1 hover:underline">
              <a href="https://github.com/simranbali-ace04/GitLook">
                View Repository
              </a>
              <FaArrowRight size={14} className="mt-1" />
            </div>
            <div className="text-xs text-smoky font-body tracking-tight flex flex-row gap-1 hover:underline">
              <a href="https://vault-wise-ace.vercel.app/">Live Demo</a>
              <FiExternalLink size={14} className="mt-1" />
            </div>
          </div>
          </div>

          <div className="w-1/3 border-2 border-olive-400 min-h-40">
          <div className="flex flex-row justify-between">
            <h2 className="font-heading text-2xl font-semibold text-smoky p-4">
              GitLook
            </h2>
            <div className="flex flex-row mt-5 mr-16 gap-1">
              <FaRegStar size={16} />
              <p className="text-smoky font-body text-sm">17</p>
            </div>
          </div>
          <p className="font-body text-xs font-semibold text-olive ml-4 tracking-wider">
            GitLook is a GitHub profile finder built with React and the GitHub
            REST API for exploring developer profiles, repositories, and
            statistics.<repellendus className="Lorem1000"></repellendus>
          </p>
          <div className="font-body text-xs font-semibold text-olive-500 ml-4 mt-5 flex gap-8">
            <p className="flex flex-row justify-center">
              {" "}
              <GoDotFill className="text-yellow-300" /> JavaScript{" "}
            </p>
            <p>Updated today </p>
          </div>
          <div className="p-4 flex justify-between">
            <div className="text-xs text-smoky font-body tracking-tight flex flex-row gap-1 hover:underline">
              <a href="https://github.com/simranbali-ace04/GitLook">
                View Repository
              </a>
              <FaArrowRight size={14} className="mt-1" />
            </div>
            <div className="text-xs text-smoky font-body tracking-tight flex flex-row gap-1 hover:underline">
              <a href="https://vault-wise-ace.vercel.app/">Live Demo</a>
              <FiExternalLink size={14} className="mt-1" />
            </div>
          </div>
          </div>
      </div>
    </div>
  );
};

export default Repos;
