import styled from "styled-components";
import COLOR from "../../../styles/common/color";

const PlusContainer = styled.div`
  width: 70px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${COLOR.PURPLE_0};
  border-radius: 50%;
  padding: 15px;
  box-shadow: rgba(67, 71, 85, 0.27) 0px 0px 0.25em,
    rgba(90, 125, 188, 0.05) 0px 0.25em 1em;
  :hover {
    cursor: pointer;
  }
`;

export { PlusContainer };
