/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [token, setToken] = useState("");
  const [image, setImage] = useState("");
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState("");
  const [disable, setDisable] = useState("");
  const [name, setName] = useState("");
  const [days, setDays] = useState([]);
  const [habitList, setHabitList] = useState([]);
  const [todayList, setTodayList] = useState([]);
  const [doneList, setDoneList] = useState([]);
  const [percentage, setPercentage] = useState(0);
  return (
    <Context.Provider
      value={{
        user,
        setUser,
        token,
        setToken,
        image,
        setImage,
        loading,
        setLoading,
        name,
        setName,
        disable,
        setDisable,
        days,
        setDays,
        habitList,
        setHabitList,
        todayList,
        setTodayList,
        doneList,
        setDoneList,
        percentage,
        setPercentage,
      }}>
      {children}
    </Context.Provider>
  );
};
