import React, { useState } from "react";
import Heading from "./components/Heading";
import User from "./components/User";
import Repos from "./components/Repos";
import axios from "axios";
import { Routes, Route } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";

const App = () => {
  const [userData, setUserData] = useState(null);
  const [repoData, setRepoData] = useState([]);
  const [isError, setIsError] = useState(false);

  const resetSearch = () => {
    setIsError(false);
    setUserData(null);
    setRepoData([]);
  };

  const handleSearch = async (username) => {
    try {
      const response = await axios.get(
        `https://api.github.com/users/${username}`,
      );
      const repos = await axios.get(
        `https://api.github.com/users/${username}/repos`,
      );
      console.log(response);
      console.log(repos);
      setUserData(response.data);
      setRepoData(repos.data);
      setIsError(false);
    } catch (error) {
      console.log(error);
      setUserData(null);
      setRepoData([]);
      setIsError(true);
    }
  };

  const totalStars = repoData.reduce((sum, repo) => {
    return sum + repo.stargazers_count;
  }, 0);
  return (
    <div className="bg-[#FFFBF4] min-h-screen">
      <div className="flex flex-col items-center justify-center">
        <Heading fetchUser={handleSearch} />
        {isError ? (
          <ErrorPage reset={resetSearch}/>
        ) : userData ? (
          <>
            <User data={userData} totalStars={totalStars} />
            <Repos repoData={repoData} userData={userData} />
          </>
        ) : (
          <div className="mt-60 font-bold font-heading text-4xl p-4">
            <h1>Type a username above to explore their profile</h1>
          </div>
        )}
      </div>
    </div>
  );
};
export default App;
