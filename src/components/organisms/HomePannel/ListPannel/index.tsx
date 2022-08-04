import React, { useState } from "react";
import PlusButton from "../../../atoms/PlusButton";
import ListContent from "../../../molecules/ListContent";
import { ListContentBox, ListPannelContainer, ListPannelTitle } from "./style";

const TESTDATA = {
  data: [
    {
      title: "hi",
      content: "hello",
      id: "z3FGrcRL55qDCFnP4KRtn",
      createdAt: "2022-07-24T14:15:55.537Z",
      updatedAt: "2022-07-24T14:15:55.537Z",
    },
    {
      title: "hi",
      content: "hello",
      id: "z3FGrcRL55qDCFnP4KRtn",
      createdAt: "2022-07-24T14:15:55.537Z",
      updatedAt: "2022-07-24T14:15:55.537Z",
    },
  ],
};

const ListPannel = () => {
  const [CurrentTodo, setCurrentTodo] = useState(0);

  const selectTodo = (index: number) => {
    console.log(index);
    setCurrentTodo(index);
  };

  return (
    <ListPannelContainer>
      <ListPannelTitle>할 일 목록</ListPannelTitle>
      <ListContentBox>
        {TESTDATA.data.length > 0 ? (
          TESTDATA.data.map((todo, index) => (
            <ListContent
              title={todo.title}
              className={index === CurrentTodo ? "active" : ""}
              onClickFunc={() => selectTodo(index)}
            />
          ))
        ) : (
          <></>
        )}
      </ListContentBox>
      <PlusButton onClickFunc={() => console.log("hi")} />
    </ListPannelContainer>
  );
};

export default ListPannel;
