import Header from "../components/Header";
import Profile from "../components/Profile";

const Main = ({ isBlackNWhite }) => {
  return (
    <main>
      <Profile isBlackNWhite={isBlackNWhite} />
    </main>
  );
};

export default Main;
