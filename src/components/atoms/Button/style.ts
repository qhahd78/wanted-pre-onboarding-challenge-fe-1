import styled from "styled-components";
import COLOR from "../../../styles/common/color";
import { FONT_STYLES } from "../../../styles/common/font-style";

const StyledButton = styled.button<{
  buttonHeight?: number;
  disabled?: boolean;
}>`
  ${FONT_STYLES.P_M}
  width: 100%;
  height: ${({ buttonHeight }) =>
    buttonHeight ? `${buttonHeight}px` : "50px"};
  font-size: 20px;
  background-color: ${({ disabled }) => (disabled ? `#BAB8C9` : "#a2a7ff")};
  color: ${({ disabled }) => (disabled ? "" : "#ffffff")};

  :hover {
    cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  }
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
