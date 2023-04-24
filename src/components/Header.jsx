import { AiFillHome } from "react-icons/ai";
import { BsSunFill } from "react-icons/bs";
import { BsMoonFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import HeaderList from "./HeaderList";
import teamData from "../teamData.json";

function Header({ isBlackNWhite, onClickChangeBG }) {
  return (
    <header className={isBlackNWhite ? "bg-white h-28" : "bg-black h-28"}>
      <div className="h-full flex justify-between items-center">
        <Link to={`/`}>
          <img
            className="h-40"
            src={`${process.env.PUBLIC_URL}/images/bcsLogo.png`}
          />
        </Link>
        <ul className="flex gap-10 items-center mr-20">
          {teamData.map((v, i) => {
            return (
              <HeaderList
                key={i}
                index={i}
                id={v.id}
                name={v.name}
                isBlackNWhite={isBlackNWhite}
              />
            );
          })}
          <Link to={`/`}>
            <div
              className={`hover:text-purple-500 hover:scale-150 ${
                isBlackNWhite ? "text-black" : "text-white"
              }`}
            >
              <AiFillHome size={35} />
            </div>
          </Link>
          <div
            onClick={onClickChangeBG}
            className={`hover:text-purple-500 hover:scale-150 ${
              isBlackNWhite ? "text-black" : "text-white"
            }`}
          >
            {isBlackNWhite ? <BsMoonFill size={35} /> : <BsSunFill size={40} />}
          </div>
        </ul>
      </div>
    </header>
  );
}

export default Header;
