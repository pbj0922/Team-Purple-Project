import { useEffect } from "react";

function MainPorfile({ id, name, image, PopupToggle, saveId }) {
  useEffect(() => {}, []);

  return (
    <li
      onClick={() => {
        PopupToggle();
        saveId(id);
      }}
      className="bg-black w-72 h-96 border-8 border-black rounded-xl hover:scale-125 hover:duration-500"
    >
      <div className="bg-pink-300 h-4/5 flex justify-center items-center">
        <img
          className="w-full h-full object-cover"
          src={`${process.env.PUBLIC_URL}/${image}.png`}
        />
      </div>
      <div className="bg-black text-white font-bold text-3xl text-center mt-3 mx-2 py-2">
        {name}
      </div>
    </li>
  );
}

export default MainPorfile;
