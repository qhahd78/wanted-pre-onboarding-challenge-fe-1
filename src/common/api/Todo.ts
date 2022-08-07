import Token from "../../hooks/getToken";
import Api from "./Api";

// todos
export const GetTodos = async () => {
  const response = await Api({
    url: "/todos",
    token: Token(),
  });
  return response;
};

// todo detail
export const GetTodoById = async (param: any) => {
  const response = await Api({
    url: `/todos/${param}`,
    token: Token(),
  });
  return response;
};

// create todo
export const CreateTodo = async (param: any) => {
  const response = await Api({
    url: "/todos",
    type: "POST",
    param,
    token: Token(),
  });
  return response;
};

// delete todo
export const DeleteTodo = async (param: any) => {
  const response = await Api({
    url: `/todos/${param}`,
    type: "DELETE",
    token: Token(),
  });
  return response;
};

export const UpdateTodo = async (id: any, param: any) => {
  const response = await Api({
    url: `/todos/${id}`,
    type: "PUT",
    param,
    token: Token(),
  });
  return response;
};
