import styled from "styled-components";
import CriarHabito from "./CriarHabito";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { useState } from "react";
import ListarHabito from "./ListarHabito";

export default function HabitosPage() {
  const [isEmpty, setIsEmpty] = useState(true);
  const [showForm, setShowForm] = useState();

  function addHabito() {
    console.log("adicionar habito");
    setShowForm(true);
    setIsEmpty(false);
  }
  return (
    <PageContainer>
      <Navbar />
      <Header>
        <h2>Meus hábitos</h2>
        <button onClick={addHabito}>+</button>
      </Header>
      {showForm ? <CriarHabito></CriarHabito> : ""}

      {isEmpty ? (
        <p>
          Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para
          começar a trackear!
        </p>
      ) : (
        <ListarHabito></ListarHabito>
      )}

      <Footer />
    </PageContainer>
  );
}

const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  h2 {
    font-style: normal;
    font-weight: 400;
    font-size: 23px;
    line-height: 29px;

    color: #126ba5;
  }
  button {
    width: 40px;
    height: 35px;
  }
`;
const PageContainer = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  align-items: center;
  color: #293845;
  padding: calc(70px + 22px) 18px;
  background-color: #f2f2f2;

  p {
    margin-top: 29px;
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    line-height: 22px;
    text-align: left;
    color: #666666;
  }
`;
