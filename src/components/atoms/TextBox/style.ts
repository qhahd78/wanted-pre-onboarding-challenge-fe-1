import styled from "styled-components";
import COLOR from "../../../styles/common/color";
import { FONT_STYLES } from "../../../styles/common/font-style";

const StyledTitleTextBox = styled.textarea`
  ${FONT_STYLES.P_M}
  width: 700px;
  height: 40px;
  font-size: 20px;
  padding-left: 10px;
  resize: none;
  border: none;
  border-bottom: 2px solid #aaa9bc;

  :focus {
    outline: none;
    border-bottom: 2px solid ${COLOR.PURPLE_0};
  }
`;

const StyledContentTextBox = styled.textarea`
  ${FONT_STYLES.P_M}
  width: 900px;
  height: 80vh;
  font-size: 20px;
  padding: 10px;
  resize: none;
  border: none;

  :focus {
    outline: none;
  }
`;

export { StyledTitleTextBox, StyledContentTextBox };
