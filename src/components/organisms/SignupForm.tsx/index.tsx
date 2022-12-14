import React, { useCallback, useEffect, useState } from "react";
import { Button } from "../../atoms/Button/index";
import { Input } from "../../atoms/Input";
import { SignupFormContainer, SignupTitle } from "./style";
import { Signup } from "../../../common/api/Auth";
import { useNavigate } from "react-router-dom";

type Inputs = {
  [key: string]: string;
};

const SignupForm = () => {
  const [inputs, setinputs] = useState<Inputs>({});
  const [IsDisabled, setIsDisabled] = useState(true);
  const [IsValid, setIsValid] = useState(false);
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

  const checkDisabled = () => {
    if (IsValid) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  };

  const checkValidation = () => {
    const validEmail = /\w+@\w+\.\w+(\. \w+)?/;
    const validPw = /.{7,}/;

    if (
      validEmail.test(inputs.id) &&
      validPw.test(inputs.pw) &&
      inputs.id &&
      inputs.pw
    ) {
      checkDisabled();
      setIsValid(true);
    } else {
      checkDisabled();
      setIsValid(false);
    }
  };

  useEffect(() => {
    checkValidation();
  }, [inputs.id, inputs.pw]);

  useEffect(() => {
    checkDisabled();
  }, [checkValidation]);

  const fetch = async () => {
    const params = {
      email: inputs.id,
      password: inputs.pw,
    };

    try {
      const res = await Signup(params);
      // 토큰이 반환되면 회원가입 완료 후 홈으로 이동
      if (res.data.token) {
        // 로컬 스토리지에 토큰 저장
        window.localStorage.setItem("token", res.data.token);

        alert(`${res.data.message}`);
        navigate("/home");
      }
    } catch (error) {
      alert("입력사항을 다시 확인하고 회원가입 해주세요.");
      return error;
    }
  };

  return (
    <SignupFormContainer>
      <SignupTitle>회원가입</SignupTitle>
      <Input
        inputName='id'
        placeholder='아이디를 입력하세요. '
        inputHeight={45}
        onChangeFunc={handleInputs}
      />
      <Input
        inputName='pw'
        placeholder='비밀번호를 입력하세요. '
        inputHeight={45}
        onChangeFunc={handleInputs}
        password={true}
      />
      <Button
        buttonName='submit'
        onClickFunc={handleSubmit}
        idDisabled={IsDisabled}
      >
        회원가입
      </Button>
    </SignupFormContainer>
  );
};

export default SignupForm;
