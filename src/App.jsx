import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage/LoginPage";
import CadastroPage from "./pages/CadastroPage/CadastroPage";
import HabitosPage from "./pages/HabitosPage/HabitosPage";
import HojePage from "./pages/HojePage/HojePage";
import HistoricoPage from "./pages/HistoricoPage/HistoricoPage";

import ScrollToTop from "./components/ScrollToTop";
import UserContext from "./contexts/UserContext";
import { useState } from "react";

function App() {
  //const [isAuthenticated, setIsAuthenticaded] = useState(true);
  const [user, setUser] = useState("Nathan");
  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
      }}>
      <BrowserRouter>
        <ScrollToTop />

        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/cadastro" element={<CadastroPage />} />
          <Route path="/habitos" element={<HabitosPage />} />
          <Route path="/hoje" element={<HojePage />} />
          <Route path="/historico" element={<HistoricoPage />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
