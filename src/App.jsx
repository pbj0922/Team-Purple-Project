import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Main from "./pages/Main";
import PortfolioPage from "./pages/PortfolioPage";
import NotFound from "./pages/NotFound";
import Footer from "./components/Footer";
import { useState } from "react";

function App() {
  const [isBlackNWhite, setIsBlackNWhite] = useState(false);
  const onClickChangeBG = () => {
    setIsBlackNWhite(!isBlackNWhite);
  };

  return (
    <BrowserRouter>
      <div>
        <Header
          isBlackNWhite={isBlackNWhite}
          onClickChangeBG={onClickChangeBG}
        />
        <Routes>
          <Route path="/" element={<Main isBlackNWhite={isBlackNWhite} />} />
          <Route path="/portfolio/:portfolioId" element={<PortfolioPage />} />
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
        <Footer isBlackNWhite={isBlackNWhite} />
      </div>
    </BrowserRouter>
  );
}

export default App;
