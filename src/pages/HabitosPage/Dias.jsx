import styled from "styled-components";

export default function Dias() {
  return (
    <SCDias>
      <Dia>D</Dia>
      <Dia>S</Dia>
      <Dia>T</Dia>
      <Dia>Q</Dia>
      <Dia>Q</Dia>
      <Dia>S</Dia>
      <Dia>S</Dia>
    </SCDias>
  );
}

const Dia = styled.div`
  border: 1px solid #d5d5d5;
  background: #ffffff;
  border-radius: 5px;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;

  font-style: normal;
  font-weight: 400;
  font-size: 19.976px;
  line-height: 25px;
  /* identical to box height */

  color: #dbdbdb;
`;
const SCDias = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-bottom: 29px;
`;
