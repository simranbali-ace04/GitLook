import React, { useState } from "react";
import { FaRegStar } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { FaRegCircleDot } from "react-icons/fa6";

const Repos = ({ repoData, userData }) => {
  console.log(repoData);
  if (!userData) {
    return null;
  }
  return (
    <div className="w-3/4 h-auto max-h-screen p-8">
      <div className="flex flex-row mt-5 gap-2">
        <div className="font-heading text-3xl text-smoky font-semibold">
          <h1>Repositories</h1>
        </div>
        <div className="border-t border-bone text-olive-400 font-semibold w-full mt-5"></div>
      </div>

      <div className="grid grid-cols-3 gap-4 mt-3">
        {/* Cards */}

        {repoData.map(function (elem) {
          return (
            <div key={elem.id}>
              <div className="w-full border-2 border-olive-400 min-h-40">
                <div className="flex flex-row justify-between">
                  <h2 className="font-heading text-2xl font-semibold text-smoky p-4">
                    {elem.name}
                  </h2>
                  <div className="flex flex-row mt-5 mr-16 gap-1">
                    <FaRegStar size={16} />
                    <p className="text-smoky font-body text-sm">
                      {elem.stargazers_count}
                    </p>
                  </div>
                </div>
                <p className="font-body text-xs font-semibold text-olive ml-4 tracking-wider">
                  {elem.description}
                </p>
                <div className="font-body text-xs font-semibold text-olive-500 ml-4 mt-5 flex gap-8">
                  <p className="flex flex-row justify-center">
                    {" "}
                    <FaRegCircleDot />{" "}
                    {elem.language}{" "}
                  </p>
                  <h2>
                    <p>
                      Updated at{" "}
                      {new Date(elem.updated_at).toLocaleDateString()}
                    </p>
                  </h2>
                </div>
                <div className="p-4 flex justify-between">
                  <div className="text-xs text-smoky font-body tracking-tight flex flex-row gap-1 hover:underline">
                    <a href={elem.html_url}>View Repository</a>
                    <FaArrowRight size={14} className="mt-1" />
                  </div>
                  <div className="text-xs text-smoky font-body tracking-tight flex flex-row gap-1 hover:underline">
                    <a href={elem.homepage}>Live Demo</a>
                    <FiExternalLink size={14} className="mt-1" />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Repos;
