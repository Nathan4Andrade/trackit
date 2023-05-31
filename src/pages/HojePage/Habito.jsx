import styled from "styled-components";
import checkbox from "../../assets/checkbox.png";

export default function Habito() {
  return (
    <HabitoContainer>
      <Info>
        <h4>Ler capitulo do livro</h4>
        <p>Sequência atual: 3 dias</p>
        <p>Seu recorde: 5 dias</p>
      </Info>
      <Checkbox>
        <img src={checkbox} alt="checkbox" />
      </Checkbox>
    </HabitoContainer>
  );
}
const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Checkbox = styled.div`
  width: 69px;
  height: 69px;

  background: #ebebeb;
  border: 1px solid #e7e7e7;
  border-radius: 5px;
  margin-left: 35px;

  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
`;
const HabitoContainer = styled.div`
  margin-bottom: 10px;
  background-color: white;
  padding: 18px 16px 15px 19px;
  border-radius: 5px;
  color: #666666;
  display: flex;
  justify-content: space-between;

  h4 {
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 25px;
  }

  p {
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 16px;
  }
`;
