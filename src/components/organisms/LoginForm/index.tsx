import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../atoms/Button/index";
import Input from "../../atoms/Input";
import { LoginFormContainer, LoginTitle, SignupText } from "./style";

const LoginForm = () => {
  return (
    <LoginFormContainer>
      <LoginTitle>TO-DO APP</LoginTitle>
      <Input
        inputName='id'
        placeholder='아이디를 입력하세요. '
        inputHeight={45}
      />
      <Input
        inputName='pw'
        password={true}
        placeholder='비밀번호를 입력하세요. '
        inputHeight={45}
      />
      <Link to='/home'>
        <Button buttonName='submit'>로그인</Button>
      </Link>
      <Link to='/signup'>
        <SignupText>회원가입</SignupText>
      </Link>
    </LoginFormContainer>
  );
};

export default LoginForm;
