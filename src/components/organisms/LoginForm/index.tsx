import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Login } from "../../../common/api/Auth";
import { Button } from "../../atoms/Button/index";
import { Input } from "../../atoms/Input";
import { LoginFormContainer, LoginTitle, SignupText } from "./style";

type Inputs = {
  [key: string]: string;
};

const LoginForm = () => {
  const [inputs, setinputs] = useState<Inputs>({});
  const navigate = useNavigate();

  const handleInputs = (e: React.ChangeEvent<HTMLInputElement>) => {
    setinputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    fetch();
  };

  const fetch = async () => {
    const params = {
      email: inputs.id,
      password: inputs.pw,
    };

    try {
      const res = await Login(params);
      // 토큰이 반환되면 회원가입 완료 후 홈으로 이동
      if (res.data.token) {
        // 로컬 스토리지에 토큰 저장
        window.localStorage.setItem("token", res.data.token);

        alert(`${res.data.message}`);
        navigate("/home");
      }
      console.log(res);
    } catch (error) {
      alert("입력사항을 다시 확인하고 로그인 해주세요.");
      return error;
    }
  };

  return (
    <LoginFormContainer>
      <LoginTitle>TO-DO APP</LoginTitle>
      <Input
        inputName='id'
        placeholder='아이디를 입력하세요. '
        onChangeFunc={handleInputs}
        inputHeight={45}
      />
      <Input
        inputName='pw'
        placeholder='비밀번호를 입력하세요. '
        inputHeight={45}
        onChangeFunc={handleInputs}
        password={true}
      />
      <Button buttonName='submit' onClickFunc={(e) => handleSubmit(e)}>
        로그인
      </Button>
      <Link to='/signup'>
        <SignupText>회원가입</SignupText>
      </Link>
    </LoginFormContainer>
  );
};

export default LoginForm;
