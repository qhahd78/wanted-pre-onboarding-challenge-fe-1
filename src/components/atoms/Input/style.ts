import styled from "styled-components";
import COLOR from "../../../styles/common/color";

const StyledInput = styled.input<{
  inputHeight?: number;
}>`
  width: 100%;
  height: ${({ inputHeight }) => (inputHeight ? `${inputHeight}px` : "30px")};
  display: block;
  font-size: 17px;
  border: 1px solid ${COLOR.GRAY_0};
  padding: 15px;
  color: ${COLOR.BLACK_0};

  ::placeholder {
    color: #aaa9bc;
  }
  :focus {
    outline: ${COLOR.PURPLE_0};
    border: 1px solid ${COLOR.PURPLE_0};
  }
`;

export { StyledInput };
