import styled from "styled-components";
import Dias from "./Dias";
import trash from "../../assets/trash.png";

export default function ListarHabito() {
  return (
    <ListarHabitoContainer>
      <div>
        <h3>nome do hábito</h3>
        <Dias />
      </div>

      <div>
        <button>
          <img src={trash} />
        </button>
      </div>
    </ListarHabitoContainer>
  );
}
const ListarHabitoContainer = styled.div`
  margin-bottom: 10px;
  background-color: white;
  width: 303px;
  padding: 18px 16px 15px 19px;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;

  h3 {
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 25px;

    color: #666666;
    margin-bottom: 8px;
  }

  button {
    padding: 0 0 20px 20px;
    background-color: white;
  }
`;
