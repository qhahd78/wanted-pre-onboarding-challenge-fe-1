import styled from "styled-components";
import COLOR from "../../../styles/common/color";
import { FONT_STYLES } from "../../../styles/common/font-style";

const DetailContentContainer = styled.div`
  width: 100%;
  padding: 30px;
`;

const DetailTitleBox = styled.div`
  display: flex;
  align-items: center;
`;

const DetailTitle = styled.p`
  ${FONT_STYLES.P_EB}
  font-size: 30px;
`;

const DetailContentBox = styled.div`
  padding: 30px 0;
`;

const DetailDate = styled.p`
  ${FONT_STYLES.P_R}
  color: #00266d;
  padding-left: 20px;
`;

const DetailContentText = styled.p`
  ${FONT_STYLES.P_M}
  font-size: 20px;
`;

const DetailEditButton = styled.p`
  ${FONT_STYLES.P_B}
  font-size: 20px;
  margin-left: auto;

  :hover {
    cursor: pointer;
  }
`;

const StyledTitleTextBox = styled.textarea`
  ${FONT_STYLES.P_M}
  width: 1000px;
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

export {
  DetailContentContainer,
  DetailTitle,
  DetailContentText,
  DetailDate,
  DetailContentBox,
  DetailTitleBox,
  DetailEditButton,
  StyledContentTextBox,
  StyledTitleTextBox,
};
