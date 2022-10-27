import React from "react";
import DashBoards from "./DashBoards";
import Navbar from "./NavBar";
import SideBar from "./SideBar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <SideBar />
      <DashBoards />
    </div>
  );
};

export default Home;
