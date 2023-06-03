import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage/LoginPage";
import CadastroPage from "./pages/CadastroPage/CadastroPage";
import HabitosPage from "./pages/HabitosPage/HabitosPage";
import HojePage from "./pages/HojePage/HojePage";
import HistoricoPage from "./pages/HistoricoPage/HistoricoPage";
import Navbar from "./components/Navbar";

import ScrollToTop from "./components/ScrollToTop";

import { useState } from "react";
import { Context } from "./contexts/Context";

function App() {
  const [token, setToken] = useState("");
  const [image, setImage] = useState("");
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState("");
  const [disable, setDisable] = useState("");
  const [name, setName] = useState("");
  const [days, setDays] = useState([]);
  const [habitList, setHabitList] = useState([]);
  const [todayList, setTodayList] = useState([]);
  const [doneList, setDoneList] = useState([]);
  const [percentage, setPercentage] = useState(0);

  return (
    <Context.Provider
      value={{
        user,
        setUser,
        token,
        setToken,
        image,
        setImage,
        loading,
        setLoading,
        name,
        setName,
        disable,
        setDisable,
        days,
        setDays,
        habitList,
        setHabitList,
        todayList,
        setTodayList,
        doneList,
        setDoneList,
        percentage,
        setPercentage,
      }}>
      <BrowserRouter>
        <ScrollToTop />
        {token === "" ? "" : <Navbar />}

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
