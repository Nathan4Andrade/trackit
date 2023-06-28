import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import logo from "../../assets/logo.png";
import axios from "axios";
import { BASE_URL } from "../../constants/urls";

import { ThreeDots } from "react-loader-spinner";

export default function CadastroPage() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  function signup(e) {
    e.preventDefault();
    setLoading(true);
    const signupInfo = {
      name: name,
      email: email,
      password: password,
      image: image,
    };
    axios
      .post(`${BASE_URL}auth/sign-up`, signupInfo)
      .then(() => {
        navigate("/");
      })
      .catch((erro) => {
        console.log(erro);
        alert("Usuario já cadastrado");
        setLoading(false);
      });
  }
  return (
    <PageContainer>
      <Logo>
        <img src={logo} alt="logo" />
        TrackIt
      </Logo>
      <form onSubmit={signup}>
        <input
          type="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={loading}
          data-test="email-input"
          required></input>
        <input
          type="password"
          placeholder="senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={loading}
          data-test="password-input"
          required></input>
        <input
          type="text"
          placeholder="nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
          disabled={loading}
          data-test="user-name-input"
          required></input>
        <input
          type="text"
          placeholder="foto"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          data-test="user-image-input"
          disabled={loading}></input>
        <Btn type="submit" disabled={loading} data-test="signup-btn">
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
            <span>Cadastrar</span>
          )}
        </Btn>
      </form>
      <Link data-test="login-link" to={`/`}>
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
  z-index: 2;
  position: relative;
`;
