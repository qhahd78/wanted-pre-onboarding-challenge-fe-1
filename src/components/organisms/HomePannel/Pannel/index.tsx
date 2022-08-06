import React, { useEffect, useState, useCallback } from "react";
import { CreateTodo, GetTodos } from "../../../../common/api/Todo";
import { TodosResponse } from "../../../../types/api";
import PlusButton from "../../../atoms/PlusButton";
import { ListContent, NewListContent } from "../../../molecules/ListContent";
import DetailPannel from "../DetailPannel";
import {
  ListContentBox,
  ListPannelContainer,
  ListPannelTitle,
  PannelContainer,
} from "./style";

type Inputs = {
  [key: string]: string;
};

// const TESTDATA = {
//   data: [
//     {
//       title: "hi",
//       content: "hello",
//       id: "z3FGrcRL55qDCFnP4KRtn",
//       createdAt: "2022-07-24T14:15:55.537Z",
//       updatedAt: "2022-07-24T14:15:55.537Z",
//     },
//     {
//       title: "안뇽하세요",
//       content: "메롱메롱",
//       id: "z3FGrcRL55qDCFnP4KRtn",
//       createdAt: "2022-07-24T14:15:55.537Z",
//       updatedAt: "2022-07-24T14:15:55.537Z",
//     },
//   ],
// };

const Pannel = () => {
  const [CurrentTodo, setCurrentTodo] = useState(0);
  const [Visible, setVisible] = useState(false);
  const [Todos, setTodos] = useState<TodosResponse[]>([]);
  const [inputs, setinputs] = useState<Inputs>({});

  // api
  const fetch = async () => {
    try {
      const res = await GetTodos();
      setTodos(res.data.data);
      console.log(res.data.data);
    } catch (error) {
      return error;
    }
  };

  const createTodo = useCallback(async () => {
    try {
      const res = await CreateTodo(inputs);
      console.log(inputs);
      console.log(res);
      fetch();
      setVisible(false);
    } catch (error) {
      return error;
    }
  }, [inputs]);

  useEffect(() => {
    fetch();
  }, []);

  // local handling
  const selectTodo = (index: number) => {
    setCurrentTodo(index);
  };

  const createNewList = () => {
    setVisible(true);
  };

  const handleInputs = (e: React.ChangeEvent<HTMLInputElement>) => {
    setinputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <PannelContainer>
      <ListPannelContainer>
        <ListPannelTitle>할 일 목록</ListPannelTitle>
        <ListContentBox>
          {Todos.length > 0 ? (
            Todos.map((todo, index) => (
              <ListContent
                title={todo.title}
                className={index === CurrentTodo ? "active" : ""}
                onClickFunc={() => selectTodo(index)}
              />
            ))
          ) : (
            <p>리스트가 ㅇ벗음</p>
          )}
          <NewListContent
            visible={Visible}
            onClickFunc={createTodo}
            onChangeFunc={handleInputs}
          />
        </ListContentBox>
        <PlusButton onClickFunc={createNewList} />
      </ListPannelContainer>
      {Todos.length > 0 ? (
        <DetailPannel
          title={Todos[CurrentTodo].title}
          content={Todos[CurrentTodo].content}
        />
      ) : (
        <></>
      )}
    </PannelContainer>
  );
};

export default Pannel;
