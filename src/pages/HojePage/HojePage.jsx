import styled from "styled-components";
import Habito from "./Habito";

export default function HojePage() {
  return (
    <PageContainer>
      <Header>
        <h2>Segunda-Feira, 17/05</h2>
        <h3>Nenhum hábito concluído ainda</h3>
      </Header>
      <Habito></Habito>
      <Habito></Habito>
      <Habito></Habito>
      <Habito></Habito>
    </PageContainer>
  );
}

const Header = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 20px;
  h2 {
    font-style: normal;
    font-weight: 400;
    font-size: 23px;
    line-height: 29px;

    color: #126ba5;
  }
  h3 {
    font-style: normal;
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;

    color: #bababa;
  }
`;

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #293845;
  padding: calc(70px + 22px) 18px;
  background-color: #f2f2f2;
`;
