import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import { BASE_URL } from "../../constants/urls";
import { AuthContext } from "../../contexts/AuthContext";
import { UserContext } from "../../contexts/UserContext";

import { ThreeDots } from "react-loader-spinner";

import logo from "../../assets/logo.png";
import { useEffect } from "react";

export default function LoginPage() {
  const { setToken } = useContext(AuthContext);
  const { setUser, persistUser } = useContext(UserContext);

  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    console.log(`UseEffect do login: ${storedUser}`);
    if (storedUser) {
      setUser(storedUser);
      navigate("/hoje");
    }
  }, []);
  const login = (e) => {
    e.preventDefault();
    setLoading(true);

    const loginInfo = {
      email: email,
      password: password,
    };
    axios
      .post(`${BASE_URL}auth/login`, loginInfo)
      .then((resp) => {
        setToken(resp.data.token);
        setUser(resp.data);
        persistUser(resp.data);
        console.log("funcao do login");
        console.log(resp.data);
        navigate("/hoje");
      })
      .catch(() => {
        alert("Usuario não encontrado");
        setLoading(false);
      });
  };
  return (
    <PageContainer>
      <Logo>
        <img src={logo} alt="logo" />
        TrackIt
      </Logo>
      <form onSubmit={login}>
        <input
          type="email"
          placeholder="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={loading}
          data-test="email-input"
          required></input>
        <input
          type="password"
          id="password"
          placeholder="senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={loading}
          data-test="password-input"
          required></input>
        <Btn type="submit" disabled={loading} data-test="login-btn">
          {loading ? (
            <ThreeDots
              height="80"
              width="80"
              radius="9"
              color="#ffffff"
              ariaLabel="three-dots-loading"
              wrapperStyle={{}}
              wrapperClassName=""
              visible={true}
            />
          ) : (
            <span>Entrar</span>
          )}
        </Btn>
      </form>

      <Link data-test="signup-link" to={`/cadastro`}>
        <SignUp>Não tem uma conta? Cadastre-se!</SignUp>
      </Link>
    </PageContainer>
  );
}

const SignUp = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 13.976px;
  line-height: 17px;
  text-align: center;
  text-decoration-line: underline;

  color: #52b6ff;
  margin-top: 25px;
`;
const Btn = styled.button`
  width: 303px;
  height: 45px;
`;

const Logo = styled.div`
  font-family: "Playball";
  font-style: normal;
  font-weight: 400;
  font-size: 69px;
  line-height: 86px;
  text-align: center;
  color: #126ba5;
  margin-bottom: 33px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  margin-top: 100px;
`;
const PageContainer = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  color: #293845;
  height: 100vh;
  background-color: #ffffff;
`;
