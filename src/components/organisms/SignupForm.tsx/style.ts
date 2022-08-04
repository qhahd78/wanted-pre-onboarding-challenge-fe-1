import styled from "styled-components";
import { LoginTitle } from "../LoginForm/style";

const SignupFormContainer = styled.div`
  width: 400px;
  text-align: center;

  input:not(:last-child) {
    margin-bottom: 10px;
  }
`;

const SignupTitle = styled(LoginTitle)``;

export { SignupFormContainer, SignupTitle };
