import React, { useEffect, useState } from "react";
import { GetTodoById, UpdateTodo } from "../../../../common/api/Todo";
import DetailContent from "../../../molecules/DetailContent";
import { DetailPannelContainer } from "./style";

interface DetailPannelProperties {
  todoId?: string | null;
}

const DetailPannel = ({ todoId }: DetailPannelProperties) => {
  const [Todo, setTodo] = useState({});

  const fetch = async () => {
    try {
      const res = await GetTodoById(todoId);
      setTodo(res.data.data);
      console.log(Todo);
    } catch (error) {
      return error;
    }
  };

  useEffect(() => {
    fetch();
  }, [todoId]);

  const updateTodo = async (todoData: any) => {
    const res = await UpdateTodo(todoId, todoData);
    console.log(res);
  };

  return (
    <DetailPannelContainer>
      <DetailContent {...Todo} updateFunc={updateTodo} />
    </DetailPannelContainer>
  );
};

export default DetailPannel;
