import styled from "styled-components";
import COLOR from "../../../styles/common/color";
import { FONT_STYLES } from "../../../styles/common/font-style";

const LoginFormContainer = styled.div`
  width: 400px;
  text-align: center;

  input:not(:last-child) {
    margin-bottom: 10px;
  }
`;

const LoginTitle = styled.p`
  ${FONT_STYLES.P_B}
  font-size: 40px;
  padding-bottom: 50px;
  color: ${COLOR.BLACK_0};
`;

const SignupText = styled.p`
  ${FONT_STYLES.P_B}
  padding-top: 30px;
  color: ${COLOR.BLACK_0};

  :hover {
    cursor: pointer;
  }
`;

export { LoginFormContainer, LoginTitle, SignupText };
