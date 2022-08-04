import React from "react";
import Button from "../../atoms/Button";
import Input from "../../atoms/Input";
import { SignupFormContainer, SignupTitle } from "./style";

const SignupForm = () => {
  return (
    <SignupFormContainer>
      <SignupTitle>회원가입</SignupTitle>
      <Input
        inputName='id'
        placeholder='아이디를 입력하세요. '
        inputHeight={45}
      />
      <Input
        inputName='id'
        password={true}
        placeholder='비밀번호를 입력하세요. '
        inputHeight={45}
      />
      <Button buttonName='submit'>회원가입</Button>
    </SignupFormContainer>
  );
};

export default SignupForm;
