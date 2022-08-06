import React, { useEffect, useState } from "react";
import { GetTodoById } from "../../../../common/api/Todo";
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
    } catch (error) {
      return error;
    }
  };

  useEffect(() => {
    fetch();
  }, [todoId]);

  return (
    <DetailPannelContainer>
      <DetailContent {...Todo} />
    </DetailPannelContainer>
  );
};

export default DetailPannel;
