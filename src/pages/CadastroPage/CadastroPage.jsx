import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import logo from "../../assets/logo.png";
import axios from "axios";
import { BASE_URL } from "../../constants/urls";

import { ThreeDots } from "react-loader-spinner";

export default function CadastroPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate("/habitos");

  const data = {
    name: name,
    email: email,
    password: password,
    image: image,
  };

  function signUp(e) {
    e.preventDefault();
    console.log(data);
    setLoading(true);
    axios
      .post(`${BASE_URL}auth/sign-up`, data)
      .then(() => {
        navigate("/", {
          state: { name, email, password, image },
        });
      })
      .catch(() => {
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
      <form onSubmit={signUp}>
        <input
          type="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={loading}
          required></input>
        <input
          type="password"
          placeholder="senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={loading}
          required></input>
        <input
          type="text"
          placeholder="nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
          disabled={loading}
          required></input>
        <input
          type="text"
          placeholder="foto"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          disabled={loading}></input>
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
            <span>Cadastrar</span>
          )}
        </Btn>
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
