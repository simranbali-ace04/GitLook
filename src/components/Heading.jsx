import React, { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";

const Heading = ({fetchUser}) => {
  const [username , setUsername] = useState('');

  return (
    <div>
      <span className="flex justify-between items-center px-20 py-2.5">
        <h2 className="font-heading text-3xl text-smoky font-bold">GitLook</h2>
        <span className="flex gap-4">
          <h2 className="font-body text-sm text-olive">
            Explore github profiles with ease.
          </h2>
          <FaGithub size={20} />
        </span>
      </span>
      <div className="border-t border-bone text-olive-400"></div>
      <div className="flex flex-row justify-between px-20 py-4">
        <div className="w-1/3 p-2">
          <h1 className="font-heading text-smoky text-6xl font-semibold tracking-tight">
            Discover GitHub Profiles
          </h1>
          <p className="font-body text-olive mt-1.5">
            Search any GitHub username to explore their profile and
            repositories.
          </p>
        </div>
        <div className="w-2/3 px-60 flex items-center-safe">
          <input
            type="text"
            placeholder="Enter GitHub username..."
            className="h-12 border-2 border-olive-400 px-4 bg-olive-50 w-max-lg w-96"
            value={username}
            onChange={(e)=>{
              setUsername(e.target.value)
            }}
          />

          <button className="h-12 w-12 flex items-center justify-center bg-black text-white active:scale-95 "
          onClick={()=>{
            fetchUser(username);
            
          }}>
            <IoSearch size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Heading;
