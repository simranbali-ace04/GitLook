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
    } catch (error) {
      console.log(error);
      setUserData(null);
      setRepoData(null);
    }
  };

  const totalStars = repoData.reduce((sum, repo) => {
    return sum + repo.stargazers_count;
  }, 0);
  return (
    <div className="bg-[#FFFBF4] min-h-screen">
      <div className="flex flex-col items-center justify-center">
        <Heading fetchUser={handleSearch} />
        <Routes>
          <Route path="/404" element={<ErrorPage />} />
        </Routes>
        <User data={userData} totalStars={totalStars} />
        <Repos repoData={repoData} userData={userData} />
      </div>
    </div>
  );
};
export default App;
