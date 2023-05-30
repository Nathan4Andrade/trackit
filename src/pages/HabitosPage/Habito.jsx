import styled from "styled-components";
import Dias from "./Dias";

export default function Habito() {
  return (
    <SCHabito>
      <input placeholder="nome do hábito" />
      <Dias />

      <section>
        <button>Cancelar</button>
        <button>Salvar</button>
      </section>
    </SCHabito>
  );
}
const SCHabito = styled.div`
  margin-bottom: 10px;
  background-color: white;
  padding: 18px 16px 15px 19px;
  border-radius: 5px;
  section {
    display: flex;
    justify-content: flex-end;
    button {
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 20px;
      text-align: center;
      height: 35px;
    }
    button:nth-child(1) {
      background-color: white;
      color: #52b6ff;
    }
  }
`;
