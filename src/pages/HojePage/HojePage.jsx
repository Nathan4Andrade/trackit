/* eslint-disable react-hooks/exhaustive-deps */
import styled from "styled-components";
import HabitoHoje from "./HabitoHoje";

import dayjs from "dayjs";
import "dayjs/locale/pt-br";
import { useContext, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../../constants/urls";
import { Context } from "../../contexts/Context";

export default function HojePage() {
  const {
    token,
    todayList,
    setTodayList,
    doneList,
    setDoneList,
    percentage,
    setPercentage,
  } = useContext(Context);

  function reload() {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    axios
      .get(`${BASE_URL}habits/today`, config)
      .then((resp) => {
        setTodayList(resp.data);
        setDoneList(resp.data.filter((habit) => habit.done == true));
        setPercentage(
          Math.floor((Number(doneList.length) / Number(todayList.length)) * 100)
        );
        console.log(resp.data);
      })
      .catch((erro) => {
        alert(erro.response.data.message);
        console.log(erro);
      });
  }

  function today() {
    const weekday = capitalizeFirstLetter(
      dayjs().locale("pt-br").format("dddd")
    );
    const monthday = dayjs().locale("pt-br").format("DD/MM");

    return weekday + ", " + monthday;
  }
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  useEffect(() => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    axios
      .get(`${BASE_URL}habits/today`, config)
      .then((resp) => {
        setTodayList(resp.data);
        setDoneList(resp.data.filter((habit) => habit.done == true));
        setPercentage(
          Math.floor((Number(doneList.length) / Number(todayList.length)) * 100)
        );
        console.log(resp.data);
      })
      .catch((erro) => {
        console.log(erro);
      });
  }, []);
  return (
    <PageContainer>
      <Header>
        <h2>{today()}</h2>
        {doneList.length === 0 ? (
          <Percentage isZero={doneList.length}>
            Nenhum hábito concluído ainda
          </Percentage>
        ) : (
          <Percentage isZero={doneList.length}>
            {percentage + `% dos hábitos concluídos`}{" "}
          </Percentage>
        )}
      </Header>
      {todayList.map((habitoHoje) => (
        <HabitoHoje
          key={habitoHoje.id}
          id={habitoHoje.id}
          name={habitoHoje.name}
          done={habitoHoje.done}
          currentSequence={habitoHoje.currentSequence}
          highestSequence={habitoHoje.highestSequence}
          reload={reload}
        />
      ))}
    </PageContainer>
  );
}

const Percentage = styled.h3`
  font-style: normal;
  font-weight: 400;
  font-size: 17.976px;
  line-height: 22px;
  color: ${(props) => (props.isZero === 0 ? "#666666" : "#8FC549")};
`;

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
`;

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #293845;
  padding: 92px 18px 100px 18px;
  background-color: #f2f2f2;
`;
