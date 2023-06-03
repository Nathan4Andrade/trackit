/* eslint-disable react/prop-types */
import styled from "styled-components";
import { useContext } from "react";
import { Context } from "../../contexts/Context";
import diasdasemana from "../../constants/diasdasemana";
import axios from "axios";
import { BASE_URL } from "../../constants/urls";

export default function CriarHabito(props) {
  const {
    token,
    name,
    setName,
    days,
    setDays,
    disable,
    setDisable,
    setTodayList,
    setDoneList,
  } = useContext(Context);

  const { reload, setShowForm } = props;

  function chooseDays(id) {
    if (days.includes(id)) {
      setDays(
        [...days].filter((diaEscolhido) => {
          if (diaEscolhido !== id) {
            return true;
          } else {
            return false;
          }
        })
      );
    } else {
      setDays([...days, id]);
    }
  }
  function cancelar(e) {
    e.preventDefault();

    setShowForm(false);
    reload();
  }
  function adicionar(e) {
    e.preventDefault();
    console.log(diasdasemana);
    setDisable(true);
    if (days.length > 0 && name.length > 0) {
      const add = { name, days };

      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      axios
        .post(`${BASE_URL}habits`, add, config)
        .then((resposta) => {
          console.log(resposta.data);
          setDays([]);
          setName("");
          setDisable(false);
          reload();
        })
        .catch((erro) => {
          alert(erro.response.data.message);
          setDisable(false);
          console.log(erro);
        });
      axios
        .get(`${BASE_URL}habits/today`, config)
        .then((resp) => {
          setTodayList(resp.data);
          setDoneList(resp.data.filter((habit) => habit.done == true));
          console.log(resp.data);
        })
        .catch((erro) => {
          alert(erro.response.data.message);
          console.log(erro);
        });
    } else {
      alert("Hábito ou dia da semana não pode ficar vazio");
      setDisable(false);
    }
  }
  return (
    <CriarHabitoContainer data-test="habit-create-container">
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="nome do hábito"
        disabled={disable}
        data-test="habit-name-input"
        required
      />
      <ListaDias>
        {diasdasemana.map((buttonDia) => (
          <Dia
            data-test="habit-day"
            key={buttonDia.id}
            onClick={() => chooseDays(buttonDia.id)}
            diaSelecionado={days.includes(buttonDia.id)}
            disabled={disable}>
            {buttonDia.day}
          </Dia>
        ))}
      </ListaDias>

      <ListaBotoes>
        <button
          disabled={disable}
          onClick={cancelar}
          data-test="habit-create-cancel-btn">
          Cancelar
        </button>
        <button
          disabled={disable}
          onClick={adicionar}
          data-test="habit-create-save-btn">
          Salvar
        </button>
      </ListaBotoes>
    </CriarHabitoContainer>
  );
}

const ListaBotoes = styled.div`
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
`;
const CriarHabitoContainer = styled.div`
  margin-bottom: 10px;
  background-color: white;
  padding: 18px 16px 15px 19px;
  border-radius: 5px;
`;

const Dia = styled.button`
  border: 1px solid #d5d5d5;
  padding: 0%;

  border-radius: 5px;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 4px;
  color: ${(props) => (props.diaSelecionado === true ? "#FFFFFF" : "#DBDBDB")};
  background-color: ${(props) =>
    props.diaSelecionado === true ? "#CFCFCF" : "#FFFFFF"};

  font-style: normal;
  font-weight: 400;
  font-size: 19.976px;
  line-height: 25px;
  /* identical to box height */
`;
const ListaDias = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-bottom: 29px;
`;
