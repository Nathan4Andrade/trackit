import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import logo from "../../assets/logo.png";

export default function CadastroPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [profilePicture, setProfilePicture] = useState("");
  const navigate = useNavigate("/habitos");

  function signUp(e) {
    e.preventDefault();
    console.log({ email, password, name, profilePicture });
    navigate("/");
  }
  return (
    <PageContainer>
      <Logo>
        <img src={logo} alt="logo" />
        TrackIt
      </Logo>
      <form onSubmit={signUp}>
        <input
          type="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required></input>
        <input
          type="password"
          placeholder="senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required></input>
        <input
          type="text"
          placeholder="nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required></input>
        <input
          type="text"
          placeholder="foto"
          value={profilePicture}
          onChange={(e) => setProfilePicture(e.target.value)}></input>
        <Btn type="submit">Cadastrar</Btn>
      </form>
      <Link to={`/`}>
        <Login>Já tem uma conta? Faça login!</Login>
      </Link>
    </PageContainer>
  );
}

const Login = styled.p`
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
`;

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  color: #293845;
  margin-top: 30px;
  padding-top: 70px;
`;
