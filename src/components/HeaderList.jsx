import { Link } from "react-router-dom";

function HeaderList({ id, name, isBlackNWhite }) {
  return (
    <Link to={`/portfolio/${id}`}>
      <li
        className={`text-2xl font-bold  hover:text-purple-800 hover:scale-150
          ${isBlackNWhite ? "text-black" : "text-white"}`}
      >
        {name}
      </li>
    </Link>
  );
}

export default HeaderList;
