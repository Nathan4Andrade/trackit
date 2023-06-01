import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage/LoginPage";
import CadastroPage from "./pages/CadastroPage/CadastroPage";
import HabitosPage from "./pages/HabitosPage/HabitosPage";
import HojePage from "./pages/HojePage/HojePage";
import HistoricoPage from "./pages/HistoricoPage/HistoricoPage";

import ScrollToTop from "./components/ScrollToTop";

import { useState } from "react";
import { Context } from "./contexts/Context";

function App() {
  const [token, setToken] = useState("");
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState("");
  
  return (
    <Context.Provider
      value={{
        token,
        setToken,
        image,
        setImage,
        loading,
        setLoading,
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
    </Context.Provider>
  );
}

export default App;
