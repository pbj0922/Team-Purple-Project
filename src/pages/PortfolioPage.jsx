import Portfolio from "../components/Portfolio";
import teamData from "../teamData.json";
import { useParams } from "react-router-dom";

const PortfolioPage = () => {
  const { portfolioId } = useParams();
  const TeamData = teamData[portfolioId];

  return (
    <div className="min-h-screen bg-purple-500 flex gap-16 justify-center items-center">
      <Portfolio TeamData={TeamData} />
    </div>
  );
};

export default PortfolioPage;
