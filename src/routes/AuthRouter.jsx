import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import Token from "../hooks/getToken";

const AuthRouter = () => {
  const token = Token();
  return !token ? <Navigate to='/home' /> : <Outlet />;
};

export default AuthRouter;
