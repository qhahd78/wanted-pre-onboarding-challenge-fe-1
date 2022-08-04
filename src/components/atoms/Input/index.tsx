import React from "react";
import { StyledInput } from "./style";

interface InputProperties {
  inputName: string;
  password?: boolean;
  inputHeight?: number;
  placeholder?: string;
  onChangeFunc?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({
  inputName,
  onChangeFunc,
  inputHeight,
  placeholder,
  password = false,
}: InputProperties) => {
  return password ? (
    <StyledInput
      name={inputName}
      onChange={onChangeFunc}
      type='password'
      inputHeight={inputHeight}
      placeholder={placeholder}
    />
  ) : (
    <StyledInput
      name={inputName}
      onChange={onChangeFunc}
      type='text'
      inputHeight={inputHeight}
      placeholder={placeholder}
    />
  );
};

export default Input;
