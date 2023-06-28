/* eslint-disable react-hooks/exhaustive-deps */
import styled from "styled-components";
import CriarHabito from "./CriarHabito";
import { useContext, useEffect, useState } from "react";
import { Context } from "../../contexts/Context";
import axios from "axios";
import { BASE_URL } from "../../constants/urls";
import Habito from "./Habito";
import { UserContext } from "../../contexts/UserContext";

export default function HabitosPage() {
  const [showForm, setShowForm] = useState();
  const { habitList, setHabitList, setTodayList, setDoneList } =
    useContext(Context);
  const { user } = useContext(UserContext);

  useEffect(() => {
    const config = {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    };
    axios
      .get(`${BASE_URL}habits`, config)
      .then((resposta) => {
        setHabitList(resposta.data);
      })
      .catch((erro) => {
        alert(erro.response.data.message);
        console.log(erro);
      });
  }, []);

  function reload() {
    const config = {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    };
    axios
      .get(`${BASE_URL}habits`, config)
      .then((resposta) => {
        setHabitList(resposta.data);
      })
      .catch((erro) => {
        alert(erro.response.data.message);
        console.log(erro);
      });
    axios
      .get(`${BASE_URL}habits/today`, config)
      .then((resp) => {
        setTodayList(resp.data);
        setDoneList(resp.data.filter((habit) => habit.done == true));
      })
      .catch((erro) => {
        alert(erro.response.data.message);
        console.log(erro);
      });
    setShowForm(false);
  }

  function addHabito() {
    console.log("adicionar habito");
    setShowForm(true);
  }

  return (
    <PageContainer>
      <Header>
        <h2>Meus hábitos</h2>
        <button onClick={addHabito} data-test="habit-create-btn">
          +
        </button>
      </Header>
      {showForm ? (
        <CriarHabito setShowForm={setShowForm} reload={reload}></CriarHabito>
      ) : (
        ""
      )}

      {habitList.length === 0 ? (
        <p>
          Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para
          começar a trackear!
        </p>
      ) : (
        habitList.map((habito) => (
          <Habito
            key={habito.id}
            id={habito.id}
            name={habito.name}
            days={habito.days}
            reload={reload}></Habito>
        ))
      )}
      {/*       <Footer /> */}
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
  color: #293845;
  padding: 92px 18px 100px 18px;
  background-color: #f2f2f2;

  p {
    margin-top: 9px;
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    line-height: 22px;
    text-align: left;
    color: #666666;
  }
`;
