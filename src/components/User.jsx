import React from "react";
import Heading from "./Heading";
import { IoIosLink } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { BsCalendar2Date } from "react-icons/bs";
import { FiExternalLink } from "react-icons/fi";

const User = ({ data, totalStars }) => {
  if (!data) {
    return null;
  }
  return (
    <div className="w-3/4 border-2 border-olive-400 p-10 flex flex-col">
      <div className="flex flex-row gap-6">
        <div className="flex justify-between">
          <img
            src={data.avatar_url}
            alt="user_avatar"
            className="h-40 flex flex-wrap rounded-full object-fit"
          />
        </div>
        <div className="w-2/3">
          <h1 className="font-heading text-4xl font-semibold tracking-tight">
            {data.name}
          </h1>
          <p className="font-body text-olive text-md font-semibold">
            @{data.login}
          </p>
          <p className="font-body text-olive text-sm mt-2 max-w-3/5">
            {data.bio}
          </p>
          <a
            href={data.html_url}
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
              <p>{data.location}</p>
            </span>
            <span className="flex gap-0.5 items-center">
              <IoIosLink size={20} className="text-olive" />
              <a
                href={data.blog}
                className="text-olive hover:underline font-semibold"
              >
                {data.blog}
              </a>
            </span>
            <span className="flex gap-0.5 items-center">
              <BsCalendar2Date size={20} className="text-olive" />
              <p>Joined {new Date(data.updated_at).toLocaleDateString()}</p>
            </span>
          </div>
        </div>
      </div>

      <div className="border-t border-bone text-olive-400 mt-4"></div>

      <div className="flex flex-row justify-between px-24">
        <div className="border-r border-bone pr-24 text-olive-500 mt-2">
          <h1 className="font-body text-olive text-sm font-semibold mt-2">
            Followers
            <p className="font-heading text-smoky text-5xl font-semibold">
              {data.followers}
            </p>
          </h1>
        </div>

        <div className="border-r border-bone pr-24  text-olive-500 mt-2">
          <h1 className="font-body text-olive text-sm font-semibold mt-2">
            Following
            <p className="font-heading text-smoky text-5xl font-semibold">
              {data.following}
            </p>
          </h1>
        </div>

        <div className="border-r border-bone pr-24  text-olive-500 mt-2">
          <h1 className="font-body text-olive text-sm font-semibold mt-2">
            Repos
            <p className="font-heading text-smoky text-5xl font-semibold">
              {data.public_repos}
            </p>
          </h1>
        </div>

        <div className="text-olive-500 mt-2">
          <h1 className="font-body text-olive text-sm font-semibold mt-2">
            Total Stars
            <p className="font-heading text-smoky text-5xl font-semibold">
              {totalStars}
            </p>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default User;
