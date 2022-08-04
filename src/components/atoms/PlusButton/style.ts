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
  :hover {
    cursor: pointer;
  }
`;

export { PlusContainer };
