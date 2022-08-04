import styled from "styled-components";
import { FONT_STYLES } from "../../../styles/common/font-style";

const ListContentContainer = styled.div`
  ${FONT_STYLES.P_M}
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 20px;
  padding: 0px 20px;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;

  & > svg {
    :hover {
      cursor: pointer;
    }
  }
`;

const TodoTitle = styled.p`
  ${FONT_STYLES.P_M}
`;

const TodoDate = styled.p`
  ${FONT_STYLES.P_R}
  font-size: 14px;
  color: #00266d;
  padding-top: 8px;
`;

export { ListContentContainer, TodoTitle, TodoDate };
