import React, { useState } from "react";
import ProjectCard from "../Component/ProjectCard";
import {
  github,
  cSharp,
  netCore,
  intelliJ,
  java,
  python,
  selenium,
  mongoDB,
  react,
  expressJS,
  nodeJS,
  mssql,
  mysql,
} from "../asserts/index";
import { useContext } from "react";
import { ModeContext } from "../Context/ModeContext";

const Projects = () => {
  const context = useContext(ModeContext);
  const { mode } = context;
  const darkMode = { background: "#0D1B2A", color: "white" };
  return (
    <div
      className={`w-full sm:px-10 py-10 lg:px-28 py-10 ${
        mode === "dark" ? "text-white" : "text-black"
      }`}
      style={mode === "dark" ? darkMode : {}}
    >
      <div className="text-center my-10">
        <h1 className={`${mode==="dark"? "text-white":"text-black"} text-opacity-50 text-xl`}>
          What I Offered ?
        </h1>
        <h1 className="font-bold text-3xl">Projects</h1>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-3">
        <ProjectCard
          classes={"rounded-3xl"}
          title={"Logistics Hub"}
          isVideo={false}
          gitLink={""}
          stacks={[github, cSharp, netCore, mssql]}
        />
        <ProjectCard
          classes={"rounded-3xl"}
          title={"Go Boom Card Game"}
          isVideo={false}
          gitLink={""}
          stacks={[java, intelliJ, mysql]}
        />
        <ProjectCard
          classes={"rounded-3xl"}
          title={"E-NoteBook"}
          isVideo={true}
          gitLink={""}
          stacks={[mongoDB, expressJS, react, nodeJS]}
        />
        <ProjectCard
          classes={"rounded-3xl"}
          title={"FYP Student Evaluation"}
          isVideo={false}
          gitLink={""}
          stacks={[github, cSharp, netCore, mssql]}
        />
        <ProjectCard
          classes={"rounded-3xl"}
          title={"News Monkey"}
          isVideo={false}
          gitLink={""}
          stacks={[mongoDB, expressJS, react, nodeJS]}
        />
        <ProjectCard
          classes={"rounded-3xl"}
          title={"E-Commerce"}
          isVideo={false}
          gitLink={""}
          stacks={[python, selenium]}
        />
      </div>
    </div>
  );
};

export default Projects;
