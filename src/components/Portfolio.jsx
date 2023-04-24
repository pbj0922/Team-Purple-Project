import { useEffect, useState } from "react";
import { AiFillGithub } from "react-icons/ai";
import { SiVelog } from "react-icons/si";

const Portfolio = ({ TeamData }) => {
  const handleOpenNewTab = (url) => {
    window.open(url, "_blank", "noopener, noreferrer");
  };

  return (
    <>
      <div className="bg-black w-[1000px] h-[800px] flex flex-col gap-10 justify-center items-center border-8 border-white rounded-xl">
        <div className="font-bold text-5xl text-white flex flex-row gap-3 items-center">
          {TeamData.name}
          <div
            onClick={() => handleOpenNewTab(TeamData.githubURL)}
            className="hover:scale-125 hover:text-purple-500"
          >
            <AiFillGithub size={40} />
          </div>
          <div
            onClick={() => handleOpenNewTab(TeamData.velogURL)}
            className="hover:scale-125 hover:text-purple-500"
          >
            <SiVelog size={40} />
          </div>
        </div>
        <div className="bg-purple-500 border-8 border-white p-5 rounded-xl w-[900px] h-[200px]">
          <div className="font-bold text-4xl underline text-white">
            주로 사용하는 기술
          </div>
          <ul className="text-2xl mt-4 text-white flex flex-row gap-4 items-center">
            {TeamData.skill.map((v, i) => {
              return (
                <li key={i}>
                  <img
                    className="h-20"
                    src={`${process.env.PUBLIC_URL}/images/${v}.png`}
                  />
                </li>
              );
            })}
          </ul>
        </div>
        <div className="bg-purple-500 border-8 border-white p-5 rounded-xl w-[900px] h-[350px]">
          <div className="font-bold text-4xl underline text-white">
            자기소개
          </div>
          <ul className="text-xl mt-4 text-white">
            {TeamData.introduce.map((v, i) => {
              return <li key={i}>{v}</li>;
            })}
          </ul>
        </div>
      </div>
      <div className="bg-black text-white w-[700px] h-[800px] gap-10 flex flex-col justify-center items-center border-8 border-white rounded-xl">
        <div className="font-bold text-5xl">PROJECT</div>
        <div className="bg-purple-500 border-8 border-white p-5 rounded-xl w-[600px] h-[600px] flex flex-col gap-2 justify-center items-center">
          <div
            onClick={() => handleOpenNewTab(TeamData.projectURL)}
            className="bg-black w-[400px] h-[250px] flex justify-center items-center border-8 border-black rounded-xl"
          >
            <img
              className="w-full h-full object-cover rounded-md"
              src={`${process.env.PUBLIC_URL}/${TeamData.projectImage}.png`}
            />
            <div className="absolute w-[400px] h-[250px] flex justify-center items-center text-white font-bold opacity-0 hover:opacity-60 hover:bg-black rounded-xl">
              이미지 클릭시 사이트로 이동
            </div>
          </div>
          <div className="mt-3 font-bold text-xl">{TeamData.projectTitle}</div>
          <div>{TeamData.projectDesc}</div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
