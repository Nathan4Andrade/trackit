import styled from "styled-components";
import Habito from "./Habito";

export default function HabitosPage() {
  return (
    <PageContainer>
      <Header>
        <h2>Meus hábitos</h2>
        <button>+</button>
      </Header>
      <Habito></Habito>

      <p>
        Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para
        começar a trackear!
      </p>
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
  flex-direction: column;
  align-items: center;
  text-align: center;
  color: #293845;
  margin-top: 30px;
  padding-top: 70px;
  padding: calc(70px + 22px) 18px;
  background-color: #f2f2f2;
  min-height: 100vh;

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
