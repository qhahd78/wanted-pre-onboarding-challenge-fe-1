import Api from "./Api";

const Login = async (param: any) => {
  const response = await Api({
    url: "users/login",
    type: "POST",
    param,
  });
  return response;
};

const Signup = async (param: any) => {
  const response = await Api({
    url: "users/create",
    type: "POST",
    param,
  });
  return response;
};

export { Login, Signup };
