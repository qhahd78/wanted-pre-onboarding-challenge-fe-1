import Token from "../../hooks/getToken";
import Api from "./Api";

const GetTodos = async (param?: any) => {
  const response = await Api({
    url: "/todos",
    token: Token(),
  });
  // console.log(response);
  return response;
};

const CreateTodo = async (param: any) => {
  const response = await Api({
    url: "/todos",
    type: "POST",
    param,
    token: Token(),
  });
  return response;
};

export { GetTodos, CreateTodo };
