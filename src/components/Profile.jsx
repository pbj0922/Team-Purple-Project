import { useEffect, useState } from "react";
import teamData from "../teamData.json";
import MainPorfile from "./MainProfile";
import Modal from "./Modal";

function Profile({ isBlackNWhite }) {
  const [popup, setPopup] = useState(false);
  const [idData, setIdData] = useState();

  const PopupToggle = () => {
    setPopup(!popup);
  };

  function saveId(e) {
    setIdData(e);
  }

  useEffect(() => {
    console.log();
  }, []);

  return (
    <>
      <main
        className={`flex flex-col items-center min-h-screen justify-center my-auto ${
          isBlackNWhite ? "bg-black" : "bg-white"
        }`}
      >
        <div
          className={`bg-purple-500 w-[1700px] h-[550px] flex justify-center items-center border-8 rounded-xl ${
            isBlackNWhite ? "border-white" : "border-black"
          }`}
        >
          <ul className="grid grid-cols-5 gap-10">
            {teamData.map((v, i) => {
              return (
                <MainPorfile
                  key={i}
                  index={i}
                  name={v.name}
                  image={v.image}
                  id={v.id}
                  PopupToggle={PopupToggle}
                  saveId={saveId}
                />
              );
            })}
          </ul>
          <Modal idData={idData} popup={popup} PopupToggle={PopupToggle} />
        </div>
      </main>
    </>
  );
}

export default Profile;
