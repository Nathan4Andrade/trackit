import styled from "styled-components";

export default function HistoricoPage() {
  return (
    <PageContainer>
      <Header>
        <h2>Histórico</h2>
        <h3>Em breve você poderá ver o histórico dos seus hábitos aqui!</h3>
      </Header>
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
    margin-top: 17px;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;

    color: #666666;
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
`;
