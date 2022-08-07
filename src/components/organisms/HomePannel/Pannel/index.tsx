/* eslint-disable no-restricted-globals */
import React, { useEffect, useState, useCallback } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { CreateTodo, DeleteTodo, GetTodos } from "../../../../common/api/Todo";
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

const Pannel = () => {
  const [Visible, setVisible] = useState(false);
  const [Todos, setTodos] = useState<TodosResponse[]>([]);
  const [inputs, setinputs] = useState<Inputs>({});

  const navigate = useNavigate();
  const [SearchParams, setSearchParams] = useSearchParams();

  // get todos
  const fetch = async () => {
    try {
      const res = await GetTodos();
      setTodos(res.data.data);
    } catch (error) {
      return error;
    }
  };

  // create todo
  const createTodo = useCallback(async () => {
    try {
      await CreateTodo(inputs);
      fetch();
      setVisible(false);
    } catch (error) {
      return error;
    }
    // create 후 input 비우기
  }, [inputs]);

  // delete todo
  const deleteTodo = useCallback(async (todoId?: string) => {
    if (confirm("해당 할 일을 삭제하시겠습니까?")) {
      try {
        await DeleteTodo(todoId);
        fetch();
      } catch (error) {
        return error;
      }
    } else {
      return;
    }
  }, []);

  useEffect(() => {
    fetch();
  }, []);

  // local handling
  const selectTodo = (todoId?: string) => {
    navigate({
      search: `?todo=${todoId}`,
    });
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
            Todos.map((todo) => (
              <ListContent
                key={todo.id}
                title={todo.title}
                className={todo.id === SearchParams.get("todo") ? "active" : ""}
                onClickFunc={() => selectTodo(todo.id)}
                deleteFunc={() => deleteTodo(todo.id)}
              />
            ))
          ) : (
            <p>새로운 할 일을 생성해보세요.</p>
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
        <DetailPannel todoId={SearchParams.get("todo")} />
      ) : (
        <></>
      )}
    </PannelContainer>
  );
};

export default Pannel;
