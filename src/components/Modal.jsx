import { AiFillCloseCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
import teamData from "../teamData.json";
import { useEffect } from "react";

function Modal({ idData, popup, PopupToggle }) {
  // useEffect(() => {
  //   console.log(teamData[idData]);
  // }, []);

  return (
    <>
      {popup && (
        <div className="absolute w-[1700px] h-[550px] flex justify-center items-center">
          <div className="bg-red-300 w-[1000px] h-[700px] border-8 border-black rounded-xl flex flex-row justify-between items-center">
            <div
              onClick={PopupToggle}
              className="absolute top-[-50px] right-[370px] hover:text-white"
            >
              <AiFillCloseCircle size={50} />
            </div>
            <Link to={`/portfolio/${idData}`}>
              <div className="absolute bottom-[-50px] right-[370px] font-bold text-xl border-8 border-black text-black bg-purple-300 rounded-xl p-2 hover:bg-purple-700 hover:text-white">
                페이지로 이동하기
              </div>
            </Link>
            <div className="ml-24 flex flex-col justify-center items-center">
              <div className="bg-purple-300 h-[400px] w-80  border-8 border-black rounded-xl flex justify-center items-center">
                <img
                  className="w-full h-full object-fit"
                  src={`${process.env.PUBLIC_URL}/${teamData[idData].image}.png`}
                />
              </div>
              <div className="bg-purple-300 w-80 font-bold text-4xl p-1 border-8 border-black rounded-xl mt-4 text-center">
                {teamData[idData].name}
              </div>
            </div>
            <div className="flex flex-col justify-center items-center mx-auto">
              <div className="mt-4">
                <div>
                  <div className="text-center font-bold text-2xl bg-purple-300 border-8 border-black rounded-xl py-3">
                    {teamData[idData].projectTitle}
                  </div>
                  <ul className="bg-purple-300 h-96 w-96 mt-4 border-8 border-black rounded-xl text-start pt-4">
                    {teamData[idData].projectDesc.map((v, i) => {
                      return (
                        <li className="px-4 pt-1" key={i}>
                          {v}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Modal;
