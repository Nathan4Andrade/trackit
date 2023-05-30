import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage/LoginPage";
import CadastroPage from "./pages/CadastroPage/CadastroPage";
import HabitosPage from "./pages/HabitosPage/HabitosPage";
import HojePage from "./pages/HojePage/HojePage";
import HistoricoPage from "./pages/HistoricoPage/HistoricoPage";
import Navbar from "./components/Navbar";
import { useState } from "react";

function App() {
  const [isAuthenticated, setIsAuthenticaded] = useState(false);
  return (
    <BrowserRouter>
      {isAuthenticated ? <Navbar /> : ""}

      <Routes>
        <Route path="/" element={<LoginPage setIsAuthenticaded={setIsAuthenticaded}/>} />
        <Route path="/cadastro" element={<CadastroPage />} />
        <Route path="/habitos" element={<HabitosPage />} />
        <Route path="/hoje" element={<HojePage />} />
        <Route path="/historico" element={<HistoricoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
