import React from "react";
import Heading from "./Heading";
import { IoIosLink } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { BsCalendar2Date } from "react-icons/bs";
import { FiExternalLink } from "react-icons/fi";

const User = () => {
  return (
    <div className="w-3/4 border-2 border-olive-400 p-10 flex flex-col">
      <div className="flex flex-row gap-6">
        <div className="flex justify-between">
          <img
            src="https://tse1.mm.bing.net/th/id/OIP.3ARNT5gTNJSahwYCO5AQlAHaHa?rs=1&pid=ImgDetMain&o=7&rm=3"
            alt="user_avatar"
            className="h-40 flex flex-wrap rounded-full object-fit"
          />
        </div>
        <div className="w-2/3">
          <h1 className="font-heading text-4xl font-semibold tracking-tight">
            Simran Bali
          </h1>
          <p className="font-body text-olive text-md font-semibold">
            @simranbali-ace04
          </p>
          <p className="font-body text-olive text-sm mt-2 max-w-3/5">
            aka Ace cse '28 | dsa grind x dev zone exploring and figuring out
            building quietly, showing loudly later
          </p>
          <a
            href="https://github.com/simranbali-ace04"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 mt-4 px-3 py-2 bg-olive-50 border-2 border-olive-500 rounded-md text-sm font-body text-smoky active:scale-95 "
          >
            View on GitHub
            <FiExternalLink size={16} className="text-olive" />
          </a>
          <div className="flex gap-5 p-4 font-body text-olive text-sm">
            <span className="flex gap-0.5 items-center">
              <FaLocationDot size={20} className="text-olive" />
              <p>Delhi, India</p>
            </span>
            <span className="flex gap-0.5 items-center">
              <IoIosLink size={20} className="text-olive" />
              <a
                href="https://simranbali-ace04.github.io/"
                className="text-olive hover:underline font-semibold"
              >
                simranbali-ace04.github.io
              </a>
            </span>
            <span className="flex gap-0.5 items-center">
              <BsCalendar2Date size={20} className="text-olive" />
              <p>Joined January 2020</p>
            </span>
          </div>
        </div>
      </div>

      <div className="border-t border-bone text-olive-400 mt-4"></div>

      <div className="flex flex-row justify-between px-24">
        <div className="border-r border-bone pr-24 text-olive-500 mt-2">
          <h2 className="font-body text-olive text-sm font-semibold mt-2">
            Followers
            <h1 className="font-heading text-smoky text-5xl font-semibold">
              2
            </h1>
          </h2>
        </div>

        <div className="border-r border-bone pr-24  text-olive-500 mt-2">
          <h2 className="font-body text-olive text-sm font-semibold mt-2">
            Following
            <h1 className="font-heading text-smoky text-5xl font-semibold">
              39
            </h1>
          </h2>
        </div>

        <div className="border-r border-bone pr-24  text-olive-500 mt-2">
          <h2 className="font-body text-olive text-sm font-semibold mt-2">
            Repos
            <h1 className="font-heading text-smoky text-5xl font-semibold">
              18
            </h1>
          </h2>
        </div>

        <div className="text-olive-500 mt-2">
          <h2 className="font-body text-olive text-sm font-semibold mt-2">
            Total Stars
            <h1 className="font-heading text-smoky text-5xl font-semibold">
              5
            </h1>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default User;
