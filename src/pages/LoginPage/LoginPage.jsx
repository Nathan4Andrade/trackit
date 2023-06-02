import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import { BASE_URL } from "../../constants/urls";

import { Context } from "../../contexts/Context";
import { ThreeDots } from "react-loader-spinner";

import logo from "../../assets/logo.png";

export default function LoginPage() {
  const { setImage, loading, setLoading, setToken } = useContext(Context);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  function login(e) {
    e.preventDefault();
    console.log({ email, password });
    setLoading(true);
    const loginInfo = {
      email: email,
      password: password,
    };
    axios
      .post(`${BASE_URL}auth/login`, loginInfo)
      .then((resp) => {
        setImage(resp.data.image);
        setToken(resp.data.token);
        navigate("/hoje");
      })
      .catch(() => {
        alert("Usuario não encontrado");
        setLoading(false);
      });
  }
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
          required></input>
        <input
          type="password"
          id="password"
          placeholder="senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={loading}
          required></input>
        <Btn type="submit" disabled={loading}>
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
      <Link to={`/cadastro`}>
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
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  color: #293845;
  height: 100vh;
  background-color: #ffffff;
`;
