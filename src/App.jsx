import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage/LoginPage";
import CadastroPage from "./pages/CadastroPage/CadastroPage";
import HabitosPage from "./pages/HabitosPage/HabitosPage";
import HojePage from "./pages/HojePage/HojePage";
import HistoricoPage from "./pages/HistoricoPage/HistoricoPage";
import { Fragment } from "react";

import ScrollToTop from "./components/ScrollToTop";

import { useState } from "react";

function Private({ Item }) {
  const signed = true;

  return signed ? <Item /> : <LoginPage />;
}

function App() {
  //const [isAuthenticated, setIsAuthenticaded] = useState(true);
  const [user, setUser] = useState("Nathan");
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Fragment>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route exact path="/cadastro" element={<CadastroPage />} />
          <Route
            exact
            path="/habitos"
            element={<Private Item={HabitosPage} />}
          />
          <Route exact path="/hoje" element={<Private Item={HojePage} />} />
          <Route
            exact
            path="/historico"
            element={<Private Item={HistoricoPage} />}
          />
          <Route path="*" element={<CadastroPage />} />
        </Routes>
      </Fragment>
    </BrowserRouter>
  );
}

export default App;
