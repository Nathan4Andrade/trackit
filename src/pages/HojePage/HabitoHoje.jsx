/* eslint-disable react/prop-types */
import styled from "styled-components";
import checkbox from "../../assets/checkbox.png";
import { useContext, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../constants/urls";
import { Context } from "../../contexts/Context";

export default function HabitoHoje(props) {
  const { token } = useContext(Context);
  const { id, name, done, currentSequence, highestSequence, reload } = props;
  const [isChecked, setIsChecked] = useState(done);

  function checkHabit() {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const body = {};
    if (isChecked) {
      axios
        .post(`${BASE_URL}habits/${id}/uncheck`, body, config)
        .then((resp) => {
          setIsChecked(!isChecked);
          reload();
          console.log(resp);
        })
        .catch((erro) => alert(erro.response.data.message));
    } else {
      axios
        .post(`${BASE_URL}habits/${id}/check`, body, config)
        .then((resp) => {
          setIsChecked(!isChecked);
          reload();
          console.log(resp);
        })
        .catch((erro) => alert(erro.response.data.message));
    }
  }
  return (
    <HabitoContainer>
      <Info>
        <h4>{name}</h4>
        <p>
          Sequência atual:{" "}
          <Sequency done={done}>
            {currentSequence} {currentSequence === 1 ? "dia" : "dias"}
          </Sequency>
        </p>
        <p>
          Seu recorde:{" "}
          <Record
            colorRecord={
              highestSequence > 0 && highestSequence === currentSequence
            }>
            {highestSequence} {highestSequence === 1 ? "dia" : "dias"}
          </Record>
        </p>
      </Info>
      <Checkbox done={done}>
        <img src={checkbox} alt="checkbox" onClick={checkHabit} />
      </Checkbox>
    </HabitoContainer>
  );
}

const Record = styled.span`
  color: ${(props) => (props.colorRecord ? "#8FC549" : "#666666")};
`;
const Sequency = styled.span`
  color: ${(props) => (props.done ? "#8FC549" : "#666666")};
`;
const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Checkbox = styled.div`
  width: 69px;
  height: 69px;
  background-color: ${(props) => (props.done === true ? "#8FC549" : "#ebebeb")};
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
  width: 303px;
  padding: 18px 16px 15px 19px;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  color: #666666;

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
