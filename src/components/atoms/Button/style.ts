import styled from "styled-components";
import COLOR from "../../../styles/common/color";
import { FONT_STYLES } from "../../../styles/common/font-style";

const StyledButton = styled.button<{
  buttonHeight?: number;
}>`
  ${FONT_STYLES.P_M}
  width: 100%;
  height: ${({ buttonHeight }) =>
    buttonHeight ? `${buttonHeight}px` : "50px"};
  font-size: 20px;
  background-color: #a2a7ff;
  color: #ffffff;
`;

const StyledDeleteButton = styled.button<{
  buttonHeight?: number;
}>`
  ${FONT_STYLES.P_B}
  width: 100%;
  height: ${({ buttonHeight }) =>
    buttonHeight ? `${buttonHeight}px` : "50px"};
  font-size: 20px;
  background-color: ${COLOR.RED_0};
  color: white;
  border-radius: 5px;
`;

export { StyledButton, StyledDeleteButton };
