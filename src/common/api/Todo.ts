import Token from "../../hooks/getToken";
import Api from "./Api";

export const GetTodos = async (param?: any) => {
  const response = await Api({
    url: "/todos",
    token: Token(),
  });
  return response;
};

export const GetTodoById = async (param: any) => {
  const response = await Api({
    url: `/todos/${param}`,
    token: Token(),
  });
  return response;
};

export const CreateTodo = async (param: any) => {
  const response = await Api({
    url: "/todos",
    type: "POST",
    param,
    token: Token(),
  });
  return response;
};
